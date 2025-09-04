import React, { useState, useEffect } from 'react';
import styles from './SectionAbout.module.css';
import resumePDF from './../../assests/resume/Jaswanth_Mada_Resume.pdf';

const SectionAbout = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showResumePreview, setShowResumePreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Jaswanth_Mada_Resume.pdf';
    link.click();
  };

  const openResumePreview = () => {
    setShowResumePreview(true);
  };

  const closeResumePreview = () => {
    setShowResumePreview(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroNameElement = document.querySelector('.hero-name');

      if (heroNameElement) {
        const heroNameRect = heroNameElement.getBoundingClientRect();
        // Show sticky header when the hero name goes out of view (top of element is above viewport)
        setIsScrolled(heroNameRect.bottom <= 0);
      } else {
        // Fallback: show after scrolling 200px if element not found
        setIsScrolled(scrollTop > 200);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`${styles['sticky-header']} ${
          isScrolled ? styles['visible'] : ''
        }`}
      >
        <h2 className={styles['sticky-name']}>Jaswanth Mada</h2>
        <button className={styles['sticky-resume-btn']} onClick={openResumePreview}>Resume </button>
      </header>

      <section className={styles['hero-section']}>
        <div className={styles['hero-container']}>
          <h1 className={`${styles['hero-name']} hero-name`}>Jaswanth Mada</h1>
          <p className={styles['hero-title']}>
            Master's in Computer Science, Purdue University | Machine Learning &
            AI • Software Engineering
          </p>

          <div className={styles['hero-description-box']}>
            <ul className={styles['hero-description']}>
              <li>
                AI/ML Engineer and Full-Stack Developer with a passion for
                solving real-world problems.
              </li>
              <li>
                Strong competitive programming with excellent problem-solving
                abilities and analytical thinking.
              </li>
              <li>
                Experience building machine learning models using PyTorch and
                TensorFlow
              </li>
              <li>Skilled in Python, JavaScript, React, and Node.js.</li>

              <li>Built scalable web applications with MongoDB and AWS. </li>
            </ul>

            <div>
              <a href="mailto:madhajaswanth@gmail.com">
                <button className={styles['primary-button']}>
                  {isMobile ? '📧 Email' : 'madhajaswanth@gmail.com'}
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/jaswanthmadha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles['secondary-button']}>LinkedIn</button>
              </a>
              <button
                className={styles['secondary-button']}
                onClick={openResumePreview}
              >
                📄 Resume
              </button>
            </div>

            <p className={styles['location']}>India | United States</p>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      {showResumePreview && (
        <div className={styles['resume-modal-overlay']} onClick={closeResumePreview}>
          <div className={styles['resume-modal-content']} onClick={(e) => e.stopPropagation()}>
            <div className={styles['resume-modal-header']}>
              <h2 className={styles['resume-modal-title']}>Resume Preview</h2>
              <button className={styles['resume-modal-close']} onClick={closeResumePreview}>
                ×
              </button>
            </div>
            
            <div className={styles['resume-preview-container']}>
              {isMobile ? (
                <div className={styles['mobile-pdf-container']}>
                  {/* Try PDF.js first */}
                  <iframe
                    src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + resumePDF)}`}
                    title="Resume Preview"
                    className={styles['mobile-pdf-iframe']}
                    style={{ border: 'none' }}
                    onError={() => {
                      // Fallback to Google Docs viewer
                      const iframe = document.querySelector(`.${styles['mobile-pdf-iframe']}`);
                      if (iframe) {
                        iframe.src = `https://docs.google.com/gview?url=${encodeURIComponent(window.location.origin + resumePDF)}&embedded=true`;
                      }
                    }}
                  />
                  <div className={styles['mobile-pdf-fallback']}>
                    <p className={styles['mobile-pdf-info']}>
                      Having trouble viewing the PDF?
                    </p>
                    <div className={styles['mobile-pdf-actions']}>
                      <button
                        className={styles['mobile-view-btn']}
                        onClick={() => window.open(resumePDF, '_blank')}
                      >
                        📄 Open in New Tab
                      </button>
                      <button
                        className={styles['mobile-download-btn']}
                        onClick={handleDownload}
                      >
                        ⬇️ Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={resumePDF}
                  title="Resume Preview"
                  className={styles['resume-iframe']}
                  style={{ border: 'none' }}
                />
              )}
            </div>
            
            <div className={styles['resume-modal-actions']}>
              <button
                className={styles['download-btn']}
                onClick={handleDownload}
              >
                📄 Download Resume
              </button>
              <button
                className={styles['close-btn']}
                onClick={closeResumePreview}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionAbout;
