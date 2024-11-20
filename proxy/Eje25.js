const persona = {
    nombre: "jose",
    usuario: "",
    correo: "",
    fecha: "",
    edad: 23
};

const manejador = {
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad];
    },
    set(objetivo, propiedad, valor) {
        if (Object.keys(objetivo).indexOf(propiedad) === -1) {
            console.error(`La propiedad ${propiedad} no existe`);
            return false;
        }

        valor = valor.trim(); // Elimina espacios en blanco al inicio y al final

        if (propiedad === "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
            console.error("El valor debe contener solo letras y espacios");
            return false;
        }

        if (propiedad === "edad" && !/^[0-9]+$/.test(valor)) {
            console.error("El valor debe contener solo números");
            return false;
        }

        if (propiedad === "correo" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
            console.error("El valor debe ser un correo válido");
            return false;
        }

        if (propiedad === "fecha" && !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
            console.error("El valor debe ser una fecha válida en formato YYYY-MM-DD");
            return false;
        }

        objetivo[propiedad] = valor;
        return true;
    }
};

const proxy = new Proxy(persona, manejador);

proxy.nombre = "Jose Luis Paez";
console.log(proxy.nombre);

proxy.edad = "23";
console.log(proxy.edad);

proxy.correo = "coreo@ejemplo.com";
console.log(proxy.correo);

proxy.fecha = "2024-11-19";
console.log(proxy.fecha);

console.log(persona);
