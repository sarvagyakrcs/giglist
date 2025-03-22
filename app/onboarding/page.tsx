"use server"
import { onAuthenticatedUser } from '@/actions/auth';
import { getSeller } from '@/actions/seller';
import InitialOnboardingForm from '@/modules/onboarding/forms/initial-onboarding-form';
import SellerRegistrationForm from '@/modules/onboarding/forms/seller-registration-form';
import { redirect } from 'next/navigation';
import React from 'react'

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const OnboardingPage = async ({ searchParams } : PageProps) => {
  const user = await onAuthenticatedUser();
  const hasNotDoneInitialOnboarding = user.firstname === null || user.lastname === null;
  const params = await searchParams;
  const redirectUrlAfterOnboarding = (params["callback"] as string) ?? "home";
  if(hasNotDoneInitialOnboarding){
    return <InitialOnboardingForm user={user} redirectUrlAfterOnboarding={redirectUrlAfterOnboarding} />
  }

  if(user.type === "BUYER"){
    redirect(redirectUrlAfterOnboarding ?? "/home");
  }

  const isSeller = user.type === "SELLER";
  const seller = await getSeller(user.clerkId);
  const hasRegisteredAsSeller = seller !== null;

  if(isSeller && !hasRegisteredAsSeller){
    return <SellerRegistrationForm />
  }

  return (
    <div><pre>{JSON.stringify(seller, null, 2)}</pre></div>
  )
}

export default OnboardingPage