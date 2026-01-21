import { useState } from 'react';
import '../styles/Trainers.css';
import trainerHeroImage from '../assets/trainer-img.png';

const Trainers = ({images}) => {
  const [expandedTrainerId, setExpandedTrainerId] = useState(null);
  const image = images.filter(img =>
    [61,62,63,64,65,66].includes(img.order)
  );

  const trainers = [
    {
      id: 1,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image:  image[0]?.thumbUrl || 'https://via.placeholder.com/150x150',
      role: 'Senior Writing Instructor',
      description: 'Passionate educator with a focus on developing strong writing foundations and creative expression in children.',
      experience: '8 years of teaching experience'
    },
    {
      id: 2,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image:  image[1]?.thumbUrl || 'https://via.placeholder.com/150x150',
      role: 'Grammar Specialist',
      description: 'Expert in making grammar engaging and fun for young learners through interactive storytelling techniques.',
      experience: '6 years of teaching experience'
    },
    {
      id: 3,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: image[2]?.thumbUrl ||'https://via.placeholder.com/150x150',
      role: 'Language Arts Coach',
      description: 'Dedicated to helping children discover their unique voice and build confidence in written communication.',
      experience: '7 years of teaching experience'
    },
    {
      id: 4,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: image[3]?.thumbUrl ||'https://via.placeholder.com/150x150',
      role: 'Creative Writing Mentor',
      description: 'Specializes in nurturing creativity while maintaining strong grammatical foundations in young writers.',
      experience: '5 years of teaching experience'
    },
    {
      id: 5,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: image[4]?.thumbUrl ||'https://via.placeholder.com/150x150',
      role: 'Literature Educator',
      description: 'Combines grammar instruction with rich literature exposure to inspire a love of writing and reading.',
      experience: '9 years of teaching experience'
    },
    {
      id: 6,
      name: 'Ms. Hemo',
      subject: 'Writing and grammar',
      image: image[5]?.thumbUrl || 'https://via.placeholder.com/150x150',
      role: 'Communication Specialist',
      description: 'Focuses on developing all aspects of communication skills from basic grammar to advanced expression.',
      experience: '6 years of teaching experience'
    }
  ];

  const handleTrainerCardClick = (trainerId) => {
    setExpandedTrainerId(expandedTrainerId === trainerId ? null : trainerId);
  };

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
              <img src={trainerHeroImage} alt="Expert Trainers" />
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
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className={`trainer-card ${expandedTrainerId === trainer.id ? 'expanded' : ''}`}
                onClick={() => handleTrainerCardClick(trainer.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="trainer-card-inner">
                  {/* Front of card */}
                  <div className="trainer-card-front">
                    <div className="trainer-image-wrapper">
                      <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                    </div>
                    <h3 className="trainer-name">{trainer.name}</h3>
                    <p className="trainer-subject">{trainer.subject}</p>
                    <button 
                      className="learn-more-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTrainerCardClick(trainer.id);
                      }}
                    >
                      Learn more
                    </button>
                  </div>

                  {/* Back of card */}
                  <div className="trainer-card-back">
                    <div className="trainer-details-content">
                      <h3 className="trainer-role">{trainer.role}</h3>
                      <p className="trainer-description">{trainer.description}</p>
                      <p className="trainer-experience">
                        <span className="experience-icon">⭐</span>
                        {trainer.experience}
                      </p>
                    </div>
                  </div>
                </div>
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

    </div>
  );
};

export default Trainers;
