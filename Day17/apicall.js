$(document).ready(function () {

    function myFunction() {
        //JQUery Call
        $.get("https://api.github.com/users", function (data, status) {
            if (data.length > 0) {

                data.forEach(element => {

                    var tableBodyData = "<tr><td>" + element.login + "</td><td>" + element.url + "</td><td>" + element.type + "</td><td>" + element.site_admin + "</td><td><input type='checkbox' name='record'></td></tr>";

                    $("table tbody").append(tableBodyData);
                });

            }
        });

        //AJAX Call
        $.ajax({
            url: "https://api.github.com/users", success: function (result) {
                console.log("THIS IS COMING FROM AJAX CALL : ", JSON.stringify(result));
            }
        });

        //Xhttp Call
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("this is example of xhttp", xhttp.responseText);
            }
        }
        xhttp.open("GET", "https://api.github.com/users/ramprakashmu", true);
        xhttp.send();


    }
    myFunction();

    // Find and remove selected table rows
    $(".delete-row").click(function () {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                //alert($(this).parents("tr").html());
                $(this).parents("tr").remove();
            }
        });
    });
});