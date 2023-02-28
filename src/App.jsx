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
          img='https://cdn.pixabay.com/photo/2016/02/23/17/36/mango-1218147_960_720.png'/>
      </div>
    
    </>
  );
}

export default App;
