function Form() {
  function Adicionar() {
    const input = document.getElementById("input");
    const div = document.getElementById("div");

    if (!input.value.trim() !== "") {
      let form = document.createElement("form");
      let p = document.createElement("p");
      p.textContent = input.value;

      form.appendChild(p);
      div.appendChild(form);
    }

    input.value = "";
  }

  return (
    <div>
      <button onClick={Adicionar}>Adicionar ao form</button>
    </div>
  );
}

export default Form;
