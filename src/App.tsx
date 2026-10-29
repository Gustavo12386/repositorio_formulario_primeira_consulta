import './App.scss'
import Header from './components/Header'
import FormDados from './components/FormDados'
import logo from './assets/logo Clinica DM.png'
import FormPagamento from './components/FormPagamento'

function App() {
 
  return (
    <>
    <div className='divlogo'>
       <img src={logo} className='logo' alt='logo'/>
    </div>    
     <Header/>
     <FormDados/>
     <FormPagamento/>
    </>
  )
}

export default App
