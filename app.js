const list = document.getElementById('list');
const Names = document.getElementById('userName');
let USERS = [];
Names.addEventListener('input',(event)=>{
    const value = event.target.value.toLowerCase()
    const filter = USERS.filter((user)=>{
        return user.name.toLowerCase().includes(value)
    })
    reg(filter)
})
async function person(){
    list.style.fontSize = '30px'
    list.style.color = 'white'
    list.style.textAlign = 'center'
    list.innerHTML = 'LOADING... USERS'
    try{
          const resp = await fetch('https://jsonplaceholder.typicode.com/users')//Ошибок тоже показывает
          const data =  await resp.json()
          setInterval(()=>{
            USERS = data
            reg(data)
          },2000)
    }catch(err){
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function reg(users = []){
    if(users.length === 0){
        list.innerHTML = "Такого пользователя не существует"
    }else{
        const html = users.map(toHtml).join('')
        list.innerHTML = html
    }

}
function toHtml(user){
    return ` 
    <li li class="listGroup">${user.name}</li>
    `
}
person()