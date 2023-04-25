"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button, Heading, Input } from "../atoms";
import { useLoginModal, useRegisterModal } from "@/hooks";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Modal } from "./Modal";

export const LoginModal = ({}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Login in");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error("Error");
      }
    });
  };

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back!" subtitle="Please login to your account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        placeholder=""
        required
      />

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        placeholder=""
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 font-light">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FaGoogle}
        size={20}
        onClick={() => signIn("google")}
      />

      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        size={25}
        onClick={() => signIn("github")}
      />
      <div
        className="
      text-neutral-500 
      text-center
      mt-4
      font-light
      "
      >
        <p className="">
          First time using our app?
          <span
          onClick={onToggle}    
            className="
            text-neutral-800
            cursor-pointer
            hover:underline
            ml-2
            "
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
