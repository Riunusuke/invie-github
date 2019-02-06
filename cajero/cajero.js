class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var imagenes = [];
imagenes["50"] = "50.jpg"
imagenes["20"] = "20.jpg"
imagenes["10"] = "10.jpg"
var caja = [];
var entregado = [];
caja.push( new Billete(50, 3));
caja.push( new Billete(20, 2));
caja.push( new Billete(10, 2));

contar();

var dinero = 0;
var div = 0;
var papeles = 0;

var botonSaldo = document.getElementById("boton_saldo");
var saldo = document.getElementById("saldo");
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");
boton.addEventListener("click", entregarDinero);
botonSaldo.addEventListener("click", saldo);

function entregarDinero()
{
  var billetesDibujados = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  if (total >= dinero)
  {
    for(var bi of caja)
    {
      if (dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if (div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
          bi.cantidad = bi.cantidad-papeles;
        for (var i = 0; i < papeles; i++)
          {
            billetesDibujados.push ( new Billete(bi.valor, 1) );
          }
        entregado.push( new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);
      }
    }
    if (dinero == 0)
		{
			resultado.innerHTML += "Se ha retirado: <br />";
			for(var e of billetesDibujados)
			{
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
			}
			resultado.innerHTML += "<hr />";
		contar();
		}
		else
		{
			resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
		}
      }
      else
      {
        resultado.innerHTML += "Soy un cajero pobre y no tengo dinero :( <hr />";
      }
    }

function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
  saldo.innerHTML += "Al cajero le queda: " + total + "$ <br/>";
}
function saldo()
{
  contar();
  saldo.innerHTML += "Al cajero le queda: " + total + "$ <br/>";
}
