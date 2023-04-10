// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Tweet } from '@/typing'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity' 

const feedQuery = groq`*[_type == 'tweet' && !blockTweet] | order(_createdAt desc) {
    _id,
   ...
  }`
type Data = {
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const tweets : Tweet[] = await sanityClient.fetch(feedQuery)
    console.log(tweets);
    
  res.status(200).json({ tweets })
}
