import Image from "next/image";

import { Container } from "@/components/container";

export default function HomePage() {
  return (
    <Container>
      <main className="flex min-h-[calc(100dvh-80px)] flex-col items-center justify-center">
        <h2 className="text-xl/[150%] font-medium md:text-2xl/[150%]">
          Gerencie sua empresa
        </h2>
        <h1 className="text-3xl/[150%] font-bold text-blue-800 md:text-4xl/[150%]">
          Atendimentos, Clientes
        </h1>

        <Image
          src="/assets/hero-image.svg"
          alt="Dev Control from hero image"
          width={600}
          height={400}
          className="mt-11 max-w-xs md:max-w-xl"
        />
      </main>
    </Container>
  );
}
