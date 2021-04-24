import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import resumePdf from '@assets/pdf/david-bowland-resume.pdf'

const Resume = (): JSX.Element => {
  return (
    <div id="cv" className="instaFade">
      <div className="mainDetails">
        <div id="headshot">
          <StaticImage src="../../images/David-2019-05-18.jpg" alt="Image of David" />
        </div>

        <div id="name">
          <h1>David Bowland</h1>
          <h2>Software Developer</h2>
          <h4>
            <a href={resumePdf}>Download Resume</a>
          </h4>
        </div>

        <div id="contactDetails">
          <ul>
            <li>
              e: <a href="mailto:david@dbowland.com">david@dbowland.com</a>
            </li>
            <li>
              w: <a href="https://dbowland.com">dbowland.com</a>
            </li>
            <li>
              m: <a href="tel:+14178940079">417.894.0079</a>
            </li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>

      <div id="mainArea">
        <section>
          <div className="sectionTitle">
            <h1>Personal Profile</h1>
          </div>

          <div className="sectionContent">
            <article>
              <ul className="jobDescript">
                <li>Developer of robust solutions</li>
                <li>Effective translator between geek and English</li>
                <li>Connoisseur of groan-inducing dad jokes</li>
              </ul>
              <div className="clear"></div>
            </article>
          </div>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Experience</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>
                Software Developer at <a href="https://www.carfax.com/">Carfax</a>
              </h2>
              <p className="subDetails">March&nbsp;2020 - Present</p>
              <ul className="jobDescript">
                <li>Develop Spring Boot / Spring Batch apps in Groovy and Java 8</li>
                <li>Develop Node.js apps, using React with webpack for frontend</li>
                <li>Use Agile methodology with two-week sprints organized on Jira</li>
                <li>
                  Deploy apps using Jenkins, either Docker images to Kubernetes on AWS or RPMs to DC
                  3.0 on-premise
                </li>
                <li>Went from new hire to acting team leader in less than 10 months</li>
              </ul>
              <div className="clear"></div>
            </article>

            <article>
              <h2>
                Senior Programmer Analyst at{' '}
                <a href="https://www.showmeboone.com/">Boone County Government</a>
              </h2>
              <p className="subDetails">November&nbsp;2014 - March&nbsp;2020</p>
              <ul className="jobDescript">
                <li>
                  Developed full-stack web applications using CSS3, HTML5, and vanilla JavaScript
                  with ASP, ASP.NET, or Java backend
                </li>
                <li>Developed COBOL and IBM CL applications on IBM System i midrange</li>
                <li>Acted as project manager for two major projects</li>
                <li>Earned three performance-based increases outside annual review</li>
              </ul>
              <div className="clear"></div>
            </article>

            <article>
              <h2>
                ATM/Vault Coordinator at{' '}
                <a href="https://www.callawaybank.com/">The Callaway Bank</a>
              </h2>
              <p className="subDetails">May&nbsp;2009 - October&nbsp;2014</p>
              <ul className="jobDescript">
                <li>Accepted new position after one year, then earned two promotions</li>
              </ul>
              <div className="clear"></div>
            </article>
          </div>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Skills</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>Languages</h2>
              <p className="subDetails">Proficient in</p>
              <ul className="keySkills">
                <li>Groovy</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>TypeScript</li>
              </ul>
              <p className="subDetails">Familiar with</p>
              <ul className="keySkills">
                <li>ASP/ASP.NET</li>
                <li>C++</li>
                <li>COBOL</li>
                <li>PHP</li>
                <li>Terraform</li>
              </ul>
              <div className="clear"></div>
            </article>

            <article>
              <h2>SQL</h2>
              <ul className="keySkills">
                <li>DB2</li>
                <li>Microsoft SQL Server (T/SQL)</li>
                <li>MySQL</li>
                <li>Oracle Database</li>
                <li>PostgreSQL</li>
              </ul>
              <div className="clear"></div>
            </article>

            <article>
              <h2>NoSQL</h2>
              <ul className="keySkills">
                <li>DynamoDB</li>
              </ul>
              <div className="clear"></div>
            </article>

            <article>
              <h2>Technologies</h2>
              <ul className="keySkills">
                <li>Argo</li>
                <li>Docker</li>
                <li>Git</li>
                <li>Kibana</li>
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>Jira</li>
                <li>NewRelic</li>
              </ul>
              <div className="clear"></div>
            </article>

            <article>
              <h2>AWS</h2>
              <ul className="keySkills">
                <li>CloudWatch</li>
                <li>DynamoDB</li>
                <li>Lambda</li>
                <li>RDS</li>
                <li>S3</li>
                <li>Systems Manager</li>
                <li>Secrets Manager</li>
              </ul>
              <div className="clear"></div>
            </article>
          </div>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Education</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>Columbia College &mdash; Columbia,&nbsp;MO</h2>
              <p className="subDetails">Bachelor of Science &mdash; GPA&nbsp;3.68</p>
              <p className="subDetails">
                Major:&nbsp;Computer Science &mdash; Minor:&nbsp;Business
              </p>
              <ul className="jobDescript">
                <li>Graduated cum laude with a GPA of 3.68/4.0</li>
                <li>Earned an A in all computer science classes</li>
              </ul>
              <div className="clear"></div>
            </article>

            <article>
              <h2>David H. Hickman High School &mdash; Columbia,&nbsp;MO</h2>
              <div className="clear"></div>
            </article>
          </div>
          <div className="clear"></div>
        </section>
      </div>
    </div>
  )
}

export default Resume
