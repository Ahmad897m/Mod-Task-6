import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
