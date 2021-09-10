// console.log(document.getElementById("chieudai").value);
function tinhDienTich(){
	let chdai = parseFloat(document.getElementById("chieudai").value);
	let chrong = parseFloat(document.getElementById("chieurong").value);
	let dientich = chdai * chrong;
	document.getElementById("ketqua").innerHTML = dientich.toFixed(2);
	console.log(dientich);
}

// function myFunction(){
// 	let x = document.getElementById("chieudai").value;
// document.getElementById("ketqua").innerHTML = x;
// }