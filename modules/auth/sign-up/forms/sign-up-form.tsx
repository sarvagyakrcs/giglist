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
    <div className="w-full max-w-md mx-auto">
      {!verifying && (
        <div className="space-y-2 text-center mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Create an Account</h2>
          <p className="text-sm text-muted-foreground">
            Enter your details to get started
          </p>
        </div>
      )}

      <form onSubmit={handleFormSubmit} className="space-y-4">
        {verifying ? (
          <OTPVerificationForm 
            onSubmit={handleOTPSubmit}
            isSubmitting={creating}
            error={verificationError}
          />
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                {...register("email")}
                placeholder="Enter your email"
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
                placeholder="Create a password"
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
                placeholder="Confirm your password"
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
              {creating ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating Account
                </span>
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
