import '../styles/Trainers.css';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 2,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 4,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 5,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 6,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: 'https://via.placeholder.com/150x150'
    }
  ];

  const expertise = [
    { id: 1, title: 'Phonics', icon: '🕐' },
    { id: 2, title: 'Hand writing', icon: '📝' },
    { id: 3, title: 'Public speaking', icon: '👤' },
    { id: 4, title: 'Programs', icon: '💻' }
  ];

  const testimonials = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  return (
    <div className="trainers-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Meet Our Expert <span className="hero-highlight">Trainers</span></h1>
            <button className="explore-btn">Explore more</button>
          </div>
          <div className="hero-image">
            <div className="hero-circle">
              <img src="https://via.placeholder.com/300x300" alt="Expert Trainers" />
            </div>
          </div>
        </div>
      </section>

      {/* About Our Trainers Section */}
      <section className="about-trainers-section">
        <div className="section-container">
          <h2 className="section-title">About our Trainers</h2>
          <p className="section-description">
            At Bubblee, our trainers are not just educators – they are mentors, guides, and cheerleaders who strive to bring out the best in every child. With passion, patience, and proven expertise, they create a learning environment that is safe, fun, and empowering.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="trainers-grid-section">
        <div className="section-container">
          <div className="trainers-grid">
            {trainers.map(trainer => (
              <div key={trainer.id} className="trainer-card">
                <div className="trainer-image-wrapper">
                  <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                </div>
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-subject">{trainer.subject}</p>
                <button className="learn-more-btn">Learn more</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Expertise Section */}
      <section className="expertise-section">
        <div className="section-container">
          <h2 className="section-title">Our core Expertise</h2>
          <div className="expertise-grid">
            {expertise.map(item => (
              <div key={item.id} className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h3 className="expertise-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Say Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Parents say ?</h2>
          <p className="testimonials-description">
            Hear from our community of happy parents. At Bubblee, we listen to become confident and creative builders of their future.
          </p>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <div className="logo-circle">🧠</div>
              <h3 className="footer-logo-text">BUBBLEE INSTITUTION</h3>
            </div>
            <p className="footer-description">
              At Bubblee, our mission is to empower young minds with quality education and support, fostering confident, creative builders of their future.
            </p>
            <button className="about-us-btn">About Us</button>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              <h4 className="footer-links-title">Quick links</h4>
              <ul className="links-list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#work">Work With Us</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#achievements">Achievements</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-policy">Contact . Privacy Policy</p>
          </div>
          <div className="footer-social">
            <a href="#twitter" className="social-icon">𝕏</a>
            <a href="#youtube" className="social-icon">▶</a>
            <a href="#linkedin" className="social-icon">in</a>
            <a href="#instagram" className="social-icon">📷</a>
          </div>
          <div className="footer-bottom-right">
            <p className="footer-copyright">© 2025 All Rights Reserved.</p>
          </div>
        </div>

        <div className="footer-mission">
          <p className="footer-mission-text">
            We believe Montessori education can empower the next generation to be happier, more fulfilled and better able to make a positive difference to their family, their community and the planet.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Trainers;
