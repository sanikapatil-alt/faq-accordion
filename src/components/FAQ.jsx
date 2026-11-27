
import { useState } from "react";

const faqData = [
  {
    question: "What is Full Stack Development?",
    answer:
      "Full Stack Development involves developing both the frontend and backend of a web application."
  },
  {
    question: "Which technologies are used in this project?",
    answer:
      "This project uses React.js, JavaScript, HTML and CSS to create an interactive FAQ Accordion."
  },
  {
    question: "What is React.js?",
    answer:
      "React.js is a JavaScript library used to build interactive and reusable user interfaces."
  },
  {
    question: "Is this website mobile friendly?",
    answer:
      "Yes, this FAQ Accordion is designed to work on desktops, tablets and mobile devices."
  },
  {
    question: "Can I add more questions?",
    answer:
      "Yes, you can easily add more questions and answers by updating the FAQ data array."
  },
  {
    question: "What is an Accordion?",
    answer:
      "An Accordion is a user interface component that expands and collapses content when clicked."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <p className="subtitle">
        Find answers to commonly asked questions.
      </p>

      <div className="faq-list">
        {faqData.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}

                <span aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${isOpen ? "open" : ""}`}
                aria-hidden={!isOpen}
              >
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
