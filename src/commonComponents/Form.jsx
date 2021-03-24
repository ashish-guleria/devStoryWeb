import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
           
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <select className="selectpicker">
                                        <option>What is app about?</option>
                                        <option>What is app about?</option>
                                        <option>What is app about?</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <div className="btn-blk">
                                        <button className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                   

        )
    }
}
