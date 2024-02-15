import { Pinecone } from "@pinecone-database/pinecone"
import dotenv from "dotenv"

dotenv.config()

if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
  throw new Error('Pinecone environment or api key missing')
}

async function initPinecone() {
  try {
    const pineconeConfig = {
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT,
    }
    return new Pinecone(pineconeConfig)
  } catch (error) {
    throw new Error('Failed to initialize Pinecone Client')
  }
}

const pinecone = initPinecone()

export default pinecone