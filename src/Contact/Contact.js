import React, { Component } from "react";
import RightPart from "../components/RightPart/RightPart";
import "../components/LeftPart/LeftPart.css";
import '../components/RightPart/RightPartOutput.css'



export default class Contact extends Component {

  state = {
    firstName: null,
    secondName: null,
    Number: null,
    category: null
  };


  sumbmitHandler(){
     console.log('h111');
    
  }


  render() {
    console.log(this.state);

    return (
      <div className="main-box">
        <div className="inner-box">
          <div className="col-4">
            <form className="form">
              <div className="mb-4">
                <label className="mb-2" htmlFor="name">
                  First Name
                </label>
                <input
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="First Name"
                  required
                ></input>
              </div>

              <div className="mb-4">
                <label className="mb-2" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  onChange={(e) => this.setState({secondName: e.target.value})}
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="Last Name"
                  required
                ></input>
              </div>

              <div className="mb-4">
                <label className="mb-2" htmlFor="number">
                  Number
                </label>
                <input
                  onChange={(e) => this.setState({Number: e.target.value})}
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
                onChange={(e) => this.setState({category: e.target.value})}
                className="form-select"
                aria-label="Default select example"
                >
                <option defaultValue>To whom</option>
                <option value="1">Friends</option>
                <option value="2">Family</option>
                <option value="3">Collegue</option>
              </select>

              <button onSubmit={this.sumbmitHandler()} type="submit" className="btn submit-btn btn-success mt-4">
                Submit
              </button>
            </form>
          </div>

          <div>
            
            <RightPart 
              firstName={this.state.firstName}
              lastName={this.state.secondName}
              number={this.state.Number}
            />
          </div>
        </div>
      </div>
    );
  }
}