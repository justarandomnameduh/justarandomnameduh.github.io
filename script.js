const navLinks = document.querySelectorAll('#header nav a');
const mainContent = document.getElementById('main-content');

function loadPage(pageName) {
  let content = '';
  switch (pageName) {
    case "education":
      content = `
        <section id="education">
          <h2>Education</h2>
          <div class="education">
            <h3 class="education-title">University of Queensland</h3>\
            <h4>Bachelor of Engineering (Honours) in Software Engineering</h4>
            <span class="date">Feb. 2024 - Expected Dec. 2025</span>
            <p>CGPA: 6.5/7.0</p>
          </div>
          <div class="education">
            <h3 class="education-title">Ho Chi Minh University of Technology (HCMUT)</h3>\
            <h4>Bachelor of Computer Science - Transfer Program</h4>
            <span class="date">Aug. 2021 - Jan. 2024</span>
            <p>CGPA: 3.6/4.0</p>
          </div>
        </section>`;
      break;
    case "experience":
      content = `
        <section id="experience">
          <h2>Experience</h2>
          <div class="experience">
            <h3 class="experience-title">Full-Stack Developer Intern</h3>
            <h4>FPT IS Company Limited</h4>
            <span class="date">Dec. 2024 - Feb 2025</span>
            <p>Developed responsive front-end interfaces for 2 platforms: a hospital mobile app (ReactJS) and hospital websites (AngularJS).  Built full-stack functionality for a foreign exchange website—using AngularJS, ASP.NET, and PostgreSQL.</p>
          </div>
          <div class="experience">
            <h3 class="experience-title">Front-end Developer</h3>
            <p>Association of Vietnamese Students in Queensland, Brisbane, Australia</p>
            <span class="date">Apr. 2024 - now</span>
            <p>Work in a team of 2 to develop a website for the association using ReactJS as a platform for the Mentorship program that have connected over 80 current or freshly graduate students with 18 industry mentors</p>
          </div>
          <div class="experience">
            <h3 class="experience-title">Peer Tutor</h3>
            <p>Ho Chi Minh University of Technology, Ho Chi Minh City</p>
            <span class="date">Aug. 2022 - Jun. 2024</span>
            <p>Successfully tutored 8/12 students to achieve B or more in Probability and Statistics, Calculus 1 and 2, Linear Algebra as Buddy A in the Study Buddy Program.</p>
          </div>
        </section>`;
      break;
    case "projects":
      content = `
        <section id="projects">
          <h2>Projects</h2>
          <div class="project">
            <h3 class="project-title">Multi-Hop Retrieval Analysis</h3>
            <span class="date">Nov. 2024</span>
            <p>Developed a RAG pipeline combining retrieval-reranking (BGE, BM25, Sentence Transformer) and generation algorithms (LLAMA-2, Mistral-7B, Starling-7B, Zephyr-7B) to optimize multi-hop question answering. Key features include advanced document retrieval, large language model-based answer generation, and systematic performance evaluation for short-answer QA tasks.</p>
          </div>
          <div class="project">
            <h3 class="project-title">NER Pipeline</h3>
            <span class="date">Aug. 2024</span>
            <p>Implemented Named Entity Recognition (NER) parsers using spaCy, nltk, and stanza to identify entities such as people, organizations, and locations. Evaluated and compared seven models on precision, recall, and F1 scores, providing a streamlined framework for preprocessing, token alignment, and metric computation.</p>
          </div>
          <div class="project">
            <h3 class="project-title">DICOM Visualization and Tumor Analysis</h3>
            <span class="date">Nov. 2021</span>
            <p>Built a pipeline for 3D DICOM image analysis, enabling visualization, tumor segmentation with U-Net, and interactive exploration to support medical research.</p>
          </div>
          <div class="project">
            <h3 class="project-title">Simple Operating System Simulation</h3>
            <span class="date">Apr. 2023</span>
            <p>Built a simulation of core OS functionalities, including multi-level queue scheduling, process synchronization, and memory management with paging. Enhanced understanding of OS behaviors through visualizations like Gantt charts and memory status analysis.</p>
          </div>
        </section>`;
      break;
    case "achievements":
      content = `
        <section id="achievements">
          <h2>Achievements and Awards</h2>
          <ul class="no-bullets">
            <li>
              <h3 class="achievements-title">OISP Scholarship - Office for International Study Programs, HCMUT</h3>
              <span class="date">Dec. 2023</span>
              <p>Partial Scholarship for Semester 2 - 2021-2022 and Semester 1 - 2022-2023</p>
            </li>
            <li>
              <h3 class="achievements-title">UQ International High Achievers Award - IAS Scholarship, UQ</h3>
              <span class="date">Oct. 2023</span>
            </li>
            <li>
              <h3 class="achievements-title">Academic Incentive Scholarship - HCMUT</h3>
              <span class="date">Nov. 2022</span>
              <p>Full scholarship for Semester 1 - 2021-2022</p>
            </li>
          </ul>
        </section>`;
    break;
    default:
      content = `
        <section id="interests">
          <h2>About me</h2>
          <h4>Hi, I'm Tien, a Software Engineering student at the University of Queensland. I'm passionate about software development, machine learning, and data science. I'm always eager to learn new technologies and apply them to real-world problems.</h4>
          <h2>Interests</h2>
          <ul>
            <li>Inquisitive about Machine Learning with the wide applications in healthcare, social research, and business applications</li>
            <li>Enjoy playing sports such as pool, badminton, and basketball for recreation and fitness</li>
          </ul>
        </section>`;
  }

  mainContent.innerHTML = content;
  navLinks.forEach(link => link.classList.remove('active'));
  const currentLink = document.querySelector(`#header nav a[data-page="${pageName}"]`);
  if (currentLink) {
    currentLink.classList.add('active');
  }
}

// Add event listeners outside the loadPage function
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const pageName = this.getAttribute('data-page');
    loadPage(pageName);
  });
});

// Initial page load
document.addEventListener('DOMContentLoaded', function() {
  loadPage('about-me');
});