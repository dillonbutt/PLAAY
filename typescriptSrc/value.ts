import stack = require( './stackManager' ) ;
import collections = require( './collections' ) ;
import pnode = require('./pnode') ;


module value {

    import Stack = stack.Stack;
    import list = collections.list;
    import List = collections.List;
    import LambdaNode = pnode.LambdaNode;

    export class Field {
        name : string;
        value : Value;
        type : Type;
        isConstant : boolean;

        constructor(name : string, value : Value, type : Type, isConstant : boolean) {
            this.name = name;
            this.value = value;
            this.type = type;
            this. isConstant = isConstant;
        }

        // getters and setters
        getName() {
            return this.name;
        }

        setName(name : string) {
            this.name = name;
        }

        getValue() {
            return this.value;
        }

        setValue(value : Value) {
            this.value = value;
        }

        getType() {
            return this.type;
        }

        setType(type : Type) {
            this.type = type;
        }

        getIsConstant() {
            return this.isConstant;
        }

        setIsConstant(isConstant :boolean) {
            this.isConstant = isConstant;
        }
    }

    export abstract class Value {
        abstract isClosureV() : boolean;//possibly not needed and can be checked another way?
    }

    export class StringV extends Value {
        contents : string;

        constructor(val : string){
            super();
            this.contents = val;
        }

        getVal(){
            return this.contents;
        }

        setVal(val : string){
            this.contents = val;
        }
        isClosureV(){
            return false;
        }
    }

    export class ObjectV extends Value {
        fields:Array<Field>;

        constructor() {
            super();
            this.fields = new Array<Field>();
        }

        public numFields():Number {
            return this.fields.length;
        }

        public addField(field:Field) {
            this.fields.push(field);
        }

        public deleteField(fieldName:string):boolean {
            for (var i = 0; i < this.fields.length; i++) {
                if (this.fields[i].getName().match(fieldName.toString())) {
                    this.fields.splice(i, 1);
                    return true;
                }
            }

            return false;
        }

        public getField(fieldName:string):Field {
            for (var i = 0; i < this.fields.length; i++) {
                if (this.fields[i].getName().match(fieldName.toString())) {
                    return this.fields[i];
                }
            }
            return null;
        }


        isClosureV(){
            return false;
        }
    }

    export class ClosureV extends Value {
        //need function obj
        public function : LambdaNode;
        context : Stack;
        isClosureV(){
            return true;
        }
    }
    export class NullV extends Value {
        isClosureV(){
            return false;
        }

    }

    export class DoneV extends Value {
        isClosureV(){
            return false;
        }
    }

    export class BuiltInV extends Value {
        //var step : (vms : VMS) -> void;
        //constructor (  step : (vms : VMS) -> void ){
            //this.step = step;
        //}
        isClosureV(){
            return false;
        }
    }

    export enum Type {
        STRING,
        BOOL,
        NUMBER,
        ANY,
        METHOD,
        NULL
    }

}

export = value;
