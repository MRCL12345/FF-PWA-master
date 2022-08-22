function v() {
  let msg = {
    title: "Velocidad",
    text: "Introduce la distancia llegada",
    buttons: {
      c: "Cancelar",
      co: "Continuar",
    },
    content: {
      element: "input",
      attributes: {
        placeholder: "metros",
      },
    },
    CloseOnClickOutSide: false,
  };
  swal(msg).then((v) => {
    switch (v) {
      case "c":
        break;
      case "co":
        let distancia = parseFloat(prompt("Introduce tu distancia"));
        let tiempo = parseFloat(prompt("Introduce el tiempo"));
        swal(`v =${distancia / tiempo}m/s`);
        break;
    }
  });
}
