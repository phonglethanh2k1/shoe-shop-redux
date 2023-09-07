import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";
import { connect } from "react-redux";

class CartShoe extends Component {
  renderCart = () => {
    return this.props.cart.map((item, index) => {
      let { name, price, image, quantity, id } = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price * quantity}</td>
          <td>
            <img width="100" src={image} alt="" />
          </td>
          <td>
            <button
              className="btn btn-dark"
              onClick={() => this.props.handleChangeQtt(id, GIAM_SO_LUONG)}
            >
              -
            </button>
            <strong className="mx-3">{quantity}</strong>
            <button
              className="btn btn-success"
              onClick={() => this.props.handleChangeQtt(id, TANG_SO_LUONG)}
            >
              +
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleRemove(id)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Số lượng</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleChangeQtt: (idShoe, options) => {
      let action = {
        type: "TANG_GIAM",
        payload: { idShoe, options },
      };
      dispatch(action);
    },
    handleRemove: (id) => {
      let action = {
        type: "XOA_SAN_PHAM",
        payload: id,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
