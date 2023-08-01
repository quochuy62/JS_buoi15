
function tinhTienDien() {

  if (
    document.getElementById("tenKH").value === "" ||
    document.getElementById("dienSuDung").value === ""
  ) {
    alert(
      "Vui lòng nhập tên và số kw điện"
    );
    return;
  }

  var tenKh = document.getElementById("tenKH").value;

  var soKw = Number(document.getElementById("dienDung").value);
 
  var tienDien = 0;
  if (soKw >= 0 && soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw >= 0 && soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw >= 0 && soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw >= 0 && soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  } else {
    alert("Số tiền điện không hợp lệ");
    return;
  }
  document.getElementById("ketQua2").innerHTML =
    "Khách hàng " +
    tenKh +
    " phải trả số tiền điện là " +
    tienDien.toLocaleString() +
    " VND";
}
document.getElementById("btnTinh").onclick = tinhTienDien;
