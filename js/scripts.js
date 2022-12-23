// Play&Pause carrousel
// Check ready status of html 
$(function() {
    $("#mycarousel").carousel({setInterval: 2000});
    $("#carouselButton").on("click",function() {
        if($("#carouselButton").children("i").hasClass("fa fa-pause")){
            $("#mycarousel").carousel("pause");    
            $("#carouselButton").children("i").removeClass("fa fa-pause");
            $("#carouselButton").children("i").addClass("fa fa-play");
        }else if($("#carouselButton").children("i").hasClass("fa fa-play")){
            $("#mycarousel").carousel("cycle");    
            $("#carouselButton").children("i").removeClass("fa fa-play");
            $("#carouselButton").children("i").addClass("fa fa-pause");
        }
    });
    $("#loginButton").on("click",function() {   
        $("#loginModal").modal("show");
    });
    $("#reserveButton").on("click",function() {   
        $("#reserveModal").modal("show");
    });
});

// Modularization 
// Define an array of data
const data = [
    { id: "onePerson", label: "1" },
    { id: "twoPerson", label: "2" },
    { id: "threePerson", label: "3" },
    { id: "fourPerson", label: "4" },
    { id: "fivePerson", label: "5" },
    { id: "sixPerson", label: "6" }
  ];
  
  // Define a function that generates the HTML code for the radio buttons
  function generateRadioButtons(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += `<div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input" id="${data[i].id}" name="person" value="option${i+1}">      
                  <label for="${data[i].id}" class="form-check-label">${data[i].label}</label>
                </div>`;
    }
    return html;
  }
  
  // Generate the HTML code for the radio buttons
  const html = generateRadioButtons(data);
  
  // Add the generated HTML to the page
  document.getElementById("radio-buttons").innerHTML = html;