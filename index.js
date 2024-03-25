function sendToWhatsApp() {
    const recipient = '01029346225';
    const name = document.getElementById('الاسم الثلاثي').value;
    const phone = document.getElementById('رقم الهاتف').value;
    const specialty = document.querySelector('select[name="التخصص"]').value;
    const message = `الاسم: ${name}\nرقم الهاتف: ${phone}\nالتخصص: ${specialty}`;

    window.location.href = `https://api.whatsapp.com/send?phone=${recipient}&text=${encodeURIComponent(message)}`;
}