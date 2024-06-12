let gmaildata = {
    name: 'Gmail',
    mailboxes: {
        inbox: [
            {
                id: 1,
                sender: 'john.doe@example.com',
                subject: 'Meeting Reminder',
                body: 'Just a reminder that we have a meeting tomorrow at 10 AM.'
            },
            {
                id: 2,
                sender: 'emma.smith@example.com',
                subject: 'Project Update',
                body: 'Attached is the latest update on our project. Let me know if you have any questions.'
            }
        ],

        sent: [
            {
                id: 1,
                recipient: 'alice.jones@example.com',
                subject: 'Meeting Agenda',
                body: 'Here is the agenda for our meeting next week.'
            },
        
        ],
        drafts: [
          
        ]
    },
};


let mailboxNames = Object.keys(gmailData.mailboxes);

let allEmails = [];
for (let mailbox in gmailData.mailboxes) {
    allEmails = allEmails.concat(gmailData.mailboxes[mailbox]);
}

let secondEmailText = allEmails[1].body;

let emailToMarkAsSent = gmailData.mailboxes.drafts[0];
gmailData.mailboxes.sent.push(emailToMarkAsSent);
gmailData.mailboxes.drafts.splice(0, 1);

let draftEmail = {
    id: 3,
    recipient: 'bob.roberts@example.com',
    subject: 'Weekly Report',
    body: 'Attached is the weekly report for your review.'
};
gmailData.mailboxes.drafts.push(draftEmail);

console.log(mailboxNames);
console.log(allEmails);
console.log(secondEmailText);
console.log(gmailData.mailboxes);