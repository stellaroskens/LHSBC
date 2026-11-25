# LHSBC | Master Project Record 2026–2027

**Version:** 1.0 — November 24, 2026, 1:13pm Pacific  
**Authority:** Consolidated baseline for owner review; not authorization to implement or publish.  
**Scope:** Accessible project history, emphasizing November 17–24.  
**Status key:** COMPLETE = documented completion; APPROVED = decision, not necessarily implemented; OPEN = outstanding; BLOCKED = dependency; PROPOSED = not approved; UNVERIFIED = evidence insufficient. Dates are Pacific where known. Historical reports are not fresh tests.

## 1. Executive overview
Lebanon High School Bowling Club (LHSBC) is the independent bowling club for Lebanon High School in Lebanon, Oregon. It is not a combined-school program, and it is not represented as school-sponsored. Sweet Home is not part of this club. The former Albany bowling organization is the migration source only. It is not part of LHSBC. Goals: accessible bowling, skill development, friendship, tournaments, recruitment and financial assistance for equipment, shoes and participation. The website, administrative dashboard, fundraising, recruitment materials and uniforms are parallel workstreams. Do not confuse LHSBC with WAHSB (Albany) or the earlier LHSBL working label. Section 30 is the controlling identity decision.

**Superseded, retained as history:** the original overview said the club served Lebanon and Sweet Home, Oregon, for 2026–2027. That geographic scope is no longer authorized.

**Operating rules:** Preserve approved designs and existing functionality; smallest safe changes; reuse components; no unrelated refactors, dependencies or invented club facts. Do not modify WAHSB or WAHSB_AUDIT. No commit, push, deployment, hosting activation or live integrations without explicit owner approval. Request a fresh preview after major design passes. Keep completed tasks visible. Never store credentials or private youth information in this record or public GitHub.

## 2. Confirmed website build status
| Item | Last documented state |
|---|---|
| Local checkout | `~/Developer/LHSBC` (`/Users/stellaroskens/Developer/LHSBC`) |
| Repository | https://github.com/stellaroskens/LHSBC.git |
| Stack | Vite, React, TypeScript |
| Migration | 229 tracked files from WAHSB commit `a787377fe4088e44b66d946b29b87c6372a74948`, branch `release/public-website`; committed versions used despite nine unstaged source deletions; `netlify.toml` excluded |
| Git | At last inspection main unborn, files untracked, no remote branch heads; cloud checkout contained only Git metadata. Current state unknown. |
| Preview | http://127.0.0.1:5173/ (Mac-local, not a public URL); previously HTTP 200 |
| Checkpoint | Prompt 15 complete per Nov 22 audit; Prompt 16 proposed, no completion report. Nov 23 page requests do not establish implementation. |
| Tests/build | 133 passed, 0 failed; production build succeeded, Nov 22 reported |
| Release | Not authorized; production readiness unverified |

**November 25, 2026 checkpoint (Prompt 01 accepted, Prompt 01A).** The rows above stay as the historical record. Section 23 is the Prompt 01A state. In particular, the November 22 milestone of 133 passing tests and 0 failures is unchanged. Before Prompt 02B, the November 25 working tree was 132 passing and 1 failing. Section 27 is the current test and build result: 133 passing, 0 failing, and a successful production build. Git is no longer unborn. The website redesign has not begun.

Technical map: `src/App.tsx` routes/guards; `/` uses `src/pages/HomeReview.tsx`; `Home.tsx` rollback placeholder; `src/styles/lhsbc-home.css`; `src/content/media.ts`; `public/brand/lhsbc/`, `public/images/`; `src/content/published/siteContent.json`, `src/content/site.ts`; `src/content/published/siteConnections.json`, `.env.example`; `PublicMenu`, shared header/footer, `src/components/PageMeta.tsx`, `index.html`, `public/robots.txt`, `public/sitemap.xml`; `netlify/functions/`, `scripts/`, `package.json`. Preserve `homeHeroImage()`, `pageBodies.home.hero.heading`, `pageBodies.home.hero.buttonTo`, `matchesActiveFundraiser`, `activeEvent` and typed published fields. No fundraiser displayed when activeEvent is none.

## 3. Website page inventory
This is the complete *known* inventory, not an independently enumerated router. Unknown paths must be read from the current Mac `src/App.tsx`. All pages require a fresh desktop/mobile walkthrough unless otherwise stated.

| Page / area | Known route | Evidence and next action |
|---|---|---|
| Home | `/` | COMPLETE local implementation at P15; visual follow-up open |
| Our Club | `/our-club` | Reported present; Join CTA verified here; full registration paragraph |
| How to Join | Unverified | Nov 23 new design/content request; determine whether separate route or Our Club replacement; preserve links |
| Practices | Unverified | Present per audit; confirm schedule and venue |
| Tournaments | `/tournaments` | Full Calendar destination verified; dates TBD |
| Meet the Bowlers / Our Team | Unverified | Present; verify roster consent and data |
| Individual bowler profile | Unverified | Present; verify privacy and permissions |
| Team Gear | Unverified | Present; no live store |
| Sponsors | Unverified | Present; confirm sponsor names and logo permission |
| Fundraisers | Unverified | Present; preserve inactive-event logic |
| Donate | `/donate` | Informational only; later design request, implementation unverified |
| Resources | Unverified | Present; check links |
| Rules | Unverified | Quick link; verify whether standalone page or resource section |
| Volunteer | Unverified | Present; confirm requirements |
| FAQ | Unverified | Present; update actual joining details |
| Contact | Unverified | Present; delivery disabled |
| Bowl-a-thon | Superseded | Former Albany campaign. Removed from active LHSBC content on November 25, 2026. Old `/bowl-a-thon` addresses redirect to `/fundraisers`. See section 34. |
| Sponsor QR | Unverified | Present; no real QR destination activation |
| Sign In | Unverified | Present; live identity inactive |
| Family entry | Unverified | Present; verify authorization |
| Admin | Unverified | Restricted; hosted access untested |
| Coach | Unverified | Restricted; hosted access untested |
| Team administrator | Unverified | Restricted; hosted access untested |
| Find out more / menu | Unverified | Later menu design with search requested; user reports existing menu Nov 23; route and behavior unverified |

## 4. Approved designs and mockups
- APPROVED direction: retro athletic/varsity bowling, navy/red/cream, white and gold accents; readable non-cursive typography. Earlier inspected colors navy `#0b1f4d`, red `#c41e3a`, cream `#f3ecdf`; Oswald and Source Sans 3; verify current CSS.
- Homepage reference #2 and red-ball crest reference #3 govern the reported P15 build. One bulb-lit marquee, full pins and stars, thank-you plaque, navy pills, Join/Support/Business Fundraising cards (pin, handshake, storefront), quick links, events ribbon, sponsor crest panel, navy footer with “Community ★ Strong Bowlers ★ Brighter Futures.”
- Header menu visible at all widths, red Donate, red/white stripe; desktop three cards with aligned buttons, phone stacked; 24px gutters, max 1366px; full-width background bands. Mobile cream treatment, no lane backdrop or secondary artwork, intentional space above pills.
- Dashboard mockup #2 explicitly approved Nov 18: retain all existing tiles/topics, use supplied logo instead of bowling balls, clean modern layout, extend sheet as needed.
- Other concept boards (ten homepage concepts, five variations, flyer/card variants) are not automatically approved. Earlier school-color variants and mascot concepts do not override the current crest direction.

## 5. Pending design changes
- D01 OPEN: P16 desktop lanes-only backdrop behind single marquee, fade to cream; retain mobile treatment. Missing clean asset means retain cream. Later Nov 22 report describes hero lane treatment but does not prove P16 acceptance; inspect current screenshot/binding.
- D02 OPEN: quick-link illustration fidelity to reference #2; optional pending review.
- D03 OPEN: Nov 23 How to Join page, same aesthetic but not a copy of menu layout; welcoming headline, beginner-friendly copy, Join and Contact a Coach CTAs, getting-started steps, FAQs, application and contacts. No implementation confirmation.
- D04 OPEN: menu/search and Join/Donate/Find out more navigation decisions; reconcile against existing PublicMenu and route guards before changing.
- D05 OPEN: align inner pages with homepage while preserving data and functionality. No blanket redesign authorization.
- D06 OPEN: verify Join card alignment and mobile registration status; earlier report noted taller desktop card/hidden paragraph, P15 specifies short status on both widths and full paragraph on Our Club.

## 6. Completed tasks and historical confirmation log
| ID | Date | Completed / reported | Source |
|---|---|---|---|
| C01 | Nov 19–22 | Local migration/rebrand from committed WAHSB baseline; separate checkout | S01, S02 |
| C02 | By Nov 22 | Prompts 01–10: audit, rebrand, HomeReview retro rewrite, layout, interim crops, responsive QA and test fixes | S01, S03 |
| C03 | By Nov 22 | Prompt 12 display artwork added (not proof supplemental ZIP installed) | S01 |
| C04 | Nov 22 | P15 shared container width correction; menu always visible; zero overflow at measured widths | S01 |
| C05 | Nov 22 | Build success and 133/0 tests; menu opens at 390px, Escape closes, Join and Full Calendar destinations checked | S01, S04 |
| C06 | Nov 18 | Dashboard mockup #2 approved; design decision complete, script deployment not complete | S05 |
| C07 | Nov 24 | Weekly Friday review scheduled, 8am Pacific per active automation record | S12 |
| C08 | Nov 24 | Master record generated; owner acceptance and external storage pending | This record |
| C09 | Nov 25 | Prompt 02B: retired the obsolete Albany club-logo test dependency; Lebanon school marks kept; file not restored | Section 27 |

Exact individual dates for P01–P14 not recovered. P11 original ZIP installation remains unverified despite later artwork passes. Do not mark all tasks through P15 as individually closed solely from the checkpoint.

## 7. Outstanding master task register
| ID | Priority | Status | Task / completion evidence required |
|---|---|---|---|
| T01 | P0 | OPEN | Verify Mac Git state, route map, current screenshots, build/test report; protect working tree with approved backup |
| T02 | P0 | OPEN | Confirm venue agreement, coaches, age/grade eligibility, roster, practice times, tournament eligibility and dates |
| T03 | P0 | OPEN | Determine legal entity, governance, insurance, youth safety and financial authority |
| T04 | P1 | BLOCKED | Reconcile P11 artwork ZIP and P16 backdrop; exact assets and current bindings |
| T05 | P1 | OPEN | Resolve D01–D06, approve Join design and verify all links |
| T06 | P1 | BLOCKED | Select independent host/domain/email; explicit release authorization |
| T07 | P1 | OPEN | Correct dashboard Start sheet mismatch, verify all tiles and permissions |
| T08 | P1 | OPEN | Confirm sponsor commitments, sponsorship levels, donor outreach script and tracking |
| T09 | P1 | BLOCKED | Payment setup after entity/bank/authorized representative approval |
| T10 | P1 | CANCELLED | Sweet Home recruitment is no longer authorized. Recruit Lebanon students only. Finalize social and print materials for LHSBC. See section 30. |
| T11 | P1 | BLOCKED | QR proof and print release depend on approved public URL |
| T12 | P2 | OPEN | Obtain delivered uniform quotes, size list, proof and budget approval |
| T13 | P1 | OPEN | Release QA, privacy/security, metadata, legacy asset review and role gates |
| T14 | P2 | OPEN | Maintain weekly review, archive completed items, update master record |
| NAV-01 | P1 | DONE | Replace the full-height sidebar with a compact accordion under the Menu button. Expandable navy category headings, cream link backgrounds, red and gold accents. Keep every current destination. Add Donate inside Support the Team. Do not dim the page, shift the page, or change the approved header. Keyboard access stays. Complete before the Pass 09 review. **Built November 25, 2026 (section 43). Owner approved; live in production deploy `6b0768f8e5805be40a0ca4e5` (section 44).** |
| ART-03 | Deferred | OPEN | The Pass 03 ball and pins are a temporary vector. Replace them in the final visual refinement with artwork that matches the approved support-banner reference. Do not block earlier passes. |
| FONT-03 | Deferred | OPEN | Review the Support Our Team heading against the approved reference during the final visual refinement. The current band uses the existing Oswald italic. Do not add a font for this now. |
| ART-05 | Deferred | OPEN | Outstanding visual refinement for Upcoming Events: the calendar illustration, the yellow schedule badge, and the decorative arrow. The current calendar and badge are temporary geometry, and the arrow is absent. Do not correct this during later homepage passes. |
| ART-06 | Deferred | OPEN | Quick-link icons are temporary. Schedule, Tournaments, Team, and Resources use the existing simplified SVGs. Sponsors uses a geometric handshake because `handshake.png` has a black background and damaged edges. Replace the set with reference-matching artwork later. |

## 8. Duplicate/conflicting instructions and resolution log
| Conflict | Resolution |
|---|---|
| LHSBL / LHSBC / WAHSB | LHSBC is the Lebanon High School Bowling Club. LHSBL is an earlier working label. WAHSB is the separate Albany source and is not part of LHSBC. |
| Lebanon and Sweet Home scope | Superseded November 25, 2026 by section 30. The club is Lebanon, Oregon only. |
| School branding vs independent club | Do not imply school sponsorship. Current crest and retro palette govern; earlier school-color/mascot concepts are proposals. |
| P11 blocked vs P15 complete | Later display artwork is documented, but original transparent pack installation is not proven. Keep separate. |
| 1100px vs 1366px desktop cap | P15 latest confirmed 1366px maximum with 24px gutters. |
| Lane backdrop vs cream | P15 cream fallback; P16 proposed lanes-only desktop backdrop. Later hero descriptions require inspection, not automatic supersession. |
| Join leads to Our Club vs separate How to Join | P15 verified Our Club; Nov 23 user requests dedicated content/design. Confirm routing before implementation. |
| Existing menu vs new menu/search | User reports menu exists; later labels/search are requirements, not verified code. |
| Donate CTA vs active payments | Informational Donate remains controlling until explicit activation approval. |
| 3×5 vs 4.5×5.5 print | Latest requested full-bleed 4.5×5.5 design for Avery 8387; verify actual template dimensions before printing (possible mismatch). |
| Nonprofit-other label vs legal status | Earlier payment planning label is not evidence of registration or tax exemption. |
| Duplicate audit files | Three Nov 22 copies with matching reported size and retrieved excerpts; use original S01, preserve copies, no deletion. |

## 9. Files, artwork and missing information
| Asset | Status / location |
|---|---|
| Original build audit | S01; retrieved full text |
| Audit duplicates | `LHSBC_Build_Audit_and_Handoff(1).md`, `(1)(1).md` — matching retrieved excerpts |
| Phase 1 review | S02; referenced by audit, full contents not reviewed here |
| Homepage reference #2 / crest #3 | S06/S07; identified by audit, original pixels not independently inspected in this consolidation |
| Local references | `references/homepage/lhsbc-crest.jpg`, `references/homepage/homepage-mockup.jpg` reported present |
| Display assets | `display-header-ribbon.png`, `display-marquee.png`, `display-join.png`, `display-handshake.png`, `display-storefront.png` reported added P12 |
| Earlier crops | `public/brand/lhsbc/`, `crops/`, `header-mark-from-mockup.png`, `marquee-theater.png` |
| Supplemental ZIP | S08; five alpha-channel PNGs (marquee, Join mascot, handshake, storefront, header crest); earlier Mac search failed; local installation unknown |
| Clean lanes-only image | Missing/unverified; no text, logo, UI or claims |
| Screenshots | `/tmp/lhsbc-p15-1280.png`, `/tmp/lhsbc-p15-1366.png`, `/tmp/lhsbc-p15-390.png` reported; may expire |
| Concept boards | `Lebanon High School Bowling Club Designs.png`, `Lebanon High School Bowling Club Homepage(4).png` retrieved descriptions only |
| Dashboard workbook | Historical filename only: `Lebanon & Sweet Home Youth Bowling Club _ 2026–2027(1).xlsx`, referenced Nov 18. That title is superseded. It is not the club name. Full workbook inventory was not recovered. |
| Dashboard script | `BowlingDashboard.gs.gs` referenced in error; full source not recovered |
| Flyers/cards | Original editable and print-ready files, exact approved variants and QR target missing/unverified |
| Club records | Venue agreement, roster, permissions, sponsor agreements, bank/entity records, final email/domain and insurance evidence missing/unverified |

## 10. Fundraising and sponsorship
Earlier discussions report a potential sponsor willing to cover lanes and Tony willing to donate a bowling ball for a raffle. These are reported intentions, not received funds or executed agreements. No confirmed sponsor ledger, amounts, receipts, sponsorship tiers or campaign launch. Confirm commitments in writing; track business, contact, date, amount/in-kind value, restrictions, follow-up, receipt and logo permission. Keep assistance goals (tournaments, supplies, shoes for lower-income bowlers) transparent. Prepare a relaxed student-friendly call script: introduce self and club, ask whether business would consider sponsoring/donating, offer website information, invite referrals of interested students; include common questions and approved answers. Nov 16 request for less stiff language remains controlling. No claim of tax deductibility until verified. Raffle requires separate Oregon legal review before launch.

## 11. Payment system setup
Donorbox is a candidate; campaign/account label `LHSBC2026-27` appeared in Nov 22 discussion (do not treat as credential or evidence of setup). Earlier planning considered Stripe Business, PayPal Business, eligible Venmo business payment options and GroupRaise. No verified account creation, bank connection, approved processor, test transaction, checkout or payout. Do not reuse Albany accounts or environment values. Sequence: confirm legal recipient and authorized representative; bank and accounting controls; choose provider and verify eligibility/fees/payment methods; configure in test mode; confirm receipts/refunds/reconciliation; obtain explicit activation approval. No credentials in master file. Donate remains informational; real QR/payment links inactive.

## 12. Social media and recruitment
**Superseded November 25, 2026:** the Nov 17 running task called for social flyers for Lebanon and Sweet Home. Sweet Home outreach is cancelled. Current recruitment is Lebanon only. Historical note: Recruitment open to beginners; high school focus, middle school inclusion requested in outreach but eligibility needs confirmation. No confirmed social account ownership, publishing or recruitment counts. Create approved copy, school/community distribution permissions, parent consent for youth photos, contact method, and schedule. Do not publish personal roster or imply school endorsement. Rules to publish include no phones on lanes and spectator etiquette; final policy approval pending.

## 13. Flyers and printed materials
Nov 23 flyer direction: retain #3 logo and stripes, use heading from other reference, prominent QR, move scan-for-details text, remove competing pin/ball illustration as requested. Front/back donor cards: one side information, other QR and writable bowler name; explain support for tournaments, supplies and shoes. Five horizontal front/back variants requested (ten sides); initial 3×5 changed to full-area 4.5×5.5 for Avery 8387. User rejected a prior layout. No final proof/print confirmation. Verify manufacturer template, trim/bleed/safe margins, readable QR quiet zone, actual destination, duplex alignment, test scan and physical proof before order. Keep social flyer and donor card approvals separate.

## 14. Uniforms and merchandise
Nov 23 confirmed requirements: approximately 20 mixed youth/adult 3-button golf polos, retro stripe down right side, back logo with name above, front left chest/pocket placement; maximum $15 per shirt ($300 for 20). Matching parent/coach long-sleeve sweatshirts and T-shirts desired; separate pricing. Candidate vendors from prior search: ApparelBetter (advertised $12.90, not verified customized/delivered), Glory Ground, Seven Jerseys, Uswa Sports, Garb Inc., Ajeer Industries, ZAB Sports, Rise Uniform, Pro Bravio, ZipaSports. No vendor confirmed all specs at budget; no purchase. Obtain written quote including customization, setup, freight, taxes, minimums, youth sizing, proof, lead time and reorder terms. Confirm whether actual pocket or chest print is required.

## 15. Google Sheets and administration
Nov 18 dashboard mockup #2 approved; Apps Script requested for existing workbook. Execution failed at 9:31:25pm: `Could not find the Start sheet. Check startSheet in the script settings.` at `BowlingDashboard.gs.gs:773` and `:145`. No successful rerun reported. First verify actual tab name and script configuration; preserve all tiles, topics and existing data. Recommended administrative inventory (proposed, not confirmed tabs): dashboard/search/navigation, roster and consent, contacts, attendance, practice/tournaments, scores, equipment, uniforms, sponsors, donations, expenses/budget, volunteer roles, communications, website checklist, decision log and tasks. Limit access by role; no public student data. Record spreadsheet URL, owner, tab names, script version, permissions and successful execution evidence. Keep financial records separate from public dashboard.

## 16. Club formation and nonprofit requirements
Earlier Nov 16 discussions: Linn Lanes owners Gary and Lynn; owner concern about independent shops; proposed no advertising, sponsor-paid lanes, volunteer coach Tony, Wednesday or weekend mornings; Matthew Freeman coach contact. Nov 19 tournament was a target, not confirmed participation. Secretary Stella Roskens identified in Nov 23 content request. Verify role acceptance and venue agreement. User supplied contact details in that conversation; Matthew number appears incomplete, and all personal phone numbers require confirmation/publication consent; intentionally omitted from shareable master file. Email described as in progress.

Proposed administrative/legal checklist (not legal determination): choose independent structure or fiscal sponsor; verify Oregon nonprofit incorporation/name/registered agent, board and bylaws, EIN, bank and financial controls, Oregon charitable registration applicability, federal tax exemption eligibility/application, reporting obligations, insurance, background checks and youth safeguarding, parent consent and emergency procedures, tournament/league eligibility, raffle rules, school name/logo permission. No evidence filings completed. Verify requirements with Oregon and IRS authorities before fundraising claims. Do not promise tax-deductible gifts.

## 17. Hosting, domain and email
No confirmed public URL, purchased domain, selected hosting provider, or functioning club mailbox. Netlify configuration intentionally excluded; do not inherit Albany site, domain, Identity or secrets. Choose independent provider/domain, establish authorized owner and DNS/email records, test HTTPS, redirects, SPF/DKIM/DMARC and contact delivery only after approval. **Superseded by section 39:** the custom domain is now `https://lhsbcor.com/` on the existing Netlify project. Local preview is not shareable outside Mac. GitHub remote is not a verified backup. Google Drive and GitHub copies of this master record are requested as future storage destinations, not performed by this consolidation.

## 18. Testing and deployment readiness
Historical test counts: migration 129/4 (excluded Netlify config expectations); rebrand 109/24; early rewrite 106/27; restored controls 109/24; P07–10 133/0 after obsolete expectations and `prepareContentForSave` empty entries fix; P15 133/0 and build success. Local suite does not validate hosted JWT gates, payments or delivery.

| Viewport | P15 shared width | Marquee |
|---|---:|---|
| 1024 | 961 | Fits |
| 1140 | 1077 | Fits |
| 1280 | 1217 | 928 |
| 1366 | 1303 | 928 |
| 1440 | 1366 | 928 |
| 390 | 342 | 342 |

Reported zero overflow; 15px desktop scrollbar; 38px gap above pills at 390. Nov 22 report: quick-link Next works at 390; arrows disabled when all cards fit (941px+ reported). Fresh checks required: Git state, `npm test`, `npm run build`, local HTTP status, every CTA/menu/footer link, keyboard/focus/Escape, responsive clipping and registration status, metadata/favicon/canonical/OG/robots/sitemap, legacy Albany assets and incidental data, public/staff/family role guards, production function permissions and integration-off behavior. Release gate requires owner approval and current evidence. No commands run against live project in this consolidation.

## 19. Blockers and dependencies
- Critical: local working tree not independently accessible; remote history not verified. Risk of losing untracked work.
- Club operations: venue, coach roles, eligibility, insurance, legal entity and dates unconfirmed.
- Artwork: supplemental pack installation and clean backdrop unknown; current design screenshot needed.
- Admin: Start sheet error blocks dashboard execution.
- Launch: no approved domain/hosting/email, no release authorization; QR printing and payment activation depend on these and legal/financial authority.
- Uniforms: no compliant delivered quote. Flyers: final template and proof unresolved.
- Evidence: full chat transcripts, local files, original mockup pixels, current Google Sheets, Gmail correspondence (retrieval failed), live GitHub state and Drive folder contents not independently reviewed. Accessible summaries and audit used; no claim of exhaustive access.

## 20. Prioritized next steps (recommended, not new approvals)
1. Protect and verify the Mac working tree; obtain read-only Cursor report with current Git state, actual routes, asset bindings, screenshots, tests and preview. Do not commit/push without permission.
2. In parallel, confirm venue, coach roles, eligibility, schedule, governance and financial authority; document written evidence.
3. Reconcile P16 and Nov 23 page requests against current build; approve Join mockup and route plan; preserve homepage.
4. Repair dashboard configuration after inspecting actual workbook; verify all tiles and permissions.
5. Decide independent domain, host and mailbox; prepare release plan and QA; obtain explicit publication approval.
6. Finalize sponsor outreach, social flyers and print proofs after contact/URL approval; confirm payment provider only after entity/bank readiness.
7. Obtain uniform quotes and proof; approve order only within budget.
8. Update this record after each verified pass; weekly Friday review keeps completed tasks and blockers visible.

## 21. Source and conversation index
Dates/titles from accessible history; direct chat URLs not recovered. References are descriptive locators, not fabricated links. Some earlier context included because it materially affects current work.

| Ref | Date | Title / source | Contribution |
|---|---|---|---|
| S01 | Nov 22 | [LHSBC_Build_Audit_and_Handoff.md](https://chatgpt.com/library?file_id=libfile_c5a4c6e17f388191a3629b6243d8fff9&account_id=personal) | Full retrieved audit, P15 checkpoint |
| S02 | Nov 21–22 | [LHSBC Phase 1 Review](https://chatgpt.com/library?file_id=libfile_6d4c30231bcc8191882896682e1a28cd&account_id=personal) | Earlier audit referenced in S01 |
| S03 | Nov 21 | Continue LHSBC Build; LHSBC Artwork Install Blocked | P11 partial, migration constraints |
| S04 | Nov 22 | Create Cursor Build Prompt | Homepage report, tests, arrows, references |
| S05 | Nov 18 | FAMILY DASHBOARD | Workbook, mockup #2 approval, script error |
| S06 | Nov 21–22 | [Retro homepage reference #2](https://chatgpt.com/library?file_id=libfile_33344bf0e04c8191bc2d9f17ae89bb47&account_id=personal) | Design reference cited by audit |
| S07 | Nov 21–22 | [Red-ball crest reference #3](https://chatgpt.com/library?file_id=libfile_6744294f9bf0819186ae883268f1fbb5&account_id=personal) | Logo reference cited by audit |
| S08 | Nov 21–22 | [LHSBC_Homepage_Artwork.zip](https://chatgpt.com/library?file_id=libfile_7b9c16a34be8819184fc4658d2369f66&account_id=personal) | Supplemental artwork cited by audit |
| S09 | Nov 21 | Audit LHSBC Migration Plan | Width correction and handoff request |
| S10 | Nov 21 | Save Site To Google Drive | Empty clone, local setup |
| S11 | Nov 21 | Create Mockups | Desktop/mobile visual variants |
| S12 | Nov 24 | Schedule LHSBL Review | Active weekly review, Friday 8am |
| S13 | Nov 23 | Create How To Join Page | Contacts, application and FAQs |
| S14 | Nov 23 | Create Five Polished Variations; Simplify Join Page Brief | Existing menu/home, new Join aesthetic |
| S15 | Nov 23 | Create Bowling Flyers | Flyer revisions, donor cards, print size |
| S16 | Nov 23 | Find Bulk Polo Vendors | Uniform budget/specs and vendor research |
| S17 | Nov 22 | Password entry review | Donorbox label only; no credentials retained |
| S18 | Nov 16 | BEST MASTER PROMPTS | Launch checklist and student sponsor script |
| S19 | Oct 19 | Payment Setup Guide | Processor planning, not proof of setup |
| S20 | Nov 17 | Running LHSBL to-do list (summary) | Social flyers |
| S21 | Nov 16 | Club formation/venue discussions (title unavailable) | Venue, volunteer coach, nonprofit planning |
| S22 | Nov 24 | Combine Master Project | Consolidation request |
| S23 | Oct 20 | Website wireframe checklist | Admin tracking and navigation preferences |
| S24 | Sept 1 / Nov 23 context | Build App Foundation | Smallest-safe-change and preview rules |
| S25 | Nov 22 | Pasted text(20261122-200613).txt (retrieved summary) | Integration-off constraints |
| S26 | Nov 21–22 | [Earlier narrow desktop screenshot](https://chatgpt.com/library?file_id=libfile_e648052b9b4c81919203cebc8a47998c&account_id=personal) | Historical pre-P15 evidence |

## 22. Maintenance and handoff protocol
Use this file as the consolidated baseline after owner review. Suggested repo location `LHSBC_MASTER_PROJECT.md` at root, or owner-approved docs folder; store matching copy in Drive and ChatGPT Project. No external write performed. On every update record date, source, changed task IDs, approval status, build/test results, preview, blockers and next action. Newer confirmed evidence supersedes earlier evidence; proposals do not. Preserve prior completion history. Cursor should inspect current local state before relying on this record and report discrepancies rather than overwrite working features. Keep private contacts, credentials, minors' records and bank details in restricted systems, not this shareable file.

## 23. November 25, 2026 checkpoint — Prompt 01 accepted, Prompt 01A backup

Prompt 01 was reviewed and accepted. Prompt 01A created a local recovery backup. No homepage, logo, route, payment, authentication, or deployment change was made. The redesign has not begun.

| Item | November 25 confirmed state |
|---|---|
| Directory | `/Users/stellaroskens/Developer/LHSBC` |
| Branch | `main`, tracking `origin/main` |
| Baseline commit | `47a4d0cf2835c9983f653d53f4cb2bdbdff623a4` (`47a4d0c`), “Baseline before Canva homepage rebuild” |
| Local Canva branch | `canva-homepage` at `ff62fb476ed71f9cd41ee7491b1524dfdd5841a8` (`ff62fb4`). Not checked out. Not on the remote. Not a design authority. Do not merge it automatically. |
| Remote | https://github.com/stellaroskens/LHSBC.git — `origin/main` matches `47a4d0c` |
| Preview | http://127.0.0.1:4173/ returned HTTP 200 at the start of Prompt 01A. This is the production preview of the current working tree, not port 5173. |
| Tests | Historical Nov 22 milestone: 133 passed, 0 failed. Nov 25 working tree: 132 passed, 1 failed. The failure is `scripts/bowlerProfiles.test.ts` because `public/images/schools/ahsb-main-logo.png` is missing from disk. The file was not restored. |
| Build | `npm run build` succeeded on Nov 25 (`tsc --noEmit`, then Vite). `dist/` is regenerable and was excluded from the new backup. |
| Prior backup | `~/Developer/LHSBC-backup-2026-11-23` still exists and was not overwritten. It has no commits and is an outdated, incomplete copy. |
| New backup | `/Users/stellaroskens/Developer/LHSBC-backup-2026-11-25-033533` (156 MB). Verified by SHA-256 against the active tree before this documentation update. Details are in `docs/LHSBC_CHECKPOINT_2026-11-25.md`. |

Uncommitted tracked changes preserved in the backup: modified `src/App.tsx`, `src/content/media.ts`, `src/lib/content/linkInventory.ts`, and `public/brand/lhsbc/header-crest.png`; deleted working-tree path `public/images/schools/ahsb-main-logo.png` (the blob remains in commit `47a4d0c`). Untracked work preserved: `src/pages/Information.tsx`, this master document, `references/design-2026-11-24/`, `references/information-menu/`, both Canva artwork packs, extra brand artwork, and `tmp/screenshots/`.

Homepage status: `/` still renders the image-map `HomeReview`. That implementation, the unused retro CSS, and the `canva-homepage` commit are historical. The authoritative homepage comp is `references/design-2026-11-24/HOME PAGE Lebanon High School Bowling Club Homepage.png`. The future homepage is responsive HTML and React components, not a flattened image with invisible hotspots. Not implemented in this checkpoint.

Design decisions confirmed, not implemented:

- Official horizontal logo: `references/design-2026-11-24/MAIN LOGO.png` (1672×941, opaque).
- Official circular header logo, also the separate shirt-printing artwork: `references/design-2026-11-24/Mainsmalllogo.png` (1254×1254, opaque).
- Palette: Matte Navy `#061C2E`, Athletic Red `#B90C17`, Vintage Cream `#FFF0D5`, Classic White `#FFFFFF`.
- Landscape six-card homepage is authoritative. `nice log.png` stays supplemental. The 7:42 PM screenshot is the global system. The 5:27 PM screenshot is the single sponsor-band reference. Preserve original logo artwork.

Routes, admin tools, and integration restrictions are unchanged from the accepted Prompt 01 audit. Public routes include `/`, `/information`, `/our-club`, `/meet-the-bowlers`, `/meet-the-bowlers/:playerId`, `/practices`, `/tournaments`, `/sponsors`, `/donate`, `/sponsor-qr`, `/fundraisers`, `/resources`, `/volunteer`, `/contact`, `/faq`, `/bowl-a-thon`, `/team-gear`, `/sign-in`, `/family`, and the not-found route. Restricted routes remain `/staff/login`, `/admin` and its sections, `/coach`, and `/team-administrator`. Payments, Identity, email, and QR destinations stay off. **Superseded by section 34:** the former campaign is not a dormant public page. Its old address redirects to `/fundraisers`. There is still no fundraising-tracker data model.

Outstanding blockers at the Prompt 01A checkpoint: the live homepage image is missing from `public/`; official logos are not wired in; the November 25 backup is on the same disk as the project; `node_modules` and `dist` must be regenerated after a restore; a full restore was not executed; one test fails until the Albany logo deletion is decided; mockup sponsor names and tracker figures are not club records. Section 27 closes the Albany club-logo test item. The other items in this list remain open.

## 24. November 25, 2026 — Prompt 02 artwork preparation

Prompt 02 did not start the redesign. `main` is still `47a4d0c`. `canva-homepage` is still `ff62fb4`. The 03:35 backup was not modified, so it does not contain the new derivatives.

Proposed, not owner-approved:

- `public/brand/lhsbc/lhsbc-main-logo-web.png` from `MAIN LOGO.png`, 1672×941, transparent exterior.
- `public/brand/lhsbc/lhsbc-header-logo-web.png` from `Mainsmalllogo.png`, 1254×1254, transparent exterior.

Older marquee, crest, Canva, and Albany pin files are different drawings and were not substituted. No clean lane plate and no matched set of six card icons were found. None were generated. Sponsor names in the reference screenshots are not club records. Review images are in `tmp/artwork-preview/`. Full notes are in `docs/LHSBC_CHECKPOINT_2026-11-25.md`.

The November 22 test milestone remains 133 passing and 0 failing. The November 25 working-tree result remains 132 passing and 1 failing because `ahsb-main-logo.png` is still absent. That test was not changed.

Prompt 02A continued from this partial result. See section 25. The Prompt 02 sentences above stay as the record of that pass.

## 25. November 25, 2026 — Prompt 02A remaining artwork

Prompt 02A did not start the redesign. `main` is still `47a4d0c`. `canva-homepage` is still `ff62fb4`. The 03:35 backup was not modified. Incremental artwork copies are in `/Users/stellaroskens/Developer/LHSBC-backup-artwork-2026-11-25-040958`.

Preserved, not regenerated: `public/brand/lhsbc/lhsbc-hero-lanes.webp`, 1280 × 480 WebP, exact 8:3, 79,336 bytes, SHA-256 `bd2324f76c92be8d257a9bc00a663fbe6d34764e916c841a5a04572584021770`. It is not connected to the homepage. The 1280 px width is accepted for the first visual test.

Logo masters and the two transparent derivatives were not overwritten. At the time this section was first written, approval was still pending. Section 26 records the later owner approval.

The SVG set is in `public/brand/lhsbc/icons/`: six card illustrations, footer pins, red and blue sweeps, a cream stripe, a trophy, a gold starburst, a check, and an arrow. No sponsor logos were invented. Navy plaques, gold borders, pinstripes, and button chrome remain later CSS. Review page: `tmp/artwork-preview/index.html`.

Full notes are in `docs/LHSBC_CHECKPOINT_2026-11-25.md`.

## 26. November 25, 2026 — Prompt 02A owner approval

The owner reviewed the isolated artwork sheet and approved that set for the upcoming website visual refinement. Artwork preparation is complete. No approved file was regenerated or replaced. Website implementation has not started. Nothing was committed, pushed, merged, deployed, or activated.

Approved files:

- `public/brand/lhsbc/lhsbc-main-logo-web.png`
- `public/brand/lhsbc/lhsbc-header-logo-web.png`
- `public/brand/lhsbc/lhsbc-hero-lanes.webp` at its existing 1280 × 480 resolution, for initial testing. Reevaluate visual quality during the desktop homepage review.
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

Original masters remain `references/design-2026-11-24/MAIN LOGO.png` and `references/design-2026-11-24/Mainsmalllogo.png`. They were not modified. The approved files are not yet connected to the website.

## 27. November 25, 2026 — Prompt 02B Albany club-logo dependency

Prompt 02B did not start the redesign. `main` remains `47a4d0c`. Nothing was committed, pushed, merged, deployed, or activated.

The failing dependency was obsolete. `AHSB_LOGO` pointed at `public/images/schools/ahsb-main-logo.png`, the former Albany club mark. Meet the Bowlers, the profile editor, and `publicBowlerArtwork` did not use that path. The working-tree file was already absent. Its historical blob remains in commit `47a4d0c` and was not restored into `public/`.

Correction:

- Removed `AHSB_LOGO` from `src/lib/content/schoolLogos.ts`.
- `scripts/bowlerProfiles.test.ts` requires the current school marks on disk: `public/images/schools/lebanon-logo.png` and `public/images/schools/lebanon-mark.png`. It rejects `/images/schools/ahsb-main-logo.png` as approved artwork and checks that the file is absent from `public/`.
- South Albany and West Albany files remain on disk. `LEGACY_SCHOOL_MARKS` still excludes them from the public school list. The test now checks that exclusion.
- Student privacy checks are unchanged. Public artwork is one selected school logo or the neutral silhouette. A student photo field is rejected. Guardian approval cannot be stored in the public content file. A real student profile cannot be published from that file.

`SCHOOL_IDS` remains `lebanon` only. No Sweet Home mark is in `public/images/schools/`, so none was added.

Tests, run November 25, 2026 with `npm test`: 133 passed, 0 failed, 43 suites, 0 skipped. Duration 2043.623958 ms.

Production build, same day, `npm run build`: succeeded. Steps were `captureDeployTarget`, `tsc --noEmit`, and Vite 8.3.4. Vite kept its existing chunk-size notice for `dist/assets/index-ChkjVAb8.js` at 550.71 kB. Exit code 0.

No owner decision was required to retire the Albany club mark. **Superseded November 25, 2026:** the possible later addition of Sweet Home as a selectable school is cancelled. Do not add a Sweet Home mark. Homepage implementation continues under the section-by-section design plan.

### Revision history
- 2026-11-24 v1.0: consolidated accessible project evidence; no implementation or publication; priorities and IDs assigned editorially for owner review.
- 2026-11-25 v1.1: Prompt 01 accepted. Prompt 01A local recovery backup verified at `/Users/stellaroskens/Developer/LHSBC-backup-2026-11-25-033533`. Historical 133/0 test milestone retained. November 25 working-tree result recorded separately as 132 passing and 1 failing. Design decisions recorded. Redesign not started.
- 2026-11-25 v1.2: Prompt 02 proposed logo derivatives only. Missing lane plate and six card icons recorded. Redesign not started. Backup not recreated.
- 2026-11-25 v1.3: Prompt 02A preserved the 1280×480 lane WebP and added proposed card, footer, and sponsor-decoration SVGs. Redesign not started. The 03:35 backup was not recreated. An incremental artwork backup was added separately.
- 2026-11-25 v1.4: Owner approved the Prompt 02A review-sheet artwork for the upcoming visual refinement. Artwork preparation is complete. Implementation has not started. Approved files were not regenerated.
- 2026-11-25 v1.5: Prompt 02B retired the obsolete Albany club-logo test dependency. Lebanon school marks remain. The missing file was not restored. Tests 133 passed and 0 failed. Production build succeeded. Redesign not started.
- 2026-11-25 v1.6: Pass 00 verified the final homepage handoff. `reference/APPROVED_HOMEPAGE.png` is the homepage authority. Approved logo derivatives and the 1280×480 lane plate remain available and were not regenerated. Pass 01 implemented the shared interior header in HTML and CSS. Owner visual approval of that header is pending. Tests again 133 passed and 0 failed. Production build succeeded.
- 2026-11-25 v1.7: Recorded the renamed Netlify project and the official public URL `https://lhsbc.netlify.app/`. The former `lshbc.netlify.app` address is obsolete. Local preview remains separate from production. No deploy, commit, or push.
- 2026-11-25 v1.8: Owner confirmed LHSBC is exclusively Lebanon High School Bowling Club in Lebanon, Oregon. Sweet Home scope and the open Sweet Home school task are cancelled. Albany remains migration history, not part of the club.
- 2026-11-25 v1.9: Owner visually approved the Pass 01 shared header. NAV-01 records the deferred dropdown menu. Pass 02 adds the homepage hero and an unconfigured fundraising tracker. No deploy, commit, or push.
- 2026-11-25 v1.10: Pass 02A widens the shared header to the page edges and enlarges the hero inside a 1440-pixel content width. The former campaign preview link is removed from the homepage. Pass 02 is not visually approved. No deploy, commit, or push.
- 2026-11-25 v1.11: The former Albany campaign is removed from active pages, navigation, search, content, and the page editor. `/bowl-a-thon` redirects to `/fundraisers`. Section 34 is the page inventory. Pass 03 has not started. No deploy, commit, or push.
- 2026-11-25 v1.12: Owner accepted Pass 02. Pass 03 adds the Support Our Team banner below the hero. Become a Sponsor goes to `/sponsors`. Fundraising Opportunities goes to `/fundraisers`. Pass 04 has not started. No deploy, commit, or push.
- 2026-11-25 v1.13: Pass 03 is accepted provisionally. NAV-01, ART-03, and FONT-03 stay deferred. Pass 04 adds Why Join and Club Highlights. No deploy, commit, or push.
- 2026-11-25 v1.14: Pass 04 is provisionally accepted. Pass 05 adds Upcoming Events. The published schedule has no verified dates, so the homepage shows the empty state. No deploy, commit, or push.
- 2026-11-25 v1.15: Pass 05 is provisionally accepted. ART-05 remains open, including the missing decorative arrow. Pass 06 adds five quick-link cards. No deploy, commit, or push.
- 2026-11-25 v1.16: The official public address is `https://lhsbcor.com/`. `https://www.lhsbcor.com/` redirects there. `https://lhsbc.netlify.app/` remains the Netlify hosting address. Canonical metadata and the sitemap use the custom domain. The sponsorship QR stays unpublished. No deploy, commit, or push.
- 2026-11-25 v1.17: Launch preparation adds the homepage sponsor section and shared navy footer, connects the priority public pages, and removes the unverified Albany pro shop listing. Payments stay off. No deploy, commit, or push.
- 2026-11-25 v1.18: Public pages share the homepage type and card treatment. How to Join is on Our Club. A Netlify draft of the local build is published. Production is unchanged. No commit or push.
- 2026-11-25 v1.21: Owner approved the draft. Commit `32d5412` pushed to `main`; GitHub-built deploy `6b0768f8e5805be40a0ca4e5` verified and published to `https://lhsbcor.com/` with auto-publishing still locked. NAV-01 done. See section 44.
- 2026-11-25 v1.20: Netlify now builds from GitHub. Production is GitHub-triggered deploy `6b075ef250dcb001616aef79` (commit `b71d492`). NAV-01 is built and in review on draft `6b07673f0b9d465e59464863`. Client demo guide added. No commit, push, or production publish. See section 43.
- 2026-11-25 v1.19: Production is live. Commit `90fdd11` is on `main`. Production deploy `6b074fb7e798b7b7c7b42a5e` serves `https://lhsbcor.com/`. Payments and the mailbox stay off. NAV-01, ART-03, ART-05, ART-06, and FONT-03 stay open.

## 28. November 25, 2026 — Pass 00 and Pass 01 header

Pass 00 is complete. The handoff lives at `references/homepage/LHSBC_Cursor_Handoff/`. The final homepage image is `reference/APPROVED_HOMEPAGE.png`. It replaces the six-card landscape design. Reference crops were not installed. Corrected simple SVG candidates remain uninstalled in `artwork/corrected-candidates/`.

The official files below stay approved. They are not missing, and they were not regenerated when the homepage layout changed. Inspect them again during the hero pass. The lane file is 1280×480, 8:3. Earlier simplified illustrations do not override the new handoff artwork. Masters `references/design-2026-11-24/MAIN LOGO.png` and `Mainsmalllogo.png` were not modified.

- `public/brand/lhsbc/lhsbc-main-logo-web.png`
- `public/brand/lhsbc/lhsbc-header-logo-web.png`
- `public/brand/lhsbc/lhsbc-hero-lanes.webp`

Pass 01 implemented the shared header. **Superseded November 25, 2026 by section 32:** the owner has visually approved this header. Its appearance stays as built. NAV-01 is a later menu-behavior change and does not reopen the header design.

Header behavior: glossy red Menu at the left, cream divider, open navy center, compact cream search, navy magnifier, cream divider, glossy red Sign In. No header logo, social icons, or header Donate control. Existing menu, search, focus, and `/sign-in` behavior were kept. `/donate` still exists.

Changed application files: `src/components/Header.tsx`, `src/components/header/AccountButton.tsx`, `src/components/header/SiteSearch.tsx`, `src/styles/header.css`.

Verification on November 25, 2026: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded, including `tsc --noEmit`. Preview URL: `http://127.0.0.1:5173/our-club`. Widths 1920, 1440, 1024, 768, 430, 390, and 375 had no horizontal overflow. Nothing was committed, pushed, merged, or deployed.

## 29. November 25, 2026 — official website address

The Netlify project was renamed to the club abbreviation. Section 17 described the earlier state, when no public URL had been confirmed. It is kept as history. **Superseded by section 39 for the public address.** This table remains the hosting record. The Netlify URL below is the hosting address, not the official website.

| Item | Value |
|---|---|
| Official club | Lebanon High School Bowling Club |
| Abbreviation | LHSBC |
| Hosting provider | Netlify |
| Project name | `lhsbc` |
| Netlify hosting address | `https://lhsbc.netlify.app/` |
| Netlify project ID | `45fe01b0-d58c-4255-a47d-7cfa8df98ab1` |
| GitHub repository | `https://github.com/stellaroskens/LHSBC.git` |
| Local project | `~/Developer/LHSBC` |
| Production branch | `main` |

**Superseded by section 39.** When this section was written, `https://lhsbc.netlify.app/` was the only public address. It remains the Netlify hosting address. It is no longer the address for flyers, QR codes, or metadata. `https://lshbc.netlify.app/` is obsolete and must not be printed or shared.

The public production site is separate from local development. `http://127.0.0.1:5173/` is only the current local preview. It is not the website address.

No deployment, commit, push, or branch change was made to record the Netlify address.

## 30. November 25, 2026 — final club identity

This decision supersedes every earlier instruction about participating schools, recruitment geography, and combined-school scope. The project is not restarted. Homepage work continues one section at a time.

The website is exclusively for Lebanon High School Bowling Club (LHSBC), Lebanon, Oregon. **Superseded by section 39:** the public address is `https://lhsbcor.com/`.

Active requirements:

- Do not add Sweet Home references, logos, school choices, or recruitment copy.
- Do not describe a combined Lebanon and Sweet Home program.
- Do not present the former Albany bowling organization, WAHSB, as part of LHSBC. Albany files that remain are migration history and stay out of public school choices.
- Use Lebanon-specific branding and only verified LHSBC coaches, administrators, bowlers, sponsors, contacts, and resources.
- Preserve the existing application while replacing obsolete branding, people, local information, and visual design with the approved retro bowling homepage aesthetic, one section at a time.

Checked on November 25, 2026: published website content and `src/` contain no Sweet Home text. `SCHOOL_IDS` is `lebanon` only. No Sweet Home logo was added. Task T10 is cancelled. The design handoff eligibility notes that asked for a later Sweet Home decision are marked superseded. No deploy, commit, or push was made.

## 31. Resources page — unverified listing

The Resources page still lists “Albany Bowling Center Pro Shop” in Albany, Oregon. Its published status says an operating pro shop under that name could not be confirmed. That listing is not endorsed and is not part of LHSBC. During the later Resources page refinement, verify it or remove it. Do not replace it with invented business information.

## 32. November 25, 2026 — Pass 01 approval and Pass 02 hero

The owner visually approved the shared header. Keep its colors, type, buttons, search field, and responsive layout. NAV-01, in the task register, is the deferred replacement of the full-height sidebar with a dropdown under the Menu button. It is due before Pass 09 and was not built in this pass.

Pass 02 replaces the flattened homepage image map with a real hero on `/`. The approved header is on that page. The site footer stays off the homepage until its own pass. Interior pages are unchanged.

Artwork used without redrawing:

- `public/brand/lhsbc/lhsbc-main-logo-web.png` is the horizontal marquee. It is 1672×941, transparent, and sharp enough for the hero. It was not edited.
- `public/brand/lhsbc/lhsbc-header-logo-web.png` is a square mark. It is not the hero marquee and was not installed in the hero.
- `public/brand/lhsbc/lhsbc-hero-lanes.webp` is 1280×480 and sharp. It is a photographic lane plate. The approved poster uses a brighter neon lane illustration, which is still not a separate file. The photographic plate was used rather than a screenshot crop or a new drawing.

The fundraising card does not show the poster’s example figures. Published content has no verified total, goal, or percentage, and `activeEvent` is `none`. The card says the fundraiser details are to be confirmed, the progress track is empty, and Donate Now goes to the existing `/donate` route. Checkout stays off. **Superseded by section 34:** the former campaign preview link is not on the homepage.

The old homepage image file was already absent. Its destinations remain available through the shared menu, search, and the Bowl-A-Thon link. Later homepage sections were not built.

Local preview: `http://127.0.0.1:5173/`. That address is not the public site. **Superseded by section 39:** the public site is `https://lhsbcor.com/`.

Verification: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. Nothing was committed, pushed, or deployed. Pass 03 has not started. The hero is waiting for owner visual approval.

## 33. November 25, 2026 — Pass 02A proportions

Pass 02 is not visually approved. The logo, lane photograph, type, and tracker styling stay. This pass only corrects size and placement.

The root cause was the shared 1240-pixel `--max` container. The header and hero were centered inside it, so a wide window left large empty bands and made the introduction look small. No CSS transform, image-map size, or zoom setting caused it. The page was measured at 100% zoom.

The header now spans the full viewport. Menu sits at the left gutter and Sign In at the right gutter. Gutters are 24 to 48 pixels. The approved button, search, and color styling is unchanged. NAV-01 is still deferred.

The hero content width is `min(1440px, 100%)`. The logo column is about 53% of that content. The lane photograph still covers the full stage without being redrawn. Measured at 100% zoom with no horizontal overflow:

| Viewport | Header | Hero stage | Logo |
|---|---|---|---|
| 1920 | 1920×76, gutters 48 | 1920×548, content 1440 | 710×399 |
| 1440 | 1440×76, gutters 36 | 1440×495 | 725×408 |
| 1280 | full width, gutters 32 | 1280×460 | 645×363 |
| 1024 | full width, gutters 26 | 1024×440, two columns | 516×290 |
| 768 | one header row | stacked, 768×784 | 640×360 |
| 430 | 430×116, search on row 2 | stacked, 430×638 | 382×215 |
| 390 | 390×116 | stacked, 390×641 | 342×192 |
| 375 | 375×116 | stacked, 375×632 | 327×184 |

The former campaign preview link is no longer on the homepage. **Superseded by section 34:** `/bowl-a-thon` is no longer a campaign page. It redirects to `/fundraisers`. No fundraising figures were added. Checkout stays off. Pass 03 has not started.

## 34. November 25, 2026 — campaign removal and page inventory

The former Albany campaign is not an LHSBC event. Its page, search entry, FAQ category, editor section, sitemap entry, and campaign artwork styles are removed from the active application. `/bowl-a-thon` now redirects to `/fundraisers` and does not show campaign copy. General donations, fundraisers, sponsors, and contribution options remain. No database records were deleted. Historical sentences in this file stay as history and are superseded by this section.

The original WAHSB project was not present under `~/Developer`. This inventory comes from the current LHSBC routes in `src/App.tsx` and the published pages. Earlier route lists that include a live campaign page are superseded.

Club objectives for public content: recruit Lebanon High School students, obtain sponsorships, and receive donations that support the club and its bowlers. The site represents Lebanon, Oregon only.

**Superseded by section 35:** the owner accepted Pass 02 on November 25, 2026. Pass 03 adds the support banner and is waiting for visual approval. NAV-01 remains deferred.

### Homepage destinations

These existing routes are the only destinations for current and later homepage controls. No new route was created.

| Control | Destination | What is there |
|---|---|---|
| Menu and Home | `/` | Approved header and the current hero |
| Sign In | `/sign-in` | Staff and family entry. Family requests stay closed |
| Donate Now | `/donate` | Donation information. Checkout is off |
| Sponsors | `/sponsors` | Sponsorship information. No payment |
| Fundraisers | `/fundraisers` | General fundraiser page. No active event |
| Our Club / Learn more | `/our-club` | Club overview and the current join path |
| Coaches | `/our-club#coaches` | Coach section. Names are still unconfirmed |
| Meet the Bowlers | `/meet-the-bowlers` | Placeholder roster cards |
| Practices | `/practices` | Venue and schedule still to be confirmed |
| Tournaments | `/tournaments` | Schedule still to be confirmed |
| Team Gear | `/team-gear` | Store is not open |
| Resources | `/resources` | Local services and learning links |
| Volunteer | `/volunteer` | Adult volunteer guidance |
| FAQ | `/faq` | Public questions, including fundraising |
| Contact | `/contact` | Form does not send a message |
| Information hub | `/information` | Links to existing pages. Not in the main menu |
| Family | `/family` | Closed preview. Not a public join button |

Gap: there is no public registration form and no `/join` route. `src/pages/Information.tsx` already sends “Ready to join?” to `/our-club`. A later Join control should use `/our-club` until the owner approves a real registration section. Do not invent a route.

### Public pages

| Page | Route | Source | Purpose and function | Navigation | Admin editing | Lebanon content still needed | Visual pass | Active | Owner approval |
|---|---|---|---|---|---|---|---|---|---|
| Home | `/` | `src/pages/HomeReview.tsx` | Header, hero, empty fundraising tracker, Donate Now | Menu: Home. Header: Sign In | Homepage copy exists in the page editor. The live hero does not render the old image button | Later homepage sections | Pass 02 awaiting review | Yes | Yes, visual |
| Information | `/information` | `src/pages/Information.tsx` | Hub linking to existing club pages. Join points to Our Club | Not in the menu or sitemap | No | Confirm the join wording stays on Our Club | Yes, later | Yes | Yes, before featuring it |
| Our Club | `/our-club` | `src/pages/OurClub.tsx` | Overview, coaches, team sport, volunteers, college notes, help | Menu | Yes, including `/our-club#coaches` | Confirm coaches and administrator | Yes, later | Yes | Yes, people and visual |
| Meet the Bowlers | `/meet-the-bowlers` | `src/pages/MeetTheBowlers.tsx` | Eight placeholder cards. No student photos | Menu | Bowler editor. Publish is super-admin only | Replace placeholders only with approved students | Yes, later | Yes | Yes, before real students |
| Bowler profile | `/meet-the-bowlers/:playerId` | `src/pages/BowlerProfilePage.tsx` | One public profile when a published id exists | From the roster | Same bowler editor | Same consent rules | Yes, later | Yes | Yes, before real students |
| Practices | `/practices` | `src/pages/Practices.tsx` | Venue card and practice notes. Venue unconfirmed | Menu | Yes | Confirm Lebanon venue, days, and times | Yes, later | Yes | Yes, facts and visual |
| Tournaments | `/tournaments` | `src/pages/Tournaments.tsx` | Schedule, venues, spectator note | Menu | Yes | Confirm the Lebanon schedule | Yes, later | Yes | Yes, dates and visual |
| Sponsors | `/sponsors` | `src/pages/Sponsors.tsx` | Sponsorship information and contribution options. No checkout | Menu | Yes | Use only verified Lebanon sponsors | Yes, later | Yes | Yes, names and visual |
| Donate | `/donate` | `src/pages/Donate.tsx` | Donation information. Checkout and payments stay off | Search and the hero. Not a menu row | Yes | Keep amounts unpublished until verified | Yes, later | Yes | Yes, before payments |
| Sponsorship QR | `/sponsor-qr` | `src/pages/SponsorQr.tsx` | Printable QR only after a verified destination | Search | Wording only. URL stays in connections | No destination until verified | Yes, later | Yes, inactive QR | Yes, before a QR |
| Fundraisers | `/fundraisers` | `src/pages/Fundraisers.tsx` | General fundraiser instructions. No active event | Menu. Also the old campaign redirect | Yes | Confirm any future Lebanon fundraiser | Yes, later | Yes | Yes, before an event |
| Resources | `/resources` | `src/pages/Resources.tsx` | Services, equipment, and learning links | Menu | Yes | Verify or remove the unconfirmed Albany pro shop. See section 31 | Yes, later | Yes | Yes, listings and visual |
| Volunteer | `/volunteer` | `src/pages/Volunteer.tsx` | Adult roles and screening guidance | Menu | Yes | Confirm Lebanon volunteer contacts | Yes, later | Yes | Yes, contacts and visual |
| Contact | `/contact` | `src/pages/Contact.tsx` | Contact form that does not send | Menu | Yes | Confirm the club contact | Yes, later | Yes | Yes, before email |
| FAQ | `/faq` | `src/pages/Faq.tsx` | Questions, search, and an ask section | Menu | Yes | Keep answers Lebanon-only | Yes, later | Yes | Yes, visual |
| Team Gear | `/team-gear` | `src/pages/TeamGear.tsx` | Closed team store. No orders | Menu | Yes | Confirm the store before linking a shop | Yes, later | Yes | Yes, before a store |
| Sign In | `/sign-in` | `src/pages/SignIn.tsx` | Staff sign-in and closed family request | Header only | Marked unavailable as page copy | Staff login still shows the old WLHSBC eyebrow | Yes, later | Yes | Yes, visual |
| Family | `/family` | `src/pages/FamilyDashboard.tsx` | Closed family preview. No student records | Not in the public menu | Family admin is separate and restricted | None until access is approved | Yes, later | Yes, closed | Yes, before opening |
| Not found | any other public path | `src/pages/NotFound.tsx` | Unknown-page message | None | Page title and description | None | Yes, later | Yes | No |

### Private tools

These stay. They are not public pages. Owner approval is required before changing access rules.

| Tool | Route | Source | Function |
|---|---|---|---|
| Staff login | `/staff/login` | `src/pages/staff/StaffLogin.tsx` | Restricted sign-in and password recovery |
| Admin dashboard | `/admin` | `src/pages/admin/AdminDashboard.tsx` | Super-admin home |
| Content and pages | `/admin/content`, `/admin/pages` | `src/pages/admin/AdminContent.tsx` | Public copy editor |
| Bowlers | `/admin/bowlers` | `src/pages/staff/StaffBowlerEditor.tsx` | Roster editing |
| Coaches | `/admin/coaches` | `src/pages/admin/AdminRoleAccess.tsx` | Coach records |
| Club | `/admin/club` | `src/pages/admin/AdminRoleAccess.tsx` | Club settings |
| Connections | `/admin/connections` | `src/pages/admin/AdminConnections.tsx` | Payments stay off |
| Donations | `/admin/donations` | `src/pages/admin/AdminDonations.tsx` | Donation settings, checkout off |
| Announcements | `/admin/announcements` | `src/pages/admin/AdminAnnouncements.tsx` | Drafts. Sending stays off |
| Tournaments | `/admin/tournaments` | `src/pages/admin/AdminTournaments.tsx` | Schedule management |
| Settings | `/admin/settings` | `src/pages/admin/AdminSettings.tsx` | Site settings |
| Media | `/admin/media` | `src/pages/admin/AdminMedia.tsx` | Image library |
| History | `/admin/history` | `src/pages/admin/AdminHistory.tsx` | Content history |
| Links | `/admin/links` | `src/pages/admin/AdminLinks.tsx` | Public link manager |
| Staff | `/admin/staff` | `src/pages/admin/AdminStaff.tsx` | Staff accounts |
| Family admin | `/admin/family` | `src/pages/admin/AdminFamily.tsx` | Family access stays closed |
| Consent | `/admin/consent` | `src/pages/admin/AdminConsent.tsx` | Student consent rules |
| Status | `/admin/status` | `src/pages/admin/AdminSystemStatus.tsx` | Setup status |
| Coach dashboard | `/coach`, `/coach/bowlers` | `src/pages/coach/CoachDashboard.tsx` | Coach tools and roster |
| Team administrator | `/team-administrator`, `/team-administrator/bowlers` | `src/pages/teamAdmin/TeamAdminDashboard.tsx` | Club administrator tools and roster |

Verification on November 25, 2026: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-BnLwsRq9.js` at 535.50 kB, with the existing chunk-size notice. The same test and build result was confirmed again after the inventory was written. At 1440 the hero stays two columns, 495 pixels tall, with a 725×408 logo. At 1024 it stays two columns. At 768 and 390 it stacks, and the 390 header is 116 pixels tall. Overflow was 0 at those widths on the homepage, and 0 at 390 on Our Club. Local preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed. **Superseded by section 35:** Pass 03 is now built and waiting for visual approval.

## 35. November 25, 2026 — Pass 03 support banner

The owner accepted the completed Pass 02 report. The header and hero were not resized or redrawn.

The homepage now has a navy Support Our Team band directly under the hero. The wording is live text: “Support Our Team!”, “Become a Sponsor”, and “Fundraising Opportunities”. Become a Sponsor opens `/sponsors`. Fundraising Opportunities opens `/fundraisers`. The gold stars, cream dividers, and the red ball with pins are vector artwork drawn for this band. The reference crop was not copied into the site.

At 1440 and 1024 the band stays one row. The fundraising words stay about 80 pixels clear of the ball at 1024 and about 124 pixels clear at 1440. At 768, 390, and 360 the two actions stack, and the ball is hidden so it cannot cover the text. Overflow was 0 at each of those widths. Both links were followed in the browser.

Verification: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-BtlBaz-z.js` at 538.60 kB, with the existing chunk-size notice. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed. **Superseded by section 36:** Pass 03 is provisionally accepted. Final artwork approval is still open. Pass 04 is built.

## 36. November 25, 2026 — Pass 03 provisional acceptance and Pass 04

Pass 03 can stay in the build. Provisional acceptance is not final artwork approval. NAV-01, ART-03, and FONT-03 are recorded in the task register and were not built in this pass.

Pass 04 adds Why Join and Club Highlights on the cream surface under the support banner. Desktop is two columns. Mobile stacks. Cards use cream fills, red borders, navy ribbons, red checks, red stars, and small gold rays. Those marks are simple vectors, not the reference crops. The ribbon shape is CSS. Track the checks, stars, rays, and ribbon with ART-03 for the final visual review.

Recruitment links use existing pages. Build Skills, Make Friends, eligibility, and skill level go to `/our-club`. Compete at Tournaments goes to `/tournaments`. Be Part of a Team and the team environment go to `/meet-the-bowlers`. Learn, improve and represent Lebanon goes to `/practices`. The note uses the published registration heading and says practice days and tournament dates are not posted. There is still no public recruitment form.

The header, hero, and support banner were not redesigned.

**Superseded by section 37:** Pass 04 is provisionally accepted for continued development. Final visual review is still open. Pass 05 is built.

Verification: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-D_zdLh_3.js` at 541.11 kB, with the existing chunk-size notice. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed.

## 37. November 25, 2026 — Pass 05 upcoming events

Pass 04 stays provisionally accepted. The header, hero, support banner, and recruitment cards were not redesigned. NAV-01, ART-03, and FONT-03 were not started.

Upcoming Events sits on the cream surface under those cards. It reads the existing `practiceTournaments` list and uses the same upcoming-date check as the bowler page. Confirmed dates edited in that list will show here, up to three, and each opens its place on `/tournaments`. Unconfirmed named events without dates are not listed.

The published list is empty, and the named tournament entries are still unconfirmed. The homepage says: “Upcoming practice and tournament dates will be posted here. Check back for updates!” View Full Schedule opens `/practices`. Tournament details opens `/tournaments`.

The calendar and the yellow schedule badge are temporary geometric art. ART-05 records that refinement. The red reference arrow was not copied.

**Superseded by section 38:** Pass 05 is provisionally accepted. ART-05 stays open. Pass 06 is built.

Verification: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-28xUsFin.js` at 543.55 kB, with the existing chunk-size notice. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed.

## 38. November 25, 2026 — Pass 06 quick links

Pass 05 stays provisionally accepted. ART-05 remains the calendar illustration, yellow schedule badge, and decorative arrow. Those were not corrected. The header, hero, support banner, recruitment cards, and Upcoming Events section were not redesigned.

Five cream cards with navy borders sit under Upcoming Events. The whole card is the link.

| Card | Destination |
|---|---|
| Schedule | `/practices` |
| Tournaments | `/tournaments` |
| Team | `/meet-the-bowlers` |
| Resources | `/resources` |
| Sponsors & Fundraising | `/sponsors` |

Schedule, Tournaments, Team, and Resources use the existing simplified SVGs. Sponsors uses a temporary geometric handshake. `public/brand/lhsbc/handshake.png` was not used because its background is black and its edges are damaged. ART-06 records the icon replacement.

The Sponsors page body links to `/donate`. `/fundraisers` is available from the shared footer on that page, not from the sponsor content itself. A direct fundraiser link inside the sponsor content is left for the later interior-page refinement.

Desktop shows five columns. At 980 pixels and below, the cards wrap to two columns, and the sponsors card spans the row so the label stays readable. Pass 07 has not started.

Verification: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-Dey4VnDK.js` at 544.86 kB, with the existing chunk-size notice. Preview: `http://127.0.0.1:5173/`. Nothing was committed, pushed, or deployed.

## 39. November 25, 2026 — official custom domain

This section supersedes the public-address sentences in sections 17, 29, 30, and 32. The Netlify project was not renamed, and no second hosting project was created. DNS settings were not changed from this workspace. Payments, email, and social connections stay off.

| Item | Value |
|---|---|
| Official website | `https://lhsbcor.com/` |
| WWW redirect | `https://www.lhsbcor.com/` redirects to the apex |
| Netlify hosting address | `https://lhsbc.netlify.app/` |
| Netlify project ID | `45fe01b0-d58c-4255-a47d-7cfa8df98ab1` |
| Project name | `lhsbc` |

`https://lhsbcor.com/` is the address for recruitment flyers, sponsorship materials, donation materials, QR codes, social links, canonical URLs, the sitemap, and social sharing metadata. `https://lhsbc.netlify.app/` stays the hosting address. `https://lshbc.netlify.app/` stays obsolete. Local preview `http://127.0.0.1:5173/` is not a public address.

`sharing.publicWebsiteUrl` is `https://lhsbcor.com/`. Indexed public pages set `link rel="canonical"` and `og:url` from that origin plus the current path. `index.html` carries the homepage canonical and `og:url`. `public/sitemap.xml` lists the same public paths as absolute `https://lhsbcor.com/` URLs. `sharing.publicFundraiserUrl` and `sharing.publicSponsorshipUrl` remain empty, so fundraiser sharing and the sponsorship QR stay unpublished.

Official website QR artwork, both decoded to `https://lhsbcor.com/`:

- Authoritative scalable file: `references/design-2026-11-24/qr codes/LHSBC-Official-Domain-QR.svg`
- Print file: `references/design-2026-11-24/qr codes/LHSBC-Official-Domain-QR.png`

The files are in that design folder. There is no `references/qr-codes/` directory. They were not copied into `public/brand/lhsbc/qr-codes/` because no current page displays a website QR. No second QR was generated, and no preview URL was encoded.

`/sponsor-qr` still has no destination. It renders the empty state until `publicSponsorshipUrl` is a verified public URL. It does not encode the Netlify host, the local preview, or a payment link. If a sponsorship URL is configured later, that page still asks `api.qrserver.com` to draw a code. That generator is not the official website QR. The SVG and PNG above remain the only website QR artwork.

A live check on November 25, 2026, after the owner noted that DNS and SSL were still provisioning: `https://lhsbcor.com/` returned HTTPS 200 with HSTS, `https://www.lhsbcor.com/` returned 301 to the apex, and `https://lhsbc.netlify.app/` returned HTTPS 200. These paths also returned HTTP 200 on the custom domain: `/`, `/our-club`, `/meet-the-bowlers`, `/practices`, `/tournaments`, `/sponsors`, `/donate`, `/fundraisers`, `/resources`, `/volunteer`, `/contact`, `/faq`, `/team-gear`, and `/sign-in`. That check is the currently deployed site. Unpublished local homepage work was not deployed. Club email and a final launch review are still open.

Verification after the metadata change: `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-CRRquyY8.js` at 495.88 kB. Nothing was committed, pushed, or deployed.

## 40. November 25, 2026 — launch preparation

The owner accepted the homepage design. Header, hero, support banner, recruitment cards, Upcoming Events, and quick links were not redesigned. NAV-01, ART-03, ART-05, ART-06, and FONT-03 stay deferred until after launch. The full decorative page frame was not added, because it would change the approved header.

The homepage now ends with a sponsor panel and the shared footer. Become a Sponsor opens `/sponsors`. Fundraising Opportunities opens `/fundraisers`. The donation link opens `/donate` and still says checkout is off. The footer uses the existing public links, says the club contact is unconfirmed, and carries the tagline Student-Athletes, Teamwork, Community, and School Pride. Interior pages use the same navy, red, and cream palette. Our Club, Sponsors, Donate, Fundraisers, and Contact now cross-link those destinations.

The unverified “Albany Bowling Center Pro Shop” listing was removed. No replacement business was invented. South and West Albany school-mark files remain on disk for migration review and are not public filters. The public club email is still unset. `fundraiserContact.email` remains the placeholder `club-contact@example.invalid` so the content file stays valid, and the public fundraiser page does not display or mail that address. Coaches, the practice venue, registration, and payment accounts remain unconfirmed. Checkout stays disabled.

Both official QR files still decode to `https://lhsbcor.com/`. Canonical metadata and `public/sitemap.xml` already use that domain. `/sign-in` stays `noindex`. Admin, coach, roster, and family routes were not changed.

There is no `netlify.toml` in this repo. Tests require that absence so Identity role gates are not copied into the local project. `public/_redirects` serves the SPA, `public/_headers` sets privacy headers, and `netlify/functions/` holds the existing functions. The Netlify CLI is logged in, and this folder is not linked. The known site is project `lhsbc`, ID `45fe01b0-d58c-4255-a47d-7cfa8df98ab1`. No link, deploy, commit, or push was run.

Local checks at 390 pixels wide found overflow 0 on `/`, `/our-club`, `/sponsors`, `/donate`, `/fundraisers`, and `/contact`. At 1440 the homepage sponsor panel is two columns and overflow is 0. `npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-DOP7E1PE.js` at 498.67 kB. Preview: `http://127.0.0.1:5173/`.

When the owner authorizes the production launch, and only then:

1. Commit and push the approved tree to `main` on `https://github.com/stellaroskens/LHSBC.git`.
2. From `~/Developer/LHSBC`, link the existing site without creating a new one: `npx netlify link --id 45fe01b0-d58c-4255-a47d-7cfa8df98ab1`.
3. In the Netlify UI, confirm production branch `main`, build command `npm run build`, and publish directory `dist`. If Git deploys are already connected, the push publishes. If they are not, run `npx netlify deploy --prod --build`.
4. After it finishes, open `https://lhsbcor.com/` and `https://www.lhsbcor.com/`, confirm www redirects to the apex, and scan the official QR code.
5. Do not turn on Stripe, PayPal, Venmo, Cash App, email, or social connections in that deploy.

## 41. November 25, 2026 — draft deployment

Public pages keep their existing content and routes. Interior heroes now use readable italic cream titles on navy, and cards and panels use the homepage navy outline and cream surface. Buttons are the same red pills. How to Join is a section on `/our-club`. It says registration is unconfirmed and that the contact form does not send mail.

`info@lhsbcor.com` is recorded only as the intended future address in the connections staff note. It is not shown on the public site. Coach display names stay “to be confirmed.” The content editor labels no longer use personal names. Planned staff usernames remain in the private roster so sign-in still works. NAV-01 stays open. The working sidebar menu was kept. Payments stay off. The official QR files still decode to `https://lhsbcor.com/`.

A draft deploy of this local build, not the old GitHub commit and not production, is live at `https://6b074d57d7a776040e6f5a4a--lhsbc.netlify.app`. Site ID `45fe01b0-d58c-4255-a47d-7cfa8df98ab1`. The draft responds with Lebanon wording, the custom-domain canonical and sitemap, security headers, and HTTP 200 for the main public routes. Netlify marks the draft `noindex`. `https://lhsbcor.com/` was not changed.

`npm test` 133 passed, 0 failed, 43 suites. `npm run build` succeeded. The main script is `dist/assets/index-CT1dYjMO.js` at 499.59 kB. Nothing was committed or pushed.

Final production publication, only after a separate owner authorization:

1. Review the draft URL.
2. Commit and push this tree to `main`.
3. Run `npx netlify deploy --prod --site 45fe01b0-d58c-4255-a47d-7cfa8df98ab1 --dir dist --functions netlify/functions --no-build` from `~/Developer/LHSBC`, or let the connected Git production branch publish the same commit.
4. Confirm `https://lhsbcor.com/` shows this build and `https://www.lhsbcor.com/` redirects to it.
5. Leave payment accounts and the mailbox off until they are actually configured.

## 42. November 25, 2026 — production launch

The owner approved draft `https://6b074d57d7a776040e6f5a4a--lhsbc.netlify.app` and authorized production.

Application commit `90fdd1131daa55fc68059ec5362163a096cd4f98` is on `main` at `https://github.com/stellaroskens/LHSBC.git`. The commit excludes scratch screenshots, the handoff zip, and unused duplicate artwork folders. No secrets, student records, or private roster files were added. The Albany campaign page and Albany school logo were removed in that commit. The original WAHSB repository was not changed.

Before the launch, Netlify site `lhsbc` (`45fe01b0-d58c-4255-a47d-7cfa8df98ab1`) was still building `https://github.com/stellaroskens/WAHSB` on `main`. It now points at `https://github.com/stellaroskens/LHSBC`, branch `main`, build command `npm run build`, publish directory `dist`. The first Git production attempt, deploy `6b074f56585eb08a27554d1e`, failed while cloning the repository (`Host key verification failed`) and did not publish. Production was then published from the verified local build, the same script as the approved draft.

- Production URL: `https://lhsbcor.com/`
- Deployment ID: `6b074fb7e798b7b7c7b42a5e`
- Deploy log: `https://app.netlify.com/projects/lhsbc/deploys/6b074fb7e798b7b7c7b42a5e`
- State: ready, context production, published `2026-11-25T21:14:34.130Z`
- Main script: `/assets/index-CT1dYjMO.js` (499,271 bytes). Stylesheet: `/assets/index-DuC2RvBf.css`
- `https://www.lhsbcor.com/` returns 301 to `https://lhsbcor.com/`

Live checks on November 25, 2026: the homepage, Our Club, Sponsors, Donate, Contact, and Sign In render the Lebanon site. Donate amounts and the checkout button are disabled, and the page says checkout is not live. Contact says the club contact is to be confirmed and the form does not send. Sign In says staff sign-in is not open. `/bowl-a-thon` replaces itself with `/fundraisers`, which says no current fundraiser is published. The public bundle contains no Albany or Bowl-A-Thon text. The official QR files still decode to `https://lhsbcor.com/`.

Security headers on the public pages: `x-content-type-options: nosniff`, `x-frame-options: DENY`, `referrer-policy: strict-origin-when-cross-origin`, `permissions-policy` with camera, microphone, geolocation, and payment empty, and HSTS. `/sign-in` also sends `cache-control: no-store` and `x-robots-tag: noindex, nofollow`. `/api/admin/system-status` returns JSON `admin_auth_disabled`. The sitemap lists `https://lhsbcor.com/` paths.

`info@lhsbcor.com` remains the intended address in the unpublished staff note. It is not shown as a working mailbox. Stripe, PayPal, Venmo, and Cash App stay disconnected. NAV-01, ART-03, ART-05, ART-06, and FONT-03 stay deferred. The domain and Netlify project were not replaced.

## 43. November 25, 2026 — client presentation readiness

**Production record.** The Netlify repository connection was corrected by the owner. The GitHub-triggered production deploy succeeded and is the current verified production: deploy `6b075ef250dcb001616aef79`, commit `b71d492aaf1bff1804cbfbfab81389687ac50d4e`, branch `main`, repository `https://github.com/stellaroskens/LHSBC.git`, serving `https://lhsbcor.com/`. The Netlify API confirmed this deploy is still published at the end of this pass. Nothing was committed, pushed, or published to production in this pass.

**NAV-01 built (in review).** `src/components/PublicMenu.tsx` replaces the full-height sidebar with a dropdown that opens directly under the Menu button. It has three red and gold quick links at the top (Join the club → `/our-club#how-to-join`, Sponsor → `/sponsors`, Donate → `/donate`), then four accordion categories with navy headings, gold chevrons, and cream link lists. Donate was added inside Support the Team. Every published destination is kept. There is no backdrop and no scroll lock, so the page is not dimmed or shifted. It closes on a selection, an outside click, a second Menu press, or Escape, and Escape returns focus to Menu. Category buttons expose `aria-expanded`. The panel fits a 390-pixel phone. The approved header was not changed. The old drawer styles were removed from `portal.css`, and the new styles are in `header.css`. `scripts/publicNav.test.ts` now checks the non-modal dropdown instead of `aria-modal`.

**Public page fixes.** On Contact, the Club Email card's text was dark on navy and could not be read. It is now white (`sitewide.css`). On Meet the Bowlers, the title now has space below it and "Group by school" no longer wraps (`bowlers.css`). No content was invented.

**Admin fixes.** `netlify/functions/content-history.ts` referred to an undefined `context`, which would make `/admin/history` fail once sign-in is enabled. It now uses the function's `context` argument, and the super_admin check is unchanged. The content editor's Publish help text claimed changes go straight to the public website. It now says changes are saved to the review branch, which matches `publishTarget.ts`.

**Admin readiness (code review, no sign-in bypassed).** Every `/admin`, `/coach`, and `/team-administrator` screen requires Netlify Identity, checked on the server. Production returns `admin_auth_disabled` because `ADMIN_AUTH_ENABLED` is not set. Turning sign-in on requires:
- Identity enabled with invite-only registration.
- `ADMIN_AUTH_ENABLED=true`, `VITE_ADMIN_AUTH_ENABLED=true`, and `ADMIN_EMAIL_ALLOWLIST`.
- A `super_admin` role on the owner's account.

Saving edits also needs `GITHUB_CONTENT_TOKEN`, and edits are made from a preview or branch deploy, since production writes are blocked. The following are not built: donations checkout, the announcement email sender, the family accounts database, and guardian consent storage. No demonstration accounts were created. The full table is in `docs/LHSBC_CLIENT_DEMO_GUIDE.md`.

**Open items for owner approval.** These were not changed, because the footer also appears on the approved homepage:
- The footer wordmark subtitle "Lebanon High School Bowling Club" is dark blue on navy and hard to read.
- The dev-only "Follow" heading has the same problem.

Other non-blocking findings from the review:
- Team administrators have the `propose_announcements` permission but no screen for it.
- Staff bowler editing saves a full-site content draft.
- Rate limiting is per function instance.
- Multi-factor authentication is not enforced.

**Verification.**
- `npm test`: 133 of 133 pass. `npm run build`: succeeds, with only the existing chunk-size warning.
- No horizontal overflow or broken images on Our Club, Sponsors, Donate, Fundraisers, Contact, Meet the Bowlers, Practices, or Tournaments at 1440 and 390 pixels.
- With the menu closed, the draft homepage is pixel-identical to production at 1440×900 and 390×844.
- The menu interaction checks pass on the local build and on the draft.

**Draft preview (not production).** `https://6b07673f0b9d465e59464863--lhsbc.netlify.app/`, deploy `6b07673f0b9d465e59464863`, built from the uncommitted working tree. The client demo guide is `docs/LHSBC_CLIENT_DEMO_GUIDE.md`. Email (`info@lhsbcor.com`) and payments stay inactive.

## 44. November 25, 2026 — NAV-01 production publication

The owner approved draft `6b07673f0b9d465e59464863`, including NAV-01 and the admin corrections, and authorized production. No design changes were made in this pass.

**Commit.** `32d5412` ("Add the accordion menu and prepare the client demonstration.") was pushed to `main` at `https://github.com/stellaroskens/LHSBC.git`. It contains only the section 43 application changes, the master record, and `docs/LHSBC_CLIENT_DEMO_GUIDE.md`. The following were deliberately left uncommitted: the untracked `public/assets/canva-assets/final-homepage/` and `public/assets/homepage-image-1/` folders, `references/homepage/LHSBC_Cursor_Handoff.zip`, and `tmp/` screenshots. A scan of the committed files found no secrets or private student information.

**Publishing lock.** Auto-publishing was locked on production deploy `6b075ef250dcb001616aef79`. The push built GitHub-triggered deploy `6b0768f8e5805be40a0ca4e5` (context production, state ready), and the lock kept it unpublished. It was verified at `https://6b0768f8e5805be40a0ca4e5--lhsbc.netlify.app/`:
- With the menu closed, the homepage is pixel-identical to the previous live site at 1440×900 and 390×844.
- The dropdown opens under Menu with no page shift at both sizes, and every interaction check passes.
- All key pages return 200.
- Donate still says checkout is not live, and its button is disabled.

The deploy was then published manually. Auto-publishing remains **locked**. Later pushes build but do not go live until someone publishes them.

**Production.**
- URL: `https://lhsbcor.com/`. `https://www.lhsbcor.com/` returns 301 to it.
- Deployment ID: `6b0768f8e5805be40a0ca4e5`, commit `32d5412`, published `2026-11-25T23:05:01.494Z`.
- Deploy log: `https://app.netlify.com/projects/lhsbc/deploys/6b0768f8e5805be40a0ca4e5`
- Main script `/assets/index-D6qLlgDd.js`; stylesheet `/assets/index-CjQzbDpu.css`.
- Live checks after publishing: the homepage is unchanged at desktop and mobile sizes. The accordion dropdown works on `https://lhsbcor.com/` at 1440 and 390 pixels, including the Support the Team links (Sponsors, Fundraisers, Volunteer, Donate), Escape with focus return, outside click, the Join the club anchor, and closing on selection.
- `npm test`: 133 of 133 pass. `npm run build`: succeeds.

Payments (Stripe, PayPal, Venmo, Cash App) and the `info@lhsbcor.com` mailbox remain inactive. Staff sign-in remains disabled (`ADMIN_AUTH_ENABLED` is unset).

This record update is a documentation-only commit after `32d5412`. Its Netlify build is intentionally not published, so production stays on the verified deploy above.
