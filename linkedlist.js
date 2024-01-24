class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
//create linked list of node objects
class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }
    //Insert node at start
    insertStart(data){
        this.head = new Node(data,this.head);
        this.size++;
    }
    //insert node at end
    insertEnd(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current=current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //insert node base on specific index
    insertPosition(data, index){
        //check if position is out of range
        if(index > 0 && index > this.size){

        }
    }

    //display nodes from the list
    printLinkedList(){
        let current = this.head; 

        while(current){
            console.log(current.data, current.next);
            current = current.next;
        }
    }
}
//innovation of methods
const nodeList = new LinkedList();

nodeList.insertStart(200);
nodeList.insertStart(400);
nodeList.insertEnd(100);
nodeList.insertPosition(300,1);
nodeList.printLinkedList();

// const n1 = new Node(100,2);
// console.log(n1);