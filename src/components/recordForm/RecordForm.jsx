import {React, useState} from 'react'
import './RecordForm.css'

export default function RecordForm({addRecord}) {
    //Variáveis que representam os dados de entrada
    const [name, setName] = useState('')
    const [value, setValue] = useState();
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
        <h2>Registro</h2>
        <div className='input_div'>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name"  value={name} onChange={(e) => setName(e.target.value)} />
        </div>
            
        <div className='input_div'>
            <label htmlFor="value">Valor:</label>
            <input type="number"  step="0.01" id="value" name="value" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
        <div className='input_div'>
            <label htmlFor="type">Tipo:</label>
            <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Selecione a categoria</option>
                <option value="income">Receita</option>
                <option value="expense">Despesa</option>
            </select>
        </div>
        <div className='input_div'>
            <label htmlFor="paymentMethod">Pagamento:</label>
            <select id="paymentMethod" name="paymentMethod" value={payment} onChange={(e) => setPayment(e.target.value)}>
                <option value="">Método de pagamento</option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="Cartão de Débito">Cartão de Débito</option>
                <option value="Pix">Pix</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cheque">Cheque</option>
            </select>
        </div>
        <span className='button_wrapper'><button type="submit">Adicionar</button></span>
    </form>
  )
}
