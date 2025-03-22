import { onSignUpUser } from "@/actions/auth";
import { SignUpSchema } from "@/schemas/auth/sign-up-schema";
import { useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export const useAuthSignUp = () => {
  const {
    setActive,
    isLoaded,
    signUp
  } = useSignUp();

  const [creating, setCreating] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [verificationError, setVerificationError] = useState<string | undefined>(undefined);

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
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
      toast.success("Verification code sent to your email");
    } catch (error: any) {
      console.error(JSON.stringify(error, null, 2));
      if (error.errors?.[0]?.message) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const onInitiateUserRegistration = async () => {
    if (!isLoaded || !signUp) {
      toast.error("Something went wrong");
      return;
    }

    if (!code) {
      setVerificationError("Please enter the verification code");
      return;
    }

    try {
      setCreating(true);
      setVerificationError(undefined);

      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code
      });

      if (completeSignUp.status !== "complete") {
        setVerificationError("Invalid verification code");
        return;
      }

      if (completeSignUp.status === "complete") {
        if (!signUp.createdUserId) {
          toast.error("Something went wrong");
          return;
        }

        const user = await onSignUpUser({
          clerkId: signUp.createdUserId,
          image: ""
        });

        reset();
        setCode("");
        setVerifying(false);

        if (user.status === 200) {
          await setActive({ session: completeSignUp.createdSessionId });
          toast.success("Account created successfully");
          router.push("/onboarding");
        } else {
          toast.error("Something went wrong");
          router.refresh();
        }
      }
    } catch (error: any) {
      console.error(JSON.stringify(error, null, 2));
      if (error.errors?.[0]?.message) {
        setVerificationError(error.errors[0].message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setCreating(false);
    }
  }

  return {
    register,
    errors,
    onGenerateCode,
    onInitiateUserRegistration,
    verifying,
    creating,
    code,
    setCode,
    getValues,
    verificationError
  }
}