import { useForm } from "react-hook-form";
import "../css/AdminCreateForm.css";

export const AdminCreateProductForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="admin-create-form-container">
      <form className="admin-create-form" onSubmit={handleSubmit(onSubmit)}>
        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="name">
            Name of Product
          </label>
          <input id="name" {...register("name")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="description">
            Description of Product
          </label>
          <input id="description" {...register("description")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            min={"0"}
            step={".01"}
            {...register("price")}
          />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="image">
            Select Image to Display
          </label>
          <input id="image" type="file" {...register("image")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="type">
            Type of Product
          </label>
          <select id="type" {...register("type")}>
            <option value="deck">Complete Deck</option>
            <option value="park">Complete Park</option>
            <option value="accessories">Deck Accessories</option>
            <option value="pieces">Park Piece</option>
          </select>
        </span>

        <input type="submit" />
      </form>
    </div>
  );
};
