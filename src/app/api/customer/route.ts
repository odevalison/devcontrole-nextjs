import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email, phone, address } = await request.json();

  try {
    await prismaClient.customer.create({
      data: {
        name,
        email,
        phone,
        address: address ?? "",
        userId: session.user.id,
      },
    });

    return NextResponse.json(
      { message: "Customer successfully created" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
    return NextResponse.json({ error: "Failed on create customer" });
  }
}
