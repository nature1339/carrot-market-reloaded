"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form_input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
        />
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
        />

        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
function useFormState(
  createAccount: (prevState: any, formdata: FormData) => Promise<void>,
  arg1: null
): [any, any] {
  throw new Error("Function not implemented.");
}
