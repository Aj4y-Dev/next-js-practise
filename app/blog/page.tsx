import getPosts from "@/services/post";

export default async function Blog() {
  const posts = await getPosts();

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
