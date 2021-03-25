import React, { Component } from 'react'
import { forms } from "../networkRequests/requests/Forms"

export default class Form extends Component {
    state = {
        name: "",
        email: "",
        phoneNumber: "",
        aboutapp: ""
    }

    componentDidMount() {  }
    submit = async () => {
        let { name, email, phoneNumber, aboutapp } = this.state
        console.log("hellolo", name, email, phoneNumber, aboutapp)
        await forms(name, email, phoneNumber, aboutapp)
            .then((res) => { console.log("hello", res) })
            .catch((err) => console.log(err))

    }

    handleChange = (e) => {
        //let name=e.target.name
        // console.log(name,e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(this.state)
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
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" type="text" name='email' placeholder="Email"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" type="text" name="phoneNumber" placeholder="Phone Number"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <select name="aboutapp" value={this.state.value}
                            onChange={this.handleChange}>
                            <option>What is app about?</option>
                            <option>What is app about?</option>
                            <option>What is app about?</option>
                        </select>
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
