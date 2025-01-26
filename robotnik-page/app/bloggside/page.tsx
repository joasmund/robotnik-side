"use client"; 
import Layout from '@/components/ui/Layout'
import Card from '@/components/ui/Cards'
import { fetchPages } from '@/lib/notion'

async function getPages() {
  const { results } = await fetchPages({})
  return results || []
}

export default async function Articles() {
  const pages = await getPages()
  
  return (
    <Layout>
      <div className='pt-5'>
        <div className='grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12'>
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  )
}