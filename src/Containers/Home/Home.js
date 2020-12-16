import React, { useState, useEffect } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import * as Actions from "../../Store/Actions/index";
import Filter from "../../Components/Filter/Filter";
import Items from "../../Components/Items/Items";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

function Home(props) {
  const [categories, setCategories] = useState([]);
  const [products, setproducts] = useState(props.products);
  const [offset, setOffset] = useState(6);
  const [filters, setFilters] = useState([]);
  const [volume, setvolume] = useState(0);
  const [clearAllCheck, setclearAllCheck] = useState(false);

  useEffect(() => {
    props.getProduct();
  }, []);

  useEffect(() => {
    setproducts(props.products);
    if (props.products.length !== 0) {
      let updatedCategory = [];
      props.products.forEach((product) => {
        let found = updatedCategory
          .map((storedCategory) => storedCategory.value)
          .indexOf(product.category);
        if (found === -1) {
          updatedCategory.push({
            value: product.category,
            option: product.category,
          });
        }
      });
      setCategories(updatedCategory);
    }
  }, [props.products]);

  useEffect(() => {
    showFilteredProduct();
  }, [filters]);

  useEffect(() => {
    if (offset !== 6) {
      props.getMoreProducts(offset);
    }
  }, [offset]);

  //  FILTERS LOGIC  //

  const filterProductHandler = (name, status, filterName) => {
    if (!filters.includes(name.value)) {
      setFilters((prevState) => [...prevState, name.value]);
    } else {
      let index = filters.indexOf(name.value);
      let updatedFilter = [...filters];
      updatedFilter.splice(index, 1);
      setFilters(updatedFilter);
    }
  };

  const showFilteredProduct = () => {
    if (filters.length !== 0) {
      let filteredProduct = props.products.filter((product) => {
        return filters.includes(product.category);
      });
      setproducts(filteredProduct);
    } else {
      setproducts(props.products);
    }
  };

  const searchProduct = (key) => {
    if (key.length === 0) {
      setproducts(props.products);
    } else {
      let filteredProduct = [];
      filteredProduct = props.products.filter((product) =>
        product.title.toLowerCase().includes(key.toLowerCase())
      );
      setproducts(filteredProduct);
    }
  };

  const filterProductByPrice = (value) => {
    setvolume(value);
    let filteredProduct = props.products.filter((product) => {
      return product.price <= value;
    });
    setproducts(filteredProduct);
  };

  //  END  //

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      let updatedOffset = offset;
      updatedOffset += 6;
      setOffset(updatedOffset);
    }
  };

  // RESET FILTERS //

  const resetAllFilters = () => {
    setFilters([]);
    setvolume(0);
    setclearAllCheck(true);
    props.getProduct();
  };

  return (
    <React.Fragment>
      <Navbar search={(keyword) => searchProduct(keyword)} />
      <div className="home">
        <h1>Products</h1>
        <div className="home__container">
          <div className="home__filters">
            <div className="d-flex customFlex">
              <h3>Filters</h3>
              <p onClick={resetAllFilters}>Clear</p>
            </div>
            <Filter
              name="Category"
              options={categories}
              filters={(filter, status, filterName) =>
                filterProductHandler(filter, status, filterName)
              }
              reset={clearAllCheck}
            />
            <h5>Price</h5>
            <Slider
              value={volume}
              min={0}
              max={700}
              onChange={filterProductByPrice}
            />
          </div>
          <div className="home__products" onScroll={handleScroll}>
            {products.length !== 0 && <Items items={products} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.items.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(Actions.getProducts()),
    getMoreProducts: (payload) => dispatch(Actions.getMoreProduct(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
