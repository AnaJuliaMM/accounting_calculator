import './App.css';
import Record from './components/record/Record';
import RecordForm from './components/recordForm/RecordForm';
import {React, useState, useEffect} from 'react'



function App() {
  // Lista de receitas
  const [incomes, setIncomes] = useState([])
  // Lista de despesas
  const [expenses, setExpenses] = useState([])
  // Variável que armazena o id das tarefas
  const [id, setId] = useState(0);

  useEffect(() => {
    // Recupera os dados armazenados
    const storagedIncomes = localStorage.getItem('incomes') 
    const storagedExpenses = localStorage.getItem('expenses') 

    // Verifica se há conteúdo no localStorage
  if (storagedIncomes) {
    // Atualiza a lista de tarefas
    setIncomes(JSON.parse(storagedIncomes));
  }

  if (storagedExpenses) {
    // Atualiza a lista de tarefas
    setExpenses(JSON.parse(storagedExpenses));
  }
  }, [])

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
      //Atualiza o localStorage
      saveLocalStorage('incomes', newIncomes)
    

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
      //Atualiza o localStorage
      saveLocalStorage('expenses', newExpenses)
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
      saveLocalStorage('incomes', filterIncome)
    }else if(type === 'expense'){
      //Clone da lista
      const newExpenses = [...expenses]
      // Retira o item a ser deletado
      const filterExpenses = newExpenses.filter( income => income.id !== id? income : null)

      setExpenses(filterExpenses)
      saveLocalStorage('expenses', filterExpenses)
    }
  }

  // Função para armazenamento no Local Storage
  const saveLocalStorage = (key, content)=>{
    localStorage.setItem(key, JSON.stringify(content))
  } 

  

  return (
    <div className="App">
    
      <RecordForm addRecord={addRecord}/>

 
      <section className='section income_wrapper'>
      <span className='total'>
        <h1>Receita</h1>
        <p><strong>R$ {incomes.reduce((accumulator, record)=> accumulator + Number(record.value), 0).toFixed(2)}</strong> </p>
      </span>
      <div className='incomes_list'>
        {incomes.map(
          (record) => (
            <Record key={record.id} record={record} removeRecord={removeRecord} />
          )
        )}
      </div>
      

      </section>
      <section className='section expense_wrapper'>
      <span className='total'>
        <h1>Despesa</h1>
        <p><strong>R$ {expenses.reduce((accumulator, record)=> accumulator + Number(record.value), 0).toFixed(2)}</strong> </p>
      </span>
      
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

