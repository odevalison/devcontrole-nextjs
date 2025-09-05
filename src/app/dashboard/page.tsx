import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    redirect("/");
  }

  return (
    <Container>
      <main>
        <h1>Dashboard page</h1>
      </main>
    </Container>
  );
}
