import React, { useEffect } from "react";
import "./Filter.scss";
import { titleCase } from "../../Util/helper";

function Filter(props) {
  useEffect(() => {
    if (props.reset) {
      for (var i in props.options) {
        document.getElementById("check" + i).checked = false;
      }
    }
  }, [props.reset]);

  return (
    <div className="filter">
      <h5>{props.name}</h5>
      <div className="filters__options">
        {props.options.length !== 0 &&
          props.options.map((option, index) => {
            return (
              <div className="option" key={index}>
                <input
                  type="checkbox"
                  id={"check" + index}
                  value={option.option}
                  onChange={(e) =>
                    props.filters(option, e.target.checked, props.name)
                  }
                />
                <label htmlFor={"check" + index}>
                  {titleCase(option.value)}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Filter;
