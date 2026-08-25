const heading = document.querySelector("h2");
heading.addEventListener('click',(e)=>
{
    alert(e.target.innerText);
})