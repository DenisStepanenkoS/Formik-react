import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './App.css';
import './reset.css';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/SignUp' element={<SignUpForm/>}/>

        <Route path='/Login' element={<LoginForm/>}/>


        <Route path='/*' element={<SignUpForm/>}/>
        
      
      </Routes>
    </Router>
  );
}

export default App;
