/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  let numeroDividendo;
  let numeroDividir;
  let resto;

  numeroDividendo = parseInt(
    document.getElementById("txtIdNumeroDividendo").value
  );
  numeroDividir = parseInt(document.getElementById("txtIdNumeroDivisor").value);
  resto = numeroDividendo % numeroDividir;

  alert(`El resto es ${resto}`);
}
