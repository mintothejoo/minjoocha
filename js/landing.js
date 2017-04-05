$(document).ready(function(){

	$(".element").typed({
		strings: ["Hi. ^1000 I'm Minjoo"],
		typeSpeed: 0,
		backspace: function(curString,curStrPos){
			setTimeout(function(){
				if(self.arrayPos == 0 && self.arrayPos == 2){
					self.stopNum=3;
				}
				else{
					self.stopNum=4;
				}
			})
		}
	});

});