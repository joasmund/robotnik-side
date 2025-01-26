import { Client } from '@notionhq/client'
import { DatabaseQueryFilter, BlockObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({ auth: process.env.NOTION_API_KEY as string })
const DATABASE_ID = process.env.NOTION_DATABASE_ID as string

type FetchPagesParams = {
  slug?: string
  tag?: string
}

export const fetchPages = async ({ slug, tag }: FetchPagesParams): Promise<QueryDatabaseResponse> => {
  const and: DatabaseQueryFilter[] = [
    {
      property: 'slug',
      rich_text: {
        is_not_empty: true
      }
    }
  ]

  if (process.env.VERCEL_ENV === 'production') {
    and.push({
      property: 'isPublic',
      checkbox: {
        equals: true
      }
    })
  }

  if (slug) {
    and.push({
      property: 'slug',
      rich_text: {
        equals: slug,
      }
    })
  }

  if (tag) {
    and.push({
      property: 'tags',
      multi_select: {
        contains: tag,
      }
    })
  }

  return await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and
    },
    sorts: [
      {
        property: 'published',
        direction: 'descending'
      }
    ]
  })
}

type BlockResponse = {
    results: BlockObjectResponse[]
    next_cursor: string | null
   }
   
   export const fetchBlocksByPageId = async (pageId: string) => {
    const data: BlockObjectResponse[] = []
    let cursor: string | undefined = undefined
   
    while (true) {
      const { results, next_cursor }: BlockResponse = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor
      })
   
      data.push(...results)
      if (!next_cursor) break
      cursor = next_cursor
    }
   
    return { results: data }
   }