import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Tasks from './components/Tasks';
import Header from './components/Header';
import NotFound from './components/NotFound';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Header />} >
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Tasks />} />
          <Route path='*' element={<NotFound />} />
        </Route>        
      </Routes>
   
  );
}

export default App;
