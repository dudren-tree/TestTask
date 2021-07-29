let data = 
{"columns":[{"code":"Острів","name":"Острів","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
{"code":"Локація","name":"Локація","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
{"code":"Текст","name":"Текст","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
{"code":"Дата","name":"Дата","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"DateTime"},
{"code":"Коментар","name":"Коментар","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"}],
"rows":[{"values":["Труханов",
"Київ",
" столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.",
"2020-12-12T00:00:00","Тестове"]}]}

let fullArr = Object.values(data)
let firtsArr = fullArr[0];
let secondArr = fullArr[1][0].values;
let divParent = document.createElement('div');
divParent.id = 'parent'
document.body.appendChild(divParent);

function arrElm (arr) {
    let date;
    for (let i = 0; i < arr.length ; i +=1 ) {
        if(arr[i].code ){
            fillDiv(arr[i].name, secondArr[i], arr[i].dataType);
        } 
    }
}

function fillDiv (elm, obj, dataType) {
    let divChild = document.createElement('div');
    let p = document.createElement('p');
    if(dataType === "DateTime") {
        p.innerHTML = obj.split('').reverse().join("");
    } else {
        p.innerHTML = obj
    }
    divChild.id = elm;
    divChild.innerHTML = elm;
    divChild.style.paddingRight = '20px'
    divChild.appendChild(p)
    divParent.appendChild(divChild);
}

arrElm(firtsArr);
arrElm(secondArr);

