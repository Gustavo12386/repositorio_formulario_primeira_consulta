import styles from './SelectProfessional.module.scss'

function SelectProfessional() {
   return (
      <div>
         <h1 className={styles.title}>Escolha o Profissional e a Especialidade que você deseja realizar o atendimento online</h1>
         <h2 className={styles.subtitle}>Nome do Profissional</h2>
         <p className={styles.text}>Especialidade: Psicologia</p>
         <p className={styles.text}>Horários Disponíveis: 08:00 - 12:00, 13:00 - 17:00</p>
         <p className={styles.text}>Datas Disponíveis: 01/01/2023, 02/01/2023, 03/01/2023</p>
         <button className={styles.button}>Escolher Especialista</button>
      </div>
   )
}    

export default SelectProfessional