// app/articles/[slug]/page.tsx
import ArticleMeta from '@/components/ui/ArticleMeta'
import Layout from '@/components/ui/Layout'
import { fetchBlocksByPageId, fetchPages } from '@/lib/notion'
import { getText } from '@/lib/property'
import NotionBlocks from 'notion-block-renderer'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export async function generateStaticParams() {
    const { results } = await fetchPages({})
    return results.map((page) => {
      if ('properties' in page && 
          'slug' in page.properties && 
          'rich_text' in page.properties.slug &&
          Array.isArray(page.properties.slug.rich_text)) {
        return {
          slug: getText(page.properties.slug.rich_text)
        }
      }
      return { slug: '' }
    })
   }

async function getPageData(slug: string) {
  const { results } = await fetchPages({ slug })
  const page = results[0]
  const { results: blocks } = await fetchBlocksByPageId(page.id)
  return { page, blocks }
}

export default async function Article({ params }: { params: { slug: string } }) {
  const { page, blocks } = await getPageData(params.slug)

  return (
    <Layout>
      <article className='w-full'>
        <div className='my-12'>
          <ArticleMeta page={page} />
        </div>
        <div className='my-12'>
          <NotionBlocks
            blocks={blocks}
            isCodeHighlighter={true}
            syntaxHighlighterCSS={nord}
          />
        </div>
      </article>
    </Layout>
  )
}