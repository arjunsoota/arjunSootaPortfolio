import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';
import profileData from './profileData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      awards : profileData.awards
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} />
          <hr className="m-0" />
          <div>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="resume">
            <div className="w-100">
            <div className="row">
              <h2 className="mb-5">Resume</h2>
            </div>
            <div className="embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" src="https://drive.google.com/file/d/1bObwmMG6-y042yarPjhm_0TZyq3fzm4-/preview" title="Resume" allowfullscreen></iframe>
            </div>
            </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
