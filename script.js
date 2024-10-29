document.getElementById("btn").addEventListener("click", function() {
    const message = document.getElementById("birthdayMessage");
    if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block"; 
    } else {
        message.style.display = "none"; 
    }
});

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('loadingScreen').style.display = 'none'; // Hide the loading screen
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in'); // Add fade-in animation
});

document.getElementById('btn').addEventListener('click', function(){
    const content = document.getElementById('birthdayMessage');
    content.classList.add('fade-in');
})