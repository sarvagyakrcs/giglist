import Logo from '@/components/global/logo'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { HERO_CONSTANTS } from './constants'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function HeroDark() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-1108/632 w-[69.25rem] bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <div className={`mx-auto max-w-${HERO_CONSTANTS.styling.container.maxWidth} px-${HERO_CONSTANTS.styling.container.padding.x} pt-${HERO_CONSTANTS.styling.container.padding.top} pb-${HERO_CONSTANTS.styling.container.padding.bottom.default} sm:pb-${HERO_CONSTANTS.styling.container.padding.bottom.sm} lg:flex lg:px-8 lg:py-40`}>
        <div className={`mx-auto max-w-${HERO_CONSTANTS.styling.content.maxWidth} shrink-0 lg:mx-0 lg:pt-8`}>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href={HERO_CONSTANTS.links.whatsNew} className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-indigo-400 ring-1 ring-indigo-500/20 ring-inset">
                {HERO_CONSTANTS.content.whatsNew}
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                <span>{HERO_CONSTANTS.content.version}</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-500" />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
            {HERO_CONSTANTS.content.title}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            {HERO_CONSTANTS.content.description}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={HERO_CONSTANTS.links.cta.primary}
              className={cn(buttonVariants({ variant: "default" }))}  
            >
              {HERO_CONSTANTS.content.cta.primary}
            </Link>
            <Link href={HERO_CONSTANTS.links.cta.secondary} className="text-sm/6 font-semibold text-white">
              {HERO_CONSTANTS.content.cta.secondary} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              alt={HERO_CONSTANTS.images.appScreenshot.alt}
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={HERO_CONSTANTS.images.appScreenshot.width}
              height={HERO_CONSTANTS.images.appScreenshot.height}
              className="w-[76rem] rounded-md bg-white/5 ring-1 shadow-2xl ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
