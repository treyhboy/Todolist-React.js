import React, { Component } from "react";
import EList from "./List";
import { connect } from "react-redux";
import { Button, Input, Col, Icon, Row } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import * as todoactions from "./Actions/TodoAction";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handlechange = this.handlechange.bind(this);
    this.handleenter = this.handleenter.bind(this);
    this.handleclick = this.handleclick.bind(this);
    this.handledel = this.handledel.bind(this);
    this.handleadd = this.handleadd.bind(this);
    this.handleup = this.handleup.bind(this);
    this.handledown = this.handledown.bind(this);
  }

  handleenter(e) {
    var code = e.key;
    {
      code === "Enter" && this.handleadd();
    }
  }
  handlechange(e) {
    this.setState({ value: e.target.value });
  }
  handleadd() {
    this.props.actions.createtodo(this.state.value);
    this.setState({ value: "" });
  }
  handledel() {
    this.props.actions.deltodo();
  }
  handleclick(k, i) {
    this.props.actions.striketodo(k, i);
  }
  handleup(i) {
    this.props.actions.moveup(i);
  }
  handledown(i) {
    this.props.actions.movedown(i);
  }

  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <Row type="flex" align="top" justify="center">
          <h1 style={{ color: "grey" }}>To Do List </h1>
        </Row>
        <Row type="flex" align="bottom" justify="left" gutter={16}>
          <Col span={8} xl={{ offset: 7 }} xs={{ offset: 5 }}>
            <Input
              size="large"
              placeholder="Enter Todo"
              value={this.state.value}
              onKeyDown={this.handleenter}
              onChange={this.handlechange}
            />
          </Col>
          <Col span={1}>
            <Button type="primary" size="large" onClick={this.handleadd}>
              <Icon type="plus-circle" />
            </Button>
          </Col>
          <Col span={1} xs={{ offset: 2 }} xl={{ offset: 0 }}>
            <Button type="danger" size="large" onClick={this.handledel}>
              <Icon type="delete" style={{ fontSize: 20 }} />
            </Button>
          </Col>
        </Row>
        <div style={{ marginTop: 100 }}>
          <Row type="flex" align="bottom" justify="left">
            <Col span={12} offset={6}>
              <EList
                item={this.props.item}
                delfun={this.handleclick}
                downfun={this.handledown}
                upfun={this.handleup}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
function mapstatetoprops(state, ownprops) {
  return {
    item: state.todoReducer
  };
}
function mapdispatchtoprops(dispatch) {
  return {
    actions: bindActionCreators(todoactions, dispatch)
  };
}
export default connect(mapstatetoprops, mapdispatchtoprops)(App);
