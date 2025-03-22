"use server"
import { onAuthenticatedUser } from '@/actions/auth';
import InitialOnboardingForm from '@/modules/onboarding/forms/initial-onboarding-form';
import React from 'react'

const OnboardingPage = async () => {
  const user = await onAuthenticatedUser();
  const hasNotDoneInitialOnboarding = user.firstname === null || user.lastname === null;

  if(hasNotDoneInitialOnboarding){
    return <InitialOnboardingForm />
  }

  return (
    <div><pre>{JSON.stringify(user, null, 2)}</pre></div>
  )
}

export default OnboardingPage