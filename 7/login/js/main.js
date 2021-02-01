$(document).ready(function() {
    $("#login").click(function() {
        let userName = $("#input1").val();
        let password = $("#input2").val();
        if (userName == "") {
            $("#error1").html("الزامی")
            $("#input1").css("border", "solid red")
        } else {
            $("#input1").css("border", "solid")
            $("#error1").html("")
        }
        if (password == "") {
            $("#error2").html("الزامی")
            $("#input2").css("border", "solid red")
        } else {
            $("#input2").css("border", "solid")
            $("#error2").html("")
        }
        if (userName != "" && password != "") {

        }
    })
})