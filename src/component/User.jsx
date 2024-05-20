const User = ({ name, city }) => {
  return (
    <div className="user">
      <h2>Name: {name}</h2>
      <h2>City: {city}</h2>
    </div>
  );
};

export default User;
