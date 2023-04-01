
const form =document.getElementById('addForm');
const itemList=document.getElementById('items');
const filter =document.getElementById('filter');
//create eventListner
form.addEventListener('submit',addItems);

//delete event
itemList.addEventListener('click',removeItem);

//filterItems 
filter.addEventListener('keyup',filterItem);

//create function

function addItems(e){

    e.preventDefault();

    //get input value
    const newItem =document.getElementById('item').value;
    //create new li element
    const li =document.createElement('li');
    
    //Add classname
    li.className='list-group-item';

    //add textNode with input value
    li.appendChild(document.createTextNode(newItem));

   

    //create deleteBtn
    const deletebtn = document.createElement('button');

    //add ClassName
    deletebtn.className='btn btn-danger btn-sm float-right delete';

    //append textnode
    deletebtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deletebtn);

    //append li to itemlist
    itemList.appendChild(li);

}



    //Delete Item in list

    function removeItem(e){
        e.preventDefault();

        if(e.target.classList.contains('delete')){
            if(confirm('Are You Sure')){
                const li =e.target.parentElement;
                itemList.removeChild(li);
            }
        }

    }

    //filterItem List 

    function filterItem(e){

        //convert all text in lowerCase 
        const text =e.target.value.toLowerCase();
        //get list
        const items = itemList.getElementsByTagName('li');

        //convert into array
        Array.from(items).forEach(function(item){

            const itemName =item.firstChild.textContent;

            if(itemName.toLowerCase().indexOf(text)!=-1){
                item.style.display='block';
            }
            else{
                item.style.display='none';
            }

        })
       
    }