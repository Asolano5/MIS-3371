/*
 Name: Axel Solano
 Course: MIS 3371
 File name: homework2.js
 Date created: 10/06/25
 Date updated:10/20/25
 Description: This is the JS document that provides the scripting for
 the date, range slider, error messages, field validations, and field input review for my homework2.html document.
 */
  window.onload = function() {
  const dateElement = document.getElementById("today");
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  dateElement.textContent = formattedDate;
};

function returnInput() {
  var formcontents = document.getElementById("mainForm");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
    for (i = 0; i < formcontents.length; i++) {
      console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
        {
          datatype = formcontents.elements[i].type;
          switch (datatype) {
            case "checkbox":
              if (formcontents.elements[i].checked) {
                formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                }
              break;
              case "radio":
                if (formcontents.elements[i].checked) {
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                  }
              break;
              case "button": case "submit": case "reset":
              break;
              default:
              let value = formcontents.elements[i].value;
              if (formcontents.elements[i].name === "uID") {
                value = value.toLowerCase();
                formcontents.elements[i].value = value;
                }
                formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
    }
      }

       if (formoutput.length>0) { 
         formoutput = formoutput + "</table>";
         document.getElementById("inputValues").innerHTML = formoutput;
         }
    }

function fNameValidation()
  {
    x = document.getElementById("fname").value;
    if( x.length<2) { 
      document.getElementById("fname_message").innerHTML = "Invalid first name... too short.";  
      error_flag = 1;
      }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("fname_message").innerHTML = "";  
            }
            else  {
              document.getElementById("fname_message").innerHTML = "Invalid characters in first name.";
              error_flag = 1;
              }
        }
    }

    function lNameValidation()
    {
        x = document.getElementById("lname").value;
        if( x.length<2) { 
              document.getElementById("lname_message").innerHTML = "Invalid last name... too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("lname_message").innerHTML = "";  
            }
            else  {
              document.getElementById("lname_message").innerHTML = "Invalid characters in last name.";
              error_flag = 1;
              }
        }
    }

    function pwordValidator() 
    {
    var passwordoutput;
    var passwordinput = document.getElementById("pword").value;
    console.log(passwordinput);
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter at least 1 lower case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    // Validate special chars
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a Minimum 8 characters";
      error_flag = 1;
  } else {
      passwordoutput = "";
  }
  document.getElementById("password_message5").innerHTML = passwordoutput;
  }

  function cpwordValidator() {
    x=document.getElementById("pword").value;
    y=document.getElementById("cpword").value;
    if ( x==y ) 
    {
      document.getElementById("cpword_msg").innerHTML = "";
    } else  
      {
         document.getElementById("cpword_msg").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
    }

    function bDayValidation(){
      const birthdateInput = document.getElementById("bday");
      const today = new Date();
      const maxDate = today.toISOString().split('T')[0];
  
      const minDateLimit = new Date();
      minDateLimit.setFullYear(today.getFullYear() - 120);
      const minDate = minDateLimit.toISOString().split('T')[0];

      birthdateInput.setAttribute('max', maxDate);
      birthdateInput.setAttribute('min', minDate);
    }

    function ad1Validation() {
    x = document.getElementById("ad1").value;
    console.log(x.value);
    console.log(x.length);
    if (x.length < 2 ) {  
      document.getElementById("ad1_message").innerHTML = "Enter something on address line";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("ad1_message").innerHTML = "";  
      }
      console.log(addr1_message);
}

function cityValidator() {
         if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
              document.getElementById("city_msg").innerHTML = "";  
            }
            else  {
              document.getElementById("city_msg").innerHTML = "Invalid characters in City name.";
              error_flag = 1;
              }
}

function stateValidator() {
        x=document.getElementById("state").value;
        if(x=="") { 
              document.getElementById("state_msg").innerHTML = "Please choose a state";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_msg").innerHTML = ""; 
        }
}

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("severity");
  const output = document.getElementById("rangedisplay");

  if (slider && output) {
    output.textContent = slider.value;
    slider.addEventListener("input", function() {
      output.textContent = this.value;
    });
  }
});