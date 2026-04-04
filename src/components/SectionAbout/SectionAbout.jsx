import React, { useState, useEffect } from 'react';
import styles from './SectionAbout.module.css';
import { downloadResume } from '../../utils/downloadResume';

const SectionAbout = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showResumePreview, setShowResumePreview] = useState(false);

  const resumePDF = '/Jaswanth_Resume.pdf';

  const handleDownload = () => {
    downloadResume();
  };

  const openResumePreview = () => {
    setShowResumePreview(true);
  };

  const closeResumePreview = () => {
    setShowResumePreview(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className={styles['hero-section']}>
        <div className={styles['hero-container']}>
          <h1 className={`${styles['hero-name']} hero-name`}>Jaswanth Mada</h1>
          <p className={styles['hero-title']}>
            MS in Computer Science - AI/ML Track, Purdue University Northwest |
            AI/ML Engineer
          </p>

          <div className={styles['hero-description-box']}>
            <ul className={styles['hero-description']}>
              <li>
                AI/ML Engineer with experience in building and deploying
                production-ready ML models and AI-powered applications.
              </li>
              <li>
                Skilled in Machine Learning, Deep Learning, NLP, and Computer
                Vision with hands-on experience in LLM-based applications using
                RAG and AI Agents.
              </li>
              <li>
                Strong programming skills in Python with proficiency in
                frameworks like TensorFlow, PyTorch, Scikit-Learn, LangChain,
                and Hugging Face.
              </li>
              <li>
                AWS Certified ML Engineer and Data Engineer with experience in
                MLOps, Docker containerization, and cloud-based model
                deployment.
              </li>
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
        <div
          className={styles['resume-modal-overlay']}
          onClick={closeResumePreview}
        >
          <div
            className={styles['resume-modal-content']}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles['resume-modal-header']}>
              <h2 className={styles['resume-modal-title']}>Resume Preview</h2>
              <button
                className={styles['resume-modal-close']}
                onClick={closeResumePreview}
              >
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
                      const iframe = document.querySelector(
                        `.${styles['mobile-pdf-iframe']}`,
                      );
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
