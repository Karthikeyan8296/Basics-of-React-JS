import { React, useState } from "react";

const OnChangeComponent = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingEvent = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <p>name: {name}</p>
      <input value={name} onChange={handleNameChange} type="text" />

      <p>Quantity: {quantity}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />

      <p>Comments: {comment}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        type="text"
        placeholder="Enter delivery instructions"
      />

      <div>
        <p>Payment: {payment}</p>
        <select value={payment} onChange={handlePaymentChange} name="" id="">
          <option value="">select an options</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Debit Card">Debit Card</option>
        </select>
      </div>

      <p>Shipping type: {shipping}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingEvent}
        />
        Pick up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingEvent}
        />
        Delivery
      </label>
    </>
  );
};

export default OnChangeComponent;
