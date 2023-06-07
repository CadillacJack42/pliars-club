import { useForm } from "react-hook-form";
import "../css/AdminCreateForm.css";
import { insertProduct } from "../utils/fetch-utils";

export const AdminCreateProductForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    insertProduct(
      {
        name: data.name,
        description: data.description,
        price: data.price,
        type: data.type,
        image: `https://bpzimtowiyikargwuats.supabase.in/storage/v1/object/public/product_images/${data.image[0].name}`,
      },
      data.image[0]
    ).then(() => document.getElementById("create-product-form").reset());
  };
  return (
    <div className="admin-create-form-container">
      <form
        id="create-product-form"
        className="admin-create-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="name">
            Name of Product
          </label>
          <input name="name" id="name" {...register("name")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="description">
            Description of Product
          </label>
          <input
            name="description"
            id="description"
            {...register("description")}
          />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            name="price"
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
          <input name="image" id="image" type="file" {...register("image")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="type">
            Type of Product
          </label>
          <select name="type" id="type" {...register("type")}>
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

// Something is close to being broken
