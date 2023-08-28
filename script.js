const input=document.querySelector('.input')
const container = document.querySelector('.container')
const btn=document.querySelector('.btn')
const list=document.querySelector('#list')
const cancelbtn = document.querySelector(".cancelbtn")


btn.onclick = () => {
    if(input.value.length === 0){
        alert("Kindly enter a task")
    }else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        list.appendChild(li)
        
        let span = document.createElement('span')
        span.innerHTML = `<button class='cancelbtn' >X</button>`
        li.appendChild(span)
        input.value = ""


        li.onclick = (event) => {
            // console.log(event.target.parentNode.parentNode);
            const list = event.target.parentNode.parentNode;
            list.remove()
            
        }
    }
}





    
