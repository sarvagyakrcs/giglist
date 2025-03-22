"use server"
import { onAuthenticatedUser } from '@/actions/auth'
import { getSeller } from '@/actions/seller';
import SomethingWentWrongPage from '@/components/global/something-went-wrong-page';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const SiteLayout = async ({ children }: Props) => {
    const user = await onAuthenticatedUser();
    const hasNotDoneInitialOnboarding = user.firstname === null || user.lastname === null;
    if(!user){
        return <SomethingWentWrongPage />
    }
    console.log({user});
    if(hasNotDoneInitialOnboarding){
        redirect("/onboarding?callback=/home")
    }

    const isSeller = user.type === "SELLER";
    const seller = await getSeller(user.clerkId);
    const hasRegisteredAsSeller = seller !== null;

    if(isSeller && !hasRegisteredAsSeller){
        redirect("/onboarding?callback=/home")
    }

  return (
    <div>
        {children}
    </div>
  )
}

export default SiteLayout