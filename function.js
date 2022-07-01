function getdata() {
  resetTable();
  var fdate = document.getElementById("from_date").value;
  var tdate = document.getElementById("to_date").value;
  var ftime = document.getElementById("from_time").value;
  var ttime = document.getElementById("to_time").value;
  firebase.database().ref('data/').orderByChild('Day').startAt(fdate).endAt(tdate).on('value', function (snapshot) {
    var content = '';
    if (snapshot.exists()) {
      snapshot.forEach(function (data) {
        if (ftime != null && ttime != null) {
          if (data.val().Time >= ftime && data.val().Time <= ttime) {
            content += '<tr>';
            content += '<td>' + data.val().Day + '</td>';
            content += '<td>' + data.val().No + '</td>';
            content += '<td>' + data.val().Time + '</td>';
            content += '</tr>';
          }
        }
      })

      $('#table1').append(content);

    }
    var totalRowCount = 0;
    var rowCount = 0;
    var table = document.getElementById("table1");
    var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length; i++) {
      totalRowCount++;
      if (rows[i].getElementsByTagName("td").length > 0) {
        rowCount++;
      }
    }
    var message = rowCount;
    document.getElementById("name").innerHTML = "Total : " + message;
    console.log(snapshot.val())
  });
}

function resetTable() {
  var table = document.getElementById("table1");
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function CountRows() {
  var totalRowCount = 0;
  var rowCount = 0;
  var table = document.getElementById("table1");
  var rows = table.getElementsByTagName("tr")
  var table = document.querySelector('#table1 tbody');

  const peoplecountRef = firebase.database().ref('data/');
  peoplecountRef.on('value', snap => {
    while (table.hasChildNodes()) {
      table.removeChild(table.firstChild);
    }
    var people = snap.val();
    for (var i in people) {
      var row = table.insertRow(-1);
      for (var j in people[i]) {
        cell = row.insertCell(-1);
        cell.innerHTML = people[i][j];

      }
    }
    for (var i = 0; i < rows.length; i++) {
      totalRowCount++;
      if (rows[i].getElementsByTagName("td").length > 0) {
        rowCount++;
      }
    }
    var message = rowCount;
    document.getElementById("name").innerHTML = "Total : " + message;
  })

}