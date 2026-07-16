import type { Post } from "@/types/post";

export default async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://api.vercel.app/blog");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();

  return posts;
}
