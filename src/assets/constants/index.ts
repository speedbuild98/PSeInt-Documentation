// ════════════════════════ CONSTANTS ════════════════════════
// This file contains all the constants used in the project.
// ═══════════════════════════════════════════════════════════

// ════════ PAGE LINKS ════════
const getRandomId = () => {
  const min = 10000; 
  const max = 99999; 
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: `esto-es-un-num-random=${getRandomId().toString()}--->Necesito-agarrar-la-pala-ayuda`,
    title: "Error404",
  },
];

// ════════ SOCIAL LINKS ════════
export const socialLinks = [
  {
    url: "https://www.linkedin.com/in/lautagallardogg/",
    title: "Linkedin",
    icon: "FaLinkedin",
  },
  {
    url: "https://gallardolautaro.tech/",
    title: "Portfolio",
    icon: "FaAtom",
  },
  {
    url: "https://github.com/speedbuild98",
    title: "Github",
    icon: "FaGithub",
  },
];

// ════════ DOCUMENTATION ════════

// Página Características y Funcionalidades
export const paraQueSirve = "PSeInt está pensado para asistir a los estudiantes que se inician en la construcción de programas o algoritmos computacionales. El pseudocódigo se suele utilizar como primer contacto para introducir conceptos básicos como el uso de estructuras de control, expresiones, variables, etc, sin tener que lidiar con las particularidades de la sintaxis de un lenguaje real. Este software pretende facilitarle al principiante la tarea de escribir algoritmos en este pseudolenguaje presentando un conjunto de ayudas y asistencias, y brindarle además algunas herramientas adicionales que le ayuden a encontrar errores y comprender la lógica de los algoritmos."

export const listaDeFuncionalidades = [
  "Puede encontrar en este enlace un resumen rápido y gráfico de las principales funcionalidades.",
  "Presenta herramientas de edición para escribir algoritmos en pseudocódigo en español.",
  "Autocompletado",
  "Ayudas Emergentes",
  "Plantillas de Comandos",
  "Coloreado de Sintaxis",
  "Resaltado de bloques lógicos",
  "Indentado Inteligente",
  "Listados de funciones, operadores y variables",
  "Permite generar y editar el diagrama de flujo del algoritmo",
  "Puede trabajar con diagramas clásicos y de Nassi-Shneiderman",
  "Permite la edición simultánea de múltiples algoritmos",
  "El pseudo-lenguaje utilizado es configurable",
  "Ofrece perfiles de configuración predefinidos para numerosas instituciones",
  "Puede interpretar (ejecutar) los algoritmos escritos",
  "Puede modificar el algoritmo y ver los cambios en la ejecución inmediatamente (sin reingresar los datos)",
  "Permite modificar uno o más datos selectos de una ejecución ya finalizada para observar cómo varían los resultados",
  "Permite deshacer una ejecución para reiniciarla o repetirla desde un punto arbitrario",
  "Permite ejecutar el algoritmo paso a paso controlando la velocidad e inspeccionando variables y expresiones",
  "Puede confeccionar automáticamente una tabla de prueba de escritorio",
  "Ofrece un modo especial en el que describe las acciones realizadas en cada paso",
  "Determina y marca claramente los errores",
  "Señala errores de sintaxis en tiempo real (mientras escribe)",
  "Señala claramente errores en tiempo de ejecución",
  "Ofrece descripciones detalladas de cada error, con sus causas y soluciones más frecuentes.",
  "Permite convertir el algoritmo de pseudocódigo a código en numerosos lenguajes de programación: C, C++, C#, Java, JavaScript, MatLab, Pascal, PHP, Python 2, Python 3, QBasic, Visual Basic",
  "Ofrece un sistema de ayuda integrado acerca del pseudocódigo y el uso del programa",
  "Incluye un conjunto de ejemplos de diferentes niveles de dificultad",
  "Es multiplataforma (probado en Microsoft Windows, GNU/Linux y Mac OS X)",
  "Es totalmente libre y gratuito (licencia GPLv2)"
];

//Ejemplos

export const ejemplosTexto = "En esta sección puede observar ejemplos de pseudocódigos válidos en PSeInt, así como también sus correspondientes diagramas de flujo (en cualquiera de las tres formas soportadas). Recuerde que el lenguaje de PSeInt puede adaptarse a diferentes perfiles. A modo de ejemplo se incluyen los algoritmos para dos perfiles diferentes, uno con reglas flexibles, y otro con reglas estrictas."

export const ejemplos = [
  {
    titulo: "Suma",
    descripcion: "Este es el ejemplo más simple. Muestra cómo cargar dos números de dos variables, calcular la suma de los mismos y mostrarla en pantalla."
  },
  {
    titulo: "Mayores",
    descripcion: "Busca los dos mayores de un arreglo de N datos."
  },
  {
    titulo: "Coloquial",
    descripcion: "En este ejemplo se muestran algunas de las variantes que se pueden utilizar con el perfil de lenguaje Flexible para que el pseudocódigo se asemeje más al lenguaje coloquial."
  },
  {
    titulo: "Subprocesos",
    descripcion: "Ejemplo básico que ilustra la sintaxis para declarar nuevas funciones en pseudocódigo."
  },
  {
    titulo: "AdivinaNumero",
    descripcion: "Sencillo juego en el que el usuario debe adivinar un número aleatorio."
  },
  {
    titulo: "Promedio",
    descripcion: "Ejemplo básico de uso de un acumulador y la estructura de control Para para calcular el promedio de un conjunto de valores."
  },
  {
    titulo: "Triangulo",
    descripcion: "Este algoritmo determina a partir de las longitudes de tres lados de un triángulo si corresponden a un triángulo rectángulo (para utiliza la relación de Pitágoras, tomando los dos lados de menor longitud como catetos), y en caso afirmativo informa el área del mismo. Ejemplo de la estructura Si-Entonces y anidamiento."
  },
  {
    titulo: "OrdenaLista",
    descripcion: "Este ejemplo almacena una lista de nombres en un arreglo y luego los ordena alfabéticamente. El método de ordenamiento es relativamente simple. Para la entrada de datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán."
  },
  {
    titulo: "Modulo",
    descripcion: "Ejemplo trivial del uso del operador de módulo (MOD o %)."
  },
  {
    titulo: "Menu",
    descripcion: "Ejemplo simple de menú de opciones, con las estructuras Repetir-Hasta Que y Segun."
  },
  {
    titulo: "Digitos",
    descripcion: "Separa los dígitos de un número entero utilizando el operador módulo."
  },
  {
    titulo: "Resolvente",
    descripcion: "Utiliza la fórmula resolvente para determinar las raíces de una ecuación de segundo grado a partir de sus tres coeficientes, y las informa adecuadamente según su tipo (reales iguales, reales distintas, imaginarias)."
  },
  {
    titulo: "Primos",
    descripcion: "Calcula iterativamente los N primeros números primos."
  },
  {
    titulo: "Factorizacion",
    descripcion: "Ejemplo de algoritmo para descomponer un número en sus factores primos."
  },
  {
    titulo: "Cadenas",
    descripcion: "Muestra la utilización de las funciones de cadenas para contar las vocales de una frase."
  },
  {
    titulo: "Para",
    descripcion: "En este ejemplo se recorre un arreglo utilizando las tres variantes de la estructura Para."
  },
  {
    titulo: "Potencia",
    descripcion: "Ejemplo de una función recursiva para calcular una potencia."
  },
  {
    titulo: "Promedio2",
    descripcion: "Ejemplo de cómo crear subprocesos que reciban arreglos como argumento."
  },
  {
    titulo: "Misil",
    descripcion: "Ejemplo de animación con códigos ASCII y la instrucción Esperar."
  },
  {
    titulo: "Romanos",
    descripcion: "Muestra como convertir números enteros a notación romana utilizando arreglos."
  },
  {
    titulo: "Hanoi",
    descripcion: "Implementa el conocido juego de las torres de Hanoi en pseudocódigo."
  },
  {
    titulo: "TaTeTi",
    descripcion: "Algoritmo para el juego del TaTeTi."
  }
];
