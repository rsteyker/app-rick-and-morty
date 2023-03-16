import './App.css'
import header from './assets/img/background-header.png';
import logo from './assets/img/logo.svg';

import RandomApp from './components/RandomApp';
function App() {

 
  return (
    <div className="App">
      <header>
        <div className='header-logo'>
            <img className='logo' src={logo}/>
        </div>
      
      <RandomApp/>
      </header>
    </div>
  )
}

export default App
