import type { ReactNode } from "react"

export type CaseSection = { id: string; num: string; title: ReactNode; content: ReactNode }

export type ExperienceDetail = {
  slug: string
  metaTitle: string
  metaDescription: string
  ogDescription: string
  orgName: string
  jobTitle: string
  current?: boolean
  dateRange: string
  typeTag: string
  title: string
  company: string
  companyHref?: string
  companyDomain?: string
  lede: string
  stack: string[]
  sections: CaseSection[]
  prev: { href: string; label: string }
  next: { href: string; label: string }
}

export const EXPERIENCES: Record<string, ExperienceDetail> = {
  "bricketx-pk": {
    slug: "bricketx-pk",
    metaTitle: "Full Stack Developer at BricketX PK | Muhammad Maaz",
    metaDescription:
      "How Muhammad Maaz built database infrastructure, automation workflows, and product structure for BricketX PK's investment platform — beyond typical full-stack development.",
    ogDescription:
      "Database infrastructure, automation workflows, and product structure for an investment platform built from zero requirements.",
    orgName: "BricketX PK",
    jobTitle: "Full Stack Developer (MERN | Next.js)",
    current: true,
    dateRange: "Apr 2026 — Present",
    typeTag: "Full-time · On-site · Karachi",
    title: "Full Stack Developer (MERN | Next.js)",
    company: "BricketX PK",
    companyHref: "https://bricketx.com",
    companyDomain: "bricketx.com",
    lede: "Hired to build an investment portal — but joined a project with no business requirements document, no business plan, and no database. What started as a development role ended up covering product structuring, system architecture, and automation that gave the company visibility into its own investor data for the first time.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Zapier", "Webhooks", "SEO"],
    sections: [
      {
        id: "starting-point",
        num: "01",
        title: "The Starting Point",
        content: (
          <p>
            When I joined, BricketX wanted an investment portal built — but there was no blueprint for it. No
            business requirements document, no formal business plan, no defined data model, no database at all. The
            existing websites were live but not properly functional: when a visitor filled out a form, the only
            &quot;record&quot; of it was an email notification. There was no database capturing that data anywhere.
            As a developer, that meant starting without the one thing you usually take for granted — a clear spec to
            build against.
          </p>
        ),
      },
      {
        id: "database-infra",
        num: "02",
        title: "Database & Web Infrastructure",
        content: (
          <ul className="points">
            <li>
              <strong>Implemented Supabase</strong> as the core database layer — every website now actually records
              submitted data instead of it disappearing into an inbox.
            </li>
            <li>
              <strong>Redesigned the websites</strong> alongside SEO considerations, rebuilding them to be properly
              functional rather than just visually present.
            </li>
            <li>
              <strong>Leading the development team</strong> on this work — not just writing code solo.
            </li>
          </ul>
        ),
      },
      {
        id: "product-engineering",
        num: "03",
        title: "Product Engineering — Structuring the Investment Portal",
        content: (
          <>
            <p>
              BricketX licensed a third-party investment platform, InvestNext, as an interim solution while a fully
              owned portal gets built. My job wasn&apos;t just to plug it in — I had to fully understand how it
              worked: investment packages, verticals, SPVs, and exactly how each piece of data and content needed to
              appear on the platform. This went well beyond development into what&apos;s closer to product and
              content engineering:
            </p>
            <ul className="points">
              <li>
                Took the <strong>core business document</strong> and broke it down topic by topic, mapping which
                content belonged to which investment package and vertical.
              </li>
              <li>
                Designed the full <strong>infographics pattern</strong> — worked directly with the graphic designer,
                specifying exactly what images and infographics were needed and how they should represent each
                package.
              </li>
              <li>
                Designed the <strong>video content pattern</strong> — briefed the video editor/animator on the
                structure and style of videos needed to support each package and vertical.
              </li>
            </ul>
            <div className="callout">
              <strong>Why this matters:</strong> most of this content-structuring work doesn&apos;t show up on a
              typical developer&apos;s résumé, but it was the difference between the portal actually making sense to
              an investor and just being a pile of unorganized PDFs and screenshots.
            </div>
          </>
        ),
      },
      {
        id: "automation",
        num: "04",
        title: "Automation & Workflow Engineering",
        content: (
          <>
            <p>
              The biggest technical problem: since InvestNext is a licensed third-party platform, BricketX had zero
              visibility into its own transactions. Once an investor paid through it, the only confirmation was a
              manual email — there was no structured record of who invested in what, anywhere in our own systems.
            </p>
            <p>
              I built a Zapier-based automation triggered off the transaction-acceptance step on the admin side, with
              a full workflow behind it:
            </p>
            <ul className="points">
              <li>Accepted transactions are recorded into a structured spreadsheet automatically.</li>
              <li>
                The workflow <strong>auto-generates an RFID number and QR code</strong> for each investor.
              </li>
              <li>
                A <strong>webhook pushes the data into our Supabase database</strong>, closing the visibility gap
                entirely.
              </li>
              <li>
                Built a <strong>brand-new portal on top of this data</strong> — an investor-facing side showing
                insights for the specific project/package they invested in, and an admin-facing side showing all
                investors across every package.
              </li>
            </ul>
            <p>
              Investors now automatically receive an email with their invested package details, their RFID number,
              and a temporary password for the new portal — no manual tracking required on either side.
            </p>
          </>
        ),
      },
      {
        id: "marketing-automation",
        num: "05",
        title: "Marketing Automation",
        content: (
          <p>
            Separately, I connected the website&apos;s lead-capture database to a live, webhook-fed spreadsheet
            shared directly with the marketing team. Instead of leads sitting unseen, new leads now appear instantly
            for marketing to review and reach out to — turning a manual, easy-to-miss process into an immediate one.
          </p>
        ),
      },
      {
        id: "ownership",
        num: "06",
        title: "Broader Ownership",
        content: (
          <>
            <p>Across all of the above, my role expanded well past writing code:</p>
            <div className="chip-row">
              {[
                "System Design",
                "Architecture",
                "Database Modeling",
                "Workflow Design",
                "Project Planning",
                "Team Leadership",
                "Product Structuring",
                "Content Direction",
              ].map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </>
        ),
      },
    ],
    prev: { href: "/experience", label: "← All experience" },
    next: { href: "/experience/utf-labs", label: "Next: UTF-Labs →" },
  },

  "utf-labs": {
    slug: "utf-labs",
    metaTitle: "Next.js & React Developer at UTF-Labs | Muhammad Maaz",
    metaDescription:
      "How Muhammad Maaz grew from frontend into professional backend development at UTF-Labs — Node.js, MQTT/embedded integration, server management, and migrations.",
    ogDescription: "Backend development, MQTT/embedded integration, server management, and migration work.",
    orgName: "UTF-Labs",
    jobTitle: "Next.js & React Developer",
    dateRange: "Oct 2025 — Apr 2026",
    typeTag: "Full-time · On-site · Karachi",
    title: "Next.js & React Developer",
    company: "UTF-Labs",
    companyHref: "https://www.utf-labs.com/",
    companyDomain: "utf-labs.com",
    lede: "Joined with a frontend background from React experience, but this is where I professionally learned backend development and put it to work on real, live projects — Node.js/Express APIs, MQTT integration with an embedded systems team, server management, and migrating projects across major framework versions.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Mongoose",
      "Redis",
      "MQTT",
      "PM2",
      "n8n",
    ],
    sections: [
      {
        id: "frontend-to-backend",
        num: "01",
        title: "From Frontend to Backend",
        content: (
          <p>
            I joined UTF-Labs with a frontend background, mostly React experience, under the title Next.js &amp;
            React Developer. What made this role different is that it&apos;s where I professionally learned backend
            development and actually applied it on production projects — Node.js and Express.js on the API side,
            with both MongoDB and PostgreSQL as the underlying databases.
          </p>
        ),
      },
      {
        id: "mqtt-embedded",
        num: "02",
        title: "MQTT & Embedded Systems Integration",
        content: (
          <p>
            Most projects at UTF-Labs connected to work owned by an embedded systems team. I built the APIs that
            bridged the two sides — connecting to embedded devices through MQTT, using a message broker to publish
            and subscribe to data rather than typical REST-only communication. This was a different integration
            pattern than most web-only backend work, and it shaped how I think about real-time, event-driven
            systems.
          </p>
        ),
      },
      {
        id: "fullstack-nextjs",
        num: "03",
        title: "Full-Stack Ownership on a Next.js Project",
        content: (
          <p>
            One project in particular went beyond frontend work entirely — a full-stack Next.js build where I owned
            both the frontend and the backend, rather than handing off the API layer to someone else.
          </p>
        ),
      },
      {
        id: "server-management",
        num: "04",
        title: "Server Management & Live Streaming",
        content: (
          <ul className="points">
            <li>
              Maintained production servers directly — uploading build/<code>.dist</code> files and managing running
              processes with <strong>PM2</strong>.
            </li>
            <li>
              Implemented <strong>MediaMTX</strong> on the server for one project, powering live video streaming
              functionality.
            </li>
            <li>
              Used <strong>Redis</strong> for caching to keep frequently accessed data fast under load.
            </li>
          </ul>
        ),
      },
      {
        id: "migrations",
        num: "05",
        title: "Framework & Database Migrations",
        content: (
          <>
            <p>Handled version migrations rather than just building on top of whatever was already there:</p>
            <ul className="points">
              <li>
                Migrated projects from <strong>older Next.js versions to current ones</strong>.
              </li>
              <li>
                Migrated <strong>Prisma from older to newer versions</strong> — used with PostgreSQL on some projects
                and with MongoDB on others, alongside <strong>Mongoose</strong> for more direct MongoDB work.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "automation-n8n",
        num: "06",
        title: "Automation with n8n",
        content: (
          <p>
            Built several automation workflows using <strong>n8n</strong> to handle repetitive processes without
            needing a fully custom backend service for each one.
          </p>
        ),
      },
      {
        id: "existing-codebases",
        num: "07",
        title: "Working in Existing Codebases",
        content: (
          <>
            <p>
              Most of the projects I worked on at UTF-Labs weren&apos;t greenfield — they were existing, live,
              running systems built by other developers. That meant a different kind of experience than starting
              from zero: reading and understanding someone else&apos;s architecture, fixing bugs on projects already
              in production, and implementing new features into codebases I didn&apos;t originally write. A smaller
              number of projects I did build from the start.
            </p>
            <div className="callout">
              <strong>Why this matters:</strong> building on someone else&apos;s live codebase without breaking
              production is a different skill than greenfield development — it&apos;s most of what real backend work
              actually looks like day to day.
            </div>
          </>
        ),
      },
    ],
    prev: { href: "/experience/bricketx-pk", label: "← Previous: BricketX PK" },
    next: { href: "/experience/brb-group", label: "Next: BRB Group →" },
  },

  "brb-group": {
    slug: "brb-group",
    metaTitle: "React Development at BRB Group | Muhammad Maaz",
    metaDescription:
      "How Muhammad Maaz led frontend development across payroll, HR automation, IT management, visitor tracking, AI marketing, and file management tools at BRB Group.",
    ogDescription:
      "Frontend development across HR automation, IT management, AI marketing tools, and a company-wide file management system.",
    orgName: "BRB Group",
    jobTitle: "React Development",
    dateRange: "Aug 2024 — Oct 2025",
    typeTag: "Contract",
    title: "React Development",
    company: "BRB Group",
    lede: "Led frontend development across a wide range of internal business tools — HR automation, IT management, visitor tracking, AI-driven marketing, and a company-wide file management system — collaborating cross-functionally with design and backend teams throughout.",
    stack: ["React", "WebSockets", "REST APIs", "RBAC", "Bot / Chat UI", "Data Visualization"],
    sections: [
      {
        id: "business-interfaces",
        num: "01",
        title: "Payroll, Document & Finance Interfaces",
        content: (
          <p>
            Led the frontend development of payroll, document, and finance management interfaces — streamlining
            day-to-day workflows and improving data accuracy across the board.
          </p>
        ),
      },
      {
        id: "hr-tool",
        num: "02",
        title: "HR Automation",
        content: (
          <ul className="points">
            <li>
              Built a <strong>Job Description Builder</strong> for HR to create and structure JDs directly in the
              system rather than editing documents by hand.
            </li>
            <li>
              Built the <strong>leave approval flow</strong>: an employee requests leave through the system, an
              email automatically goes to their line manager for approval, the manager approves within the system,
              and HR is notified once it&apos;s confirmed — no manual back-and-forth over email.
            </li>
            <li>
              Built the frontend for a <strong>company info bot</strong> — employees can ask it questions and it
              responds with company information and sends the specific policy documents they ask for.
            </li>
            <li>
              Built <strong>attendance tracking</strong> across two levels: a <strong>daily view</strong> showing who
              checked in and out, arrival/departure times, and flags for late arrivals or early departures, plus a{" "}
              <strong>monthly attendance record</strong> that rolled all of that up into a full monthly summary per
              employee.
            </li>
          </ul>
        ),
      },
      {
        id: "it-dashboard",
        num: "03",
        title: "IT & Inventory Management",
        content: (
          <>
            <p>A unified system covering ticketing, inventory, and infrastructure monitoring for the IT team:</p>
            <ul className="points">
              <li>
                <strong>Ticket &amp; inventory management</strong> with full ticket status tracking from raised to
                resolved.
              </li>
              <li>
                <strong>IT Assistant bot</strong> — the IT admin can feed it data directly to expand what it knows
                and improve its answers over time.
              </li>
              <li>
                <strong>AI Agent bot</strong> — a separate, user-facing bot where employees describe their issue in
                conversation and the agent raises a support ticket on their behalf automatically.
              </li>
              <li>
                <strong>IP tracking</strong> — visibility into which IPs are online or offline and when.
              </li>
              <li>
                <strong>Live device tracking</strong> for select devices, built using <strong>WebSockets</strong>{" "}
                for real-time status.
              </li>
              <li>
                <strong>Domain expiry reminders</strong> — automatic notifications when a domain&apos;s renewal date
                is approaching.
              </li>
              <li>Full <strong>conversation history</strong> maintained for both bots, so past interactions aren&apos;t lost.</li>
            </ul>
          </>
        ),
      },
      {
        id: "visitor-management",
        num: "04",
        title: "Visitor Management",
        content: (
          <p>
            A smaller feature, but a genuinely useful one — a front-desk style log of who visited, what time they
            arrived, who they came to meet, and how long they stayed. Simple, but it gave the company a proper record
            of visitor activity that didn&apos;t exist before.
          </p>
        ),
      },
      {
        id: "ai-marketing",
        num: "05",
        title: "AI Marketing Automation",
        content: (
          <ul className="points">
            <li>
              <strong>AI blog generation</strong> — generates blog content on request.
            </li>
            <li>
              <strong>Social media posting</strong> directly through the app — generate a blog, generate a matching
              image, select the target platform, and publish, all in one flow.
            </li>
            <li>
              Built a small <strong>Canva-style design tool</strong> to standardize the visual pattern for post
              images — upload an image, adjust colors, change fonts, and position and color text on top of it.
            </li>
            <li>
              The same <strong>email notification pattern</strong> used in HR was reused here for marketing-related
              alerts.
            </li>
          </ul>
        ),
      },
      {
        id: "file-drive",
        num: "06",
        title: "Company File Management",
        content: (
          <>
            <p>
              Built a Drive-style application to hold the company&apos;s entire file and document data in one place,
              with proper role-based access control:
            </p>
            <ul className="points">
              <li>
                <strong>Role-based access</strong> across admin, marketing admin, IT admin, and other roles — each
                with different permission levels.
              </li>
              <li>
                Granular permissions per file or folder: <strong>full access</strong>, <strong>read-only</strong>, or{" "}
                <strong>create &amp; delete</strong>, depending on who&apos;s granted what.
              </li>
              <li>
                Users can <strong>create their own folders</strong> and add files inside them — e.g. a folder created
                by the marketing admin stays private to the super admin only, until the marketing admin explicitly
                grants access to a marketing manager or anyone else.
              </li>
              <li>
                Built as a properly <strong>secure file-handling system</strong>, not just an upload box with a
                shared link.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "ai-analysis-sap",
        num: "07",
        title: "AI Analysis & SAP Automation",
        content: (
          <p>
            Beyond the tools above, I built additional AI-analysis frontends with proper chart-based visualizations,
            and worked on automating SAP-related work through an AI agent — the agent handles the underlying task,
            and I built the frontend that renders the agent&apos;s response in real time over WebSockets.
          </p>
        ),
      },
    ],
    prev: { href: "/experience/utf-labs", label: "← Previous: UTF-Labs" },
    next: { href: "/experience/neuramatics", label: "Next: Neuramatics →" },
  },

  neuramatics: {
    slug: "neuramatics",
    metaTitle: "Frontend Developer at Neuramatics.Co. | Muhammad Maaz",
    metaDescription:
      "How Muhammad Maaz built React landing pages and data-driven dashboard interfaces as a frontend developer at startup Neuramatics.Co.",
    ogDescription: "React landing pages and dashboard/chart interfaces at an early-stage startup.",
    orgName: "Neuramatics.Co.",
    jobTitle: "Frontend Developer",
    dateRange: "Nov 2023 — Feb 2024",
    typeTag: "Contract · Startup",
    title: "Frontend Developer",
    company: "Neuramatics.Co.",
    lede: "An early-stage startup role that gave me hands-on, practical experience with React.js — building marketing-facing landing pages and dashboard interfaces with data visualizations, while working closely with a small, fast-moving team.",
    stack: ["React.js", "JavaScript", "Charts / Graphs", "Responsive UI"],
    sections: [
      {
        id: "startup-context",
        num: "01",
        title: "Working at a Startup",
        content: (
          <p>
            Neuramatics.Co. was an early-stage startup, which meant a smaller team, less rigid process, and more
            direct ownership over what I built than a larger company role typically offers. It was my first real
            exposure to working with React.js as a library in production, rather than in a learning environment.
          </p>
        ),
      },
      {
        id: "landing-pages",
        num: "02",
        title: "Landing Pages",
        content: (
          <p>
            Built responsive, marketing-facing landing pages in React — translating design into clean, working UI
            focused on clarity and conversion rather than internal tooling.
          </p>
        ),
      },
      {
        id: "dashboards",
        num: "03",
        title: "Dashboards & Data Visualization",
        content: (
          <p>
            Built dashboard interfaces with charts and graphs, turning raw data into something readable at a glance
            — early groundwork for the data visualization work I&apos;d go on to do more heavily in later roles.
          </p>
        ),
      },
      {
        id: "day-to-day",
        num: "04",
        title: "Day-to-Day Responsibilities",
        content: (
          <ul className="points">
            <li>Frontend development tasks across the projects above, end to end.</li>
            <li>
              <strong>Debugging</strong> and fixing issues as they came up in a fast-moving startup environment.
            </li>
            <li>
              Collaborating directly with the project team to improve <strong>UI functionality and overall UI/UX</strong>.
            </li>
          </ul>
        ),
      },
    ],
    prev: { href: "/experience/brb-group", label: "← Previous: BRB Group" },
    next: { href: "/experience/dimensional-systems", label: "Next: Dimensional Sys →" },
  },

  "dimensional-systems": {
    slug: "dimensional-systems",
    metaTitle: "Frontend Support Developer at Dimensional Sys | Muhammad Maaz",
    metaDescription:
      "How Muhammad Maaz learned React and Vue on real fintech dashboards at Dimensional Sys, including migrating a legacy PHP project to Vue.",
    ogDescription:
      "First real project experience — React, Vue, fintech dashboards, and a legacy PHP-to-Vue migration.",
    orgName: "Dimensional Sys, Inc.",
    jobTitle: "Frontend Support Developer",
    dateRange: "Aug 2023 — Nov 2023",
    typeTag: "Internship · Fintech",
    title: "Frontend Support Developer",
    company: "Dimensional Sys, Inc.",
    lede: "An internship, but the first time I worked on a real, production project rather than a learning exercise. I came in knowing JavaScript and left having learned both React and Vue on the job, building fintech dashboards and helping migrate legacy code to modern frameworks.",
    stack: ["React.js", "Vue 3", "D3.js", "API Integration", "PHP (legacy)"],
    sections: [
      {
        id: "first-project",
        num: "01",
        title: "Learning React on a Real Project",
        content: (
          <p>
            I joined only knowing JavaScript — no React experience yet. This is where I actually learned React, on a
            real project rather than a tutorial, and built out the frontend for it. Everything after this role
            builds on what I picked up here.
          </p>
        ),
      },
      {
        id: "learning-vue",
        num: "02",
        title: "Shifting to Vue",
        content: (
          <p>
            Partway through, I was moved onto a second project that was built in Vue instead of React. I learned Vue
            on the job and worked on that project directly — giving me working experience across two major frontend
            frameworks within a single internship.
          </p>
        ),
      },
      {
        id: "fintech-dashboards",
        num: "03",
        title: "Fintech Dashboards",
        content: (
          <>
            <p>
              Dimensional Sys was a fintech company, and most of the work centered on stock-market-related products.
              My focus was primarily dashboards:
            </p>
            <ul className="points">
              <li>
                Built dashboard UI and <strong>charts/data visualizations</strong> (D3.js) to present stock-related
                data clearly.
              </li>
              <li>
                Learned and applied <strong>API integration</strong> to connect frontend dashboards to live data.
              </li>
              <li>
                Built both <strong>admin panels</strong> and <strong>user panels</strong> across several different
                projects, each with different access levels and views.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "legacy-migration",
        num: "04",
        title: "Legacy Migration Work",
        content: (
          <>
            <p>Some of the company&apos;s existing projects were live and built in older technology, which needed to move forward:</p>
            <ul className="points">
              <li>
                Migrated a live <strong>PHP project to Vue</strong> — rebuilding an existing product in a modern
                framework rather than starting from a clean slate.
              </li>
              <li>
                Upgraded an existing <strong>Vue project to a newer Vue version</strong>, working through breaking
                changes along the way.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "mentorship",
        num: "05",
        title: "Growth & Mentorship",
        content: (
          <p>
            This is where I grew significantly as a frontend developer — I had genuinely good leads who guided and
            supported me closely rather than leaving me to figure things out alone. Coming in with just JavaScript
            and leaving with real, applied experience in both React and Vue set the direction for most of my career
            since.
          </p>
        ),
      },
    ],
    prev: { href: "/experience/neuramatics", label: "← Previous: Neuramatics" },
    next: { href: "/experience/coderatory", label: "Next: Coderatory →" },
  },

  coderatory: {
    slug: "coderatory",
    metaTitle: "Intern at Coderatory | Muhammad Maaz",
    metaDescription:
      "How Muhammad Maaz learned JavaScript fundamentals, built his first CRUD APIs with MongoDB, and started with React frontend basics during his first internship at Coderatory.",
    ogDescription: "First internship — JavaScript fundamentals, first CRUD APIs, MongoDB, and early React frontend work.",
    orgName: "Coderatory",
    jobTitle: "Intern",
    dateRange: "Feb 2022 — Apr 2022",
    typeTag: "Internship · First Role",
    title: "Intern",
    company: "Coderatory",
    lede: "My first internship, and where I learned the fundamentals of JavaScript. This was primarily a learning-focused role, not live production work — centered on research & development, where I built my first CRUD APIs with database integration and got my first hands-on exposure to frontend development.",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "React"],
    sections: [
      {
        id: "js-foundations",
        num: "01",
        title: "JavaScript Foundations",
        content: (
          <p>
            This was my very first internship, and the starting point for everything technical that followed — this
            is where I actually learned JavaScript fundamentals, not just theory but writing and running real code.
          </p>
        ),
      },
      {
        id: "first-apis",
        num: "02",
        title: "First CRUD APIs",
        content: (
          <p>
            Built my first CRUD APIs here, with database integration using <strong>MongoDB</strong> — the very first
            time I connected a backend service to a real database rather than working with static or mock data.
          </p>
        ),
      },
      {
        id: "frontend-start",
        num: "03",
        title: "Frontend Basics",
        content: (
          <p>
            Got my first exposure to frontend development with <strong>HTML, CSS, and React</strong> — early
            groundwork for what became my main focus in every role since.
          </p>
        ),
      },
      {
        id: "rnd",
        num: "04",
        title: "Research & Development Focus",
        content: (
          <>
            <p>
              Unlike later roles, I didn&apos;t work on a live, production project here — the internship was mostly
              research and development focused, giving me space to actually learn the fundamentals properly before
              being expected to ship production work.
            </p>
            <div className="callout">
              <strong>Why this matters:</strong> this is worth stating honestly rather than dressing it up — it was a
              learning-stage internship, and that&apos;s exactly what made the real-project experience at later
              roles possible.
            </div>
          </>
        ),
      },
    ],
    prev: { href: "/experience/dimensional-systems", label: "← Previous: Dimensional Sys" },
    next: { href: "/experience", label: "All experience →" },
  },
}
