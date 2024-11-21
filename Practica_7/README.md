# Evidencia de imágenes en Apollo

A continuación se presentan las evidencias de las pruebas realizadas con las mutaciones y consultas en Apollo.

## Mutaciones

1. Crear una caja:
   ![Mutación para crear una caja](./img/caja_mutation_create.png)

2. Actualizar una caja:
   ![Mutación para actualizar una caja](./img/caja_mutation_update.png)

3. Eliminar una caja:
   ![Mutación para eliminar una caja](./img/caja_mutation_delete.png)

4. Crear una transacción:
   ![Mutación para crear una transacción](./img/transaccion_mutation.png)

5. Crear un concepto:
   ![Mutación para crear un concepto](./img/concepto_mutation.png)

## Consultas

1. Obtener cajas:
   ![Consulta de cajas](./img/Query_Cajas.png)

2. Obtener conceptos:
   ![Consulta de conceptos](./img/Query_conceptos.png)

3. Obtener transacciones:
   ![Consulta de transacciones](./img/Query_transacciones.png)



Mi proyecto tiene tres módulos principales: caja, concepto y transacción, cada uno con su propia lógica organizada en servicios, resolvers y módulos. Estoy usando GraphQL para manejar consultas y mutaciones, las cuales están definidas en el archivo schema.gql.