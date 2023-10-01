addEventListener('load', function () {
    var form = document.querySelector("form");
    var table = document.getElementById("stdTable");
    var nameInput = document.querySelector("input[name='nameTxt']");
    var ageInput = document.querySelector("input[name='ageTxt']");
    var gradeInput = document.querySelector("input[name='gradeTxt']");
    var deptSelect = document.querySelector("select[name='deptVal']");
    var addButton = document.getElementById("btn");
    var errorMessage = document.querySelectorAll("span");

    addButton.addEventListener('click', function (event) {
        event.preventDefault();

        var name = nameInput.value.trim();
        var age = parseInt(ageInput.value.trim());
        var grade = gradeInput.value.trim();
        var dept = deptSelect.value.trim();

        var isValid = true;

        if (name === "") {
            errorMessage[0].style.visibility = "visible";
            isValid = false;
        } else {
            errorMessage[0].style.visibility = "hidden";
        }

        if (isNaN(age) || age < 25 || age > 50) {
            errorMessage[1].style.visibility = "visible";
            isValid = false;
        } else {
            errorMessage[1].style.visibility = "hidden";
        }

        if (isValid) {
            var newRow = table.insertRow();
            var nameCell = newRow.insertCell();
            var ageCell = newRow.insertCell();
            var gradeCell = newRow.insertCell();
            var deptCell = newRow.insertCell();

            nameCell.textContent = name;
            ageCell.textContent = age;
            gradeCell.textContent = grade;
            deptCell.textContent = dept;

            nameInput.value = "";
            ageInput.value = "";
            gradeInput.value = "";
            deptSelect.selectedIndex = 0;
        }
    });
});