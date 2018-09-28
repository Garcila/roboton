import React from 'react';

const Robot = ({ robot }) => {
  return (
    <section className="robot-listing">
      <h2>{robot.name}</h2>
      <section>
        <figure>
          <img
            style={{ maxHeight: '10rem' }}
            src={robot.img}
            alt={`${robot.name} the robot`}
          />
          <figcaption>{robot.imageCaption}</figcaption>
        </figure>
        <p>{robot.description}</p>
      </section>
    </section>
  );
};

export default Robot;
