import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'

import projectimage from '../../Assets/top-10-DS-projects.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title=""
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col> */}

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectimage}
                isBlog={false}
                title="Book and news app"
                description=" A Book Management App is a software application that enables users to manage their book collections digitally. The app allows users to catalog their books, organize them by author, genre, or publication date, and keep track of the books they have read or want to read."
                ghLink="https://github.com/Ambika0ch/Books-and-News-website"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectimage}
                isBlog={false}
                title="Ecommerce Website "
                description="An eCommerce website is an online platform that allows businesses to sell products or services to customers over the internet. eCommerce websites have revolutionized the way businesses operate, making it easier for them to reach a broader audience, increase sales, and reduce costs associated with physical storefronts."
                ghLink="https://github.com/Ambika0ch/simple-ecart-master"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectimage}
                isBlog={false}
                title="Restaurant website"
                description="A restaurant website built using React is a dynamic 
                and modern platform that allows restaurants to showcase their brand and
                 menu in an engaging and interactive way. React is a popular JavaScript
                  library used to build user interfaces,
                 and it provides a fast and responsive experience for users."
                ghLink="https://github.com/Ambika0ch/Front-End-Web-UI-Frameworks-and-Tools-Bootstrap-4-master"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectimage}
                isBlog={false}
                title="Quiz-Project"
                description="A Quiz Project using JavaScript is
                 a fun and interactive way to test the knowledge of users on
                  a specific topic. The project involves creating a set of questions
                   with multiple-choice answers and displaying them to the user. The user
                    then selects their answers and 
                submits the quiz, which is evaluated to determine the user's score."
                ghLink="https://github.com/Ambika0ch/Codedamn-Quiz-Project"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectimage}
                isBlog={false}
                title="Tic-Tac-Toe"
                description=" A Tic-Tac-Toe game using Python is a fun and interactive project
                 that involves designing a game board and allowing two players to compete against
                  each other. The game is played on a 3x3 grid, with players taking turns placing their symbol (usually X or O) on the
                 board until one player gets three symbols in a row, column, or diagonal."
                ghLink="https://github.com/Ambika0ch/Tic-Tac-toe"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist