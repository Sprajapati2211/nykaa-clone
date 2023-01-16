import './App.css';
import Nav from './components/Nav'
import Nav1 from './components/Nav1'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';
function App() {
  return (
    <div className="App">
     <Nav/> 
    <Nav1/> 
    <Footer/>
    <Footer1/>
    <Footer2/>
    </div>
  );
}

export default App;
