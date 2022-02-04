
import Header from './sectioning/head.jsx';
import Main from './sectioning/main.jsx';
import Footer from './sectioning/foot.jsx';
import Contact from './components/contacts.jsx';
import './app.css';
import { faker } from '@faker-js/faker';

function App() {
  return (
    <body>
    <div className="y-wrap" >
     <header class = 'head'> <Header /> </header>
     <Contact />
     <p>{faker.name.findname()}</p>
     <main class = 'main'> <Main /> </main> 
      <footer id = 'foot' class = 'foot'> <Footer /> </footer>
    </div>
    </body>
  );
}

export default App;
