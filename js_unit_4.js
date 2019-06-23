var recoveryList = []; // объявлям переменную

function recovery() {
	// чистим поле
	for(var i=0; i<recoveryList.length; i++) {
		point = document.getElementById(recoveryList[i]);
		var x = recoveryList[i].charAt(0);
		var y = Number(recoveryList[i].charAt(1));
     
        if(x == "A" || x == "C" || x == "E" || x == "G") {
			if(y == 1 || y == 3 || y == 5 || y == 7) {
				point.style.background = "#002";
			} else if(y == 2 || y == 4 || y == 6 || y == 8) {
				point.style.background = "white";
			}
		} else if(x == "B" || x == "D" || x == "F" || x == "H") {
			if(y == 1 || y == 3 || y == 5 || y == 7) {
				point.style.background = "white";
			} else if(y == 2 || y == 4 || y == 6 || y == 8) {
				point.style.background = "#002";
			}
		}
	}
	recoveryList = [];
}

window.onclick=function(e) {
	recovery();
	// берем id нажатой пользователем клетки, окрашиваем ее в синий
	// потом в pointSearch получаем список походящих клеток и окрашиваем их
	// в зеленый
	var elem = e ? e.target : window.event.srcElement;
	elem.style.background = 'blue';
	list = pointSearch(elem.id);

	for(var i=0; i<list.length; i++) {
		j = document.getElementById(list[i]);
		recoveryList.push(list[i]);
		j.style.background = 'green';
	}

	recoveryList.push(elem.id);
}

function pointSearch(id) {
	// функция для поиска точек аналогична функции из 2 задачи
	var x = id.charAt(0);
	var y = Number(id.charAt(1));

	switch(x) {
		case 'A':
			x = 1;
			break;
		case 'B':
			x = 2;
			break;
		case 'C':
			x = 3;
			break;
		case 'D':
			x = 4;
			break;
		case 'E':
			x = 5;
			break;
		case 'F':
			x = 6;
			break;
		case 'G':
			x = 7;
			break;
		case 'H':
			x = 8;
			break;
	}

	var allPoints = {};
	allPoints.point1 = [x+1, y+2];
	allPoints.point2 = [x+2, y+1];
	allPoints.point3 = [x+2, y-1];
	allPoints.point4 = [x+1, y-2];
	allPoints.point5 = [x-1, y-2];
	allPoints.point6 = [x-2, y-1];
	allPoints.point7 = [x-2, y+1];
	allPoints.point8 = [x-1, y+2];

	var str = [];

	for(var i = 1; i < 9; i++) {
		var key = "point"+i;
		var j = 1;

		if ((allPoints[key][0]>0 && allPoints[key][1]>0) && (allPoints[key][0]<9 && allPoints[key][1]<9)) {
			switch(allPoints[key][0]) {
				case 1:
					allPoints[key][0] = "A";
					break;
				case 2:
					allPoints[key][0] = "B";
					break;
				case 3:
					allPoints[key][0] = "C";
					break;
				case 4:
					allPoints[key][0] = "D";
					break;
				case 5:
					allPoints[key][0] = "E";
					break;
				case 6:
					allPoints[key][0] = "F";
					break;
				case 7:
					allPoints[key][0] = "G";
					break;
				case 8:
					allPoints[key][0] = "H";
					break;
			}
			str.push(allPoints[key][0] + allPoints[key][1]);
		}
	}

	return str;
}