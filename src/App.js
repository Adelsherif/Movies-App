import './App.css';
import Home from './components/Home/home';
import Links from './components/links/links';
import Content from './components/content/content';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Home />
        <Links />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
