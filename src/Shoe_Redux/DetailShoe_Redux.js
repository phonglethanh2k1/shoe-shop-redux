import React, { Component } from 'react'
import { connect } from 'react-redux';

 class DetailShoe_Redux extends Component {
  render() {
    let {id, name, price, image, } = this.props.detail
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>
                <img src={image} alt={name} width="100"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    detail: state.shoeReducer.detail
  }
}
export default  connect(mapStateToProps) (DetailShoe_Redux);