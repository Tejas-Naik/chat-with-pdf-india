'use server';

import { generateEmbeddingsInPineconeVectorStore } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const maxDuration = 60;
export async function generateEmbeddings(docId: string){
    auth().protect(); // protect this route with clerk

    // Turn a pdf into embeddings
    await generateEmbeddingsInPineconeVectorStore(docId);

    revalidatePath('/dashboard')

    return {completed: true};
}