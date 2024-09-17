tailwind.config = {
    theme: {
        extend: {
            colors: {
            clifford: '#da373d',
            }
        },
        backgroundImage: {
            "home": "url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==')",
            // "home": "url('https://picsum.photos/2044/1405/?grayscale&blur')", // Placeholder Image API
        }
    }
}

var typed = new Typed("#text", {
    strings: [
        "Student",
        "Software Developer",
        "Web Developer",
        "Programmer",
        "Learner",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

const GITHUB_USERNAME = "asusoda"
fetch(`https://api.github.com/orgs/${GITHUB_USERNAME}/repos`)
.then(response => response.json())
.then(repos => {
    for(const repo of repos.slice(-3)) {
        const projectsContainer = document.getElementById("projects-container")
        projectsContainer.innerHTML += `
            <div>
                <h3 class="text-3xl font-bold text-blue-900 my-1">${repo.name}</h3>
                <p>${repo.description}</p>
            </div>
        `
        // <li><a href=${repo.html_url}>${repo.name}</a> - ${repo.description} (${repo.language})</li>
    }

});