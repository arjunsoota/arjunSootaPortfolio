import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          
          {
              <div>
               <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><span class="iconify" data-icon="logos:c-plusplus" color="#010101"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:java"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:python"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:django"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:html-5"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:css-3"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:javascript"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:react"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:sass"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="mdi:microsoft-office" color = "#DC3E15"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="logos:aws"></span></li>
                    &nbsp;<li class="list-inline-item"><span class="iconify" data-icon="simple-icons:mysql" color=  "#DC3E15" width= "60" height="60"></span></li>

                </ul>
                <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Data Structures and Algorithms in C++ and Java
                    </li>
                    <li>
                        <span class="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Full Stack Development
                    </li>
                    <li>
                        <span class="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span class="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Agile Development & Scrum
                    </li>
                </ul>
            </div>
          }
          
        </div>
      </section>
    );
  }
}

export default Skills;