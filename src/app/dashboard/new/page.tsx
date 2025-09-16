import Link from "next/link";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { Customer } from "@/utils/customer.type";

import { Button } from "../components/button";

const NewTicket = async () => {
  const session = await getServerSession(authOptions);
  const customers: Customer[] = await prismaClient.customer.findMany({
    where: { userId: session?.user.id as string },
  });
  const hasAvailableCustomers = !!customers.length;

  return (
    <main>
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="rounded-md bg-gray-900 px-4 py-1 text-sm text-white"
        >
          Voltar
        </Link>

        <h1 className="text-2xl font-bold">Novo chamado</h1>
      </div>

      <form className="mt-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Nome do chamado</label>
          <input
            type="text"
            placeholder="Insira o nome do chamado"
            disabled={!hasAvailableCustomers}
            required
            className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm outline-blue-500 placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-75"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Descreva o problema</label>
          <textarea
            rows={5}
            disabled={!hasAvailableCustomers}
            placeholder="Insira uma descrição do problema"
            className="w-full resize-none rounded-md border border-zinc-200 px-3 py-2 text-sm outline-blue-500 placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-75"
          ></textarea>
        </div>

        {hasAvailableCustomers && (
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Selecione o cliente</label>
            <select className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm outline-blue-500">
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {!hasAvailableCustomers && (
          <p className="text-sm font-semibold text-zinc-600">
            Você não possui nenhum cliente.{" "}
            <Link
              href="/dashboard/customers"
              className="text-blue-800 hover:underline"
            >
              Cadastre um novo cliente
            </Link>
          </p>
        )}

        <Button type="submit" disabled={!hasAvailableCustomers} size="md">
          Cadastrar
        </Button>
      </form>
    </main>
  );
};

export default NewTicket;
