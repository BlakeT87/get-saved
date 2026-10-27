# Get Saved

A single-page, mobile-first website that walks a visitor through the gospel and the salvation prayer in five steps.

- No build, no dependencies, no tracking. Everything is in `index.html`.
- Works offline once loaded, supports dark mode, and is keyboard and screen-reader friendly.

## Publish it (free)

**GitHub Pages:** repo Settings → Pages → deploy from branch (`main`, root). Your URL will be `https://<user>.github.io/get-saved/`.
Netlify, Cloudflare Pages or Vercel also work by dragging in this folder.

## QR code

Once you have the live URL, generate a QR code at any generator (e.g. qr-code-generator.com, or Canva) and print it on cards, flyers, shirts or signs. Use a short, memorable domain if you can, since QR codes scan better with shorter URLs.

## Customize

- Edit the text and verses directly in `index.html`.
- Add a church name, contact email or "request prayer" link in the "I have questions" and "Welcome" sections.

## Follow-up form (Google Sheets)

Visitors can optionally leave a first name and a phone/email. Responses go to a Google Sheet in your account. The form stays hidden until you connect it.

1. Create a new Google Sheet. Add headers in row 1: `Time`, `First name`, `Contact`, `Source`.
2. In the Sheet: Extensions → Apps Script. Replace the contents with `apps-script/Code.gs`, then Save.
3. Deploy → New deployment → type "Web app". Execute as **Me**, who has access **Anyone**. Deploy and approve the permissions.
4. Copy the Web app URL (ends in `/exec`).
5. In `index.html`, set `var ENDPOINT = '<that URL>';` and publish.
6. Submit a test entry from the live site and check the Sheet.

Keep the Sheet private (don't share the link) since it holds contact details. Spreadsheet formulas are neutralised in the script. Re-deploy (Manage deployments → Edit → New version) after any change to `Code.gs`.
