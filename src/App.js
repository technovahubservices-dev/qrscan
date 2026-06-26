import { useEffect } from 'react';
import './App.css';

function App() {
  const targetUrl = 'https://i.ibb.co/9mjXBFs9/Chat-GPT-Image-Jun-26-2026-02-57-13-PM.png';

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(targetUrl);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="scan-page">
      <section className="scan-card" aria-label="QR redirect page">
        <div className="scan-copy">
          <p className="eyebrow">Scan QR</p>
          <h1>Opening the image</h1>
          <p className="lead">
            You will be redirected to the image link shortly.
          </p>
        </div>

        <a
          className="primary-link"
          href={targetUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open image now
        </a>

        <footer className="powered-by">
          <span>Powered by</span>
          <a href="https://www.technovahub.in">TechnovaHub</a>
        </footer>
      </section>
    </main>
  );
}

export default App;
