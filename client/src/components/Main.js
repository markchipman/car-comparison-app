// Include React as a dependency
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link

import { Link } from "react-router";
import Navbar from "./Navbar";
import Fixedarea from "./Fixedarea";
import Card from "./Card";
import Cards from "./Cards";
import Vehiclespecs from "./Vehiclespecs";
import Cars from "./Cars.json"
import Compare from "./Compare";
import "./Main.css";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";



// Create the Main component
class Main extends Component {

  state = {
    Cars: Cars
  };

  render() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="container-fluid">
         
        <Navbar />
        <br />
        <Fixedarea />

        <Cards>

          <div className="card text-center bg">            
            <div className="card-body">
              <a className="btn btn-primary btn-sm text-center boxShadow" href="#" role="button">New Comparison</a>
            </div>
          </div>  

          <br />

          {this.state.Cars.map(car => (
            <Card           
              name={car.name}
              image={car.image}              
            />
            ))}

            <Dropdown>
                {this.state.Cars.map(car => (
                    <DropdownItem        
                      name={car.name}              
                />
                ))}
            </Dropdown>  

        </Cards>
              

        <br />
    
        <Vehiclespecs />  

        <footer>
          <hr />
          <p className="pull-right">
            <i className="fa fa-github" aria-hidden="true"></i>
            Proudly built using React.js
          </p>
        </footer>

        
      </div>
    );
  }
};

// Export the module back to the route
export default Main;