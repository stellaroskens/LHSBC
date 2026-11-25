# LHSBC checkpoint — November 25, 2026

Prompt 01 accepted. Prompt 01A local recovery backup. This record does not start the website redesign.

## Project state verified at the start of Prompt 01A

These details matched the accepted Prompt 01 audit and had not changed before the backup was created.

| Item | Value |
|---|---|
| Active directory | `/Users/stellaroskens/Developer/LHSBC` |
| Branch | `main` |
| Upstream | `origin/main` at the same commit |
| Baseline commit | `47a4d0cf2835c9983f653d53f4cb2bdbdff623a4` (`47a4d0c`) |
| Commit message | Baseline before Canva homepage rebuild |
| Local branch | `canva-homepage` at `ff62fb476ed71f9cd41ee7491b1524dfdd5841a8` (`ff62fb4`) |
| Remote | `https://github.com/stellaroskens/LHSBC.git` |
| Preview | `http://127.0.0.1:4173/` returned HTTP 200 |
| Older backup | `/Users/stellaroskens/Developer/LHSBC-backup-2026-11-23` still present, not overwritten |

`canva-homepage` is one local commit ahead of `main`, has no upstream, and was not checked out.

## Uncommitted and untracked work preserved

Tracked changes:

- Modified `src/App.tsx`
- Modified `src/content/media.ts`
- Modified `src/lib/content/linkInventory.ts`
- Modified `public/brand/lhsbc/header-crest.png`
- Working-tree deletion of `public/images/schools/ahsb-main-logo.png`

The deleted file is absent from disk. Its blob remains in commit `47a4d0c`. It was not restored.

Untracked work included in the backup:

- `src/pages/Information.tsx`
- `LHSBC_MASTER_PROJECT.md`
- `references/design-2026-11-24/` (all six images)
- `references/homepage/` (older homepage references)
- `references/information-menu/`
- `public/assets/canva-assets/LHSBC_Homepage_Artwork/`
- `public/assets/canva-assets/final-homepage/`
- `public/assets/homepage-image-1/`
- `public/brand/lhsbc/handshake.png`, `hero-marquee.png`, `homepage/`, `join-illustration.png`, `storefront.png`
- `tmp/screenshots/` including Prompt 8, 10, and 11 screenshots

Tracked screenshots already in Git (`tmp/screenshots/lhsbc-p8-*` and `lhsbc-p10-*`) were copied with the rest of the tree. The untracked Prompt 11 screenshots were copied as well.

## Backup

| Item | Value |
|---|---|
| Directory | `/Users/stellaroskens/Developer/LHSBC-backup-2026-11-25-033533` |
| Created | 2026-11-25 03:35:33 PST |
| Size | 156 MB |
| Method | `rsync -a` of the working tree, including `.git` |
| Files compared | 754 |
| Directories in the backup | 272 |
| SHA-256 result | 754 identical, 0 changed, 0 only in the active tree, 0 only in the backup |

Disk space on `/System/Volumes/Data`, measured with `df -k`:

- Before the copy: 11,093,296 KiB available (about 10.6 GiB). The earlier Finder figure of about 13.42 GB was not the amount available at copy time.
- After the copy: 10,933,496 KiB available (about 10.4 GiB).
- Copy consumption: 159,800 KiB.

Space was sufficient. No existing files or backups were deleted.

### Excluded

- `node_modules` (about 79 MB). Regenerable with `npm install`. That reinstall was not run.
- `dist` (about 90 MB). Regenerable with `npm run build`. That rebuild from the backup was not run.
- Two `.DS_Store` files.

`tmp/` was inspected before exclusion. It holds development screenshots, so the directory was kept. No `.env` file and no `.netlify` directory were present. `.env.example` was copied. Secret values were not printed. The backup was not uploaded.

### What was verified

Verified by direct comparison and read-only Git commands, without restoring over the active site:

1. The backup directory exists beside the project.
2. 754 compared files have identical SHA-256 hashes, including source, tests, configuration, `.git`, references, artwork, and screenshots.
3. The modified and untracked files listed above are in the backup and match the active files.
4. All six November 24 design images are in the backup, including both screenshot filenames that contain a narrow no-break space before `PM`.
5. `MAIN LOGO.png` and `Mainsmalllogo.png` are in the backup and match. Both are opaque.
6. `LHSBC_MASTER_PROJECT.md` as it existed at snapshot time was included and matched.
7. `public/images/schools/ahsb-main-logo.png` is absent from the backup working tree, and `git cat-file -e HEAD:public/images/schools/ahsb-main-logo.png` succeeds. The deletion and the historical blob are both preserved.
8. `main` resolves to `47a4d0c`, and that object type is `commit`.
9. `canva-homepage` resolves to `ff62fb4`, and that object type is `commit`.
10. `git fsck --full` in the backup exited 0 with no reported problems. Branch refs and the index hash were unchanged by those read-only checks.
11. File count: 754 copied files. Exclusions are listed above.
12. At the end of the hash comparison there were no content differences among the copied files.

### What was not tested

A recovery drill was not performed. Nothing was restored over `/Users/stellaroskens/Developer/LHSBC`, and the backup was not checked out, reset, or installed on its own. `npm install` and `npm run build` were not run inside the backup. Same-disk storage does not protect against loss of the whole volume.

After this snapshot was verified, this checkpoint file was added and `LHSBC_MASTER_PROJECT.md` was updated in the active project. Those two documentation files were then copied into the backup and their hashes were checked again. Website source was not part of that documentation copy.

## Routes

Public, inside the shared layout: `/`, `/information`, `/our-club`, `/meet-the-bowlers`, `/meet-the-bowlers/:playerId`, `/practices`, `/tournaments`, `/sponsors`, `/donate`, `/sponsor-qr`, `/fundraisers`, `/resources`, `/volunteer`, `/contact`, `/faq`, `/bowl-a-thon`, `/team-gear`, `/sign-in`, `/family`, and the not-found route.

Restricted: `/staff/login`; `/admin` and its existing sections for a super administrator; `/coach` for coach or super administrator; `/team-administrator` for team administrator or super administrator.

`/information` is untracked source and is not in the public nav or sitemap. `/bowl-a-thon` remains a route and is still linked from the homepage About hotspot. It is not a revived promotion.

## Homepage

`/` renders `src/pages/HomeReview.tsx`, an image map whose JPEG is not in `public/`. The header and footer are hidden on that route. `src/pages/Home.tsx` is an unused rollback. Retro rules remain in `src/styles/lhsbc-home.css` and are not what the live component renders. `canva-homepage` contains a different layered homepage and is historical only.

The future homepage will be responsive HTML and React components. A flattened homepage image with invisible hotspots will not be used.

## Administration and integrations

Super-administrator screens still cover content, bowlers, coaches, club administration, connections, donations, announcements, tournaments, settings, media, history, links, staff, family, consent, and system status. Coaches and team administrators keep their own dashboards and bowler editing. Family access stays closed. Content editing still publishes only through the existing GitHub path, which is not activated locally.

Payments, social links, email, and the sponsorship URL remain disabled. Donation checkout stays refused. Identity UI stays closed unless `VITE_ADMIN_AUTH_ENABLED` is exactly `true`. No `.env` is present. There is no `netlify.toml`. No payment, authentication, email, or deploy action was taken.

## Tests, build, and preview

- Historical milestone, November 22: 133 passed, 0 failed. This milestone is not replaced.
- November 25 working tree: 132 passed, 1 failed. Failure: missing `public/images/schools/ahsb-main-logo.png`.
- November 25 production build: succeeded.
- Preview URL at the start of Prompt 01A: `http://127.0.0.1:4173/`.

## Design reference hierarchy

Authoritative, not yet implemented:

1. Homepage layout: `references/design-2026-11-24/HOME PAGE Lebanon High School Bowling Club Homepage.png` (1536×1024, opaque). Landscape, six information cards, one sponsor section.
2. Horizontal logo: `references/design-2026-11-24/MAIN LOGO.png` (1672×941, opaque). Preserve the original artwork.
3. Circular header logo and separate shirt-printing artwork: `references/design-2026-11-24/Mainsmalllogo.png` (1254×1254, opaque). Preserve the original artwork.
4. Global system: `references/design-2026-11-24/Screenshot 2026-11-24 at 7.42.18 PM.png`.
5. Sponsor-band decoration: `references/design-2026-11-24/Screenshot 2026-11-24 at 5.27.22 PM.png`. One sponsor section.

Supplemental only: `references/design-2026-11-24/nice log.png`.

Palette: Matte Navy `#061C2E`, Athletic Red `#B90C17`, Vintage Cream `#FFF0D5`, Classic White `#FFFFFF`.

Historical, not design authorities: the current image-map homepage, the retro homepage CSS, and the `canva-homepage` branch. Do not merge that branch automatically.

Missing at the close of Prompt 01A: transparent copies of the two official logos had not been prepared. The masters stay as they are. Prompt 02, later the same day, added proposed transparent derivatives. They are not owner-approved and are not wired into the header. There is still no clean lanes-only plate, no separate footer sweep, no six card icons, and no fundraising goal or amount-raised field. Mockup sponsor names and tracker figures are not club records. Full-page screenshots are not production backgrounds.

## Blockers still open

- Live homepage image missing from `public/`.
- Official logos not wired into the site.
- One failing test caused by the unrestored Albany logo deletion.
- No fundraising-tracker data.
- Bowl-A-Thon still linked from the homepage About hotspot.
- Backup is local and on the same disk. Dependencies and `dist` must be regenerated after any future restore. That restore has not been tested.

## Next action

Artwork preparation is complete. The owner approved the review-sheet set on November 25, 2026. That approval is recorded at the end of this file. Website implementation has not started.

## Prompt 02 — artwork preparation — November 25, 2026

Status: partial. The redesign has not been implemented. No route, homepage, authentication, payment, or sponsor-data change was made. Branch remains `main` at `47a4d0c`. `canva-homepage` remains `ff62fb4`. The verified backup was not modified. All six November 24 reference files still match that backup.

### Proposed derivatives, not owner-approved

| File | Source | Size | Notes |
|---|---|---|---|
| `public/brand/lhsbc/lhsbc-main-logo-web.png` | `references/design-2026-11-24/MAIN LOGO.png` | 1672×941 RGBA, 1,757,303 bytes | Exterior black field removed. Aspect ratio unchanged. |
| `public/brand/lhsbc/lhsbc-header-logo-web.png` | `references/design-2026-11-24/Mainsmalllogo.png` | 1254×1254 RGBA, 1,598,175 bytes | Exterior black field removed. Full circle kept. |

Method: edge-connected removal of the near-neutral black canvas, stopping at navy and colored edges, then removal of enclosed pure-black pockets larger than 200 pixels that were not bordered by the blue ball. Colored pixels that remain keep the master RGB. This was not a blanket black-to-transparent conversion. Pillow was used locally. No external service and no new dependency.

Checked on Matte Navy `#061C2E`, Vintage Cream `#FFF0D5`, and a plain warm brown field. Lettering, ball, pins, bulbs, arrow, and starbursts remain. The circular mark is still recognizable at 36, 44, 48, and 56 CSS pixels. Those sizes are tests, not the Prompt 04 header size. Small lines inside the circle are not a reason to redraw it.

Review sheet: `tmp/artwork-preview/index.html`.

### Not suitable as the new official logos

`hero-marquee.png`, `header-crest.png`, `display-marquee.png`, `display-crest-redball.png`, `marquee.png`, the Canva crest and hero, and `pins-logo-800.webp` are different drawings. `pins-logo-800.webp` is Albany High School Bowling artwork. `header-crest.png` remains the uncommitted winged file and was not overwritten.

### Still missing

- Clean wide lane background. Existing `home-hero-lanes-*.jpg` and `home-hero-lanes-alt.jpg` contain a logo and thank-you lettering. `homeHeroBanner` still points at those files for Bowl-A-Thon. Do not use them behind the new hero. Recommended plate, when approved: at least 2400×900, wood lanes, warm light, navy atmosphere, subtle red, no type, logos, buttons, or sponsors. Proposed future name `lhsbc-hero-lanes.webp` was not created.
- Six matched card icons: pin, ball, people, calendar, megaphone, and speech bubble. `join-illustration.png`, handshake, and storefront art are older scenes, not those icons. Canva button files contain fixed words. No icon library was added.
- A standalone footer pin and ribbon artwork. Prompt 03 can draw pinstripes, the navy title plaque, gold starbursts, the trophy, checks, and the footer sweeps as small SVG or CSS. Do not bake headings into images.
- Sponsor names in the 5:27 PM screenshot stay decorative. `communitySponsors` remains empty.

### Duplicates left in place

The two Canva packs are byte-identical. `media.ts` points at `LHSBC_Homepage_Artwork` only. `approved-homepage.png` matches `homepage-image-1.png`. Nothing was deleted.

### Legacy test

`AHSB_LOGO` in `src/lib/content/schoolLogos.ts` still points at the missing Albany file. `scripts/bowlerProfiles.test.ts` still requires that file. The November 25 result remains 132 passing and 1 failing. Do not restore the file inside the visual pass. A later one-file decision can either put the committed blob back or stop the test from requiring an Albany mark.

### Prompt 03 decoration plan

Use CSS for red and cream pinstripes, the navy section plaque, and card surfaces. Use small SVG for starbursts, the trophy, checks, arrows, and the footer red and blue sweeps. Keep the club name, navigation, and tagline as HTML. One sponsor band, with empty-state placeholders, not a second sponsor section.

Prompt 02A, recorded next, created the lane background and those SVG decorations after this Prompt 02 note. The sentences above stay as the Prompt 02 record.

## Prompt 02A — remaining artwork — November 25, 2026

Status: artwork is prepared for owner review. The redesign has not been implemented. No route, homepage, authentication, payment, or sponsor-data change was made. Branch remains `main` at `47a4d0c`. `canva-homepage` remains `ff62fb4`. The verified 03:35 backup was not modified. Incremental artwork copies, not a full site backup, are in `/Users/stellaroskens/Developer/LHSBC-backup-artwork-2026-11-25-040958`.

### Bowling alley background

`public/brand/lhsbc/lhsbc-hero-lanes.webp` was preserved, not regenerated, upscaled, stretched, or replaced.

| Check | Result |
|---|---|
| Dimensions | 1280 × 480 |
| Ratio | 8:3 |
| Format | WebP, RGB |
| Bytes | 79,336 |
| SHA-256 | `bd2324f76c92be8d257a9bc00a663fbe6d34764e916c841a5a04572584021770` |

The generator’s original frame was 1280 × 720. This file is the existing 8:3 crop. 1280 px wide is accepted for the first visual test. Whether it is sharp enough at 1440 px and 1920 px is a desktop-homepage question, not a reason to replace the file now. It is not connected to `HomeReview` or `media.ts`. Older `home-hero-lanes-*.jpg` files still contain a logo and thank-you lettering and are still not this background.

### Logos left unchanged

Masters: `references/design-2026-11-24/MAIN LOGO.png` and `Mainsmalllogo.png`. Proposed transparent copies: `public/brand/lhsbc/lhsbc-main-logo-web.png` and `lhsbc-header-logo-web.png`. Approval is still pending. None of these four files were overwritten in Prompt 02A.

### Proposed SVG set

All of these are new, lightweight, and not owner-approved. They are not wired into the site. No icon library was installed. No headings, button words, club name, tagline, navigation, social icons, or sponsor names are drawn into the files. Navy plaques, gold borders, pinstripes, dividers, and button borders stay as later CSS.

| File | Role |
|---|---|
| `public/brand/lhsbc/icons/icon-bowling-pins.svg` | Three cream pins, red neck bands, gold highlight. Navy About card. |
| `public/brand/lhsbc/icons/icon-bowling-ball.svg` | Cream ball, three dark holes, gold and deep-red motion streaks. Red Join card. |
| `public/brand/lhsbc/icons/icon-community.svg` | Three cream people. Navy story card. |
| `public/brand/lhsbc/icons/icon-calendar.svg` | Red calendar, rings, cream date grid. Cream card. |
| `public/brand/lhsbc/icons/icon-megaphone.svg` | Red megaphone and sound lines. Cream card. |
| `public/brand/lhsbc/icons/icon-conversation.svg` | Red speech bubble, three cream dots. Cream card. |
| `public/brand/lhsbc/icons/footer-bowling-pins.svg` | Footer pin group. No circular logo. |
| `public/brand/lhsbc/icons/footer-ribbon-red.svg` | Athletic red sweep, `#B90C17`. |
| `public/brand/lhsbc/icons/footer-ribbon-blue.svg` | Secondary blue sweep, `#1F4F8A`. |
| `public/brand/lhsbc/icons/footer-stripe-cream.svg` | Thin cream accent, `#FFF0D5`. |
| `public/brand/lhsbc/icons/deco-trophy.svg` | Red trophy. |
| `public/brand/lhsbc/icons/deco-starburst.svg` | One gold starburst, reused as a pair. |
| `public/brand/lhsbc/icons/deco-check.svg` | Red check. |
| `public/brand/lhsbc/icons/deco-arrow.svg` | Red arrow, pointed right. Rotate in CSS later if another direction is needed. |

Gold accents use `#E8B84A` and `#C8962E`. No fictional sponsor logos were drawn. The sponsor area remains one showcase, with empty placeholders to be built in HTML later.

### Review

`tmp/artwork-preview/index.html`, served at http://127.0.0.1:8765/. It shows the original and proposed logos, the lane file at 1280, 1440, and 1920 CSS pixels without changing its ratio, a 390 × 220 center crop, a left-side logo placement that is not a homepage, the six icons on navy, red, or cream, the footer marks, and the trophy, starburst, check, and arrow.

### Still not artwork for this pass

Homepage implementation, route changes, the Albany logo test, fundraising amounts, and live integrations remain untouched. A larger lane file is not required yet. CSS-only decorations are intentionally not drawn as images.

## Owner approval — Prompt 02A — November 25, 2026

The owner reviewed the isolated artwork sheet and approved the artwork shown there for the upcoming website visual refinement. Artwork preparation is complete. No approved file was regenerated or replaced. Website implementation has not started.

Approved for use:

- `public/brand/lhsbc/lhsbc-main-logo-web.png` — horizontal transparent derivative.
- `public/brand/lhsbc/lhsbc-header-logo-web.png` — circular transparent derivative.
- `public/brand/lhsbc/lhsbc-hero-lanes.webp` — panoramic bowling alley background, approved for initial testing at the existing 1280 × 480 size. Visual quality is to be reevaluated during the desktop homepage review.
- `public/brand/lhsbc/icons/icon-bowling-pins.svg`
- `public/brand/lhsbc/icons/icon-bowling-ball.svg`
- `public/brand/lhsbc/icons/icon-community.svg`
- `public/brand/lhsbc/icons/icon-calendar.svg`
- `public/brand/lhsbc/icons/icon-megaphone.svg`
- `public/brand/lhsbc/icons/icon-conversation.svg`
- `public/brand/lhsbc/icons/footer-bowling-pins.svg`
- `public/brand/lhsbc/icons/footer-ribbon-red.svg`
- `public/brand/lhsbc/icons/footer-ribbon-blue.svg`
- `public/brand/lhsbc/icons/footer-stripe-cream.svg`
- `public/brand/lhsbc/icons/deco-trophy.svg`
- `public/brand/lhsbc/icons/deco-starburst.svg`
- `public/brand/lhsbc/icons/deco-check.svg`
- `public/brand/lhsbc/icons/deco-arrow.svg`

Original masters stay untouched: `references/design-2026-11-24/MAIN LOGO.png` and `references/design-2026-11-24/Mainsmalllogo.png`. Earlier sentences in this file that call the derivatives or SVGs pending describe the state before this approval. This section is the current decision. The files are still not wired into the website.

## Pass 00 — final homepage handoff — November 25, 2026

The owner-supplied handoff at `references/homepage/LHSBC_Cursor_Handoff/` was verified read-only, then isolated vector candidates were prepared. No website component was changed in that pass. `reference/APPROVED_HOMEPAGE.png` (1024×1536) is the homepage visual authority and replaces the earlier six-card landscape layout. The 69 reference crops stay reference-only. Twelve corrected SVG candidates are in `artwork/corrected-candidates/` and are not installed. The comparison page is `tmp/artwork-preview/pass-00-quality.html`.

Correction to the Pass 00 artwork report: `public/brand/lhsbc/lhsbc-main-logo-web.png`, `public/brand/lhsbc/lhsbc-header-logo-web.png`, and `public/brand/lhsbc/lhsbc-hero-lanes.webp` (1280×480, 8:3) remain the approved official derivatives and lane plate. They were not regenerated and were not rejected because the homepage layout changed. Their sharpness is still subject to review when the hero is implemented. Earlier simplified icons must not override the new handoff artwork. Original logo masters were not modified.

## Pass 01 — shared header — November 25, 2026

Status: implemented on interior pages. Owner visual approval is pending. The header is not approved merely because the build passed.

Approach approved before coding: faithful HTML and CSS. No flattened header image. No image-based Menu, search, or Sign In control. No header logo, social icons, or header Donate button. `/donate` and checkout behavior are unchanged. The image-map homepage was not edited, and the shared header is still hidden on `/`.

Files changed for the header:

- `src/components/Header.tsx`
- `src/components/header/AccountButton.tsx`
- `src/components/header/SiteSearch.tsx`
- `src/styles/header.css`

Hamburger and magnifier use the existing inline SVG icons, colored with CSS. Cream dividers are CSS. No new image files were added for the header.

Tests, `npm test`: 133 passed, 0 failed, 43 suites. Duration 691.052708 ms.

Production build, `npm run build`: succeeded. Steps were `captureDeployTarget`, `tsc --noEmit`, and Vite 8.3.4. The existing chunk-size notice remains, now for `dist/assets/index-Csk77Kzl.js` at 550.05 kB. Exit code 0.

Preview: `http://127.0.0.1:5173/our-club`. Dev server is Vite on port 5173. Checked widths 1920, 1440, 1024, 768, 430, 390, and 375 with no horizontal overflow. Menu opens and Escape returns focus to Menu. Search for “practice” lists Practices and navigates to `/practices`. Sign In opens the existing `/sign-in` page. The homepage still uses the image map.

Limitations: the rounded page frame is still Pass 08. The header is not on `/` yet. The Menu label reads Close while the drawer is open. Button proportions are compact rather than stretched to the mockup crop. Typography uses the existing Oswald and Source Sans 3 faces.

## Official website address — November 25, 2026

The Netlify project was renamed to `lhsbc`. This is the current hosting record. No deploy, commit, push, or branch change was made.

| Item | Value |
|---|---|
| Official club | Lebanon High School Bowling Club |
| Abbreviation | LHSBC |
| Hosting provider | Netlify |
| Project name | `lhsbc` |
| Official website URL | `https://lhsbc.netlify.app/` — superseded the same day by `https://lhsbcor.com/`. See the custom-domain section. |
| Netlify project ID | `45fe01b0-d58c-4255-a47d-7cfa8df98ab1` |
| GitHub repository | `https://github.com/stellaroskens/LHSBC.git` |
| Local project | `~/Developer/LHSBC` |
| Production branch | `main` |

**Superseded by the custom-domain section below.** `https://lhsbc.netlify.app/` is the Netlify hosting address, not the address for flyers or QR codes. `https://lshbc.netlify.app/` is obsolete.

Local preview `http://127.0.0.1:5173/` is not the public site.

## Final club identity — November 25, 2026

This owner decision supersedes every earlier instruction about participating schools and recruitment geography. The project was not restarted. The section-by-section homepage plan continues.

LHSBC is exclusively Lebanon High School Bowling Club in Lebanon, Oregon. **Superseded by the custom-domain section:** the public site is `https://lhsbcor.com/`.

Sweet Home is not part of the club. No Sweet Home logo, school choice, or combined-school description is authorized. Task T10, which called for Lebanon and Sweet Home recruitment, is cancelled. The design handoff no longer treats that eligibility question as open.

The former Albany bowling organization is migration history. It is not part of LHSBC. South Albany and West Albany marks remain excluded from the public school list. They were not added to the site. Published pages and `src/` were searched and contain no Sweet Home text. `SCHOOL_IDS` remains `lebanon` only.

No route, content file, test, commit, push, or deployment was changed for this identity correction. Historical sentences in the master record were kept and marked superseded.

## Resources verification — November 25, 2026

The Resources page lists “Albany Bowling Center Pro Shop” in Albany, Oregon, with a status that an operating pro shop under that name could not be confirmed. Leave it for verification during the Resources page refinement. Do not treat it as an endorsed LHSBC resource, and do not replace it with invented information.

## Pass 01 approval and Pass 02 hero — November 25, 2026

The owner visually approved the shared header. Its appearance stays as implemented. NAV-01 is recorded in `LHSBC_MASTER_PROJECT.md` and is deferred until before Pass 09: replace the sidebar menu with a dropdown under the red Menu button, without shifting the page. It was not implemented.

Pass 02 puts that header and a real hero on `http://127.0.0.1:5173/`. The hero uses the official horizontal logo and the 1280×480 lane plate. The square header logo was not used there. No fundraising dollars or percentage were published. Donate Now links to `/donate`, and checkout stays off. **Superseded later the same day:** the former campaign preview link is not on the homepage. The homepage footer and the later homepage sections were not added.

Tests: 133 passed, 0 failed, 43 suites. Production build succeeded. Nothing was committed, pushed, or deployed.

## Pass 02A proportions — November 25, 2026

Pass 02 is not visually approved. The small centered layout came from the 1240-pixel maximum width, not from a zoom or a transform. The header now uses the full page width, with 24–48 pixel gutters. The hero content grows to 1440 pixels. At 1440 the stage is 495 pixels tall and the logo is 725×408. At 1920 the stage is 548 pixels tall, the content is 1440 wide, and the logo is 710×399. Narrow widths stack. There was no horizontal overflow from 375 through 1920. The former campaign preview link was removed from the homepage. **Superseded by the campaign-removal section below:** the old route no longer shows a campaign page. Tests again: 133 passed, 0 failed. Production build succeeded. Nothing was committed, pushed, or deployed.

## Campaign removal and page inventory — November 25, 2026

The former Albany campaign is superseded. It is not an LHSBC event. The campaign page, search result, FAQ category, page-editor section, sitemap entry, and campaign-only styles are out of the active site. `/bowl-a-thon` redirects to `/fundraisers` without campaign wording. Donations, fundraisers, sponsors, admin tools, and roster tools remain. No financial records were deleted.

The original WAHSB checkout was not available under `~/Developer`. The inventory is in `LHSBC_MASTER_PROJECT.md` section 34. It lists the public pages, private tools, and the existing homepage destinations. There is no public join form. A later Join control should use `/our-club`.

Command+0 at 100% zoom is the correct way to review the hero. No further proportional change was made. **Superseded later the same day:** Pass 03 is built. See the section below.

## Pass 03 support banner — November 25, 2026

The owner accepted Pass 02. The header and hero were left in place. A navy Support Our Team band sits under the hero. Become a Sponsor opens `/sponsors`. Fundraising Opportunities opens `/fundraisers`. Stars, dividers, and the ball are vector artwork. The reference crop was not installed.

The band is one row at 1440 and 1024. It stacks at 768, 390, and 360, and the ball is hidden there. Overflow was 0. `npm test` 133 passed, 0 failed. `npm run build` succeeded. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed. **Superseded later the same day:** Pass 03 is provisionally accepted. See the next section.

## Deferred refinements and Pass 04 — November 25, 2026

Pass 03 is accepted only so the build can continue. It is not final artwork approval.

NAV-01 stays deferred: accordion categories under Menu, cream links, Donate inside Support the Team, no page dim and no page shift. ART-03 stays deferred: replace the temporary support-banner ball and pins with reference-matching artwork. FONT-03 stays deferred: review the Support Our Team heading against the reference. None of those three were built.

Pass 04 adds Why Join and Club Highlights under the banner. Recruitment links go to `/our-club`, `/tournaments`, `/meet-the-bowlers`, and `/practices`. Registration, practice days, and tournament dates stay unconfirmed. There is still no public join form. Checks, stars, gold rays, and the ribbon are temporary vectors and CSS. At 1440 and 1024 the cards are two equal columns. At 390 they stack. Overflow was 0. Build Skills opens `/our-club`. `npm test` 133 passed, 0 failed. `npm run build` succeeded. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed. **Superseded later the same day:** Pass 05 is built.

## Pass 05 upcoming events — November 25, 2026

Pass 04 is provisionally accepted. Earlier homepage sections were left in place. Upcoming Events uses the existing practice-tournament list. That list has no verified dates, so the page shows the empty-state sentence. View Full Schedule opens `/practices`. Tournament details, and any future dated row, open `/tournaments`. The calendar and schedule badge are temporary geometric art, recorded as ART-05. At 1440 the row is calendar, message, and schedule badge. At 390 it stacks. Overflow was 0. View Full Schedule opens `/practices`. Tournament details opens `/tournaments`. `npm test` 133 passed, 0 failed. `npm run build` succeeded. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed. **Superseded later the same day:** Pass 06 is built.

## Pass 06 quick links — November 25, 2026

Pass 05 is provisionally accepted. ART-05 stays open for the calendar, yellow schedule badge, and decorative arrow. Those were not redrawn.

Five whole-card links sit under Upcoming Events: Schedule `/practices`, Tournaments `/tournaments`, Team `/meet-the-bowlers`, Resources `/resources`, Sponsors & Fundraising `/sponsors`. Icons are the existing simplified SVGs plus a temporary handshake, recorded as ART-06. The damaged handshake PNG was not installed. The Sponsors page body reaches `/donate`. `/fundraisers` is in the shared footer, not in the sponsor content. **Superseded by the launch-preparation section:** Sponsors now links to Fundraisers in the page body. `npm test` 133 passed, 0 failed. `npm run build` succeeded. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed. Pass 07 has not started.

Verification, confirmed again after the inventory: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. Homepage overflow was 0 at 1440, 1024, 768, and 390. At 1440 the hero remains two columns; at 768 and 390 it stacks. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed.

## Official custom domain — November 25, 2026

`https://lhsbcor.com/` is the official website. `https://www.lhsbcor.com/` redirects to it. `https://lhsbc.netlify.app/` remains the Netlify hosting address for project `lhsbc`, ID `45fe01b0-d58c-4255-a47d-7cfa8df98ab1`. The project was not renamed, and DNS was not edited from this workspace.

`sharing.publicWebsiteUrl`, the homepage canonical tag, `og:url`, and `public/sitemap.xml` use `https://lhsbcor.com/`. Fundraiser and sponsorship URLs stay empty. `/sponsor-qr` still shows its empty state and does not encode a Netlify, preview, or payment address. A later sponsorship URL would still be drawn by `api.qrserver.com`. That is not the official website QR.

Both supplied codes decode to `https://lhsbcor.com/`. The SVG is the scalable master and the PNG is the print file. They live at `references/design-2026-11-24/qr codes/LHSBC-Official-Domain-QR.svg` and `references/design-2026-11-24/qr codes/LHSBC-Official-Domain-QR.png`. There is no `references/qr-codes/` folder. They were not copied into the public site because no page displays a website QR.

A check the same day found HTTPS 200 on the apex, a 301 from www to the apex, and HTTP 200 for the main public routes on the deployed site. Unpublished local work was not deployed. `npm test` 133 passed, 0 failed. `npm run build` succeeded. Nothing was committed, pushed, or deployed.

## Launch preparation — November 25, 2026

The accepted homepage was not redesigned. A sponsor panel and the shared navy footer were added. Our Club, Sponsors, Donate, Fundraisers, and Contact cross-link recruitment, sponsorship, and the donation page. Checkout stays off. The unverified Albany pro shop listing was removed. The public club email is still unconfirmed, and the placeholder fundraiser address is not shown. The official QR files still decode to `https://lhsbcor.com/`. This folder is not linked in the Netlify CLI, and `netlify.toml` stays out of the repo. At 390 pixels, overflow was 0 on the homepage and the five priority pages. `npm test` 133 passed, 0 failed. `npm run build` succeeded. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed.

## Draft deployment — November 25, 2026

Interior pages use the homepage navy, cream, and red treatment, with readable italic titles. How to Join is on Our Club and does not offer a working mailbox. `info@lhsbcor.com` is the intended address and is not published. NAV-01 remains open. Payments stay off. The draft of this local build is `https://6b074d57d7a776040e6f5a4a--lhsbc.netlify.app`. Production `https://lhsbcor.com/` was not updated. `npm test` 133 passed, 0 failed. `npm run build` succeeded. Nothing was committed or pushed.
