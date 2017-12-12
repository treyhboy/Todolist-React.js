import React, { Component } from 'react';
import EList from "./List";
import {Button,Input,Col,Icon,Row} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {item :[],value:""}
        this.handlechange = this.handlechange.bind(this);
        this.handleclick = this.handleclick.bind(this);
        this.handledel = this.handledel.bind(this);
        this.handleadd = this.handleadd.bind(this);

    }

    handlechange(event)
    {
        this.setState({value: event.target.value});
    }
    handleadd()
    {
        const val = this.state.value;
        const ob = {val:val,class:"nos"}
        this.setState((prevState) =>
            {return {item : [...prevState.item,ob] ,value:''}});
    }
    handledel()
    {
        this.setState((prevState) =>
        {return {item : prevState.item.filter((item,i,a)=>{
            return item.class !== "strike";
        } ) ,value:''}});
    }
    handleclick(k,i)
    {
        this.setState((prevState) =>
        {   var n = prevState.item;
            console.log(k);
            n.splice(i,1,{val:k.innerText,class:k.className==="strike"?"nos":"strike"});
            console.log(n);
            return {item : n,value:''}});
    }

    render() {

        return (
            <div style={{marginTop:30}}>
                <Row type="flex" align="bottom" justify="left" gutter={16} >
                    <Col span={8} offset={7} ><Input size="large" placeholder="Enter Todo" value={this.state.value} onChange={this.handlechange} />
                </Col>
                <Col span={1} ><Button type="primary" size="large" onClick={this.handleadd}><Icon type="plus-circle" /></Button>
                </Col>
                <Col span={1} ><Button type="danger" size="large" onClick={this.handledel}>Del</Button>
                </Col>
                </Row>
                <div style={{marginTop:100}}>
                <Row type="flex" align="bottom" justify="left">
                <Col span={12} offset={6}>
                <EList item={this.state.item}  delfun={this.handleclick}/>
                </Col>
                </Row>
                </div>
            </div>);

    }
}

export default App;
