
fetch('Text.txt')
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            let paragraph = document.getElementsByClassName('small-text');
            const line=data.split('\n');
            const firstline = line[1];
            for(i=0;i<paragraph.length;i++){
            paragraph[i].textContent=firstline;
            paragraph[i].style.fontSize ='0.8em';
            paragraph[i].style.marginInline='3.1em';
            }
            let news = document.getElementById('pop-news');
            news.textContent=data;
        })
        .catch(function(error){
            console.error("Error:",error);
        })
let heading3 = document.querySelectorAll('h3');
heading3.forEach((h3,j)=>{
    h3.textContent = `Новость ${j+1}`;
})  

let buttons = document.querySelectorAll('button');
buttons.forEach((button,i)=>{
    button.textContent ='Отрыть всплывающее окно';
    button.addEventListener("click",function(event)
    {
        event.stopPropagation();
        popupFunction(i);
    });
})
let popup = document.getElementsByClassName("pop-up");
let main = document.getElementsByClassName('main');
function popupFunction(i){
    let headNews = document.getElementById("pop-head");
    headNews.innerHTML=`Новость ${i+1}`;    
    popup[0].style.display = 'flex';    
    main[0].style.opacity = `20%`;
}
function closePopup(event) {
    if (!popup[0].contains(event.target)) {
      popup[0].style.display = 'none';
      main[0].style.opacity = '100%';
    }
}
document.addEventListener('click',closePopup);

