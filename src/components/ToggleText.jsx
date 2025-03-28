import { useState } from "react";

function ToggleText() {
  const [text, setText] = useState(false);

  function Alternar() {
    setText(!text);
  }

  let elemento = null;
  if (text === false) {
    elemento = <p>Texto oculto</p>;
  }

  return (
    <div>
      {elemento}
      <button onClick={Alternar}>Alternar</button>
    </div>
  );
}

export default ToggleText;
