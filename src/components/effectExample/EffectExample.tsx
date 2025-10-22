import { useEffect, useState } from "react";

export default function EffectExample() {
  const [count, setCount] = useState(0);
  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("Use effect 1");
  });

  useEffect(() => {
    console.log("Use effect 2, empty dependencies array");
    
  }, []);

  useEffect(() => {
    console.log("Use effect 2, empty dependencies array");
    
  }, [random]);

  return (
    <div>
      <h2>EffectExample</h2>
      <p>Count: {count}</p>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
    </div>
  );
}

// Component lificycle - жизненный цикл
// 1. mount - рождения - устанивливается на экране первый раз - первый рендер
// 2. update - когда компонент изменяется
// 3. unmount - когда перестает отображться на экране