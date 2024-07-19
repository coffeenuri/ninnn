document.addEventListener('DOMContentLoaded', () => {
    const universities = [
        {
            name: 'Harvard University',
            location: 'USA',
            link: 'https://www.harvard.edu/',
            quote: 'Harvard has given me a strong foundation to build my future.'
        },
        {
            name: 'University of Cambridge',
            location: 'UK',
            link: 'https://www.cam.ac.uk/',
            quote: 'Cambridge provided a nurturing environment for academic excellence.'
        },
        {
            name: 'Stanford University',
            location: 'USA',
            link: 'https://www.stanford.edu/',
            quote: 'Stanford encouraged me to think outside the box and innovate.'
        },
        {
            name: 'MIT',
            location: 'USA',
            link: 'https://www.mit.edu/',
            quote: 'MIT’s rigorous curriculum prepared me for the challenges of the real world.'
        },
        {
            name: 'Oxford University',
            location: 'UK',
            link: 'https://www.ox.ac.uk/',
            quote: 'Oxford has a long-standing tradition of fostering leaders and thinkers.'
        }
    ];

    const graduates = [
        {
            name: 'Malala Yousafzai',
            university: 'University of Oxford',
            link: 'https://www.ox.ac.uk/',
            quote: 'Oxford empowered me to advocate for girls’ education worldwide.'
        },
        {
            name: 'Sheryl Sandberg',
            university: 'Harvard University',
            link: 'https://www.harvard.edu/',
            quote: 'Harvard taught me to lead with confidence and compassion.'
        },
        {
            name: 'Oprah Winfrey',
            university: 'Tennessee State University',
            link: 'https://www.tnstate.edu/',
            quote: 'Tennessee State University helped me discover my voice and purpose.'
        },
        {
            name: 'Mae Jemison',
            university: 'Stanford University',
            link: 'https://www.stanford.edu/',
            quote: 'Stanford’s support and resources were invaluable in my journey to space.'
        },
        {
            name: 'Kofi Annan',
            university: 'MIT',
            link: 'https://www.mit.edu/',
            quote: 'MIT’s education was a key part of my journey to become the UN Secretary-General.'
        }
    ];

    function createListItems(data, containerId) {
        const container = document.getElementById(containerId);
        data.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${item.link}" target="_blank">${item.name} (${item.location || item.university})</a>
                <p>"${item.quote}"</p>`;
            li.style.opacity = 0;
            li.style.transition = `opacity 0.5s ease-in-out ${index * 0.2}s, transform 0.3s`;
            container.appendChild(li);
            setTimeout(() => {
                li.style.opacity = 1;
            }, 50);
        });
    }

    createListItems(universities, 'universities-list');
    createListItems(graduates, 'graduates-list');

    document.querySelectorAll('li a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.color = '#FF69B4'; // Розовый
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
            link.style.color = '#333';
        });
    });
});