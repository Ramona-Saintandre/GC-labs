**1/19/2019**

got this error message : 
import Todo
'Todo' is declared but its value is never read.ts(6133)
Module '"../../../../../../GC-labs/lab4-ang-todo/src/app/services/todo.service"' has no exported member 'Todo'.ts(2305)

per stack overflow: 
 suggested deleting node_modules folder and running npm install seems to solve the issue. Solved mine atlist 

 unistalled and reinstalled node - tried to lauch the server got this error:
 Module '"C:/projects/GC-labs/lab4-ang-todo/src/app/services/todo.service"' has no exported member 'Todo'.

2 import {Todo} from '../../services/todo.service'
          ~~~~

2. ./src/app/app.module.ts 22:12-28
"export 'HttpClientModule' was not found in './app.component' 

**1/22/2020**

recieved this error message when I changed the capitalization on the on the constructor in the todo.service 

Fixed the issue by also changing the casing on the this.todoService in the ngOnInit()

 ERROR in src/app/components/todos/todos.component.ts(19,23): error TS2551: Property 'TodoService' does not exist on type 'TodosComponent'. Did you mean 'todoService'?

 resolved http import issue from the other day . 
 I was not importing from the @angular/components 

 got a big mess when trying to setup the HTTP 
 
 Type 'void' is not assignable to type 'todo[]'.ts(2322)
 Expected 1-2 arguments, but got 0.ts(2554)
http.d.ts(1087, 12): An argument for 'url' was not provided.
