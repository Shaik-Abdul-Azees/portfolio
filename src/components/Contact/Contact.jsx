import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API call
    setTimeout(() => {
      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className={`contact-header ${inView ? 'animate-in' : ''}`}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className={`contact-content ${inView ? 'animate-in' : ''}`}>
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p>abdulazeesshaik21@gmail.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><FaPhoneAlt /></div>
              <h3>Phone</h3>
              <p>+91-6281844897</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <h3>Location</h3>
              <p>Kadapa, India</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message..." 
                rows="5" 
                required 
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'Sending...'}>
              {status || 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
