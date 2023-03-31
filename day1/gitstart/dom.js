
//Dom Selectors 
// // const items=document.getElementsByClassName('list-group-item');

// // console.log(items[2]);

// // items[2].style.backgroundColor="green";


// // for(let i=0;i<items.length;i++){
// //     items[i].style.fontWeight="Bold";
// // }

// // const header =document.getElementsByTagName('li');

// // console.log(header);


// const title =document.querySelector('.title');

// title.style.color='cyan';

// const item =document.querySelector('.list-group-item');

// // console.log(item);

// item.style.backgroundColor='rgba(183, 99, 225, 0.445)';
// item.style.fontWeight='700';


// const inputbtn =document.querySelector('input[type=submit]');

// // console.log(inputbtn);

// inputbtn.value='Send';


// const input =document.querySelector('input');

// // console.log(input);
// input.placeholder='please Fill input field';


// const secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='#9ad19a'

// const thirdItem =document.querySelector('.list-group-item:nth-child(3)');

// thirdItem.style.display='none';


// const titles =document.querySelectorAll('.title');

// for (let i=0;i<titles.length;i++){
//     titles[i].style.color='cyan';
// }
// console.log(titles);


// traversing in Dom


let itemList = document.querySelector('#items');

// Parent Node 

// console.log(itemList.parentNode);

// itemList.parentNode.style.background='#ccc';

// console.log(itemList.parentNode.parentNode);

// ParentElement similar to parentNode

// console.log(itemList.parentElement);

// itemList.parentElement.style.background='#ccc';

// console.log(itemList.parentElement.parentElement);

//ChildNodes not suggested to use 
// console.log(itemList.childNodes);

// itemList.childNodes[1].style.backgroundColor='#f4f4f4';

//Children

// console.log(itemList.children);

//firstChild
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.background='yellow';

//lastChild
// console.log(itemList.lastChild);

//lastElemnetChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.background='#ccc';
// itemList.lastElementChild.textContent='hello 4';


//nextSiblings
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);


//Create Element 

const newDiv =document.createElement('div');

//addClassName
newDiv.className='about';

//addId
newDiv.id='about1';

//setAttribues
newDiv.setAttribute('title','text');

//createText Node
const newDivText =document.createTextNode('HEllo');

//Add text to div
newDiv.appendChild(newDivText); 

// Add div in Dom
const main=document.querySelector('#main');

const ul =document.querySelector('#main #items');

main.insertBefore(newDiv,ul);

newDiv.style.fontSize='30px';

const head =document.createElement('span')

const newtext =document.createTextNode('Hello');

head.append(newtext);

const container =document.querySelector('header .container');

const h1 =document.querySelector('header h1');

console.log(container);
container.insertBefore(head,h1);

// console.log(newDiv);