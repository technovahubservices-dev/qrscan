import './App.css';

function App() {
  const imageUrl =
    'https://i.ibb.co/9mjXBFs9/Chat-GPT-Image-Jun-26-2026-02-57-13-PM.png';
  const qrPageUrl =
    'https://qrscan-lovat.vercel.app/test_saleam_biriyani/?view=image';
  const isImageView =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('view') === 'image';

  if (isImageView) {
    return (
      <main className="scan-page">
        <section className="scan-card image-view" aria-label="Image page">
          <div className="scan-copy">
            <p className="eyebrow">Image view</p>
            <h1>Here is the image</h1>
            <p className="lead">
              This page opens after scanning the QR code.
            </p>
          </div>

          <div className="image-frame">
            <img src={imageUrl} alt="Opened content" className="menu-image" />
          </div>

          <footer className="powered-by">
            <span>Powered by</span>
            <a href="https://www.technovahub.in">TechnovaHub</a>
          </footer>
        </section>
      </main>
    );
  }

  return (
    <main className="scan-page">
      <section className="scan-card" aria-label="QR landing page">
        <div className="scan-copy">
          <p className="eyebrow">Scan QR</p>
          <h1>Scan to open the image</h1>
          <p className="lead">
            Point your phone camera at the QR code below. It will open the
            image.
          </p>
        </div>

        <div className="qr-frame" aria-label="QR code">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=420x420&margin=16&data=${encodeURIComponent(
              qrPageUrl
            )}`}
            alt="QR code to open the page"
            className="qr-image"
          />
          <p className="qr-caption">Scan me to view the image</p>
        </div>

        <footer className="powered-by">
          <span>Powered by</span>
          <a href="https://www.technovahub.in">TechnovaHub</a>
        </footer>
      </section>
    </main>
  );
}

export default App;
