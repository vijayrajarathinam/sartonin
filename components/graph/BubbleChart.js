import React from "react";
import * as d3 from "d3";
import _ from "lodash";

export default class BubbleChart extends React.Component {
  static defaultProps = {
    data: [],
    useLabels: false,
    width: 600,
    height: 400,
  };

  constructor(props) {
    super(props);

    this.minValue = 1;
    this.maxValue = 100;
    this.mounted = false;

    this.state = {
      data: [],
    };

    this.radiusScale = this.radiusScale.bind(this);
    this.simulatePositions = this.simulatePositions.bind(this);
    this.renderBubbles = this.renderBubbles.bind(this);
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.minValue =
        0.95 *
        d3.min(this.props.data, (item) => {
          return item.value;
        });

      this.maxValue =
        1.05 *
        d3.max(this.props.data, (item) => {
          return item.value;
        });

      this.simulatePositions(this.props.data);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  radiusScale = (value) => {
    const fx = d3
      .scaleSqrt()
      .range([1, 50])
      .domain([this.minValue, this.maxValue]);

    return fx(value);
  };

  simulatePositions = (data) => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.5)
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05))
      .force(
        "collide",
        d3.forceCollide((d) => {
          return this.radiusScale(d.value) + 2;
        })
      )
      .on("tick", () => {
        if (this.mounted) {
          this.setState({ data });
        }
      });
  };

  renderBubbles = (data) => {
    const minValue =
      0.95 *
      d3.min(data, (item) => {
        return item.value;
      });

    const maxValue =
      1.05 *
      d3.max(data, (item) => {
        return item.value;
      });

    const color = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(d3.interpolateHcl)
      .range(["#eb001b", "#f79e1b"]);

    // render simple circle element
    if (!this.props.useLabels) {
      const circles = _.map(data, (item, index) => {
        return (
          <circle
            key={index}
            r={this.radiusScale(item.value)}
            cx={item.x}
            cy={item.y}
            fill={color(item.value)}
            stroke={d3.rgb(color(item.value)).brighter(2)}
            strokeWidth="2"
          />
        );
      });

      return (
        <g
          transform={`translate(${this.props.width / 2}, ${
            this.props.height / 2
          })`}
        >
          {circles}
        </g>
      );
    }

    // render circle and text elements inside a group
    const texts = _.map(data, (item, index) => {
      const props = this.props;
      //   const fontSize = this.radiusScale(item.value) / 2;
      return (
        <g
          key={index}
          transform={`translate(${props.width / 2 + item.x}, ${
            props.height / 2 + item.y
          })`}
        >
          <circle
            r={this.radiusScale(item.value)}
            fill={color(item.value)}
            stroke={"black"} //d3.rgb(color(item.value)).brighter(2)}
            strokeWidth="2"
          />
          <text
            dy="6"
            fill="#000"
            textAnchor="middle"
            fontSize="15px"
            fontWeight="bold"
          >
            {item.label}
          </text>
        </g>
      );
    });

    return texts;
  };

  render() {
    if (this.state.data.length) {
      return (
        <svg width={this.props.width} height={this.props.height}>
          {this.renderBubbles(this.state.data)}
        </svg>
      );
    }

    return <div>Loading</div>;
  }
}

// console.log(rawdata)
// debugger
// ReactDOM.render(
//     <BubbleChart useLabels data={rawdata} />,
//     document.getElementById("charts")
// );
