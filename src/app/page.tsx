import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      {session?.user ? <SignOut /> : <SignIn />}
    </main>
  );
}
