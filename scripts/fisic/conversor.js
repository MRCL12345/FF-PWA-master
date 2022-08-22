//!                 MASA
function masa() {
  let mensaje = {
    title: "Masa",
    text: "¿Qué quieres cambiar a kg?",
    buttons: {
      mg: "mg",
      g: "g",
      t: "t",
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    switch (v) {
      case "mg":
        mg_kg();
        break;
      case "g":
        g_kg();
        break;
      case "t":
        t_kg();
        break;
    }
  });
}

//_     Funciones

function mg_kg() {
  let mensaje = {
    title: "Masa",
    text: "Introduce la cantidad de miligramos que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "miligramos",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal(`${parseFloat(v) / 1000000}kg`);
  });
}
function g_kg() {
  let mensaje = {
    title: "Masa",
    text: "Introduce la cantidad de gramos que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "gramos",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal(`${parseFloat(v) / 1000}kg`);
  });
}
function t_kg() {
  let mensaje = {
    title: "Masa",
    text: "Introduce la cantidad de toneladas que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "toneladas",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal(`${parseFloat(v) * 1000}kg`);
  });
}
//!                  DISTANCIA
function distancia() {
  let mensaje = {
    title: "Distancia",
    text: "¿Qué quieres cambiar a metros?",
    buttons: {
      mm: "mm",
      cm: "cm",
      km: "km",
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    switch (v) {
      case "mm":
        mm_m();
        break;
      case "cm":
        cm_m();
        break;
      case "km":
        km_m();
        break;
    }
  });
}

//_ Funciones

function mm_m() {
  let mensaje = {
    title: "Distancia",
    text: "Introduce la cantidad de milimetros que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "milimetros",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal(`${parseFloat(v) / 1000}m`);
  });
}
function cm_m() {
  let mensaje = {
    title: "Distancia",
    text: "Introduce la cantidad de centimetros que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "centimetros",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal(`${parseFloat(v) / 100}m`);
  });
}
function km_m() {
  let mensaje = {
    title: "Distancia",
    text: "Introduce la cantidad de kilometros que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "kilometros",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal(`${parseFloat(v) * 1000}m`);
  });
}

//!                 Whatts HP
function w_hp() {
  let mensaje = {
    title: "",
    text: "¿A qué quieres convertir?",
    buttons: {
      w: "Whatts",
      hp: "HorsePower",
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    switch (v) {
      case "w":
        swal({
          text: "introduce la cantidad de Hp que tienes",
          content: {
            element: "input",
            attributes: {
              placeholder: "HorsePower",
            },
          },
        }).then((v) => {
          swal(`${parseFloat(v) * 745.7}Whatts`);
        });
        break;
      case "hp":
        swal({
          text: "Introduce la cantidad de Whatts que tienes",
          content: {
            element: "input",
            attributes: {
              placeholder: "whatts",
            },
          },
        }).then((v) => {
          swal(`${parseFloat(v) / 745.7}`);
        });
        break;
    }
  });
}
//!                 Temperatura
function temp() {
  let mensaje = {
    title: "Temperatura",
    text: "¿Qué unidad de temperatura tienes?",
    buttons: {
      c: "Celsius",
      f: "Fahrenheit",
      k: "Kelvin",
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    switch (v) {
      case "c":
        celsius();
        break;
      case "f":
        heit();
        break;
      case "k":
        k();
        break;
    }
  });
}

//_Funciones
function celsius() {
  let mensaje = {
    title: "Temperatura",
    text: "Introduce la cantidad de grados °C que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "Celsius",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal({
      text: `
      ${parseFloat(v) * 1.8 + 32} °F
      ${parseFloat(v) + 273.15} K`,
    });
  });
}
function heit() {
  let mensaje = {
    title: "Temperatura",
    text: "Introduce la cantidad de grados °F que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "Fahrenheit",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal({
      text: `
      ${parseFloat(v) * 0.556 - 17.77} °C
      ${((parseFloat(v) - 32) * 5) / 9 + 273.15} K`,
    });
  });
}
function k() {
  let mensaje = {
    title: "Temperatura",
    text: "Introduce la cantidad de Kelvin que tienes",
    content: {
      element: "input",
      attributes: {
        placeholder: "Kelvin",
      },
    },
    closeOnClickOutside: false,
  };
  swal(mensaje).then((v) => {
    swal({
      text: `
      ${parseFloat(v) - 273.15} °C
      ${(parseFloat(v) - 273.15) * 1.8 + 32} °F`,
    });
  });
}
