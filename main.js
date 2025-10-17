function updateTime() {
    const utcTimeElement = document.querySelector("[data-testid='currentTimeUTC']");
    const now = new Date();
    utcTimeElement.textContent = `UTC Time: ${now.toUTCString()}`;
}

updateTime();
setInterval(updateTime, 60000);