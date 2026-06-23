import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      <Seo title="Page not found" description="The page you were looking for could not be found." path="/404" />
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 80 }}>
          <p className="section-tag">404</p>
          <h2 className="section-h">This page could not be found.</h2>
          <p className="section-sub" style={{ margin: '0 auto 28px' }}>
            The link may be broken or the page may have moved. Let&rsquo;s get you back on track.
          </p>
          <Link to="/" className="btn-primary">Back to home</Link>
        </div>
      </section>
    </main>
  );
}
