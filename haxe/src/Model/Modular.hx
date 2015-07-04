package model;
class Modular extends TIOperation{
    public function new(var1:Array<Expression>, var2:Array<Expression>, output:Array<Expression>)
    {
        super();
    }

    public function Modular():Expression
    {
        output = var1 % var2;
    }
}
