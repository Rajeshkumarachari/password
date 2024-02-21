import React, { useState } from "react";

const FaqItem = () => {
  const [show, setShow] = useState();
  return (
    <div className="FaqItem">
      <div className=" header">Sample questions ?</div>
      <div className=" body">
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio odit
          veniam nulla molestias blanditiis beatae! Officiis, ea, odit libero
          iste suscipit eaque totam distinctio pariatur qui ut harum. Aut,
          sapiente!
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
