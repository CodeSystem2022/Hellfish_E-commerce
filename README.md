# Vinoteca-Hellfish

### Este es un E-commerce para el proyecto final de la *Tecnicatura Universitaria en Programación* de la `Universidad Tecnológica Nacional` - *Facultad Regional San Rafael*

### Somos el grupo Hellfish compuesto por:

- [Fabricio Navarro](https://github.com/elfabri)
- [Franco Blanco](https://github.com/FrancoFB)
- [Sofia Sottile](https://github.com/SofiaaSottile18)

Para el desarrollo de este proyecto, que incluye tecnologías como JavaScript, HTML y css, nos basamos en uno de los proyectos dados en el cuarto semestre de la Tecnicatura.

En resumen, es un ecommerce básico pensado para comercializar vinos, que permíte conectar a un dueño de existencias (de vinos) que estará a cargo de proporcionar sus credenciales de mercado pago, y en caso de concretarse una compra, de proporsionar el producto a Mercado Libre para su posterior distribución.

El dueño de las existencias es nuestro cliente y nosotros solo recibiríamos, como establecemos en nuestro brief, un pago por el desrrollo de nuestro ecommerce, y por los mantenimientos que puedan ser necesarios. En dicho brief también pactamos que, si el cliente quisiera nuevas características en la página, nuestro equipo se encargaría de realizar un análisis de costos que el eventual desarrollo podría suponer, el cual está por fuera del producto inicial que es el que presentamos en este repositorio.

Para dar una muestra de nuestro ecommerce sin la necesidad de clonar el repositorio y ejecutarlo con node, creamos una versión de muestra en la carpeta *docs*, la cual no cuenta con un sistema de pago ya que el mismo requiere una parte backend que sea ejecutada en el servidor, y github pages no permite eso. En caso de aparecer un cliente, podríamos disponer de un host dedicado, en el cual ejecutar estas tareas, pero consideramos que para dar una muestra, no nos era rentable invertir en un host sino utilizar github pages que es grátis.

[Click aquí](https://codesystem2022.github.io/Hellfish_E-commerce/) para probar una version sin sistema de pago.

Para la versión con sistema de pago, clonar este repositorio y desde una terminal dentro del repositorio clonado, primero instalamos las dependencias necesarias ejecutando lo siguiente:

    cd server
    npm install

y luego:
    
    node server.js

Después deben ir al localhost con puerto 8080 y les debería funcionar, utilizamos unas credenciales de prueba para mercado pago, lo que debería generar un sistema para realizar pagos ficticios. En caso de tener un potencial cliente, solo cambiaríamos esas credenciales en la máquina del servidor y ya quedaría completamente funcional. 

Sin más que mencionar, agradecemos su visita a este repositorio! Cualquier sugerencia es bienvenida!
