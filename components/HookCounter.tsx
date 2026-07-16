"use client";

import { useCounter } from "@/hooks/useCounter";

export default function HookCounter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>clear</button>
    </div>
  );
}
