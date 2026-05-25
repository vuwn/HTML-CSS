function submitForm(event) {
    event.preventDefault();

    // Lấy giá trị các input text, password, email, number, date, select
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    const quantity = document.getElementById('quantity').value;
    const payment = document.getElementById('payment').value;

    // Lấy giá trị radio
    const title = document.querySelector('input[name="title"]:checked')?.value || "";

    // Lấy giá trị checkbox
    const love = document.getElementById('Doyouloveme').checked;

    // Kiểm tra bắt buộc
    if (!username || !password || !email || !phone || !birthdate || !quantity || !payment || !title) {
        alert("Bạn phải điền đầy đủ thông tin!");
        return;
    }

    // Hiển thị hoặc xử lý dữ liệu
    const data = {
        username,
        password,
        email,
        phone,
        birthdate,
        quantity,
        payment,
        title,
        Doyouloveme: love
    };
    console.log(data);
}

// Gán sự kiện cho form
document.querySelector('form').onsubmit = submitForm;
