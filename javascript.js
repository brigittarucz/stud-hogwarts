let baseLink = 'http://petlatkea.dk/2019/students1991.json';
let array1 = [];

function loadList(link) {
    fetch(link).then((e) => e.json()).then((data) => consoleLog(data));
}

function consoleLog(data) {
    data.forEach((element) => {
        array1.push(element);
    });

    let n = array1.length;

    for (let i = 0; i < n; i++) {
        let ul = document.getElementsByClassName(array1[i]["house"]);
        let li = document.createElement("li");
        li.textContent = array1[i]["fullname"];
        ul[0].appendChild(li);
    }

}

loadList(baseLink);