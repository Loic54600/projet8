import React from 'react';
import Accordion from "../../components/about/Accordion";
import collapses from "../../../src/datas/collapses.json";






const Collapse = () => {
  return (
    <section className="aboutgallery">
      <div className="aboutgallery_cards">
        {collapses.map((collapse) => {
          return (
            <div className="App" key={collapse.id} >
              <Accordion
                title="{collapse.title}"
                content="{collapse.content}"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collapse;