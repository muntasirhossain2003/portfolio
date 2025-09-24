import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="newspaper-section">
      <h1 className="page-headline">Professional Directory</h1>

      <div className="contact-grid">
        <div className="contact-section">
          <h3>Primary Contact Information</h3>
          <div className="contact-item">
            <strong>Email:</strong> siyambhuiyan@iut-dhaka.edu
          </div>
          <div className="contact-item">
            <strong>Telephone:</strong> +880 1752982995
          </div>
          <div className="contact-item">
            <strong>Address:</strong> Boardbazar, Gazipur, Bangladesh
          </div>
          <div className="contact-item">
            <strong>Postal Code:</strong> 1704
          </div>
        </div>

        <div className="contact-section">
          <h3>Academic Affiliation</h3>
          <div className="contact-item">
            <strong>Institution:</strong> Islamic University of Technology
          </div>
          <div className="contact-item">
            <strong>Department:</strong> Computer Science and Engineering
          </div>
          <div className="contact-item">
            <strong>Academic Status:</strong> Undergraduate Student
          </div>
          <div className="contact-item">
            <strong>Expected Graduation:</strong> 2025
          </div>
        </div>

        <div className="contact-section">
          <h3>Professional Services</h3>
          <div className="contact-item">Full Stack Web Development</div>
          <div className="contact-item">Mobile Application Development</div>
          <div className="contact-item">AI Integration & Machine Learning</div>
          <div className="contact-item">Database Design & Management</div>
          <div className="contact-item">Technical Consultation</div>
        </div>

        <div className="contact-section">
          <h3>Availability & Rates</h3>
          <div className="contact-item">
            <strong>Project Consultation:</strong> Available
          </div>
          <div className="contact-item">
            <strong>Collaboration:</strong> Open to partnerships
          </div>
          <div className="contact-item">
            <strong>Internship:</strong> Seeking opportunities
          </div>
          <div className="contact-item">
            <strong>Response Time:</strong> 24-48 hours
          </div>
        </div>
      </div>

      <div className="availability-notice">
        <h3>Professional Opportunities</h3>
        <div className="article-text single-column">
          <p>
            Currently accepting inquiries for collaboration opportunities,
            internship positions, and technology consultation projects.
            Particular interest in environmental technology solutions,
            educational applications, and artificial intelligence integration
            projects.
          </p>

          <p>
            Available for freelance development work, open-source contributions,
            and academic research collaboration. Best reached via email for
            detailed project discussions and technical requirements analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
