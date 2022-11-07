import { useState } from 'react';
import CounterForm from './components/CounterForm';
import CounterList from './components/CounterList';

function App() {
  const [counters, setCounters] = useState([]);
  return (
    <div className="App m-auto text-center  ">
      <CounterForm setCounters={setCounters} counters={counters} />
      <CounterList counters={counters} />
    </div>
  );
}

export default App;
