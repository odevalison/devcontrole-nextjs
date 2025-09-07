"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

export async function getCustomers() {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    throw new Error("Unauthorized");
  }
  const userCustomers = await prismaClient.customer.findMany({
    where: { userId: session.user.id },
    orderBy: { created_at: "desc" },
  });
  if (!userCustomers) {
    return [];
  }
  return userCustomers;
}
