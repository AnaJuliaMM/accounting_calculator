import './App.css';
import Record from './components/record/Record';
import RecordForm from './components/recordForm/RecordForm';
import {React, useState} from 'react'



function App() {
  // Lista de receitas
  const [incomes, setIncomes] = useState([])
  // Lista de despesas
  const [expenses, setExpenses] = useState([])
  // Variável que armazena o id das tarefas
  const [id, setId] = useState(0);
  // Variável do total de receitas
  const [incomeTotal, setIncomeTotal] = useState(0);
  // Variável do total de despesas
  const [expenseTotal, setExpenseTotal] = useState(0);

  // Função que adiciona registro na Lista
  const addRecord = (name, value, type, payment)=> {

    if (type === 'income'){
      //Adicona na lista de receitas
      const newIncomes = [...incomes, {
        id: id,
        name: name,
        value: value,
        type: type,
        payment: payment
      }]

      // Incrementar a lista de id 
      setId(id + 1)
      //Atualiza a lista oficial com o novo registro
      setIncomes(newIncomes)
      console.log(incomes);
    

    }else if(type === 'expense'){
      //Adicona na lista de despesas
      const newExpenses = [...expenses, {
        id: id,
        name: name,
        value: value,
        type: type,
        payment: payment
      }]

      // Incrementar a lista de id 
      setId(id + 1)
      //Atualiza a lista oficial com o novo registro
      setExpenses(newExpenses)
      console.log(expenses);
    }
    
    
  }

  // Função que remove um registro na Lista
  const removeRecord = (id, type) =>{
    if (type === 'income'){
      //Clone da lista
      const newIncomes = [...incomes]
      // Retira o item a ser deletado
      const filterIncome = newIncomes.filter( income => income.id !== id? income : null)
      setIncomes(filterIncome)
    }else if(type === 'expense'){
      //Clone da lista
      const newExpenses = [...expenses]
      // Retira o item a ser deletado
      const filterExpenses = newExpenses.filter( income => income.id !== id? income : null)
      setExpenses(filterExpenses)
    }
  }


  

  return (
    <div className="App">
      <section className='section record_wrapper'>
      <h1>Cadastro</h1>
      <RecordForm addRecord={addRecord}/>

      </section>
      <section className='section income_wrapper'>
      <h1>Receita</h1>
      <p>Total: {incomes.reduce((accumulator, record)=> accumulator + Number(record.value), 0).toFixed(2)} </p>

      {incomes.map(
        (record) => (
          <Record key={record.id} record={record} removeRecord={removeRecord} />
        )
      )}

      </section>
      <section className='section expense_wrapper'>
      <h1>Despesa</h1>
      <p>Total: {expenses.reduce((accumulator, record)=> accumulator + record, 0)} </p>
      {expenses.map(
        (record) => (
          <Record key={record.id} record={record} removeRecord={removeRecord} />
        )
      )}

      </section>
    </div>
  );
}

export default App;

