import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex w-7xl max-w-full flex-col items-center justify-center">
      <h2 className="text-xl/[150%] font-medium md:text-2xl">
        Manage your company
      </h2>
      <h1 className="text-3xl/[150%] font-bold text-blue-800 md:text-4xl">
        Services, Customers
      </h1>

      <Image
        src="/assets/hero-image.svg"
        alt="Dev Control from hero image"
        width={600}
        height={400}
        className="mt-11 max-w-xs md:max-w-xl"
      />
    </main>
  );
}
