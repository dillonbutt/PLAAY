module stack {

    export class Stack {

        head : StackObject;

        constructor(){
            this.head = new StackObject();
        }

        push(stackobj : StackObject ) {
            stackobj.next = this.head;
            this.head = stackobj;
        }

        pop() : StackObject{
            var it = this.head;
            this.head = this.head.getNext();
            return it;
        }


    }

    class StackObject {
        next : StackObject;
        varmap : VarMap;

        getNext(){
            return this.next;
        }

        getVarMap(){
            return this.varmap;
        }

        setNext(next : StackObject){
            this.next = next;
        }
        setVarMap(map : VarMap){
            this.varmap = map;
        }
    }

    class VarMap {
        varName : String;
        varValue : String;

        getName(){
            return this.varName;
        }

        getValue(){
            return this.varValue;
        }

        setName(name : String){
            this.varName = name;
        }
        setValue(value : String){
            this.varValue = value;
        }
    }



}

export = stack;