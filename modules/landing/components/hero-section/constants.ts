export const HERO_CONSTANTS = {
    content: {
      whatsNew: "Discover Gigs",
      version: "Now live: GigList Beta",
      title: "Find or offer services effortlessly",
      description: "Connect with skilled professionals or post your own gigs. Whether you need a quick job done or want to monetize your expertise, GigList makes it easy.",
      cta: {
        primary: "Post a Gig",
        secondary: "Browse Gigs"
      }
    },
    links: {
      whatsNew: "#new",
      cta: {
        primary: "#",
        secondary: "#"
      }
    },
    images: {
      appScreenshot: {
        width: 2432,
        height: 1442,
        alt: "GigList platform screenshot"
      }
    },
    styling: {
      container: {
        maxWidth: "7xl",
        padding: {
          x: "6",
          top: "10",
          bottom: {
            sm: "32",
            default: "24"
          }
        }
      },
      content: {
        maxWidth: "2xl"
      }
    }
  } as const;
  