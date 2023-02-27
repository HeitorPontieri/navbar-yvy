import logo from './logo.svg';
import { Navbar } from './Components/nav';
import { ButtonCart } from './Components/button-cart';
import './App.css';
import { SignHeader } from './Components/header/SignHeader';
import { MainCard } from './Components/MainCard';


function App() {
  return (
    <>
      <SignHeader />
      <div className="app">
        <div className='navbar-container'>
          <Navbar />
        </div>

        <MainCard
          id={1}
          name='Frutas'
          img='https://cdn-icons-png.flaticon.com/512/5039/5039041.png'/>
      </div>
    </>
  );
}

export default App;
