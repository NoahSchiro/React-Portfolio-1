import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please use the contact information below for inquires or potential employment opportunities
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Phone Number: {resumeData.phoneNumber}</h4>
                <h4>Email: <a href={"mailto:" + resumeData.email}> {resumeData.email}</a></h4>
                <h4>LinkedIn: <a href={resumeData.linkedinId}>link</a></h4>
              </div>
            </aside>
          </div>
		</section>
	);
  }
}
