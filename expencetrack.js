console.log("EXPENCE TRACKER APP");

let btn=document.getElementById('btn');

let name=document.getElementById('name');
let lastname=document.getElementById('lastname');
let email=document.getElementById('email');
let number=document.getElementById('number');


// console.log(name.value);
// console.log(lastname.value);
// console.log(email.value);
// console.log(number.value);

var container=document.getElementById('trackList');

btn.addEventListener('click',(e)=>{

    let obj={
        name:name.value,
        lastname:lastname.value,
        email:email.value,
        number:number.value
    }

    console.log(`${obj.name}   ${obj.lastname} ${obj.email} `);

    // set the data into local storage----------------------------

    localStorage.setItem(`${name.value}`,JSON.stringify(obj));


    let getObjData=JSON.parse(localStorage.getItem(`${name.value}`));

    // let itemDetail=document.querySelector('.trackdetail ul li');
    // itemDetail.innerHTML=`<li>  ${obj.name}   ${obj.lastname} ${obj.email}</li>`;

    // create list details--------------------------------------------

    let li=document.createElement('li');
    li.style.marginLeft='20px'
    li.classList.add('list-item');

    // let info
    let info=document.createTextNode(`  ${getObjData.name}    ${getObjData.lastname}   ${getObjData.email}   ${getObjData.number}`);

    li.append(info);

    // delete deleteButton-----------------------------

    let deleteButton=document.createElement('button');
    deleteButton.style.marginLeft='50px'
    deleteButton.classList.add('delete');
    let delData=document.createTextNode('DELETE')
    deleteButton.append(delData)
    li.append(deleteButton);


    // edit button-----------------------
    let editButton=document.createElement('button');
    editButton.style.marginLeft='50px'
    editButton.classList.add('edit');
    let editData=document.createTextNode('EDIT')
    editButton.append(editData)
    li.append(editButton);

    container.appendChild(li);


    deleteButton.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete')){
            if(confirm("ARE YOU SURE FOR DELETE ITEM")){
                        localStorage.removeItem(`${getObjData.name}`);
                        li.remove(e.target.appendChild);
        }else{
            console.log('some went wrong!!');
        }
    }
    });

    editButton.addEventListener('click',(e)=>{
        if(e.target.classList.contains('edit')){
            if(confirm("ARE YOU SURE FOR UPDATE ITEM")){

                // name=name.value;
                        // localStorage.removeItem(`${name.value}`);
                        // li.remove(e.target.appendChild);
        }else{
            console.log('some went wrong!!');
        }
    }
    });




});


// let delbtn=document.getElementsByClassName('delete');
// delbtn.addEventListener('click',(event)=>{
//     if(confirm("ARE YOU SURE FOR DELETE ITEM")){
//         localStorage.removeItem(`${name.value}`);
//         li.removeItem(event.target.appendChild);

//     }
// // });



