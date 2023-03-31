var arrow = document.getElementById('arrow');
window.onscroll = function(){
    var scroll = window.scrollY;
    if(scroll > 300){
        arrow.classList.add('active');
    }else{
        arrow.classList.remove('active');
    }
}
