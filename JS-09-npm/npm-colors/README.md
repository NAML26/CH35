# Pasos para iniciar el proyecto colors
1. Crear carpeta del proyecto llamada colors
2. Crear un archivo `main.js`

## npm desde CLI
3. Iniciamos un proyecto desde npm con el comando
```sh:
npm init -y (de yes, acepto todo)

4. Buscamos el package colors y los instalamos con el comando
```sh:
    npm i colors

5. Dentro del archivo "main.js" vamos a importar el paquete colors con la linea de código 
    javascript
const colors = requires ("colors");

6. Implementar las funciones de colors (estilos para el texto de la terminal) en el main.js. Para ello hay que consultar la documentación oficial de colors en [https://npmjs.com]

7. Para ejecutar el package, utilizamos el comando
```sh:

node main.js (archivo)

8. Eliminar (desinstalar) modulos de npm
```sh:
    npm uninstall colors