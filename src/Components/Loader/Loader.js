import React from "react";
import './Loader.scss';
import { connect } from "react-redux";

function Loader(props) {
  return props.loading && <div className="lds-dual-ring"></div>;
}

const mapStateToProps = (state) => {
    return {
        loading: state.UI.loading
    }
}

export default connect(mapStateToProps, null)(Loader);
