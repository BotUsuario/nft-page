import './App.css';
import Collection from './components/Collection';
import Community from './components/Community';
import Creators from './components/Creators';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Steps />
      <Creators />
      <Community />
      <Footer />
    </>
  );
}

export default App;
