/**
 * Owner-approved Athlete Safety copy (November 27, 2026) and official USBC / SafeSport links.
 * Changes here are code-reviewed on purpose: this page states club safety policy.
 */

export type SafetyLink = { label: string; href: string }

export const USBC_LINKS = {
  accountLogin: "https://bowl.com/athlete-safety-rvp/athlete-safety-rvp-account-login",
  safeSportTraining: "https://bowl.com/athlete-safety-rvp/newenrollmentpage",
  ncsiScreening: "https://bowl.com/athlete-safety-rvp/ncsiscreen",
  findAVolunteer: "https://apps1.bowl.com/FindAVolunteer",
  renewal: "https://bowl.com/athlete-safety-rvp/renew-in-rvp",
  information: "https://bowl.com/athlete-safety-rvp/information",
  reportConcern: "https://bowl.com/athlete-safety-rvp/report-a-concern",
  reportingPolicy: "https://bowl.com/athlete-safety-rvp/reporting_policy",
  safeSportTransportation: "https://uscenterforsafesport.org/transportation-lodging/",
} as const

export const USBC_RVP_CONTACT = {
  phoneLabel: "800-514-2695, ext. 8955",
  phoneHref: "tel:+18005142695,8955",
  email: "RVP@bowl.com",
} as const

export const athleteSafety = {
  whoNeeds: {
    heading: "Who Needs to Become a Registered Volunteer?",
    intro:
      "As part of our club's commitment to athlete safety, LHSBC requires adults serving in the following roles to complete the USBC Registered Volunteer Program and receive club approval:",
    roles: [
      "Coaches and assistant coaches",
      "Club volunteers",
      "Parents transporting other bowlers to practices or tournaments",
      "Adults supervising club activities",
      "Tournament and event chaperones",
    ],
    exemption:
      "Parents who are attending as spectators or transporting only their own children are not required to complete this process under our club policy unless they also serve in a role requiring clearance.",
    closing: "This is our club's commitment to establishing a consistent standard of safety for all our families.",
  },
  steps: {
    heading: "Getting Started — Six Simple Steps",
    items: [
      {
        title: "Create or Sign Into Your USBC Account",
        paragraphs: [
          "Visit the official USBC Athlete Safety portal and sign into your existing account or create one if needed.",
        ],
        link: { label: "Start Here — USBC Account Login", href: USBC_LINKS.accountLogin },
      },
      {
        title: "Open Your Athlete Safety Portal",
        paragraphs: [
          "From your USBC profile, select Athlete Safety/RVP.",
          "Review your membership, SafeSport training and background screening status. Complete any required membership registration or renewal.",
        ],
      },
      {
        title: "Complete SafeSport Training",
        paragraphs: [
          "Complete the required online SafeSport training using the instructions provided by USBC.",
          "This training helps adults understand appropriate boundaries, recognize misconduct and protect young athletes.",
        ],
        link: { label: "SafeSport Training Instructions", href: USBC_LINKS.safeSportTraining },
      },
      {
        title: "Complete Your Background Screening",
        paragraphs: [
          "After your SafeSport training has been recorded, follow USBC's instructions to complete your background screening through the National Center for Safety Initiatives (NCSI).",
          "Current screening fees will be provided through the official registration process.",
        ],
        link: { label: "Background Screening Information", href: USBC_LINKS.ncsiScreening },
      },
      {
        title: "Receive Your Clearance and Notify the Club",
        paragraphs: [
          "Once your training and screening requirements have been completed, notify club leadership.",
          "Your credentials must be reviewed and your volunteer role approved before you begin volunteering or providing transportation for other bowlers.",
        ],
        notice: "Submitting an application does not mean you have been approved.",
        link: { label: "Verify a Registered Volunteer", href: USBC_LINKS.findAVolunteer },
      },
      {
        title: "Keep Your Credentials Current",
        paragraphs: ["Registered Volunteers are responsible for maintaining their eligibility."],
        bullets: [
          "Renew SafeSport training annually.",
          "Renew background screening every two years.",
          "Maintain required USBC membership.",
          "Notify club leadership of changes affecting your eligibility.",
        ],
        link: { label: "Registered Volunteer Renewal Information", href: USBC_LINKS.renewal },
      },
    ] as { title: string; paragraphs: string[]; bullets?: string[]; notice?: string; link?: SafetyLink }[],
  },
  parents: {
    heading: "Parents Helping Parents",
    paragraphs: [
      "We understand that life gets busy. Many of us are working parents ourselves.",
      "Sometimes a shift runs late, another child has an activity, transportation falls through or getting your bowler to a tournament becomes difficult.",
      "We don't want those circumstances to prevent a student from participating.",
      "Our goal is to help families coordinate transportation with approved parent volunteers who may already be bringing their own children to practices and tournaments.",
      "All parent transportation volunteers must meet our background screening and athlete safety requirements before receiving approval.",
    ],
    maapp:
      "Transportation arrangements must also follow applicable Minor Athlete Abuse Prevention Policies (MAAPP), including appropriate supervision, written parental permission and restrictions on one-on-one transportation.",
    example:
      "For example, when coordinating carpools, families should consider arrangements where a parent picks up their own child first and drops them off last.",
    closing:
      "Background screening alone does not authorize transportation. Appropriate safeguards, communication and club approval are equally important.",
    link: { label: "Learn About SafeSport Transportation Policies", href: USBC_LINKS.safeSportTransportation },
  },
  directory: {
    heading: "Approved Transportation Volunteer Directory",
    status: "Not yet available",
    paragraphs: [
      "We are working toward providing enrolled families with access to a private directory of approved parent transportation volunteers.",
      "The directory will allow authorized families to identify participating volunteers and independently verify their Registered Volunteer credentials.",
      "Until this feature becomes available, please speak directly with club leadership about transportation needs.",
      "Volunteer information will not be published publicly without appropriate authorization.",
    ],
  },
  coaches: {
    heading: "Know Who Is Coaching Your Children",
    paragraphs: [
      "We believe parents should be able to make informed decisions about the adults working with their children.",
      "Our coach profiles will provide access to approved credentials and official verification resources when those credentials become available.",
      "Parents will not be required to join the club or create an account to view published coach credentials.",
      "You can also independently search for Registered Volunteers through USBC using their name and location.",
    ],
    link: { label: "USBC — Find a Registered Volunteer", href: USBC_LINKS.findAVolunteer },
  },
  program: {
    heading: "About the USBC Athlete Safety Program",
    paragraphs: [
      "The USBC Athlete Safety Program combines volunteer background screening, SafeSport education and abuse prevention policies to help protect young athletes.",
      "The program promotes awareness, appropriate boundaries and prevention of emotional, physical and sexual misconduct.",
    ],
    link: { label: "Official USBC Athlete Safety Information", href: USBC_LINKS.information },
  },
  resources: {
    heading: "General Information",
    intro: "Official resources for parents, coaches and volunteers.",
    links: [
      { label: "Athlete Safety/RVP Handbook", href: "https://images.bowl.com/bowl/media/assets/usbc/rvp/080124_athletesafetyhandbook.pdf" },
      {
        label: "Event Quality Control System",
        href: "https://images.bowl.com/bowl/media/legacy/internap/bowl/rules/pdfs/ExternalTournament_QualityControlSystem.pdf",
      },
      { label: "Policy Explanation and CAQs", href: "https://images.bowl.com/bowl/media/assets/usbc/rvp/safesport_rvpandminors.pdf" },
      { label: "SafeSport Code", href: "https://uscenterforsafesport.org/response-and-resolution/safesport-code/" },
      { label: "Safe Sport Authorization Act of 2017", href: "https://www.congress.gov/bill/115th-congress/senate-bill/534" },
      { label: "USBC/Safe Sport Due Process", href: "https://bowl.com/athlete-safety-rvp/usbc-and-safesport" },
    ] as SafetyLink[],
  },
  videos: {
    heading: "Informational Videos",
    subheading: "Understanding Minor Athlete Abuse Prevention Policies (MAAPP)",
    intro: "Additional information about MAAPP can be found in Section III of the USBC Athlete Safety/RVP Handbook.",
    episodes: [
      { label: "Why MAAPP Is Important", href: "https://youtu.be/vEv-u-ij2qI" },
      { label: "In-Program Contact and One-on-One Policy", href: "https://youtu.be/MR__DAc3Sus" },
      { label: "Electronic Communications", href: "https://youtu.be/tpprPP5ERuI" },
      { label: "Transportation and Lodging", href: "https://youtu.be/FA_ib8Hb1wY" },
      { label: "Locker Rooms and Athletic Training", href: "https://youtu.be/wfv7cYBJdkM" },
      { label: "Summary", href: "https://youtu.be/iuHPvaoUeRo" },
    ] as SafetyLink[],
  },
  questions: {
    heading: "Questions About the Registered Volunteer Program?",
    intro: "Contact the United States Bowling Congress.",
  },
  reporting: {
    heading: "Reporting a Safety Concern",
    paragraphs: [
      "Every child deserves to be heard, respected and protected.",
      "If you have concerns about inappropriate behavior, misconduct or the safety of a young athlete, please speak up.",
    ],
    links: [
      { label: "Report a Concern", href: USBC_LINKS.reportConcern },
      { label: "USBC Reporting Policy", href: USBC_LINKS.reportingPolicy },
    ] as SafetyLink[],
    emergency: "If a child is in immediate danger, call 911.",
    mandatory:
      "Follow applicable mandatory reporting requirements. Reporting a concern internally does not replace reporting to the appropriate authorities.",
    closing: "Protecting our children is a responsibility we all share.",
  },
} as const

export const familySupport = {
  heading: "More Than a Bowling Team",
  subheading: "We're Families Supporting Families.",
  paragraphs: [
    "Many of us are working parents ourselves. We understand what it's like to balance work schedules, late shifts, other children's activities and the everyday expenses of raising a family.",
    "We don't believe those circumstances should keep a child from participating in a sport they enjoy.",
    "We're a close-knit group of families who genuinely believe in supporting one another. Many of our families have backgrounds in education, family services and community support, and we share a commitment to creating a safe, encouraging environment for our children.",
  ],
  cards: [
    {
      id: "ride",
      title: "Need a Ride?",
      paragraphs: [
        "Already heading to practice with your own kids? Helping another family with transportation can make an enormous difference.",
        "We're working to help families coordinate rides with approved, background-screened parent volunteers for practices and tournaments.",
        "All transportation arrangements must have appropriate parental permission and follow our athlete safety requirements.",
      ],
    },
    {
      id: "help",
      title: "Need a Little Help?",
      paragraphs: [
        "Sports can become expensive, especially when you're raising more than one child.",
        "Through community donations, local sponsorships and fundraising, we're working to reduce the financial barriers that can prevent students from participating.",
        "Please feel comfortable discussing your family's needs privately with club leadership.",
        "You don't need to explain your circumstances to the entire team.",
      ],
    },
    {
      id: "safety",
      title: "Safety Comes First",
      paragraphs: [
        "We want parents to feel comfortable knowing who is working with their children.",
        "Our club requires appropriate volunteer background screening, SafeSport education and approval before adults serve in designated volunteer or transportation roles.",
        "Learn more about our Athlete Safety and Background Check requirements.",
      ],
    },
    {
      id: "belong",
      title: "A Community Where Everyone Belongs",
      paragraphs: [
        "You don't need expensive equipment, previous bowling experience or a perfectly flexible work schedule.",
        "We want you and your children to feel welcome here.",
        "We're not just teaching kids how to bowl. We're helping them build friendships, confidence, responsibility and a sense of belonging.",
      ],
    },
  ],
  closing: "If your child wants to bowl, let's see what we can do together to help make that happen.",
} as const
