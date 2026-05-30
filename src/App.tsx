import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hours from './components/Hours';
import Pricing from './components/Pricing';
import Technology from './components/Technology';
import Location from './components/Location';
import Imprint from './components/Imprint';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Hours />
        <Pricing />
        <Technology />
        <Location />
        <Imprint />
      </main>
      <Footer />
    </div>
  );
}

export default App;
