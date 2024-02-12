import React from 'react';
import Accordion from "../../components/about/Accordion";
import Collapses from "../../../src/datas/collapses.json";






const Collapse = () => {
  return (
    <section className="aboutgallery">
      <div className="aboutgallery_cards">
        {Collapses.map((Collapse) => {
          return (
            <div className="App" key={Collapse.id} >
              <Accordion
                title={Collapse.title}
                content={Collapse.content}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collapse;