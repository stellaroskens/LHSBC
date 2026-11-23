import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { parseSiteContent } from "../src/lib/content/siteContent.ts"
import {
  fundraiserStatusLabel,
  fundraiserTiming,
  homeFundraiserTitle,
  matchesActiveFundraiser,
  pacificInstant,
} from "../src/lib/events/fundraiserTiming.ts"

const noonOnNovemberFirst = new Date("2026-11-01T20:00:00.000Z")

test("pacific wall time stays on the November 8 fundraiser clock", () => {
  const instant = pacificInstant({ year: 2026, month: 11, day: 8 }, 16, 0)
  assert.equal(instant.toISOString(), "2026-11-09T00:00:00.000Z")
})

test("Burgerville is upcoming on November 1 and past after the evening", () => {
  assert.equal(
    fundraiserTiming("Sunday, November 8, 2026", "4:00 PM – 8:00 PM", noonOnNovemberFirst),
    "upcoming",
  )
  assert.equal(
    fundraiserTiming("Sunday, November 8, 2026", "4:00 PM – 8:00 PM", new Date("2026-11-09T01:00:00.000Z")),
    "active",
  )
  assert.equal(
    fundraiserTiming("Sunday, November 8, 2026", "4:00 PM – 8:00 PM", new Date("2026-11-09T05:00:00.000Z")),
    "past",
  )
  assert.equal(fundraiserStatusLabel("past"), "This date has passed")
})

test("a past fundraiser is not labeled upcoming", () => {
  const timing = fundraiserTiming("Friday, October 30, 2026", "9:30 AM – 10:00 PM", noonOnNovemberFirst)
  assert.equal(timing, "past")
  assert.equal(homeFundraiserTitle("Upcoming fundraisers", timing), "Recent fundraiser")
  assert.equal(homeFundraiserTitle("Upcoming fundraisers", "upcoming"), "Upcoming fundraisers")
})

test("the homepage fundraiser follows the active event id", () => {
  assert.equal(matchesActiveFundraiser("burgerville", "burgerville"), true)
  assert.equal(matchesActiveFundraiser("panda-express", "burgerville"), false)
  assert.equal(matchesActiveFundraiser("panda-express", "panda"), true)
})

test("an unreadable date is not treated as upcoming", () => {
  assert.equal(fundraiserTiming("Date to be announced", "", noonOnNovemberFirst), "unscheduled")
})

test("public indexing files leave staff and family routes out", () => {
  const robots = readFileSync(new URL("../public/robots.txt", import.meta.url), "utf8")
  const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8")
  for (const path of ["/admin", "/coach", "/team-administrator", "/staff", "/sign-in", "/family", "/api"]) {
    assert.match(robots, new RegExp(`Disallow: ${path}`))
    assert.equal(sitemap.includes(`https://albany-hs-bowling.netlify.app${path}`), false)
  }
  assert.match(sitemap, /\/donate</)
  assert.match(sitemap, /\/fundraisers</)
})

test("the fundraisers page keeps checkout off until a published fundraiser is active", () => {
  const page = readFileSync(new URL("../src/pages/Fundraisers.tsx", import.meta.url), "utf8")
  const content = readFileSync(new URL("../src/content/published/siteContent.json", import.meta.url), "utf8")
  assert.match(content, /"fundraisers": \[\]/)
  assert.match(content, /"activeEvent": "none"/)
  assert.match(content, /"donateTo": "\/donate"/)
  assert.match(content, /"donateButton": "Donation page — checkout is off"/)
  assert.equal(content.includes("TEST DRAFT"), false)
  assert.match(page, /Fundraiser details to be confirmed/)
  assert.match(page, /!burgerville/)
})

test("the public homepage does not list every stored fundraiser", () => {
  const source = readFileSync(new URL("../src/pages/HomeReview.tsx", import.meta.url), "utf8")
  assert.match(source, /matchesActiveFundraiser/)
  assert.doesNotMatch(source, /fundraisers\.map/)
})
