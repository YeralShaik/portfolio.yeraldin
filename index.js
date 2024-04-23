document.addEventListener('DOMContentLoaded', function () {
    const langDataEnglish = {
      greeting: "Hello I'm",
      name: 'Yeraldin Espinosa',
      ocupation: 'FrontEnd Developer / UI Designer',
      text: '🚀 Focused on web design and creating online experiences. My goal is to combine creativity with building functional web applications. I made the decision to steer my career towards Frontend - UI development to combine my passions and create exceptional user experiences.',
      tooltitle: 'Language and Tools',
      projecttitle: 'Portfolio',
      projectDescription1: 'This project involves the creation of a Landing Page for Shaik Asesores, a Panamanian company dedicated to providing advice on personal loans.',
      projectDescription2: 'MovieStream is a web application that allows you to discover and explore movies from various categories.',
      projectDescription3: "Gif App is a simple app to search and display gifs using the Giphy API.",
      projectDescription4: 'The challenge of this project was to design an application that addressed the needs of those looking to adopt pets or find lost ones.',
      changeLanguage: 'Spanish',
    };
  
    const langDataSpanish = {
      greeting: 'Hola, soy',
      name: 'Yeraldin Espinosa',
      ocupation: 'Desarrolladora FrontEnd / Diseñadora UI',
      location: 'Panamá, Ciudad de Panamá',
      text: '🚀 Enfocada en diseño web y la creación de experiencias en línea. Mi objetivo es combinar la creatividad con la construcción de aplicaciones web funcionales.',
      tooltitle: 'Lenguajes y Herramientas',
      projecttitle: 'Portafolio',
      projectDescription1: 'Este proyecto consiste en la creación de una Landing Page para Shaik Asesores, una empresa panameña dedicada a préstamos personales.',
      projectDescription2: 'MovieStream es una aplicación web que te permite descubrir y explorar películas de diversas categorías.',
      projectDescription3: "Gif App es una aplicación simple para buscar y mostrar gifs usando la API de Giphy.",
      projectDescription4: 'El desafío de este proyecto fue diseñar una aplicación que abordara las necesidades de quienes buscan adoptar o reencontrar mascotas.',
      changeLanguage: 'English',
    };
  
    let currentLanguage = 'spanish';
  
    function updateLanguage() {
      const langData = currentLanguage === 'english' ? langDataEnglish : langDataSpanish;
      document.getElementById('changeLanguage').textContent = langData.changeLanguage;
      document.getElementById('greeting').textContent = langData.greeting;
      document.getElementById('name').textContent = langData.name;
      document.getElementById('ocupation').textContent = langData.ocupation;
      document.getElementById('location').textContent = langData.location;
      document.getElementById('text').textContent = langData.text;
      document.getElementById('tooltitle').textContent = langData.tooltitle;
      document.getElementById('project-title').textContent = langData.projecttitle;
      document.getElementById('project-description-1').textContent = langData.projectDescription1;
      document.getElementById('project-description-2').textContent = langData.projectDescription2;
      document.getElementById('project-description-3').textContent langData.projectDescription3;
      document.getElementById('project-description-4').textContent langData.projectDescription4;
    }
  
    document.getElementById('changeLanguage').addEventListener('click', () => {
      currentLanguage = currentLanguage === 'english' ? 'spanish' : 'english';
      updateLanguage();
    });
  
    document.getElementById('whatsapp-chat').addEventListener('click', function () {
      const phoneNumber = '+50760745606';
      const message = 'Hola, estoy interesado en contactarte.';
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    });
  
    updateLanguage();
  });
  
  const projectsData = [
    {
      title: 'Cook Quick',
      link: 'https://yeralshaik.github.io/QuickCook/',
      imgSrc: './asset/screencapture-127-0-0-1-5500-2024-04-11-17_08_12.png',
      description: 'Página de recetas, creada desde cero con figma, HTML y CSS.',
      githubLink: 'https://github.com/YeralShaik/QuickCook',
    },
    {
      title: 'Página Web Shaik Asesores',
      link: 'https://shaikasesores.com',
      imgSrc: './asset/Captura de pantalla 2024-03-23 152807.png',
      description: 'Página para una empresa panameña dedicada a préstamos personales.',
      githubLink: 'https://github.com/YeralShaik/Shaik-Asesores',
    },
    // Otros proyectos...
  ];
  
  function fillProjectsContainer() {
    const projectsContainer = document.getElementById('projects-container');
  
    projectsData.forEach((project) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-Card';
  
      const projectImg = document.createElement('img');
      projectImg.src = project.imgSrc;
      projectImg.alt = `Imagen del proyecto ${project.title}`;
      const projectImgWrapper = document.createElement('div');
      projectImgWrapper.className = 'project-Img';
      projectImgWrapper.appendChild(projectImg);
  
      const projectContent = document.createElement('div');
      projectContent.className = 'project-Content';
  
      const projectName = document.createElement('h2');
      projectName.className = 'project-Name';
      projectName.innerText = project.title;
      projectContent.appendChild(projectName);
  
      const projectDescription = document.createElement('p');
      projectDescription.className = 'project-Description';
      projectDescription.innerText = project.description;
      projectContent.appendChild(projectDescription);
  
      const linksContainer = document.createElement('div');
      linksContainer.className = 'links-Container';
  
      const githubLink = document.createElement('a');
      githubLink.href = project.githubLink;
      githubLink.className = 'github-link';
      githubLink.innerText = 'Code';
      linksContainer.appendChild(githubLink);
  
      const projectImgLink = document.createElement('a');
      projectImgLink.href = project.link;
      projectImgLink.className = 'link';
      projectImgLink.innerText = 'Ver proyecto';
      linksContainer.appendChild(projectImgLink);
  
      projectContent.appendChild(linksContainer);
  
      projectCard.appendChild(projectImgWrapper);
      projectCard.appendChild(projectContent);
  
      projectsContainer.appendChild(projectCard);
    });
  }
  
  document.addEventListener('DOMContentLoaded', fillProjectsContainer);
  