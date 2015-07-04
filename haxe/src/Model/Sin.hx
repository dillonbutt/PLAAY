package model;
import Math;
class Sin extends SIOperator{
    public function new(var1:Array<Expression>)
    {
        super();
    }

    public function Sin():Expression
    {
        output = Math.sin(var1);
    }
}
