let myBtn = document.querySelector('#myBtn');
let input__list = document.querySelector('#input__list');
let input__price = document.querySelector('#input__price');
let select__category = document.querySelector('#select__category');
let list = document.querySelector('#toList');
let legend__price = document.querySelector('#legend__price');

let purcashes = {};

 myBtn.addEventListener('click', (evt) => {
    purcashes.name = input__list.value;
    purcashes.prise = input__price.value;
    purcashes.category = select__category.value;

    console.log(purcashes)

    let elementList = document.createElement('li');
    list.append(elementList);
    elementList.className = 'elementList';

    let info = document.createElement('div');
    elementList.append(info);
    info.className = 'info';

    let info1 = document.createElement('div');
    info.append(info1);
    info1.textContent = purcashes.name;

    let info2 = document.createElement('div');
    info.append(info2);
    info2.textContent = purcashes.category;

    let info3 = document.createElement('div');
    info.append(info3);
    info3.textContent = `${purcashes.prise}₽`

    let deletes = document.createElement('div');
    elementList.append(deletes);
    deletes.className = 'deletes';

    let item = document.createElement('i');
    deletes.append(item);
    item.className = 'fa-solid  fa-xmark cursor'

    deletes.addEventListener('click', (event) => {
        let target = event.target;
        let parent = elementList.closest('.elementList');
        list.removeChild(parent)
        console.log(target)
    })
    input__list.value = '';
    input__price.value = '';
}) 

