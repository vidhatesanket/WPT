import React from "react";
import axios from "axios";
export default class Axios extends React.Component {

    constructor() {
        super();
        this.state = { arr: [], setobj: null };
    }
    componentDidMount() {
        let promise = axios.get("https://reqres.in/api/users?page=2");
        promise.then((response) => {
            this.setState({ arr: response.data.data });
        })
    }
    getoption = () => {
        return this.state.arr.map((element) => {
            return (
                <option value={element.id}>{element.first_name}</option>
            )
        })
    }
    handler = (e) => {
        let selectedId = e.target.value
        let obj = this.state.arr.find((ele) => {
            if (ele.id === selectedId)
                return true;
            else
                return false;
        })
        console.log(obj)
        this.setState({ selectedobj: obj })
    }


render() {
    return (
        <>
            <select onClick={this.handler}>
                {this.getoption}
            </select>
        </>
    )
}
}