import React from "react";
import Item from "./Item/Item";
import "./Items.scss";

function Items(props) {
  return (
    <div className="items">
      {props.items.map((item, index) => {
        return <Item item={item} key = {index} />;
      })}
    </div>
  );
}

export default Items;
