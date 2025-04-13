
function openChat() {
    help_button.classList.add("hidden");
    chat_container.classList.remove("hidden");
}

function closeChat() {
    help_button.classList.remove("hidden");
    chat_container.classList.add("hidden");
}

function onScroll(){
    const nav_bottom=document.querySelector("#nav-bottom");
    if (window.scrollY>32){
        nav_bottom.classList.add("scrolled");
    } else{
        nav_bottom.classList.remove("scrolled");
    }
}

function changeSRC(event){
    const image = event.currentTarget;
    new_src=image.dataset.alt;
    image.dataset.alt=image.src;
    image.src=new_src;
}

function showTag(event){
    const container = event.currentTarget;
    const text= container.dataset.tag;
    if(text){
        const tag= document.createElement('div');
        tag.textContent= text;
        tag.classList.add("tag");
        container.appendChild(tag);
    }
}

function hideTag(event){
    const container = event.currentTarget;
    const tag= container.querySelector(".tag");
    if(tag){
        tag.remove();
    }
}

// main

window.addEventListener("scroll", onScroll); //evento che rileva lo scorrimento della finestra

const help_button = document.querySelector("#help-button");
const chat_container= document.querySelector("#chat-container");
const minimize_button = document.querySelector("#minimize");
const close_button = document.querySelector("#close");

help_button.addEventListener("click", openChat);
minimize_button.addEventListener("click", closeChat);
close_button.addEventListener("click", closeChat);

const images_outlet = document.querySelectorAll("#outlet img");
for(let i=0; i<images_outlet.length; i++){
    images_outlet[i].addEventListener("mouseenter", changeSRC);
    images_outlet[i].addEventListener("mouseleave", changeSRC);
}

const container_collection = document.querySelectorAll("#collection .photo-container");
for(let i=0; i<container_collection.length; i++){
    container_collection[i].addEventListener("mouseenter", showTag);
    container_collection[i].addEventListener("mouseleave", hideTag);
}

