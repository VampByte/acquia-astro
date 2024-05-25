import React, { useState, useRef, useEffect } from "react";

const FAQItem = ({
    index,
    question,
    answer,
    iconOpen,
    iconClosed,
    isOpen,
    onToggle,
}) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.height = "0px";
        }
    }, [isOpen]);

    document.querySelectorAll("details > summary").forEach((summary) => {
        summary.parentNode.addEventListener("toggle", function () {
            window.requestAnimationFrame(() => {
                if (this.open) {
                    summary.classList.add("rotated");
                } else {
                    summary.classList.remove("rotated");
                }
            });
        });
    
        summary.addEventListener("click", function () {
            document.querySelectorAll("details > summary").forEach((otherSummary) => {
                if (otherSummary !== summary) {
                    otherSummary.classList.remove("rotated");
                }
            });
        });
    });

    return (
        <details
            open={isOpen}
            className="faq-item"
            onClick={(e) => e.preventDefault()}
        >
            <summary
                className="faq-title flex items-center content-between relative"
                onClick={() => onToggle(index)}
            >
                <span className="flex items-center gap-4 sm:w-11/12 xs:w-11/12">
                    <img
                        src="https://usil.edu.pe/sites/default/files/2024-05/bandera-mx.png"
                        alt="Bandera México"
                    />
                    <h3 className="tabTitulo">{question}</h3>
                </span>
                {/* <svg className="svg-icon expand-icon">
                    <use href={isOpen ? iconOpen : iconClosed}/>
                    <use href="images/icons.svg#chevron-down-solid"/>
                </svg> */}
                {/* <img
                    src="https://usil.edu.pe/sites/default/files/2024-05/chevron-down-solid.png"
                    className="svg-icon expand-icon"
                    alt="Flecha"
                /> */}
            </summary>
            <div
                className="faq-content"
                ref={contentRef}
                style={{
                    overflow: "hidden",
                    transition: "height 0.2s ease-out",
                }}
            >
                <p className="contentP">{answer}</p>
            </div>
        </details>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How long does the course take?",
            answer: "The video content takes more than 4.5 hours. In addition, you can test gained knowledge on 30 quizzes and practical tasks.",
        },
        {
            question: "Who teaches courses on Atheros Learning?",
            answer: "The authors of the courses are mostly Atheros team members, who worked on tens of digital solutions for big international companies, projects for small startups, and internal Atheros products. By solving the most sophisticated problems in the fields, they gained proper knowledge, which is now available for you.",
        },
        {
            question:
                "How is the course different from other UX/UI design courses?",
            answer: "The key aspect is that this course provides a clear overview of the whole design process and principles, that represent necessary information for being successful within the industry. You will also get direct support from the author of this course, who is ready to answer all your questions and care about your next steps.",
        },
        {
            question: "Do I get a certificate after completing a course?",
            answer: "Yes, after successfully finishing the quizzes within the course, you can download a certificate, proving all gained knowledge and skills.",
        },
        {
            question: "Are there any hidden fees within the course?",
            answer: "Absolutely not! You will gain all benefits and features with the one-time payment, unlocking the course.",
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    index={index}
                    question={faq.question}
                    answer={faq.answer}
                    iconOpen="images/icons.svg#chevron-up-solid"
                    /* iconClosed="images/icons.svg#chevron-down-solid" */
                    isOpen={index === openIndex}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
};

export default Accordion;
