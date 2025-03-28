function UserCard(props) {
  return (
    <div>
      <label>Nome: {props.name} </label>
      <label> - Idade: {props.age}</label>
    </div>
  );
  
}

export default UserCard;
