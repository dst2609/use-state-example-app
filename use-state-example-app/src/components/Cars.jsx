import React, { useState } from "react";

const Cars = (props) => {
  const [carname, setCarname] = useState("");
  const [print, setPrint] = useState("");

  const createCar = (e) => {
    e.preventDefault();
    console.log("You have entered", carname);
    setPrint(carname);
  };

  return (
    <fieldset>
      <legend>Welcome to car sharing portal</legend>
      <form onSubmit={createCar}>
        <div>
          <label>Carname: </label>
          <input type="text" onChange={(e) => setCarname(e.target.value)} />
        </div>
        <input type="submit" value="Create Car" />
      </form>

      <h4>{print}</h4>
    </fieldset>
  );
};

export default Cars;
