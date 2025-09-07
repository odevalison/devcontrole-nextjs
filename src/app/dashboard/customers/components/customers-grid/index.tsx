import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

import { CardCustomer } from "../card-customer";

export async function CustomersGrid() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }
  const customers = await prismaClient.customer.findMany({
    where: { userId: session.user.id },
    orderBy: { created_at: "desc" },
  });

  return (
    <>
      {customers?.length ? (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {customers?.map((customer) => (
            <CardCustomer key={customer.id} customer={customer} />
          ))}
        </section>
      ) : (
        <p className="text-sm font-medium text-zinc-500">
          Você não possui nenhum cliente cadastrado.
        </p>
      )}
    </>
  );
}
