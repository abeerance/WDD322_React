"use client";

import Form from "@/components/forms/form";
import FormButton from "@/components/forms/form-button";
import FormInput from "@/components/forms/form-input";
import MainPage from "@/components/pages/main-page";
import { useRouter } from "next/navigation";

import { FC, FormEvent, useState } from "react";

const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(username, password);

    // sprich endpoint api/login
  };

  return (
    <MainPage additionalClasses='items-center'>
      <Form onSubmit={handleSubmit} additionalClasses='my-20'>
        <h1 className='text-2xl'>Welcome Back</h1>
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
        <button
          onClick={() => router.push("/signup")}
          className='ml-auto block'
        >
          No account? Register here
        </button>
        <FormButton type='submit' text='Login' />
      </Form>
    </MainPage>
  );
};

export default LoginPage;
