import React from 'react'
import Navbar from './components/Navbar';
import Heros from './components/Hero';
import Featured from './components/Featured'
import Sign from './components/Sign';
import Footers from './components/Footer';
function App() {
  return (
    <div>
    <Navbar />
    <Heros />
    <Featured />
    <Sign />
    <Footers />
    </div>
  );
}

export default App;
