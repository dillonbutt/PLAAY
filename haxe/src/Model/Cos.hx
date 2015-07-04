package model;
import Math;
class Cos extends SIOperator{
    public function new(var1:Array<Expression>)
    {
        super();
    }

    public function Cos():Expression
    {

        output = Math.cos(var1);
    }
}
