
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("feedbackform");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();


    const postedSection = document.createElement("div");
    postedSection.classList.add("posted-feedback");

    postedSection.innerHTML = `
      <h2>Submitted Feedback</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Feedback:</strong> ${feedback}</p>
      <hr>
    `;

    document.body.appendChild(postedSection);

  
  });
});

