import React, {useState} from 'react';
import './App.css';
import Search from './components/search/search';
import Result from './components/search/result';
function App() {

  const [result, setResult] = useState('');
  const [error, setError] = useState();
  const [history, setHistory] = useState([]);


  return (
    <div className="App">
      <Search result={result} setResult={setResult} setError={setError}/>
      <Result result={result} history={history} setHistory={setHistory} error={error}/>
    </div>
  );
}

export default App; 