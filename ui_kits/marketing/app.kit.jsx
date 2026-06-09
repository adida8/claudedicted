/* Marketing kit — app shell, composes the page. */
function App() {
  return (
    <div id="top">
      <Nav />
      <HeroSticker />
      <ValueSection />
      <BuildsSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
Object.assign(window, { App });
