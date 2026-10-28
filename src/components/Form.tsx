import styles from './Form.module.scss'

function Form() {
  return(
    <form className={styles.consultform} > 
    <div className={styles.field}>
        <label>Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome completo"          
          required
        />
      </div>

      <div className={styles.field}>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"         
          required
        />
      </div>

      <div className={styles.field}>
        <label>Data de nascimento:</label>
        <input
          type="date"
          id="nascimento"
          name="data_nascimento"
          required
        />
      </div>

      <div className={styles.field}>
        <label>Telefone ou WhatsApp:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          placeholder="(00) 00000 - 0000"        
          required
        />
      </div>
     
      <div className={styles.field}>
        <label>Agende sua data:</label>
        <select id="data_consulta" name="data_consulta" required>
          <option value="" selected disabled>
            Selecione uma data disponível:
          </option>
        </select>
      </div>

      <div className={styles.field}>
        <label>Agende seu horário:</label>
        <select id="horario" name="horario" required disabled>
          <option value="" selected disabled>
            Selecione um horário disponível:
          </option>
        </select>
      </div>
     
      <div className={styles.field}>
        <label>
          Qual é o principal motivo da busca por atendimento?
        </label>
        <textarea
          id="motivo"
          name="motivo"
          placeholder="Compartilhe o que te motivou a buscar por atendimento psicológico"          
          required
        ></textarea>
      </div>
      
      <fieldset className={styles.history}>
        <legend>
          Já realizou acompanhamento psicológico anteriormente?
        </legend>

        <label>
          <input
            type="radio"
            id="historico_sim"
            name="historico_psicologico"
            value="sim"
            required
          />
          Sim
        </label>

        <label>
          <input
            type="radio"
            id="historico_nao"
            name="historico_psicologico"
            value="nao"
            required
            checked
          />
          Não
        </label>
      </fieldset>

    
      <div className={styles.field}>
        <label>
          O que você espera alcançar com o acompanhamento?
        </label>
        <textarea
          id="expectativas"
          name="expectativas"
          placeholder="Descreva suas expectativas (opcional)"         
        ></textarea>
      </div>

      <div className={styles['consult-actions']}>
        <button type="submit" className={styles['btn-next']}>
          Avançar
        </button>
      </div>

    </form>
  );  
   
}

export default Form