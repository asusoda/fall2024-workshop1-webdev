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