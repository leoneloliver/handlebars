
let url = 'https://randomuser.me/api/?results=6';
fetch(url).then(res => res.json()).then((out) => {
console.log('->', out);


const typeQuestion = 1;

//start here 
// Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
//     return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
// });
// Handlebars.registerHelper("counter", function (index){
//     return index + 1;
// });
// Handlebars.registerHelper("ck", function (key){
//     return key + 1;
// });

// if(typeQuestion==1){
// var theTemplateScript = document.getElementById("slide-template").innerHTML;
// }
// if(typeQuestion==2){
// var theTemplateScript = document.getElementById("radio-template").innerHTML;
// }
// if(typeQuestion==3){
// var theTemplateScript = document.getElementById("single-template").innerHTML;
// }


// var theTemplate = Handlebars.compile(theTemplateScript);
// var theCompiledHtml = theTemplate(out);
// document.getElementById('survey-component').innerHTML = theCompiledHtml;
//end here



let htmlComponent = "";


if(typeQuestion==1){
	htmlComponent += "<div class=\"onr-single-select\">";
	for(let i = 0; i < out.results.length; i++){
	    htmlComponent += "<div class=\"row \">";
	    htmlComponent += "    <div class=\"col-12\">";
	    htmlComponent += "        <div class=\"card bg-white mt-2\">";
	    htmlComponent += "            <div class=\"radio card-body p-3\">";
	    htmlComponent += "                <label class=\"radio-container text-capitalize\">"+out.results[i].location.city;
	    htmlComponent += "                    <input type=\"radio\" name=\"Q\" value="+i+" id=Q1_QAns"+i+">";
	    htmlComponent += "                    <span class=\"checkmark\"></span>";
	    htmlComponent += "                </label> ";
	    htmlComponent += "            </div>";
	    htmlComponent += "        </div>";
	    htmlComponent += "    </div>";
	    htmlComponent += "</div> ";
	}
	htmlComponent += "</div>";
}



if(typeQuestion==2){
	htmlComponent += "<div class=\"table-responsive-split\">";
	htmlComponent += "    <table class=\"table table-bordered\">";
	htmlComponent += "     <thead>";
	htmlComponent += "      <tr>";
	for(let i = 0; i < out.results.length; i++){
	    htmlComponent += "    <th class=\"text-capitalize\">"+out.results[i].location.city+"</th>";
	}
	htmlComponent += "      </tr>";
	htmlComponent += "     </thead>";
	htmlComponent += "    <tbody>";
	htmlComponent += "     <tr>";
	for(let i = 0; i < out.results.length; i++){
	  htmlComponent += "    <td data-th="+out.results[i].location.city+" class=\"text-capitalize\"><label class=\"radio-container\">";
	  htmlComponent += "     <input type=\"radio\" name=\"Q\" value=\"1\" id=Q1_QAns"+i+">";
	  htmlComponent += "     <span class=\"checkmark\"></span>";
	  htmlComponent += "     </label>";
	  htmlComponent += "    </td>";
	}
	htmlComponent += "     </tr>";
	htmlComponent += "    </tbody>";
	htmlComponent += "   </table>";
	htmlComponent += "</div>";
}


if(typeQuestion==3){
	htmlComponent += "<div class=\"card\">";
	htmlComponent += "<div class=\"card-body\">";
	htmlComponent += "<input id=\"qSlider\" name="+out.results[0].location.city+" data-slider-id=\"ex1Slider\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"20\" data-slider-step=\"1\" data-slider-value=\"14\"/>";
	htmlComponent += "</div>	";
	htmlComponent += "</div>";
}

document.getElementById('survey-component').innerHTML = htmlComponent;

// extras
// if(typeQuestion==3){
// 	$('#qSlider').slider({
//     enabled: true,
//     min: 0,
//     max: 100,
//     value: 50,
//     step: 10,
//     precision: 1,
//     range: false,
//     orientation: 'horizontal',
//     reversed: false,
//     selection: 'before',
//     handle: 'round',
//     scale: 'linear',
//     focus: false,
//     natural_arrow_keys: false,
//     ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
//     //ticks_positions: [],
//     ticks_labels: ['<i>|</i>0', '<i>|</i>10', '<i>|</i>20', '<i>|</i>30', '<i>|</i>40', '<i>|</i>50', '<i>|</i>60', '<i>|</i>70', '<i>|</i>80', '<i>|</i>90', '<i>|</i>100'],
//     ticks_snap_bounds: 0,
//     tooltip: 'block',
//     tooltip_position: 'top',
//     tooltip_split: false,
//       formatter: function(value) {
//           return value +'%';
//       }
//   });
// }

window.setTimeout(function(){
    $('#qSlider').slider({
      enabled: true,
      min: 0,
      max: 100,
      value: 50,
      step: 10,
      precision: 1,
      range: false,
      orientation: 'horizontal',
      reversed: false,
      selection: 'before',
      handle: 'round',
      scale: 'linear',
      focus: false,
      natural_arrow_keys: false,
      ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      //ticks_positions: [],
      ticks_labels: ['<i>|</i>0', '<i>|</i>10', '<i>|</i>20', '<i>|</i>30', '<i>|</i>40', '<i>|</i>50', '<i>|</i>60', '<i>|</i>70', '<i>|</i>80', '<i>|</i>90', '<i>|</i>100'],
      ticks_snap_bounds: 0,
      tooltip: 'block',
      tooltip_position: 'top',
      tooltip_split: false,
        formatter: function(value) {
            return value +'%';
        }
    });
    window.setTimeout(function(){$('.onr-slide').removeClass("opacity-0");},100);
    },1000);
    


})
.catch(err => { throw err });




