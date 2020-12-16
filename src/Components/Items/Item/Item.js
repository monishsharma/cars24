import React from "react";
import { titleCase } from "../../../Util/helper";
import "./Item.scss";

function Item(props) {
  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src={props.item.image} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{titleCase(props.item.category)}</span>
        <h4>
          <a href="">{titleCase(props.item.title)}</a>
        </h4>
        <div className="product-bottom-details">
          <div className="product-price">
            $ {props.item.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
