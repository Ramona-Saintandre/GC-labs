1/19/2019

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