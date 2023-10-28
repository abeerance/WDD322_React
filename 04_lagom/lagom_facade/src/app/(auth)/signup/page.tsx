"use client";

import Form from "@/components/forms/form";
import FormButton from "@/components/forms/form-button";
import FormInput from "@/components/forms/form-input";
import MainPage from "@/components/pages/main-page";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SignupInputs = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const SignupPage: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupInputs>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  // watch the value of the password
  // so we can compare it to the repeatPassword
  // in the validate in register
  const password = watch("password");

  const router = useRouter();

  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    console.log(data);
  };

  return (
    <MainPage additionalClasses='items-center'>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        additionalClasses='w-6/6 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6'
      >
        <h1 className='text-2xl mb-4'>Register for awesomeness</h1>
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
          type='text'
          placeholder='E-Mail'
          register={register("email", {
            required: "E-Mail is required.",
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/,
              message: "Invalid email address",
            },
          })}
          errors={errors.email}
        />
        <FormInput
          type='password'
          placeholder='Password'
          register={register("password", { required: "Password is required." })}
          errors={errors.password}
        />
        <FormInput
          type='password'
          placeholder='Repeat Password'
          register={register("repeatPassword", {
            required: "Please repeat your password.",
            validate: (value) =>
              value === password || "The passwords do not match.",
          })}
          errors={errors.repeatPassword}
        />
        <button
          onClick={() => router.push("/login")}
          className='ml-auto block mt-4 mb-4'
        >
          Already got an account? Log in!
        </button>
        <FormButton type='submit' text='Sign Up' />
      </Form>
    </MainPage>
  );
};

export default SignupPage;
