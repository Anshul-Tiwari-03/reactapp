import React, { Component } from "react";
import Parent from "./DownFlow/Parent";
import Parent2 from "./DownFlowWithContextApi/Parent2";
import Parent3 from "./DataFunctionFlowWithContextApi/Parent3";

export const MyContext = React.createContext();
export const MyContext2 = React.createContext();

export default class ContextApi2 extends Component {
    state = {
        count: 10
    }
    handleCLickContext=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        const contextValue={
            data:this.state,
            handleCLick:this.handleCLickContext
        }

        return <div className="card">
        <div className="card-body">
            <h4><u>Going for the demonstration</u></h4>
            This is main component passing its state.count to Parent : {this.state.count}
            <br></br>
            We are trying to access the same data at multilevel down
            <br></br>


            <div className="row">
                <div className="col-sm-4">
                    <br></br>
                    <b>Using Lift Up State : Passing props to every component</b>

                    <br></br>
                    <small>This is main component passing its state.count to Parent : <b> {this.state.count}</b></small>

                    <Parent count={this.state.count} />

                </div>
                <div className="col-sm-4">
                    <br></br>
                    <b>Using Context Api </b>
                    <br></br>
                    <small>
                    This is main component passing its state.count to Parent :<b> {this.state.count}</b>

                    </small>
                    <br></br>
                    <MyContext.Provider value={this.state.count}>
                        <Parent2 />

                    </MyContext.Provider>

                </div>
                <div className="col-sm-4">
                    <br></br>
                    <b>Using Context Api Passing Function </b>
                    <br></br>
                    <small>
                    This is main component passing its state.count to Parent :<b> {this.state.count}</b>

                    </small>
                    <br></br>
                    <MyContext2.Provider value={contextValue}>
                        <Parent3 />

                    </MyContext2.Provider>

                </div>
            </div>

        </div>
        </div>

    }
}