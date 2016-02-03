window.onload= function(){
	/*** CONGIG ***/
	var numYears = 90
	var canvasWidth = 600;
	var canvasHeight = 800;
	var gapRatio = 0.5;
	var borderColor = "#000";
	var groupDays = 7;
	var rowMultiples = 13;
	var startDate = new Date(16,11,1988);
	
	/*** COMPUTED ***/
	var numSquares = parseInt(numYears*365/groupDays); // weeks
	var aspectRatio = canvasWidth/canvasHeight;
	var numSquaresW = parseInt(aspectRatio*Math.pow(numSquares,0.5));
	var numSquaresH = parseInt(numSquares/numSquaresW);
	console.log(numSquares);
	var area = canvasWidth*canvasHeight;

	//var squareSize = Math.pow(((1-gapRatio-gapRatio*gapRatio)*area/numSquares), 1/2);
	var squareSize = canvasWidth/((1+gapRatio)*numSquaresW);
	var gapSize = gapRatio*squareSize;

	// var numSquaresW = parseInt(canvasWidth/(squareSize+gapSize));
	// var numSquaresH = parseInt(canvasHeight/(squareSize+gapSize));
	console.log(numSquaresW);
	console.log(numSquaresH);
	console.log(numSquaresW*numSquaresH);

	var paper = Raphael(document.getElementById("calendar"), canvasWidth, canvasHeight);
	calendar = new Calendar(paper, startDate, numYears, groupDays, rowMultiples);
	calendar.render();

	
}


class Calendar{
	constructor(paper, startDate, numYears, groupDays, rowMultiples){
		this.paper = paper;
		this.startDate - startDate;
		this.numYears = numYears;
		this.groupDays = groupDays;
		this.rowMultiples = rowMultiples;
	}
	

	addEvent(date, type, description){

	}

	render(){
		
		y=0;
		for (var h = 0; h < numSquaresH; h++) {
			x = 0;
			for (var w = 0; w < numSquaresW; w++) {
				var square = this.paper.rect(x,y,squareSize,squareSize);
				square.attr("fill", "#fff");
				square.attr("stroke", borderColor);
				square.attr("stroke-width", gapSize*0.3)
				x += squareSize+gapSize
			}
			y+=(squareSize+gapSize);
		}
	}
}

class EventTypes{
	static get TYPE1(){
		return 0;
	}
	static get TYPE2(){
		return 0;
	}
}
/*** MATH. Do it later if you want **/
// r = width of square
// w = num of squares in row
// h = num squares in col
//Area of squares = r^2*(w*h)
//Area of gaps = f*r^2*(2wh-w-h)+f^2*r^2*(w-1)*(h-1)

