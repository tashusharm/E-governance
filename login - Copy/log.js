document.addEventListener("DOMContentLoaded", function() {
    const captchaText = document.getElementById("captchaText");
    const signInBtn = document.getElementById("signInBtn");
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.getElementById("dashboard");
  
    // Generate random CAPTCHA
    function generateCaptcha() {
      const captcha = Math.random().toString(36).substring(2, 8);
      captchaText.textContent = captcha;
    }
  
    generateCaptcha(); 
  
    // Refresh CAPTCHA on button click
    captchaText.addEventListener("click", generateCaptcha);
  
    // Handle form submission
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const captchaInput = document.getElementById("captcha").value;
      
      // Dummy validation, replace with actual authentication logic
      if (username === "tashu" && password === "1234" && captchaInput === captchaText.textContent) {
        // Show dashboard
        dashboard.style.display = "block";
      } else {
        alert("Invalid credentials or CAPTCHA!");
      }
    });
  });
  