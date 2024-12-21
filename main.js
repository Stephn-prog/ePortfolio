// Select the icons
const aboutIcon = document.getElementById("about-icon");
const githubIcon = document.getElementById("github-icon");
const socialIcon = document.getElementById("social-icon");
const contactIcon = document.getElementById("contact-icon");

// Animation function
function animateIcon(icon) {
    icon.style.animation = "shake 0.5s ease-in-out"; // Add shake animation
    setTimeout(() => {
        icon.style.animation = ""; // Remove animation after 0.5s
    }, 500);
}

// Add event listeners for clicks
aboutIcon.addEventListener("click", () => {
    animateIcon(aboutIcon);
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

githubIcon.addEventListener("click", () => {
    animateIcon(githubIcon);
    document.getElementById("github").scrollIntoView({ behavior: "smooth" });
});

socialIcon.addEventListener("click", () => {
    animateIcon(socialIcon);
    document.getElementById("social").scrollIntoView({ behavior: "smooth" });
});

contactIcon.addEventListener("click", () => {
    animateIcon(contactIcon);
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle animation on scroll
    function handleScrollAnimation() {
        const skillItems = document.querySelectorAll('.skill-item, .interest-item');

        skillItems.forEach(item => {
            if (isInViewport(item)) {
                item.style.animationPlayState = 'running';
            }
        });
    }

    // Initial check
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
});

