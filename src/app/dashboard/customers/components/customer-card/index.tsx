import { Button } from "@/app/dashboard/components/button";

export function CustomerCard() {
  return (
    <>
      <article className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 shadow-md transition *:border-zinc-200 hover:scale-105">
        <div className="flex items-center justify-between text-sm">
          <strong>Nome:</strong>
          <p>Mercado Livre</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <strong>E-mail:</strong>
          <p>mercado@livre.com</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <strong>Número:</strong>
          <p>(15) 99888-8678</p>
        </div>
        <Button variant="danger" className="w-full">
          Deletar
        </Button>
      </article>
    </>
  );
}
