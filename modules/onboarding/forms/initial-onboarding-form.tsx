"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InitialOnboardingSchema } from "../schema/initial-onboarding-schema";
import { userTypes } from "./_constants";
import { Circle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import GlassCard from "@/components/global/glass-card";
import Logo from "@/components/global/logo";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { InitialOnboardingAction } from "../actions/initial-onboarding-action";
import { LoaderIcon } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function InitialOnboardingForm({ user, redirectUrlAfterOnboarding }: { user: User, redirectUrlAfterOnboarding ?: string }) {
  const [selectedType, setSelectedType] = useState(userTypes[0]);
  const form = useForm<z.infer<typeof InitialOnboardingSchema>>({
    resolver: zodResolver(InitialOnboardingSchema),
    defaultValues: {
      type: "BUYER",
      fName: "",
      lName: "",
      clerkId: user.clerkId,
    },
  });
  const router = useRouter();

  const { isPending, mutate: Onboard } = useMutation({
    mutationKey: ["initialOnboarding", user.id, user.clerkId],
    mutationFn: InitialOnboardingAction,
    onMutate: (formdata) => {
      toast.loading(`Onboarding ${formdata.fName} as a ${formdata.type}`, {
        id: "onboarding",
      });
    },
    onError: (error) => {
      toast.error("Something Went Wrong", { id: "onboarding" });
    },
    onSuccess: () => {
      toast.success("Onboarding Successful", { id: "onboarding" });
      router.push(redirectUrlAfterOnboarding ?? "/home");
    },
  });

  function onSubmit(values: z.infer<typeof InitialOnboardingSchema>) {
    try {
      Onboard(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <GlassCard className="p-16">
      <div className="">
        <div className="-mt-4 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="mt-4 ml-4">
            <Logo className="my-5" />
            <p className="mt-4 text-sm text-gray-500">
              Please fill out the form below to get started
            </p>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="fName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="Enter your first name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="lName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="Enter your last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="col-span-12" />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="col-span-12">
                  <FormLabel>Select your account type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={selectedType}
                      onChange={(value) => {
                        setSelectedType(value);
                        field.onChange(value.id);
                      }}
                      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
                    >
                      {userTypes.map((type) => (
                        <Radio
                          disabled={isPending}
                          key={type.id}
                          value={type}
                          aria-label={type.title}
                          aria-description={type.description}
                          className="group relative flex cursor-pointer rounded-lg border border-border bg-background p-4 shadow-sm focus:outline-none data-[checked]:border-primary data-[checked]:ring-2 data-[checked]:ring-primary"
                        >
                          <span className="flex flex-1">
                            <span className="flex flex-col">
                              <span className="block text-sm font-medium text-foreground">
                                {type.title}
                              </span>
                              <span className="mt-1 flex items-center text-sm text-muted-foreground">
                                {type.description}
                              </span>
                              <span className="mt-6 text-sm font-medium text-foreground">
                                {type.users}
                              </span>
                            </span>
                          </span>
                          {selectedType.id === type.id ? (
                            <CheckCircleIcon
                              aria-hidden="true"
                              className="size-5 text-primary"
                            />
                          ) : (
                            <Circle
                              aria-hidden="true"
                              className="size-5 text-muted-foreground "
                            />
                          )}
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[checked]:border-primary"
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isPending} type="submit" className="w-full">
            { isPending ? <LoaderIcon className="h-6 w-6 animate-spin" /> : "Onboard" }
          </Button>
        </form>
      </Form>
    </GlassCard>
  );
}
