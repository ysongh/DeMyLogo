import { BrowserRouter as Router, Route  } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Tasks from './components/tasks/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/tasks" component={Tasks} />
      <Footer />
    </Router>
  );
}

export default App;
