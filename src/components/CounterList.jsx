import Counter from './Counter';

const CounterList = ({ counters }) => {
  return (
    <>
      <div className="row">
        {counters.map((counter, index) => {
          return (
            <div className=" col-4">
              <Counter
                minValue={counter.min}
                maxValue={counter.max}
                startValue={counter.start}
                stepsValue={counter.steps}
                key={index + 1}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CounterList;
