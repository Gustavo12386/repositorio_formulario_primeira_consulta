import styles from './FormDados.module.scss'
import { useState } from "react";
import especialidades from "../services/especialidades.json";

const API_URL = "http://localhost:8080";

function FormDados() {

  const [especialityId, setEspecialityId] = useState("");
  const [especialityName, setEspecialityName] = useState("");
  const [dates, setDates] = useState([]);
  const [hours, setHours] = useState([]);

  const [dateSelected, setDateSelected] = useState("");
  const [hourSelected, setHourSelected] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEspecialityChange = async (id, name) => {
  setEspecialityId(id);
  setEspecialityName(name);
    setDateSelected("");
    setHourSelected("");
    setDates([]);
    setHours([]);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/especialities/${id}/dates`
      );

      if (!response.ok) {
        throw new Error("Erro ao consultar datas.");
      }

      const data = await response.json();
      setDates(data);

    } catch (error) {
      setError(error.message);
    }
};

const handleDateChange = async (dateId) => {
  setDateSelected(dateId);
  setHourSelected("");
  setHours([]);

  try {
    const response = await fetch(
      `http://localhost:8080/especialities/${especialityId}/dates/${dateId}/hours`
    );

    if (!response.ok) {
      throw new Error("Não foi possível carregar os horários.");
    }

    const data = await response.json();
    setHours(data);
  } catch (error) {
    setError(error.message);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!especialityId || !dateSelected || !hourSelected) {
    setError("Selecione a especialidade, a data e o horário.");
    return;
  }

  // Localizar a data selecionada pelo UUID
  const selectedDate = dates.find(
    (date) => date.dateId === dateSelected
  );

  if (!selectedDate) {
    setError("A data selecionada não foi encontrada.");
    return;
  }

  const formData = new FormData(e.currentTarget);

  const payload = {
     especialityId,
     especialityName,
      name: formData.get("nome"),
      phone: formData.get("telefone"),
      email: formData.get("email"),
      date_birth: formData.get("data_nascimento"),
      date_scheduled: dates.find(
        (date) => date.dateId === dateSelected
      )?.currentDate,
      hour: hourSelected,
      question1: formData.get("motivo"),
      question2: formData.get("historico_psicologico"),
      question3: formData.get("expectativas")
  };

  try {
    setLoading(true);

    const response = await fetch(
      `${API_URL}/patient/first-consultation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Não foi possível realizar o cadastro."
      );
    }

    alert("Primeira consulta cadastrada com sucesso!");

    console.log("Cadastro realizado:", result);

  } catch (error) {
    setError(error.message);
    console.error("Erro no cadastro:", error);

  } finally {
    setLoading(false);
  }
};

  return(
    <>
    <main className={styles.consult}>
       <header className={styles.consultheader}>
        <h1>Realize sua Primeira Consulta</h1>
        <h2>Escolha sua especialidade</h2>
       </header>
    
          <fieldset className={styles.especialities}>
             <legend className={styles['sr-only']}>
              Selecione a especialidade
             </legend>

          {especialidades.map((especialidade) => (   
           <label
            className={styles.especiality}
            key={especialidade.especializationId}
          >

            <input
              type="radio"
              name="especialidade"
              value={especialidade.especializationId}
              checked={
                especialityId === especialidade.especializationId
              }
              onChange={() =>
                handleEspecialityChange(
                  especialidade.especializationId,
                  especialidade.especializationName
                )
              }
              required
            />

            <span className={styles["especiality__info"]}>

              <span className={styles["especialidade__nome"]}>
                {especialidade.especializationName}
              </span>
              <span className={styles['especialidade__valor']}>
                {especialidade.especializationValue.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </span>

          </label>
         ))}
        </fieldset>
        
     </main>
    <form className={styles.consultform} onSubmit={handleSubmit}>   
        <input
      type="hidden"
      name="especialityId"
      value={especialityId}
    />

    <input
      type="hidden"
      name="especiality_name"
      value={especialityName}
    /> 
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
        <label>Telefone (WhatsApp):</label>
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
          <select
            id="data_consulta"
            name="data_consulta"
            value={dateSelected}
            onChange={(e) => handleDateChange(e.target.value)}
            required
            disabled={!especialityId || dates.length === 0}
          >
          <option value="" selected disabled>
            Selecione uma data disponível:
          </option>
             {dates.map((date) => (
            <option key={date.dateId} value={date.dateId}>
              {date.currentDate}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label>Agende seu horário:</label>
           <select
            id="horario"
            name="horario"
            value={hourSelected}
            onChange={(e) => setHourSelected(e.target.value)}
            required
            disabled={!dateSelected || hours.length === 0}
          >
          <option value="" selected disabled>
            Selecione um horário disponível:
          </option>
              {hours.map((hour) => (
            <option key={hour.hourId} value={hour.currentHour}>
              {hour.currentHour}
            </option>
          ))}
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

      {error && (
        <p role="alert" className={styles.error}>
          {error}
        </p>
      )}

      <div className={styles['consult-actions']}>
        <button type="submit" className={styles['btn-next']} disabled={loading}>
           {loading ? "Enviando..." : "Avançar"}
        </button>
      </div>

    </form>
    </>
  );  
   
}

export default FormDados