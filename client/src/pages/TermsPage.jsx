import Seo from '../components/Seo.jsx';

export default function TermsPage() {
  return (
    <>
      <Seo title="Terms of Service" description="Terms of use for the 3DMAS website." />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="section-tag">Legal</p>
          <h1 className="section-h" style={{ marginBottom: 10 }}>Terms of Service</h1>
          <p style={{ color: 'var(--muted-2)', fontSize: 13 }}>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="legal-body">
            <p>These Terms of Service govern your use of 3dmas.in, operated by 3 Dimensional Measurement &amp;
              Solution ("3DMAS", "we", "us"). By using this website, you agree to these terms.</p>

            <h2>1. Website content</h2>
            <p>Content on this website — including text, images, project photography, videos and logos —
              is provided for general information about our capabilities and is owned by 3DMAS or used
              with permission, unless otherwise stated. You may not reproduce or redistribute this content
              without our written permission.</p>

            <h2>2. No professional advice</h2>
            <p>Information on this website is provided for general informational purposes about our
              services and does not constitute a binding quotation, specification, or engineering advice.
              Project scope, pricing and deliverables are agreed separately in writing for each engagement.</p>

            <h2>3. Accuracy of information</h2>
            <p>We take care to keep information on this site accurate and up to date, but we make no
              warranty that content is complete, current or error-free. Equipment lists, capabilities and
              project examples are illustrative of our work and are updated periodically.</p>

            <h2>4. Third-party links</h2>
            <p>Our website may link to third-party sites (e.g. equipment manufacturers, social media). We
              are not responsible for the content or practices of external sites.</p>

            <h2>5. Limitation of liability</h2>
            <p>To the extent permitted by law, 3DMAS is not liable for any indirect or consequential loss
              arising from use of this website. This does not affect any liability we cannot legally
              exclude.</p>

            <h2>6. Governing law</h2>
            <p>These terms are governed by the laws of India, and disputes will be subject to the
              jurisdiction of the courts of Pune, Maharashtra.</p>

            <h2>7. Contact us</h2>
            <p>Questions about these terms can be sent to
              {' '}<a href="mailto:info@3dmas.in">info@3dmas.in</a>.</p>

            <p className="legal-note">
              These terms are provided as general information and are not a substitute for legal advice.
              3DMAS recommends having them reviewed by qualified legal counsel before relying on them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
