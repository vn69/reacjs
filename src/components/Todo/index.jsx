import { Button, Input, InputGroup, Label, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
import {addJob, checkJob, checkAllJob, clearJobs} from "./todoSlide"
import { useEffect, useRef, useState } from "react";
import "./Todo.scss";

export default function Todo() {
  const todoList = useSelector((state) => state.todo.todoList)
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState("")
  const inputRef = useRef()
  
  useEffect(() => {
    // effect
    console.log("call APi")
    localStorage.setItem("to-do-list", JSON.stringify(todoList))
    return () => {
      // cleanup
    }
  }, [todoList])
  
  const addNewJob = () => {
    dispatch(addJob(inputText))
    setInputText("")
    inputRef.current.focus()
  }
  const onEnterKey = (e) => {
    e.keyCode === 13 && addNewJob()
  }
  const onCheckAll = (e) => {
    const check = e.target.checked
    dispatch(checkAllJob(check))
  }

  return <div className="container todo-list">

    <div className="row justify-content-center">
      <div className="col-sm-8">
        <h2 className="title">to-do-list (use redux-toolkit)</h2>
        <InputGroup>
          <Input 
            innerRef={inputRef} 
            value={inputText} 
            onChange={e => setInputText(e.target.value)}
            onKeyUp={onEnterKey}
            />
            <Button 
              color="primary"
              onClick={addNewJob}
              disabled={!inputText}
              >
              ADD
            </Button>
        </InputGroup>

        <ListGroup numbered>
          {todoList.map(item => 
            <ListGroupItem key={item.id}>
              <Label check for={item.id+""}>
                {item.name}
              </Label>
              <Input 
                type="checkbox" 
                checked={item.isComplete} 
                id={item.id}
                onChange={() => dispatch(checkJob(item.id))}
                />
            </ListGroupItem>
            )}
        </ListGroup>
        <div className="mt-10">
          <Input type="checkbox" id="all" onChange={onCheckAll}/>
          <Label className="ml-10" check for="all">
            All
          </Label>
          <Button
            color="light"
            onClick={() => dispatch(clearJobs(""))}
            disabled={todoList.findIndex(item => item.isComplete === true) === -1}
          >
            Clear
          </Button>
        </div>
      
      </div>
    </div>
  </div>
  
}
