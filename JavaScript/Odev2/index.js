

function newElement(event) {
    event.preventDefault()
    let duty = document.querySelector("#task")
    if (duty.value) {
        addList(duty.value)
        $('.success').toast('show')
        duty.value = ""
    } else if (duty.value === "") {
        $('.error').toast('show')
    }
}
const addList = (item) => {
    let ulDOM = document.querySelector("#list")
    const liDOM = `
    <li> 
        ${item}
        <div style="display:flex; flex-direction:row;">
            <input type="checkbox" class="tik" onclick="lineThrough(event)"/>  
            <button onclick="deleteList(event)" class="btn btn-outline-danger" ><i class="fa-regular fa-trash-can"></i></button>
        </div>
    </li>`
    ulDOM.innerHTML += liDOM
}
const lineThrough = (event) => {
    event.target.checked ? event.target.parentNode.parentNode.classList.add("checked") 
    : event.target.parentNode.parentNode.classList.remove("checked") ;
}
const deleteList = (event) => {
    event.target.parentNode.parentNode.remove()
}

  
