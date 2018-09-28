import React, { Component } from 'react';

// import { getRobots } from '../components/API';
import RobotList from '../components/RobotList';
import { DATA } from '../components/API';

class RobotsPage extends Component {
  state = {
    robots: null
  };

  componentDidMount = async () => {
    // const result = await getRobots(); //implement when back end is in place
    const robots = DATA;
    await this.setState({ robots });
  };

  render() {
    const { robots } = this.state;
    return robots ? <RobotList robots={robots} /> : <h1>Loading Robots...</h1>;
  }
}

export default RobotsPage;
