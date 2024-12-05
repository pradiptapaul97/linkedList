class Node {
    constructor(value) {
        this.name = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value)
    {
        const newNode = new Node(value);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = this.head;
        }
        else
        {
            this.tail.next = newNode;
            this.tail = newNode; 
        }
        this.length++;
        return this;
    }

    unshift(value)
    {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift()
    {
        if(!this.head)
        {
            return undefined 
        }
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        temp.next = null;
        if(this.length == 0)
        {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    pop()
    {
        if(!this.head)
        {
            return undefined 
        }
        else
        {
            let temp = this.head;
            let pre = this.head;
            while (temp.next) {
                pre = temp;
                temp = temp.next;
            }
            this.tail = pre;
            this.tail.next = null;
            this.length--;
            if(this.length == 0)
            {
                this.head = null;
                this.tail = null;
            }
            return temp;
        }
        
    }

    get(index)
    {
        if(this.length <= index || index < 0)
        {
            return undefined
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index,value)
    {
        let temp = this.get(index);
        if(temp)
        {
            temp.name = value;
            return temp;
        }
        return false
        
    }

    insert(index,value)
    {
        if(index == 0)
        {
            return this.unshift(value)
        }
        if(index == this.length)
        {
            return this.push(value)
        }
        if(this.length < index || index < 0)
        {
            return false
        }

        let temp = this.get(index - 1);
        const newNode = new Node(value);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++
        return newNode
        
    }

    remove(index)
    {
        if(index == 0)
        {
            return this.shift()
        }
        if(index == this.length)
        {
            return this.pop()
        }
        if(this.length <= index || index < 0)
        {
            return false
        }

        let before = this.get(index - 1);
        let temp = before.next;

        before.next = temp.next;
        temp.next = null;

        this.length--
        return temp
        
    }

    reverse()
    {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = null;
        let next = null;

        for (let index = 0; index < this.length; index++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
}

let first = new SinglyLinkedList(10);
first.push(20);
first.push(30);
first.push(40);
first.push(50);
first.push(60);

first.reverse();


var http = require('http');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send({first});
});

var httpServer = http.createServer(app);
httpServer.listen(3000,(()=>{
    console.log('http://localhost:3000');
}));
