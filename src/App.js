import React, {useState} from 'react';
import './App.css';
import Search from './components/search/search';
import Result from './components/search/result';
function App() {

  const [result, setResult] = useState('');

  return (
    <div className="App">
      <Search result={result} setResult={setResult} />
      <Result result={result}/>
    </div>
  );
}

export default App; 