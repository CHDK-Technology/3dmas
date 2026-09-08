import Seo from '../components/Seo.jsx';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo title="Privacy Policy" description="How 3DMAS collects, uses and protects your information." />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="section-tag">Legal</p>
          <h1 className="section-h" style={{ marginBottom: 10 }}>Privacy Policy</h1>
          <p style={{ color: 'var(--muted-2)', fontSize: 13 }}>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="legal-body">
            <p>
              3 Dimensional Measurement &amp; Solution ("3DMAS", "we", "us", "our") respects your privacy.
              This policy explains what information we collect through 3dmas.in, why we collect it, and
              the choices you have.
            </p>

            <h2>1. Information we collect</h2>
            <p><strong>Information you give us directly</strong> — when you submit an enquiry through our
              contact form, request a quotation, or email us, we collect your name, company, email address,
              phone number and the project details you share.</p>
            <p><strong>Information collected automatically</strong> — like most websites, our server and
              analytics tools may automatically log your IP address, browser type, device type, pages
              visited and time spent on the site, via cookies and similar technologies (see our
              {' '}<a href="/cookie-policy">Cookie Policy</a> for details).</p>

            <h2>2. How we use your information</h2>
            <ul>
              <li>To respond to enquiries and prepare quotations</li>
              <li>To deliver the services you request</li>
              <li>To improve our website and understand how visitors use it</li>
              <li>To send you information you've asked for about our capabilities</li>
              <li>To meet legal, accounting and regulatory requirements</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>3. Sharing your information</h2>
            <p>We may share information with service providers who help us run this website (e.g. hosting
              and analytics providers) under confidentiality obligations, or where required by law. We do
              not share your project details with competitors or unrelated third parties.</p>

            <h2>4. Data retention</h2>
            <p>We retain enquiry and project-related information for as long as needed to respond to your
              request, deliver services, and meet our legal and accounting obligations.</p>

            <h2>5. Your rights</h2>
            <p>You can ask us to access, correct or delete the personal information we hold about you, or
              ask us to stop using it for marketing, by writing to
              {' '}<a href="mailto:info@3dmas.in">info@3dmas.in</a>. We will respond within a reasonable time.</p>

            <h2>6. Security</h2>
            <p>We take reasonable technical and organisational measures to protect the information you
              share with us. No method of transmission over the internet is completely secure, and we
              cannot guarantee absolute security.</p>

            <h2>7. Children's privacy</h2>
            <p>Our website and services are directed at businesses and professionals, not children. We do
              not knowingly collect information from children.</p>

            <h2>8. Changes to this policy</h2>
            <p>We may update this policy from time to time. Material changes will be reflected by updating
              the "last updated" date above.</p>

            <h2>9. Contact us</h2>
            <p>Questions about this policy can be sent to
              {' '}<a href="mailto:info@3dmas.in">info@3dmas.in</a> or our registered office at
              Balewadi, Pune 411045, India.</p>

            <p className="legal-note">
              This policy is provided as general information and is not a substitute for legal advice.
              3DMAS recommends having it reviewed by qualified legal counsel to ensure it fully matches
              your data practices and applicable law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
