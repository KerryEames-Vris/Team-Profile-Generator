const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card mx-8 basis-1/3 bg-green-800 flex-col justify-between shadow">
        <div class="px-2 py-2">
            <h2 class="card-title text-white">${manager.getName()}</h2>
            <h3 class="card-title text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>${manager.getRole()}</h3>
        </div>
        <div class="flex-col justify-center bg-green-100">
            <ul class="list-group">
                <li class="text-black">ID: ${manager.getId()}</li>
                <li class="text-black">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="text-black">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card mx-8 basis-1/3 bg-green-800 flex-col justify-between shadow">
    <div class="px-2 py-2">
        <h2 class="card-title text-white">${engineer.getName()}</h2>
        <h3 class="card-title text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>${engineer.getRole()}</h3>
    </div>
    <div class="flex-col justify-center bg-green-100">
        <ul class="list-group">
            <li class="text-black">ID: ${engineer.getId()}</li>
            <li class="text-black">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="text-black">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card mx-8 basis-1/3 bg-green-800 flex-col justify-between shadow">
    <div class="px-2 py-2">
        <h2 class="card-title text-white">${intern.getName()}</h2>
        <h3 class="card-title text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>${intern.getRole()}</h3>
    </div>
    <div class="flex-col justify-center bg-green-100">
        <ul class="list-group">
            <li class="text-black">ID: ${intern.getId()}</li>
            <li class="text-black">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="text-black">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="output.css">
</head>

<body>
        <div class="flex justify-center mx-2">
                <h1 class="mx-2 my-8 text-center font-extrabold text-4xl text-purple-900">My Team</h1>
        </div>
    <div>
        <div class="flex justify-center mx-8">
            <div class="mx-4 my-4 basis-auto flex justify-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};