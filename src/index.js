document.addEventListener('DOMContentLoaded', function () {
    const langDataEnglish = {
        changeLanguage: 'Spanish',
        name: '¡Hello! I\'m Yeraldin Espinosa',
        ocupation: 'FrontEnd Developer | UX/UI',
        location: '📍Panamá, Panamá City',
        aboutme: 'About me',
        downloadCV: 'Download CV',
        text: 'With a solid background in sales, I decided to pivot my career and dive into the fascinating world of web development, with a special focus on Frontend.<br> I am a self-taught individual with a strong capacity for learning and adapting to new environments.<br> I have a passion for researching, experimenting, and applying my knowledge to achieve my goals.<br> I have developed various personal projects that have allowed me to practice my skills and explore new web development techniques.<br> I consider myself a curious person with a great appetite for knowledge. I am always seeking new opportunities to learn and improve my skills.',
        projecttitle: 'Projects',
        description: 'Recipe page, created from scratch using Figma, HTML, and CSS.',
        tooltitle: 'Skills',
        viewProjectlink: 'View project' 

    }
  
    const langDataSpanish = {
        
        name: '¡Hola! Soy Yeraldin Espinosa',
        ocupation: 'Desarrolladora FrontEnd | UX/UI 💻',
        location: '📍Panamá, Ciudad de Panamá',
        aboutme: 'Sobre mí',
        downloadCV: 'Descargar CV',
        text: 'Con una sólida experiencia en el mundo de las ventas, decidí dar un giro a mi carrera y sumergirme en el fascinante universo del desarrollo web, enfocándome especialmente en el Frontend.<br>Soy una persona autodidacta, con gran capacidad de aprendizaje y adaptación a nuevos entornos.<br>Me apasiona investigar, experimentar y poner en práctica mis conocimientos para alcanzar mis objetivos.<br>He desarrollado diversos proyectos personales que me han permitido poner en práctica mis habilidades y explorar nuevas técnicas de desarrollo web.<br>Me considero una persona curiosa y con un gran apetito por el conocimiento. Siempre estoy buscando nuevas oportunidades para aprender y mejorar mis habilidades.',
        tooltitle: 'Skills',
        projecttitle: 'Proyectos',
        changeLanguage: 'English',


    }
  
    let currentLanguage = 'spanish'
  
    function updateLanguage() {
        const langData = currentLanguage === 'english' ? langDataEnglish : langDataSpanish
        document.querySelector('#changeLanguage').textContent = langData.changeLanguage
        document.querySelector('#name').textContent = langData.name
        document.querySelector('#ocupation').textContent = langData.ocupation
        document.querySelector('#location').textContent = langData.location
        document.querySelector('.aboutme-title').textContent = langData.aboutme
        document.querySelector('#cv-download').textContent = langData.downloadCV
        document.querySelector('#text').innerHTML = langData.text
        document.querySelector('.project-title').textContent = langData.projecttitle
        document.querySelector('#tooltitle').textContent = langData.tooltitle
        document.querySelector('.project-Description').textContent = langData.description
        document.querySelector('.link').textContent = langData.viewProjectlink
    
    }
  
    document.querySelector('#changeLanguage').addEventListener('click', () => {
        currentLanguage = currentLanguage === 'english' ? 'spanish' : 'english'
        updateLanguage()
    })

    const phoneNumber = '+50760745606'
    const message = 'Hola, estoy interesado en contactarte.'
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    const linkedinUrl = 'https://www.linkedin.com/in/yeraldinespinosa/'
    const gitHubUrl = 'https://github.com/YeralTech'
    const mailUrl = 'mailto:yeraldinshaik@gmailcom'
    
    document.getElementById('whatsapp-chat').addEventListener('click', function () {
        window.open(whatsappURL, '_blank')
    })
  
    document.querySelector('.linkedin-button').addEventListener('click', function () {
        window.open(linkedinUrl, '_blank')
    })
  
    document.querySelector('.github-button').addEventListener('click', function () {
        window.open(gitHubUrl, '_blank')
    })
  
    document.querySelector('.mail-button').addEventListener('click', function () { 
        window.open(mailUrl, '_blank')
    })
  
    updateLanguage()
  })
  
  const projectsData = [
 
    {
        title: 'Shaik Asesores',
        link: 'https://shaikasesores.com',
        imgSrc: '../asset/screencapture-shaikasesores-2024-06-28-15_53_32.png',
        description: 'Página para una empresa panameña dedicada a la asesoria de préstamos personales, creada desde cero con Figma, HTML, Tailwind, React.',
        githubLink: 'https://github.com/YeralTech/web-Shaikk'
    },
    {
        title: 'Cook Quick',
        link: 'https://yeralshaik.github.io/QuickCook/',
        imgSrc: './asset/screencapture-127-0-0-1-5500-2024-04-11-17_08_12.png',
        description: 'Página de recetas, creada desde cero con Figma, HTML, CSS Y Javascript.',
        githubLink: 'https://github.com/YeralTech/QuickCook'
    },
    {
        title: 'Web Store',
        link: 'https://yeralshaik.github.io/Store/',
        imgSrc: '/asset/screencapture-yeralshaik-github-io-Store-2024-06-03-20_48_55 (1).png',
        description: 'Api Store, creada desde cero con Figma, HTML, CSS y Javascript.',
        githubLink: 'https://github.com/YeralTech/Store'
    }
  ]
  
  function fillProjectsContainer() {
    const projectsContainer = document.getElementById('projects-container')
  
    projectsData.forEach((project) => {
        const projectCard = document.createElement('div')
        const projectImg = document.createElement('img')
        const projectImgWrapper = document.createElement('div')
        const projectContent = document.createElement('div')
        const projectName = document.createElement('h2')
        const projectDescription = document.createElement('p')
        const linksContainer = document.createElement('div')
        const githubLink = document.createElement('a')
        const projectImgLink = document.createElement('a')

        projectCard.className = 'project-Card'

        projectImg.src = project.imgSrc
        projectImg.alt = `Imagen del proyecto ${project.title}`   
        projectImgWrapper.className = 'project-Img'
        projectImgWrapper.appendChild(projectImg)

        projectContent.className = 'project-Content'
        projectName.className = 'project-Name'
        projectName.innerText = project.title
        projectContent.appendChild(projectName)

        projectDescription.className = 'project-Description'
        projectDescription.innerText = project.description
        projectContent.appendChild(projectDescription)
        
    

        linksContainer.className = 'links-Container'
        githubLink.href = project.githubLink
        githubLink.className = 'github-link'
        githubLink.innerText = 'Code'
        linksContainer.appendChild(githubLink)
  
        projectImgLink.href = project.link
        projectImgLink.className = 'link'
        projectImgLink.innerText = 'Ver proyecto'
        linksContainer.appendChild(projectImgLink)
  
        projectContent.appendChild(linksContainer)
        projectCard.appendChild(projectImgWrapper)
        projectCard.appendChild(projectContent)
        projectsContainer.appendChild(projectCard)
    })
  }
  
  document.addEventListener('DOMContentLoaded', fillProjectsContainer)
  