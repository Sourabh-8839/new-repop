
const form=document.querySelector("#my-form");

const msg=document.querySelector('.msg');

const inputName = document.querySelector('#name');

const emailId=document.querySelector('#email');

const phone =document.querySelector('#phone');

const ul=document.querySelector('#users');




form.addEventListener('submit',onSubmit);

function onSubmit(e){

    e.preventDefault();
    
    if(inputName.value==='' || emailId.value==='' ||phone.value ==='' ){

        msg.classList.add("error");
        msg.innerHTML="please fill the fields";

        setTimeout(()=>msg.remove(),3000);
    }
    else{

        const li =document.createElement('li');

        const btn=document.createElement('button');

        li.appendChild(document.createTextNode(`${inputName.value} :${phone.value},`));
        li.appendChild(document.createTextNode(`${emailId.value}`))
        btn.innerHTML='Delete';
        btn.style.margin='0px 2rem';

      
        li.appendChild(btn);
        ul.appendChild(li);

        let myobj ={
            name:inputName.value,
            email:emailId.value,
            phone:phone.value,
        }

        btn.onclick= () =>{
            if(confirm('Are you sure')){
            localStorage.removeItem(myobj.email);
            ul.removeChild(li);
            }
        }
        

        localStorage.setItem(emailId.value,JSON.stringify(myobj));

        inputName.value='';
        emailId.value='';
        phone.value ='';

    }

    

}






