package model;

class Subtract extends TIOperation{
    public function new(var1:Array<Expression>, var2:Array<Expression>, output:Array<Expression>)
    {
        super();
    }

    public function Subtract():Expression
    {
        output = var1 - var2;
    }
}