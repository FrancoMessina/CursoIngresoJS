/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
  let fahrenheitIngresado; //Centígrados ingresado por el usuario para convertir a Fahrenheit
  const constanteFormula = 5 / 9; // 5/9 es una constante para poder realizar la conversion
  let formulaCentigrados; // Resultado dela multiplicacion de la constante por los centigrados ingresado
  let resultadoFinal; // El resultado final de la conversion
  fahrenheitIngresado = document.getElementById("txtIdTemperatura").value;
  fahrenheitIngresado = parseFloat(fahrenheitIngresado);
  formulaCentigrados = fahrenheitIngresado - 32;
  resultadoFinal = constanteFormula * formulaCentigrados;
  alert(
    `${fahrenheitIngresado} Fahrenheit son ${resultadoFinal.toFixed(
      2
    )} centígrados `
  );
}

function CentigradosFahrenheit() {
  let centigradosIngresado; //Centígrados ingresado por el usuario para convertir a Fahrenheit
  const constanteFormula = 9 / 5; // 9/5 es una constante para poder realizar la conversion
  let formulaFahrenheit; // Resultado dela multiplicacion de la constante por los centigrados ingresado
  let resultadoFinal; // El resultado final de la conversion
  centigradosIngresado = document.getElementById("txtIdTemperatura").value;
  centigradosIngresado = parseFloat(centigradosIngresado);

  formulaFahrenheit = centigradosIngresado * constanteFormula;
  resultadoFinal = formulaFahrenheit + 32;
  alert(
    `${centigradosIngresado} centígrados son ${resultadoFinal.toFixed(
      2
    )} Fahrenheit `
  );
}
