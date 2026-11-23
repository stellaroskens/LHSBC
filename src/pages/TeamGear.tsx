import { AthleticHero } from "../components/AthleticHero"
import { BrandWordmark } from "../components/BrandWordmark"
import { ExternalLinkIcon } from "../components/header/icons"
import { PageMeta } from "../components/PageMeta"
import { club, pageBodies, pages, teamGearShop } from "../content/site"

export function TeamGear() {
  return (
    <div className="sw-page sw-team-gear">
      <PageMeta title={pages.teamGear.title} description={pages.teamGear.description} />
      <AthleticHero
        scene="gear"
        eyebrow={pageBodies.teamGear.eyebrow}
        title={pageBodies.teamGear.title}
        subtitle={club.name}
        art={
          <div className="sw-team-gear__logo">
            <BrandWordmark />
          </div>
        }
      />

      <section className="section" aria-labelledby="team-gear-shop-heading">
        <div className="wrap">
          <article className="card sw-team-gear__card">
            <h2 id="team-gear-shop-heading">{pageBodies.teamGear.heading}</h2>
            <p>{pageBodies.teamGear.leadBeforeShopName}</p>
            {teamGearShop.teamStoreUrl ? (
              <p className="sw-team-gear__actions">
                <a className="sw-btn sw-btn--plain" href={teamGearShop.teamStoreUrl} target="_blank" rel="noopener noreferrer">
                  {pageBodies.teamGear.buttonBeforeShopName} {teamGearShop.name}
                  <ExternalLinkIcon />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            ) : (
              <p className="sw-team-gear__note">{pageBodies.teamGear.missingStorefrontNote}</p>
            )}
          </article>
        </div>
      </section>
    </div>
  )
}
