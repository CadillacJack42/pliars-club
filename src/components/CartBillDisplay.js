import { useCart } from "../hooks/useCart";

export const CartBillDisplay = () => {
  const { cart, addToCart, decrementCartItem } = useCart();
  const handleDecrement = (item) => {
    decrementCartItem(item);
  };
  const handleIncrement = (item) => {
    addToCart(item);
  };
  return (
    <table className="itemized-bill-table">
      <caption id="itemized-bill-caption">Cart</caption>
      <thead id="itemized-bill-head">
        <tr id="itemized-bill-columns">
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>

      <tbody id="itemized-bill-body">
        {cart.map((item, i) => {
          return (
            <tr key={"itemized-bill-body" + i}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleDecrement(item)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncrement(item)}>+</button>
              </td>
              <td>{"$" + item.price}</td>
              <td>{"$" + item.quantity * item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
