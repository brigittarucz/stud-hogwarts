let baseLink = "http://petlatkea.dk/2019/students1991.json";
let array1 = [];

function loadList(link) {
    fetch(link).then(e => e.json()).then(data => consoleLog(data));
}

function consoleLog(data) {
    data.forEach(element => {
        array1.push(element);
        console.log(array1);
    });
};

loadList(baseLink);