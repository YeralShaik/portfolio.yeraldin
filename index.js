document.addEventListener('DOMContentLoaded', function () {

//Datos en ingles
const langDataEnglish = {
    greeting: "Hello I'm",
    name: 'Yeraldin Espinosa',
    ocupation: 'FrontEnd Developer / UI Designer',
    text: '🚀 Focused on web design and creating online experiences. My goal is to combine creativity with building functional web applications. I made the decision to steer my career towards Frontend - UI development to combine my passions and create exceptional user experiences. I am always looking for new challenges that allow me to grow and evolve professionally. I value my ability to adapt to change and learn quickly in this constantly evolving world.',
    tooltitle: 'Language and Tools',
    projecttitle: 'Portfolio',

    changeLanguage: 'Spanish',
};

// Datos en español
const langDataSpanish = {
    greeting: 'Hola,soy',
    name: 'Yeraldin Espinosa',
    ocupation: 'Desarrolladora FrontEnd / Diseñadora UI',
    text: '🚀 Enfocada en diseño web y la creación de experiencias en línea. Mi objetivo es combinar la creatividad con la construcción de aplicaciones web funcionales. Tomé la decisión de orientar mi carrera hacia el desarrollo Frontend - UI para combinar mis pasiones y crear experiencias de usuario excepcionales. Siempre estoy en busca de nuevos desafíos que me permitan crecer y evolucionar a nivel laboral. Valoro mi habilidad para adaptarme al cambio y aprender rápidamente en este mundo en constante evolución.',
    tooltitle: 'Lenguajes y Herramientas',
    projecttitle: 'Portafolio',

    changeLanguage: 'English',
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


