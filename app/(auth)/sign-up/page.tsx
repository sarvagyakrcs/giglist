import React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import LoginForm from '@/modules/auth/sign-in/forms/login-form'
import GoogleLogIn from '@/modules/auth/sign-in/forms/google-log-in'
import SignUpForm from '@/modules/auth/sign-up/forms/sign-up-form'

const SignInPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h5 className='font-bold text-2xl text-center'>
          Welcome back
        </h5>
      </div>

      <SignUpForm />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <GoogleLogIn />
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignInPage