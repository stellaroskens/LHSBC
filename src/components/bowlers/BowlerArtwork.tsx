import { publicBowlerArtwork, type BowlerProfile } from "../../lib/content/bowlerProfiles"

type Props = {
  profile: BowlerProfile
  frame?: "card" | "profile"
}

/** One approved mark or a neutral placeholder. Student photographs are not loaded from public content. */
export function BowlerArtwork({ profile, frame = "card" }: Props) {
  const image = publicBowlerArtwork(profile)
  return (
    <div className={`bowler-frame bowler-frame--${frame}`}>
      <img src={image.src} alt={image.alt} />
    </div>
  )
}
