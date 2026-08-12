const contactButton = document.getElementById("show-button");
const displayDiv = document.getElementById("details");
contactButton.addEventListener("click", function ()  {
displayDiv.innerHTML =  
    `<p><h2>Contact Information:</h2>
    
    
    <br>
    Name: U.yasodha
    <br>
    <br>
    Email: yasodha@gmail.com
    <br>
    <br>
    Phone: 7939380887
    <br>
    <br>
    Address: 15 Main Street, City, Country
    <br>
    <br>
    Social Media:instagram: @yasodha
    </p>`;
});