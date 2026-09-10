# NFC Class Schedule

## How it works
1. Upload this website to GitHub Pages, Vercel, or another HTTPS host.
2. Copy your website URL.
3. Write this URL to an NFC tag:
   https://YOUR-SITE.com/?tag=FILIPINO3A
4. Tap the NFC tag using a compatible iPhone or Android phone.
5. The phone opens the website and displays the Filipino 3A schedule.

## Add another schedule
Open `js/app.js` and add another entry:

"TAG002": {
  title: "Another Class",
  image: "images/another-schedule.png"
}

Then place the new picture inside the `images` folder and write:
https://YOUR-SITE.com/?tag=TAG002
to the second NFC tag.

## Important
Use an HTTPS website when publishing. The NFC tag itself only needs to store the URL; the picture stays on the website/server.
