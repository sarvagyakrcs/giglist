"use client"

import { useState, useRef, useEffect, type KeyboardEvent, type ClipboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface OTPVerificationFormProps {
  onSubmit: (code: string) => void;
  isSubmitting: boolean;
  error?: string;
}

export default function OTPVerificationForm({ onSubmit, isSubmitting, error }: OTPVerificationFormProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [resendTimer, setResendTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Focus the first input when component mounts
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  // Handle resend timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0 && !canResend) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [resendTimer, canResend]);

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

  const handleResend = () => {
    if (!canResend) return;
    setResendTimer(30);
    setCanResend(false);
    // TODO: Implement resend logic
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-2 text-center mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Verify Your Email</h2>
        <p className="text-sm text-muted-foreground">
          Enter the 6-digit verification code sent to your email
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Verification Code</Label>
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
                  "w-12 h-12 text-center text-base font-medium rounded-md transition-colors",
                  digit ? "border-primary/50 bg-primary/5" : "",
                )}
                aria-label={`Digit ${index + 1} of verification code`}
              />
            ))}
          </div>
          {error && (
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}
        </div>

        <div className="text-sm text-center text-muted-foreground">
          Didn't receive a code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={!canResend}
            className={cn(
              "font-medium hover:underline underline-offset-4 transition-colors",
              canResend ? "text-primary" : "text-muted-foreground cursor-not-allowed"
            )}
          >
            {canResend ? "Resend" : `Resend in ${resendTimer}s`}
          </button>
        </div>

        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={isSubmitting || otp.some((digit) => digit === "")}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Verifying
            </span>
          ) : (
            "Verify Code"
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          By verifying your identity, you agree to our{" "}
          <a href="#" className="text-primary hover:underline underline-offset-4">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline underline-offset-4">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}

