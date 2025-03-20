import { BENTO_SECTIONS, BENTO_STYLES } from './constants'
import { cn } from '@/lib/utils'

export default function BentoDark() {
    return (
      <div className={cn(BENTO_STYLES.container.base, BENTO_STYLES.container.dark)}>
        <div className={BENTO_STYLES.content.base}>
          <h2 className={cn(BENTO_STYLES.header.subtitle.base, BENTO_STYLES.header.subtitle.dark)}>
            {BENTO_SECTIONS.header.subtitle}
          </h2>
          <p className={cn(BENTO_STYLES.header.title.base, BENTO_STYLES.header.title.dark)}>
            {BENTO_SECTIONS.header.title}
          </p>
          <div className={BENTO_STYLES.grid.base}>
            {BENTO_SECTIONS.cards.map((card) => (
              <div key={card.id} className={cn(BENTO_STYLES.card.base.container, `lg:col-span-${card.colSpan}`)}>
                <div className={cn(BENTO_STYLES.card.base.wrapper, BENTO_STYLES.card.dark.wrapper)}>
                  <img
                    alt={card.imageAlt}
                    src={card.images.dark}
                    className="h-80 object-cover object-left"
                  />
                  <div className={BENTO_STYLES.card.base.content}>
                    <h3 className={cn(BENTO_STYLES.card.base.title, BENTO_STYLES.card.dark.title)}>
                      {card.title}
                    </h3>
                    <p className={cn(BENTO_STYLES.card.base.heading, BENTO_STYLES.card.dark.heading)}>
                      {card.heading}
                    </p>
                    <p className={cn(BENTO_STYLES.card.base.description, BENTO_STYLES.card.dark.description)}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  