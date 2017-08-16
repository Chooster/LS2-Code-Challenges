/*
 * Create a function that returns true if a linked list contains a cycle, or false if it terminates
 *
 * Usually we assume that a linked list will end with a null next pointer, for example:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * const nodeA = new Node('A');
 * const nodeB = nodeA.next = new Node('B');
 * const nodeC = nodeB.next = new Node('C');
 * const nodeD = nodeC.next = new Node('D');
 * const nodeE = nodeD.next = new Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 * Hint: Search for Floyd's Tortoise and Hare algorithm.
 */

const hasCycle = (node) => {
  let slow = node;
  let fast = node;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

 class Node {
   constructor(element) {
     this.value = element;
     this.next = null;
     this.prev = null;
   }
 }
 class LinkedList {
   constructor() {
     this.head = null;
     this.tail = null;
    // Do not modify anything inside of the constructor
   }
   addToTail(element) {
     const currentNode = new Node(element);
     if (!this.head) this.head = currentNode;
     else {
       this.tail.next = currentNode;
       currentNode.prev = this.tail;
     }
     this.tail = currentNode;
   }
   removeHead() {
     if (!this.head) return;
     if (!this.head.next) {
       const prevHead = this.head.value;
       this.head = null;
       this.tail = null;
       return prevHead;
     }
     const prevHead = this.head.value;
     this.head = this.head.next;
     if (this.head.prev) this.head.prev = null;
     return prevHead;
   }
   contains(element) {
     let currentNode = this.head;
     if (currentNode.value === element) return true;
     while (currentNode.next) {
       if (currentNode.value === element) return true;
       currentNode = currentNode.next;
     }
     return false;
   }
 }
