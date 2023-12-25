import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Heading firstName = "Any name other than Bob" />
      <Heading firstName = "Jack" />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;
