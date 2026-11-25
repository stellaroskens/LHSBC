# LHSBC — Master design implementation
**Design baseline:** `reference/APPROVED_HOMEPAGE.png` (1024 × 1536).  
**Scope:** existing Lebanon High School Bowling Club website; visual refinement, not a new site.  
**Approval status:** homepage reference selected by owner; rebuilt header artwork awaiting explicit approval; stages 02–08 reference only.

## 1. Cursor operating contract
- Open only the existing LHSBC project. Expected local path `~/Developer/LHSBC`; verify repository identity and branch before edits. Never modify WAHSB.
- Read this file, `LHSBC_DESIGN_SYSTEM.md`, `ASSET_PLACEMENT_CHECKLIST.md`, the approved image and the inventory. Use actual filenames, not guessed URLs.
- Inspect the current router, homepage, shared header/footer, styles, public assets, data sources, and existing tests before proposing changes. Reuse existing code, routes, components, tokens and integrations. Do not invent routes, functionality, dependencies, data, or credentials.
- Make the smallest safe change for the current stage. Preserve existing APIs, storage, auth behavior, student privacy, and backwards compatibility. No broad refactor or unrelated redesign. Do not activate payments, publish content, commit, push or deploy without explicit owner permission.
- The earlier build was reported as Vite/React/TypeScript with 133 passing tests; that is a historical baseline, not a verified current result. Check actual scripts and run the current tests/build. Do not overwrite local changes or discard untracked files.
- Start with a read-only audit. Report exact files, current route mappings, available artwork, missing assets, and the plan for the next stage. Stop for owner approval before editing. After each major visual pass, provide a working local preview URL and desktop/mobile screenshots or a precise verification report. Never claim a link works without checking it. Keep the existing preview server running if appropriate.

## 2. Artwork handling
`artwork/reference-only/` contains 69 source crops at native size. These are visual guides, not a production bundle. Some contain adjacent artwork or clipped details because the source is a flat mockup. Never copy these into public production paths merely to make the preview look complete. Do not use the rejected automatic traces or upscale them as a substitute for fresh artwork.

`artwork/approval-candidates/01-header/` contains eight reconstructed assets, PNG plus SVG. Inspect the corresponding contact sheet and get explicit approval before installation. SVG should be preferred for approved scalable icons; PNG is a fallback. Full-component images are visual references even after artwork approval; do not implement an interactive control as a screenshot. For complex artwork, require a freshly produced clean, transparent PNG (where appropriate) or the owner's official logo source; no false vector conversion. Record actual dimensions, alpha, and provenance. For newly approved raster artwork target at least 300 px on the short edge where sensible, preferably 600–1200 px for icons and 2× intended render size for large hero artwork. 300 DPI metadata alone is not resolution.

Recommended install path after approval: `public/images/lhsbc/<stage>/<filename>`. This is a proposed convention; reuse an existing project convention if present and report the actual path. Copy only approved, used assets. Avoid duplicate assets and never put the entire handoff directory under `public/`.

## 3. Homepage structure, top to bottom
### 01 — Header
Continuous rounded navy/red/cream frame. On desktop place the glossy red MENU pill at left with hamburger icon, then a cream divider and generous empty navy space. Align compact cream search input and magnifying glass to the right, then divider and glossy red SIGN IN pill. No social icons or Donate in header. Use real button/link/input semantics, visible keyboard focus, current menu/search/auth logic and touch-friendly hit areas. Search may wrap into a second row at narrow widths. Do not embed the full navigation image. Maintain one page frame, not a second duplicate frame around header.

### 02 — Hero
Full-width bowling-lane image in navy/red neon tones. Main Lebanon High School Bowling Club logo on left, heading `HIGH SCHOOL BOWLING AT LEBANON` on right, fundraising card underneath heading. Card has cream rounded background, dark title, red raised amount, goal and percentage, horizontal progress and red DONATE NOW CTA. Mockup values ($2,450 / $5,000, 49%) are design examples only; use confirmed current data or the site's honest empty state. Do not invent totals or enable payment systems. Use official owner-approved logo, not a newly traced facsimile. Separate clean background artwork is still missing; use only existing approved artwork or keep current background until approval. On mobile stack logo, heading and tracker; keep important graphics visible and allow natural height.

### 03 — Support banner
Navy strip immediately below hero. Left italic `Support Our Team!`, middle gold star and `BECOME A SPONSOR`, right gold star and `FUNDRAISING OPPORTUNITIES`; cream dividers and bowling motif at right. Match the reference wording where consistent with verified site content. Use current sponsor/fundraising destinations. Text stays readable and live; decorative elements must not overlap. Wrap or stack on smaller widths.

### 04 — Club information
Cream main surface. Two red-outlined rounded cards: WHY JOIN? (checkbox list) and CLUB HIGHLIGHTS (star list), navy ribbon headings with red tails and gold rays. Reference lists: Build Skills; Compete at Tournaments; Make Friends; Be Part of a Team. Highlights: Open to all Lebanon High School students; All skill levels welcome; Competitive and fun team environment; Learn, improve and represent Lebanon. Keep verified Lebanon eligibility. SUPERSEDED November 25, 2026: the owner resolved the earlier Lebanon/Sweet Home question. The club is Lebanon, Oregon only. Do not add Sweet Home or expand enrollment. Use live text and semantic headings/lists. Stack on mobile.

### 05 — Upcoming events
Red curved UPCOMING EVENTS ribbon, red rounded outline, calendar graphic at left, events list in middle, yellow VIEW FULL SCHEDULE starburst at right with red arrow. Real existing event source and schedule route. Mockup placeholder labels are not actual events. Render the existing honest empty state if no events are confirmed. Reflow the CTA underneath the list on phones; do not crop the event text.

### 06 — Quick links
Five equal cream tiles with navy rounded borders and icon above bold italic label: Schedule, Tournaments, Team, Resources, Sponsors & Fundraising. Use existing route mappings; if a destination does not exist, identify the blocker instead of creating a broken link. Desktop five columns when width permits; tablet 2–3; phone 2 or 1 depending on available width and label wrapping. Keep the DOM reading order. No duplicate image-based text and visible live text.

### 07 — Sponsor section
Navy/gold SUPPORT OUR BOWLING CLUB capsule centered with gold stars and red stripes. Cream outlined panel below; red trophy and WHY SPONSOR OUR CLUB? on left, navy divider, red checkmarks and benefit list on right. Reference benefits: confidence/life skills; team jerseys, equipment and practice time; tournaments and representation; positive inclusive team/community. Preserve verified current content and use responsive live markup. On mobile stack and remove divider if needed.

### 08 — Footer and frame
Navy footer with pins and club wordmark at left, existing live links at right (reference: Home, About, Join, Events, Fundraising, Sponsors, Contact), then tagline Student-Athletes / Teamwork / Community / School Pride separated by gold stars. Confirm routes, wrap links, preserve required legal/privacy/footer items already present. Extend the top's rounded navy, cream and red frame around the entire page; use CSS nested borders or shadows with consistent widths and corner radii. Frame grows with content. No extra white outer margin or large blue bottom band; no fixed screenshot aspect ratio. Ensure children don't bleed outside radius. Don't remove existing accessibility or utility features.

## 4. Pass sequence and checkpoints
0. Audit only, no modifications; confirm scope, routes, scripts, missing artwork and design conflicts.
1. Header only. Owner approves clean header artwork, then approves the working header at desktop and mobile.
2. Hero only. Owner approves logo, background and tracker controls before implementation; confirm fundraising data handling.
3. Support banner. Approve isolated artwork and then live layout.
4. Club information. Confirm eligibility copy and both panels.
5. Events. Verify real schedule/empty state and CTA.
6. Quick links. Confirm five route mappings and icon fidelity.
7. Sponsor section. Confirm artwork, copy and links.
8. Footer and frame. Verify whole-page border and footer on all viewports.
9. Only after homepage approval: apply shared visual tokens/components to existing pages, one page at a time. Preserve each page's existing purpose and content; no blanket replacement.

At each stage: present only that stage's changes, review art at native and target sizes, confirm approved filenames, run existing tests/build, inspect keyboard/touch operation, check responsive widths (360, 390, 768, 1024, 1366, 1440 suggested), verify no horizontal page overflow, and supply preview link. Report pass/fail and any blockers. Stop after the stage until explicit approval. No next-stage work unless requested.

## 5. Definition of done
- Approved imagery remains clean at intended size; no jagged traces, adjacent fragments, distorted letters or accidental image backgrounds. For candidate artwork, compare with the source and report any visual departure.
- Real interactive elements, real links and current data. Keyboard, visible focus, accessible names, alt text (empty for decorative images), semantic headings, contrast and reduced-motion behavior are checked.
- No unintended route, data, permissions, or behavior changes. No student photos/identities introduced by this design task. No payment activation or deployment.
- Run actual project tests and build; report command outputs, not historical results. Document changed files, asset paths and approval checkpoint. If anything is missing, keep the existing working implementation and report why rather than fabricating artwork or functionality.
