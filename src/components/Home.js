import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Home extends Component {
  
  render() {
    return (
      <div className="main-content home">
        <h2>NHD Project</h2>
        <h3>Comunication: The Key To Understanding</h3>
        <p>The NHD Project (National History Day Project) is a year-long program that is designed to develop critical thinking, research, communication, self-esteem, and involvement skills and abilities that will prepare them for the future. There is a theme every year that students must relate their project to. This year’s theme was communication in history, the key to understanding, and our topic was the Silk Road, connecting cultures and people from China to the West. To learn more about NHD <a href = "https://www.ushistory.org/nhdphilly/info/index.html">click here</a></p>
        <hr></hr>
        <h2>Our Thesis</h2>
        <p>During the Ancient periods the problem in the areas between the westerncountries and china was that the loose connection, especially the communication, and trading routes didn’t supply enough products and wealth for everyone. Around the start of the Han Dynasty, the Hans sent a scout, Zhang Qian, to find a suitable and appropriate trading out that could connect themselves with more western countries. This could boost their contact and communication with people across the world People called this route the Silk Road or the Silk Route because a main product that traveled along the route was the silk from China (but there were a lot of other products too). This changed history because it helped pave the way for more efficient trading and it helped connect people across continents. Many things that were transmitted around the Silk Road required communication, not just inside of exchanging deals, but more broader like spreading technology, beliefs, works of art, and new knowledge.</p>
      </div>
    );
  }
}

export default Home;