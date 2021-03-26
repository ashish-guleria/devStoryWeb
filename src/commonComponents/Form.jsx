import React, { Component } from 'react'
import Select from 'react-select';
import { createBrowserHistory } from 'history';
import { validate1 } from "./validation/validation"
import { forms } from "../networkRequests/requests/Forms"

const history = createBrowserHistory();



// let initialState = {
//     name: "",
//     email: "",
//     phoneNumber: "",
//     aboutapp: "",
//     nameError: "",
//     emailError: "",
//     phoneNumberError: "",
//     aboutappError: ""
// };
export default class Form extends Component {
    state = {
        name: "",
        email: "",
        phoneNumber: "",
        aboutapp: "",
        nameError: "",
        emailError: "",
        phoneNumberError: "",
        aboutappError: ""
    }




    componentDidMount() { }
    submit = async () => {
        const isValid = validate1(this);
        if (isValid) {
            // this.setState(initialState)
            let { name, email, phoneNumber, aboutapp } = this.state
            await forms(name, email, phoneNumber, aboutapp)
                .then((res) => {
                    if (res.statusCode === 200) {
                        history.push('/')
                        history.go(0)
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    handleChange = (e) => {
        //let name=e.target.name
        this.setState(
            { [e.target.name]: e.target.value }
        )
        console.log(this.state)
    }
    handleChangeselect = (e) => {
        console.log(e.label)
        this.setState({
            aboutapp: e.label
        })
    }

    render() {
        //  console.log("staeteeeeee",this.state)
        return (

            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" type="text" name='name' placeholder="Name"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            {this.state.nameError ? <div>{this.state.nameError}</div> : null}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" type="text" name='email' placeholder="Email"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            {this.state.emailError ? <div>{this.state.emailError}</div> : null}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" type="" name="phoneNumber" placeholder="Phone Number"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            {this.state.phoneNumberError ? <div>{this.state.phoneNumberError}</div> : null}

                        </div>
                    </div>
                    <div className="col-sm-6">
                        {/* <select name="aboutapp" value={this.state.value}
                            onChange={this.handleChange}>
                            <option>What is app about?</option>
                            <option>What is app about?</option>
                            <option>What is app about?</option>
                        </select> */}
                        <Select value={this.state.value}
                            onChange={this.handleChangeselect}
                            options={[
                                { value: 'chocolate', label: 'Chocolate', },
                                { value: 'strawberry', label: 'Strawberry' },
                                { value: 'vanilla', label: 'Vanilla' },
                            ]}></Select>
                        {this.state.aboutappError ? <div>{this.state.aboutappError}</div> : null}

                    </div>
                    <div className="col-12">
                        <div className="btn-blk">
                            <button className="btn btn-primary btn-lg"
                                onClick={(e) => {
                                    this.submit()
                                    e.preventDefault();
                                }}
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </form>


        )
    }
}
