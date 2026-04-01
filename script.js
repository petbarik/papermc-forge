function switchTab(tabName, el) {
document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

document.getElementById(tabName).classList.add('active');
el.classList.add('active');
}

function openSelectedVersion() {
const selector = document.getElementById('version');
const value = selector.value;
const url = "https://petbarik.github.io/papermc-forge/" + value;

window.open(url, '_blank');
}

function launchMod(version, modUrl) {
const url = "https://petbarik.github.io/papermc-forge/" + version +
"?mod=" + modUrl;

window.open(url, '_blank');
}