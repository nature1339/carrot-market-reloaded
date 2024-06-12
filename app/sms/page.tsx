import FormButton from "@/components/form-btn";
import FormInput from "@/components/form_input";

export default function SMSLogIn() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Veryfy your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="Phone number"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="password"
          required
          errors={[]}
        />

        <FormButton loading={false} text="Veryfy " />
      </form>
    </div>
  );
}
