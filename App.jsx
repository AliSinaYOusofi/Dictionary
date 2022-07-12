import Body from './components/Body';
import {
  BrowserRouter as Router , 
  Routes, 
  Route
} from 'react-router-dom';
import Dictionary from './components/History';
import "./index.css";


function App() {
  // should be like merriam webster
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/history' element={<Dictionary where="History" buttonText="Home"/>} />
        <Route path='/grammar' element={<Dictionary where="Grammar" buttonText="Home"/>} />
        <Route path='/originwords' element={<Dictionary where="Origins" buttonText="Home"/>} />
      </Routes>
    </Router>
  );
}

export default App;
