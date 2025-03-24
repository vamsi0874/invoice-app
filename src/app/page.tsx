import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  // const { user } = useAuth();
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invoicipedia</h1>
      <p>
        <Button asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </p>
    </main>
  );
}
