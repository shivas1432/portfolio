// Data for Frontend Projects
const frontendProjects = [
  {
      title: "RESUME BUILDER",
      languages: "HTML + CSS",
      description: "Sample website for resume building.",
      image: "https://i.imgur.com/Swlckqm.png",
      video: "P0NhN_4FcAg",
      website: "https://resumebuilderssk.netlify.app",
  },
  {
      title: "PRO HEALTH",
      languages: "HTML + CSS + JavaScript",
      description: "Health tracking information.",
      image: "https://imgur.com/l53zwrf.png",
      video: "lMaUKLqXt_Q",
      website: "https://prohealthssk.netlify.app",
  },
  {
      title: "MELODY PULSE",
      languages: "HTML + CSS + JavaScript",
      description: "Unique design for music player.",
      image: "https://imgur.com/mUGqOMU.png",
      video: "0tIzAk_gw7k",
      website: "https://musicplayerssk.netlify.app",
  },
  {
      title: "PORTFOLIO",
      languages: "HTML + CSS + JavaScript",
      description: "Sample portfolio of mine.",
      image: "https://imgur.com/aqOvcx5.png",
      video: "Gn2NJeW26Tk",
      website: "https://sampleportfoliossk.netlify.app",
  },
  {
      title: "SOLAR",
      languages: "HTML + CSS + JavaScript",
      description: "Sample solar company website to make contracts with solar electricity.",
      image: "https://imgur.com/ocaXLSy.png",
      video: "GwuPy4u9-EY",
      website: "https://solarssk.netlify.app",
  },
  {
      title: "RESTAURANT",
      languages: "HTML + CSS + JavaScript",
      description: "A restaurant website for reservation, online menu viewing, location tracking.",
      image: "https://imgur.com/bg2gSkJ.png",
      video: "hlFJpgoCrmY",
      website: "https://restaurantssk.netlify.app",
  },
  {
      title: "TRAVEL PLANNER",
      languages: "HTML + CSS + JavaScript",
      description: "A sample website for booking flights and safety insurance.",
      image: "https://imgur.com/s9Ddwc0.png",
      video: "YOUTUBE_VIDEO_ID_7",
      website: "https://travelplannerssk.netlify.app",
  },
  {
      title: "GAME STORE",
      languages: "HTML + CSS + JavaScript",
      description: "A sample playstore website for games.",
      image: "https://imgur.com/Lb0Bty1.png",
      video: "YwQ14oDNOtM",
      website: "https://gamestoressk.netlify.app",
  },
  {
      title: "CYBER JUNGLE",
      languages: "HTML + Bootstrap",
      description: "A unique way of website design.",
      image: "https://imgur.com/oIykZoR.png",
      video: "UuAE2ATZTiw",
      website: "https://cyberjunglessk.netlify.app",
  },
  {
      title: "WILDLIFE",
      languages: "HTML + CSS",
      description: "A sample website for wildlife blogs.",
      image: "https://imgur.com/fuOBDkL.png",
      video: "-oqwdIdGhdY",
      website: "https://wildlifeblogssk.netlify.app",
  }
];

// Function to create project elements
function createProjectElement(project) {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  projectContainer.style.display = 'none'; // Hide projects initially

  projectContainer.innerHTML = `
      <h2>${project.title}</h2>
      <p><a href="${project.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
      <p><strong>Languages:</strong> ${project.languages}</p>
      <div class="project-content">
          <img src="${project.image}" alt="Project Preview" class="project-image">
      </div>
      ${project.video ? `<button class="preview-button" onclick="toggleVideoPreview('${project.video}', this)">Preview</button>` : ''}
      <p>${project.description}</p>
  `;

  return projectContainer;
}

// Function to toggle video preview
function toggleVideoPreview(videoId, button) {
  const parent = button.closest('.project-container');
  const img = parent.querySelector('img');
  const videoContainer = parent.querySelector('.project-content');

  if (videoContainer.querySelector('iframe')) {
      videoContainer.innerHTML = ''; // Remove iframe
      img.style.display = 'block';  // Show image again
      button.textContent = 'Preview'; // Reset button text
  } else {
      videoContainer.innerHTML = `
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
      `;
      img.style.display = 'none';  // Hide image
      button.textContent = 'Close'; // Change button text
  }
}

// Function to populate frontend projects
function populateProjects() {
  const frontendWrapper = document.getElementById('frontend-projects');
  

  if (frontendWrapper) {
      frontendProjects.forEach(project => {
          const projectElement = createProjectElement(project);
          frontendWrapper.appendChild(projectElement);
      });

      // caution message after all projects
      const cautionMessage = document.createElement('div');
      cautionMessage.classList.add('caution-message');
      cautionMessage.innerHTML = `
        <p><strong>Caution:</strong> Only frontend projects are displayed due to the expiry of the free server hosting. For the complete source code and backend projects and react projects , please visit my <a href="https://github.com/shivas1432" target="_blank">GitHub</a>.</p>
      `;
      frontendWrapper.appendChild(cautionMessage);
  } else {
      console.error("Element with id 'frontend-projects' not found.");
  }
}

// Function to open the projects modal and show projects
function openProjectsModal() {
  const frontendWrapper = document.getElementById('frontend-projects');
  const projectContainers = frontendWrapper.querySelectorAll('.project-container');
  
  // Make all projects visible once the modal is opened
  projectContainers.forEach(container => {
      container.style.display = 'block';
  });

  document.getElementById("projectsModal").style.display = "flex";
}

// Function to close the projects modal
function closeProjectsModal() {
  document.getElementById("projectsModal").style.display = "none";
}

// Event listener to handle modal opening and closing
document.addEventListener("DOMContentLoaded", function() {
  populateProjects();

  // Open the projects modal when the "Projects" button is clicked
  document.getElementById("openProjects").addEventListener("click", openProjectsModal);

  // Close the projects modal when the "Close" button is clicked
  document.getElementById("closeProjectsBtn").addEventListener("click", closeProjectsModal);
});

document.addEventListener('DOMContentLoaded', () => {
    const roles = [
        'FULL STACK WEB DEVELOPER',
        'REACT DEVELOPER',
        'FRONTEND DEVELOPER',
        'BACKEND DEVELOPER'
    ];
    const roleText = document.getElementById('roleText');
    let roleIndex = 0;

    function changeRole() {
        
        roleText.classList.remove('focus-in-expand-fwd');

       
        setTimeout(() => {
            roleText.textContent = roles[roleIndex];
            roleText.classList.add('focus-in-expand-fwd');

          
            roleIndex = (roleIndex + 1) % roles.length;
        }, 50); 
    }

    // Change roles every 3 seconds
    setInterval(changeRole, 3000);
});

