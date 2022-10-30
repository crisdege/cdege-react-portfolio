import React from 'react';
import myPortrait from '../../assets/images/portrait.JPG';
import { Col } from 'react-bootstrap';

function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          <center>
            <img
              src={myPortrait}
              className="my-portrait"
              alt="cristina-profile"
            />
          </center>
          <p class="name">cristina dege</p>
          <p class="job">full stack web developer</p>
          <h2 class="education">about me</h2>
          <p>
            Hello, I'm Cristina! I started my education in computer programming
            at a community college. After I graduated with an associates degree
            in computer programming, I decided to take some time to save for a
            university and decide if I want to continue as a programmer, or
            choose a different path in the technology world.
          </p>
          <br></br>
          <p>
            During my break from school, life happened, and 20 years later I
            decided I am not getting any younger, and now is the time to get
            back into school. I am currently working on getting my bachelor's
            degree in IT, and while taking the required courses for my program,
            I discovered I really enjoy web programming.
          </p>
          <br></br>
          <p>
            With that being said, I am a Full Stack Web Developer based in North
            Carolina. I have 10 years of banking experience, and about 7 years
            of managerial experience in retail, banking, small business and food
            service environments. I am very creative, a problem solver, and
            curious how things work.
          </p>
        </Col>
      </div>
    </section>
  );
}

export default About;
