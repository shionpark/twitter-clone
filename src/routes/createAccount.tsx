import { useState } from "react";
import { useForm } from "react-hook-form";

interface CreateForm {
  email: string;
  password: string;
}

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateForm>();

  const onSubmit = (validForm: CreateForm) => {
    console.log(validForm);
    setLoading(true);
  };

  return (
    <div className="WRAPPER h-full w-96 flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold">회원가입</h1>
      <form
        className="mt-12 flex flex-col gap-2.5 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("email", { required: true })}
          className="py-2.5 px-5 rounded-2xl w-full text-xl text-gray-900"
          placeholder="Email"
          required
          type="email"
        />
        <input
          {...register("password", { required: true })}
          className="py-2.5 px-5 rounded-2xl w-full text-xl text-gray-900"
          placeholder="Password"
          required
          type="password"
        />
        {isLoading ? (
          <button className="bg-white text-black py-2.5 px-5 rounded-2xl w-full text-xl hover:opacity-80">
            Loading...
          </button>
        ) : (
          <button className="bg-white text-black py-2.5 px-5 rounded-2xl w-full text-xl hover:opacity-80">
            Join
          </button>
        )}
      </form>
      {errors?.email ? <span>{errors?.email?.message}</span> : null}
      {errors?.password ? <span>{errors?.password?.message}</span> : null}
    </div>
  );
}
