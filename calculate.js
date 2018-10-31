function insert(num)
{
    document.calculate.textview.value = document.calculate.textview.value+num;
}

function equal()
{
    var exp = document.calculate.textview.value;
    if(exp)
    {
        document.calculate.textview.value = eval(exp);
    }
}

function clean()
{
    document.calculate.textview.value ="";
}

function back()
{
    var exp = document.calculate.textview.value;
    document.calculate.textview.value = exp.substring(0,exp.length-1);
}