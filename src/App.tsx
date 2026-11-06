import './App.scss'
import FormDados from './components/FormDados'
import logo from './assets/logo Clinica DM.png'
import FormPagamento from './components/FormPagamento'

function App() {
 
  return (
    <>
    <div className='divlogo'>
       <img src={logo} className='logo' alt='logo'/>
    </div>      
     <FormDados/>
     <FormPagamento/>
    </>
  )
}

export default App
