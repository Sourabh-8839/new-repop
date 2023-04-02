
const form=document.querySelector("#my-form");

const msg=document.querySelector('.msg');

const inputName = document.querySelector('#name');

const emailId=document.querySelector('#email');

const ul=document.querySelector('#users');

const btn=document.querySelector('.btn');


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

        let myobj ={
            name:inputName.value,
            email:emailId.value,
        }

    
        localStorage.setItem('user',JSON.stringify(myobj));
        
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



let myobj2={
    name:'sourabh',
    age:25
}

let myobj_serialized =JSON.stringify(myobj);

localStorage.setItem('obj1',myobj_serialized);
localStorage.setItem('obj2',JSON.stringify(myobj2));
console.log(localStorage);