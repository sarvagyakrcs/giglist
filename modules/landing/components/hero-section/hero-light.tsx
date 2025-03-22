import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { HERO_CONSTANTS } from './constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function HeroLight() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className={`mx-auto max-w-${HERO_CONSTANTS.styling.container.maxWidth} px-${HERO_CONSTANTS.styling.container.padding.x} pt-${HERO_CONSTANTS.styling.container.padding.top} pb-${HERO_CONSTANTS.styling.container.padding.bottom.default} sm:pb-${HERO_CONSTANTS.styling.container.padding.bottom.sm} lg:flex lg:px-8 lg:py-40`}>
        <div className={`mx-auto max-w-${HERO_CONSTANTS.styling.content.maxWidth} lg:mx-0 lg:shrink-0 lg:pt-8`}>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href={HERO_CONSTANTS.links.whatsNew} className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/10 ring-inset">
                {HERO_CONSTANTS.content.whatsNew}
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                <span>{HERO_CONSTANTS.content.version}</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            {HERO_CONSTANTS.content.title}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {HERO_CONSTANTS.content.description}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={HERO_CONSTANTS.links.cta.primary}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              {HERO_CONSTANTS.content.cta.primary}
            </Link>
            <Link href={HERO_CONSTANTS.links.cta.secondary} className="text-sm/6 font-semibold text-gray-900">
              {HERO_CONSTANTS.content.cta.secondary} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt={HERO_CONSTANTS.images.appScreenshot.alt}
                src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                width={HERO_CONSTANTS.images.appScreenshot.width}
                height={HERO_CONSTANTS.images.appScreenshot.height}
                className="w-[76rem] rounded-md ring-1 shadow-2xl ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
