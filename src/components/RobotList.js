import React from 'react';
import { Link } from 'react-router-dom';

import Robot from './Robot';

const RobotList = ({ robots }) => {
  return (
    <ul className="robots">
      {robots.map(robot => (
        <li key={robot.id}>
          <Link to={`robots/${robot.id}`}>
            <Robot robot={robot} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RobotList;
