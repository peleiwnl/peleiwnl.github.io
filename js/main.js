function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}


document.addEventListener('click', function(event) {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    
    if (!navContainer.contains(event.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        dot.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: #64ffda;
            border-radius: 50%;
            left: 50%;
            top: ${item.offsetTop + item.offsetHeight/2}px;
            transform: translateX(-50%);
            box-shadow: 0 0 0 4px #1a1a1a, 0 0 15px rgba(100, 255, 218, 0.5);
            z-index: 10;
        `;
        timeline.appendChild(dot);
    });
});


function openProject(projectId) {
    // Add your project URLs or actions here
    const projects = {
        'chat-app': '#', // Coming soon
        'blog-app': 'https://github.com/peleiwnl/Bloggit',
        'rest-api-service': 'https://github.com/peleiwnl/REST-API-Service',
        'expense-tracker': 'https://github.com/peleiwnl/Expense-Tracking',
        'keylog-detectors': 'https://github.com/peleiwnl/Keylogger-Detection-Methods',
        'timebomb-game': 'https://github.com/lamarsafi/timebomb',
        'android-quiz-app': 'https://github.com/peleiwnl/Quiz-ZAP',
        'forest-fire-prediction': 'https://github.com/peleiwnl/Predicting-Forest-Fires',
        'parking-robot': 'https://github.com/peleiwnl/Parking-Robot',
        'unknown': '#'
    };
    
    const url = projects[projectId];
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        alert(`${projectId.replace('-', ' ')} project will be available soon!`);
    }
}


function downloadCV() {
    const cvUrl = 'assets/documents/CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Pele_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:peleiwnl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Optional: Show success message
    alert('Opening your email client...');
}


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    if (!current || window.scrollY < 100) {
        current = 'home';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === current) {
            link.classList.add('active');
        }
    });
});


window.addEventListener('load', () => {
    window.dispatchEvent(new Event('scroll'));
});