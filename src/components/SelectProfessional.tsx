import styles from './SelectProfessional.module.scss'
import especialidades from "../services/especialidades.json";
import { Fragment } from "react";

function SelectProfessional() {   
   return (      
      <div>
         <h1 className={styles.title}>Escolha o Profissional e a Especialidade que você deseja realizar o atendimento online</h1>
           {especialidades.map((especialidade) => (  
            <Fragment key={especialidade.especializationId}> 
               <div className={styles.professionalContainer} key={especialidade.especializationId}>
                  <div className={styles.professionalHeader}>
                     <img className={styles.image} src={especialidade.Image} alt="Imagem" />              
                  </div>            
                  <div className={styles.professionalCard}>
                     <h2 className={styles.subtitle}>{especialidade.professionalName}</h2>   
                     <div className={styles.professionalInfo}>
                        <p className={styles.text}>{especialidade.especializationName}</p>
                     </div> 
                     <div className={styles.professionalHours}>
                        <p className={styles.text}>Horários Disponíveis: 08:00 - 12:00, 13:00 - 17:00</p>
                     </div>             
                     <div className={styles.professionalDates}>     
                     <p className={styles.text}>Datas Disponíveis: 01/01/2023, 02/01/2023, 03/01/2023</p>          
                     </div>             
                  </div>   
               </div>               
               <button className={styles.buttonchoice}>Escolher Especialista</button>
            
           </Fragment> 
          ))}
    </div>    
   )  
}    

export default SelectProfessional