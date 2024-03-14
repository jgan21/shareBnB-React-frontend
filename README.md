<a name="readme-top"></a>
<div align="center">

  <h1 align="center">ShareBnB</h1>

  <p align="center">
    "Welcome to our outdoor oasis oasis! 🌞 Dive into a world where backyard barbecues and poolside parties await. Search and soak up the sun in the perfect outdoor space. Whether you're hosting a gathering or seeking a serene retreat, let the adventure begin right here! Start exploring your slice of outdoor heaven today. Let's make waves together! 🌊
    <br />
    <br />
    <!-- To start a screen record on Mac: Shift + Cmd + 5 -->
    <img src="public/shareBnB.gif" alt="Demo recording">
    <br />
    <br />
    <a href="https://sharebnb-jia.onrender.com/" target="_blank">View Demo</a>
    <br />
    <a href="https://github.com/jgan21/shareBnB-flask-backend" target="_blank">ShareBnB Backend Repo</a>
  </p>
</div>
<div align="center">

![Top Languages](https://img.shields.io/github/languages/top/jgan21/shareBnB-React-frontend)
![GitHub repo size](https://img.shields.io/github/repo-size/jgan21/shareBnB-React-frontend)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jgan21/shareBnB-React-frontend)
![GitHub last commit](https://img.shields.io/github/last-commit/jgan21/shareBnB-React-frontend)
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#learnings">Learnings</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
Sharebnb is a space sharing app where hosts can list their backyard or pool spaces for rent by other users. ShareBnB utilizes a React frontend, includes a RESTful API to interface with Python-based [Sharebnb Flask Backend](https://github.com/jgan21/shareBnB-flask-backend), and integrates AWS S3 for file storage with a PostgreSQL database.

### Learnings

This project offered learning opportunities around:

- React component design
- React state management and context
- React Router
- Seperation of concerns between frontend and backend
- Building RESTful APIs
- Relational database design and modeling
- Form validation with JSON schemas
- Test-driven development and coverage
- Integrating AWS S3 services for secure file handling to reduce database load

## Component Hierarchy Design
![Component diagram](/public/sharebnb-component.png)
![Models diagram](/public/sharebnb-models.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Frontend:
- ![React][React]
- ![React Router][React Router]
- ![Render][Render]

Backend:
- ![AWS][AWS]
- ![ElephantSQL][ElephantSQL]
- ![Flask][Flask]
- ![PostgreSQL][PostgreSQL]
- ![Python][Python]
- ![Render][Render]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, please follow these steps.

1. Follow the instructions for cloning and setting up the [backend repo](https://github.com/jgan21/shareBnB-flask-backend).
2. In a new terminal, clone the frontend repo.
   ```sh
   git clone https://github.com/jgan21/shareBnB-React-frontend.git
   ```
3. Install frontend dependencies.
    ```sh
    npm install
    ```
4. Run the app in the development mode.
    ```sh
    npm start
    ```
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Add authentication and authorization
        - [ ] Signup form
        - [ ] Login form
- [ ] Incorporate test suite for authentication and authorization
- [ ] Create a homepage
- [ ] Add a "forgot password" feature
- [ ] Add feature to allow users to like a property

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- LICENSE -->


<!-- CONTACT -->

## Contact
[LinkedIn](https://www.linkedin.com/in/jia-rong-gan/)

Project Link (Frontend): [https://github.com/jgan21/react-jobly](https://github.com/jgan21/shareBnB-React-frontend)

Project Link (Backend): [https://github.com/jgan21/jobly-backend](https://github.com/jgan21/shareBnB-flask-backend)

Live Demo: [https://sharebnb-jia.onrender.com/](https://sharebnb-jia.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Authors
* [Veronica Ni](https://github.com/veronicani) : Frontend and Backend Co-author

## Acknowledgments

This project was completed at [Rithm School](https://www.rithmschool.com/) in Feb 2024. Many thanks to Veronica Ni, and Rithm's staff team for their support!

- [Rithm School](https://www.rithmschool.com/)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNOLOGY BADGES -->
[AWS]: https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=FF9900
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[ElephantSQL]: https://img.shields.io/badge/ElephantSQL-2D9CDB?logo=elephantsql&logoColor=white
[Flask]: https://img.shields.io/badge/Flask-007D69?logo=flask&logoColor=white
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white
[Python]: https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white
[React]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white
[React Router]: https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white
[Render]: https://img.shields.io/badge/Render-000000?logo=render&logoColor=white
[SQLAlchemy]: https://img.shields.io/badge/SQLAlchemy-1C2833?logo=sqlalchemy&logoColor=white