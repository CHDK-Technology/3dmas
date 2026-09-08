import Seo from '../components/Seo.jsx';

export default function CookiePolicyPage() {
  return (
    <>
      <Seo title="Cookie Policy" description="How 3DMAS uses cookies on this website." />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="section-tag">Legal</p>
          <h1 className="section-h" style={{ marginBottom: 10 }}>Cookie Policy</h1>
          <p style={{ color: 'var(--muted-2)', fontSize: 13 }}>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="legal-body">
            <p>This Cookie Policy explains how 3 Dimensional Measurement &amp; Solution ("3DMAS") uses
              cookies and similar technologies on 3dmas.in.</p>

            <h2>1. What are cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help the
              site function properly, remember your preferences, and help us understand how the site is
              used.</p>

            <h2>2. Types of cookies we use</h2>
            <p><strong>Strictly necessary cookies</strong> — required for the website to function (e.g.
              remembering your cookie preference). These cannot be switched off.</p>
            <p><strong>Analytics cookies</strong> — help us understand how visitors use the site (which
              pages are viewed, how long, from which region) so we can improve it. These are only set with
              your consent.</p>
            <p>We do not use advertising or third-party marketing cookies on this website.</p>

            <h2>3. Managing cookies</h2>
            <p>When you first visit 3dmas.in, you can accept or decline non-essential cookies via the
              banner shown at the bottom of the page. You can also control or delete cookies at any time
              through your browser settings — check your browser's help pages for instructions, as steps
              vary by browser.</p>

            <h2>4. Changes to this policy</h2>
            <p>We may update this policy from time to time to reflect changes to the cookies we use. Please
              check back periodically.</p>

            <h2>5. Contact us</h2>
            <p>Questions about this policy can be sent to
              {' '}<a href="mailto:info@3dmas.in">info@3dmas.in</a>.</p>

            <p className="legal-note">
              This policy is provided as general information and is not a substitute for legal advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
