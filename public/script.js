let i1 = {
    name: 'Черный блокнот',
    imgSrc: 'img/product-1.jpg',
    price: 90
}
let i2 = {
    name: 'Зеленый блокнот',
    imgSrc: 'img/product-2.jpg',
    price: 120
}
let i3= {
    name: 'Синий блокнот',
    imgSrc: 'img/product-3.jpg',
    price: 100
}
let i4 = {
    name: 'Красный блокнот',
    imgSrc: 'img/product-4.jpg',
    price: 150
}
let i5 = {
    name: 'Черный блокнот',
    imgSrc: 'img/product-1.jpg',
    price: 90
}
let i6 = {
    name: 'Зеленый блокнот',
    imgSrc: 'img/product-2.jpg',
    price: 120
}
let i7= {
    name: 'Синий блокнот',
    imgSrc: 'img/product-3.jpg',
    price: 100
}
let i8 = {
    name: 'Красный блокнот',
    imgSrc: 'img/product-4.jpg',
    price: 150
}

let itemsArr = [i1, i2, i3, i4, i5, i6, i7, i8];

let sum = 0;

function init() {
    let catalog = document.getElementsByClassName("catalog")[0];
    let i, item;

    for(i = 0; i < itemsArr.length; i++) {
        item = document.createElement('div');
        item.setAttribute('class', 'catalog_item');
        item.appendChild(document.createTextNode(itemsArr[i].name));


        let itemImg = document.createElement('img');
        itemImg.src = itemsArr[i].imgSrc;

        item.appendChild(itemImg);

        item.appendChild(document.createTextNode(itemsArr[i].price + "\u20bd"));

        let itemBtn = document.createElement('button');
        itemBtn.textContent = "Добавить в корзину";
        itemBtn.setAttribute('id', 'btn_'+i);
        itemBtn.onclick = addItem;
        item.appendChild(itemBtn);

        catalog.appendChild(item);
    }
}

function addItem(obj) {
    let selectedItem = itemsArr[obj.target.id.split('_')[1]];
    let selectedItems = document.getElementsByClassName('selected-items')[0];
    let tr = selectedItems.insertRow(-1);
    let td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    td = tr.insertCell(-1);
    td.appendChild(document.createTextNode("Цена: "+selectedItem.price + "\u20bd"));

    sum += selectedItem.price;
    document.getElementsByClassName('sum')[0].textContent = "Сумма " + sum + "\u20bd";
}

window.onload = init;