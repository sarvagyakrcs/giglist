"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

type Props = {}

const SignUpForm = (props: Props) => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const passwordNotMatch = confirmPassword !== password;
    const buttonDisabled = passwordNotMatch || password.length < 8;
  return (
    <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
          {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* {errors.password && <p className="text-red-500">{errors.password.message}</p>} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input id="password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {passwordNotMatch && <p className="text-red-500">{passwordNotMatch ? "Password does not match" : ""}</p>}
        </div>
        <Button disabled={buttonDisabled} type="submit" className="w-full">
          Sign-Up
        </Button>
      </form>
  )
}

export default SignUpForm