import Link from "next/link";

export default function Navbar(){
	return (
		<nav className="space-x-3 text-4xl my-4">
			<Link href ="/">Home</Link>
			<Link href="/chapter1">chapter1</Link>
			<Link href="/chapter1/about">About</Link>
			
		</nav>
	)
}