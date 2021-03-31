let users = [];
let count = 1;
let getIndex;

function User(l, p, e) {
  this.login = l;
  this.pass = p;
  this.email = e;
}
let getAll = s => document.getElementById(s);
getAll("addUser").onclick = function () {
  let login = getAll("login").value;
  let pass = getAll("pass").value;
  let email = getAll("email").value;
  let user = new User(login, pass, email);
  users.push(user);
  getAll("form").reset();
  Render();
  console.log("good");
}


function Render() {
  let element = "";
  for (i = 0; i < users.length; i++) {
    element += "<tr>";
    element += `<th>${i+1}</th>`;
    for (key in users[i]) {
      element += `<td>${users[i][key]}</td>`;
    }

    element += `<td><button class='btn btn-warning' id="item${count}" onclick="Edit(${i})" style='type: button; width: 100%; height: 30px'>Edit</button></td>`;
    element += `<td><button class='btn btn-danger' id="item${count}" onclick="Delete(${i})" style='type: button; width: 100%; height: 30px'>Delete</button></td>`;
    element += '</tr>';
  }
  getAll("tbody").innerHTML = element;

}

function Delete(index) {
  users.splice(index, 1)
  Render()
}

function Edit(ind) {
  getAll("login").value = users[ind].login;
  getAll("email").value = users[ind].email;
  getAll("pass").value = users[ind].password;
  getAll("addUser").style.display = 'none';
  getAll("saveUser").style.display = 'block';
  getIndex = ind;
  Render()
}

getAll("saveUser").onclick = function () {
  let user = {
    login: getAll("login").value,
    password: getAll("pass").value,
    email: getAll("email").value,
  };
  users.splice(getIndex, 1, user);
  Render()
  getAll("form");
  getAll("addUser").style.display = 'block';
  getAll("saveUser").style.display = 'none';
}