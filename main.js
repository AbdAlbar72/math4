
function send() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    const questionHeader = document.createElement("h3");
    questionHeader.textContent = `${num1} X ${num2}`;

    const answerInput = document.createElement("input");
    answerInput.setAttribute("type", "number");
    answerInput.setAttribute("placeholder", "Your Answer");

    const checkButton = document.createElement("button");
    checkButton.textContent = "Check";
    checkButton.addEventListener("click", checkAnswer);

    const questionDiv = document.createElement("div");
    questionDiv.appendChild(questionHeader);
    questionDiv.appendChild(answerInput);
    questionDiv.appendChild(checkButton);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
    outputDiv.appendChild(questionDiv);

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    imput_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br<br><button class='btn btn-info'"
    row = question_number + imput_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

 currentPlayer = 'player1'; 
 player1Score = 0;
 player2Score = 0;
 actual_name = 0;

function check() {

  const get_answer = parseFloat(document.getElementById('answerer_input').value);

  if (get_answer === actual_name) {
    if (currentPlayer === 'player1') {
      player1Score++;
    } else {
      player2Score++;
    }

    document.getElementById('player1_score').textContent = player1Score;
    document.getElementById('player2_score').textContent = player2Score;

    currentPlayer = (currentPlayer === 'player1') ? 'player2' : 'player1';

    document.getElementById('current_turn').textContent = `Current Turn: ${currentPlayer}`;
  }
  document.getElementById('answerer_input').value = '';
}

let currentPlayer = 'player1'; 
let player1Score = 0;
let player2Score = 0;
let actual_name = 0; 


function check() {
  const get_answer = parseFloat(document.getElementById('answerer_input').value);

  if (get_answer === actual_name) {

    if (currentPlayer === 'player1') {
      player1Score++;
    } else {
      player2Score++;
    }

    document.getElementById('player1_score').textContent = player1Score;
    document.getElementById('player2_score').textContent = player2Score;

    currentPlayer = (currentPlayer === 'player1') ? 'player2' : 'player1';
    
    document.getElementById('current_turn').textContent = `Current Turn: ${currentPlayer}`;
  }

  document.getElementById('answerer_input').value = '';
  }