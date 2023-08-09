import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './component/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
  <Routes>
      <Route exact path='/' element={<Header />} />
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
   </Routes>
  </Router>
    
  )
}

export default App
