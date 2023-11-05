let ul = document.getElementById('ulElem');
let addEnd = document.getElementById('addEnd');
let addStr = document.getElementById('addStart');
let DeletStr = document.getElementById('DeletStart');
let DeletEND =document.getElementById('DeletEnd');
let bom = document.getElementById('KimChenIn');

addEnd.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.classList.add('List-item');
    li.innerHTML = "Item-End";
    ul.append(li);
    DeletEND.addEventListener('click',()=>{
        li.remove();
    })
});
addStr.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.classList.add('List-item');
    li.innerHTML = "Item-Start";
    ul.prepend(li);
    DeletStr.addEventListener('click',()=>{
        li.remove();
    })
});

bom.addEventListener('click',()=>{
    document.body.innerHTML = 'BOOM';
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    document.body.style.fontSize = '600px'

})