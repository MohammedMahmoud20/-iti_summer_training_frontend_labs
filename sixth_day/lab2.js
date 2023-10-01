var students = [
    { fname: 'ali', age: 22, grade: 100 },
    { fname: 'nora', age: 20, grade: 90 },
    { fname: 'nada', age: 25, grade: 75 },
    { fname: 'heba', age: 19, grade: 50 },
    { fname: 'bassem', age: 21, grade: 40 }
  ];

  // Print the array data :-
  function printArrayData() {
    var arrayDataElement = document.getElementById("arrayData");

    for (var i = 0; i < students.length; i++) {
      var listItem = document.createElement("p");
      listItem.classList.add("array-data");
      listItem.textContent = students[i].fname + " :  " + students[i].age + " :  " + students[i].grade;
      arrayDataElement.appendChild(listItem);
    }
  }

  // Print students with degree > 80 :-
  function printHighDegreeStudents() {
    var highDegreeStudentsElement = document.getElementById("highDegreeStudents");

    for (var i = 0; i < students.length; i++) {
      if (students[i].grade > 80) {
        var listItem = document.createElement("p");
        listItem.textContent = students[i].fname + " :  " + students[i].age + " :  " + students[i].grade;
        highDegreeStudentsElement.appendChild(listItem);
      }
    }
  }

  // Print sorted students by name :-
  function printSortedStudents() {
    var sortedStudentsElement = document.getElementById("sortedStudents");
    var sortedStudents = students.slice().sort(function(a, b) {
      var nameA = a.fname.toUpperCase();
      var nameB = b.fname.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    for (var i = 0; i < sortedStudents.length; i++) {
      var listItem = document.createElement("p");
      listItem.textContent = sortedStudents[i].fname + " :  " + sortedStudents[i].age + " :  " + sortedStudents[i].grade;
      sortedStudentsElement.appendChild(listItem);
    }
  }
  window.onload = function() {
    printArrayData();
    printHighDegreeStudents();
    printSortedStudents();
  };