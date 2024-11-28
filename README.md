# Proyecto de Interactividad en el DOM - Diplomatura en Desarrollo Web

Este proyecto fue desarrollado como parte de la Diplomatura en Desarrollo Web. El objetivo de este trabajo es aplicar interactividad a un sitio web existente utilizando JavaScript para manipular el DOM. A continuación, se describen las funcionalidades implementadas:

## Funcionalidades

### 1. **Smooth Scroll**
   - Al hacer clic en el botón con el ID `scroll-contenido`, la página se desplaza suavemente hacia la sección con el ID `title-cards`. Se utiliza un desplazamiento gradual mediante un intervalo que simula un desplazamiento suave.

### 2. **Borde Interactivo en Imágenes**
   - Las imágenes dentro de las tarjetas (con clase `.card-img-top`) reciben un borde que alterna entre transparente y negro cada 8 segundos. Esto se realiza utilizando `setInterval` y `setTimeout` para manejar la transición del borde.

### 3. **Botón de "Leer Más/Menos"**
   - Al hacer clic en el botón con clase `.btn-mas`, se alterna entre mostrar más o menos contenido, modificando el texto del botón de "READ MORE" a "READ LESS" y viceversa. Esta interacción se logra con el uso de la función `classList.toggle`.
