const accessKey="CXYq1jxS7wlHHbJ9Qk6KXilTv7T1lvB1-NxcXz9vO5k";

const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-input");
const showMore=document.getElementById("show-more-button");



let openShopping=document.querySelector('.shopping');
let closeShopping=document.querySelector('.closeShopping');
let list=document.querySelector('.list');
let listCard=document.querySelector('.listCard');
let body=document.querySelector('body');
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})



let listCards="";
let inputData= "";
let page = 1;

//function for search
async function searchImages(){
    inputData=inputEl.value;
    // dynamic url
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
    const response=await fetch(url);
    const data=await response.json();

    const results=data.results;

    if(page===1){
        list.innerHTML="";
    }
    results.forEach((result ,key)=>{
        let newDiv=document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src="${result.urls.small}" alt="result.alt_description">
        <div class="title"> ${result.alt_description}</div>
        
        <button onclick="addToCard()"> Add to Card </button>
        `;
        list.appendChild(newDiv);
    })
    page++;
    if(page > 1){
        showMore.style.display="block";
}
}
//search button
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages()
})

//show more button
showMore.addEventListener("click",()=>{
   
    searchImages()
})
// add to cart function
function addToCard(){
 alert("added to cart successful");
}
