import React from 'react'
import './RecordForm.css'

export default function RecordForm() {



  return (
    <form>
        <span>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
        </span>
        <span>
            <label htmlFor="value">Valor:</label>
            <input type="number"  step="0.01" id="value" name="value" />
        </span>
        <span>
            <label htmlFor="type">Tipo:</label>
            <select id="type" name="type">
                <option value="income">Receita</option>
                <option value="expense">Dispesa</option>
            </select>
        </span>
        <span>
            <label for="paymentMethod">Pagamento:</label>
            <select id="paymentMethod" name="paymentMethod">
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
