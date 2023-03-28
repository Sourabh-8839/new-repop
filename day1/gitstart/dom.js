
// const items=document.getElementsByClassName('list-group-item');

// console.log(items[2]);

// items[2].style.backgroundColor="green";


// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight="Bold";
// }

// const header =document.getElementsByTagName('li');

// console.log(header);


const title =document.querySelector('.title');

title.style.color='cyan';

const item =document.querySelector('.list-group-item');

// console.log(item);

item.style.backgroundColor='rgba(183, 99, 225, 0.445)';
item.style.fontWeight='700';


const inputbtn =document.querySelector('input[type=submit]');

// console.log(inputbtn);

inputbtn.value='Send';


const input =document.querySelector('input');

// console.log(input);
input.placeholder='please Fill input field';


const secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='#9ad19a'

const thirdItem =document.querySelector('.list-group-item:nth-child(3)');

thirdItem.style.display='none';


const titles =document.querySelectorAll('.title');

for (let i=0;i<titles.length;i++){
    titles[i].style.color='cyan';
}
console.log(titles);

