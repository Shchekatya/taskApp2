import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Tasks from './pages/Tasks';
import Header from './components/header/Header';
import NotFound from './pages/NotFound';
import SingleTask from './pages/SingleTask';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Header />} >          
          <Route path='/' element={<Tasks />} />
          <Route path='/about' element={<About />} />
          <Route path='/task/:id' element={<SingleTask />} />        
          <Route path='*' element={<NotFound />} />
        </Route>        
      </Routes>
   
  );
}

export default App;
