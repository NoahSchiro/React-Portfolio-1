import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <h1>Check Out Some of My Works</h1>
      <div className="portfolio">
        {
          resumeData.portfolio && resumeData.portfolio.map((project) => {
            return(
              <div className="project-card" style={{ backgroundImage: `url(${project.imgurl})` }}>
                <div className="project-info" onClick={() => window.open(project.projecturl, "_blank")}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      </section>
    );
  }
}
