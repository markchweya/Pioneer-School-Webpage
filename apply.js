// Function to show/hide sections based on the current page
function showPage(page) {
    const studentDetailsFieldset = document.getElementById('applicationForm').querySelector('fieldset:nth-of-type(1)');
    const parentDetailsFieldset = document.getElementById('applicationForm').querySelector('fieldset:nth-of-type(2)');
    const secondParentFieldset = document.getElementById('secondParentFieldset');
  
    if (page === 'studentDetails') {
      studentDetailsFieldset.style.display = 'block';
      parentDetailsFieldset.style.display = 'none';
      secondParentFieldset.style.display = 'none';
    } else if (page === 'parentDetails') {
      studentDetailsFieldset.style.display = 'none';
      parentDetailsFieldset.style.display = 'block';
      secondParentFieldset.style.display = 'block';
    }
  }
  
  // Function to update additional questions based on school selection
  function updateAdditionalQuestions() {
    const schoolSelect = document.getElementById('school');
    const additionalQuestionsDiv = document.getElementById('additionalQuestions');
  
    // Remove previous questions
    additionalQuestionsDiv.innerHTML = '';
  
    // Check school selection and add relevant questions
    if (schoolSelect.value === 'pioneer') {
      additionalQuestionsDiv.innerHTML = `
        <label for="kcpe">Have you sat for KCPE before?</label>
        <select id="kcpe" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
  
        <label for="kcpeMarks">KCPE Marks (1-500)</label>
        <input type="number" id="kcpeMarks" min="1" max="500" required>
      `;
    } else if (schoolSelect.value === 'pioneerGirls') {
      // Add additional questions for Pioneer Girls School
      // Modify this section based on the specific questions for Pioneer Girls School
    } else if (schoolSelect.value === 'pioneerJunior') {
      additionalQuestionsDiv.innerHTML = `
        <label for="kpsea">Have you sat for KPSEA before?</label>
        <select id="kpsea" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
  
        <label for="kpseaScore">KPSEA Score</label>
        <select id="kpseaScore" required>
          <option value="belowExpectation">Below Expectation</option>
          <option value="approachingExpectation">Approaching Expectation</option>
          <option value="meetingExpectation">Meeting Expectation</option>
          <option value="exceedingExpectation">Exceeding Expectation</option>
        </select>
      `;
    }
  }
  
  // Event listeners to update additional questions and show/hide sections
  document.getElementById('school').addEventListener('change', updateAdditionalQuestions);
  document.getElementById('nextButton').addEventListener('click', () => showPage('parentDetails'));
  document.getElementById('prevButton').addEventListener('click', () => showPage('studentDetails'));
  
  // Optional: Add logic to hide/show second parent details based on user input
  // You can use a similar approach as updating additional questions
  
  // Form submission
  document.getElementById('applicationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add logic to send the form data to the specified email address (chweyahub@gmail.com)
    // You may use a server-side script or service for this purpose.
    alert('Form submitted successfully!');
  });
  