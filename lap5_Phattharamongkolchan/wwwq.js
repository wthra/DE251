function processWage() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const wage = parseFloat(document.getElementById('wage').value) || 0;

    // ดึงค่าชั่วโมงการทำงานจากทุกวัน
    const monHours = parseFloat(document.getElementById('monHours').value) || 0;
    const tueHours = parseFloat(document.getElementById('tueHours').value) || 0;
    const wedHours = parseFloat(document.getElementById('wedHours').value) || 0;
    const thuHours = parseFloat(document.getElementById('thuHours').value) || 0;
    const friHours = parseFloat(document.getElementById('friHours').value) || 0;
    const satHours = parseFloat(document.getElementById('satHours').value) || 0;
    const sunHours = parseFloat(document.getElementById('sunHours').value) || 0;

    // ตรวจสอบว่าชั่วโมงการทำงานไม่เกิน 8 ชั่วโมง
    if (monHours > 8 || tueHours > 8 || wedHours > 8 || thuHours > 8 || friHours > 8 || satHours > 8 || sunHours > 8) {
        alert("ชั่วโมงการทำงานในแต่ละวันต้องไม่เกิน 8 ชั่วโมง!");
        return;  // หยุดการทำงานหากมีการใส่ชั่วโมงเกิน
    }

    // คำนวณจำนวนชั่วโมงรวมและค่าจ้างรายสัปดาห์
    const totalHours = monHours + tueHours + wedHours + thuHours + friHours + satHours + sunHours;
    const weeklyWage = wage * totalHours;

    // แสดงผลลัพธ์
    document.getElementById('fullName').value = firstName + " " + lastName;
    document.getElementById('weeklyWage').value = isNaN(weeklyWage) ? "0.00 บาท" : weeklyWage.toFixed(2) + " บาท";

    // แสดงฟอร์มผลลัพธ์
    document.getElementById('resultForm').style.display = 'block';
}