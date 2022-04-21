import React, {useState} from 'react';
import './App.css';
import Search from './components/search/search';
import Result from './components/search/result';
import History from './components/history/history';
function App() {

  const [result, setResult] = useState('');
  const [error, setError] = useState();
  const [history, setHistory] = useState([]);


  return (
    <div className="App">
      <History history={history} setHistory={setHistory}/>
      <Search result={result} setResult={setResult} setError={setError} history={history} setHistory={setHistory} />
      <Result result={result}  error={error}/>
    </div>
  );
}

export default App; 