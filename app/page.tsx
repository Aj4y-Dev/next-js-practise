import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import HookCounter from "@/components/HookCounter";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Hero />
      <CourseCard />
      <Counter />
      <HookCounter />
    </>
  );
}
