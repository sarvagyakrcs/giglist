import { onSignUpUser } from "@/actions/auth";
import { SignUpSchema } from "@/schemas/auth/sign-up-schema";
import { useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const UseAuthSignUp = () => {
  const {
    setActive,
    isLoaded,
    signUp
  } = useSignUp();

  const [creating, setCreating] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur"
  })

  const router = useRouter();

  const onGenerateCode = async (email: string, password: string) => {
    try {
      if (!email || !password || !signUp) {
        return toast.error("No fields must be empty");
      }

      await signUp.create({
        emailAddress: getValues("email"),
        password: getValues("password"),
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      toast.error("Something went wrong");
    }
  };

  const onInitiateUserRegistration = handleSubmit(async (values) => {
    if (!isLoaded) {
      toast.error("Something went wrong");
      return;
    }
    try {
      setCreating(true);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code
      })
      if (completeSignUp.status !== "complete") {
        return toast.error("Something went wrong");
      }

      if (completeSignUp.status === "complete") {
        if (!signUp.createdUserId) return
        const user = await onSignUpUser({
          clerkId: signUp.createdUserId,
          image: ""
        })

        reset();

        if (user.status === 200) {
          toast.success("Account created successfully");
          router.push("/onboarding");
        } else {
          toast.error("Something went wrong");
          router.refresh();
        }

        setCreating(false);
        setVerifying(false);
      }

      else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  })

  return {
    register,
    errors,
    onGenerateCode,
    onInitiateUserRegistration,
    verifying,
    creating,
    code,
    setCode,
    getValues
  }
}