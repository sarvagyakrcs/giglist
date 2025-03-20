export const BENTO_SECTIONS = {
    header: {
      subtitle: "Find & Offer Gigs",
      title: "Everything you need to connect with clients and freelancers"
    },
    cards: [
      {
        id: "opportunities",
        title: "Opportunities",
        heading: "Endless gig possibilities",
        description: "Browse thousands of freelance opportunities, from small tasks to long-term projects. Find work that fits your skills and schedule.",
        images: {
          light: "https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png",
          dark: "https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
        },
        imageAlt: "Gig listings dashboard",
        colSpan: 3,
        position: "top-left"
      },
      {
        id: "secure-payments",
        title: "Secure Payments",
        heading: "Get paid with confidence",
        description: "Our secure escrow system ensures you receive payments on time. Clients pay upfront, and funds are released when the work is completed.",
        images: {
          light: "https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png",
          dark: "https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
        },
        imageAlt: "Secure payment interface",
        colSpan: 3,
        position: "top-right"
      },
      {
        id: "speed",
        title: "Fast Hiring",
        heading: "Find the right talent instantly",
        description: "Post a gig and get applications within minutes. Use smart filters to find the best match for your job.",
        images: {
          light: "https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png",
          dark: "https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png"
        },
        imageAlt: "Freelancer search speed optimization",
        colSpan: 2,
        position: "bottom-left"
      },
      {
        id: "integrations",
        title: "Tools & Integrations",
        heading: "Seamlessly manage work",
        description: "Built-in chat, file sharing, and project management tools to streamline your workflow.",
        images: {
          light: "https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png",
          dark: "https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
        },
        imageAlt: "Freelance tools and integrations",
        colSpan: 2,
        position: "bottom-middle"
      },
      {
        id: "network",
        title: "Global Reach",
        heading: "Work with clients worldwide",
        description: "Expand your reach by connecting with clients and freelancers from around the world.",
        images: {
          light: "https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png",
          dark: "https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
        },
        imageAlt: "Global freelancer network",
        colSpan: 2,
        position: "bottom-right"
      }
    ]
  }
  
  export const BENTO_STYLES = {
    container: {
      base: "py-24 sm:py-32",
      dark: "bg-gray-900",
      light: "bg-white"
    },
    content: {
      base: "mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8"
    },
    header: {
      subtitle: {
        base: "text-base/7 font-semibold",
        dark: "text-green-400",
        light: "text-green-600"
      },
      title: {
        base: "mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty sm:text-5xl",
        dark: "text-white",
        light: "text-gray-950"
      }
    },
    grid: {
      base: "mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
    },
    card: {
      base: {
        container: "flex p-px",
        wrapper: "overflow-hidden rounded-lg",
        content: "p-10",
        title: "text-sm/4 font-semibold",
        heading: "mt-2 text-lg font-medium tracking-tight",
        description: "mt-2 max-w-lg text-sm/6"
      },
      dark: {
        wrapper: "bg-gray-800 ring-1 ring-white/15",
        title: "text-gray-400",
        heading: "text-white",
        description: "text-gray-400"
      },
      light: {
        wrapper: "bg-white ring-1 shadow-sm ring-black/5",
        title: "text-green-600",
        heading: "text-gray-950",
        description: "text-gray-600"
      }
    }
  }
  