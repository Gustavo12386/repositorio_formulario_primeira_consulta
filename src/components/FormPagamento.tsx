import styles from './FormPagamento.module.scss';
import NavigationMenu from './subcomponents/FormadePagamento'
import { useState} from "react";
import CartaodeCredito from './subcomponents/CartaodeCredito';
import PIX from './subcomponents/PIX';

const API_URL = "http://localhost:8080";

interface FormPagamentoProps {
  informationId: string;
}

function FormPagamento({
  informationId,
}: FormPagamentoProps){
  
   const [pageselected, handleChange] = useState(0);
   const [error, setError] = useState("");
   const [couponCode, setCouponCode] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
    const response = await fetch(`${API_URL}/payments/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        informationId,
        couponCode: couponCode.trim() || null,
        paymentMethod: "both",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Não foi possível realizar o pagamento."
      );
    }

    console.log("Checkout criado:", result);

    // Redireciona o paciente para o Checkout Pro.
    window.location.href = result.checkoutUrl;

  } catch (error) {
    setError(
      error instanceof Error
        ? error.message
        : "Erro inesperado ao processar pagamento."
    );

    console.error("Erro no pagamento:", error);
  }
  };

   return(
    <section className={styles.payment}>

     <header className={styles.paymentheader}>
       <h1 className={styles.titlepage}>Realize seu Pagamento</h1>
     </header>

     <form className={styles.paymentform} onSubmit={handleSubmit}>
       <div className={styles.field}>
        <label>Cupom de Desconto</label>
        <input
          type="text"
          id="cupom"
          name="cupom"
          placeholder="Tem um cupom de desconto? Digite aqui"  
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}        
        />
      </div>

    
      <fieldset className={styles.paymentoptionfield}>
        <legend>Selecione uma forma de pagamento?</legend>
         <NavigationMenu updateTopic={handleChange}/> 
          {(() => {
              if(pageselected == 0){
                return <CartaodeCredito/>; 
              }
              else if(pageselected == 1){
              return <PIX/>;
            }
          })()}     
      </fieldset>     
      <br></br>

      {error && (
        <p role="alert" className={styles.error}>
          {error}
        </p>
      )}

      <div className={styles.actionspayment}>
        <button type="submit" className={styles['btn-payment']}>
          Finalizar Agora
        </button>
        
        <button
          type="button"
          className={styles['btn-dificulty']}
          id="btn-dificulty"
        >
          Estou com dificuldades para realizar o pagamento
        </button>
      </div>
     </form>


    </section>
   );
}

export default FormPagamento