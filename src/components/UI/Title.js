function Title({ title = "Default title" }) {
  const TitleStyle = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "1.5rem",
  };

  return (
    <header style={TitleStyle}>{title}</header>
  ) ;
}

export default Title;
