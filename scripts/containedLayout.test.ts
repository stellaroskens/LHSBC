import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { describe, it } from "node:test"

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8")
const css = read("../src/styles/contained-layout.css")

describe("LAYOUT-01 contained layout", () => {
  it("uses the approved balanced frame", () => {
    assert.match(css, /--lo-max: 1280px;/)
    assert.doesNotMatch(css, /data-layout="[abc]"/)
  })

  it("never scales the page with zoom or transforms", () => {
    assert.doesNotMatch(css, /\bzoom\s*:|transform\s*:|scale\(/)
  })

  it("changes only layout properties, not colors or type styling", () => {
    const declarations = [...css.matchAll(/^\s+([a-z-]+)\s*:/gm)].map((match) => match[1])
    const allowed = new Set([
      "--lo-max", "--lo-gutter", "--lo-x", "--lo-join-top", "--lo-section", "--lo-last",
      "background", "width", "margin", "box-shadow", "overflow-x", "container-type",
      "gap", "padding", "padding-top", "padding-bottom", "padding-left", "padding-right", "font-size",
    ])
    assert.deepEqual(declarations.filter((name) => !allowed.has(name)), [])
    const backgrounds = [...css.matchAll(/background:\s*([^;]+);/g)].map((match) => match[1])
    assert.deepEqual(backgrounds, ["#e6e0d3"])
  })

  it("keeps each homepage size formula, measured against the frame", () => {
    const home = read("../src/styles/club-hero.css")
    for (const [, formula] of css.matchAll(/font-size: (clamp\([^)]*cqi[^)]*\));/g)) {
      assert.ok(home.includes(`font-size: ${formula.replace("cqi", "vw")};`), formula)
    }
  })

  it("applies to every public page through the shared shell and clears on staff pages", () => {
    const layout = read("../src/components/Layout.tsx")
    assert.match(layout, /root\.dataset\.layout = "contained"/)
    assert.match(layout, /delete root\.dataset\.layout/)
    assert.doesNotMatch(layout, /URLSearchParams|pathname === "\/"\) root/)
  })

  it("sizes shared page styles against the frame instead of the window", () => {
    for (const file of ["sitewide.css", "global.css", "bowlers.css"]) {
      assert.doesNotMatch(read(`../src/styles/${file}`), /\d(\.\d+)?vw\b/, file)
    }
    assert.match(css, /html\[data-layout\] \.site \{[^}]*container-type: inline-size;/)
  })
})
