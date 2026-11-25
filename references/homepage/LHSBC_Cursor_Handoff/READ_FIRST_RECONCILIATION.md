# LHSBC — Read first: reconciliation and precedence

**Date:** November 25, 2026  
**Status:** Handoff clarification; no repository changes or artwork approvals authorized.

**Club identity, superseded November 25, 2026:** LHSBC is exclusively Lebanon High School Bowling Club in Lebanon, Oregon. The eligibility row below is no longer an open decision. Do not add Sweet Home, a combined-school program, or the former Albany organization.

## 1. What this package replaces

Use this handoff as the current design instruction set for the existing Lebanon High School Bowling Club (LHSBC) website. Earlier screenshot crops, noisy automatic vector traces, alternate mockups and conflicting design prompts are historical references, not production artwork. Do not delete prior files or discard unfinished local work as part of reconciliation.

## 2. Order of authority

1. The owner's latest explicit decisions and approvals govern the scope, content, artwork and permitted actions.
2. `reference/APPROVED_HOMEPAGE.png` governs the homepage visual target. It does not certify example data, eligibility, routes or approval of individual derived assets.
3. This file resolves package-level conflicts and establishes approval gates.
4. `LHSBC_DESIGN_IMPLEMENTATION.md` governs implementation; `LHSBC_DESIGN_SYSTEM.md` governs shared styling; `ASSET_PLACEMENT_CHECKLIST.md` and `inventory/ASSET-PLACEMENT-CHECKLIST.csv` identify individual assets and placement.
5. `CURSOR_INSTALLATION_INSTRUCTIONS.md` provides the detailed prompts. `OWNER_INSTALLATION_STEPS.md` is the simplified owner-facing sequence.
6. Existing working application behavior, data and privacy protections must be preserved unless an explicit owner decision changes them. If a visual instruction conflicts with functionality or verified content, report the conflict and stop for the affected decision.

## 3. Reconcile known differences before edits

| Issue | Required resolution |
|---|---|
| Project identity | Verify the actual LHSBC root, Git remote, branch and working tree. Expected local folder `~/Developer/LHSBC`. Do not modify WAHSB. |
| Header | Menu at left; compact search aligned right; Sign In at far right; open navy center; no social icons or header Donate. Keep the hero Donate Now CTA, subject to existing verified behavior. |
| Entire page frame | One continuous rounded navy, cream and red frame around the webpage. No outer white margins or excess blue strip below the footer. Do not stretch the entire screenshot into a page. |
| Logo and hero artwork | Use the official owner-approved logo unchanged. The mockup contains illustrative lettering, not a certified source logo. Obtain separate approved bowling background artwork rather than installing clipped reference crops. |
| Fundraising tracker | $2,450 / $5,000 and 49% are mockup examples, not confirmed balances or targets. Use verified existing data or a truthful empty state. No live payment activation. |
| Club eligibility | SUPERSEDED November 25, 2026. The owner confirmed Lebanon High School students in Lebanon, Oregon only. The earlier Lebanon and Sweet Home scope is not authorized. Preserve verified Lebanon copy. Do not add Sweet Home. |
| Events | Placeholder event text is not a real schedule. Use confirmed events or existing empty state. |
| Routes and authentication | Map the actual existing routes and preserve existing menu, search, Sign In, privacy and access controls. Do not invent missing destinations or credentials. |
| Test and preview baseline | Historical reports of 133 passing tests and Vite port 5173 are not current verification. Inspect package scripts, run actual checks and report a working preview. |
| Stage numbering | 00 audit; 01–08 homepage sections; 09 final homepage QA; 10 apply shared styling to existing pages individually after homepage approval. This numbering clarifies the combined final step in the master implementation document. |

## 4. Artwork status and quality gates

- 69 original-design components in `artwork/reference-only/` are visual references, not approved production assets.
- Eight rebuilt header candidates have PNG and SVG versions in `artwork/approval-candidates/01-header/`. They still need explicit owner approval; visual resemblance is not certification of pixel identity.
- The other 61 components require clean recreation, verified existing official assets, or faithful live HTML/CSS equivalents, as appropriate. Do not manufacture 61 unnecessary image files if live controls and text are the appropriate implementation; record the mapping and secure owner approval.
- Reject noisy tracing, blurred type, neighboring fragments, unwanted backgrounds and raster-in-SVG masquerading as vectors. Prefer genuine vector paths for simple graphics and high-resolution raster for complex illustration or photography. Inspect at native and intended size. 300 DPI metadata alone proves nothing about image quality.
- Approval of artwork and approval of the implemented preview are separate gates. Record actual filenames and owner approval before copying any production artwork into public paths.

## 5. Cursor first response — reconciliation report only

Before editing, report:
- Actual repository root, remote, branch and working tree status; preserve existing changes.
- Homepage and shared layout file paths, routes, existing official artwork, scripts, and integration state (no secrets).
- Any conflicts between the live application and the table above; distinguish verified facts from assumptions.
- An inventory of available versus missing artwork for stage 01, and the smallest proposed header-only change.
- Current blockers, decisions needed from the owner, and proposed verification steps.

Do not edit, install packages, commit, push, deploy or activate integrations during this audit. Stop for owner approval. Never mark a stage complete just because a reference exists or a build passes.

## 6. Approval ledger

| Stage | Artwork | Implementation |
|---|---|---|
| 00 — Audit | Not applicable | Pending current repo verification |
| 01 — Header | 8 candidates, pending approval | Pending |
| 02 — Hero | Reference only | Pending |
| 03 — Support banner | Reference only | Pending |
| 04 — Club information | Reference only | Pending |
| 05 — Events | Reference only | Pending |
| 06 — Quick links | Reference only | Pending |
| 07 — Sponsor section | Reference only | Pending |
| 08 — Footer & frame | Reference only | Pending |
| 09 — Homepage QA | Pending prior approvals | Pending |
| 10 — Existing pages | Pending homepage approval | Pending |

Update the working checklist only on explicit approval and verified results. This reconciliation is based on the supplied handoff, not a fresh inspection of the local repository.
