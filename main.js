document.addEventListener('DOMContentLoaded', () => {
  const demoBtn = document.getElementById('getDemoBtn');
  const demoModal = document.getElementById('demoModal');
  const successModal = document.getElementById('successModal');
  const closeBtns = document.querySelectorAll('.close-btn');

  demoBtn.addEventListener('click', () => {
    demoModal.classList.remove('hidden');
    demoModal.style.display = 'block';
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target == demoModal) {
      demoModal.style.display = 'none';
    }
    if (event.target == successModal) {
      successModal.style.display = 'none';
    }
  });
});

// Submit demo function
function submitDemo() {
  const name = document.getElementById('demoName').value.trim();
  const number = document.getElementById('demoNumber').value.trim();
  const insta = document.getElementById('demoInsta').value.trim();

  if (!name || !number || !insta) {
    alert("Please fill all fields.");
    return;
  }

  // Formspree example (replace with your real Form ID)
  fetch("https://formspree.io/f/your_form_id", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, number, insta })
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('demoModal').style.display = 'none';
      document.getElementById('successModal').classList.remove('hidden');
      document.getElementById('successModal').style.display = 'block';
      setTimeout(() => {
        document.getElementById('successModal').style.display = 'none';
      }, 4000);
    } else {
      alert("Failed to send. Try again.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error submitting form.");
  });
}
