
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">FAQ<span>.</span></div>

        <nav>
          <a href="#home">Home</a>
          <a href="#faq">FAQs</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <span className="tag">HELP CENTER</span>
          <h1>How can we help you?</h1>
          <p>
            Everything you need to know about our platform,
            all in one place.
          </p>
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <footer>
        <p>© 2026 FAQ Accordion. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
