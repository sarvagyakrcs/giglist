"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import UseAuth from '@/hooks/use-auth'
import React from 'react'
import { LoaderIcon } from 'react-hot-toast'

type Props = {}

const LoginForm = (props: Props) => {
  const { onAuthenticateUser, isPending, register, errors } = UseAuth();
  return (
    <form onSubmit={onAuthenticateUser} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} id="email" type="email" placeholder="Enter your email" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input {...register("password")} id="password" type="password" placeholder="Enter your password" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? <LoaderIcon className="animate-spin" /> : "Sign in"}
        </Button>
      </form>
  )
}

export default LoginForm