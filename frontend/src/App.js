import './App.css';
import TodoForm from './components/Form';
import Header from './components/Header';
import ToDoList from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <TodoForm />
        <ToDoList />
      </main>
    </div>
  );
}

export default App;
