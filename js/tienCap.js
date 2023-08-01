
var nhaDan = document.getElementById("nhaDan");
var doanhNghiep = document.getElementById("doanhNghiep");
var ketNoi = document.getElementById("ketNoi");
function anHienKetNoi() {
  if (nhaDan.checked) {
    ketNoi.style.display = "none";
  } else {
    ketNoi.style.display = "block";
  }
}
document.getElementById("btnTinhTienCap").addEventListener("click", tinhTienCap);

function tinhTienCap() {

  var maKhachHang = document.getElementById("maKh").value;
  var soKenh = Number(document.getElementById("soKenh").value);
  var soKetNoi = Number(document.getElementById("soKetNoi").value);

  if (soKenh < 0) {
    alert("Vui lòng nhập số nguyên dương");
    return;
  }
  if (soKetNoi < 0) {
    alert("Vui lòng nhập số nguyên dương");
    return;
  }
  var tienCap = 0;
  if (nhaDan.checked) {
    tienCap = 4.5 + 20.5 + soKenh * 7.5;
  } else if (doanhNghiep.checked) {
    if (soKetNoi <= 10) {
      tienCap = 15 + 75 + soKenh * 50;
    } else {
      tienCap = 15 + 75 + (soKetNoi - 10) * 5 + soKenh * 50;
    }
  } else {
    alert("Vui lòng chọn loại khách hàng");
  }
  document.getElementById("ketQua4").innerHTML =
    "Mã khách hàng: " +
    maKhachHang +
    "<br>" +
    "Tiền cáp phải trả: " +
    tienCap +
    "$";
}
