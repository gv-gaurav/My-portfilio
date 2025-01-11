const testimonials = [
    {
      stars: "★★★★★",
      title: "Great work",
      text: "Gaurav created a stunning website exactly how I wanted. He’s professional, responsive, and talented. Highly recommended!",
      author: "Amit Singh"
    },
    {
      stars: "★★★★★",
      title: "Amazing experience",
      text: "Gaurav delivered a beautiful, responsive website on time. He’s skilled and easy to work with.",
      author: "Pushpender kumar"
    },
    {
      stars: "★★★★☆",
      title: "Highly professional",
      text: "Gaurav transformed my ideas into a sleek, functional website. I’m thrilled with the results!",
      author: "Varun Tiwari"
    },
  ];
  
  let currentTestimonialIndex = 0;
  
  const testimonialContent = document.getElementById("testimonial-content");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function updateTestimonial(index) {
    const { stars, title, text, author } = testimonials[index];
    testimonialContent.innerHTML = `
      <div class="testimonial-card">
        <div class="quote-icon">❝</div>
        <div class="stars">${stars}</div>
        <h3 class="testimonial-title">${title}</h3>
        <p class="testimonial-text">${text}</p>
        <span class="author">${author}</span>
      </div>
    `;
  }
  
  prevBtn.addEventListener("click", () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
  });
  
  nextBtn.addEventListener("click", () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
  });
  
  // Initialize the first testimonial
  updateTestimonial(currentTestimonialIndex);