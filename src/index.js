document.addEventListener('DOMContentLoaded', function () {
    const langDataEnglish = {
        
        name: '¡Hello! I\'m Yeraldin Espinosa',
        ocupation: 'FrontEnd Developer',
        location: '📍Panamá, Panamá City',
        aboutme: 'About me',
        text: 'With a solid background in sales, I decided to pivot my career and dive into the fascinating world of web development, with a special focus on Frontend.<br> I am a self-taught individual with a strong capacity for learning and adapting to new environments.<br> I have a passion for researching, experimenting, and applying my knowledge to achieve my goals.<br> I have developed various personal projects that have allowed me to practice my skills and explore new web development techniques.<br> I consider myself a curious person with a great appetite for knowledge. I am always seeking new opportunities to learn and improve my skills.',
        tooltitle: 'Skills',
        projecttitle: 'Projects',
        projectDescription1: 'This project involves the creation of a Landing Page for Shaik Asesores, a Panamanian company dedicated to providing advice on personal loans.',
        projectDescription2: 'MovieStream is a web application that allows you to discover and explore movies from various categories.',
        projectDescription3: "Gif App is a simple app to search and display gifs using the Giphy API.",
        projectDescription4: 'The challenge of this project was to design an application that addressed the needs of those looking to adopt pets or find lost ones.',
        changeLanguage: 'Spanish'
    }
  
    const langDataSpanish = {
        
        name: '¡Hola! Soy Yeraldin Espinosa',
        ocupation: 'Desarrolladora FrontEnd 💻',
        location: '📍Panamá, Ciudad de Panamá',
        aboutme: 'Sobre mí',
        text: 'Con una sólida experiencia en el mundo de las ventas, decidí dar un giro a mi carrera y sumergirme en el fascinante universo del desarrollo web, enfocándome especialmente en el Frontend.<br>Soy una persona autodidacta, con gran capacidad de aprendizaje y adaptación a nuevos entornos.<br>Me apasiona investigar, experimentar y poner en práctica mis conocimientos para alcanzar mis objetivos.<br>He desarrollado diversos proyectos personales que me han permitido poner en práctica mis habilidades y explorar nuevas técnicas de desarrollo web.<br>Me considero una persona curiosa y con un gran apetito por el conocimiento. Siempre estoy buscando nuevas oportunidades para aprender y mejorar mis habilidades.',
        tooltitle: 'Skills',
        projecttitle: 'Proyectos',
        changeLanguage: 'English'
    }
  
    let currentLanguage = 'spanish'
  
    function updateLanguage() {
        const langData = currentLanguage === 'english' ? langDataEnglish : langDataSpanish
        document.getElementById('changeLanguage').textContent = langData.changeLanguage
        
        document.getElementById('name').textContent = langData.name
        document.getElementById('ocupation').textContent = langData.ocupation
        document.querySelector('.aboutme-title').textContent = langData.aboutme
        document.getElementById('location').textContent = langData.location
        document.getElementById('text').innerHTML = langData.text
        document.getElementById('tooltitle').textContent = langData.tooltitle
    }
  
    document.getElementById('changeLanguage').addEventListener('click', () => {
        currentLanguage = currentLanguage === 'english' ? 'spanish' : 'english'
        updateLanguage()
    })
  
    document.getElementById('whatsapp-chat').addEventListener('click', function () {
        const phoneNumber = '+50760745606'
        const message = 'Hola, estoy interesado en contactarte.'
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
        window.open(whatsappURL, '_blank')
    })
  
    document.querySelector('.linkedin-button').addEventListener('click', function () {
        const linkedinUrl = 'https://www.linkedin.com/in/yeraldinespinosa/'
        window.open(linkedinUrl, '_blank')
    })
  
    document.querySelector('.github-button').addEventListener('click', function () {
        const gitHubUrl = 'https://github.com/YeralShaik'
        window.open(gitHubUrl, '_blank')
    })
  
    document.querySelector('.mail-button').addEventListener('click', function () {
        const mailUrl = 'mailto:yeraldinshaik@gmailcom'
        window.open(mailUrl, '_blank')
    })
  
    updateLanguage()
  })
  
  const projectsData = [
    {
        title: 'Cook Quick',
        link: 'https://yeralshaik.github.io/QuickCook/',
        imgSrc: './asset/screencapture-127-0-0-1-5500-2024-04-11-17_08_12.png',
        description: 'Página de recetas, creada desde cero con Figma, HTML y CSS.',
        githubLink: 'https://github.com/YeralShaik/QuickCook'
    },
    {
        title: 'Página Web Shaik Asesores',
        link: 'https://shaikasesores.com',
        imgSrc: './asset/screencapture-shaikasesores-2024-04-24-15_55_38 (1).png',
        description: 'Página para una empresa panameña dedicada a la asesoria de préstamos personales, creada desde cero con Figma, HTML, CSS, React.',
        githubLink: 'https://github.com/YeralShaik/Shaik-Asesores'
    }
  ]
  
  function fillProjectsContainer() {
    const projectsContainer = document.getElementById('projects-container')
  
    projectsData.forEach((project) => {
        const projectCard = document.createElement('div')
        projectCard.className = 'project-Card'
  
        const projectImg = document.createElement('img')
        projectImg.src = project.imgSrc
        projectImg.alt = `Imagen del proyecto ${project.title}`
        const projectImgWrapper = document.createElement('div')
        projectImgWrapper.className = 'project-Img'
        projectImgWrapper.appendChild(projectImg)
  
        const projectContent = document.createElement('div')
        projectContent.className = 'project-Content'
  
        const projectName = document.createElement('h2')
        projectName.className = 'project-Name'
        projectName.innerText = project.title
        projectContent.appendChild(projectName)
  
        const projectDescription = document.createElement('p')
        projectDescription.className = 'project-Description'
        projectDescription.innerText = project.description
        projectContent.appendChild(projectDescription)
  
        const linksContainer = document.createElement('div')
        linksContainer.className = 'links-Container'
  
        const githubLink = document.createElement('a')
        githubLink.href = project.githubLink
        githubLink.className = 'github-link'
        githubLink.innerText = 'Code'
        linksContainer.appendChild(githubLink)
  
        const projectImgLink = document.createElement('a')
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
  