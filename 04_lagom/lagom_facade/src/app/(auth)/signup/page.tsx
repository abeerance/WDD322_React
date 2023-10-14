"use client";

import Form from "@/components/forms/form";
import FormButton from "@/components/forms/form-button";
import FormInput from "@/components/forms/form-input";
import MainPage from "@/components/pages/main-page";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useState } from "react";

const SignupPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <MainPage additionalClasses='items-center'>
      <Form onSubmit={handleSubmit} additionalClasses='my-20'>
        <h1 className='text-2xl'>Register for awesomeness</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          natus mollitia! Ut eveniet aliquam cumque corrupti earum sed in vero
          sint obcaecati dicta mollitia, eos quidem! Quia cupiditate unde illum!
        </p>
        <FormInput
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type='password'
          placeholder='Repeat Password'
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button onClick={() => router.push("/login")} className='ml-auto block'>
          Already got an account? Log in!
        </button>
        <FormButton type='submit' text='Sign Up' />
      </Form>
    </MainPage>
  );
};

export default SignupPage;
