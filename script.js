function sayThankYou() {
    const container = document.getElementById('container');
    if (container) {
        // Set the innerHTML to the HTML string of the image
        container.innerHTML = '<img src="replace.gif" alt="Replacement Image" style="margin-top: 20px">';
    }
};
function hideNoButton() {
    // This makes the "No" button disappear completely
    document.getElementById('noBtn').style.display = 'none';
    // Optional: Clear the message if they previously clicked Yes
    document.getElementById('message').innerText = "Now you don't have any choice";}

