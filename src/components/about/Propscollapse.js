import flech from "../../assets/img/carrousel/flech-top.png";
import { useState } from "react";

const Propscollapse = ({ title, content }) => {

    const openCollaspe = (e) => {
        const button = e.currentTarget;
        button.classList.toggle("active");
        const content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
        setIsOpen(!isOpen);

        setflech(isOpen ? Rotate : { transform: "rotate(0deg)", transition: "all 0.15s linear" });

    };
    {/*rotation de la fleche */ }
    const Rotate = {
        transform: "rotate(180deg)",
    };

    const [isOpen, setIsOpen] = useState(false);
    const [idflech, setflech] = useState(Rotate);


    return (
        <div className="propscollapse">
            <button type="button" className="collapsible" onClick={openCollaspe} >{title}<img className="flech" alt="fleche" src={flech} style={idflech} /></button>
            <div className="content">
                <p className="collapsible_p">{content}</p>

            </div>

        </div>
    );
}

export default Propscollapse;
