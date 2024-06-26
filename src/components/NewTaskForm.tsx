import { useState } from 'react'

const NewTaskForm = () => {
    const [todoValue, setTodoValue] = useState("");
    function handleInputChange(e:React.FormEvent<HTMLInputElement>) {
        setTodoValue(e.currentTarget.value)
    }
    return (
        <form action="submit">
            <input type="text" value={todoValue} onChange={(e: React.FormEvent<HTMLInputElement>):void => handleInputChange(e)} />
            <button type="submit" onClick={(e)=>{
                e.preventDefault();
                setTodoValue('');
                console.log("task :", todoValue);
            }}>Add New Task</button>
            <button type="reset" onClick={(e)=>{
                e.preventDefault();
                setTodoValue('');
            }}>Clear</button>
        </form>
    )
}

export default NewTaskForm