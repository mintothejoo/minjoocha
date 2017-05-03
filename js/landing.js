
// $.fn.typed = function (option) {
//     return this.each(function () {
//       var $this = $(this)
//         , data = $this.data('typed')
//         , options = typeof option == 'object' && option
//       if (!data) $this.data('typed', (data = new Typed(this, options)))
//       if (typeof option == 'string') data[option]()
//     });
// }


$(document).ready(function(){
	$('#menuTopMobile').visibility('hidden');
	$('.masthead').visibility({
	      once: false,
	      onBottomPassed: function() {
	      	$('#verticalNav').transition('fade out');
	      	$('#fixedMenu').transition('fade in');
	      	$('#menuTopMobile').transition('fade in');
	      },
	      onBottomPassedReverse: function() {
	      	$('#verticalNav').transition('fade in');
	      	$('#fixedMenu').transition('fade out');
	      	$('#menuTopMobile').transition('fade out');
	      }
    });

    $('.ui.footer').visibility({
    	once:false,
    	onTopVisible: function(){
    		$('#verticalNav').transition('fade out');
    	},
    	onTopVisibleReverse: function(){
    		$('#verticalNav').transition('fade in');
    	}
    });

    $('.progress').progress();

    $('.special.card .image').dimmer({
    	on:'hover',
    });

    $('#menuBotMobile #name').popup({
    	popup: '#footerPopUp',
    	inline:true,
    	position: 'top center',
    	on:'click'
    });
    //Project Card



	// console.log($(window).scrollTop().valueOf());
 //    $(window).scroll(function (e){
 //    	console.log($(window).scrollTop());
	// 	if ($(this).scrollTop > 100) {//Show the slider after scrolling down 100px
	//         $('#verticalNav').transition('fade out');
	// 	    $('#fixedMenu').transition('fade in');
	// 	}
	//     else{
	//         $('#verticalNav').transition('fade in');
	// 	    $('#fixedMenu').transition('fade out');
	// 	}

 //    });

    // $('#menu').visibility({
    // 	type:'fixed',
    // 	offset:15
    // })

    $(".elementSkills").typed({
		strings: ["Here are my <u>Skills</u>."],
		typeSpeed: 50,
		backDelay: 1000,
	});

	$(".elementProjects").typed({
		strings: ["Here are my <u>Projects</u>."],
		typeSpeed: 50,
		backDelay: 1000,
	});


    $(".elementAbout").typed({
		strings: ["This is <u>Who I am</u>.","This is <u>What I love</u>.","This is <u>About Me</u>."],
		typeSpeed: 50,
		backDelay: 1000,
		backspace: function(curString, curStrPos){

				// varying values for setTimeout during typing
				// can't be global since number changes each time loop is executed
				var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
				var self = this;

				setTimeout(function() {

					// ----- this part is optional ----- //
					// check string array position
					// on the first string, only delete one word
					// the stopNum actually represents the amount of chars to
					// keep in the current string. In my case it's 14.
					 if (self.arrayPos == 1, 2, 3, 4){
						self.stopNum = 5;
					 }
					//every other time, delete the whole typed string
					 //else{
						//self.stopNum = 0;
					 //}

					// ----- continue important stuff ----- //
					// replace text with current text + typed characters
					self.el.text(self.text + curString.substr(0, curStrPos));

					// if the number (id of character in current string) is
					// less than the stop number, keep going
					if (curStrPos > self.stopNum){
						// subtract characters one by one
						curStrPos--;
						// loop the function
						self.backspace(curString, curStrPos);
					}
					// if the stop number has been reached, increase
					// array position to next string
					else if (curStrPos <= self.stopNum){
						clearTimeout(clear);
						var clear = self.arrayPos = self.arrayPos+1;
						// must pass new array position in this instance
						// instead of using global arrayPos
						self.typewrite(self.strings[self.arrayPos], curStrPos);
					}

				// humanized value for typing
				}, humanize);

			}
	});

	$(".element").typed({
		strings: ["I can <u>Create</u>.","I can <u>Design</u>.","I can <u>Engineer</u>.","I'm <u>Minjoo Cha</u>."],
		typeSpeed: 50,
		backDelay: 1000,
		backspace: function(curString, curStrPos){

				// varying values for setTimeout during typing
				// can't be global since number changes each time loop is executed
				var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
				var self = this;

				setTimeout(function() {

					// ----- this part is optional ----- //
					// check string array position
					// on the first string, only delete one word
					// the stopNum actually represents the amount of chars to
					// keep in the current string. In my case it's 14.
					 if (self.arrayPos == 1, 2, 3, 4){
						self.stopNum = 5;
					 }
					//every other time, delete the whole typed string
					 //else{
						//self.stopNum = 0;
					 //}

					// ----- continue important stuff ----- //
					// replace text with current text + typed characters
					self.el.text(self.text + curString.substr(0, curStrPos));

					// if the number (id of character in current string) is
					// less than the stop number, keep going
					if (curStrPos > self.stopNum){
						// subtract characters one by one
						curStrPos--;
						// loop the function
						self.backspace(curString, curStrPos);
					}
					// if the stop number has been reached, increase
					// array position to next string
					else if (curStrPos <= self.stopNum){
						clearTimeout(clear);
						var clear = self.arrayPos = self.arrayPos+1;
						// must pass new array position in this instance
						// instead of using global arrayPos
						self.typewrite(self.strings[self.arrayPos], curStrPos);
					}

				// humanized value for typing
				}, humanize);

			}
	});

	var $skills = $('#skills').isotope({
		itemSelector: '.grid-item',
		percentPosition:true,
		gutter:20,
		masonry: {
		    columnWidth: '.grid-sizer',
		    gutter:10,
		    fitWidth:true
	  	},
	  	getSortData:{
	  		expertise:'[data-expertise] parseInt'
	  	}
	});

	$skills.imagesLoaded().progress(function(){
		$skills.isotope('layout');
	});

	$skills.isotope({sortBy:'expertise'});

	var $grid = $('#masonry').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  gutter:20,
	  masonry: {
	    columnWidth: '.grid-sizer',
	    gutter:10,
	    fitWidth:true
	  }
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});  

	$(window).on('resize', function(){
   		$('#masonry').isotope('layout')
	});

	$(".ui.dropdown").dropdown({

		action: 'combo',
		onChange: function(value,text,$selectedItem){
			$grid.isotope({filter : value.toString()});
			$skills.isotope({sortBy: 'expertise'});
		}
	});

	// Screen resolutions

	// tablet
	if($(window).width()<=799 && $(window).width()>425){

	}
	// mobile
	if($(window).width()<=425){

	}

});

