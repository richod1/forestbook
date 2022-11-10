
import './App.css';
import Navbar from './components/Navbar';
import Works from './components/Works';
import Herosec from './components/Herosec';
import Books from './components/Books';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Herosec/>
      
      <Works/>
      <Books/>
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;
