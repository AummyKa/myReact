import React from "react";
import { Link } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default class Layout extends React.Component {

  render() {
      const { location } = this.props;
      const containerStyle = {
        marginTop: "60px"
      };
      console.log("layout");
      return (
        <div>

          <Nav location={location} />

          <div className="container" style={containerStyle}>
            <div className="row">
              <div className="col-lg-12">
                <h1>Hello</h1>



              </div>
            </div>
            <Footer/>
          </div>
        </div>

      );
    }
  }
