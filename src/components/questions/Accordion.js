import React from "react";
import FaqItem from "./FaqItem";

const Accordion = () => {
  return (
    <div className="faqAccordion">
      <h2>FAQ's</h2>
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
    </div>
  );
};

export default Accordion;
