import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Index from "./components/Home"
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
//import test from './components/test'



export default class App extends Component {
  componentDidMount() {
    AOS.init({});
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route path="/development" component={Development} />
          <Route path="/datacenter" component={DataCenter} />
          <Route path="/howWeDoit" component={HowWeDoit} />
          <Route path="/mobile" component={Mobile} />
          <Route path="/quote" component={Quote} />
          <Route path="/seo" component={Seo} />
          <Route path="/ui_ux" component={Ui_ux} />
          <Route path="/webDesign" component={WebDesign} />
          <Route component={Index}/>
          {/* <Route path="/test" component={test}/> */}
        </Switch>
      </BrowserRouter>
    )
  }
}
