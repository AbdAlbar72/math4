
function addUser() {
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;

    if (player1Name.trim() === "" || player2Name.trim() === "") {
        alert("Please enter both player names.");
    } else {
        localStorage.setItem("player1Name", player1Name);
        localStorage.setItem("player2Name", player2Name);
        
        window.location = "quiz_game_page.html";
    }
}

