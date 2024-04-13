let fetchButton = document.querySelector("#buttonId") ;
let todos = document.querySelector("#todo")
let items = [] ;
let userObject = {}

const createBlock = () => {
    Object.keys(userObject).map((item) => {
        let block = document.createElement("div")
        let heading =  document.createElement("h3");
        block.appendChild(heading)
        block.setAttribute("id", item);
        heading.innerHTML = item
        userObject[item].map((todo) => {
            const input = document.createElement("input") ;
            input.setAttribute("type", "checkbox");
            input.setAttribute("value", todo.completed);
            input.setAttribute("id", todo.id);
            input.addEventListener("click", () => {
                todo.completed = !todo.completed
            })
            const label = document.createElement("label")
            label.setAttribute("for", todo.id)
            label.innerHTML = todo.todo 
            block.appendChild(input)
            block.appendChild(label)
            block.appendChild(document.createElement('br'))
        })
        todos.appendChild(block)
    })
}

fetchButton.addEventListener('click', () => {
    const processItems = () => {
        items.map((e) => {
            if(e.userId in userObject == false){
                userObject[e.userId] = []
            }
            userObject[e.userId].push(e)
        })
        createBlock() ;
    }
    const fetchItems =  () => {
        fetch('https://dummyjson.com/todos?limit=10&skip=80')
        .then((e) => {
            if(!e.ok) {
                throw new Error("Error in fetching...")
            }
            return e
        })
        .then((e) => e.json())
        .then((e) => {
            items = e.todos
            return
        })
        .then(() => {
            console.log(items)
            processItems()
        })
        .catch((e) => console.log(e))
    }
    fetchItems()
})



// response by CHAT-GPT
// async function fetchAndDisplayTodos() {
//     try {
//       const response = await fetch('https://dummyjson.com/todos?limit=10&skip=80');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
      
//       const todosByUser = {};
  
//       // Organize todos by user
//       data.todos.forEach(todo => {
//         if (!todosByUser[todo.userId]) {
//           todosByUser[todo.userId] = [];
//         }
//         todosByUser[todo.userId].push(todo);
//       });

  
//       // Display todos in separate blocks for each user
//       const container = document.getElementById('container');
//       for (const userId in todosByUser) {
//         const userTodos = todosByUser[userId];
//         const userBlock = document.createElement('div');
//         userBlock.classList.add('user-block');
  
//         const title = document.createElement('h2');
//         title.textContent = `User ${userId}`;
//         userBlock.appendChild(title);
  
//         const todoList = document.createElement('ul');
//         userTodos.forEach(todo => {
//           const listItem = document.createElement('li');
//           listItem.textContent = todo.todo;
//           if (todo.completed) {
//             listItem.classList.add('completed');
//           }
//           todoList.appendChild(listItem);
//         });
//         userBlock.appendChild(todoList);
  
//         container.appendChild(userBlock);
//       }
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   }
  
//   // Call the function to fetch and display todos
//   fetchAndDisplayTodos();
  

// async function exampleAsyncFunction() {
//     console.log('Start');
  
//     // First await, takes 20 seconds
//     await new Promise(resolve => setTimeout(resolve, 10000));
//     console.log('After 10 seconds');
  
//     // this waits for Additional 10 seconds
//     await new Promise(resolve => setTimeout(resolve, 5000));
//     console.log('After 5 seconds');
  
//     // Other code after awaits
//     console.log('End');
//   }
  
//   // Call the async function
//   exampleAsyncFunction();

// ------------------------------------------------------

// important concept for async

// const p1 = new Promise( (resolve , reject ) => {
//     setInterval(() => {
//         resolve ("Promise p1 resolve");
//     }, 10 * 1000);
// })

// async function solve(){
     
//     await p1.then( (data) => {
//         console.log(data);
//     });
    

//      console.log("after p1");

//      await p2.then( (data) => {
//          console.log(data);
//      });

//      console.log("after p2");
// }

// solve();

// setTimeout(() => {
//     console.log("After function");
// }, 15 * 1000);


// const p2 = new Promise( (resolve , reject ) => {
//     console.log("It came");
//     setInterval(() => {
//         resolve ("Promise return for 2");
//     }, 5 * 1000);
// })