# LHSBC — Owner installation steps (Mac + Cursor)

This is your personal checklist. The longer technical prompts are in `CURSOR_INSTALLATION_INSTRUCTIONS.md`. You are preparing the existing site for staged work, not installing a replacement website.

## 1. Save the handoff

- [ ] Download `LHSBC_Cursor_Handoff_Updated.zip` and double-click it in Finder.
- [ ] Open the extracted `LHSBC_Cursor_Handoff` folder. Confirm `READ_FIRST_RECONCILIATION.md`, `OWNER_INSTALLATION_STEPS.md`, the implementation/design-system files, checklist, reference image, inventory and artwork folders are inside.
- [ ] In Finder choose **Go → Go to Folder** (Shift–Command–G), enter `~/Developer/LHSBC`, and press Return. Use your actual project location if different.
- [ ] Locate or create the `references` folder. If a previous handoff folder is already there, add the two missing files and the updated `START_HERE.md` without deleting your existing approval notes or modified files. Otherwise copy the extracted handoff folder into `references`.

Expected location:

```text
~/Developer/LHSBC/references/LHSBC_Cursor_Handoff/
    READ_FIRST_RECONCILIATION.md
    OWNER_INSTALLATION_STEPS.md
    START_HERE.md
    LHSBC_DESIGN_IMPLEMENTATION.md
    LHSBC_DESIGN_SYSTEM.md
    ASSET_PLACEMENT_CHECKLIST.md
    CURSOR_INSTALLATION_INSTRUCTIONS.md
    reference/APPROVED_HOMEPAGE.png
    inventory/
    artwork/
```

Do not put the handoff in `public`. Do not drag the entire artwork folder into the live site.

## 2. Open Cursor and audit first

- [ ] Open Cursor; choose **File → Open Folder**, and select the existing LHSBC project (not the handoff folder or WAHSB).
- [ ] Start a new project chat. Use Ask/read-only mode if available. Cursor's interface may differ by version.
- [ ] Paste the prompt below. Do not approve edits yet.

### Prompt 00 — paste this first

```text
You are continuing my existing LHSBC website. Verify the repository identity, actual root, branch and working tree. Never modify WAHSB or overwrite existing work.

Read references/LHSBC_Cursor_Handoff/READ_FIRST_RECONCILIATION.md FIRST. Then read START_HERE.md, LHSBC_DESIGN_IMPLEMENTATION.md, LHSBC_DESIGN_SYSTEM.md, ASSET_PLACEMENT_CHECKLIST.md, CURSOR_INSTALLATION_INSTRUCTIONS.md and OWNER_INSTALLATION_STEPS.md in that folder. Inspect reference/APPROVED_HOMEPAGE.png, inventory/ASSET-PLACEMENT-CHECKLIST.csv and the stage 01 contact sheet.

Perform the read-only reconciliation audit described in READ_FIRST_RECONCILIATION.md. Report actual files, routes, existing official artwork, missing production artwork, test/build scripts, current integration state without secrets, conflicts and the smallest proposed Header-only change. The reference crops are NOT deployable assets; the header candidates are NOT yet approved. Do not invent data or routes. Make NO edits, install no packages, do not commit, push, deploy or activate integrations. Stop and wait for my approval.
```

## 3. Review only the header artwork

- [ ] Open `inventory/01-header-CONTACT-SHEET.png` and compare the eight rebuilt candidates to the approved homepage.
- [ ] Record which candidates you approve by ID in the checklist. Reject or request correction for anything blurry, distorted or visually inconsistent. Approving the overall homepage is not the same as approving each graphic.
- [ ] Review Cursor's audit. Resolve any blockers specific to the header. Do not ask Cursor to install other sections yet.

### Prompt 01 — only after explicit artwork and audit-plan approval

```text
I approve the reviewed Header artwork identified in my checklist and the Header-only audit plan. Implement stage 01 only, following READ_FIRST_RECONCILIATION.md, LHSBC_DESIGN_IMPLEMENTATION.md and LHSBC_DESIGN_SYSTEM.md. Use real Menu, search and Sign In controls, with compact right-aligned search, open navy center, no social icons and no header Donate. Preserve existing functionality and every other section. Use only specifically approved assets as needed, with the smallest safe change. No unnecessary new files, dependencies or refactors. Run the actual test/build commands and verify desktop/mobile behavior. Report changed files, approved asset paths, test results, any deviations or blockers, and a verified local preview URL. Leave the preview running if appropriate. Stop for my review. No commit, push, deployment or live integration changes.
```

## 4. Inspect the working preview

- [ ] Open the local preview URL returned by Cursor; do not assume a particular port. Ask Cursor to verify the URL if it fails.
- [ ] Review desktop and phone widths, check alignment, search, Menu and Sign In. Approve the implementation only if it looks and behaves correctly.
- [ ] If necessary, paste: `Correct only the following Header issues: [describe issues]. Preserve other sections. Re-run verification and give me the working preview URL. Stop for review.`

## 5. Continue one section at a time

For each next stage: obtain/approve the clean artwork or live component approach, confirm actual data and routes, paste the next-stage prompt from `CURSOR_INSTALLATION_INSTRUCTIONS.md`, inspect the preview, and record approval. Do not skip missing artwork or install rejected files. The handoff itself does not supply production-ready artwork for stages 02–08.

- [ ] 01 — Header (8 component references)
- [ ] 02 — Hero (8)
- [ ] 03 — Support banner (7)
- [ ] 04 — Club information (8)
- [ ] 05 — Events (7)
- [ ] 06 — Quick links (10)
- [ ] 07 — Sponsor section (10)
- [ ] 08 — Footer and frame (11)
- [ ] 09 — Full homepage QA and approval
- [ ] 10 — Existing website pages, one at a time

### Reusable next-stage prompt

```text
I approve the previous stage. Work on stage [number and name] only. Read the reconciliation file, design implementation, design system and checklist. Verify the assets I explicitly approved for this stage. If any required artwork, verified data or route is missing, report the blocker and preserve the existing area; do not use reference-only images or unauthorized substitutes. Make the smallest safe change, retain all existing functionality, run actual tests/build, verify desktop and mobile, and return the verified preview URL plus exact changes and remaining issues. Stop for my approval. Do not commit, push, deploy or activate integrations.
```

## 6. Final review and publication boundary

- [ ] After stage 08 approval, use the final QA prompt in the longer Cursor instructions. Review frame continuity, accessibility, routes, current content, actual fundraising/event data and responsive design.
- [ ] Only after the homepage is approved, authorize applying the shared style to other existing pages individually. Preserve their functions and content.
- [ ] Publishing, committing, pushing, and activating payment systems are separate owner decisions. Do not approve them as part of a design pass.

**Starting point:** the two documents clarify the handoff; they do not certify artwork, inspect your local repository or authorize any changes. Your next action is Prompt 00.
