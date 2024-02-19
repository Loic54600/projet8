import React from 'react';
import Collapses from "../../../src/datas/collapses.json";
import Propscollapse from './Propscollapse';



const Collapse = () => {
  return (
    
    <section className="section_collapse">
      <section className="section_logo">
        <div className="aboutlogo" alt="montagne">
        </div>
      </section>
      <section className="aboutgallery_cards">
        {Collapses.map((Collapse) => {
          return (
            <Propscollapse title = {Collapse.title} content ={Collapse.content}/> 
          );
        })}
      </section>
    </section>
  );
};

export default Collapse;