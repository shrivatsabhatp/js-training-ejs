"use strict";

class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        this.group.push(value);
    }

    delete(value) {
        this.group.filter(group => group !== value);
    }

    has(value) {
        return this.group.includes(value) ? true : false;
    }

    static from(value) {
        let grp = new Group;
        for (let each of value) {
            grp.add(each);
        }
        return grp;
    }
}

class GroupIterator {
    constructor(group) {
        this.grp = group;
        this.position = 0;
    }
    next() {
        if (this.position >= this.grp.group.length) {  // this.grp -> GroupIterrator // .group -> parent class // since array present in parent class not in child
            return { done: true };  
        } else {
            let output = {
                value: this.grp.group[this.position],
                done: false
            };
            this.position++;
            return output;
        }
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
