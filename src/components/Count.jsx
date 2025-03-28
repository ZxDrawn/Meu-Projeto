import { useState } from "react";

function Count() {
  const [cont, setCount] = useState(0);

  function Incrementar() {
    setCount(cont + 1);
  }

  function Decrementar() {
    setCount(cont - 1);
  }

  function Resetar() {
    setCount(0);
  }

  return (
    <div>
      <h3>Count: {cont}</h3>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
      <button onClick={Resetar}>Resetar</button>
    </div>
  );
}

export default Count;
