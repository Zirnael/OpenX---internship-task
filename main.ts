
class Tree{
    left?: Tree;
    right?: Tree;
    value: number;
    
    constructor(x:number){
        this.value = x;
    }

    height():number{
        let leftHeight:number;
        let rightHeight:number;
        if(this.right == null){
            rightHeight = 0;
        }else{
            rightHeight = this.right.height() + 1;
        }
        if(this.left == null){
            leftHeight = 0;
        }else{
            leftHeight = this.left.height() + 1;
        }
        

        return Math.max(leftHeight, rightHeight);
    }
    leafCount():number{
        if(this.right == null && this.left == null){
            return 1;
        }
        let leftCount: number;
        let rightCount: number;

        if(this.right == null){
            rightCount = 0;
        }else{
            rightCount = this.right.leafCount();
        }
        if(this.left == null){
            leftCount = 0;
        }else{
            leftCount = this.left.leafCount();
        }
        return leftCount + rightCount;
    }
    isEqual(other:Tree):boolean{
        if(this.value != other.value){
            return false;
        }
        if(this.left && other.left){    // both have left node
            if(!this.left.isEqual(other.left)){ // compare them
                return false;
            }
        } else if(this.left || other.left){  // one has left node and the other does not
            return false;
        }

        if(this.right && other.right){    // both have right node
            if(!this.right.isEqual(other.right)){ // compare them
                return false;
            }
        } else if(this.right || other.right){  // one has left node and the other does not
            return false;
        }
        
        return true;
    }
}



let node1 = new Tree(5);
let node2 = new Tree(3);
let node3 = new Tree(7);
node1.left = node2;
node1.right = node3;
node2.left = new Tree(2);
node2.right = new Tree(5);
node3.left = new Tree(1);

let node4 = new Tree(0);
node3.right = node4;
node4.left = new Tree(2);
let node5 = new Tree(8);
node4.right = node5;
node5.right = new Tree(5);

//        5
//      /   \
//     3     7
//    / \   / \
//   2   5 1   0
//           /   \
//          2     8
//                 \
//                  5
console.log(`Height: ${node1.height()} expected: 4`);

console.log(`Leaf Count: ${node1.leafCount()} expected 5`);

console.log(`node1 == node1 ${node1.isEqual(node1)}`);


//           7
//          / \
//         1   0
//           /   \
//          2     8
//                 \
//                  5

console.log(`Height: ${node3.height()} expected: 3`);

console.log(`Leaf Count: ${node3.leafCount()} expected 3`);

console.log(`node2 == node1 ${node3.isEqual(node1)}`);
