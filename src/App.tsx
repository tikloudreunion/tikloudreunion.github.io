import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Education from './components/Education';
import Security from './components/Security';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Education />
        <Security />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;