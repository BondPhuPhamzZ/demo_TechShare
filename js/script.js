// Simple scripts for interactivity mockup

document.addEventListener("DOMContentLoaded", function () {
  // Auto calculate rental price on rent.html
  const rentDaysInput = document.getElementById("rentDays");
  const totalRentElem = document.getElementById("totalRent");
  const depositElem = document.getElementById("depositAmount");
  const finalTotalElem = document.getElementById("finalTotal");

  if (rentDaysInput) {
    rentDaysInput.addEventListener("input", function () {
      // Mock base values (usually this would come from the item's data)
      const pricePerDay = 150000; // 150k/day for laptop
      const deposit = 2000000; // 2M deposit

      let days = parseInt(this.value);
      if (isNaN(days) || days < 1) {
        days = 1;
        this.value = 1;
      }

      const totalRent = days * pricePerDay;
      const finalTotal = totalRent + deposit;

      // Format to VND
      const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });

      if (totalRentElem) totalRentElem.innerText = formatter.format(totalRent);
      if (finalTotalElem)
        finalTotalElem.innerText = formatter.format(finalTotal);
    });
  }

  // Mock form submission for renting
  const rentForm = document.getElementById("rentForm");
  if (rentForm) {
    rentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Yêu cầu thuê thiết bị đã được gửi thành công! Chủ thiết bị sẽ liên hệ với bạn qua SĐT/Zalo.",
      );
      window.location.href = "index.html";
    });
  }
});
