/*
 * Monochrome Systems Editorial: Swiss-inspired hierarchy, black rules, compact mono labels,
 * and spacious asymmetric composition. This page carries the conversion path from diagnosis to booking.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleDot,
} from "lucide-react";

const workflowStages = [
  {
    number: "01",
    title: "Discovery",
    copy: "Assess the manual workflows, tools, and handoffs that quietly tax your team every week.",
    detail: "Find the drag",
  },
  {
    number: "02",
    title: "Analysis",
    copy: "Identify high-ROI automation opportunities, brittle dependencies, and system bottlenecks.",
    detail: "Name the leverage",
  },
  {
    number: "03",
    title: "Roadmap",
    copy: "Receive a clear integration sequence for deploying AI in a way your business can actually sustain.",
    detail: "Make the next move",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__orbit brand-mark__orbit--one" />
      <span className="brand-mark__orbit brand-mark__orbit--two" />
      <span className="brand-mark__core" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header container" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Automated Business Solutions home">
          <BrandMark />
          <span>Automated Business Solutions</span>
        </a>
        <a className="button button--dark button--header" href="#booking">
          Book Pre-Audit Call
          <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="hero__frame container">
          <div className="hero__content">
            <div className="eyebrow eyebrow--hero">
              <span className="eyebrow__rule" />
              <span>AI AUTOMATION AUDIT / 01</span>
            </div>
            <h1 id="hero-heading">
              Stop wasting hours on manual work.
              <span>Scale with AI.</span>
            </h1>
            <p className="hero__lede">
              A focused systems review to uncover operational bottlenecks, find high-leverage automation opportunities, and give you a sequence for what to build next.
            </p>
            <div className="hero__actions">
              <a className="button button--dark" href="#booking">
                Book Pre-Audit Call
                <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a className="text-link" href="#process">
                See how it works
                <ArrowDownRight size={16} strokeWidth={1.7} aria-hidden="true" />
              </a>
            </div>
            <div className="hero__notes" aria-label="Audit details">
              <span>
                <CircleDot size={13} strokeWidth={1.7} aria-hidden="true" />
                For ambitious business owners
              </span>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-label">SYSTEMS MAP / LIVE VIEW</div>
            <div className="hero__visual-image" />
            <div className="system-motif" aria-hidden="true">
              <span className="system-motif__node system-motif__node--one" />
              <span className="system-motif__node system-motif__node--two" />
              <span className="system-motif__node system-motif__node--three" />
              <span className="system-motif__line system-motif__line--one" />
              <span className="system-motif__line system-motif__line--two" />
              <span className="system-motif__line system-motif__line--three" />
            </div>
            <div className="hero__visual-caption">
              <span>01—03</span>
              <span>From repeated work to repeatable leverage.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Audit promise">
        <div className="container signal-strip__inner">
          <p>
            Your next operating advantage is already inside the work you repeat.
          </p>
          <span className="signal-strip__meta">NO HYPE / JUST SYSTEMS</span>
        </div>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-heading">
        <div className="container process-section__layout">
          <div className="section-index">
            <span>02</span>
            <span className="section-index__line" />
            <span>THE AUDIT</span>
          </div>
          <div className="process-section__body">
            <div className="section-intro">
              <p className="section-kicker">A clearer picture of your next system</p>
              <h2 id="process-heading">Turn operational friction into a buildable plan.</h2>
              <p>
                The audit is designed to replace vague AI ambition with a grounded view of where automation will actually compound. We look at the work as it exists today, then map the shortest path to a smarter operating system.
              </p>
            </div>

            <div className="workflow-visual" aria-hidden="true">
              <div className="workflow-visual__image" />
              <span className="workflow-visual__label">WORKFLOW / INPUT → LEVERAGE</span>
            </div>

            <div className="workflow-grid">
              {workflowStages.map((stage) => {
                return (
                  <article className="workflow-card" key={stage.number}>
                    <div className="workflow-card__topline">
                      <span className="workflow-card__number">{stage.number}</span>
                      <span className="workflow-card__symbol"><BrandMark /></span>
                    </div>
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                    <span className="workflow-card__detail">
                      <Check size={14} strokeWidth={2} aria-hidden="true" />
                      {stage.detail}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking" aria-labelledby="booking-heading">
        <div className="container">
          <div className="booking-card">
            <div className="booking-card__header">
              <div className="section-index section-index--inverse">
                <span>03</span>
                <span className="section-index__line" />
                <span>MAKE THE MOVE</span>
              </div>
              <span className="booking-card__status">
                <span className="status-dot" />
                SCHEDULING OPEN
              </span>
            </div>
            <div className="booking-card__content">
              <div className="booking-card__copy">
                <p className="section-kicker section-kicker--light">Bring the bottleneck. Leave with a sequence.</p>
                <h2 id="booking-heading">Book your AI Automation Audit.</h2>
                <p>
                  Start with a short pre-audit call. We will understand the shape of your operation, confirm fit, and set up the deeper audit around the work that matters most.
                </p>
              </div>

              <div className="booking-embed" role="region" aria-label="Calendly scheduling">
                <div className="booking-embed__topline">
                  <span>CALENDLY / LIVE BOOKING</span>
                  <span>15 MIN</span>
                </div>
                  <div className="booking-embed__body">
                  <div className="booking-embed__mark"><BrandMark /></div>
                  <strong>Choose a time that works for you.</strong>
                  <p>Schedule your pre-audit call directly through Calendly.</p>
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/jerryolamoyegun1/30min?hide_gdpr_banner=1"
                    aria-label="Book an AI Automation Audit pre-audit call"
                  />
                  <a className="button button--light" href="https://calendly.com/jerryolamoyegun1/30min" target="_blank" rel="noreferrer">
                    Open in Calendly
                    <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <a className="wordmark wordmark--footer" href="#top">
            <BrandMark />
            <span>Automated Business Solutions</span>
          </a>
          <p>© 2026 Automated Business Solutions. Built for the next version of your operation.</p>
          <a className="footer-email" href="mailto:jerryolamoyegun1@gmail.com">jerryolamoyegun1@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}
