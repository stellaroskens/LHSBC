# LHSBC — Numbered Cursor installation instructions
For the existing LHSBC project on your Mac. The instructions are staged so you can stop after each pass. No need to know React or Git to start.

## 1. Download and extract
1. Download `LHSBC_Cursor_Handoff.zip` and double-click it in Finder to unzip.
2. Open `LHSBC_Cursor_Handoff/inventory/VISUAL-INVENTORY.html` in your browser. Inspect the header candidates side-by-side with the source. The 69 source crops are reference only. Do not approve them automatically.
3. Open Finder, choose Go > Go to Folder, type `~/Developer/LHSBC`, and press Return. Verify this is your LHSBC project (not Albany/WAHSB). If your actual location is different, use that folder instead.
4. Create a folder named `references` if it does not already exist, then copy the entire extracted `LHSBC_Cursor_Handoff` folder into it. Do not replace existing files with the same name without checking them. Expected resulting path: `~/Developer/LHSBC/references/LHSBC_Cursor_Handoff/`. Do not put this package inside `public`.

## 2. Open the existing project in Cursor
5. Launch Cursor. Select File > Open Folder and choose `~/Developer/LHSBC`. If it is already open, keep it open. Verify the Explorer shows the LHSBC project and `references/LHSBC_Cursor_Handoff/`.
6. Open the Chat/Agent panel and start a new chat for the project. UI labels may vary by Cursor version. Use read-only/Ask mode for the first prompt if available; otherwise explicitly prohibit edits.
7. Paste Prompt 00 below. Review Cursor's audit and check that it hasn't made changes. The assistant cannot verify your local repository from this handoff.

## 3. Paste Prompt 00 — Read-only audit
```text
You are working on my EXISTING LHSBC website. Verify this is ~/Developer/LHSBC, not WAHSB. Do not change any files, install packages, commit, push, deploy, activate payments or modify data. Inspect the existing routes, homepage, header/footer, CSS, public assets, scripts and working tree. Read references/LHSBC_Cursor_Handoff/LHSBC_DESIGN_IMPLEMENTATION.md, LHSBC_DESIGN_SYSTEM.md, ASSET_PLACEMENT_CHECKLIST.md and reference/APPROVED_HOMEPAGE.png. Inspect the inventory/ASSET-PLACEMENT-CHECKLIST.csv and header contact sheet. Treat reference-only images as visual guides, not deployable assets. Header candidates are pending my approval. Report actual files, route mapping, available official artwork, missing artwork, current test/build commands, and the smallest proposed Header-only change. Flag the eligibility and fundraising example-data issues. Stop for approval. No edits.
```

## 4. Approve header artwork first
8. Compare the source and rebuilt header in `inventory/01-header-CONTACT-SHEET.png`. If a detail is wrong, identify its ID (for example 01-02 Menu button) and request correction before using it. When you personally approve the eight header candidates, record that approval in the checklist. No need to approve every stage at once.
9. Use Agent/Edit mode if available and paste Prompt 01 only after the artwork and audit plan are approved. You can use Cursor's change review to inspect proposed edits before accepting them.

## 5. Paste Prompt 01 — Header only (after approval)
```text
I approve the reviewed Header artwork and Header-only audit plan. Implement stage 01 only according to references/LHSBC_Cursor_Handoff/LHSBC_DESIGN_IMPLEMENTATION.md and LHSBC_DESIGN_SYSTEM.md. Use only the approved header candidate assets, installed into the existing project's appropriate public asset folder if actually needed. Build real Menu, search and Sign In controls, with a compact right-aligned search field, empty navy center, no social icons and no Donate in the header. Match the approved reference, keep existing routes and behavior, and do not bake a complete screenshot into the UI. Make the smallest safe change, preserve all other sections, no new dependencies unless explicitly approved. Run existing tests/build and check desktop and mobile. Report exact changed files, asset paths, actual test results, any deviations or blockers, and a verified working local preview URL. Stop after Header and wait for my approval. Do not commit, push, deploy or activate integrations.
```

## 6. Open and review the preview
10. Click the verified preview URL Cursor reports. If the project uses Vite and port 5173 is actually available, that may be `http://localhost:5173/`; don't assume the port or start command. If needed ask Cursor to inspect the package scripts, start the existing dev server, and verify the URL. Leave that server running while reviewing.
11. Look at desktop, then use browser developer tools' responsive device mode (or resize the browser) to review phone width. Check Menu, search, Sign In, alignment, border and existing content. Reject or request specific fixes if anything differs. Do not accept changes just because a build passes.

## 7. Repeat for each subsequent stage
12. Obtain fresh, clean approved artwork for the next section first. Stages 02–08 are NOT yet production-ready. Keep supplied references in place, add newly approved artwork to the corresponding candidate folder and update the checklist with exact filenames and provenance. Never install rejected traces. Only then paste the next-stage prompt below, replacing `[STAGE]` with exactly one of the numbered stages.

```text
My previous stage is approved. Implement only [STAGE] from references/LHSBC_Cursor_Handoff/LHSBC_DESIGN_IMPLEMENTATION.md using the approved homepage reference, shared design system and asset checklist. First inspect which assets I have specifically approved for this stage. If any required production artwork, actual data or route is missing, report the blocker and leave the existing working area intact; do not install reference-only crops or create substitutes without approval. Reuse existing components and behavior; no unrelated refactors or new dependencies. Run actual tests/build, verify desktop/mobile layout, give exact changed files and asset paths, verified local preview URL, and remaining issues. Stop for my review before continuing. No commits, pushes, deployment or live integration changes.
```
Stage order: 02 Hero → 03 Support Banner → 04 Club Information → 05 Events → 06 Quick Links → 07 Sponsor Section → 08 Footer & Frame. Do not skip the individual visual approvals.

## 8. Final homepage QA, then extend site style
13. Once all eight stages are approved, paste:
```text
Perform a final LHSBC homepage QA pass against the approved reference and design system. Check responsive widths, keyboard/accessibility, real routes, live data versus placeholders, frame continuity, typography, artwork quality, and all existing tests/build. Report differences and smallest safe fixes. Do not implement other page changes or deploy. Give a verified preview URL and a final review checklist.
```
14. After the homepage is approved, ask Cursor to audit the existing route list and propose the order for applying the shared aesthetic to each page. Approve one page at a time. Never let it redesign or remove content/functionality without your approval.
15. Only when you personally approve the full site and are ready to publish, explicitly request a separate deployment plan. The handoff does not authorize publishing or payments.
