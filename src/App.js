import { BrowserRouter as Router, Route  } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/tasks" component={Tasks} />
    </Router>
  );
}

export default App;
