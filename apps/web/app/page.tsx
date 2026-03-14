import { prisma } from "@repo/db"

export default async function Home() {
  const user = await prisma.user.findFirst()

  console.log("User from DB:", user)

  return (
    <div>
      <h1>hello</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}