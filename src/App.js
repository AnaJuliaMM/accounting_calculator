import './App.css';
import RecordForm from './components/recordForm/RecordForm';


function App() {
  return (
    <div className="App">
      <section className='section record_wrapper'>
      <h1>Cadastro</h1>
      <RecordForm/>

      </section>
      <section className='section income_wrapper'>
      <h1>Receita</h1>

      </section>
      <section className='section expense_wrapper'>
      <h1>Despesa</h1>

      </section>
    </div>
  );
}

export default App;
