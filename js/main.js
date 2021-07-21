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

let i = 0;

// addBtn[0].addEventListener("click", function () {
//   lists[0].innerHTML += `<div class="element" id="${i}">
//                 <input type="text" placeholder="start task" class="elName" />

//                 <button class="trash1" id="${i}" onclick="remove1(this.id)">
//                   <i class="fas fa-trash"></i>
//                 </button>
//                 <button class="add"><i class="fas fa-plus"></i></button>
//                 <button class="btnel">
//                   <i class="fas fa-ellipsis-h"></i>
//                 </button>
//               </div>`;
// });
// let j = 0;
// addBtn[1].addEventListener("click", function () {
//   lists[1].innerHTML += `<div class="element" id="${j}">
//                 <input type="text" placeholder="start task" class="elName" />

//                 <button class="trash2" id="${j}" onclick="remove2(this.id)">
//                   <i class="fas fa-trash"></i>
//                 </button>
//                 <button class="add"><i class="fas fa-plus"></i></button>
//                 <button class="btnel">
//                   <i class="fas fa-ellipsis-h"></i>
//                 </button>
//               </div>`;
// });
// let k = 0;
// addBtn[2].addEventListener("click", function () {
//   let x = (Math.random() * 100000).toFixed(0);
//   debugger;
//   lists[2].innerHTML += `<div class="element" >
//                 <input type="text" placeholder="start task" class="elName"   />

//                 <button class="trash3" id="${x}" onclick="remove3(${this.id})">
//                   <i class="fas fa-trash"></i>
//                 </button>
//                 <button class="add"><i class="fas fa-plus" onclick="adding(this.id)"></i></button>
//                 <button class="btnel">
//                   <i class="fas fa-ellipsis-h"></i>
//                 </button>
//               </div>`;
// });

// const trash1 = document.getElementsByClassName("trash1");
// const trash2 = document.getElementsByClassName("trash2");
// const trash3 = document.getElementsByClassName("trash3");

// function remove1(index) {
//   trash1[index].parentNode.remove();
//   i--;
// }
// function remove2(index) {
//   trash2[index].parentNode.remove();
//   j--;
// }
// function remove3(index) {
//   debugger;
//   trash3[index].parentNode.remove();
// }

let randomm;
let id = 0;
let Doing = new Map();
let NoStatus = new Map();
let Done = new Map();
let addBtn = document.getElementsByClassName("addBtn");
let lists = document.getElementsByClassName("list");
var boxData = document.querySelector(".box-data");
var main = document.getElementsByTagName("main");
var btnsavTask = document.querySelector(".save-task");
var data = document.querySelector(".data");
var closeData = document.querySelector(".fa-times-circle");
let taskName;

var drawEvent = document.createEvent("Event");
drawEvent.initEvent("draw", true, true);

addBtn[0].addEventListener("click", function () {
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");

  btnsavTask.setAttribute("id", "fortodo");
  var savTaskTodo = document.getElementById("fortodo");
  data.value = "";
  savTaskTodo.onclick = function () {
    randomm = parseInt(Math.random() * 100000);

    while (id == randomm) {
      randomm = parseInt(Math.random() * 100000);
    }
    taskName = data.value;
    id = randomm;
    NoStatus.set(id, taskName);
    counter[0].innerHTML = `<h4>${NoStatus.size}<h4>`;
    boxData.classList.toggle("show-box-data");
    main[0].classList.toggle("filter");
    draw1(lists[0], id, taskName);
  };
});
addBtn[1].addEventListener("click", function () {
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");

  btnsavTask.setAttribute("id", "fortodo");
  var savTaskTodo = document.getElementById("fortodo");
  data.value = "";
  savTaskTodo.onclick = function () {
    randomm = parseInt(Math.random() * 100000);

    while (id == randomm) {
      randomm = parseInt(Math.random() * 100000);
    }
    taskName = data.value;
    id = randomm;
    Doing.set(id, taskName);
    counter[1].innerHTML = `<h4>${Doing.size}<h4>`;
    boxData.classList.toggle("show-box-data");
    main[0].classList.toggle("filter");
    draw2(lists[1], id, taskName);
  };
});
addBtn[2].addEventListener("click", function () {
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");

  btnsavTask.setAttribute("id", "fortodo");
  var savTaskTodo = document.getElementById("fortodo");
  data.value = "";
  savTaskTodo.onclick = function () {
    randomm = parseInt(Math.random() * 100000);

    while (id == randomm) {
      randomm = parseInt(Math.random() * 100000);
    }
    taskName = data.value;
    id = randomm;
    Done.set(id, taskName);
    counter[2].innerHTML = `<h4>${Done.size}<h4>`;
    boxData.classList.toggle("show-box-data");
    main[0].classList.toggle("filter");
    draw3(lists[2], id, taskName);
  };
});

function remove1(id) {
  NoStatus.delete(id);
  const element = document.getElementById(id);
  element.remove();
  counter[0].innerHTML = `<h4>${NoStatus.size}<h4>`;
}

function remove2(id) {
  Doing.delete(id);
  const element = document.getElementById(id);
  element.remove();
  counter[1].innerHTML = `<h4>${Doing.size}<h4>`;
}

function remove3(id) {
  Done.delete(id);
  const element = document.getElementById(id);
  element.remove();
  counter[2].innerHTML = `<h4>${Done.size}<h4>`;
}
closeData.onclick = function () {
  boxData.classList.toggle("show-box-data");
  main[0].classList.toggle("filter");
};

let search = document.getElementById("confirm-search");

let draw1 = (list, id, taskName) => {
  list.innerHTML += `<li class="element" id="${id}">
    <p type="text" class="elName">${taskName}</p>

    <button class="trash3" onclick="remove1(${id})">
      <i class="fas fa-trash"></i>
    </button>
  
    <button>
      <i class="fas fa-ellipsis-h" id="btn-state" onclick="changeState1(${id})"></i>
    </button>
  </li>`;
};
let draw2 = (list, id, taskName) => {
  list.innerHTML += `<li class="element" id="${id}">
    <p type="text" class="elName">${taskName}</p>

    <button class="trash3" onclick="remove2(${id})">
      <i class="fas fa-trash"></i>
    </button>
  
    <button>
      <i class="fas fa-ellipsis-h" id="btn-state" onclick="changeState2(${id})"></i>
    </button>
  </li>`;
};
let draw3 = (list, id, taskName) => {
  list.innerHTML += `<li class="element" id="${id}">
    <p type="text" class="elName">${taskName}</p>

    <button class="trash3" onclick="remove3(${id})">
      <i class="fas fa-trash"></i>
    </button>
  
    <button>
      <i class="fas fa-ellipsis-h" id="btn-state" onclick="changeState3(${id})"></i>
    </button>
  </li>`;
};
let searchInputValue = document.getElementById("search");
search.addEventListener("click", function (e) {
  const filterResults1 = Array.from(NoStatus).filter((element) =>
    element[1].includes(searchInputValue.value)
  );
  const filterResults2 = Array.from(Doing).filter((element) =>
    element[1].includes(searchInputValue.value)
  );
  const filterResults3 = Array.from(Done).filter((element) =>
    element[1].includes(searchInputValue.value)
  );
  lists[0].innerHTML = ``;
  filterResults1.map((res) => {
    draw1(lists[0], res[0], res[1]);
  });
  lists[1].innerHTML = ``;
  filterResults2.map((res) => {
    draw2(lists[1], res[0], res[1]);
  });
  lists[2].innerHTML = ``;
  filterResults3.map((res) => {
    draw3(lists[2], res[0], res[1]);
  });
});
let closeSearch = document.getElementsByClassName("close-search");
closeSearch[0].addEventListener("click", function () {
  lists[0].innerHTML = ``;
  NoStatus.forEach((element, key) => {
    draw1(lists[0], key, element);
  });
  lists[1].innerHTML = ``;
  Doing.forEach((element, key) => {
    draw2(lists[1], key, element);
  });
  lists[2].innerHTML = ``;
  Done.forEach((element, key) => {
    draw3(lists[2], key, element);
  });
});

let selectBox = document.getElementsByClassName("select-box");
function changeState1(id) {
  selectBox[0].classList.toggle("show-select-box");
  main[0].classList.toggle("filter");
  let closeSelectBox = document.getElementById("close-select-box");
  closeSelectBox.onclick = function () {
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
  };
  let toDone = document.getElementsByClassName("to-done");
  let toDoing = document.getElementsByClassName("to-doing");

  toDone[0].onclick = function () {
    let element = NoStatus.get(id);
    Done.set(id, element);
    NoStatus.delete(id);
    lists[2].innerHTML = ``;
    Done.forEach((element, key) => {
      draw3(lists[2], key, element);
    });
    lists[0].innerHTML = ``;
    NoStatus.forEach((element, key) => {
      draw1(lists[0], key, element);
    });
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
    counter[0].innerHTML = `<h4>${list[0].childElementCount}<h4>`;
  };
  toDoing[0].onclick = function () {
    let element = NoStatus.get(id);
    Doing.set(id, element);
    NoStatus.delete(id);
    lists[1].innerHTML = ``;
    Doing.forEach((element, key) => {
      draw3(lists[1], key, element);
    });
    lists[0].innerHTML = ``;
    NoStatus.forEach((element, key) => {
      draw1(lists[0], key, element);
    });
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
    counter[0].innerHTML = `<h4>${list[0].childElementCount}<h4>`;
  };
}
function changeState2(id) {
  selectBox[0].classList.toggle("show-select-box");
  main[0].classList.toggle("filter");
  let closeSelectBox = document.getElementById("close-select-box");
  closeSelectBox.onclick = function () {
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
  };
  let toDone = document.getElementsByClassName("to-done");

  let toNoStatus = document.getElementsByClassName("to-no-status");
  toDone[0].onclick = function () {
    let element = Doing.get(id);
    Done.set(id, element);
    Doing.delete(id);
    lists[2].innerHTML = ``;
    Done.forEach((element, key) => {
      draw3(lists[2], key, element);
    });
    lists[1].innerHTML = ``;
    Doing.forEach((element, key) => {
      draw2(lists[1], key, element);
    });
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
    counter[1].innerHTML = `<h4>${list[1].childElementCount}<h4>`;
  };
  toNoStatus[0].onclick = function () {
    let element = Doing.get(id);
    NoStatus.set(id, element);
    Doing.delete(id);
    lists[1].innerHTML = ``;
    Doing.forEach((element, key) => {
      draw2(lists[1], key, element);
    });
    lists[0].innerHTML = ``;
    NoStatus.forEach((element, key) => {
      draw1(lists[0], key, element);
    });
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
    counter[1].innerHTML = `<h4>${list[1].childElementCount}<h4>`;
  };
}

function changeState3(id) {
  selectBox[0].classList.toggle("show-select-box");
  main[0].classList.toggle("filter");
  let closeSelectBox = document.getElementById("close-select-box");
  closeSelectBox.onclick = function () {
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
  };
  let toDoing = document.getElementsByClassName("to-doing");
  let toNoStatus = document.getElementsByClassName("to-no-status");
  toDoing[0].onclick = function () {
    let element = Done.get(id);
    Doing.set(id, element);
    Done.delete(id);
    lists[2].innerHTML = ``;
    Done.forEach((element, key) => {
      draw3(lists[2], key, element);
    });
    lists[1].innerHTML = ``;
    Doing.forEach((element, key) => {
      draw2(lists[1], key, element);
    });
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
  };
  toNoStatus[0].onclick = function () {
    let element = Done.get(id);
    NoStatus.set(id, element);
    Done.delete(id);
    lists[2].innerHTML = ``;
    Done.forEach((element, key) => {
      draw3(lists[2], key, element);
    });
    lists[0].innerHTML = ``;
    NoStatus.forEach((element, key) => {
      draw1(lists[0], key, element);
    });
    main[0].classList.toggle("filter");
    selectBox[0].classList.toggle("show-select-box");
  };
}
