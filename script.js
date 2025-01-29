// Smooth scrolling for anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formFields = contactForm.querySelectorAll('input, textarea');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;
    
    formFields.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
            field.style.border = '2px solid #FF0000';
            field.setAttribute('placeholder', 'This field is required');
        } else {
            field.style.border = '1px solid #ddd';
        }
    });

    if (valid) {
        // Here, you can send the form data to a server
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Light/Dark Theme Toggle (Optional Enhancement)
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.top = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.backgroundColor = "#333";
toggleButton.style.color = "#fff";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
toggleButton.style.borderRadius = "5px";
toggleButton.style.zIndex = "1000";

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    toggleButton.textContent = `${currentMode} Mode`;
});

// Add dark mode styles
const darkModeStyles = `
    body.dark-mode {
        background-color: #2E3A46;
        color: #fff;
    }

    header.dark-mode {
        background-color: #1A2329;
    }

    footer.dark-mode {
        background-color: #1A2329;
    }

    .section.dark-mode {
        background-color: #333;
    }

    .project.dark-mode {
        background-color: #444;
    }

    .project a.dark-mode {
        color: #88C3D4;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
