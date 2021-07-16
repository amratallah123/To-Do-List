const toggleBtn = document.getElementsByClassName("icon-resp");
const btn = document.getElementsByName("fas");
const sidebar = document.getElementsByClassName("sidebar");
const hideUl = document.querySelectorAll("all-ul li");

const list = document.getElementsByClassName("list");
const list1 = document.getElementById("cList1");
const list2 = document.getElementById("cList2");
const list3 = document.getElementById("cList3");
const counter = document.getElementsByClassName("counter");

toggleBtn[0].addEventListener("click", function () {
  sidebar[0].classList.toggle("show-sidebar");
});
// set default counter valu
counter[0].innerHTML = `<h4>${list[0].childElementCount}<h4>`;
counter[1].innerHTML = `<h4>${list[1].childElementCount}<h4>`;
counter[2].innerHTML = `<h4>${list[2].childElementCount}<h4>`;

// active sidebar
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
// add and delete
let addBtn = document.getElementsByClassName("addBtn");
let lists = document.getElementsByClassName("list");
let i = 0;

addBtn[0].addEventListener("click", function () {
  lists[0].innerHTML += `<div class="element" id="${i}">
                <input type="text" placeholder="start task" class="elName" />

                <button class="trash1" id="${i}" onclick="remove1(this.id)">
                  <i class="fas fa-trash"></i>
                </button>
                <button class="add"><i class="fas fa-plus"></i></button>
                <button class="btnel">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>`;
});
let j = 0;
addBtn[1].addEventListener("click", function () {
  lists[1].innerHTML += `<div class="element" id="${j}">
                <input type="text" placeholder="start task" class="elName" />

                <button class="trash2" id="${j}" onclick="remove2(this.id)">
                  <i class="fas fa-trash"></i>
                </button>
                <button class="add"><i class="fas fa-plus"></i></button>
                <button class="btnel">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>`;
});
let k = 0;

addBtn[2].addEventListener("click", function () {
  lists[2].innerHTML += `<div class="element" >
                <input type="text" placeholder="start task" class="elName" />

                <button class="trash3"  onclick="remove3(${k})">
                  <i class="fas fa-trash"></i>
                </button>
                <button class="add"><i class="fas fa-plus" onclick="adding(this.id)"></i></button>
                <button class="btnel">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>`;
  k++;
});

const trash1 = document.getElementsByClassName("trash1");
const trash2 = document.getElementsByClassName("trash2");
const trash3 = document.getElementsByClassName("trash3");

function remove1(index) {
  trash1[index].parentNode.remove();
  i--;
}
function remove2(index) {
  trash2[index].parentNode.remove();
  j--;
}
function remove3(index) {
  trash3[index].parentNode.remove();
}
