import './App.css';

function App() {
  const basePath =
    typeof window !== 'undefined'
      ? window.location.pathname.endsWith('/')
        ? window.location.pathname
        : `${window.location.pathname}/`
      : '/';
  const isMenuView =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('view') === 'menu';
  const menuUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${basePath}?view=menu`
      : '';
  const menuImageUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${basePath}menu-image.png`
      : '';

  if (isMenuView) {
    return (
      <main className="scan-page">
        <section className="scan-card menu-view" aria-label="Restaurant menu">
          <div className="scan-copy">
            <p className="eyebrow">Menu view</p>
            <h1>Restaurant menu</h1>
            <p className="lead">
              This is the page your QR code opens after scanning.
            </p>
          </div>

          <div className="menu-frame">
            <img
              src={menuImageUrl}
              alt="Restaurant menu"
              className="menu-image"
            />
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
      <section className="scan-card" aria-label="QR menu landing page">
        <div className="scan-copy">
          <p className="eyebrow">Scan menu QR</p>
          <h1>Scan to open the menu</h1>
          <p className="lead">
            Point your phone camera at the QR code below. It will open the
            restaurant menu image instantly.
          </p>
        </div>

        <div className="qr-frame" aria-label="QR code">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=420x420&margin=16&data=${encodeURIComponent(
              menuUrl
            )}`}
            alt="QR code that opens the restaurant menu"
            className="qr-image"
          />
          <p className="qr-caption">Scan me to view the menu</p>
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
