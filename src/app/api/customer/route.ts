import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const customerData = await request.json();
  try {
    await prismaClient.customer.create({
      data: {
        ...customerData,
        address: customerData.address ?? "",
        userId: session.user.id,
      },
    });
    return NextResponse.json(
      { message: "Customer successfully created" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed on create customer" },
      { status: 400 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const customerId = request.nextUrl.searchParams.get("id");
  if (!customerId) {
    return NextResponse.json({ error: "Customer not found" }, { status: 400 });
  }
  try {
    const customerToDelete = await prismaClient.customer.findUnique({
      where: { id: customerId },
      include: { tickets: true },
    });
    if (!customerToDelete) {
      return NextResponse.json(
        { error: "Customer not founded" },
        { status: 400 },
      );
    }
    const customerToDeleteHasOpenTickets = customerToDelete.tickets.length;
    if (!!customerToDeleteHasOpenTickets) {
      return NextResponse.json({
        error: "Customer cannot be removed with opened tickets",
      });
    }
    await prismaClient.customer.delete({
      where: { id: customerToDelete.id },
      include: { tickets: true },
    });
    return NextResponse.json(
      { message: "Customer successfully deleted!" },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
  }
}
