import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import Link from "next/link";

type Params = {
	params: {
		userId: string
	}
}

export async function generateMetadata({params: {userId}}: Params): Promise<Metadata> {


	const userData: Promise<User> = getUser(userId);
	const user: User = await userData;

	return {
		title: user.name,
		description: `Posts by ${user.name}`
	}
}

export default async function UserPage({params: {userId}}: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPost: Promise<Post[]> = getUserPosts(userId);
  
//   const [user, posts] = await Promise.all([userData, userPost]);
  const user = await userData;

  return (
	<>
		<h1>Home Page</h1>
		<p>
			<Link href="/users">Users</Link>
		</p>
		<h2>{user.name}</h2>
		<br/>
		<Suspense fallback={<h2>Loading...</h2>}>
			{/* @ts-expect-error Server Component */}
			<UserPosts promise={userPost} />
		</Suspense>
		
	</>
  )
}
