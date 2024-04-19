function sendEmail()
{
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "elashryclinic@gmail.com",
    Password: "DE16E607D2E5709077CF6419124DC5404BB4",
    To: "elashryclinic@gmail.com",
    From: "elashryclinic@gmail.com",
    Subject : "عملية حجز جديدة من خلال موقع عيادات العشري",
    Body : `<h3>حدثت عملية حجز جديدة بموقع عيادات العشري بالتفاصيل الآتية: </h3><br><h2>الاسم:</h2><h1>${document.getElementById('الاسم الثلاثي').value}</h1><br><h2>رقم الهاتف:</h2><h1>${document.getElementById('رقم الهاتف').value}</h1><br><h2>التخصص:</h2><h1>${document.getElementById('التخصص').options[document.getElementById('التخصص').selectedIndex].text}</h1>`
}).then(
  message => console.log(message)
);
}

function mainMenu() {
  window.location.href = 'https://elashryclinic.github.io/';
}

if (sendEmail())
{
  mainMenu();
}