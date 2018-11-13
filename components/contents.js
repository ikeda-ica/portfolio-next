import React from 'react';
import config from '../site.config';
import '../styles.scss';

export class AboutContents extends React.Component {
  render(){
    return(
      <section className="main">
        <div className="mbg">
          <h1 className="myname">Ikeda Takumi</h1>
          <p>Frontend Engineer / UI/UX Designer / Photographer</p>
          <p className="profile">
            I live and create in Japan since 22 age and mainly coded frontend scripts.
          </p>
          <ul>
            {config.skills.map((skill, index) =>
              <li key={skill.type}>
                {skill.type}: {skill.level}
              </li>
            )}
          </ul>
        </div>
      </section>
    );
  }
}


export class WorkContents extends React.Component {
  render(){
    return(
      <section className="main">
        <div className="mbg">
          <p>This is my works.</p>
        </div>
      </section>
    );
  }
}
