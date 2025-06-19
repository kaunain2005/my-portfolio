import React, { useEffect, useState } from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Loader from './components/Loader';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000); // Total duration of loader animation (adjust to match your GSAP timeline)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      {!showLoader && (
        <>
          <Hero />
          <About />
        </>
      )}
    </>
  );
}

export default App;
