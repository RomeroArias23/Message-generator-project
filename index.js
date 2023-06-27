/*English Random phrases generator*/

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
  }

  function changeLanguage() {
    // Reset the textarea when language is changed
    document.getElementById('phraseOutput').value = '';
  }