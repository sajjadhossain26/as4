// ---------------------
// Job Data (8 jobs)
// ---------------------
let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Develop high-performance mobile apps using React Native for global users.",
    status: "NOT_APPLIED",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Design modern marketing websites with strong focus on UI and UX.",
    status: "NOT_APPLIED",
  },
  {
    id: 3,
    companyName: "DataNest Labs",
    position: "Frontend Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Build scalable dashboards and reusable UI components.",
    status: "NOT_APPLIED",
  },
  {
    id: 4,
    companyName: "CloudHarbor",
    position: "Tailwind UI Developer",
    location: "Remote",
    type: "Contract",
    salary: "$70/hr - $95/hr",
    description: "Transform Figma designs into responsive Tailwind layouts.",
    status: "NOT_APPLIED",
  },
  {
    id: 5,
    companyName: "GreenCart",
    position: "Junior Frontend Developer",
    location: "Toronto, CA",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description: "Improve ecommerce UI and optimize checkout experience.",
    status: "NOT_APPLIED",
  },
  {
    id: 6,
    companyName: "FinSpark",
    position: "Dashboard UI Developer",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$105,000 - $145,000",
    description: "Build interactive financial dashboards and analytics tools.",
    status: "NOT_APPLIED",
  },
  {
    id: 7,
    companyName: "EduNova",
    position: "Frontend Developer",
    location: "Berlin, DE",
    type: "Full-time",
    salary: "€45,000 - €62,000",
    description: "Create engaging educational platform interfaces.",
    status: "NOT_APPLIED",
  },
  {
    id: 8,
    companyName: "HealthBridge",
    position: "Web UI Engineer",
    location: "London, UK",
    type: "Full-time",
    salary: "£55,000 - £80,000",
    description: "Develop secure and accessible healthcare web portals.",
    status: "NOT_APPLIED",
  },
];

// ---------------------
// DOM Elements
// ---------------------
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

const tabAll = document.getElementById("tab-all");
const tabInterview = document.getElementById("tab-interview");
const tabRejected = document.getElementById("tab-rejected");

const allContainer = document.getElementById("allContainer");
const interviewContainer = document.getElementById("interviewContainer");
const rejectedContainer = document.getElementById("rejectedContainer");

// ---------------------
// Functions
// ---------------------

function updateDashboard() {
  totalCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(
    (j) => j.status === "INTERVIEW",
  ).length;
  rejectedCount.textContent = jobs.filter(
    (j) => j.status === "REJECTED",
  ).length;

  updateTabCount();
}

function updateTabCount() {
  if (tabAll.checked) tabCount.textContent = jobs.length;
  if (tabInterview.checked)
    tabCount.textContent = jobs.filter((j) => j.status === "INTERVIEW").length;
  if (tabRejected.checked)
    tabCount.textContent = jobs.filter((j) => j.status === "REJECTED").length;
}

function emptyState(message) {
  return `
    <div class="text-center py-16 text-center">
      <div class="text-4xl mb-3 text-center m-auto">
       <img class="w-[80px] m-auto" src="./img/uploadimg.png" alt="">
      </div>
      <h3 class="font-semibold text-lg">${message}</h3>
      <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
    </div>
  `;
}

function createCard(job) {
  const statusText =
    job.status === "INTERVIEW"
      ? "Interview"
      : job.status === "REJECTED"
        ? "Rejected"
        : "Not Applied";

  const statusClass =
    job.status === "INTERVIEW"
      ? "btn-success"
      : job.status === "REJECTED"
        ? "btn-error"
        : "btn-outline";
  return `
    <div class="card bg-base-100  border-b-amber-50 shadow-sm mb-4">
      <div class="card-body">
        <div class="flex justify-between">
          <div>
            <h3 class="font-bold text-lg">${job.companyName}</h3>
            <p class="text-sm text-gray-500">${job.position}</p>
          </div>
          <button onclick="deleteJob(${job.id})" class="btn btn-sm btn-ghost border border-slate-500 w-[30px] h-[30px] rounded-full p-4"><i class="fa-regular fa-trash-can text-[17px]"></i></button>
        </div>

        <p class="text-sm mt-2">${job.location} • ${job.type} • ${job.salary}</p>
           <div class="status-btn">
           <button class="btn btn-sm ${statusClass}">${statusText}</button></div>
        <p class="mt-3 text-sm">${job.description}</p>

        <div class="mt-4 flex gap-2">
          <button onclick="setStatus(${job.id},'INTERVIEW')" 
            class="btn btn-sm ${job.status === "INTERVIEW" ? "btn-success" : "btn-outline"}">
            Interview
          </button>

          <button onclick="setStatus(${job.id},'REJECTED')" 
            class="btn btn-sm ${job.status === "REJECTED" ? "btn-error" : "btn-outline"}">
            Rejected
          </button>
        </div>
      </div>
    </div>
  `;
}

function render() {
  // ALL
  allContainer.innerHTML =
    jobs.length === 0
      ? emptyState("No jobs available")
      : jobs.map(createCard).join("");

  // INTERVIEW
  const interviewJobs = jobs.filter((j) => j.status === "INTERVIEW");
  interviewContainer.innerHTML =
    interviewJobs.length === 0
      ? emptyState("No jobs available")
      : interviewJobs.map(createCard).join("");

  // REJECTED
  const rejectedJobs = jobs.filter((j) => j.status === "REJECTED");
  rejectedContainer.innerHTML =
    rejectedJobs.length === 0
      ? emptyState("No jobs available")
      : rejectedJobs.map(createCard).join("");

  updateDashboard();
}

function setStatus(id, status) {
  jobs = jobs.map((job) => (job.id === id ? { ...job, status } : job));
  render();
}

function deleteJob(id) {
  jobs = jobs.filter((job) => job.id !== id);
  render();
}

// ---------------------
// Tab Change
// ---------------------
tabAll.addEventListener("change", updateTabCount);
tabInterview.addEventListener("change", updateTabCount);
tabRejected.addEventListener("change", updateTabCount);

// Initial Load
render();
