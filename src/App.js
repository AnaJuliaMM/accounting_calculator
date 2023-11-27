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

  // Função que adiciona pagamento na Lista
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


  return (
    <div className="App">
      <section className='section record_wrapper'>
      <h1>Cadastro</h1>
      <RecordForm addRecord={addRecord}/>

      </section>
      <section className='section income_wrapper'>
      <h1>Receita</h1>
      {incomes.map(
        (record) => (
          <Record key={record.id} record={record} />
        )
      )}

      </section>
      <section className='section expense_wrapper'>
      <h1>Despesa</h1>
      {expenses.map(
        (record) => (
          <Record key={record.id} record={record} />
        )
      )}

      </section>
    </div>
  );
}

export default App;

