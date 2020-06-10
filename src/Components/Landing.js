import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            &nbsp;
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber} · &nbsp;
            <a href="mailto:arjsoota@amazon.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;