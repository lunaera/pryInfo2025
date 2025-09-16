// Archivo: js/lalo.js

// Información personal de presentación
const presentacion = {
    nombre: "Lalo",
    mensaje: "Hola soy Lalo, me gusta que me traten con amabilidad, y que exista la reciprocidad.",
    frase: "Las excusas llenan el espacio que deberían llenar las acciones."
};

// Función para mostrar la presentación en consola
function mostrarPresentacion() {
    console.log("👋 " + presentacion.mensaje);
    console.log("💡 Frase inspiradora: \"" + presentacion.frase + "\"");
}

// Nueva función para saludar
function saludar() {
    console.log(`Hola, mi nombre es ${presentacion.nombre} 😎`);
}

// Ejecutar funciones
mostrarPresentacion();
saludar();


console.log("Actividad lograda!!");