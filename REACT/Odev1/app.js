import axios from "axios";

const getData = (user_id) =>{
    return new Promise (async (resolve, reject) => {
       
        const { data:users } = await axios ("https://jsonplaceholder.typicode.com/users/" + user_id)
        const { data:post } = await axios ("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)
        if(user_id === 1){
            resolve({users, post});
        }
        reject()
    })
}

getData(1)
.then((data)=>console.log(data))
.catch((e) => console.log("Bir sorun oluştu!"))