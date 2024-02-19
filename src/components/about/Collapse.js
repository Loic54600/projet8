import React from 'react';
import Collapses from "../../../src/datas/collapses.json";

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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
            <div className="collapsible_encadrement">
              <button type="button" class="collapsible">{Collapse.title}</button>
              <div className="content" key={Collapse.id}>
                <p className="collapsible_p">{Collapse.content}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Collapse;