import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
interface todoData {
    id:unknown,
    data:string,
}

function TodoPage() {
    const [todo, setTodo] = useState<todoData[]>([{id:1,data:"sss"}]);
    const [text, setText] = useState<string>("");

    const handletodoChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
       try {
        setText(e.target.value)
       } catch (error) {
        console.log(error);
       }
    }

    const addTodo = (e:React.FormEvent<HTMLFormElement>): void =>{
     try {
        e.preventDefault()
        let id:unknown = uuidv4();
        let data : todoData = {id,data:text};
        setTodo([...todo,data]);
        setText("");
     } catch (error) {
        console.log(error);
     }
    }
    
  return (
    <>
    <div>TodoPage</div>
    <div>
      <form onSubmit={(e)=>{addTodo(e)}}>
      <label>Add todo Data</label><br/>
      <input type="text" value={text} onChange={(e)=>{handletodoChange(e)}} name="todoData" id="todoData" placeholder="I want to complete this one ..."/>
      <br/><input className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" name="Submit" />
      </form>
    </div>
    {
        todo.map((data,inx)=>{
            return <div key={inx}>{data.data}</div>
        })
    }
    </>
  )
}

export default TodoPage