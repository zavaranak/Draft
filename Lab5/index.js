
var json = {
    short:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem!Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit?',
    long:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem!Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium."
};

for(i=0;i<paragraph.length;i++){
    paragraph[i].textContent=json.short;
    paragraph[i].style.fontSize ='0.8em';
    paragraph[i].style.marginInline='3.1em';
    }
let news = document.getElementById('pop-news');
news.textContent=json.long;
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

