import flech from "../../assets/img/carrousel/flech-top.png";


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

const Propscollapse = ({ title, content }) => {
    return (
        <div>
            <button type="button" class="collapsible">{title}</button>
            <div className="content">
                <p className="collapsible_p">{content}</p>
            </div>
            <img className="flech" alt="fleche" src={flech} />
        </div>
    );
}


export default Propscollapse;