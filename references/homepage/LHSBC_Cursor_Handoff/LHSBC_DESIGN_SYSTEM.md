# LHSBC — Shared visual design system
**Authority:** `reference/APPROVED_HOMEPAGE.png`. This guide interprets the chosen retro bowling design for responsive web use. Tokens and measurements below are proposed starting points, not brand-certified exact values. Match visually and get owner approval before propagating sitewide.

## Identity and visual voice
Retro bowling-alley marquee, athletic collegiate lettering, confident community feel. Navy foundation, glossy red calls to action, warm cream content canvas, gold highlights, stars, bowling pins and ribbon motifs. Keep the identity cohesive, readable and suitable for students, families and sponsors. Do not introduce unrelated school mascots, extra gradients, social links in the header or generic stock graphics. Use owner-provided official logos unchanged.

## Proposed palette / CSS tokens
```css
:root {
  --lhsbc-navy: #081f46;
  --lhsbc-navy-deep: #06152f;
  --lhsbc-red: #e30616;
  --lhsbc-red-dark: #a50814;
  --lhsbc-cream: #faf4e6;
  --lhsbc-white: #fffdf8;
  --lhsbc-gold: #ffc400;
  --lhsbc-ink: #0a2048;
  --lhsbc-muted: #526078;
  --lhsbc-border-width: 3px;
  --lhsbc-card-radius: 16px;
  --lhsbc-frame-radius: 28px;
  --lhsbc-max: 1366px;
  --lhsbc-gutter: clamp(12px, 2vw, 24px);
}
```
Use existing tokens where they already exist; don't blindly append duplicates. Red is a CTA and emphasis color, not the primary reading color. Use navy text on cream and white/cream text on dark navy. Check actual text/gradient combinations for WCAG AA (4.5:1 normal text, 3:1 large text). Gold is a decorative accent; avoid gold small text on cream. Colors are visual estimates, not sampled exact brand specifications.

## Typography
- Headline: bold condensed athletic sans, italic/oblique where the mockup uses it; all caps for hero and ribbons. Use existing fonts first; select a licensed condensed family only with owner approval. No new remote dependency for a minor styling pass.
- Body: legible sans, medium/normal weight. Use mixed case for long text and accessible letter spacing. A simple system stack is acceptable pending typography approval.
- Suggested desktop H1 40–60px, responsive clamp to ~28px; H2 26–38px, card title 20–30px, body 16–18px, small supporting text 14–16px. These are starting points, adjust to match approved reference and avoid overflow. Line height ~1.15 headings, ~1.5 body. Do not squeeze or stretch typography to imitate a raster screenshot.

## Layout and spacing
Use one consistent centered container with fluid gutters; retain existing layout tokens where possible. Desktop reference's hero is two columns, main cards two columns, quick links five columns. On tablet allow wrapping, on mobile stack content and maintain DOM order. Suggested spacing rhythm 4/8/12/16/24/32/48 px. Match section density without forcing a 1024×1536 screenshot aspect ratio. No horizontal overflow; all content can grow naturally. Main sections join seamlessly; no arbitrary white strips. Full-width navy bands are contained by continuous frame. Preserve all existing page content and navigation.

## Component recipes
| Component | Appearance | Interaction / responsive |
|---|---|---|
| Frame | Continuous rounded navy/cream/red stripes | CSS preferred; flexible height; no duplicate corner assets |
| Header | Navy, left Menu, empty center, compact right search, Sign In | Real controls; wrap search; hide dividers as needed |
| Primary CTA | Glossy red pill, cream/gold trim, white bold label | Hover darken slightly, focus visible, disabled clearly distinct; 44px target preferred |
| Secondary action | Navy with cream outline or cream surface with navy label | Consistent with existing interactions; do not replace working behavior |
| Cream card | Cream surface, red or navy outline, rounded corners | Responsive padding, semantic content; subtle shadow only |
| Ribbon heading | Navy with red tails or red event ribbon | Live text over clean decorative shape; no crop |
| Progress | Cream track, red fill | Width computed from real progress; accessible semantics; text amount separate |
| Star/check bullet | Red icon, navy text | Decorative alt empty; native list structure |
| Quick link tile | Navy outline, cream fill, approved icon, italic navy heading | Entire tile real link; visible focus; labels wrap |
| Sponsor banner | Navy strip, gold stars and cream dividers | Live text; wrap/stack; omit decoration if crowded |
| Footer | Navy, pins/wordmark, live links and gold star tagline | Links wrap, preserve legal and privacy items |

## Artwork standards
For production, use approved genuine SVG for simple shapes and icons (not raster images embedded in SVG or thousands of noisy traced paths). Preserve editable source paths where practical. Use high-quality PNG with alpha for complex illustrations when appropriate, and high-resolution raster for photo backgrounds. Preserve proportions using contain for logos/icons and cover only for background imagery where cropping is safe. Raster target ≥2× intended display size; 300px short edge for individual graphics where useful; 300 DPI metadata is optional for web and does not establish clarity. Never upscale a low-resolution crop as proof of quality. Inspect edges at 100% and 200%, lettering, clipping, color, transparency, and halo/fringing. A complete reference panel should be recreated using live HTML/CSS and approved isolated graphics. Use appropriate compressed web formats only after approval and keep source PNG/SVG unchanged.

## Applying to existing pages
Audit actual route inventory, then keep shared header, frame, footer, typography, buttons and cards consistent. Page-specific headings and content remain unique: join page uses steps/forms; schedules and tournaments use readable event lists; team pages preserve privacy and permission rules; sponsor/donate pages preserve actual payment state and verified copy; resources and other existing pages keep working functionality. Do not create missing routes as part of a design pass unless owner requests it. Review each page at desktop and mobile and request approval before the next.

## Accessibility and review
Keyboard navigation, logical heading hierarchy, visible focus rings, form labels, text alternatives, error states and reduced motion. Avoid text-only-in-images except approved logo wordmarks with appropriate alt text. Test at narrow and wide widths, 200% browser zoom and with long labels. Avoid decorative overlays intercepting pointer events. Verify contrast on actual rendered components.

## Approval record
**November 25, 2026 — owner-approved permanent direction (supersedes earlier "candidate" notes for the header and homepage).** The published homepage, shared header, NAV-01 accordion menu, and shared footer are approved and are the authority for all pages. Identity: Modern American Retro Bowling — Refined Atomic Age Marquee. Permanent preferences:
- Interior page backgrounds: a balanced mix of navy and warm cream, chosen by each page's purpose (navy bands for marquee and scoreboard moments, cream for reading, forms, and lists).
- Decorative intensity: moderate, tasteful retro accents (starbursts, pinstripes, sweeping streaks, plaques, scoreboard details), never behind important text.
- Private dashboards: modern and clean with subtle LHSBC branding (colors and type only).
Implementation tokens live in `src/styles/sitewide.css` (`--sw-*`) and `src/styles/header.css`. The full record is section 45–46 of `LHSBC_MASTER_PROJECT.md`.

Earlier note: Header rebuild: candidate, not approved. All other isolated artwork: pending high-quality recreation/approval. Homepage source is the selected visual reference; it is not approval of every derived file, all example copy, or any financial/event data.
