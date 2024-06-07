import './App.css';
import { Route, BrowserRouter as Router, Routes }  from 'react-router-dom';
import  StaticHomebar  from './components/Head/StaticHomebar';
import  SubHeader  from './components/Head/SubHeader';
import  Footer  from './components/Foot/Footer';


function App() {
  return (
    <Router>
      <StaticHomebar />
      <SubHeader />
      <Footer />
      <Routes>
        <Route path = "/" element />
      </Routes>
    </Router>
  );
}

export default App;
