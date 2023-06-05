export const OrderForm = () => {
  return (
    <div>
      <h1>Order Form</h1>
      <p>Complete form to complete products</p>
      <form>
        <label>
          Board Shape
          <br></br>
          <input
            type="radio"
            name="shape"
            id="popsicle"
            value="popsicle"
          ></input>
          <label htmlFor="popsicle">Popsicle</label>
          <input type="radio" name="shape" id="cruiser" value="cruiser"></input>
          <label htmlFor="cruiser">Cruiser</label>
        </label>

        <hr></hr>

        <label>
          Wheel Material
          <br></br>
          <input
            type="radio"
            name="wheels"
            id="plastic"
            value="Plastic"
          ></input>
          <label htmlFor="plastic">Plastic</label>
          <input
            type="radio"
            name="wheels"
            id="polyurethane"
            value="Polyurethane"
          ></input>
          <label htmlFor="polyurethane">Polyurethane</label>
        </label>

        <hr></hr>

        <label>
          Top Graphic
          <br></br>
          <input type="file"></input>
          <input
            type="radio"
            name="top-graphic"
            id="top-graphic-full"
            value="Full Board"
          ></input>
          <label htmlFor="top-graphic-full">Full Board</label>
          <input
            type="radio"
            name="top-graphic"
            id="top-graphic-center"
            value="Center"
          ></input>
          <label htmlFor="top-graphic-center">Center of Board</label>
        </label>

        <hr></hr>

        <label>
          Bottom Graphic
          <br></br>
          <input type="file"></input>
          <input
            type="radio"
            name="bottom-graphic"
            id="bottom-graphic-full"
            value="Full Board"
          ></input>
          <label htmlFor="bottom-graphic-full">Full Board</label>
          <input
            type="radio"
            name="bottom-graphic"
            id="bottom-graphic-center"
            value="Center"
          ></input>
          <label htmlFor="bottom-graphic-center">Center of Board</label>
        </label>
      </form>
    </div>
  );
};
