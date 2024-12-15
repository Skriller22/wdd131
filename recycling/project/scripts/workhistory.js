document.addEventListener('DOMContentLoaded', () => {
    const experienceData = [
        {
            title: "FusionFeed Remote Operator",
            description: "As a FusionFeed Remote Operator, I am responsible for monitoring and controlling the FusionFeed system. I am also responsible for troubleshooting any issues that may arise during the operation of the system. I am also responsible for maintaining the system and ensuring that it is operating at peak efficiency."
        },
        {
            title: "Machine Operator",
            description: "As a Machine Operator, I am responsible for operating and maintaining the machines in the factory. I am also responsible for troubleshooting any issues that may arise during the operation of the machines. I am also responsible for ensuring that the machines are operating at peak efficiency."
        }
    ];

    const experienceSection = document.querySelector('.experience');

    experienceData.forEach(job => {
        const jobTitle = document.createElement('h3');
        jobTitle.textContent = job.title;

        const jobDescription = document.createElement('p');
        jobDescription.textContent = job.description;

        experienceSection.appendChild(jobTitle);
        experienceSection.appendChild(jobDescription);
    });
});
