/*
Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. 
But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates.
This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. 
But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

**Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
**Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.
*/

// Get references to DOM elements
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []

// Function to check item is not duplicate
function normalize(item) { 
    return item.trim().replace(/\s+/g, ' ').toLowerCase();// removing unwantend space
 }

 function checkDuplicate() { 
    const itemText = itemInput.value; 
    if (itemText) {
         const normalizedItem = normalize(itemText); 
         if (!listArr.some(existingItem => normalize(existingItem.task) === normalizedItem)) { 
            listArr.push({ task: itemText, completed: false });// we are pushing object to arrlist 
             } else {
                let duplicate = []
                duplicate = normalizedItem.toLowerCase()// if grandpa entry same as previous list in lower case it can still store duplicate
                 } 
            } 
             else { console.log(" empty task."); } 
             renderList(); 
            }


// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift, index) => {
        const listItem = document.createElement('li')
        listItem.id = 'listItem'
        const deleteList = document.createElement('button')
        deleteList.textContent = 'Delete'
        deleteList.id = 'deletelist'
        deleteList.onclick = () => removelist(index, 1); //by index  as a parameter to the delete function we delete specific list item
        // const editButton = document.createElement('button')
        // editButton.innerHTML ='<i class="fa-solid fa-pen-to-square"></i>'
        // editButton.id='editButton'
        // editButton.onclick =( )=>edistlist(index,1)
        listItem.textContent = gift.task  
     
        shoppingList.appendChild(listItem)
        // listItem.append(editButton)
        listItem.append(deleteList)
    
    })
    itemInput.value = ''; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
       
    }
})

function removelist(index){
    // listArr= []
    console.log("removed")
    listArr.splice(index, 1)
    renderList()
}

// function edistlist(index){
//  if(gift.target.id.contains('edit')){
//     document.getElementById('item').value =e.target.
//  }
// }