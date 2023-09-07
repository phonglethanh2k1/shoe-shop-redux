import React, { Component } from "react";
import { connect } from "react-redux";
import ItemShoe_Redux from "./ItemShoe_Redux";
class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return (
        <ItemShoe_Redux
          item={item}
          handleAdd={this.props.handleAdd}
          handleDetail={this.props.handleDetail}
        />
      );
    });
  };
  render() {
    return <div className="col-6 row">{this.renderListShoe()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.shoeReducer.shoeArr,
  };
};
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
export default connect(mapStateToProps, mapDispatchToProps)(ListShoe);
