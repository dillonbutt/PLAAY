package model;
import Math;
class Acos extends SIOperator{
    public function new(var1:Array<Expression>)
    {
        super();
    }

    public function Acos():Expression
    {
        output = Math.acos(var1);
    }
}
