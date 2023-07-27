let entries = [];

    function addEntry() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const website = document.getElementById('website').value;
      const image = document.getElementById('image').value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value || 'N/A';
      const skills = [...document.querySelectorAll('input[name="skills"]:checked')].map(skill => skill.value).join(', ');

      if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please enter all the required fields.');
        return;
      }

      entries.push({ name, email, password, website, image, gender, skills });

      const tableContainer = document.getElementById('table-container');
      const tableData = `
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Website</th>
            <th>Image</th>
            <th>Gender</th>
            <th>Skills</th>
          </tr>
          ${entries.map(entry => `
            <tr>
              <td>${entry.name}</td>
              <td>${entry.email}</td>
              <td>${entry.password}</td>
              <td>${entry.website}</td>
              <td>${entry.image}</td>
              <td>${entry.gender}</td>
              <td>${entry.skills}</td>
            </tr>
          `).join('')}
        </table>
      `;
      tableContainer.innerHTML = tableData;

      // Clear the form inputs after submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('website').value = '';
      document.getElementById('image').value = '';
	  document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
	  document.querySelectorAll('input[name="skills"]:checked').forEach(skill => skill.checked = false);
      document.querySelector('input[name="gender"]:checked')?.removeAttribute('checked');
      [...document.querySelectorAll('input[name="skills"]:checked')].forEach(skill => skill.removeAttribute('checked'));
    }