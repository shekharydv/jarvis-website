document.querySelector('form[name="contact-us"]').addEventListener('submit', function (event) {
    var selectedCheckboxes = document.querySelectorAll('input[name="user-institute-type[]"]:checked');
    
    if (selectedCheckboxes.length === 0) {
        // If no checkbox is selected, show the error message.
        document.querySelector('.error-contact-institute-type').textContent = "Please select at least one option";
        document.querySelector('.error-contact-institute-type').style.visibility = "visible";
        event.preventDefault(); // Prevent the form from submitting
    } else {
        // If at least one checkbox is selected, hide the error message.
        document.querySelector('.error-contact-institute-type').style.visibility = "hidden";
    }
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    // Get all radio buttons within the chip-select container
    var radios = document.querySelectorAll('.chip-select input[type="radio"]');
    var chips = document.querySelectorAll('.chip'); // Select all the .chip elements
  
    radios.forEach(function (radio, index) {
      // Add a change event listener to each radio button
      radio.addEventListener('change', function () {
        // Uncheck all other radio buttons within the same container
        radios.forEach(function (otherRadio, otherIndex) {
          if (otherRadio !== radio) {
            otherRadio.checked = false;
            chips[otherIndex].classList.remove('selected'); // Deselect the corresponding chip
          }
        });
  
        // Apply the 'selected' class to the corresponding .chip element
        if (this.checked) {
          chips[index].classList.add('selected'); // Select the corresponding chip
        } else {
          chips[index].classList.remove('selected'); // Deselect the corresponding chip
        }
      });
    });
  
    // Manually check the first radio button by default
    if (radios.length > 0) {
      radios[0].checked = true;
      chips[0].classList.add('selected'); // Select the first chip
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Get all checkboxes within the chip-select container
    var checkboxes = document.querySelectorAll('.chip-select input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        // Add a change event listener to each checkbox
        checkbox.addEventListener('change', function () {
            // Toggle the 'selected' class on the parent label when the checkbox changes
            var chip = this.closest('.chip');
            if (this.checked) {
                chip.classList.add('selected');
            } else {     
                chip.classList.remove('selected');
            }
        });
    });
    // Manually add the "selected" class to the first chip label
    var firstChip = document.querySelector('.chip-select .chip:first-child');
    var firstCheckbox = firstChip.querySelector('input[type="checkbox"]');
    firstCheckbox.checked = true;
    firstChip.classList.add('selected');
  });
