import React, { Component } from "react";
import { connect } from "react-redux";
class ItemShoe_Redux extends Component {
  render() {
    const { image, name } = this.props.item;
    return (
      <div className="card text-left col-3">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body p-0">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <button
              className="btn btn-danger mr-2"
              onClick={() => this.props.handleAdd(this.props.item)}
            >
              Add
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.props.handleDetail(this.props.item)}
            >
              View
            </button>
          </p>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (item) => {
      console.log(item);
      let action = {
        type: "THEM_SAN_PHAM",
        payload: item,
      };
      dispatch(action);
    },
    handleDetail: (item) => {
      let action = {
        type: "XEM_CHI_TIET",
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemShoe_Redux);
