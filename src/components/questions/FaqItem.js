import React, { useState } from "react";

const FaqItem = ({ qns, ans }) => {
  const [show, setShow] = useState(false);
  console.log(qns);
  //console.log(qns);

  return (
    <div className={`FaqItem ${show ? "active" : ""}`}>
      <div className=" header" onClick={() => setShow(!show)}>
        {qns}
      </div>
      <div className=" body">
        <div className="content">{ans}</div>
      </div>
    </div>
  );
};

export default FaqItem;
