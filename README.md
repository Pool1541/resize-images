# RESIZE IMAGES

## Requerimienos:

### v1.0.0

1. Debería tener un input que me permita subir una o más imágenes. ✅
2. Debería identificar la cantidad de imágenes. ✅
3. Mostrar la previsualiación de cada imágen. ✅
4. Cada previsualización debería tener un input que permita ingresar el ancho a establecer. ✅
5. ~~El valor del primer input debería establecerse de forma automática en el resto de inputs.~~
6. Debería haber un solo botón para cambiar el ancho de todas las imágenes. ✅
7. Al clickear el botón de descarga debería descargar un archivo .zip ✅
8. El archivo .zip resultante debería tener por nombre `imagenes.zip` ✅
9. El archivo .zip debería descomprimir una carpeta llamada `assets` con todas las imágenes dentro. ✅

### v1.1.0

**Renombrar**

1. Debería tener un input que me permita escribir el texto que deseo quitar del nombre de la imagen. ✅
2. Si el input queda vacío, no se aplicarían cambios en el nombre de las imágenes.
3. El input es universal, es decir, el cambio aplicará para todas las imágenes. ✅
4. Debería transformar la extensión a minúsculas. **(.PNG | .png)** ✅
5. Debería poder identificar el texto recurrente y almacenarlo en localstorage. ✅
6. ~~Un texto se guardará como recurrente si se usó un mínimo de 3 veces.~~
7. Se deberían guardar solo los últimos 6 textos utilizados.
8. El almacenamiento de los textos debería funcionar como una cola. Los textos más antiguos deberían mostrarse al final y ser los primeros en eliminarse si se excede el límite de 6 textos almacenados.
9. Debería mostrar etiquetas de textos recurrentes debajo del input. ✅
10. Al hacer clic sobre una etiqueta de texto recurrente, el input se debería llenar con ese texto. ✅
11. Cada etiqueta de texto recurrente debería tener un botón para eliminarla del localstorage. ✅
12. Cuando se presione el botón "DESCARGAR" se eliminará del nombre de cada archivo de imagen el texto ingresado, se guardará en la cola y localstorage y posteriormente se limpiará el input.
