function skillsMember() {
    var member = document.getElementById("member").value;
    if (member == "Yes") {
        document.getElementById("skills").style.display = "block";
    } else {
        document.getElementById("skills").style.display = "none";
    }
}