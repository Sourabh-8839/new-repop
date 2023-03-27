
const form=document.querySelector(".my-form");

const msg=document.querySelector('#msg');

const inputName = document.querySelector('#name');

const emailId=document.querySelector('#email');

const ul=document.querySelector('.items');

const btn=document.querySelector('#btn');


form.addEventListener('submit',onSubmit);

function onSubmit(e){

    e.preventDefault();
    
    if(inputName.value==='' || emailId.value==='' ){

        msg.classList.add("error");
        msg.innerHTML="please fill the fields";

        setTimeout(()=>msg.remove(),3000);
    }
    else{

        const li =document.createElement('li');

        li.appendChild(document.createTextNode(`${inputName.value} : ${emailId.value}`));

        ul.appendChild(li);

        inputName.value='';
        emailId.value='';

    }

}

btn.addEventListener('mouseover',(e)=>{

    document.querySelector('body').style.background="cyan";
})
btn.addEventListener('mouseout',(e)=>{

    document.querySelector('body').style.background="red";
})

const header=document.getElementById('header');

console.log(header.textContent);
console.log(header.innerText);
console.log(header);

console.log(header.typeOf);