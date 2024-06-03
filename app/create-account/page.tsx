import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
      <FormInput
          type="text"
          placeholder="Username"
          required
          errors={["username is too short"]}
        />
      <FormInput
          type="email"
          placeholder="Email"
          required
          errors={["username is too short"]}
        />
      <FormInput
          type="Confirm password"
          placeholder="Confirm Password"
          required
          errors={["username is too short"]}
        />
      <FormInput
          type="text"
          placeholder="Username"
          required
          errors={["username is too short"]}
        />
        <button className="primary-btn h-10">Create account</button>
      </form>
      <div className="w-full h-px bg-neutral-300" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
        console.log("🚀 ~ CreateAccount ~ <FormInput
          type="text"
          placeholder="Username"
          required
          errors={["username is too short"]}
        />:", <FormInput
          type="text"
          placeholder="Username"
          required
          errors={["username is too short"]}
        />)
