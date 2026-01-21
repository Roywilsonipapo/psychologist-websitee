document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    
    // In a real website, you would send this data to an email service
    alert(`Thank you, ${name}. Dr. Smith's office will contact you within 24 hours.`);
    
    this.reset();
});