/*
  NFC Schedule System

  The NFC tag stores a URL such as:
  https://YOUR-SITE.com/?tag=FILIPINO3A

  When the phone opens that URL, this script reads ?tag=FILIPINO3A
  and shows the schedule associated with that tag.
*/

const schedules = {
  "FILIPINO3A": {
    title: "FILIPINO 3A — 1st Semester",
    image: "images/filipino-3a-schedule.png"
  }
};

const params = new URLSearchParams(window.location.search);
const tag = (params.get("tag") || "FILIPINO3A").toUpperCase();

const schedule = schedules[tag];

const title = document.getElementById("title");
const status = document.getElementById("status");
const image = document.getElementById("scheduleImage");
const tagInfo = document.getElementById("tagInfo");

if (schedule) {
  title.textContent = schedule.title;
  status.textContent = "Schedule loaded successfully.";
  image.src = schedule.image;
  tagInfo.textContent = `NFC Tag: ${tag}`;
} else {
  title.textContent = "NFC Tag Not Registered";
  status.textContent = "This NFC tag has no schedule assigned yet.";
  image.style.display = "none";
  tagInfo.textContent = `NFC Tag: ${tag}`;
}
