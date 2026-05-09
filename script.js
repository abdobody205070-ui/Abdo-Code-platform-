// فتح وإغلاق قائمة التسجيل
const modal = document.getElementById("loginModal");
const btn = document.querySelector(".login-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// التعامل مع بيانات النموذج (بشكل مبدئي)
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    alert("تم استلام بياناتك! (هنا يتم الربط مع قاعدة البيانات مستقبلاً)");
    modal.style.display = "none";
};
