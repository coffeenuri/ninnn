document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления текста
    const sections = document.querySelectorAll('.content-block, .university');
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 100);
    });

    // Анимация при наведении на элементы списка
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.color = '#FF69B4'; // Розовый
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
            link.style.color = 'white';
        });
    });

    // Анимация университетов
    const universities = document.querySelectorAll('.university');
    universities.forEach(university => {
        university.addEventListener('mouseover', () => {
            university.style.transform = 'scale(1.05)';
            university.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        university.addEventListener('mouseout', () => {
            university.style.transform = 'scale(1)';
            university.style.boxShadow = 'none';
        });
    });
});