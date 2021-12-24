var pNameInp=document.getElementById("pname");
var pCatInp=document.getElementById("pcategory");
var pPriceInp=document.getElementById("pprice");
var pDescInp=document.getElementById("pdescrabtion");
var tbody=document.getElementById('tbody');
var searchInp=document.getElementById("searchInp");
var updateBtn=document.getElementById('updateBtn');
var deleteBtn=document.getElementById('deletBtn');

if(localStorage.getItem('allProducts')==null){
    var productsList=[];

}
else{
    var productsList=JSON.parse(localStorage.getItem('allProducts'));

}

display();

//add product
function addProduct(){
    if(pNameInp.value!=''&& pCatInp.value!=''&&pCatInp.value!=''&&pDescInp.value !='')
   { 
    var product={
        productName:pNameInp.value,
        productcat:pCatInp.value,
        productPrice:pCatInp.value,
        productDesc:pDescInp.value


    };
   
        productsList.push(product);
    
        localStorage.setItem('allProducts',JSON.stringify(productsList));
        display();
        clearForm();
    }
    else{
        alert('fill all input')
    }
}
    
    //console.log(product);
   // console.log(productsList);


//Retrive (display)

function display(){
    var tr="";
    for(var i=0; i<productsList.length; i++){
        
        tr+=` <tr>
        <td>${i}</td>
        <td>${productsList[i].productName}</td>
        <td>${productsList[i].productcat}</td>
        <td>${productsList[i].productPrice}</td>
        <td>${productsList[i].productDesc}</td>
        <td><button id="updateBtn"class="btn btn-warning">update</button></td>
        <td> <button onclick=deletProduct(${i}); id="deletBtn"class="btn btn-danger">delet</button></td>
    </tr>`
    }

    tbody.innerHTML=tr;
    //console.log(tr);

}

//clear form
function clearForm(){
    pNameInp.value="";
    pCatInp.value="";
    pPriceInp.value="";
    pDescInp.value="";
}
//search
function search(){
    var tr="";
    for(var i=0; i<productsList.length; i++){
    if(productsList[i].productName.toLowerCase().includes(searchInp.value.toLowerCase())){
  
        
            tr+=` <tr>
            <td>${i}</td>
            <td>${productsList[i].productName}</td>
            <td>${productsList[i].productCat}</td>
            <td>${productsList[i].productPrice}</td>
            <td>${productsList[i].productDesc}</td>
            <td><button class="btn btn-warning">update</button></td>
            <td> <button class="btn btn-danger">delet</button></td>
        </tr>`
        }
    
        tbody.innerHTML=tr;
    
    }
   

}

function deletProduct(indexx){

    productsList.splice(indexx,1);
    display();
    localStorage.setItem('allProducts',JSON.stringify(productsList));
    
}

function vaildation(){
   var str= pNameInp.value;

   var regx= /^[a-z]{3,15}$/;
  
   if( !regx.test(str)){
    alert('minmam length is 3 ')
   }
   
}

