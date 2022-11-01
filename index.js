
const arrData = [];

function f() {
    let inputValue = document.getElementById("domTextElement").value;
    arrData.push(inputValue);
    show(arrData);
    document.getElementById("domTextElement").innerHTML = "";
}

const deleteList = (data) => {
    arrData.splice(data, 1);
    console.log(arrData)
    show(arrData)
}

const show = (data) => {
    let list = `<ol class="list-group">
    ${data.map((item, ind) =>
        (`<li class="list-group-item" key=${ind} onclick="deleteList(${ind})">${item}</li>`)
    ).join('')
        }
         </ol>`
    document.getElementById("list").innerHTML = list;
}



