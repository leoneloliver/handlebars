
let url = 'https://randomuser.me/api/?results=6';
// let url = "https://api.myjson.com/bins/1hhs54";
fetch(url).then(res => res.json()).then((out) => {
console.log('->', out);



//var out = JSON.parse('{"results":[{"gender":"male","name":{"title":"mr","first":"brian","last":"reyes"},"location":{"street":"3474 mill road","city":"aberdeen","state":"staffordshire","postcode":"IE3 9YZ","coordinates":{"latitude":"11.3995","longitude":"-110.5454"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"brian.reyes@example.com","login":{"uuid":"1b5570df-59ad-4865-b5c4-4086d3c53f11","username":"silverfish338","password":"eskimo","salt":"xLO1GAuC","md5":"1f5e5e162684d9477a587e2798538517","sha1":"127b4d948a443cc9b2cde25f85c7870e5b535c56","sha256":"2c3300dac582088be02c389d27313183b7798a1128da29c6fc74eeb53f28ff0e"},"dob":{"date":"1944-10-04T01:32:33Z","age":74},"registered":{"date":"2010-08-23T23:07:00Z","age":8},"phone":"0131 975 2953","cell":"0708-435-290","id":{"name":"NINO","value":"PA 89 64 57 P"},"picture":{"large":"https://randomuser.me/api/portraits/men/38.jpg","medium":"https://randomuser.me/api/portraits/med/men/38.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/38.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"mr","first":"marius","last":"christiansen"},"location":{"street":"8694 vangen","city":"nimtofte","state":"sjælland","postcode":73299,"coordinates":{"latitude":"-88.0184","longitude":"-4.5678"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"marius.christiansen@example.com","login":{"uuid":"79929162-c490-4e2e-9215-fc83e862ce76","username":"organicwolf778","password":"bozo","salt":"93ibilzm","md5":"3734336ba8e04a40a4d60eb2924ae68c","sha1":"4a9d6d3cd67e5222db2c6e5a33c05d2d086b4475","sha256":"0e29321bbc2cb90ad98b57515896fc5e76b2f9827e9375fd2efbc868061ba4d4"},"dob":{"date":"1985-12-23T14:10:55Z","age":33},"registered":{"date":"2002-03-30T08:02:38Z","age":17},"phone":"22913019","cell":"53867985","id":{"name":"CPR","value":"821778-1165"},"picture":{"large":"https://randomuser.me/api/portraits/men/93.jpg","medium":"https://randomuser.me/api/portraits/med/men/93.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/93.jpg"},"nat":"DK"},{"gender":"male","name":{"title":"mr","first":"michael","last":"thomas"},"location":{"street":"3656 lichfield street","city":"nelson","state":"taranaki","postcode":43438,"coordinates":{"latitude":"-64.7186","longitude":"42.7795"},"timezone":{"offset":"+11:00","description":"Magadan, Solomon Islands, New Caledonia"}},"email":"michael.thomas@example.com","login":{"uuid":"c6985d8a-36f0-4ea6-96ef-aba4bdc35619","username":"greenfrog454","password":"abcdef","salt":"bzYfCPng","md5":"e051da1b9874cfb6ecefe8531c84ccc5","sha1":"792ce19f6204b591bfcc45fa70c07a1e49837c45","sha256":"70adce8c79c6e6c583129bbd02b105989a6ee22cedd4e8e4c96235ad0caf514e"},"dob":{"date":"1989-10-14T18:21:42Z","age":29},"registered":{"date":"2003-07-01T11:40:44Z","age":15},"phone":"(027)-470-7469","cell":"(088)-515-6025","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/3.jpg","medium":"https://randomuser.me/api/portraits/med/men/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/3.jpg"},"nat":"NZ"},{"gender":"male","name":{"title":"mr","first":"topias","last":"aro"},"location":{"street":"1302 tehtaankatu","city":"nokia","state":"satakunta","postcode":95038,"coordinates":{"latitude":"-6.8964","longitude":"57.0793"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"topias.aro@example.com","login":{"uuid":"4b32ad9b-35ba-4755-a3c5-da1d8225ddd5","username":"blackrabbit691","password":"crew","salt":"OrIqgchp","md5":"7b075f506c63ebd9b9d4604626e50689","sha1":"1e7a78c663f7cd83e19ff7048b6a7b6b67957767","sha256":"4df75085260e136dd314eeb827eb08d996a5f2deaa1d52163f979507d2527474"},"dob":{"date":"1957-05-03T09:30:09Z","age":61},"registered":{"date":"2002-08-13T14:55:51Z","age":16},"phone":"02-103-908","cell":"047-388-51-04","id":{"name":"HETU","value":"NaNNA535undefined"},"picture":{"large":"https://randomuser.me/api/portraits/men/44.jpg","medium":"https://randomuser.me/api/portraits/med/men/44.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/44.jpg"},"nat":"FI"},{"gender":"female","name":{"title":"ms","first":"caitlin","last":"hart"},"location":{"street":"6784 oconnell avenue","city":"westport","state":"donegal","postcode":34542,"coordinates":{"latitude":"-44.7400","longitude":"-95.6999"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"caitlin.hart@example.com","login":{"uuid":"21d6593f-184a-4ef5-a6fe-f25a5755b2c9","username":"ticklishbird893","password":"claymore","salt":"g3DVxtCC","md5":"baafa4333e72e4aba678e49dd1214096","sha1":"ee6ae61a36fb82279138ca33ccabdb8a15abce8b","sha256":"b1343938518cca6659097505c78357beddfba15bfe34bf90a4cb9d4d91677fd3"},"dob":{"date":"1966-08-27T02:51:10Z","age":52},"registered":{"date":"2010-10-02T05:47:30Z","age":8},"phone":"071-271-6894","cell":"081-241-5043","id":{"name":"PPS","value":"1718342T"},"picture":{"large":"https://randomuser.me/api/portraits/women/3.jpg","medium":"https://randomuser.me/api/portraits/med/women/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/3.jpg"},"nat":"IE"},{"gender":"male","name":{"title":"mr","first":"koray","last":"akan"},"location":{"street":"907 fatih sultan mehmet cd","city":"kırşehir","state":"edirne","postcode":41515,"coordinates":{"latitude":"-0.2499","longitude":"2.5669"},"timezone":{"offset":"+4:30","description":"Kabul"}},"email":"koray.akan@example.com","login":{"uuid":"81cf48b0-4151-4b4a-8cea-69b95492bde8","username":"beautifulelephant486","password":"babybaby","salt":"ulZVOCe7","md5":"b244e4fe9d7bf73b360150328b131f19","sha1":"de149556406e1a66d05659acd1d61d413dcb1d3e","sha256":"9e06f36030701bb1265fbca9510c02b9386cd2d62d5f61f88e53c465d55a923d"},"dob":{"date":"1988-08-08T01:48:52Z","age":30},"registered":{"date":"2008-07-10T18:42:52Z","age":10},"phone":"(264)-888-6890","cell":"(682)-691-3055","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/98.jpg","medium":"https://randomuser.me/api/portraits/med/men/98.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/98.jpg"},"nat":"TR"}],"info":{"seed":"1d3b0078474a5689","results":6,"page":1,"version":"1.2"}}');

const typeQuestion = 8;
const cssAnimate = "zoomInDown";
// zoomInDown
// slideInDown
// zoomIn
// flipInX
// fadeInDown
// bounceInLeft
// bounceInDown

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
// Handlebars.registerHelper('setIndex', function(value){
//     this.index = Number(value + 1); //I needed human readable index, not zero based
// });



// var theTemplateScript = "";
// if(typeQuestion==1){
//  theTemplateScript += document.getElementById("single-template").innerHTML;
// }
// if(typeQuestion==7){
//  theTemplateScript += document.getElementById("radio-template").innerHTML;
// }
// if(typeQuestion==8){
//  theTemplateScript += document.getElementById("slide-template").innerHTML;
// }
// if(typeQuestion==7){
//  theTemplateScript += document.getElementById("checkbox-template").innerHTML;
// }
// if(typeQuestion==7){
//  theTemplateScript += document.getElementById("radio2-template").innerHTML;
// }
// if(typeQuestion==7){
//  theTemplateScript += document.getElementById("multiple-select-template").innerHTML;
	
// }
// if(typeQuestion==7){
//  theTemplateScript += document.getElementById("select-template").innerHTML;
	
// }

// var theTemplate = Handlebars.compile(theTemplateScript);
// var theCompiledHtml = theTemplate(out);
// document.getElementById('survey-component').innerHTML = theCompiledHtml;
//end here



let htmlComponent = "";

if(typeQuestion==8){
	htmlComponent += "<div class=\"component-single-select mt-5 mb-3 s-item animated "+cssAnimate+"\">";


 htmlComponent += "	<div class=\"mbr-text col-12 mbr-fonts-style\">";
 htmlComponent +="		<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>";
 htmlComponent +="		<p class=\"text-secondary\">Proin id eros arcu. Integer neque urna, malesuada vel iaculis ac, elementum ut mauris. Proin auctor sapien eu lacus congue, tincidunt luctus nisi egestas. </p>";
 htmlComponent +="	</div>";

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


if(typeQuestion==8){
	htmlComponent += "<div class=\"component-single-select mt-5 mb-3 s-item animated "+cssAnimate+"\">";

	htmlComponent += "	<div class=\"mbr-text col-12 mbr-fonts-style\">";
 	htmlComponent += "		<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>";
 	htmlComponent += "		<p class=\"text-secondary\">Proin id eros arcu. Integer neque urna, malesuada vel iaculis ac, elementum ut mauris. Proin auctor sapien eu lacus congue, tincidunt luctus nisi egestas. </p>";
 	htmlComponent += "	</div>";

	htmlComponent += "	<div class=\"table-responsive-split\">";
	htmlComponent += "    <table class=\"table table-bordered\">";
	htmlComponent += "     <thead>";
	htmlComponent += "      <tr>";
	for(let i = 0; i < out.results.length; i++){
	    htmlComponent += "    <th class=\"text-capitalize\">"+out.results[i].location.city+"</th>";
	}
	htmlComponent += "      </tr>";
	htmlComponent += "     </thead>";
	htmlComponent += "     <tbody>";
	htmlComponent += "     	<tr>";
	for(let i = 0; i < out.results.length; i++){
	  htmlComponent += "    	<td data-th='"+out.results[i].location.city+"' class=\"text-capitalize\">";
	  htmlComponent += "				<label class=\"radio-container\" data-toggle=\"tooltip\" title='"+out.results[i].location.city+"'>";
	  htmlComponent += "     			<input type=\"radio\" name=\"Q\" value=\"1\" id=Q1_QAns"+i+">";
	  htmlComponent += "     			<span class=\"checkmark\"></span>";
	  htmlComponent += "     		</label>";
	  htmlComponent += "    	</td>";
	}
	htmlComponent += "     	</tr>";
	htmlComponent += "    </tbody>";
	htmlComponent += "   </table>";
	htmlComponent += "	</div>";
	htmlComponent += "</div>";
}

if(typeQuestion==1){
	htmlComponent += "<div class=\"component-slider mt-5 mb-3 s-item animated "+cssAnimate+"\">";
	htmlComponent += "	<div class=\"card b-bottom\">";
	htmlComponent += "		<div class=\"card-body px-4\">";
	htmlComponent += "			<input id=\"qSlider\" name="+out.results[0].location.city+" data-slider-id=\"ex1Slider\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"20\" data-slider-step=\"1\" data-slider-value=\"14\"/>";
	htmlComponent += "		</div>	";
	htmlComponent += "	</div>";
	htmlComponent += "</div>";

	var customTicks = false;
}

if(typeQuestion==8){
	htmlComponent += "<div class=\"component-slider mt-5 mb-3 s-item animated "+cssAnimate+"\">";

	htmlComponent += "	<div class=\"mbr-text col-12 mbr-fonts-style\">";
 	htmlComponent += "		<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>";
 	htmlComponent += "		<p class=\"text-secondary\">Proin id eros arcu. Integer neque urna, malesuada vel iaculis ac, elementum ut mauris. Proin auctor sapien eu lacus congue, tincidunt luctus nisi egestas. </p>";
 	htmlComponent += "	</div>";

	htmlComponent += "	<div class=\"card b-bottom\">";
	htmlComponent += "		<div class=\"card-body px-4\">";
	htmlComponent += "			<input id=\"qSlider2\" name="+out.results[0].location.city+" data-slider-id=\"ex1Slider\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"20\" data-slider-step=\"1\" data-slider-value=\"14\"/>";
	htmlComponent += "		</div>	";
	htmlComponent += "		<div class=\"container\">";
  htmlComponent += "			<div class=\"row\">";
	htmlComponent += "				<div class=\"col text-left slider-tick-label custom-tick pb-3\"><p class=\"mx-0 mt-n3 pl-2\">|</p><span class=\"slider-label-left\">0% or less</span></div>";
	htmlComponent += "				<div class=\"col text-center slider-tick-label custom-tick pb-3 d-none d-lg-block d-md-block d-sm-block\"><p class=\"mx-0 mt-n3\">|</p><span class=\"slider-label-center\">Middle</span></div>";
	htmlComponent += "				<div class=\"col text-right slider-tick-label custom-tick pb-3\"><p class=\"mx-0 mt-n3 pr-2\">|</p><span class=\"slider-label-right\">100% or higher</span></div>";
	htmlComponent += "			</div>";
	htmlComponent += "		</div>";
	htmlComponent += "	</div>";
	htmlComponent += "</div>";

	var customTicks = true;
}


if(typeQuestion==1){
	htmlComponent += "<div class=\"component-slider mt-5 mb-3 s-item animated "+cssAnimate+"\">";
	htmlComponent += "	<div class=\"card b-bottom\">";
	htmlComponent += "		<div class=\"row card-body px-4\">";
	htmlComponent += "			<div class=\"col p-0 text-md-right d-none d-lg-block d-md-block d-sm-block pb-1 text-sm-center pr-1 slider-label-left\">0% or less</div>";
	htmlComponent += "			<div class=\"col-12 col-sm-9\">";
	htmlComponent += "				<input id=\"qSlider2\" name="+out.results[0].location.city+" data-slider-id=\"ex1Slider\" type=\"text\" data-slider-min=\"0\" data-slider-max=\"20\" data-slider-step=\"1\" data-slider-value=\"14\"/>";
	htmlComponent += "			</div>	";
	htmlComponent += "			<div class=\"col p-0 text-md-left d-none d-lg-block d-md-block d-sm-block pb-1 text-sm-center pl-1 slider-label-right\">100% or higher</div>";
	htmlComponent += "		</div>";
	htmlComponent += "	</div>";
	htmlComponent += "</div>";

	var customTicks = false;
}


// <div class=\"component-slider mt-5 mb-3\">
//   <div class=\"row\">
//     <div class=\"col\">
//       1 of 3
//     </div>
//     <div class=\"col-8\">
//       2 of 3 (wider)
//     </div>
//     <div class=\"col\">
//       3 of 3
//     </div>
//   </div>
// </div>



if(typeQuestion==8){
	htmlComponent += "<div class=\"component--multiple-select mt-5 mb-3 s-item animated "+cssAnimate+"\">";

	htmlComponent += "	<div class=\"mbr-text col-12 mbr-fonts-style\">";
 	htmlComponent += "		<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>";
 	htmlComponent += "		<p class=\"text-secondary\">Proin id eros arcu. Integer neque urna, malesuada vel iaculis ac, elementum ut mauris. Proin auctor sapien eu lacus congue, tincidunt luctus nisi egestas. </p>";
 	htmlComponent += "	</div>";

	for(let i = 0; i < out.results.length; i++){

		if(i == 4){
			htmlComponent += "<div class=\"row \">";
	    htmlComponent += "    <div class=\"col-12\">";
	    htmlComponent += "        <div class=\"card bg-white mt-2\">";
	    htmlComponent += "            <div class=\"checkbox card-body p-0\">";
	    htmlComponent += "                <label class=\"checkbox-container text-capitalize p-3 pl-5 spacing-left\">";
	    htmlComponent += "                    <input type=\"checkbox\" name=\"Q\" value="+i+" id=Q1_QAns"+i+">";
	    htmlComponent += "                    <span class=\"checkmark m-3\"></span>";
 			htmlComponent += " 										<span class=\"input-group ml-0\">";
      htmlComponent += " 											<input type=\"text\" class=\"form-control ml-n1 mr-2 mt-n1 pl-1\" id=\"QAns6Other\" name=\"QAns6Other\" placeholder=\"Other (please specify):\" <span class=\"input-group-addon\">";
      htmlComponent += " 											<i class=\"fa fa-keyboard-o mr-0 mt-0\"></i></span>";
      htmlComponent += " 										</span>";
	    htmlComponent += "                </label> ";
	    htmlComponent += "            </div>";
	    htmlComponent += "        </div>";
	    htmlComponent += "    </div>";
	    htmlComponent += "</div> ";
		}else{
	    htmlComponent += "<div class=\"row \">";
	    htmlComponent += "    <div class=\"col-12\">";
	    htmlComponent += "        <div class=\"card bg-white mt-2\">";
	    htmlComponent += "            <div class=\"checkbox card-body p-0\">";
	    htmlComponent += "                <label class=\"checkbox-container text-capitalize p-3 pl-5 spacing-left\">"+out.results[i].location.city;
	    htmlComponent += "										<input id=Q1_QAns"+i+" type=\"checkbox\" name=\"Q\" value="+i+">";
	    htmlComponent += "                    <span class=\"checkmark m-3\"></span>";
	    htmlComponent += "                </label> ";
	    htmlComponent += "            </div>";
	    htmlComponent += "        </div>";
	    htmlComponent += "    </div>";
	    htmlComponent += "</div> ";
	  }
	}
	htmlComponent += "</div>";
}

if(typeQuestion==8){
	htmlComponent += "<div class=\"table-responsive-split mt-5 mb-3 s-item animated "+cssAnimate+"\">";
	htmlComponent += "<table class=\"table table-bordered table-striped\">";
	htmlComponent += " <thead>";
	htmlComponent += " 	<tr>";

	htmlComponent += "    <th class=\"text-capitalize title-row\"></th>";
	for(let i = 0; i < out.results.length; i++){
		  htmlComponent += "	<th class=\"text-center text-capitalize title-col\" >"+out.results[i].location.city+"</th>";
	}
				
	htmlComponent += "  </tr>";
	htmlComponent += " </thead>";
	htmlComponent += "<tbody>";
			
	for(let i = 0; i < out.results.length; i++){

		htmlComponent += "	 <tr>";
		htmlComponent += "		<th class=\"text-capitalize\">"+out.results[i].location.city+"</th>";

		for(let j = 0; j < out.results.length; j++){
			htmlComponent += "	<td data-th='"+out.results[j].location.city+"' class=\"text-capitalize\">";
			htmlComponent += "		<label class=\"radio-container\" for=QAns"+i+"_"+j+" data-toggle=\"tooltip\" title='"+out.results[j].location.city+"'>";
			htmlComponent += "			<input id=QAns"+i+"_"+j+" type=\"radio\" name=QAns"+i+" value=\"1\" data-skip=\"0\" autocomplete=\"off\">";
			htmlComponent += "			<span class=\"checkmark\"></span>";
			htmlComponent += "		</label>";
			htmlComponent += "	</td>";
		}
			
		htmlComponent += "  </tr>";
	}

	htmlComponent += "  </tbody>";
	htmlComponent += " </table>";
	htmlComponent += "</div>";
}

if(typeQuestion==8){
	htmlComponent += "<div class=\"component--multiple-select mt-5 mb-3 s-item animated "+cssAnimate+"\">";
	htmlComponent += " <div class=\"row \">";
	htmlComponent += "  <div class=\"col-12\">";
	htmlComponent += "   <select class=\"selectpicker show-tick form-control form-control-lg\">";
	for(let j = 0; j < out.results.length; j++){
		htmlComponent += "    <option value='"+(j+1)+"' class=\"text-capitalize\">"+out.results[j].location.city+"</option>";
	}
	htmlComponent += "   </select>";
	htmlComponent += "  </div>";
	htmlComponent += " </div>";


	htmlComponent += "<div class=\"col-12 card bg-white mt-2 b-bottom\" style=\"display: none;\">";
	htmlComponent += "	<div class=\"box  box-primary py-2\">";
	htmlComponent += "   <div class=\"textbox\">";
	htmlComponent += "    <div class=\"input-group\">";
	htmlComponent += "     <input type=\"text\" class=\"form-control\" id=\"QAns1Other\" name=\"QAns1Other\" placeholder=\"Other (Please specify):\" data-skip=\"0\" autocomplete=\"off\">";
	htmlComponent += "     <div class=\"input-group-addon\">";
	htmlComponent += "     <i class=\"fa fa-keyboard-o\"></i>";
	htmlComponent += "    </div>";
	htmlComponent += "   </div>";
	htmlComponent += "  </div>";
	htmlComponent += " </div>";
	htmlComponent += "</div>";


	htmlComponent += "</div> ";


	
}


document.getElementById('survey-component').innerHTML = htmlComponent;
mainFunction();

if(customTicks){
	var tick = [];
}else{
	var tick = ['<i>|</i>0', '<i>|</i>10', '<i>|</i>20', '<i>|</i>30', '<i>|</i>40', '<i>|</i>50', '<i>|</i>60', '<i>|</i>70', '<i>|</i>80', '<i>|</i>90', '<i>|</i>100']
}

window.setTimeout(function(){
  $('#qSlider,#qSlider2,#qSlider3').slider({
    enabled: true,
    min: 0,
    max: 100,
    value: 50,
    step: 10,
    // min: 1,
    // max: 3,
    // value: 2,
    // step: 1,

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
    // ticks: [1,2,3],
    //ticks_positions: [], 
    ticks_labels: tick,

    // ticks_labels: ['<i>|</i>1', '<i>|</i>2', '<i>|</i>3'],
    ticks_snap_bounds: 0,
    tooltip: 'block',
    tooltip_position: 'top',
    tooltip_split: false,
      formatter: function(value) {
          return value +'%';

      }
  });
  window.setTimeout(function(){$('.onr-slide').removeClass("opacity-0");},100);
  });

 	// $('.slider-label-left').text("0");
 	// $('.slider-label-center').text("50");
 	// $('.slider-label-right').text("100");
})
.catch(err => { throw err });


// outside function
function mainFunction(){

	$(document).ready(function (){
      $(".next,.prev").click(function (){
          $('html, body').animate({
              scrollTop: $("#survey-app").offset().top
          }, 1000);
      });
  });

	dinamicSteps();

	function dinamicSteps(){
		// actions
		var currentItem = 0;
		var totalItem = ($('.s-item').length)-1;
		$('.s-item').addClass('hide');
		$('.s-item').eq(currentItem).addClass('active');
		checkItems();

		$('.next').on('click', function(){
			currentItem ++;
			$('.s-item').removeClass('active').addClass('hide');
			$('.s-item').eq(currentItem).addClass('active');
			checkItems();
		});
		$('.prev').on('click', function(){
			currentItem --;
			$('.s-item').removeClass('active').addClass('hide');
			$('.s-item').eq(currentItem).addClass('active');
			checkItems();
		});


		function checkItems(){
			if(currentItem == totalItem){
				$('.next').addClass('hide');
			}else{
				$('.next').removeClass('hide');
			}
			if(currentItem == 0){
				$('.prev').addClass('hide');
			}else{
				$('.prev').removeClass('hide');
			}
		}	
	}




// 	new Vue({
//   el: '#Vue',
//   data() {
//     return {
//       display: false
//     }
//   },
//   methods: {
//     toggleModal() {
//       this.display = !this.display;
//       const div = document.getElementById("myModal");
//       setTimeout(function(){
//         div.classList.toggle('visible');
//       },100);
      
      
//     }
//   }
// })

//tooltip
$('[data-toggle="tooltip"]').tooltip(); 

// radio
$('input[type="radio"]').change(function () { 
	// $('.card').removeClass('selected'); 
	$('input[type="radio"]').closest('.card').removeClass('selected');
	$(this).closest('.card').addClass('selected');
	resultVal = $(this).val();
});
$('.card').on('click', function(){
	$(this).find('input[type="radio"]').prop('checked', true).trigger('change');
});

//checkbox
$('input[type="checkbox"]').change(function(e) {
  if ($(this).prop("checked")) {
    $(this).closest('.card').addClass('selected');
  } else {
    $(this).closest('.card').removeClass('selected');
  }
});


//select functions
$('select').selectpicker();

var hasOther = 0;
  $('select').change(function () {
      // var qNo = parseInt(document.ANS.QNo.value, 10);
      // if (qNo == 11) {
          if ($(this).val() == 6) {
              hasOther = 1;
              //alert($(this).val());
              $('#QAns1Other').closest('.box').parent().show();
          } else {
              hasOther = 0;
              $('#QAns1Other').closest('.box').parent().hide();
              $('#QAns1Other').val('');
          }
      // }
  });


}