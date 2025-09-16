import Link from "next/link";

const NewTicket = () => {
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
            required
            className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm outline-blue-500 placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Descreva o problema</label>
          <textarea
            rows={5}
            placeholder="Insira uma descrição do problema"
            className="w-full resize-none rounded-md border border-zinc-200 px-3 py-2 text-sm outline-blue-500 placeholder:text-sm"
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Selecione o cliente</label>
          <select className="w-full resize-none rounded-md border border-zinc-200 px-3 py-2 text-sm outline-blue-500 placeholder:text-sm">
            <option value="cliente-1">Cliente 1</option>
          </select>
        </div>
      </form>
    </main>
  );
};

export default NewTicket;
