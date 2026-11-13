import './App.scss'
import FormDados from './components/FormDados'
import logo from './assets/logo Clinica DM.png'
import FormPagamento from './components/FormPagamento'
import SelectProfessional from './components/SelectProfessional'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <>
    <div className='divlogo'>
       <img src={logo} className='logo' alt='logo'/>
    </div>      
     <Router>
      <Routes>
        <Route path='/' element={<SelectProfessional/>}/>
        <Route path='/formdados' element={<><FormDados/><FormPagamento/></> }/>
      </Routes>
     </Router>    
    </>
  )
}

export default App
