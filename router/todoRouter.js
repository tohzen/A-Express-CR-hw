const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;


let todos = [
    {
    id: "haf24jd",
    todo: "do laundry",
    done: "false"
    },
    {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true"
    }
    ]

    router.get("/", function (req, res) {
        res.json({ message: "todo!" });
      });
      router.get("/get-all-todos", function (req, res) {
        res.json({ payload: todos });
      });

      router.get("/get-todo-by-id/:id", function (req, res) {
        let foundToDoIndex = todos.findIndex((item) => item.id === req.params.id);
        if (foundToDoIndex === -1) {
          res.status(404).json({ message: "todo does not exist!" });
        } else {
          let foundToDo = todos[foundToDo];
          res.json({ payload: foundToDo });
        }
      });


        router.get("/get-todos-by-done/:done", function (req, res) {
          let newDoneArray = [];
          
          todos.forEach(function (item) {
            if (item.done === req.params.done) {
              newDoneArray.push(item);
            }
          });
          res.json(newDoneArray);
        });



      router.post("/create-new-todo", function (req, res) {
        //check if req.body keys are empty
        let { todo, done } = req.body;
        if (todo.length === 0 || done.length === 0) {
          res.status(500).json({ message: "cannot leave text area blank" });
        }
        //if it already exists
        let foundToDoIndex = todos.findIndex((item) => item.todo === req.body.todo);
        if (foundToDoIndex > -1) {
          res.status(500).json({ message: "Sorry, todo already exists!" });
        } else {
          let newToDoObj = {
            id: uuidv4(),
            todo,
            done,
          };
          todos.push(newToDoObj);
          res.json({ payload: todos });
        }
      });