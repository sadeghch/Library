const books = [];

const inputval = document.getElementById("input-item");
const tbody = document.getElementById("tbody-item");

function addbook() {
  if (inputval.value == "") {
    alert("نام کتاب را وارد کنید");
  }
  if (inputval.value != "") {
    books.push(inputval.value);
    resetall();
  }
}

function delebook(index) {
  if (confirm("ایا قصد حذف کتاب را دارید")) {
    if (index != undefined) {
      books[index] = undefined;
    } else {
      let code = inputval.value;
      books[code - 1] = undefined;
    }
  }
  resetall();
}

function resetall() {
  let tbodyresult = "";
  for (let index = 0; index < books.length; index++) {
    if (books[index] == undefined) continue;
    tbodyresult +=
      "<tr><td>" +
      (index + 1) +
      "</td><td>" +
      books[index] +
      "</td><td>" +
      "<a class='remove' onclick='delebook(" +
      index +
      ")'>x</a>" +
      "</td></tr>";
  }
  tbody.innerHTML = tbodyresult;
}
