function insert(num)
{
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('tela').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('tela').innerHTML;
    if(resultado)
    {
        document.getElementById('tela').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('tela').innerHTML = "Nada..."
    }
}
//Testando commit