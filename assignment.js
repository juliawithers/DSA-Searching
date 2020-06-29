// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
// 3, 5, 6, 8, 11,||, 12, 14, 15, 17, 18
// 3, 5||, 6, 8, 11,
// 6||, 8, 11
// 8||, 11 - will return as found at index 1 = 8

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.
// start = 0, end = 10
// 3, 5, 6, 8, 11,||, 12, 14, 15, 17, 18
// start = 6, end = 10
// 12, 14||, 15, 17, 18
// start = 8, end = 10
// 15||, 17, 18
// start = 9, end = 10
// 17||, 18
// start = 8, end = 9
// 18
// start = 8, end = 8
// 18
// start = 8, end = 7
// 18

// 2. Adding a React UI
// For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

// 1) Linear search

// Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,

// 2) Binary search

// Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// ^^ see assignment react app

// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

// use binary search and confirm the search with the title
// assume that the finding the book returns the title

findBook = (dewey, title, deweyLibrary) => {
    e.preventDefault();
    let dataset = deweyLibrary.sort(function(a,b) {
      return a-b
    })
    const result = this.calculateBinary(dataset, dewey)
   
    let id = result[0];
    let count = result[1];

    let foundTitle = dataset[id];

    if (title !== foundTitle) {
         return 'The titles do not match! Verify dewey number please'
    } else {
        if (id === -1) {
            return 'The value does not exist in this dataset'
        } else {
            return title
        }    
    }

    
}

calculateBinary=(array, value, start, end, count=0)=>{
    count +=1;
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return [-1, count];
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index].value;

    if (item == value) {
        return [index, count];
    }
    else if (item < value) {
        return this.calculateBinary(array, value, index + 1, end, count+=1);
    }
    else if (item > value) {
        return this.calculateBinary(array, value, start, index - 1, count+=1);
    }
}

//   4. Searching in a BST
//   ** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.
  
//   1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?
// let bin = [35,25,15,14,19,27,89,79,90,91];
// 14,19,15,27,25,79,91,90,89,35 - confirmed with code

//   2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
// let bin = [8,6,5,7,10,9,11]
// 8,6,5,7,10,9,11


// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

// Code works!!


// 6. Find the next commanding officer
// Suppose you have a tree representing a command structure of the Starship USS Enterprise.

//                Captain Picard (5)
//              /                \
//     Commander Riker(4)       Commander Data(7)
//       /         \               \
//  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//  Worf (3)       LaForge (5)           Crusher (8)
//    /                           /
// Lieutenant                  Lieutenant
// security-officer (2)           Selar (1)

// This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

//  we must place values on them before creating the tree, otherwise, it wouldn't make sense. There are 8 members of the crew listed. Assuming that Picard has the most experience and lieutenant selar has the least
// Can't get this to work


// 7. Max profit
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.

function findMax(tree) {

  
    if (tree === null) {
      return value
    }

    let value = this.value;
    console.log(value)
    let left = findMax(this.left)
    let right = findMax(this.right)
    console.log(left)
    console.log(right)
    if (left > value) {
      value = left
    }
    if (right> value) {
      value = right;
    }
    return value;
  }

  function findMaxProfit(tree){
    let min = tree._findMin();
    console.log('348')
    console.log(min)
    let minValue = min.value;
    let minKey = min.key;
    console.log(minValue)
    console.log(minKey)
  
    let max = findMax(tree);
    console.log('360')
    console.log(max)
    let maxValue = max.value;
    let maxKey = max.key;
    console.log(maxValue)
    console.log(maxKey)
  }
  
  main(bin)

  // let bin = [35,25,15,14,19,27,89,79,90,91];
// let bin = [8,6,5,7,10,9,11]
// let bin = [25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90]
let bin = [128, 97, 121, 123, 98, 97, 105];
let day = ['monday', 'tuesday', 'wednesday', 'thursday','friday','saturday','sunday'];
function main(bin) {
  let tree = new BinarySearchTree;
  bin.map((item,index) => tree.insert(item,day[index]));
  console.log(tree)
  console.log(tree.dfsInOrder())
  // console.log(tree.dfsPreOrder())
  // console.log(tree.dfsPostOrder())
  // console.log(tree.bfs(tree))
  findMaxProfit(tree)
}
