"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

import { DeleteCustomerSchema, deleteCustomerSchema } from "./schema";

export async function deleteCustomer(data: DeleteCustomerSchema) {
  deleteCustomerSchema.parse(data);
  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    throw new Error("Unauthorized!");
  }
  const customerToDelete = await prismaClient.customer.findUnique({
    where: { id: data.customerId },
  });
  if (!customerToDelete) {
    throw new Error("Customer not found");
  }
  const customerBelongsToUser = customerToDelete.userId === session.user.id;
  if (!customerBelongsToUser) {
    throw new Error("Unauthorized");
  }
  await prismaClient.customer.delete({ where: { id: customerToDelete.id } });
  revalidatePath("/src/app/dashboard/customers");
}
