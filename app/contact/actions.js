"use server";

import { messages } from "@/lib/db";

export async function sendMessageAction(_previousState, formData) {
  const message = {
    id: Date.now().toString(),
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  messages.push(message);
  return { success: true };
}