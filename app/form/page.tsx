"use client";

import { useActionState } from "react";
import createPost from "@/app/actions";

const initialState = {
  success: false,
  message: "",
};

export default function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState);

  return (
    <form action={formAction}>
      <input name="title" placeholder="Title" />

      <textarea name="content" placeholder="Content" />

      <button disabled={pending}>Create</button>

      {state.message && <p>{state.message}</p>}
    </form>
  );
}
