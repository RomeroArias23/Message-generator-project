/*English Random phrases generator*/

var typed; // Global variable to hold the Typed instance

    function generatePhrase() {
      var language = document.getElementById('languageSelect').value;

      var subjects = [];
      var verbs = [];
      var objects = [];
      var complements = [];

      if (language === 'english') {
        subjects = ['The world', 'Life', 'Money', 'Technology'];
        verbs = ['improves', 'solves', 'simplifies', 'enhances'];
        objects = ['all our problems', 'nothing', 'absolutely everything', 'the meaning of existence'];
        complements = ['with ease', 'in theory', 'for the chosen few', 'while complicating everything else'];
      } else if (language === 'spanish') {
        subjects = ['El mundo', 'La vida', 'El dinero', 'La tecnología'];
        verbs = ['mejora', 'soluciona', 'simplifica', 'mejora'];
        objects = ['todos nuestros problemas', 'nada', 'absolutamente todo', 'el sentido de la existencia'];
        complements = ['fácilmente', 'en teoría', 'para unos pocos elegidos', 'complicando todo lo demás'];
      }

      var randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
      var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
      var randomObject = objects[Math.floor(Math.random() * objects.length)];
      var randomComplement = complements[Math.floor(Math.random() * complements.length)];

      var phrase = randomSubject + ' ' + randomVerb + ' ' + randomObject + ' ' + randomComplement;
      document.getElementById('phraseOutput').value = phrase;

      // Update the Typed strings based on the language
      if (language === 'english') {
        typed.strings = ['Acid phrases'];
      } else if (language === 'spanish') {
        typed.strings = ['Frases ácidas'];
      }
    }

    function changeLanguage() {
      // Reset the textarea when language is changed
      document.getElementById('phraseOutput').value = '';

      // Update the Typed strings based on the language
      if (language === 'english') {
        typed.strings = ['Acid phrases'];
      } else if (language === 'spanish') {
        typed.strings = ['Frases ácidas'];
      }
    }

    function changeLanguage() {
      // Reset the textarea when language is changed
      document.getElementById('phraseOutput').value = '';

      // Update the Typed strings based on the language
      var language = document.getElementById('languageSelect').value;
      if (language === 'english') {
        typed.strings = ['Acid phrases'];
      } else if (language === 'spanish') {
        typed.strings = ['Frases ácidas'];
      }
    }
    
    document.addEventListener('DOMContentLoaded', function () {
      typed = new Typed('.typed', {
        strings: ['Select your language', 'Selecciona tu idioma'],

        stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
      });
    });
  


