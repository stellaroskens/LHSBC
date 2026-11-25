/**
 * Web display copies of approved artwork. Each is a straight resize of its master file
 * (logos are lossless). Masters are kept unpublished in archive/website-cleanup/public/
 * at the same relative paths, for print and future edits.
 */
export const websiteLogo = {
  src: "/brand/website-logo-480.webp",
  srcSet: "/brand/website-logo-480.webp 480w, /brand/website-logo-960.webp 960w",
  width: 4269,
  height: 2400,
} as const

export const clothingLogo = {
  src: "/brand/clothing-logo-640.webp",
  width: 4269,
  height: 2400,
} as const

export const clothingLogoTransparent = {
  src: "/brand/clothing-logo-transparent-800.webp",
  srcSet: "/brand/clothing-logo-transparent-800.webp 800w, /brand/clothing-logo-transparent-1600.webp 1600w",
  width: 2309,
  height: 1068,
} as const

/** Website logo with its white background made transparent (edge flood fill only; artwork pixels untouched). */
export const websiteLogoTransparent = {
  src: "/brand/website-logo-transparent-800.webp",
  srcSet: "/brand/website-logo-transparent-800.webp 639w, /brand/website-logo-transparent-1600.webp 1279w",
  width: 1279,
  height: 853,
} as const

/** Approved bowling pins logo, trimmed from references/4.png. */
export const pinsLogo = {
  src: "/brand/pins-logo-800.webp",
  srcSet: "/brand/pins-logo-400.webp 400w, /brand/pins-logo-800.webp 800w",
  width: 800,
  height: 660,
} as const

export const homeHeroBanner = {
  src: "/images/home-hero-lanes-1280.jpg",
  srcSet: "/images/home-hero-lanes-1280.jpg 1280w, /images/home-hero-lanes-1920.jpg 1920w",
  width: 1920,
  height: 836,
} as const

/** Standalone Lebanon crest for the rebrand homepage. */
export const lhsbcCrest = {
  src: "/brand/lhsbc/crest-640.png",
  srcSet: "/brand/lhsbc/crest-320.png 320w, /brand/lhsbc/crest-640.png 640w",
  width: 640,
  height: 640,
} as const

/**
 * Original club crest (preferred over pack 01_lhsbc_crest.png — closer to the approved brand mark).
 * Pack crest remains at /assets/canva-assets/LHSBC_Homepage_Artwork/01_lhsbc_crest.png.
 */
export const lhsbcBallCrest = {
  src: "/brand/lhsbc/display-crest-redball.png",
  width: 1019,
  height: 991,
} as const

/** Header crest used on the rebrand homepage. */
export const lhsbcHeaderMark = lhsbcBallCrest

const PACK = "/assets/canva-assets/LHSBC_Homepage_Artwork"

/** Prompt 11A layered homepage assets (transparent PNGs). */
export const lhsbcHomePack = {
  crestPack: { src: `${PACK}/01_lhsbc_crest.png`, width: 778, height: 848 },
  joinButton: { src: `${PACK}/02_join_the_club_button.png`, width: 1078, height: 298 },
  donateButton: { src: `${PACK}/03_donate_button.png`, width: 998, height: 300 },
  hero: { src: `${PACK}/04_bowling_club_hero.png`, width: 3008, height: 1008 },
  findMore: { src: `${PACK}/05_find_out_more_bowling_lane.png`, width: 2242, height: 890 },
} as const

/** Hero wordmark + tagline from the 11A pack. */
export const lhsbcMarquee = {
  src: lhsbcHomePack.hero.src,
  width: lhsbcHomePack.hero.width,
  height: lhsbcHomePack.hero.height,
} as const

/** Legacy feature-card paths kept for other pages / rollback. */
export const lhsbcFeatureArt = {
  join: { src: "/brand/lhsbc/join-illustration.png", width: 1301, height: 1209 },
  handshake: { src: "/brand/lhsbc/handshake.png", width: 2172, height: 724 },
  storefront: { src: "/brand/lhsbc/storefront.png", width: 1920, height: 819 },
} as const

/** Full-page mockup kept as a reference only (Prompt 11). Live home uses lhsbcHomePack. */
export const lhsbcApprovedHomepage = {
  src: "/brand/lhsbc/homepage/approved-homepage.png",
  width: 1247,
  height: 1261,
} as const

export const coachPortraits = {
  "cliff-meredith": {
    src: "/coaches/cliff-meredith-640.webp",
    srcSet: "/coaches/cliff-meredith-640.webp 640w, /coaches/cliff-meredith-1254.webp 1254w",
  },
  "chris-breshears": {
    src: "/coaches/chris-breshears-640.webp",
    srcSet: "/coaches/chris-breshears-640.webp 640w, /coaches/chris-breshears-1254.webp 1254w",
  },
} as const
