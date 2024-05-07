import React, { Component, useState, useEffect, useNavigate } from "react";
import { Switch, Route, Link, useHistory, withRouter } from "react-router-dom";
import {browserHistory} from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDataService from "./services/product.service";
import "./App.css";

//class App extends Component {


//const App = (props) =>  {
export default class Add extends Component {
constructor(props) {
    super(props);
    this.onChangeSearchName2 = this.onChangeSearchName2.bind(this);
    this.retrieveProducts2 = this.retrieveProducts2.bind(this);
    this.refreshList2 = this.refreshList2.bind(this);
    this.setActiveProduct2 = this.setActiveProduct2.bind(this);
    this.removeAllProducts2 = this.removeAllProducts2.bind(this);
    this.searchName2 = this.searchName2.bind(this);

    this.onChangeCode2 = this.onChangeCode2.bind(this);
    this.onChangeName2 = this.onChangeName2.bind(this);
    this.onChangePricehrk2 = this.onChangePricehrk2.bind(this);
    this.onChangePriceeur2 = this.onChangePriceeur2.bind(this);
    this.onChangeDescription2 = this.onChangeDescription2.bind(this);
    this.saveProduct2 = this.saveProduct2.bind(this);
    this.newProduct2 = this.newProduct2.bind(this);

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePricehrk = this.onChangePricehrk.bind(this);
    this.onChangePriceeur = this.onChangePriceeur.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.updateisAvailable = this.updateisAvailable.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.clickevent1 = this.handleClick.bind(this);
    this.clickevent2 = this.handleClick1.bind(this);
    this.clickevent3 = this.handleClick2.bind(this);

    this.state = {
      products: [],
      currentProduct: {
        id: null,
        code: "",
        name: "",
        pricehrk: "",
        priceeur: "",
        description: "",
        isAvailable: false
      },
      currentProduct2: null,
      currentIndex: -1,
      searchName: "",
      eurconversion: "",
      message: "",
      DataisLoaded: false,
      id: null,
      code: "",
      name: "",
      pricehrk: "",
      priceeur: "",
      description: "", 
      isAvailable: false,
      submitted: false,
      clickevent:1

    };   
    this.seteurconversion(); 
  }

  componentDidMount() {
    if (this.state.clickevent===1) {
    this.retrieveProducts2();
    }
    if (this.state.clickevent===3) {
    //this.getProduct(this.props.match.params.id);
    this.getProduct(this.state.currentProduct2.id);
    }
  }

 seteurconversion () {
    fetch('../eur_conversion')
    .then((r) => r.text())
    .then(text  => {
      this.setState({
      eurconversion: text
    });
    })  
  } 

  onChangeCode2(e) {
    this.setState({
      code: e.target.value
    });
  }

  onChangeName2(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePricehrk2(e) {
    let one = e.target.value;
    let two = this.state.eurconversion;
    let total = one / two;
    //let stringhrk = ''+one;
    let stringeur = total.toFixed(2);
    this.setState({
      pricehrk: e.target.value,
      priceeur: stringeur
    });
  }

  onChangePriceeur2(e) {
    //let stringeur = ''+e.target.value;
    this.setState({
      priceeur: e.target.value
    });
  }

  onChangeDescription2(e) {
    this.setState({
      description: e.target.value
    });
  }
	
  saveProduct2() {
    let one = parseFloat(this.state.pricehrk);

    if (this.state.code.trim().length!=10) {
        this.setState({
           message: "Code (unique) (exactly 10 character) !"
        });
    return;
    }

    if ((this.state.pricehrk.trim() =="") || (this.state.pricehrk.trim().length==0) || (isNaN(one))) {
    one=0;
    }
 
    if (one<0) {
    one=0;
    }

    one=one.toFixed(2);

    let two = this.state.eurconversion;
    let total = one / two;
    let stringeur = total.toFixed(2);

    this.setState({
      pricehrk: one,
      priceeur: stringeur
    });

    var data = {
      code: this.state.code,
      name: this.state.name,
      pricehrk: one,
      priceeur: stringeur,
      description: this.state.description
    };

    ProductDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          code: response.data.code,
          name: response.data.name,
          pricehrk: response.data.pricehrk,
          priceeur: response.data.priceeur,
          description: response.data.description,
          isAvailable: response.data.isAvailable,

          submitted: true
        });
        this.setState({
           message: ""
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduct2() {
    this.setState({
      id: null,
      code: "",
      name: "",
      pricehrk: "",
      priceeur: "",
      description: "",
      isAvailable: false,

      submitted: false
    });
  }

  onChangeSearchName2(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveProducts2() {
    ProductDataService.getAll()
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList2() {
    this.retrieveProducts();
    this.setState({
      currentProduct2: null,
      currentIndex: -1
    });
  }

  setActiveProduct2(product, index) {
    this.setState({
      currentProduct2: product,
      currentIndex: index
    });
  }

  removeAllProducts2() {
    ProductDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName2() {
    this.setState({
      currentProduct2: null,
      currentIndex: -1
    });

    ProductDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeCode(e) {
    const code = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          code: code
        }
      };
    });
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          name: name
        }
      };
    });
  }

  onChangePricehrk(e) {
    const pricehrk = e.target.value;

    let one = e.target.value;
    let two = this.state.eurconversion;
    let total = one / two;
    let stringeur = total.toFixed(2);

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          pricehrk: pricehrk,
          priceeur: stringeur
        }
      };
    });
  }

  onChangePriceeur(e) {
    const priceeur = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          priceeur: priceeur
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        description: description
      }
    }));
  }

  getProduct(id) {
    ProductDataService.get(id)
      .then(response => {
        this.setState({
          currentProduct: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateisAvailable(status) {
    let one = parseFloat(this.state.currentProduct.pricehrk);
    
    if (this.state.currentProduct.code.trim().length!=10) {
        this.setState({
           message: "Code (unique) (exactly 10 character) !"
        });
    return;
    }

    if ((this.state.currentProduct.pricehrk.trim() =="") || (this.state.currentProduct.pricehrk.trim().length==0) || (isNaN(one))) {
    one=0;
    }

    if (one<0) {
    one=0;
    }

    one=one.toFixed(2);

    let two = this.state.eurconversion;
    let total = one / two;
    let stringeur = total.toFixed(2);

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          pricehrk: one,
          priceeur: stringeur
        }
      };
    });

    var data = {
      id: this.state.currentProduct.id,
      code: this.state.currentProduct.code,
      name: this.state.currentProduct.name,
      pricehrk: one,
      priceeur: stringeur,
      description: this.state.currentProduct.description,
      isAvailable: status
    };

    ProductDataService.update(this.state.currentProduct.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentProduct: {
            ...prevState.currentProduct,
            isAvailable: status
          }
        }));
                if (status) {
           	   this.setState({
                      message: "Product is available !"
                   });
		} else
                {
           	   this.setState({
                      message: "Product is not available !"
                   });
		}
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProduct() {
    let one = parseFloat(this.state.currentProduct.pricehrk);

    if (this.state.currentProduct.code.trim().length!=10) {
        this.setState({
           message: "Code (unique) (exactly 10 character) !"
        });
        return;
    }

    if ((this.state.currentProduct.pricehrk.trim() =="") || (this.state.currentProduct.pricehrk.trim().length==0) || (isNaN(one))) {
    one=0;
    }

    if (one<0) {
    one=0;
    }

    one=one.toFixed(2);
    let two = this.state.eurconversion;
    let total = one / two;
    let stringeur = total.toFixed(2);

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          pricehrk: one,
          priceeur: stringeur
        }
      };
    });

    var data = {
      id: this.state.currentProduct.id,
      code: this.state.currentProduct.code,
      name: this.state.currentProduct.name,
      pricehrk: one,
      priceeur: stringeur,
      description: this.state.currentProduct.description,
      isAvailable: this.state.currentProduct.isAvailable
    };

    ProductDataService.update(this.state.currentProduct.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentProduct: {
            ...prevState.currentProduct,
          }
        }));
        console.log(response.data);
        this.setState({
           message: "The product was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProduct() {    
    ProductDataService.delete(this.state.currentProduct.id)
      .then(response => {
        console.log(response.data);
        this.clickevent1();
      })
      .catch(e => {
        console.log(e);
      });
  }


handleClick = event => {
this.state.currentProduct2=null;
this.state.currentIndex=-1;
this.retrieveProducts2();
this.state.submitted=false;
this.state.message="";
    this.setState({
      currentProduct2: null,
      currentIndex: -1,
      message: "",
      DataisLoaded: false,
      id: null,
      code: "",
      name: "",
      pricehrk: "",
      priceeur: "",
      description: "", 
      isAvailable: false,
      submitted: false,
      clickevent: 1
    });
}

handleClick1 = event => {
this.state.submitted=false;
this.state.message="";
    this.setState({
      message: "",
      DataisLoaded: false,
      id: null,
      code: "",
      name: "",
      pricehrk: "",
      priceeur: "",
      description: "", 
      isAvailable: false,
      submitted: false,
      clickevent: 2
    });
}

handleClick2 = event => {
this.getProduct(this.state.currentProduct2.id);
this.state.submitted=false;
this.state.message="";
    this.setState({
      message: "",
      DataisLoaded: false,
      id: null,
      code: "",
      name: "",
      pricehrk: "",
      priceeur: "",
      description: "", 
      isAvailable: false,
      submitted: false,
      clickevent: 3
    });
}

  render() {
   const {Name, products, currentProduct2, currentIndex, message, submitted, id, code, name, pricehrk, priceeur, description, isAvailable } = this.state; 
    return (
      <div className="bg-light">

	  <nav class="navbar navbar-light bg-light">
	    <div>
	      <button onClick={this.handleClick.bind(this)} className="btn btn-outline-success btn-lg my-3 my-sm-0 mr-3">Example</button>
	      <button onClick={this.handleClick.bind(this)} className="btn btn-outline-success my-2 my-sm-0 mr-2">Products</button>
	      <button onClick={this.handleClick1.bind(this)} className="btn btn-outline-success my-2 my-sm-0">Add</button>
	    </div>
	  </nav>

        <div className="container p-3 my-3 bg-light text-black">
          <Switch>
      
            {(() => {
      if (this.state.clickevent===1) {
          return (
      <div className="list row bg-light">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={this.state.searchName}
              onChange={this.onChangeSearchName2}
            />
            <div className="input-group-append">
              <button
                className="btn btn-success mb-3"
                type="button"
                onClick={this.searchName2}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Products List</h4>

          <ul className="list-group">
            {this.state.products &&
              this.state.products.map((product, index) => (
                <li
                  className="list-group-item"
                  style={{color: (index === this.state.currentIndex ? 'white': 'black'), backgroundColor: (index === this.state.currentIndex ? 'darkgreen' : 'lightgreen')}}
                  onClick={() => this.setActiveProduct2(product, index)}
                  key={index}
                >
                  {product.name}
                </li>
              ))}
          </ul>

          <button
            className="btn btn-success mr-1 my-3"
            onClick={this.removeAllProducts2}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {this.state.currentProduct2 ? (
            <div>
              <h4>Product</h4>
              <div>
                <label>
                  <strong>Code:</strong>
                </label>{" "}
                {this.state.currentProduct2.code}
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {this.state.currentProduct2.name}
              </div>
              <div>
                <label>
                  <strong>Pricehrk:</strong>
                </label>{" "}
                {this.state.currentProduct2.pricehrk}
              </div>
              <div>
                <label>
                  <strong>Priceeur:</strong>
                </label>{" "}
                {this.state.currentProduct2.priceeur}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {this.state.currentProduct2.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {this.state.currentProduct2.isAvailable ? "IsAvailable" : "Pending"}
              </div>

              <button
                onClick={this.handleClick2.bind(this)}
                className="btn btn-success mr-1"
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Product...</p>
            </div>
          )}
        </div>
      </div>
      )}})()}

            {(() => {
      if (this.state.clickevent===2) {
          return (
       <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success mr-1" onClick={this.newProduct2}>
              Add
            </button>
          </div>
        ) : (
	    <div>
            <div className="form-group">
              <label htmlFor="code">Code</label>
              <input
                type="text"
                className="form-control"
                id="code"
                required
                value={this.state.code}
                onChange={this.onChangeCode2}
                name="code"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName2}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pricehrk">Pricehrk</label>
              <input
                type="text"
                className="form-control"
                style={{ textAlign: 'right' }}
                id="pricehrk"
                required
                value={this.state.pricehrk}
                onChange={this.onChangePricehrk2}
                name="pricehrk"
              />
            </div>
             <div className="form-group">
              <label htmlFor="priceeur">Priceeur</label>
              <input
                type="text"
                className="form-control"
                style={{ textAlign: 'right' }}
                id="priceeur"
                required
                value={this.state.priceeur}
                onChange={this.onChangePriceeur2}
                name="priceeur"
		disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription2}
                name="description"
              />
            </div>

            <button onClick={this.saveProduct2} className="btn btn-success mr-1">
              Submit
            </button>
            <p>{this.state.message}</p>
          </div>
        )}
      </div>

      )}})()}

            {(() => {
      if (this.state.clickevent===3) {
          return (
      <div>
        {this.state.currentProduct ? (
          <div className="edit-form">
            <h4>Product</h4>
            <form>
              <div className="form-group">
                <label htmlFor="code">Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  value={this.state.currentProduct.code}
                  onChange={this.onChangeCode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.currentProduct.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pricehrk">Pricehrk</label>
                <input
                  type="text"
                  className="form-control"
		  style={{ textAlign: 'right' }}
                  id="pricehrk"
                  value={this.state.currentProduct.pricehrk}
                  onChange={this.onChangePricehrk}
                />
              </div>
              <div className="form-group">
                <label htmlFor="priceeur">Priceeur</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ textAlign: 'right' }}
                  id="priceeur"
                  value={this.state.currentProduct.priceeur}
                  onChange={this.onChangePriceeur}
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={this.state.currentProduct.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {this.state.currentProduct.isAvailable ? "isAvailable" : "Pending"}
              </div>
            </form>

            {this.state.currentProduct.isAvailable ? (
              <button
                className="btn btn-success mr-1"
                onClick={() => this.updateisAvailable(false)}
              >
                IsNotAvailable
              </button>
            ) : (
              <button
                className="btn btn-success mr-1"
                onClick={() => this.updateisAvailable(true)}
              >
                IsAvailable
              </button>
            )}

            <button
              className="btn btn-success mr-1"
              onClick={this.deleteProduct}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-success mr-1"
              onClick={this.updateProduct}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Product...</p>
          </div>
        )}
      </div>


      )}})()}


      
          </Switch>
        </div>
      </div>

    );
  }
}

//export default withRouter(App);