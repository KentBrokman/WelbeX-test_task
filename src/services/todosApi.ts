import axios from "axios";





export const TodosApi = {
    async fecthTodos() {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return data
    }
}