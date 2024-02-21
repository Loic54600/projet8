import flech from "../../assets/img/carrousel/flech-top.png";

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
    };

    return (
        <div className="propscollapse">
            <button type="button" className="collapsible" onClick={openCollaspe}>{title}</button>
            <div className="content">
                <p className="collapsible_p">{content}</p>
            </div>
            <img className="flech" alt="fleche" src={flech} />
        </div>
    );
}


export default Propscollapse;
