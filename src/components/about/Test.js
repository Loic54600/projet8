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


const Test = (props) => {
    return (  
        <div className="collapsible_encadrement">
        <button type="button" class="collapsible">{ props.title} </button>
        <div className="content">
          <p className="collapsible_p">{ props.content }</p>
        </div>
      </div>
    );
}
 
export default Test;