import './App.css';
import BaseBallAction from './Components/BaseBallAction';
import { Routes,Route } from 'react-router-dom';
//import Login from './Components/Login';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
       
       <Route path='/Login' element={<BaseBallAction className='App-header'/>} />
      <Route path='/' element={<Login/>} />
      </Routes>
    
      </header>
    </div>
  );
}

export default App;
