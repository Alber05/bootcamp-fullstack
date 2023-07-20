# 1.6: unicafe, paso 1

Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Su tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).
La aplicación debe mostrar el número total de comentarios recopilados para cada categoría.
Tenga en cuenta que su aplicación debe funcionar solo durante una única sesión del navegador. Una vez que actualice la página, los comentarios recopilados pueden desaparecer.

# 1.7: unicafe, paso 2

Amplíe su aplicación para que muestre más estadísticas sobre los comentarios recopilados: el número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.

# 1.8: unicafe, paso 3

Refactorice su aplicación para que la visualización de las estadísticas se extraiga en su propio componente Statistics. El estado de la aplicación debe permanecer en el componente raíz App.

# 1.9: unicafe paso4

Cambie su aplicación para mostrar estadísticas solo una vez que se hayan recopilado los comentarios.

# 1.10: unicafe step5

Continuemos refactorizando la aplicación. Extraiga los dos componentes siguientes:

Button para definir los botones utilizados para enviar comentarios
StatisticLine para mostrar una única estadística, por ejemplo, la puntuación media.
El estado de la aplicación aún debe mantenerse en el componente raíz App.

# 1.11\: unicafe, paso 6

Muestra las estadísticas en una tabla HTML
