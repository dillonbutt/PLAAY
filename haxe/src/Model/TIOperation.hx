package model;
class TIOperation extends Expression{

    var var1:Array<Expression>; // first input variable to the operation
    var var2:Array<Expression>; // second input variable to the operation
    var output:Array<Expression>; // variable to take the output of the operation

    public function new(var1:Array<Expression>, var2:Array<Expression>, output:Array<Expression>)
    {
        super();

        this.var1 = new Array<Expression>();
        this.var1 = var1;
        this.var2 = new Array<Expression>();
        this.var2 = var2;
        this.output = new Array<Expression>();
        this.output = output;
    }
}
