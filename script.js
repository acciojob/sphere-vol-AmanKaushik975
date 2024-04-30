function volume_sphere() {
    // Retrieve the radius value entered by the user from the input field
    let radius = document.getElementById('radius').value;

    // Validate the input, ensuring the radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere using the formula: V = 4/3 * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Ensure the calculated volume is rounded to four decimal places
    volume = volume.toFixed(4);

    // Display the calculated volume in the designated output field
    document.getElementById('volume').value = volume;
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
