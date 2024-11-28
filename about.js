function toggleAccordion(button) {
    const content = button.nextElementSibling; 
    const icon = button.querySelector(".icon"); 
  
    // Toggle visibility of the current content
    if (content.style.display === "block") {
      content.style.display = "none"; 
      icon.textContent = "+"; 
    } else {
      
      const allContents = document.querySelectorAll(".accordion-content");
      const allIcons = document.querySelectorAll(".accordion-button .icon");
  
      allContents.forEach((item) => (item.style.display = "none")); 
      allIcons.forEach((item) => (item.textContent = "+")); 
  
      content.style.display = "block"; 
      icon.textContent = "−"; 
    }
  }
  