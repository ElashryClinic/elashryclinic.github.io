const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [new Recipient("recipient@email.com", "Recipient")];

const emailParams = new EmailParams()
    .setFrom("info@trial-neqvygm9j9wl0p7w.mlsender.net")
    .setFromName("Your Name")
    .setRecipients(recipients)
    .setSubject("Subject")
    .setHtml("Greetings from the team, you got this message through MailerSend.")
    .setText("Greetings from the team, you got this message through MailerSend.");

mailersend.send(emailParams);