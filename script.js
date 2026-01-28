// Menú Hamburguesa para Móvil
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Estilo simple para mostrar el menú en móvil
    if(navLinks.classList.contains('active')){
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    } else {
        navLinks.style.display = 'none';
    }
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {// Menú Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if(navLinks.classList.contains('active')){
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    } else {
        navLinks.style.display = 'none';
    }
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if(window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                navLinks.style.display = 'none';
            }
        }
    });
});

// --- SISTEMA DE TRADUCCIÓN ---

const translations = {
    es: {
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_card: "Smart Card",
        nav_work: "Work",
        nav_contact: "Contacto",
        hero_badge: "Nuevos Espacios Digitales",
        hero_title: "Diseño que <br> <span class='highlight'>trasciende.</span>",
        hero_desc: "En Quinze fusionamos estrategia y minimalismo para construir marcas que lideran su sector. No hacemos solo webs, creamos activos digitales.",
        hero_btn_start: "Iniciar Proyecto <i class='fas fa-arrow-right'></i>",
        hero_btn_portfolio: "Ver Portafolio",
        stats_custom: "Diseño 100% A Medida",
        stats_direct: "Trato Directo",
        stats_agile: "Entrega Ágil",
        services_subtitle: "EXPERTISE",
        services_title: "Soluciones a medida",
        serv_web_title: "Desarrollo Web",
        serv_web_desc: "Sitios rápidos, seguros y optimizados para Google (SEO). Desde landing pages hasta portales corporativos.",
        serv_ecom_title: "E-Commerce",
        serv_ecom_desc: "Transformamos visitantes en compradores. Tiendas en línea intuitivas y seguras.",
        serv_card_title: "Wallet Cards",
        serv_card_desc: "Tarjetas de presentación digitales compatibles con Apple y Google Wallet.",
        card_badge: "Sin Plásticos.",
        card_title: "Directo al bolsillo <br><span class='gradient-text'>de tu cliente.</span>",
        card_desc: "Olvídate de imprimir. Diseñamos tu credencial digital lista para guardarse en Apple Wallet y Google Wallet.",
        card_feat_1: "<i class='fab fa-apple'></i> Compatible con iPhone",
        card_feat_2: "<i class='fab fa-android'></i> Compatible con Android",
        card_feat_3: "<i class='fas fa-ban'></i> Cero gastos de impresión",
        card_btn: "Diseñar mi Pass <i class='fas fa-arrow-right'></i>",
        pass_label_name: "NOMBRE",
        pass_label_role: "PUESTO",
        pass_scan: "Escanea para guardar",
        work_subtitle: "SELECTED WORK",
        work_title: "Proyectos Recientes",
        work_1_desc: "Caso de Éxito / Sitio Web",
        work_btn_view: "Ver Resultado <i class='fas fa-external-link-alt'></i>",
        work_2_title: "Desarrollo a Medida",
        work_2_desc: "Sin Plantillas Genéricas",
        work_2_sub: "Tu marca es única.",
        work_3_title: "¿Tu Proyecto Aquí?",
        work_3_desc: "Agenda Abierta 2026",
        work_3_btn: "Cotizar Ahora",
        contact_title: "¿Tienes un proyecto?",
        contact_desc: "Hagamos algo increíble juntos. Cuéntanos tu idea.",
        contact_btn: "Enviar Mensaje",
        footer_desc: "Estudio de diseño digital.",
        footer_links: "Enlaces",
        footer_follow: "Síguenos",
        // Placeholders
        ph_name: "Tu Nombre",
        ph_email: "Correo Electrónico",
        ph_msg: "Cuéntanos tu idea"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_card: "Smart Card",
        nav_work: "Work",
        nav_contact: "Contact",
        hero_badge: "New Digital Spaces",
        hero_title: "Design that <br> <span class='highlight'>transcends.</span>",
        hero_desc: "At Quinze, we fuse strategy and minimalism to build brands that lead their sector. We don't just make websites; we create digital assets.",
        hero_btn_start: "Start Project <i class='fas fa-arrow-right'></i>",
        hero_btn_portfolio: "View Portfolio",
        stats_custom: "100% Custom Design",
        stats_direct: "Direct Communication",
        stats_agile: "Agile Delivery",
        services_subtitle: "EXPERTISE",
        services_title: "Tailored Solutions",
        serv_web_title: "Web Development",
        serv_web_desc: "Fast, secure, and SEO-optimized sites. From landing pages to corporate portals.",
        serv_ecom_title: "E-Commerce",
        serv_ecom_desc: "We turn visitors into buyers. Intuitive and secure online stores.",
        serv_card_title: "Wallet Cards",
        serv_card_desc: "Digital business cards compatible with Apple and Google Wallet.",
        card_badge: "Plastic Free.",
        card_title: "Straight to your <br><span class='gradient-text'>client's pocket.</span>",
        card_desc: "Forget printing. We design your digital credential ready to be saved in Apple Wallet and Google Wallet.",
        card_feat_1: "<i class='fab fa-apple'></i> iPhone Compatible",
        card_feat_2: "<i class='fab fa-android'></i> Android Compatible",
        card_feat_3: "<i class='fas fa-ban'></i> Zero printing costs",
        card_btn: "Design my Pass <i class='fas fa-arrow-right'></i>",
        pass_label_name: "NAME",
        pass_label_role: "ROLE",
        pass_scan: "Scan to save",
        work_subtitle: "SELECTED WORK",
        work_title: "Recent Projects",
        work_1_desc: "Success Story / Website",
        work_btn_view: "View Result <i class='fas fa-external-link-alt'></i>",
        work_2_title: "Custom Development",
        work_2_desc: "No Generic Templates",
        work_2_sub: "Your brand is unique.",
        work_3_title: "Your Project Here?",
        work_3_desc: "Open Agenda 2026",
        work_3_btn: "Get a Quote",
        contact_title: "Got a project?",
        contact_desc: "Let's create something amazing together. Tell us your idea.",
        contact_btn: "Send Message",
        footer_desc: "Digital design studio.",
        footer_links: "Links",
        footer_follow: "Follow Us",
        // Placeholders
        ph_name: "Your Name",
        ph_email: "Email Address",
        ph_msg: "Tell us about your idea"
    }
};

let currentLang = 'es';

function changeLanguage() {
    // Alternar idioma
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Cambiar texto del botón
    document.getElementById('lang-text').textContent = currentLang === 'es' ? 'EN' : 'ES';

    // Actualizar todos los textos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Actualizar placeholders de inputs
    document.getElementById('form_name').placeholder = translations[currentLang].ph_name;
    document.getElementById('form_email').placeholder = translations[currentLang].ph_email;
    document.getElementById('form_msg').placeholder = translations[currentLang].ph_msg;
}
            target.scrollIntoView({ behavior: 'smooth' });
            // Cerrar menú móvil al hacer clic
            if(window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                navLinks.style.display = 'none';
            }
        }
    });
});