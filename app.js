// ===== Main Application =====
// This is our core app file that multiple developers will work on

function greetUser(name) {
    return "Hello, " + name + "! Welcome to GitMastery.";
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

function getDate() {
    return new Date().toLocaleDateString();
}

// Export functions
module.exports = { greetUser, calculateTotal, getDate };
