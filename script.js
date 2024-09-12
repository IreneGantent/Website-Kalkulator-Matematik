function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById("result").innerText =
      "Mohon masukkan nilai yang valid untuk alas dan tinggi.";
    return;
  }

  const luas = (alas * tinggi) / 2;

  // Menampilkan rumus awal
  const initialFormula = "L = 1/2 × a × t";

  // Menampilkan rumus dengan nilai yang diinputkan
  const filledFormula = `L = 1/2 × ${alas} × ${tinggi}`;

  const result = `L = ${luas}`;

  // Gabungkan kedua rumus dan tampilkan
  document.getElementById(
    "result"
  ).innerHTML = `${initialFormula}<br>${filledFormula}<br>L= ${luas}`;
}

function resetForm() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("result").innerText = "";
}

function hitungKeliling() {
  const sisi1 = parseFloat(document.getElementById("sisi1").value);
  const sisi2 = parseFloat(document.getElementById("sisi2").value);
  const sisi3 = parseFloat(document.getElementById("sisi3").value);

  if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    document.getElementById("resultKL").innerText =
      "Mohon masukkan nilai yang valid untuk ketiga sisi.";
    return;
  }

  const keliling = sisi1 + sisi2 + sisi3;

  // Menampilkan rumus awal
  const initialFormula = "K = S1 + S2 + S3";

  // Menampilkan rumus dengan nilai yang diinputkan
  const filledFormula = `K = ${sisi1} + ${sisi2} + ${sisi3}`;

  // Gabungkan kedua rumus dan hasil
  document.getElementById(
    "resultKl"
  ).innerHTML = `${initialFormula}<br>${filledFormula}<br>K = ${keliling}`;
}

function resetFormKl() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("resultKl").innerText = "";
}

function showTab(tab) {
  // Hide both sections
  document.getElementById("luas").classList.add("hidden");
  document.getElementById("keliling").classList.add("hidden");

  // Show the selected section
  document.getElementById(tab).classList.remove("hidden");

  // Update tab classes
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((t) => {
    if (
      t.textContent.trim() ===
      (tab === "luas" ? "Luas Segitiga" : "Keliling Segitiga")
    ) {
      t.classList.add("active");
      t.classList.remove("non-active");
    } else {
      t.classList.remove("active");
      t.classList.add("non-active");
    }
  });
}
