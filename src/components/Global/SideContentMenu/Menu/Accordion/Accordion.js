import React, { useState } from "react";
import "./Accordion.scss";
import Card from "./Card/Card";

const Accordion = ({ data = [] }) => {
  const [openIndex, setOpen] = useState(null);

  let content;
  content = data.map(item => {
    return (
      <Card
        key={item.index}
        title={item.title}
        open={openIndex === item.index}
        handleOpen={() => setOpen(item.index)}
        handleClose={() => setOpen(null)}
        list={item.list ? item.list : null}
        subCards={item.subCards ? item.subCards : null}
      />
    );
  });

  return <div className="oc-accordion">{content}</div>;
};

export default Accordion;
