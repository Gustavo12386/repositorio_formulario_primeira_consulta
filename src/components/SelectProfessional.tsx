import styles from './SelectProfessional.module.scss'
import especialidades from "../services/especialidades.json";
import { useNavigate } from 'react-router-dom';

function SelectProfessional() { 

    const navigate = useNavigate();

    const handleSelectProfessional = (especialidade) => {

    navigate(
      `/primeira-consulta?especialityId=${especialidade.especializationId}
      &especializationName=${especialidade.especializationName}`
    );

  }; 

   return (   
    <>  
      <h1 className={styles.title}>Escolha o Profissional e a Especialidade que você deseja realizar o atendimento online</h1>   
      <section className={styles.cardscolumn}>        
         {especialidades.map((especialidade) => (  
            <div key={especialidade.especializationId}> 
               <div className={styles.professionalContainer} key={especialidade.especializationId}>
                  <div className={styles.professionalHeader}>
                     <img className={styles.image} src={especialidade.Image} alt="Imagem" />              
                  </div>            
                  <div className={styles.professionalCard}>
                     <h2 className={styles.subtitle}>{especialidade.professionalName}</h2>   
                     <div className={styles.professionalInfo}>
                        <p className={styles.text}>Especialidade: {especialidade.especializationName}</p>
                     </div> 
                     <div className={styles.price}>
                        <p className={styles.text}>Valor da Consulta: R${especialidade.especializationValue}</p>
                     </div> 
                     <div className={styles.professionalHours}>
                        <p className={styles.text}>Horários Disponíveis: 08:00 - 12:00, 13:00 - 17:00</p>
                     </div>             
                     <div className={styles.professionalDates}>     
                     <p className={styles.text}>Datas Disponíveis: 01/01/2023, 02/01/2023, 03/01/2023</p>          
                     </div>    
                     <div className={styles.divbutton}>
                        <button
                        className={styles.buttonchoice}
                        type='button'
                        onClick={() => handleSelectProfessional(especialidade)}
                        >
                        Escolher Especialista
                       </button>        
                     </div>            
                  </div>   
               </div>                   
           </div> 
          ))}
      </section>     
     </>
   )  
}    

export default SelectProfessional