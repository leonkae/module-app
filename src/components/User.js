function User(props) {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Email : {props.email}</p>
      <p>status : {props.isOnline ? "Online" : "Offline"}</p>
      <button onClick={props.onIncreaseAge}>Increase Age</button>
      <button onClick={props.onDecreaseAge}>Decrease Age</button>
      <button onClick={props.onToggleStatus}>Toggle Status</button>
      {props.children}
    </div>
  );
}

export default User;
