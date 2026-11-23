import { useState } from "react"
import { library } from "../content/site"
import {
  PAYMENT_METHODS,
  dollarsToCents,
  formatUsd,
  methodExplanation,
  type DonationMethod,
} from "../lib/payments/donations"

const METHOD_LABELS: Record<DonationMethod, string> = {
  card: "Card, Apple Pay, or Google Pay",
  paypal: "PayPal",
  venmo: "Venmo",
  cash_app: "Cash App",
}

export function QuickDonate() {
  const suggestions = library.donations.suggestedAmounts
    .map((amount) => dollarsToCents(amount))
    .filter((amount): amount is number => amount != null)
  const [selected, setSelected] = useState<string>(suggestions[0] ? String(suggestions[0]) : "custom")
  const [custom, setCustom] = useState("")
  const [method, setMethod] = useState<DonationMethod>("card")

  return (
    <form className="quick-donate">
      <fieldset disabled>
        <legend>Amount</legend>
        <div className="quick-donate__amounts">
          {suggestions.map((cents) => (
            <label key={cents}>
              <input
                type="radio"
                name="donation-amount"
                value={String(cents)}
                checked={selected === String(cents)}
                onChange={() => setSelected(String(cents))}
              />
              {formatUsd(cents)}
            </label>
          ))}
          <label>
            <input
              type="radio"
              name="donation-amount"
              value="custom"
              checked={selected === "custom"}
              onChange={() => setSelected("custom")}
            />
            {library.donations.customLabel}
          </label>
        </div>
        {selected === "custom" ? (
          <label>
            Dollars
            <input
              inputMode="decimal"
              autoComplete="off"
              value={custom}
              onChange={(event) => setCustom(event.target.value)}
              aria-describedby="donation-amount-hint"
            />
          </label>
        ) : null}
        <p id="donation-amount-hint">Suggested amounts can be changed by a super administrator. They are not sponsorship packages.</p>
      </fieldset>
      <fieldset disabled>
        <legend>{library.donations.methodsHeading}</legend>
        {PAYMENT_METHODS.map((item) => (
          <label key={item} className="quick-donate__method">
            <input
              type="radio"
              name="donation-method"
              value={item}
              checked={method === item}
              onChange={() => setMethod(item)}
            />
            <span>
              <strong>{METHOD_LABELS[item]}</strong>
              <small>{methodExplanation(item)} Not connected.</small>
            </span>
          </label>
        ))}
      </fieldset>
      <button className="sw-btn" type="button" disabled>
        Checkout is not available
      </button>
      <p role="status">{library.donations.unavailable}</p>
    </form>
  )
}
