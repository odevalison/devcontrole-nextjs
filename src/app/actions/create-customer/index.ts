"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

import { CreateCustomerData, createCustomerSchema } from "./schema";

export async function createCustomer(data: CreateCustomerData) {
  createCustomerSchema.parse(data);
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }
  await prismaClient.customer.create({
    data: { ...data, userId: session.user.id },
  });
  revalidatePath("/src/app/dashboard/customers");
}
