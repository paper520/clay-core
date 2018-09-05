// 把颜色统一转变长rgba(x,x,x,x)格式
// 返回数字数组[r,g,b,a]
clay.color = function (color) {

	var temp = clay('head').css('color', color).css('color').replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + _regexp.whitespace));
	return [+temp[0], +temp[1], +temp[2], temp[3] == undefined ? 1 : +temp[3]];

};

// 在指定范围之间
// 返回不少于指定个数的颜色值数组
clay.getColors = function (num) {

	if (typeof num == 'number' && num > 3) {

		var temp = [], flag = 0;
		for (flag = 1; flag <= num; flag++)
			temp.push('rgb(' + (Math.random(1) * 230 + 20) + ',' + (Math.random(1) * 230 + 20) + ',' + (Math.random(1) * 230 + 20) + ')');
		return temp;

	} else {
		return ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'];
	}

};