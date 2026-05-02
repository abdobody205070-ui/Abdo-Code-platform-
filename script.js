let courses = [
  {
    title: "HTML Course",
    link: "https://www.youtube.com"
  },
  {
    title: "JavaScript Course",
    link: "https://www.youtube.com"
  }
];

function displayCourses() {
  let list = document.getElementById("courseList");
  list.innerHTML = "";

  courses.forEach(c => {
    list.innerHTML += `
      <div class="card">
        <h3>${c.title}</h3>
        <a href="${c.link}" target="_blank">Watch</a>
      </div>
    `;
  });
}

displayCourses();

/* Login System */
function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    alert("Login Success ✅");
    document.getElementById("loginBox").style.display = "none";
  } else {
    alert("Wrong Data ❌");
  }
}
