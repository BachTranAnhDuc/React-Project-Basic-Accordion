import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Question = ({ data }) => {
  const { id, title, info } = data;
  const [getShow, setShow] = useState(false);

  return (
    <div key={id} className="question">
      <h2 className="question__heading">{title}</h2>

      {getShow && (
        <>
          <p className="question__answer">{info}</p>
          <small className="question__more">
            See also: What is a cookie and what does it do?
          </small>
        </>
      )}
      <button className="btn" onClick={() => setShow(!getShow)}>
        {getShow ? (
          <AiOutlineMinusCircle></AiOutlineMinusCircle>
        ) : (
          <AiOutlinePlusCircle></AiOutlinePlusCircle>
        )}
      </button>
    </div>
  );
};

export default Question;

{
  /* <AiOutlinePlusCircle></AiOutlinePlusCircle> */
}
