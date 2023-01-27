import './style.css';
import Home from './Home';
import View from './View';
import Edit from './Edit';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/view' element={<View />} />
        <Route path='/Edit/:id' element={<Edit/>}/>
      </Routes>
    </>
  );
}

export default App;
