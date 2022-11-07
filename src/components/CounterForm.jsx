import { useState } from 'react';
const CounterForm = (props /*||{setCounters,counters} */) => {
  const { setCounters, counters } = props;
  const [{ min, max, start, steps }, setValues] = useState({
    min: '',
    max: '',
    start: 0,
    steps: '',
  });

  const addCounter = (obj) => {
    setCounters([...counters, obj]);
  };
  const submitValues = ({ target: { name, value, type } }) => {
    setValues((inputs) => {
      return { ...inputs, [name]: type === 'number' ? Number(value) : value };
    });
  };
  return (
    <>
      <label htmlFor="min">Min</label>
      <input
        onChange={submitValues}
        type="number"
        name="min"
        id="min"
        value={min}
      />
      <label htmlFor="">Max</label>
      <input
        onChange={submitValues}
        type="number"
        name="max"
        id="max"
        value={max}
      />
      <label htmlFor="start">Start</label>
      <input
        onChange={submitValues}
        type="number"
        name="start"
        id="start"
        value={start}
      />
      <label htmlFor="steps">Steps</label>
      <input
        onChange={submitValues}
        type="number"
        name="steps"
        id="steps"
        value={steps}
      />

      <button
        className="mt-4"
        onClick={() => {
          addCounter({ min, max, start, steps });
        }}
      >
        Send
      </button>
    </>
  );
};

export default CounterForm;
