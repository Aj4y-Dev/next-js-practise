"use server";

export default async function createPost(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  const res = await fetch("https://api.vercel.app/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });

  if (!res.ok) {
    return {
      success: false,
      message: "Failed to create post",
    };
  }

  return {
    success: true,
    message: "Post created successfully!",
  };
}
