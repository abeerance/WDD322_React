"use client";

import Form from "@/components/forms/form";
import FormButton from "@/components/forms/form-button";
import FormInput from "@/components/forms/form-input";
import MainPage from "@/components/pages/main-page";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginInputs = {
  username: string;
  password: string;
};

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      // communicate with the signIn function of next-auth
      const response = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
      });
      console.log(response);
    } catch (error) {}
  };

  const { data: session } = useSession();
  console.log(session);

  return (
    <MainPage additionalClasses='items-center'>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        additionalClasses='w-6/6 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6'
      >
        <h1 className='text-2xl mb-4'>Welcome Back</h1>
        <p className='mb-6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          natus mollitia! Ut eveniet aliquam cumque corrupti earum sed in vero
          sint obcaecati dicta mollitia, eos quidem! Quia cupiditate unde illum!
        </p>
        <FormInput
          type='text'
          placeholder='Username'
          register={register("username", { required: "Username is required." })}
          errors={errors.username}
        />
        <FormInput
          type='password'
          placeholder='Password'
          register={register("password", { required: "Password is required." })}
          errors={errors.password}
        />
        <button
          onClick={() => router.push("/signup")}
          className='ml-auto block mt-4 mb-4'
        >
          No account? Register here
        </button>
        <FormButton type='submit' text='Login' />
      </Form>
    </MainPage>
  );
};

export default LoginPage;
