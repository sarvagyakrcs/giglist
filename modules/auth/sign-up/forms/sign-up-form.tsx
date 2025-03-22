"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthSignUp } from "@/hooks/use-auth-sign-up";
import React, { useState } from "react";
import OTPVerificationForm from "./otp-verification-form";
import { Loader2 } from "lucide-react";

const SignUpForm = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const passwordNotMatch = confirmPassword !== password;
  const buttonDisabled = passwordNotMatch || password.length < 8;

  const {
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
  } = useAuthSignUp();

  const handleOTPSubmit = async (otpCode: string) => {
    setCode(otpCode);
    await onInitiateUserRegistration();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifying) {
      const email = getValues("email");
      const password = getValues("password");
      await onGenerateCode(email, password);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      {verifying ? (
        <OTPVerificationForm 
          onSubmit={handleOTPSubmit}
          isSubmitting={creating}
          error={verificationError}
        />
      ) : (
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordNotMatch && (
              <p className="text-sm text-red-500">
                Passwords do not match
              </p>
            )}
          </div>
          <div id="clerk-captcha" className="w-full" />
          <Button 
            disabled={buttonDisabled || creating} 
            type="submit" 
            className="w-full"
          >
            {creating ? <Loader2 size={30} className="animate-spin" /> : "Sign Up"}
          </Button>
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
