import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfEnrollment} {item.YearOfEnrollment} - {item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <ul>
                          {item.Achievements.map(achievement=>(
                            <li>- {achievement}</li>
                          ))}
                          </ul>
                       </div>
                    </div>
                  )
                })
              }
            </div>
		</div>

		<div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <ul>
                          {item.Achievements.map(achievement=>(
                            <li>- {achievement}</li>
                          ))}
                          </ul>
                       </div>

                    </div>
                  )
                })
              }
            </div> 
         </div>

        <div className="row open-source">
            <div className="three columns header-col">
              <h1><span>Open Source</span></h1>
              <h1><span>Contributions</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.openSource && resumeData.openSource.map((item) => {
            	  return (
                    <div className="row item">
                      <div className="twelve columns">
                        <h3>{item.projectName}</h3>
                        <p className="info">{item.technologiesUsed}</p>
                        <p>{item.description}</p>
						<a href={item.link} target="_blank">View on GitHub</a>
                      </div>
                    </div>
                  )
                })
              }
            </div> 
        </div>

        
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            <div className="skill-cards">
              {
                resumeData.skills && resumeData.skills.map((item) => {
                  return(
                    <div className="skill-card">
                      <img src={item.img} alt={item.skillname} className="skill-logo" />
                      <span className="skill-name">{item.skillname}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
