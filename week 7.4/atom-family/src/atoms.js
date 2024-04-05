import { atom, atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});

// previously in atom we do like this 
// const todoAtom = atom({
//   key:"todoAtom",
//   default :1
// })

// Upper part from line 4 with for loop use
// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: id => {
//     let foundTodo = null;
//     for(let i=0; i<TODOS.length;i++){
//       if(TODOS[i].id == id){
//         foundTodo = TODOS[i]
//       }
//     }
//     return foundTodo;
//   },
// });