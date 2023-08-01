
function tinhThue() {
  if (
    document.getElementById("hoTen").value === "" ||
    document.getElementById("tongTn").value === "" ||
    document.getElementById("soNguoi").value === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  var hoTen = document.getElementById("hoTen").value;
  var tongTien = Number(document.getElementById("tongTn").value);
  var soNguoi = Number(document.getElementById("soNguoi").value);
  if (tongTien < 0 || soNguoi < 0) {
    alert("Vui lòng nhập lại");
    return;
  }

  var chiuThue = tongTien - 4000000 - soNguoi * 1600000;
  var tienThue = 0;
  if (chiuThue >= 0 && chiuThue <= 60000000) {
    tienThue = (chiuThue * 5) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 120000000) {
    tienThue = (chiuThue * 10) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 210000000) {
    tienThue = (chiuThue * 15) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 384000000) {
    tienThue = (chiuThue * 20) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 624000000) {
    tienthue = (chiuThue * 25) / 100;
  } else if (chiuThue >= 0 && chiuThue <= 960000000) {
    tienThue = (chiuThue * 30) / 100;
  } else if (chiuThue >= 0 && chiuThue > 960000000) {
    tienThue = (chiuThue * 35) / 100;
  } else {
    tienThue = 0;
  }
  document.getElementById("ketQua3").innerHTML =
    "Họ và tên người chịu thuế: " +
    hoTen +
    "<br>" +
    "Số tiền thuế phhải nộp là " +
    tienThue.toLocaleString() +
    " VND";
}
document.getElementById("btnTinhThue").onclick = tinhThue;
