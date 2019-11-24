<<?php

  class Asignatura
  {
    private $nombre;
    private $nota1;
    private $nota2;
    private $nota3;

    function __construct($nombre, $nota1, $nota2, $nota3) {
      $this->nombre = $nombre;
      $this->nota1 = $nota1;
      $this->nota2 = $nota2;
      $this->nota3 = $nota3;
    }

    public function getNombre() {
      return $this->nombre;
    }

    public function setNombre($nombre) {
      $this->nombre = $nombre;
    }

    public function getNota1() {
      return $this->nota1;
    }

    public function setNota1($nota1) {
      $this->nota1 = $nota1;
    }

    public function getNota2() {
      return $this->nota2;
    }

    public function setNota2($nota2) {
      $this->nota2 = $nota2;
    }

    public function getNota3() {
      return $this->nota3;
    }

    public function setNota3($nota3) {
      $this->nota3 = $nota3;
    }

    public function promedio() {
      return ($this->nota1 + $this->nota2 + $this->nota3) / 3;
    }
  }

  class Estudiante
  {
    private $nombre;
    private $curso;
    private $asignaturas = array();
    function __construct($nombre, $curso, $asignaturas)
    {
      $this->nombre = $nombre;
      $this->curso = $curso;
      $this->asignaturas = $asignaturas;
    }

    public function getNombre() {
      return $this->nombre;
    }

    public function setNombre($nombre) {
      $this->nombre = $nombre;
    }

    public function getCurso() {
      return $this->curso;
    }

    public function setCurso($curso) {
      $this->curso = $curso;
    }

    public function getAsignaturas() {
      return $this->asignaturas;
    }

    public function setAsignaturas($asignaturas) {
      $this->asignaturas = $asignaturas;
    }

    public function agregarAsignatura(Asignatura $asignatura) {
      array_push($this->asignaturas, $asignatura);
    }
  }

  class Profesor
  {
    private $nombre;
    private $estudiantes = array();
    function __construct($nombre, $estudiantes)
    {
      $this->nombre = $nombre;
      $this->estudiantes = $estudiantes;
    }

    public function getNombre() {
      return $this->nombre;
    }

    public function setNombre($nombre) {
      $this->nombre = $nombre;
    }

    public function getEstudiantes() {
      return $this->estudiantes;
    }

    public function agregarEstudiante(Estudiante $estudiante) {
      array_push($this->estudiantes, $estudiante);
    }
  }

  /**
   *
   */
  class Padre
  {
    private $nombre;
    private $hijos = array();
    function __construct($nombre, $hijos)
    {
      $this->nombre = $nombre;
      $this->hijos = $hijos;
    }

    public function getNombre() {
      return $this->nombre;
    }

    public function setNombre($nombre) {
      $this->nombre = $nombre;
    }

    public function getHijos() {
      return $this->hijos;
    }

    public function agregarEstudiante(Estudiante $estudiante) {
      array_push($this->hijos, $estudiante);
    }
  }


 ?>
