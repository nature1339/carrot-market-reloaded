"use server";

import { z } from "zod";

const checkUsername = (username: string) => !username.includes("photato");

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "way too short!!!")
      .max(10, "That is too long")
      .refine(checkUsername, "No potatoes allowed"), // photato를 포함하면 에러메세지 return하라
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })

  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
