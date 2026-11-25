import { Link } from "react-router-dom"

export function SignInLink() {
  return (
    <Link className="topbar__pill header-account" to="/sign-in">
      Sign In
    </Link>
  )
}

export function AccountButton() {
  return <SignInLink />
}
