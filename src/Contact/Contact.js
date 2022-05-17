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

    filterArray: []
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
    this.setState({ filterArray: [...this.state.filterArray, this.state.listObj] });

    e.target.reset();
  };

  btnHandler = (e) => {
    let value = e.target.textContent;
    
    switch(value){
      case 'Friends':
        let temp = []
        this.state.filterArray.filter(item =>{
          if(item.category === 'Friends'){
            temp.push(item)
          }
        })
        this.setState({listArray: [...temp]})
        break

       case 'Family':
        let temp2 = []
        this.state.filterArray.filter(item =>{
          if(item.category === 'Family'){
            temp2.push(item)
          }
        })
        this.setState({listArray: [...temp2]})
       break

       case 'Collegue':
        let temp3 = []
        this.state.filterArray.filter(item =>{
          if(item.category === 'Collegue'){
            temp3.push(item)
          }
        })
        this.setState({listArray: [...temp3]})
       break

       case 'All':
        this.setState({listArray: [...this.state.filterArray]})
    }
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
                  category={item.category}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
