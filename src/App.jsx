import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './component/Header/SignUp/SignUpForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router lg= {12} sm={12} xs={12}>
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route exact path='/signup' element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
