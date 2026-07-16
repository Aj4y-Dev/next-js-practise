import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h2>STEM Innovation Nepal</h2>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
