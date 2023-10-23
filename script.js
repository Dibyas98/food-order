function getRandomTime(){
    return Math.floor(Math.random() * 5000) + 2000 //random time between 2 to 7 sec
}

function getRandomOrderId(){
    return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
}


order=document.querySelector('.orderbtn');
console.log(order);
order.addEventListener('click', function(){
    let selecteditem=[];
    let fooditem=document.getElementsByName('food');
    fooditem.forEach((ele)=>{
        if(ele.checked){
            selecteditem.push(ele.value);
        }
    });

    if(selecteditem.length==0){
        alert("please order your items")
        return;
    }

    order.disabled = true;
    let food_img=document.querySelector('.food-img'), oder_Id= document.querySelector('.oderid'), ordervalue= document.querySelector('.ordervalue');

    const promis= new Promise(function( res,re){
        setTimeout(()=>{
            res()
            },getRandomTime());
    });

    promis.then(function(){
        ordervalue.textContent=getRandomOrderId();
        oder_Id.style.display="block";


        const foodToShow = selecteditem[Math.floor(Math.random() * selecteditem.length)];

        switch(foodToShow){
            case 'Burger':
                food_img.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                break;
            case 'Fries':
                food_img.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                break;
            case 'Drink':
                food_img.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                break;
            case 'Pizza':
                food_img.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                break;
            case 'waffles':
                food_img.src = 'https://images.unsplash.com/photo-1634215751955-5bdb12db6c0c?auto=format&fit=crop&q=80&w=1782&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                break;
            default:
                food_img.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        }

        food_img.style.display = 'block';
        order.disabled = false;
        document.querySelector('.fo').reset();
    })


});

