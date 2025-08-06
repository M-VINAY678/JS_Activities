class Queue
{
    constructor(){
        this.items=[];
    }
    enqueue(value)
    {
        this.items.push(value);
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return null;
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty())
        {
            return null;
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length==0;
    }
    display(){
        console.log(this.items);
    }
}
const queue_reference=new Queue();
queue_reference.enqueue(1);
queue_reference.enqueue(2);
queue_reference.enqueue(3);
queue_reference.enqueue(4);
queue_reference.enqueue(5);
queue_reference.enqueue(6);
queue_reference.display();
queue_reference.dequeue();
queue_reference.dequeue();
queue_reference.display();
console.log(queue_reference.front());
// as queue_reference is instance of queue , returns true;
console.log(queue_reference instanceof Queue);