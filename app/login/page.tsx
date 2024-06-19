"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form_input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
function useFormStatus(): { pending: any } {
  throw new Error("Function not implemented.");
}
