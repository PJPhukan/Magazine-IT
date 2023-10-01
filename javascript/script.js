let toggle = document.querySelector('.toggle')
let benifits_round = document.querySelector('.benifits-round')
let icon = document.querySelector('.icon')
let menu = document.querySelector('.menu')
toggle.onclick = function () {
    menu.classList.toggle('active')
    toggle.classList.toggle('toggle-hover')
    benifits_round.classList.toggle('.ds-none')
    icon.classList.toggle('.ds-block')
    
}
toggle.addEventListener('mouseover',()=>{
    toggle.classList.add('toggle-hover')
    benifits_round.style.display="none";
    icon.style.display="inline-block";
})
toggle.addEventListener('mouseout',()=>{
    toggle.classList.remove('toggle-hover')
    benifits_round.style.display ="inline-block";
    icon.style.display="none";
    // benifits_round.style.color="blue";
})
