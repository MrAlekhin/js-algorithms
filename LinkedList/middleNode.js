// A linked list is a data structure which consists of a group of nodes where 
// each node may point to some other node to form a sequence.

function Node(data, next){
	this.data = data;
  this.next = next;
}




// What we'll do is setup two pointers, one that will traverse the linked list one node at a time, 
// and the other pointer will traverse two nodes at a time. This way when the faster pointer reaches the end of 
// the linked list, the slower pointer will be halfway there because it was only moving one node at time while the 
// faster one was moving two nodes at a time. This allows you to find the middle node of a linked list with only one 
// pass, instead of passing through the whole linked list once, and then again to find the middle element.





//find middle of the linked list

var n1 = new Node('Some data', null);
var n2 = new Node('Another data', n1);
var n3 = new Node('Another data1', n2);
var n4 = new Node('Another data2', n3);
var n5 = new Node('Another data3', n4);
var n6 = new Node('Another data4', n5);
var n7 = new Node('Last data', n6);

let head = n7;

//recursive function with two pointers
var middleNode = function(fastPoint, slowPoint ){
	if(fastPoint.next !== null && fastPoint.next.next !== null){
  	return middleNode(fastPoint.next.next, slowPoint.next)
  }else {
  return slowPoint;}
}

console.log(middleNode(head, head));