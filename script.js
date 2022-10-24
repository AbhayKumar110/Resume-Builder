// 

function addNewWField()
{
    // 
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('weField');
    newNode.setAttribute('placeholder','Enter here')

    let weOb = document.getElementById('we')
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb)
}



// function deleteNewWField()
// {
//     let elem = document.getElementById('weField');
//     document.body.appendChild(elem);
//     return false;
// }


function addField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('eqField');
    newNode.setAttribute('placeholder','Enter here')

    let aqOb = document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');

     aqOb.insertBefore(newNode, aqAddButtonOb)
}

// generat

function generateCV(){
    let nameField = document.getElementById("namefield").value;

    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML=nameField;

    document.getElementById('EmailT').innerHTML=document.getElementById("UserId").value;

    document.getElementById('ContactT').innerHTML=document.getElementById("Contact").value;

    document.getElementById('AddressT').innerHTML=document.getElementById("Address").value;

    document.getElementById('fbT').innerHTML=document.getElementById("FbField").value;

    document.getElementById('inT').innerHTML=document.getElementById("InstaField").value;

    document.getElementById('LkT').innerHTML=document.getElementById("LinkField").value;

    document.getElementById('gitT').innerHTML=document.getElementById("GitField").value;


    document.getElementById('ObjectiveT').innerHTML=document.getElementById("ObjectiveField").value;


    // work Experience

    let wes=document.getElementsByClassName('weField');

    let str='';

    for(let a of wes){
        str = str +   `<li> ${a.value} </li>`;
    }

    document.getElementById('weT').innerHTML = str;


    //academic

    let aqs=document.getElementsByClassName('eqField');

    let str1='';

    for(let a of aqs){
        str1 = str1 +   `<li> ${a.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    //code for Seeting

    let file=document.getElementById('imgField').files[0]

    console .log(file);

    let reader=new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    // set image to templet

    reader.onloadend = function(){
        document.getElementById("imgT").src=reader.result;
    }

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';


}


//printCV

function printCV(){
    window.print();
}
