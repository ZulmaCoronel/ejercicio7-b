//C A L L B A C K

function TareaCallback(texto, callback) {
    console.log(`Haciendo un mini ejercicio... ${texto}`);
    callback();
  }
  function Finalizada(){
    console.log('Fin de la tarea');
  }
  TareaCallback('sobre callbacks en js.', Finalizada);