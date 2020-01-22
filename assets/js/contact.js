var xmlhttp = new XMLHttpRequest();
var a;

$( "#submit-btn" ).click(function() {
  if($("#name").val() != "" && $("#tele").val() != "" && $("#email-id").val() != "" && isEmail($("#email-id").val())) {
    $(".form-class").addClass("disp-non");
    $(".thank-you").removeClass("disp-non");
    var form_name = document.getElementById("name").value;
    var form_email = document.getElementById("email-id").value;
    var form_tele = document.getElementById("tele").value;

    a = "https://docs.google.com/forms/d/e/1FAIpQLSfHxvSF-18m2bXer-yjxImL7px2l4XDVekyceXdbx6jlkST1g/formResponse?entry.280270491="+form_name+"&entry.187825012="+form_email+"&entry.403290044="+form_tele;
    xmlhttp.open("POST", a, false);
    xmlhttp.send();
  }
});

$("#name,#tele,#email-id").on("input", function() {
    if($("#name").val() != "" && $("#tele").val() != "" && $("#email-id").val() != "" && isEmail($("#email-id").val())) {
      $("#submit-btn").removeClass("disable");
    } else {
      $("#submit-btn").addClass("disable");
    }
});

$("#email-id").on( "focusout", function() {
    if($("#email-id").val() != "" && !isEmail($("#email-id").val())) {
      alert("Please enter valid Email");
      $("#email-id").val("");
    }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
