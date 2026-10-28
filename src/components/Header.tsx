import styles from './Header.module.scss';

function Header() {
 
  return (
    <>
     <main className={styles.consult}>
       <header className={styles.consultheader}>
        <h1>Realize sua Primeira Consulta</h1>
        <h2>Escolha sua especialidade</h2>
       </header>
    
          <fieldset className={styles.especialities}>
             <legend className={styles['sr-only']}>Selecione a especialidade</legend>
              <label className={styles.especiality}>
          <input
            type="radio"
            id="neuropsicologo"
            name="especialidade"
            value="neuropsicologo"
            data-valor="141.41"
            checked
            required
          />

          <span className={styles['especiality__info']}>
            <span className={styles['especialidade__nome']}>
              Consulta com Neuropsicólogo
            </span>
            <span className={styles['especialidade__valor']}>
              Valor: 141,41 BRL
            </span>
          </span>
        </label>

        <label className={styles.especiality}>
          <input
            type="radio"
            id="psicologo"
            name="especialidade"
            value="psicologo_clinico"
            data-valor="150.65"
            required
          />

          <span className={styles['especiality__info']}>
            <span className={styles['especialidade__nome']}>
              Consulta com Psicólogo Clínico
            </span>
            <span className={styles['especialidade__valor']}>
              Valor: 150,65 BRL
            </span>
          </span>
        </label>
          </fieldset>
        
     </main>
    </>
  )
}

export default Header