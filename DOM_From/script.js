function makeTable() {
    let foods = []
    let food1 = document.getElementById("checkbox1")
    if (food1.checked) {
          foods.push(food1.value);
    }
    let food2 = document.getElementById("checkbox2")
    if (food2.checked) {
          foods.push(food2.value);
    }
    let food3 = document.getElementById("checkbox3")
    if (food3.checked) {
          foods.push(food3.value);
    }
    let food4 = document.getElementById("checkbox4")
    if (food4.checked) {
          foods.push(food4.value);
    }
    let food5 = document.getElementById("checkbox5")
    if (food5.checked) {
          foods.push(food5.value);
    }
    if (foods.length > 1) {
          let table = document.getElementById("myTable");
          let row = table.insertRow(0);
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);
          let cell4 = row.insertCell(3);
          let cell5 = row.insertCell(4);
          let cell6 = row.insertCell(5);
          let cell7 = row.insertCell(6);
          let cell8 = row.insertCell(7);
          cell1.innerHTML = document.querySelector("#fname").value
          cell2.innerHTML = document.querySelector("#lname").value
          cell3.innerHTML = document.querySelector("#address").value
          cell4.innerHTML = document.querySelector("#pin").value
          cell5.innerHTML = document.querySelector("#gender").value
          cell6.innerHTML = foods
          cell7.innerHTML = document.querySelector("#state").value
          cell8.innerHTML = document.querySelector("#country").value
          let frm = document.getElementById('form');
          frm.reset()
    }
    else {
          alert("Must choose at least 2 Foods")
    }
}