function solution(cacheSize, cities) {
    let answer = 0;
    let dll = new DLL();

    for (let city of cities) {
        city = city.toLowerCase();
        let isNode = dll.get(city);
        if (isNode) {
            if (isNode.index !== 0) {
                dll.remove(isNode.node);
                dll.unshift(city);
            }
            answer += 1;
        } else {
            answer += 5;
            dll.unshift(city);
        }

        if (dll.length > cacheSize) dll.pop();
    }

    return answer;
}

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pop() {
        let node = this.tail;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            node.prev.next = null;
            this.tail = node.prev;
            node.prev = null;
        }
        this.length--;
        return node;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(val) {
        let index = 0;
        let cur = this.head;
        while (index < this.length) {
            if (cur.val === val) return { 'node': cur, 'index': index };
            cur = cur.next;
            index++;
        }
        return null;
    }

    remove(node) {
        if (this.length === 0) return undefined;
        if (node.next === null) {
            this.pop();
        } else {
            let removedNode = node;
            let prevNode = node.prev;
            let nextNode = node.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;

            removedNode.next = null;
            removedNode.prev = null;
            this.length--;
        }
    }
}