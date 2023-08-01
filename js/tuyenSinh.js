
document.getElementById("btnKQ").onclick = ketQuaThi;
function ketQuaThi() {
  if (
    document.getElementById("mon1").value === "" ||
    document.getElementById("mon2").value === "" ||
    document.getElementById("mon3").value === "" ||
    document.getElementById("diemChuan").value === "" ||
    document.getElementById("khuVuc").value === "" ||
    document.getElementById("doiTuong").value === ""
  ) {
    alert("Hãy nhập thông tin");
    return;
  }
 
  var diemMon1 = Number(document.getElementById("mon1").value);
  var diemMon2 = Number(document.getElementById("mon2").value);
  var diemMon3 = Number(document.getElementById("mon3").value);
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = Number(document.getElementById("doiTuong").value);

  var diemKhuVuc = 0;
  if (khuVuc === "A") {
    diemKhuVuc = 2;
  } else if (khuVuc === "B") {
    diemKhuVuc = 1;
  } else if (khuVuc === "C") {
    diemKhuVuc = 0.5;
  } else if (khuVuc === "X") {
    diemKhuVuc = 0;
  } else {
    alert("Vui lòng chọn khu vực");
    return;
  }

  var diemDoiTuong = 0;
  if (doiTuong === 1) {
    diemDoiTuong = 2.5;
  } else if (doiTuong === 2) {
    diemDoiTuong = 1.5;
  } else if (doiTuong === 3) {
    diemDoiTuong = 1;
  } else if (doiTuong === 0) {
    diemDoiTuong = 0;
  } else {
    alert("Vui lòng nhập đối tượng");
    return;
  }


  diemTong = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;


  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("ketQua1").innerHTML =
      "Thí sinh đã rớt vì có môn bị 0 điểm. Tổng điểm của thí sinh là " +
      diemTong;
    return;
  }
 
  if (diemTong >= diemChuan) {
    document.getElementById("ketQua1").innerHTML =
      "Thí sinh đã đậu. Tổng điểm của thí sinh là " + diemTong;
  } else {
    document.getElementById("ketQua1").innerHTML =
      "Thí sinh đã rớt. Tổng điểm của thí sinh là " + diemTong;
  }
}
