import React from 'react';

export const ContactSection = () => {
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='section-title'>
          <h2>Contact</h2>
          <p>Contact info</p>
        </div>

        <div className='row' data-aos='fade-in'>
          <div className='col-lg-5 d-flex align-items-stretch'>
            <div className='info'>
              <div className='address'>
                <i className='icofont-google-map'></i>
                <h4>Location:</h4>
                <p>Kigali, KN 107 St</p>
              </div>

              <div className='email'>
                <i className='icofont-envelope'></i>
                <h4>Email:</h4>
                <p>akimanaja17@gmail.com</p>
              </div>

              <div className='phone'>
                <i className='icofont-phone'></i>
                <h4>Call:</h4>
                <p>+250 783 543 016</p>
              </div>

              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.6006832503714!2d30.056998159541763!3d-1.9593149998973003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTcnMzMuNSJTIDMwwrAwMycyNy4zIkU!5e1!3m2!1sen!2srw!4v1586679814460!5m2!1sen!2srw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
                frameBorder='0'
                title='Map'
                style={{ border: 0, width: '100%', height: '290px' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
            <form className='php-email-form'>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='name'>Your Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    id='name'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 4 chars'
                  />
                  <div className='validate'></div>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='name'>Your Email</label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    data-rule='email'
                    data-msg='Please enter a valid email'
                  />
                  <div className='validate'></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Subject</label>
                <input
                  type='text'
                  className='form-control'
                  name='subject'
                  id='subject'
                  data-rule='minlen:4'
                  data-msg='Please enter at least 8 chars of subject'
                />
                <div className='validate'></div>
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Message</label>
                <textarea
                  className='form-control'
                  name='message'
                  rows='10'
                  data-rule='required'
                  data-msg='Please write something for us'
                ></textarea>
                <div className='validate'></div>
              </div>
              <div className='mb-3'>
                <div className='loading'>Loading</div>
                <div className='error-message'></div>
                <div className='sent-message'>
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className='text-center'>
                <button type='submit'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
