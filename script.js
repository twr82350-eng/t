// Boot screen
setTimeout(() => {
    document.getElementById("boot").style.display = "none";
    document.getElementById("lockscreen").style.display = "flex";
}, 3000);

// Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
        now.getHours().toString().padStart(2, "0") + ":" +
        now.getMinutes().toString().padStart(2, "0");
}
setInterval(updateClock, 500);
updateClock();

// Unlock
function unlock() {
    const password = document.getElementById("lockInput").value;
    if (password === "1234") {
        document.getElementById("lockscreen").style.display = "none";
        document.getElementById("welcome").style.display = "flex";

        setTimeout(() => {
            document.getElementById("welcome").style.display = "none";
            document.getElementById("desktop").style.display = "block";
        }, 2000);
    }
}
