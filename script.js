const projects = [
    {
        name: "Waveform Generator",
        description: "Generate visual representations of audio waveforms from various file formats using Python and various libraries",
        url: "https://github.com/ByteBendr/waveform-generator",
        image: "static/waveform_gen.png"
    },
    {
        name: "Notes",
        description: "Streamline your thoughts with our Notes Web App. Effortlessly organize ideas, tasks, and more on any device. Stay productive and never miss an important note",
        url: "https://github.com/ByteBendr/notes_App",
        image: "static/note_app.png"
    },
    {
        name: "YouTube to MP3 Converter",
        description: "Convert YouTube videos to MP3 effortlessly with our user-friendly web app. Enjoy your favorite music on the go, hassle-free",
        url: "https://github.com/ByteBendr/yt_mp3_converter",
        image: "static/ytmp3.jpg"
    },
    {
        name: "To Do List",
        description: "Elevate your productivity with our intuitive To-Do Web App. Effortlessly manage tasks, and stay organized. Boost your efficiency and accomplish more every day",
        url: "https://github.com/ByteBendr/todo_app",
        image: "static/todo.png"
    },
    {
        name: "Reddit Memes",
        description: "Inject some humor into your day with our web app! It fetches random memes from Reddit, ensuring a steady supply of laughter-inducing content. Enjoy a daily dose of entertainment with ease",
        url: "https://github.com/ByteBendr/reddit_memes",
        image: "static/reddit.png"
    },
    {
        name: "Clock",
        description: "Experience time in vivid hues! Our RGB Clock Web App displays the current time with a mesmerizing color transition. Watch as the clock turns each second into a vibrant visual spectacle",
        url: "https://github.com/ByteBendr/clock_app",
        image: "static/clock.png"
    },
    {
        name: "Password Generator",
        description: "Enhance your online security with our Password Generator Web App. Create robust, random passwords, ensuring maximum protection for your accounts. Generate and safeguard your digital life effortlessly",
        url: "https://github.com/ByteBendr/password_generator_webapp",
        image: "static/passwd.jpg"
    },
    {
        name: "Currency Converter",
        description: "Effortlessly convert currencies with our web app. Stay updated on global exchange rates and make accurate financial decisions. Simplify your transactions and stay in control of your finances",
        url: "https://github.com/ByteBendr/currency_converter",
        image: "static/exchange.webp"
    },
    {
        name: "Resource Monitor Python App",
        description: "Monitor system resources efficiently with our Python-based application. Gain insights into CPU, memory, and disk usage. Keep your system running smoothly with this lightweight, customizable tool",
        url: "https://github.com/ByteBendr/resource_monitor_win_py",
        image: "static/resmon.jpg"
    },
    // Add more projects as needed
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">View on GitHub</a>
    `;

    projectList.appendChild(projectCard);
});
