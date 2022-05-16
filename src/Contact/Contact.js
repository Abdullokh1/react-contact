import React, { Component } from "react";
import RightPart from "../components/RightPart/RightPart";
import "../components/LeftPart/LeftPart.css";
import "../components/RightPart/RightPartOutput.css";
import Buttons from "../components/RightPart/Buttons";

const arr = []

export default class Contact extends Component {
 
  state = {
    listObj: {
      fullName: null,
      Number: null,
      category: null,
    },
    listArray: [
      {
        fullName: "Abdullokh Giyasov",
        Number: 99922882,
        category: "All",
      },
    ],
  };


  Typehandler = (e) => {
    let obj = {};

    if (e.target.type === "text") {
      obj.fullName = e.target.value;
    }

    if (e.target.type === "number") {
      obj.Number = e.target.value;
    }
    if (e.target.type === "select-one") {
      obj.category = e.target.value;
    }
    this.setState({ listObj: { ...this.state.listObj, ...obj } });
  };

  sumbmitHandler = (e) => {
    e.preventDefault();
    this.setState({ listArray: [...this.state.listArray, this.state.listObj] });
    e.target.reset();
  };

  btnHandler = (e) => {
    let value = e.target.textContent;
    

    switch(value){
      case 'Friends':
        this.state.listArray = this.state.listArray.filter((item) => {
          return item.category === "Friends";
        });
        break
        
      case 'Family':
        this.state.listArray = this.state.listArray.filter((item) => {
          return item.category === "Family";
        });
        break
    }
      this.setState({
        fullName: null,
        Number: null,
      });
  };

  render() {
    return (
      <div className="main-box">
        <div className="inner-box">
          <div className="col-4">
            <form onSubmit={this.sumbmitHandler} className="form">
              <div className="mb-4">
                <label className="mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  onChange={this.Typehandler}
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label className="mb-2" htmlFor="number">
                  Number
                </label>
                <input
                  onChange={this.Typehandler}
                  type="number"
                  id="number"
                  className="form-control"
                  placeholder="Tel:"
                  required
                ></input>
              </div>

              <label className="mb-2" htmlFor="number">
                Categories
              </label>
              <select
                onChange={this.Typehandler}
                className="form-select"
                type="select"
              >
                <option defaultValue>All</option>
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
                <option value="Collegue">Collegue</option>
              </select>

              <button type="submit" className="btn submit-btn btn-success mt-4">
                Submit
              </button>
            </form>
          </div>

          <div>
            <ul className="button-wrapper">
              <Buttons buttonHandle={this.btnHandler} />
            </ul>

            {this.state.listArray.map((item, i) => {
              return (
                <RightPart
                  key={i}
                  name={item.fullName}
                  num={item.Number}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
