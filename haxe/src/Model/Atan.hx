package model;
import Math;
class Atan extends SIOperator{
    public function new(var1:Array<Expression>)
    {
        super();
    }

    public function Atan():Expression
    {
        output = Math.atan(var1);
    }
}
