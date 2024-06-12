// "use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form_input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  async function handleForm(formData: FormData) {
    "use server";
    console.log(formData.get("email"), formData.get("password"));
    console.log("i run in the server");
  }

  // 이 user server는 서버에서만 실행되도록 만듬
  //route 핸들러를 만들 필요없고 post request핸들러도 필요없음
  //request의 body를 읽을 필요도 없음
  //아무것도 fetch할 필요없음
  //nextJS가 사실은 POST method를 위한 route 핸들러를 만든다는뜻

  // const onClick = async () => {
  //   const response = await fetch("/www/users", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: "kate",
  //       password: "1234",
  //     }),
  //   });
  //   console.log(await response.json()); //server가 /www/users
  //   //url을 통해 돌려준 json 읽는것
  // };

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="password"
          required
          errors={[]}
        />
      </form>
      <span onClick={onClick}>
        <FormButton loading={false} text="Log in" />
      </span>
      <SocialLogin />
    </div>
  );
}
