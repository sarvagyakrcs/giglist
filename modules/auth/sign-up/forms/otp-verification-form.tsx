"use client"

import { useState, useRef, useEffect, type KeyboardEvent, type ClipboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface OTPVerificationFormProps {
  onSubmit: (code: string) => void;
  isSubmitting: boolean;
  error?: string;
}

export default function OTPVerificationForm({ onSubmit, isSubmitting, error }: OTPVerificationFormProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Focus the first input when component mounts
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value

    // Only allow numbers
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp]
      // Take only the last character if multiple characters are entered
      newOtp[index] = value.substring(value.length - 1)
      setOtp(newOtp)

      // Auto focus next input if value is entered
      if (value && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus()
      }
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a number and has the right length
    if (/^\d+$/.test(pastedData)) {
      const pastedOtp = pastedData.split("").slice(0, 6)
      const newOtp = [...otp]

      pastedOtp.forEach((digit, index) => {
        if (index < 6) {
          newOtp[index] = digit
        }
      })

      setOtp(newOtp)

      // Focus the next empty input or the last one if all filled
      const nextEmptyIndex = newOtp.findIndex((val) => val === "")
      if (nextEmptyIndex !== -1 && inputRefs.current[nextEmptyIndex]) {
        inputRefs.current[nextEmptyIndex]?.focus()
      } else if (inputRefs.current[5]) {
        inputRefs.current[5]?.focus()
      }
    }
  }

  const handleSubmit = () => {
    // Check if OTP is complete
    if (otp.some((digit) => digit === "")) {
      return
    }

    onSubmit(otp.join(""))
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-sm border border-border/60">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-xl font-medium">Verify Your Email</CardTitle>
        <CardDescription>Enter the 6-digit verification code sent to your email</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Label htmlFor="otp-input-0" className="text-sm font-medium mb-2 block">
            Verification Code
          </Label>
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otp-input-${index}`}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                className={cn(
                  "w-11 h-12 text-center text-base font-medium rounded-md transition-colors",
                  digit ? "border-primary/50 bg-primary/5" : "",
                )}
                aria-label={`Digit ${index + 1} of verification code`}
              />
            ))}
          </div>
          {error && (
            <div className="flex items-center gap-2 mt-3 text-destructive">
              <AlertCircle className="h-4 w-4" />
              <p className="text-sm">{error}</p>
            </div>
          )}
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Didn't receive a code?{" "}
          <button type="button" className="text-primary font-medium hover:underline underline-offset-4 transition-colors">
            Resend
          </button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 pt-2 pb-6">
        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={isSubmitting || otp.some((digit) => digit === "")}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Verifying
            </span>
          ) : (
            "Verify Code"
          )}
        </Button>
        <p className="text-xs text-center text-muted-foreground px-6">
          By verifying your identity, you agree to our{" "}
          <a href="#" className="text-primary hover:underline underline-offset-4">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline underline-offset-4">
            Privacy Policy
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}

