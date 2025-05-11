const editIndex = localStorage.getItem('editIndex');
const titleField = document.getElementById('title');
const companyField = document.getElementById('company');
const descriptionField = document.getElementById('description');

// If editing, pre-fill form
if (editIndex !== null) {
  const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  const job = jobs[editIndex];

  if (job) {
    titleField.value = job.title;
    companyField.value = job.company;
    descriptionField.value = job.description;
  }
}

document.getElementById('jobForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const job = {
    title: titleField.value,
    company: companyField.value,
    description: descriptionField.value
  };

  let jobs = JSON.parse(localStorage.getItem('jobs') || '[]');

  if (editIndex !== null) {
    // Update existing job
    jobs[editIndex] = job;
    localStorage.removeItem('editIndex');
  } else {
    // Add new job
    jobs.push(job);
  }

  localStorage.setItem('jobs', JSON.stringify(jobs));
  window.location.href = "alljobs.html";
});

function clearEditState() {
    localStorage.removeItem('editIndex');
  }