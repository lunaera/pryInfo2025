// Archivo: lalo.js

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

// Ejecutar función automáticamente
mostrarPresentacion();

// Si quieres mostrarlo también en una página web
// (cuando vincules este JS en un HTML)
document.addEventListener("DOMContentLoaded", () => {
    const div = document.createElement("div");
    div.style.fontFamily = "Arial, sans-serif";
    div.style.margin = "20px";
    div.innerHTML = `
        <h2>👋 ${presentacion.nombre}</h2>
        <p>${presentacion.mensaje}</p>
        <blockquote>💡 ${presentacion.frase}</blockquote>
    `;
    document.body.appendChild(div);
});