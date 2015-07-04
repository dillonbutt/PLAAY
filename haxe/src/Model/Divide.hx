package model;

class Divide extends TIOperation{

    public function new(var1:Array<Expression>, var2:Array<Expression>, output:Array<Expression>)
    {
        super();
    }

    public function Divide():Expression
    {
        output = var1 / var2;
    }
}