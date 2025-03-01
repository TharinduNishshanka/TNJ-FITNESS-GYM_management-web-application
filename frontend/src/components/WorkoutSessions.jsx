import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Join us to live a healthy life.We will guide you.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>OUR BRANCHES</h1>
        <p>
          Join With Us!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Matara</h4>
           
          </div>
          <div>
            <h4>Galle</h4>
           
          </div>
          <div>
            <h4>Ambalangoda</h4>
            
          </div>
          <div>
            <h4>Kaluthara</h4>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;