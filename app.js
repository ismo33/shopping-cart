

let deleteBtn=Array.from(document.getElementsByClassName('delete'));
let cards = Array.from(document.querySelectorAll('.card'))
   

// for (let val of deleteBtn){
//     val.addEventListener("click",function(){
//         val.parentNode.remove()
//     })
// }

for(let i = 0 ; i< cards.length ;i++){
    deleteBtn[i].addEventListener('click' , function(){
        cards[i].remove()
        evaluateTotal();
    })
}

//plus button functionnality
let plusBtn=Array.from(document.getElementsByClassName('fa-circle-plus'));
for(let val of plusBtn){
    val.addEventListener('click',function(){
        let inputElement=val.parentElement.getElementsByClassName('quantity').item(0);
        //incerement quantity
        let quantity=parseInt(inputElement.getAttribute('value'),10);
        quantity++;
        inputElement.setAttribute('value',quantity);

        //update item total price
        let price=parseInt(val.parentElement.getElementsByClassName('price').item(0).innerHTML,10);
        let totalElement=val.parentElement.getElementsByClassName('total-price').item(0);
        totalElement.setAttribute('value',price*quantity)
       //update full total
       evaluateTotal();

    })
}

//minus button functionnality
let minusBtn=Array.from(document.getElementsByClassName('fa-circle-minus'));
for (let val of minusBtn){
    val.addEventListener('click',function(){
        
        let inputElem=val.parentElement.getElementsByClassName('quantity').item(0);
        let quantity=parseInt(inputElem.getAttribute('value'),10);
        if(quantity>0){
            quantity=quantity-1;
        inputElem.setAttribute('value',quantity);
        //update item total price
        let price=parseInt(val.parentElement.getElementsByClassName('price').item(0).innerHTML,10);
        let totalElement=val.parentElement.getElementsByClassName('total-price').item(0);
        totalElement.setAttribute('value',price*quantity)
            //update full total
            evaluateTotal();
        }
        
    })
}

//Total evaluation
function evaluateTotal(){
    let total=document.getElementById('display');
    let inputs=document.getElementsByClassName('total-price');
    
    let sum=0;
    for (let val of inputs){
        sum+=parseInt(val.getAttribute('value'),10);
    }
    total.setAttribute('value',sum);
}

//toggle like button 
let likeBtn=Array.from(document.getElementsByClassName('fa-regular'));
for (let val of likeBtn){
    val.addEventListener('click',function(){
        val.classList.toggle('fa-solid');
    })
}





