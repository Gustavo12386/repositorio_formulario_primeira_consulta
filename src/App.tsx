import './App.scss'
import Header from './components/Header'
import Form from './components/Form'
import logo from './assets/logo Clinica DM.png'

function App() {
 
  return (
    <>
    <div className='divlogo'>
       <img src={logo} className='logo' alt='logo'/>
    </div>    
     <Header/>
     <Form/>
    </>
  )
}

export default App
