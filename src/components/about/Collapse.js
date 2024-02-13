import React from 'react';
import Accordion from "../../components/about/Accordion";
import Collapses from "../../../src/datas/collapses.json";

const Collapse = () => {
  return (
    <section>
      <section className="section_logo">
        <div className="aboutlogo" alt="montagne">
        </div>
      </section>
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
    </section>
  );
};

export default Collapse;