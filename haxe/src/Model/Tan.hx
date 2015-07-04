package model;
import Math;
class Tan extends SIOperator{
    public function new(var1:Array<Expression>)
    {
        super();
    }

    public function Tan():Expression
    {
        output = Math.tan(var1);
    }
}
