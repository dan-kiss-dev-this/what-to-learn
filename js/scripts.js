$(document).ready(function() {



  $("form#generalquestionsforcode").submit(function(event) {
    event.preventDefault();

    // $(".javaresult").hide();
    // $(".phpresult").hide();
    // $(".rubyresult").hide();

    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    // debugger;
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var q1 = parseInt(question1);
    var q2 = parseInt(question2);
    var q3 = parseInt(question3);
    var q4 = parseInt(question4);
    var q5 = parseInt(question5);
    var qtotal = q1+q2+q3+q4+q5;
    var Name = $("#name").val();
    var total = question1 + question2 + question3 + question4 + question5;
    // $("#output").text(Name);
    $("#output").text(qtotal);
    // $("#output").text(question2);
    // $("#output").text(question3);
    // $("#output").text(question4);
    // $("#output").text(question5);
    // $("#output").text(question6);
    // $("#output").text(total);



    if (qtotal >= 1) {

      $('.phpresult').toggle();
    }

    // note add an if statement to do alert if answers add to less then 6 as question was not answered
  });
});
