import React, { Component } from 'react';

// import {getDog} from './API'; //use when back end runs
import { DATA } from '../components/API';
import Robot from '../components/Robot';

class RobotPage extends Component {
  state = {
    robot: null
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    // const { robot } = await getRobot(id);//use when back end runs
    const robot = DATA.find(e => e.id === parseInt(id));
    this.setState({ robot });
  };
  render() {
    const { robot } = this.state;
    return robot ? <Robot robot={robot} /> : <h1>Loading...</h1>;
  }
}

export default RobotPage;
