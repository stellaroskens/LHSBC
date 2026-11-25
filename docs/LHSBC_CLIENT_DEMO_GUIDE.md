# LHSBC — Client Demonstration Guide

Prepared November 25, 2026 for the club leadership meeting.

The public website is live and working. The staff dashboard is built, but it stays locked until club leadership turns on staff sign-in. Email and online payments are intentionally off. This guide keeps those three things separate: what exists in the website, what is switched on today, and what needs a decision or account from the club.

## 1. Links

| What | Link |
|---|---|
| Live website (production) | https://lhsbcor.com/ |
| Preview of this pass (not live) | https://6b07673f0b9d465e59464863--lhsbc.netlify.app/ |
| Local preview (on Stella's computer) | http://127.0.0.1:5173/ |

The preview link shows the new dropdown Menu and small fixes from this pass. The live site keeps the previous sidebar menu until the owner approves publishing.

### Suggested walkthrough (about 10 minutes)

1. **Homepage** — https://lhsbcor.com/ : hero, fundraising tracker (shows "to be confirmed"), Support Our Team banner, Why Join, Club Highlights, Upcoming Events, quick links.
2. **Menu** (use the preview link) — open Menu. The top row has **Join the club**, **Sponsor**, and **Donate**. Below are four categories: Overview, Team and Events, Support the Team, Resources. Click a category to expand it and a link to go there.
3. **Recruitment** — Our Club → How to Join: `/our-club#how-to-join`
4. **Sponsorship** — `/sponsors` (sponsor form layout, recognition levels, ways to contribute)
5. **Donations** — `/donate` (amounts and payment methods are shown, checkout clearly says it is not live)
6. **Fundraisers** — `/fundraisers` (says no current fundraiser is published)
7. **Meet the Bowlers** — `/meet-the-bowlers` (eight placeholder cards; no student names or photos)
8. **Practices** and **Tournaments** — `/practices`, `/tournaments` (FAQs, attire, spectator guidance; dates and venues to be confirmed)
9. **Contact** — `/contact` (form layout; it does not send yet)
10. **Staff and family sign-in** — `/sign-in` (Staff tab says staff access is not open yet; Family tab explains future family access)

## 2. Public website — working today

- All public pages load on desktop and phone, with no sideways scrolling and no broken images.
- Site search, header, footer, and page navigation.
- New dropdown Menu (preview only): opens under the Menu button, does not dim or move the page, closes on a selection, an outside click, or Escape, and works with the keyboard.
- Recruitment, sponsorship, and donation links appear in the Menu top row, the homepage, and page footers.
- `/bowl-a-thon` forwards to `/fundraisers`.
- The official QR codes point to https://lhsbcor.com/.
- Security headers are on. Sign-in pages are excluded from search engines.

## 3. Staff dashboard — built, locked until sign-in is enabled

Every staff screen requires a real Netlify Identity sign-in, checked on the server. Sign-in is **turned off today**, so the dashboard cannot be opened during the demo. That is intentional. No demonstration accounts exist, and none should be created. Even after sign-in is on, edits are saved to a review copy, never straight to the live site.

| Area | Where | Built today | Becomes operational after |
|---|---|---|---|
| Website content editing | `/admin/content` | Page editor with validation and preview; save, submit, approve, publish to review copy | Staff sign-in + GitHub content token |
| Coach management | `/admin/coaches`, `/coach` | Staff roles and coach dashboard; coach bios edited through content editor | Staff sign-in; coach names and bios from the club |
| Bowler / roster management | `/admin/bowlers`, `/coach/bowlers` | Profile editor for the eight placeholder cards | Staff sign-in + GitHub token. A real roster needs a private database (not built) |
| Practices and tournaments | `/admin/content`, `/admin/tournaments` | Edit practice and tournament content; calendar and venue check | Staff sign-in + GitHub token; dates and venues from the club |
| Sponsorships | `/admin/content`, `/admin/connections` | Sponsor page content and recognition; payment destination setup screen | Staff sign-in + GitHub token; sponsorship packages from the club |
| Donations | `/admin/donations` | Status screen; live payments switch is locked off | Deferred (see section 4) |
| Announcements | `/admin/announcements` | Draft announcements; sending is disabled | Staff sign-in + GitHub token; email delivery is deferred |
| Media | `/admin/media` | Upload, replace, and place public images (no student photos) | Staff sign-in + GitHub token |
| Staff permissions | `/admin/staff` | Invite planned coaches and club administrator; roles assigned on acceptance | Staff sign-in (Netlify Identity, invite-only) |
| Family access | `/admin/family`, `/family` | Explanation pages only; family accounts are switched off in the code | Private database + approval to open (not built) |
| Student privacy and consent | `/admin/consent` | Setup steps; consent records are not stored | Private consent database (not built) |
| System status | `/admin/status` | Shows which services are configured (yes/no only) | Staff sign-in |

### Turning on staff sign-in (owner task, about 30 minutes)

1. Netlify → Identity: enable, set registration to **invite only**.
2. Netlify environment variables: `ADMIN_AUTH_ENABLED=true`, `VITE_ADMIN_AUTH_ENABLED=true`, `ADMIN_EMAIL_ALLOWLIST=<owner email>`. Redeploy.
3. Invite the owner in Identity and give that account the `super_admin` role.
4. The owner invites coaches and the club administrator from `/admin/staff`.
5. For saving edits: add `GITHUB_CONTENT_TOKEN` (write access to the LHSBC repository only). Edits are made from a preview deploy and reach the live site when the review branch is merged.

Recommended before opening staff access: turn on two-factor authentication for the owner's Netlify and GitHub accounts.

## 4. Deferred integrations (intentionally off)

| Integration | Status |
|---|---|
| Club email `info@lhsbcor.com` | Mailbox not created. Not shown on the site. Contact form and announcements do not send. |
| Online donations (Stripe, PayPal, Venmo, Cash App) | Not connected. Checkout is locked and says so on the page. No card data is collected. |
| Sponsorship payments | Not connected. Sponsor inquiries do not take payment. |
| Social media links | Not connected. Shown as "to be confirmed." |
| Family accounts and consent records | Need a private database; not built. |

## 5. Information needed from club leadership

- Club email decision and who receives messages.
- Coach and club administrator names, short biographies, and photo consent.
- Registration status, how to join, fees, and eligibility wording.
- Practice venue, days, and times.
- Tournament names, dates, venues, and times.
- Sponsorship packages (levels, prices, benefits) and approved sponsor names and logos.
- Current fundraiser details and goal, if any.
- Donation recipient: organization name, payment account owner, and whether gifts are tax deductible (with EIN, if applicable).
- Official social media accounts.
- School affiliation wording the club is allowed to use.
- The owner email for the staff sign-in allowlist.
- Roster and guardian consent process before any student information appears online.

## 6. Recommended next steps

1. Approve the dropdown Menu and this pass's fixes on the preview link, then authorize publishing.
2. Provide the information in section 5 so "to be confirmed" text can be replaced.
3. Turn on staff sign-in (section 3) and invite staff.
4. Create the `info@lhsbcor.com` mailbox, then connect the contact form.
5. Choose a payment provider and confirm the donation recipient, then connect checkout.
6. Plan the private database for roster, family access, and consent before collecting any student data.
