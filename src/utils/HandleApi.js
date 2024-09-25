import axios from 'axios'

const baseUrl = "https://todo-server-r45y.onrender.com"
var uid =localStorage.getItem("todolistStackId");

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}


const addToDo = (text,done, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text , id:uid,done })
        .then((data) => {
            console.log(data);
            getAllToDo(setToDo)
            setText("")
        })
        .catch((err) => console.log(err))

}


const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}
const doneTask = (toDoId, done, setToDo) => {

    axios
        .post(`${baseUrl}/done`, { _id: toDoId, done })
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo ,doneTask}