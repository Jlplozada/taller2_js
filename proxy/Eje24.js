const persona={
    nombre:"jose",
    apellido:"paez",
    edad:23
}
const manejador = {
    get(objetivo,propiedad){
        console.log(`Obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
    },
    Set(objetivo,propiedad,valor){
        console.log(Object.keys(objetivo));
        if (Object.keys(objetivo).indexOf(propiedad)===-1) {
            return console.error(`la propiedad ${propiedad} no existe`)
        }
        if (propiedad=="nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
            throw new Error("valor debe contener solo letras y espacios");
        }
        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Valor debe contener solo numeros");
        }
        objetivo[propiedad]=valor;
    }
}

const proxy = new Proxy(persona,manejador);
proxy.nombre="jose luis paez";
console.log(proxy.nombre);
console.log(persona);
