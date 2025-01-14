// Player and Team data
const PLAYERS = {
  "VD Vignesh": { team: "Red Ford Terminators FC", basePrice: 150000000 },
  "Hrishikesh S": { team: "Aurenzburg CF", basePrice: 150000000 },
  "Neaf Aslam": { team: "Red Ford Terminators FC", basePrice: 120000000 },
  "Ganesh M Unni": { team: "Raptors FC", basePrice: 100000000 },
  "Niranjan S Thambi": { team: "Al-Qadam FC", basePrice: 150000000 },
  "Nidhin": { team: "Aurenzburg CF", basePrice: 100000000 },
  "Mohammed Fujai SR": { team: "Raptors FC", basePrice: 90000000 },
  "Arjun Brijesh": { team: "Aurenzburg CF", basePrice: 90000000 },
  "Brayan Steve": { team: "Al-Qadam", basePrice: 90000000 },
  "Rowan Roy": { team: "Al Qadam", basePrice: 80000000 },
  "Anandhu": { team: "Red Ford Terminators", basePrice: 80000000 },
  "Adarsh": { team: "Raptors FC", basePrice: 90000000 },
};

const bidAmountNumeric = document.getElementById("bidAmount").value.replace(/[₹,]/g, "");

const TEAMS = ["Raptors FC", "Red Ford Terminators FC", "Al-Qadam", "Aurenzburg CF"];

// Populate player dropdown
const playerDropdown = document.getElementById("player");
Object.keys(PLAYERS).forEach((player) => {
  const option = document.createElement("option");
  option.value = player;
  option.textContent = player;
  playerDropdown.appendChild(option);
});

// Populate team dropdown
const offerFromDropdown = document.getElementById("offerFrom");
TEAMS.forEach((team) => {
  const option = document.createElement("option");
  option.value = team;
  option.textContent = team;
  offerFromDropdown.appendChild(option);
});

// Update the current team and base price based on the selected player
playerDropdown.addEventListener("change", (event) => {
  const selectedPlayer = event.target.value;
  const currentTeamInput = document.getElementById("currentTeam");
  const basePriceInput = document.getElementById("basePrice");

  if (PLAYERS[selectedPlayer]) {
    currentTeamInput.value = PLAYERS[selectedPlayer].team || "";
    basePriceInput.value = PLAYERS[selectedPlayer].basePrice
      ? `$${PLAYERS[selectedPlayer].basePrice.toLocaleString()}`
      : "";
  } else {
    currentTeamInput.value = "";
    basePriceInput.value = "";
  }
});

// Initialize EmailJS with your public key
emailjs.init("2n2bu7vxoYbH_qXJh");

function SendMail(event){
  event.preventDefault();  // Prevent form submission

  // Gather form data
  let Paras = {
    PlayerName: document.getElementById("player").value,
    CurrentTeam: document.getElementById("currentTeam").value,
    BasePrice: document.getElementById("basePrice").value,
    OfferFrom: document.getElementById("offerFrom").value,
    Bid: document.getElementById("bidAmount").value,
  };

  // Send email using EmailJS
  emailjs.init("2n2bu7vxoYbH_qXJh");
  emailjs.send("service_zrnp5kr", "template_68fbyt4", Paras)
    .then(function() {
      alert("Your Transfer Request is Sent to LSL Market Regulator. You will receive a clarification message shortly.");
    }).catch(function(error) {
      console.error("Error sending email:", error);
      alert("Failed to send request. Please try again.");
    });
}
