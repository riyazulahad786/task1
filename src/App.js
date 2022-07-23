import './App.css';
import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import userComponent from "./components/userComponent";
const ResponsiveGridLayout = WidthProvider(Responsive);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
    this.onHandle = this.onHandle.bind(this);
  }
  onHandle() {
    this.setState((prevState) => ({
      value: !prevState.value,
    }));
  }
  render() {
    var layout = [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 8, h: 1 },
      { i: "c", x: 8, y: 0, w: 12, h: 1 },
     
    ];
    var layout1 = [
      { i: "a", x: 0, y: 1, w: 3, h: 2 },
      { i: "b", x: 4, y: 1, w: 9, h: 2 },
      { i: "c", x: 0, y: 1, w: 4, h: 1 },
     
    ];

    var layout = { lg: this.state.value === true ? layout : layout1 };

    return (
      <div>
      <header className="heig"></header>
        <button style={{ marginLeft: "45%" }} onClick={this.onHandle}>
          {this.state.value === true ? "change" : "undo"} Re-Size
        </button>
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={481}
          width={1200}
        >
          <div key="a" style={{ backgroundColor: "#2dd6b2" }}>
            <userComponent color={"yellow"} />
          </div>
          <div key="b" style={{ backgroundColor: "#c5d4c9" }}>
            <userComponent color={"green"} />
          </div>
          <div key="c" style={{ backgroundColor: "#8189db" }}>
            <userComponent color={"red"} />
          </div>
         
         
       
        </ResponsiveGridLayout>
      </div>
    );
  }
}

