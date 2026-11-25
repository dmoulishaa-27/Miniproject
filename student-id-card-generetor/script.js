const form = document.getElementById("idForm");
const printBtn = document.getElementById("printBtn");

form.addEventListener("submit", function (event) {
event.preventDefault();

document.getElementById("cardName").innerText = document.getElementById("name").value;
document.getElementById("cardRoll").innerText = document.getElementById("roll").value;
document.getElementById("cardCourse").innerText = document.getElementById("course").value;
document.getElementById("cardYear").innerText = document.getElementById("year").value;
document.getElementById("cardPhone").innerText = document.getElementById("phone").value;
document.getElementById("cardEmail").innerText = document.getElementById("email").value;

const file = document.getElementById("photo").files[0];
if (file) {
document.getElementById("cardPhoto").src = URL.createObjectURL(file);
}
});

printBtn.addEventListener("click", function () {
window.print();
});
