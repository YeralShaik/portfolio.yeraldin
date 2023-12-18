document.addEventListener('DOMContentLoaded', function () {

//Datos en ingles
const langDataEnglish = {
    greeting: "Hello I'm",
    name: 'Yeraldin Espinosa',
    ocupation: 'FrontEnd Developer / UI Designer',
    text: '🚀 Focused on web design and creating online experiences. My goal is to combine creativity with building functional web applications. I made the decision to steer my career towards Frontend - UI development to combine my passions and create exceptional user experiences. I am always looking for new challenges that allow me to grow and evolve professionally. I value my ability to adapt to change and learn quickly in this constantly evolving world.',
    tooltitle: 'Language and Tools',
    projecttitle: 'Portfolio',
    projectDescription1:'This project involves the creation of a Landing Page for Shaik Asesores, a Panamanian company dedicated to providing advice on personal loans. The website is designed to provide information about the company services and make it easy for visitors to request quotes and obtain more details about the personal loans they offer',
    projectDescription2:'MovieStream is a web application that allows you to discover and explore movies from various categories',
    projectDescription3:"Gif App es una aplicación simple para buscar y mostrar gifs utilizando la API de Giphy.\n\nCaracterísticas:\n- Buscar gifs por términos de búsqueda.\n- Mostrar gifs en la interfaz de usuario.",
    projectDescription4:'The challenge of this project was to design an application that addressed the needs of those looking to adopt pets, as well as those who have lost their furry companions. The goal was to create an intuitive and welcoming platform that facilitated pet adoption and reunification, promoting a positive and emotional experience for users.',
    changeLanguage: 'Spanish'
  
};

// Datos en español
const langDataSpanish = {
    greeting: 'Hola,soy',
    name: 'Yeraldin Espinosa',
    ocupation: 'Desarrolladora FrontEnd / Diseñadora UI',
    text: '🚀 Enfocada en diseño web y la creación de experiencias en línea. Mi objetivo es combinar la creatividad con la construcción de aplicaciones web funcionales. Tomé la decisión de orientar mi carrera hacia el desarrollo Frontend - UI para combinar mis pasiones y crear experiencias de usuario excepcionales. Siempre estoy en busca de nuevos desafíos que me permitan crecer y evolucionar a nivel laboral. Valoro mi habilidad para adaptarme al cambio y aprender rápidamente en este mundo en constante evolución.',
    tooltitle: 'Lenguajes y Herramientas',
    projecttitle: 'Portafolio',
    projectDescription1:'Este proyecto consiste en la creación de una Landing Page para Shaik Asesores, una empresa panameña dedicada a brindar asesoramiento en préstamos personales. La página web está diseñada para ofrecer información sobre los servicios de la empresa y facilitar a los visitantes la solicitud de cotizaciones y más detalles sobre los préstamos personales que ofrecen.',
    projectDescription2:'MovieStream es una aplicación web que te permite descubrir y explorar películas de diversas categorías.',
    projectDescription3:"Gif App es una aplicación simple para buscar y mostrar gifs utilizando la API de Giphy.\n\nCaracterísticas:\n- Buscar gifs por términos de búsqueda.\n- Mostrar gifs en la interfaz de usuario.",
    projectDescription4:'El desafío de este proyecto fue diseñar una aplicación que abordara las necesidades de aquellos que buscan adoptar mascotas, así como de aquellos que han perdido a sus compañeros peludos. El objetivo era crear una plataforma intuitiva y acogedora que facilitara la adopción y reunión de mascotas, promoviendo una experiencia positiva y emocional para los usuarios.',

    changeLanguage: 'English'
};

// Inglés es el idioma predeterminado
let currentLanguage = 'spanish'; 

// Función para actualizar el contenido según el idioma actual
function updateLanguage() {
    const langData = currentLanguage === 'english' ? langDataEnglish : langDataSpanish;

    document.getElementById('changeLanguage').textContent = langData.changeLanguage;
    document.getElementById('greeting').textContent = langData.greeting;
    document.getElementById('name').textContent = langData.name;
    document.getElementById('ocupation').textContent = langData.ocupation;
    document.getElementById('text').textContent = langData.text;
    document.getElementById('tooltitle').textContent = langData.tooltitle;
    document.getElementById('project-title').textContent = langData.projecttitle;
    document.getElementById('project-description-1').textContent = langData.projectDescription1;
    document.getElementById('project-description-2').textContent = langData.projectDescription2;
    document.getElementById('project-description-3').textContent = langData.projectDescription3;
    document.getElementById('project-description-4').textContent = langData.projectDescription4;
}

document.getElementById('changeLanguage').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'english' ? 'spanish' : 'english';
    updateLanguage();
});

//Button de whatsapp -contact
document.getElementById('whatsapp-chat').addEventListener('click', function () {
    const phoneNumber = '+50760745606'; 
    const message = 'Hola, estoy interesado en contactarte.'; 
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});

updateLanguage();
});


