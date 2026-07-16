import { Post } from "@/types/post";

export default async function Blog() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await data.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}, {post.content}, {post.author}, {post.date},{" "}
          {post.category}
        </li>
      ))}
    </ul>
  );
}
