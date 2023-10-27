# AngularPlayground

## Material custom styles
Si no se instala Material con estilos custom, puede cambiarse a custom modificando el angular.json para dejar solo el styles.scss (quitar la referencia de Material) y metiendo en styles.scss las líneas que se muestran en dicho archivo.

El modo oscuro se carga cada vez que se usa la clase, así que habrá que modificar la forma en que se aplica.

## Bootstrap grid
En styles.scss se importa solo la grid porque nos interesa para evitar meter estilos en las páginas; por alguna razón hace falta especificar el origen para que no de error.

## Input Mask
A través de una directiva puede formatearse la visualización de los datos de entrada de un campo de formulario. Otra opción es usar el paquete ngx-mask.

## Form Array
Formularios reactivos con un array para crear cuantos campos se necesiten. Se implementa el filtro de autocompletado de material para el array. Ejemplo tomado de [stackblitz](https://stackblitz.com/edit/angular-szxkme?file=app%2Fautocomplete-display-example.css) desde [stack overflow](https://stackoverflow.com/questions/51901852/how-to-add-angular-material-auto-complete-in-formarray)