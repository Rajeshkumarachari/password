import React, { useEffect, useState } from "react";
import FaqItem from "./FaqItem";
import axios from "axios";

const Accordion = () => {
  const [value, setValue] = useState("");
  const fetchAnswer = () => {
    axios.get("http://localhost:8000/posts").then(function (res) {
      setValue(res.data);
      //console.log(value);
    });
  };
  useEffect(() => {
    fetchAnswer();
  }, []);
  return (
    <div className="faqAccordion">
      <h2 className="title">FAQ's</h2>
      {value &&
        value.map((item) => (
          <FaqItem key={item.id} qns={item?.question} ans={item?.ans} />
        ))}
    </div>
  );
};

export default Accordion;
