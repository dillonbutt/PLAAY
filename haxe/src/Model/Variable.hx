package model;
class Variable extends Expression{

    public function new(n, t)
    {
        name = n;
        type = t;
        value = null;
    }

    public function assignment(v)
    {
        value = v;
    }

    public function type_cast(t)
    {
        type = t;
    }

    public function getValue()
    {
        return this.value;
    }
}