const jobsContainer = document.getElementById('jobsContainer');
const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');

if (jobs.length === 0) {
  jobsContainer.innerHTML = "<p>No jobs posted yet.</p>";
} else {
  jobs.forEach((job, index) => {
    const jobCard = document.createElement('div');
    jobCard.className = "card";
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <h4>${job.company}</h4>
      <p>${job.description}</p>
      <button class="applyBtn" onclick="applyJob(${index})">Apply</button>
    `;
    jobsContainer.appendChild(jobCard);
  });
}

function editJob(index) {
  localStorage.setItem('editIndex', index);
  window.location.href = "postjob.html";
}
