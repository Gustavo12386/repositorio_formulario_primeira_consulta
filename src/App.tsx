import './App.scss'
import FormDados from './components/FormDados'
import logo from './assets/logo Clinica DM.png'
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
        <Route path='/primeira-consulta' element={<FormDados/>}/>
      </Routes>
     </Router>    
    </>
  )
}

export default App
