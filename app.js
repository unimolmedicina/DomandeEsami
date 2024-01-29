document.addEventListener('DOMContentLoaded', function () {
  // Carica elenco materie dal file CSV
  loadMaterie();
});

function loadMaterie() {
  var select = document.getElementById('materia');
  
  // Chiamata AJAX per ottenere elenco materie dal foglio di calcolo
  // Puoi utilizzare Fetch API o jQuery.ajax

  // Esempio con Fetch API
  fetch('https://docs.google.com/spreadsheets/d/TUO_ID_FOGLIO_DI_CALCOLO/pub?gid=0&single=true&output=csv')
    .then(response => response.text())
    .then(data => {
      var lines = data.split('\n');
      
      lines.forEach(function (line) {
        var option = document.createElement('option');
        option.text = line.trim();
        select.add(option);
      });
    });
}

function loadData() {
  var selectedMateria = document.getElementById('materia').value;
  var outputDiv = document.getElementById('output');
  
  // Chiamata AJAX per ottenere dati dal foglio di calcolo basati sulla materia selezionata
  // Puoi utilizzare Fetch API o jQuery.ajax

  // Esempio con Fetch API
  fetch('https://docs.google.com/spreadsheets/d/TUO_ID_FOGLIO_DI_CALCOLO/pub?gid=0&single=true&output=csv')
    .then(response => response.text())
    .then(data => {
      var lines = data.split('\n');
      
      outputDiv.innerHTML = '<h3>Risultati:</h3>';
      
      lines.forEach(function (line) {
        var columns = line.split(',');
        if (columns[0].trim() === selectedMateria) {
          outputDiv.innerHTML += '<p>Materia: ' + columns[0].trim() + '<br>Domanda: ' + columns[1].trim() + '<br>Annotazione: ' + columns[2].trim() + '</p>';
        }
      });
    });
}
