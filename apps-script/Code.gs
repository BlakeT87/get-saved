// Receives follow-up requests from the landing page and appends them to the bound Google Sheet.
// Columns: Time | First name | Contact | Where they were on the page
function doPost(e) {
  var p = e.parameter || {};
  if (p.website) return ContentService.createTextOutput('ok'); // spam trap
  var clip = function (v, n) { return String(v || '').slice(0, n).replace(/^[=+\-@]/, "'$&"); };
  var contact = clip(p.contact, 120);
  if (!contact) return ContentService.createTextOutput('ok');
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    .appendRow([new Date(), clip(p.name, 60), contact, clip(p.context, 20)]);
  return ContentService.createTextOutput('ok');
}
