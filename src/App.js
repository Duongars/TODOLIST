import logo from './logo.svg';
import './App.css';
import { NavLink, Routes,Route } from 'react-router-dom';
import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';
import About from './Component/About';
import Home from './Component/Home';
import Todolist from './Todolist/Todolist';

function App() {
  return (
//     <div className="wrapper d-flex align-items-stretch">
//       <nav id='sidebar'>
//       </nav>
// {/* content */}
// <div id='content' className='p-4 p-md-5'>
//   <ul className='list-unstyled components mb-5'>
//     <li>
//     <NavLink to='/' className='dropdown-toggle'>Home</NavLink>
//     </li>
// <li>
//   <NavLink to='/portfolio'>Porofolio</NavLink>
// </li>
// <li>
//   <NavLink to='/about'>about</NavLink>
// </li>
// <li>
//   <NavLink to='/contact'>contact</NavLink>
// </li>

//   </ul>
//       <nav className='navbar navbar-expand-lg navbar-light bg-light'>
//         </nav>
// <nav className='navbar navbar-expand-lg navbar-light bg-light'></nav>
// <Routes>
// <Route path='/' element={<Home/>} />
// <Route path='/about' element={<About/>} />
// <Route path='/contact' element={<Contact/>} />
// <Route path='/portfolio' element={<Portfolio/>} />
// </Routes>
//       </div>
//     </div>


<>
<Todolist/>
</>
    
  );
}

export default App;
