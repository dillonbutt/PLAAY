package model;
import Math;
class Asin extends SIOperator{
    public function new(var1:Array<Expression>)
    {
        super();
    }

    public function Asin():Expression
    {
        output = Math.asin(var1);
    }
}
