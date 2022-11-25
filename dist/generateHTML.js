function generateHTML(data) {
  const htmlTop = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link rel="stylesheet" href="./src/styles.css" />
  </head>
  <body>
  <nav>
    <h1>My Team</h1>
  </nav>`;

  const managerCard = `
  <div class="container">
    <div class="card">
      <div class="cardTitle">
        <h2>${data[0].name}</h2>
        <h3>Manager</h3>
        <img src="./src/manager.png" alt="manager"/>
      </div>
      <div class="contents">
        <p>ID: ${data[0].id}</p>
        <p>Email: <a href="mailto:${data[0].email}">${data[0].email}</a></p>
        <p>Office Number: ${data[0].officeNumber}</p>
      </div>
    </div>
  `;

  const engineerArr = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Engineer") {
      const engineerCard = `
        <div class="card">
          <div class="cardTitle">
            <h2>${data[i].name}</h2>
            <h3>Engineer</h3>
            <img src="./src/software-engineer.png" alt="engineer"/>
          </div>
          <div class="contents">
            <p>ID: ${data[i].id}</p>
            <p>Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p>
            <p>Github: <a href="${data[i].github}" target="_blank">${data[i].github}</a></p>
          </div>
        </div>
      `;
      engineerArr.push(engineerCard);
    }
  }

  const internArr = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Intern") {
      const internCard = `
        <div class="card">
          <div class="cardTitle">
            <h2>${data[i].name}</h2>
            <h3>Intern</h3>
            <img src="./src/working-man.png" alt="intern"/>
          </div>
          <div class="contents">
            <p>ID: ${data[i].id}</p>
            <p>Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p>
            <p>School: ${data[i].school}</p>
          </div>
        </div>
      `;
      internArr.push(internCard);
    }
  }

  const htmlBottom = `
  </div>
  </body>
  </html>
  `;

  //create for loop for data input to generate card per obj in the array
  //3 different card templates
  //use getrole()

  return (
    htmlTop +
    managerCard +
    engineerArr.join("") +
    internArr.join("") +
    htmlBottom
  );
}

module.exports = generateHTML;
