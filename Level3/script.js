// Form validation and submission handler
const form = document.getElementById('detailsForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value,
    address: document.getElementById('address').value
  };
  
  // Basic validation
  if (!formData.firstName.trim()) {
    alert('Please enter your first name');
    return;
  }
  
  if (!formData.email.trim()) {
    alert('Please enter your email');
    return;
  }
  
  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Display submitted data
  console.log('Form submitted:', formData);
  alert(`Thank you, ${formData.firstName}! Your form has been submitted.\n\nDetails:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}`);
  
  // Reset form
  form.reset();
});

// Real-time validation for email
document.getElementById('email').addEventListener('blur', function() {
  const email = this.value.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    this.style.borderColor = '#ef4444';
  } else {
    this.style.borderColor = '';
  }
});

// Age validation
document.getElementById('age').addEventListener('input', function() {
  const age = parseInt(this.value);
  if (age < 0) this.value = 0;
  if (age > 120) this.value = 120;
});
