<?php
  include 'clases.php';

  $asignatura1 = new Asignatura("Matemáticas", 3.9, 4.2, 3.8);
  $asignatura2 = new Asignatura("Biología", 3.1, 3.2, 3.7);
  $asignatura3 = new Asignatura("Lenguaje", 2.9, 4.0, 3.5);
  $asignatura4 = new Asignatura("Sociales", 3.6, 2.8, 4.5);
  $asignatura5 = new Asignatura("Inglés", 4.0, 4.2, 3.5);

  $estudiante1 = new Estudiante("Daniel Pertuz", "11A", [$asignatura1, $asignatura3, $asignatura5]);
  $estudiante2 = new Estudiante("Tony Pimienta", "11B", [$asignatura2, $asignatura3, $asignatura4, $asignatura5]);
  $estudiante3 = new Estudiante("Luis Romero", "11C", [$asignatura2, $asignatura3]);

  $profesor = new Profesor("Cielo Palmera", [$estudiante1, $estudiante2, $estudiante3]);

  $padre = new Padre("Darío Pertuz", [$estudiante1, $estudiante2, $estudiante3]);
?>
