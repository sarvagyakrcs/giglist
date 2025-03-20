import { Button } from '@/components/ui/button'
import React from 'react'
import { ModeToggle } from '@/components/global/buttons/mode-toggle'
type Props = {}

const Page = (props: Props) => {
  return (
    <div className="">
      <Button variant={"ghost"}>Click me</Button>
      <ModeToggle />
    </div>
  )
}

export default Page