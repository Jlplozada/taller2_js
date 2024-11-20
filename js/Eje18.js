const leer = async () => {
    try {
        const response = await fetch("./json18.json");
        if (!response.ok) {
            throw new Error("Error al leer el archivo JSON");
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

leer().then(data => {
    // Filtrar los elementos cuyo nombre comience con "A"
    const filtrados = data.filter(item => item.nombre && item.nombre.startsWith("A"));
    console.log(filtrados);
});
