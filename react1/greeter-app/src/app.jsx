
import Header from './sectioning/head.jsx';
import Main from './sectioning/main.jsx';
import Footer from './sectioning/foot.jsx';
import './app.css';

function App() {
  return (
    <div className="y-wrap" >
     <header class = 'head'> <Header /> </header>
     <main class = 'main'> <Main /> </main> 
      <footer id = 'foot' class = 'foot'> <Footer /> </footer>
    </div>
  );
}

export default App;
