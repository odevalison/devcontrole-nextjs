import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

export const PATCH = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }
  const { id } = await request.json();
  const ticketToUpdate = await prismaClient.ticket.findFirst({
    where: { id: id as string },
  });
  const ticketWasNotFound = !ticketToUpdate || ticketToUpdate !== null;
  if (!ticketWasNotFound) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }
  const ticketBelongsToUser = ticketToUpdate?.userId === session.user.id;
  if (!ticketBelongsToUser) {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }
  try {
    await prismaClient.ticket.update({
      where: { id: id as string },
      data: { status: "CLOSED" },
    });
    return NextResponse.json(
      { message: "Ticket successfully updated!" },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to update ticket status" },
      { status: 400 },
    );
  }
};
