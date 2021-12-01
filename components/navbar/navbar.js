import React, { Component } from "react";
import Link from "next/link";
import logo from "../../src/img/logo.jpeg";
import Image from "next/image";

export default class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="NavB">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <Image
              src="/static/img/logo.jpeg"
              width="70"
              layout="fixed"
              height="100"
              alt="Logo vida fit"
            />
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/services">
              <a className="nav-link">Services</a>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
