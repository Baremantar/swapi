import React, {useState} from 'react';
import './App.css';
import Search from './components/search/search';
import Result from './components/search/result';
import History from './components/history/history';
function App() {

  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);


  return (
    <div className="App">
      <Search result={result} setResult={setResult} history={history} setHistory={setHistory} />
      <Result result={result}/>
      <History history={history} setHistory={setHistory}/>
    </div>
  );
}

export default App; 