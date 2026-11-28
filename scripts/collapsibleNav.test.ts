import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const menu = readFileSync(new URL("../src/components/PublicMenu.tsx", import.meta.url), "utf8")
const css = readFileSync(new URL("../src/styles/header.css", import.meta.url), "utf8")
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}

test("the full menu opens with every category expanded", () => {
  assert.match(menu, /useState<Set<string>>\(\(\) => new Set\(\)\)/)
  assert.match(menu, /const isOpen = !collapsed\.has\(group\.id\)/)
  assert.match(menu, /hidden=\{!isOpen\}/)
  assert.match(menu, /aria-controls/)
})

test("compact icon mode is desktop only and remembered for the session", () => {
  assert.match(menu, /const COMPACT_QUERY = "\(min-width: 761px\)"/)
  assert.match(menu, /sessionStorage/)
  assert.doesNotMatch(menu, /localStorage/)
  assert.match(menu, /"Collapse menu to icons"/)
  assert.match(menu, /"Expand full menu"/)
  assert.match(menu, /aria-pressed/)
})

test("compact flyouts open on mouse hover, tap, focus and arrow keys", () => {
  assert.match(menu, /event\.pointerType !== "mouse"/)
  assert.match(menu, /scheduleClose/)
  assert.match(menu, /FLYOUT_CLOSE_DELAY/)
  assert.match(menu, /event\.key === "ArrowDown"/)
  assert.match(menu, /event\.key === "Escape" && flyout === groupId/)
  assert.match(menu, /event\.defaultPrevented/)
  assert.match(menu, /useState<string \| null>|flyout: string \| null/)
  assert.match(menu, /aria-label=\{group\.title\}/)
})

test("the menu stays inside the frame without dimming or page scaling", () => {
  assert.doesNotMatch(css, /\.nav-dropdown[^{]*\{[^}]*position:\s*fixed/)
  assert.doesNotMatch(css, /zoom:|backdrop-filter/)
  assert.match(css, /\.nav-flyout\s*\{/)
  assert.match(css, /\.nav-rail__tip/)
  assert.match(css, /prefers-reduced-motion/)
  assert.match(css, /min-height: 44px/)
})

test("the collapsible menu adds no dependencies", () => {
  const all = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies })
  for (const name of all) assert.doesNotMatch(name, /menu|nav|popper|floating|tippy|radix|headless/i)
  assert.doesNotMatch(menu, /from "(?!react|react-router)[^".][^"]*"/)
})
