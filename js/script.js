const myForm = document.getElementById("myForm")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    inputNewTask = document.getElementById("newTask")

    let listItemContainer = document.createElement("div")
    listItemContainer.classList.add("itemContainer")
    let newListItem = document.createElement("li")
    newListItem.innerHTML = `
    <li class="task">${inputNewTask.value}</li>
    <button class="deleteButton">DELETE</button>
    `
    const myList = document.getElementById("toDoList")
    myList.appendChild(listItemContainer)
    listItemContainer.appendChild(newListItem) // Append my new To-Do task

    const li = document.querySelectorAll(".task")
    li.forEach (li => {
        li.addEventListener("click", () => {
            li.style.textDecorationLine = "line-through"
            li.style.color = "black"
        })
    })

    const allDeleteButtons = document.querySelectorAll(".deleteButton") // Delete function
    allDeleteButtons.forEach (button => {
        button.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.remove()
        })
    })

    inputNewTask.value = "" // Reset Input Field

})