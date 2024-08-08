let title = document.querySelector('.header');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function() {
    if(window.navigator.onLine){
        online();
    }else{
        offline();
    }
}

window.addEventListener('online', function(){
    online();
});

window.addEventListener('offline', function(){
    offline();
});

reload.onclick = function(){
    window.location.reload();
}

function online(){
    title.innerHTML = 'متصل الان';
    title.style.color = 'green';
    ul.style.visibility = 'hidden';
    reload.style.visibility = 'hidden';
}

function offline(){
    title.innerHTML = 'غير متصل الان';
    title.style.color = 'red';
    ul.style.visibility = 'visible';
    reload.style.visibility = 'visible';
}
