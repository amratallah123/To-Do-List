const toggleBtn = document.getElementsByClassName("icon-resp");
const btn = document.getElementsByName("fas");
const sidebar = document.getElementsByClassName("sidebar");
const hideUl = document.querySelectorAll("all-ul li");
const addBtn = document.getElementsByClassName("addBtn");
const list = document.getElementsByClassName("list");
const list1 = document.getElementById("cList1");
const list2 = document.getElementById("cList2");
const list3 = document.getElementById("cList3");
const counter = document.getElementsByClassName("counter");

toggleBtn[0].addEventListener("click", function () {
  sidebar[0].classList.toggle("show-sidebar");
});
// وضع القيمة الأفترالاضية للكاونتر
counter[0].innerHTML = `<h4>${list[0].childElementCount}<h4>`;
counter[1].innerHTML = `<h4>${list[1].childElementCount}<h4>`;
counter[2].innerHTML = `<h4>${list[2].childElementCount}<h4>`;

addBtn[0].addEventListener("click", function () {
  list[0].innerHTML += `<input type="text" placeholder="new task" />`;
  // زيادة الكاونتر مع كل مرة يضاف فيها عنصر
  counter[0].innerHTML = `<h4>${list[0].childElementCount}<h4>`;
});
addBtn[1].addEventListener("click", function () {
  list[1].innerHTML += `<input type="text" placeholder="new task" />`;
  counter[1].innerHTML = `<h4>${list[1].childElementCount}<h4>`;
});
addBtn[2].addEventListener("click", function () {
  list[2].innerHTML += `<input type="text" placeholder="new task" />`;
  counter[2].innerHTML = `<h4>${list[2].childElementCount}<h4>`;
});

// تفعيل لإالسايد بار
const done = document.getElementById("done");
const doing = document.getElementById("doing");
const noStatus = document.getElementById("no-status");
const allTasks = document.getElementById("all-tasks");
noStatus.addEventListener("click", function () {
  list2.classList.add("hide-list");
  list3.classList.add("hide-list");
  list1.classList.remove("hide-list");
  list1.classList.add("change-width");
  list2.classList.remove("change-width");
  list3.classList.remove("change-width");
  if (window.innerWidth <= 1200) {
    sidebar[0].classList.toggle("show-sidebar");
  }
});
done.addEventListener("click", function () {
  list1.classList.add("hide-list");
  list2.classList.add("hide-list");
  list3.classList.remove("hide-list");
  list3.classList.add("change-width");
  list1.classList.remove("change-width");
  list2.classList.remove("change-width");
  if (window.innerWidth <= 1200) {
    sidebar[0].classList.toggle("show-sidebar");
  }
});
doing.addEventListener("click", function () {
  list1.classList.add("hide-list");
  list3.classList.add("hide-list");
  list2.classList.remove("hide-list");
  list2.classList.add("change-width");
  list1.classList.remove("change-width");
  list3.classList.remove("change-width");
  if (window.innerWidth <= 1200) {
    sidebar[0].classList.toggle("show-sidebar");
  }
});

allTasks.addEventListener("click", function () {
  list1.classList.remove("hide-list");
  list2.classList.remove("hide-list");
  list3.classList.remove("hide-list");
  list2.classList.remove("change-width");
  list1.classList.remove("change-width");
  list3.classList.remove("change-width");
  if (window.innerWidth <= 1200) {
    sidebar[0].classList.toggle("show-sidebar");
  }
});
