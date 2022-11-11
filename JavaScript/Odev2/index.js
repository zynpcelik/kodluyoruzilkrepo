/* const alertTask = document.querySelector("#alertDiv")
const alertAppear = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Eksik Bilgi!</strong> LÜtfen bir yapılacak ekleyiniz.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
` */

function newElement(event) {
    event.preventDefault()
    let duty = document.querySelector("#task")
    if (duty.value) {
        addList(duty.value)
        duty.value = ""
    } else if (duty.value === "") {
       /*  $(document).ready(function(){
            $("#alertToast").click(function(){
              $('.toast').toast('show');
            });
          }); */
    }
}/* 
const li = `` */
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

  
