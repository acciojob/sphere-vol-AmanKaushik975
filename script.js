function calculateVolume() {
  // Get the radius input value
  var radius = document.getElementById("radius").value;
if(radius<0)
{
	document.getElementbyId("result").innerHTML="The volume of the sphere is" +NAN;
	return
}
	
  // Calculate the volume of the sphere
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);

  // Display the resul
  document.getElementById("result").innerHTML = "The volume of the sphere is: " + volume.toFixed(4);
}

window.onload = document.getElementById('MyForm').onclick = calculateVolume();