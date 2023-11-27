import {React, useState} from 'react'
import './RecordForm.css'

export default function RecordForm({addRecord}) {
    //Variáveis que representam os dados de entrada
    const [name, setName] = useState('')
    const [value, setValue] = useState(0.00);
    const [type, setType] = useState('')
    const [payment, setPayment] = useState('')


    // Parâmetros: (e) - captura o evento
    const handleSubmission = (e) => {
        // Impede que o formulário seja enviado da maneira tradicional
        e.preventDefault();
  
        // Caso algum dos campos estejam vazios, não continua a função
        if(!name || !value || !type || !payment){
          window.alert('Há campos vazios!')
          return;
        } 

        // Adiciona um novo registro
        addRecord(name, value, type, payment)

        //Limpar os display
        setName('')
        setValue(0.00)
        setType('')
        setPayment('')

    }


  return (
    <form onSubmit={handleSubmission}>
        <span>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name"  value={name} onChange={(e) => setName(e.target.value)} />
        </span>
        <span>
            <label htmlFor="value">Valor:</label>
            <input type="number"  step="0.01" id="value" name="value" value={value} onChange={(e) => setValue(e.target.value)}/>
        </span>
        <span>
            <label htmlFor="type">Tipo:</label>
            <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Selecione a categoria</option>
                <option value="income">Receita</option>
                <option value="expense">Dispesa</option>
            </select>
        </span>
        <span>
            <label htmlFor="paymentMethod">Pagamento:</label>
            <select id="paymentMethod" name="paymentMethod" value={payment} onChange={(e) => setPayment(e.target.value)}>
                <option value="">Método de pagamento</option>
                <option value="creditCard">Cartão de Crédito</option>
                <option value="debitCard">Cartão de Débito</option>
                <option value="pix">Pix</option>
                <option value="cash">Dinheiro</option>
                <option value="check">Cheque</option>
            </select>
        </span>
        <span className='button_wrapper'><button type="submit">Adicionar</button></span>
    </form>
  )
}
