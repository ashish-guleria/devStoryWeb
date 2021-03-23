import React, { Component } from 'react'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import Index from "./components/Index"
import DataCenter from "./components/DataCenter"
import Development from "./components/Development"
import HowWeDoit from "./components/HowWeDoit"
import Mobile from "./components/Mobile"
import Quote from "./components/Quotes"
import Seo from "./components/Seo"
import Ui_ux from "./components/Ui_ux"
import WebDesign from "./components/WebDesign"
import AOS from "aos";
import "aos/dist/aos.css";



export default class App extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
        // initialise with other settings
       // duration: 20000
    });
}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/development" exact component={Development} />
          <Route path="/datacenter" exact component={DataCenter} />
          <Route path="/howWeDoit" exact component={HowWeDoit} />
          <Route path="/mobile" exact component={Mobile} />
          <Route path="/quote" exact component={Quote} />
          <Route path="/seo" exact component={Seo} />
          <Route path="/ui_ux" exact component={Ui_ux} />
          <Route path="/webDesign" exact component={WebDesign} />
        </Switch>

      </BrowserRouter>
    )
  }
}
