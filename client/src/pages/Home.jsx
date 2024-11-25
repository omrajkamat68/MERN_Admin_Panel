import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Omraj Technical</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                qui voluptas quia laudantium illum dolores dolor nulla beatae
                quisquam nemo dolore saepe maiores, odit nisi assumenda
                inventore. Error ipsum fugit amet temporibus nemo unde velit
                doloremque sunt atque ad! Vero?
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              qui voluptas quia laudantium illum dolores dolor nulla beatae
              quisquam nemo dolore saepe maiores, odit nisi assumenda inventore.
              Error ipsum fugit amet temporibus nemo unde velit doloremque sunt
              atque ad! Vero?
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
