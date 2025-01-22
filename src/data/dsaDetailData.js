export const dsaDetailData = {
  "Array": {
    title: "Array Data Structure",
    description: "An array is a linear data structure that collects elements of the same data type and stores them in contiguous and adjacent memory locations.",
    timeComplexity: {
      access: "O(1)",
      search: "O(n)",
      insertion: "O(n)",
      deletion: "O(n)"
    },
    advantages: [
      "Simple and easy to use",
      "Fast access to elements using index",
      "Better cache locality",
      "Represents multiple values of same type using single variable"
    ],
    disadvantages: [
      "Fixed size",
      "Insertion and deletion are costly",
      "Wastage of memory if elements are less than declared size",
      "Cannot store elements of different data types"
    ],
    applications: [
      "Used in implementation of other data structures like stacks, queues",
      "Used for different sorting algorithms",
      "Used in database records",
      "Used in matrices"
    ],
    codeExample: `// Array implementation in JavaScript
const arr = [];

// Insertion
arr.push(1);     // Add at end
arr.unshift(0);  // Add at beginning

// Deletion
arr.pop();       // Remove from end
arr.shift();     // Remove from beginning

// Access
const element = arr[0];  // Access first element

// Search
const index = arr.indexOf(1);  // Find index of element`
  },
  "Linked List": {
    title: "Linked List Data Structure",
    description: "A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.",
    timeComplexity: {
      access: "O(n)",
      search: "O(n)",
      insertion: "O(1)",
      deletion: "O(1)"
    },
    advantages: [
      "Dynamic size",
      "Easy insertion and deletion",
      "Efficient memory utilization",
      "Can grow and shrink during runtime"
    ],
    disadvantages: [
      "No random access",
      "Extra memory for pointers",
      "Not cache friendly",
      "Reverse traversing is difficult in singly linked list"
    ],
    applications: [
      "Implementation of stacks and queues",
      "Undo functionality in software",
      "Hash tables for handling collisions",
      "Memory allocation and deallocation"
    ],
    codeExample: `// Linked List implementation in JavaScript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at beginning
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete first node
  deleteFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
}`
  },
  "Stack": {
    title: "Stack Data Structure",
    description: "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements can be inserted and deleted only from one end of the stack.",
    timeComplexity: {
      access: "O(n)",
      search: "O(n)",
      insertion: "O(1)",
      deletion: "O(1)"
    },
    advantages: [
      "Simple implementation",
      "Efficient for LIFO operations",
      "Memory is saved as memory is allocated and deallocated in a defined order",
      "Useful for processing nested structures"
    ],
    disadvantages: [
      "Limited capacity",
      "No random access",
      "Memory may overflow",
      "Not suitable for non-LIFO operations"
    ],
    applications: [
      "Function call management",
      "Expression evaluation and conversion",
      "Undo operations in editors",
      "Browser history tracking"
    ],
    codeExample: `// Stack implementation in JavaScript
class Stack {
  constructor() {
    this.items = [];
  }

  // Push element
  push(element) {
    this.items.push(element);
  }

  // Pop element
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}`
  },
  "Queue": {
    title: "Queue Data Structure",
    description: "A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front.",
    timeComplexity: {
      access: "O(n)",
      search: "O(n)",
      insertion: "O(1)",
      deletion: "O(1)"
    },
    advantages: [
      "Fair allocation of resources",
      "Efficient for FIFO operations",
      "Useful for buffer implementation",
      "Handles asynchronous data transfer"
    ],
    disadvantages: [
      "Limited capacity in static implementation",
      "No random access",
      "Complex implementation for priority queues",
      "May become a bottleneck in applications"
    ],
    applications: [
      "CPU scheduling",
      "Disk scheduling",
      "Print spooling",
      "Message queues in communication"
    ],
    codeExample: `// Queue implementation in JavaScript
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from queue
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}`
  },
  "Tree": {
    title: "Tree Data Structure",
    description: "A tree is a hierarchical data structure consisting of nodes connected by edges. Each node contains a value and references to its child nodes.",
    timeComplexity: {
      access: "O(log n)",
      search: "O(log n)",
      insertion: "O(log n)",
      deletion: "O(log n)"
    },
    advantages: [
      "Hierarchical data representation",
      "Efficient searching and sorting",
      "Natural representation for hierarchical data",
      "Dynamic size"
    ],
    disadvantages: [
      "Complex implementation",
      "May be unbalanced",
      "Requires more memory",
      "Rebalancing might be needed"
    ],
    applications: [
      "File systems",
      "Database indexing",
      "Syntax trees in compilers",
      "Network routing algorithms"
    ],
    codeExample: `// Binary Tree implementation in JavaScript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert node
  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    // Add insertion logic here
  }
}`
  },
  "Graph": {
    title: "Graph Data Structure",
    description: "A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. It can represent complex relationships between objects.",
    timeComplexity: {
      access: "O(1)",
      search: "O(V + E)",
      insertion: "O(1)",
      deletion: "O(V + E)"
    },
    advantages: [
      "Can represent any relationship",
      "Flexible structure",
      "Powerful for modeling real-world problems",
      "Supports complex algorithms"
    ],
    disadvantages: [
      "Complex implementation",
      "High memory requirements",
      "Difficult to store and serialize",
      "Complex traversal algorithms"
    ],
    applications: [
      "Social networks",
      "GPS and mapping",
      "Network routing",
      "Airline traffic"
    ],
    codeExample: `// Graph implementation in JavaScript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add edge
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}`
  }
}; 