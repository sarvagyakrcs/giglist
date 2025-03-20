import { FOOTER_NAVIGATION, FOOTER_CONTENT, FOOTER_STYLES } from './constants'
import { cn } from '@/lib/utils'

export default function FooterLight() {
  return (
    <footer className={FOOTER_STYLES.container.light}>
      <div className={FOOTER_STYLES.container.base}>
        <div className={FOOTER_STYLES.grid.base}>
          <div className={FOOTER_STYLES.grid.content}>
            <div className={FOOTER_STYLES.grid.columns}>
              <div>
                <h3 className={cn(FOOTER_STYLES.heading.base, FOOTER_STYLES.heading.light)}>Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_NAVIGATION.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={cn(FOOTER_STYLES.link.base, FOOTER_STYLES.link.light)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className={cn(FOOTER_STYLES.heading.base, FOOTER_STYLES.heading.light)}>Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_NAVIGATION.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={cn(FOOTER_STYLES.link.base, FOOTER_STYLES.link.light)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={FOOTER_STYLES.grid.columns}>
              <div>
                <h3 className={cn(FOOTER_STYLES.heading.base, FOOTER_STYLES.heading.light)}>Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_NAVIGATION.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={cn(FOOTER_STYLES.link.base, FOOTER_STYLES.link.light)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className={cn(FOOTER_STYLES.heading.base, FOOTER_STYLES.heading.light)}>Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_NAVIGATION.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={cn(FOOTER_STYLES.link.base, FOOTER_STYLES.link.light)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className={cn(FOOTER_STYLES.heading.base, FOOTER_STYLES.heading.light)}>
              {FOOTER_CONTENT.newsletter.title}
            </h3>
            <p className={cn(FOOTER_STYLES.link.base, FOOTER_STYLES.link.light)}>
              {FOOTER_CONTENT.newsletter.description}
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                {FOOTER_CONTENT.newsletter.input.label}
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder={FOOTER_CONTENT.newsletter.input.placeholder}
                autoComplete="email"
                className={cn(FOOTER_STYLES.newsletter.input.base, FOOTER_STYLES.newsletter.input.light)}
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                <button
                  type="submit"
                  className={cn(FOOTER_STYLES.newsletter.button.base, FOOTER_STYLES.newsletter.button.light)}
                >
                  {FOOTER_CONTENT.newsletter.button}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={cn(FOOTER_STYLES.divider.base, FOOTER_STYLES.divider.light)}>
          <div className={FOOTER_STYLES.social.container}>
            {FOOTER_NAVIGATION.social.map((item) => (
              <a key={item.name} href={item.href} className={FOOTER_STYLES.social.link.light}>
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className={FOOTER_STYLES.social.icon} />
              </a>
            ))}
          </div>
          <p className={cn(FOOTER_STYLES.copyright.base, FOOTER_STYLES.copyright.light)}>
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
  