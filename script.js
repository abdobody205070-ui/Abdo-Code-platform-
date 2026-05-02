
let courses = [];

function addCourse() {
  let title = document.getElementById("title").value;
  let link = document.getElementById("link").value;

  if (title === "" || link === "") {
    alert("Enter all data");
    return;
  }

  let course = {
    title: title,
    link: link
  };

  courses.push(course);
  displayCourses();

  document.getElementById("title").value = "";
  document.getElementById("link").value = "";
}

function displayCourses() {
  let list = document.getElementById("courseList");
  list.innerHTML = "";

  courses.forEach((c, index) => {
    list.innerHTML += `
      <div class="card">
        <h3>${c.title}</h3>
        <a href="${c.link}" target="_blank">Watch Course</a>
      </div>
    `;
  });
}
