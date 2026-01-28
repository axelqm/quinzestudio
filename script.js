/* --- script.js (FINAL CON ANIMACIÓN) --- */

// 1. MENÚ HAMBURGUESA (MÓVIL)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        // Solo alternamos la clase. El CSS se encarga de la animación suave.
        navLinks.classList.toggle('active');
        
        // Opcional: Cambiar el icono de hamburguesa a "X"
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// 2. SCROLL SUAVE & CIERRE AUTOMÁTICO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Cerrar menú móvil suavemente al hacer clic en un enlace
            if(window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Restaurar icono
                const icon = hamburger.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
});

// 3. TRADUCCIÓN (Mantenemos tu lógica exacta)
const translations = {
    es: {
        nav_home: "Inicio", nav_services: "Servicios", nav_card: "Smart Card", nav_work: "Work", nav_contact: "Contacto",
        hero_badge: "Nuevos Espacios Digitales", hero_title: "Diseño que <br> <span class='highlight'>trasciende.</span>",
        hero_desc: "En Quinze fusionamos estrategia y minimalismo para construir marcas que lideran su sector. No hacemos solo webs, creamos activos digitales.",
        hero_btn_start: "Iniciar Proyecto <i class='fas fa-arrow-right'></i>", hero_btn_portfolio: "Ver Portafolio",
        stats_custom: "Diseño 100% A Medida", stats_direct: "Trato Directo", stats_agile: "Entrega Ágil",
        services_subtitle: "EXPERTISE", services_title: "Soluciones a medida",
        serv_web_title: "Desarrollo Web", serv_web_desc: "Sitios rápidos, seguros y optimizados para Google (SEO).",
        serv_ecom_title: "E-Commerce", serv_ecom_desc: "Tiendas en línea intuitivas y seguras.",
        serv_card_title: "Wallet Cards", serv_card_desc: "Tarjetas digitales compatibles con Apple y Google Wallet.",
        card_badge: "Sin Plásticos.", card_title: "Directo al bolsillo <br><span class='gradient-text'>de tu cliente.</span>",
        card_desc: "Olvídate de imprimir. Diseñamos tu credencial digital lista para guardarse en Apple y Google Wallet.",
        card_feat_1: "<i class='fab fa-apple'></i> Compatible con iPhone", card_feat_2: "<i class='fab fa-android'></i> Compatible con Android",
        card_feat_3: "<i class='fas fa-ban'></i> Cero gastos de impresión", card_btn: "Diseñar mi Pass <i class='fas fa-arrow-right'></i>",
        pass_label_name: "NOMBRE", pass_label_role: "PUESTO", pass_scan: "Escanea para guardar",
        work_subtitle: "SELECTED WORK", work_title: "Proyectos Recientes",
        work_1_desc: "Caso de Éxito / Sitio Web", work_btn_view: "Ver Resultado <i class='fas fa-external-link-alt'></i>",
        work_2_title: "Desarrollo a Medida", work_2_desc: "Sin Plantillas Genéricas", work_2_sub: "Tu marca es única.",
        work_3_title: "¿Tu Proyecto Aquí?", work_3_desc: "Agenda Abierta 2026", work_3_btn: "Cotizar Ahora",
        contact_title: "¿Tienes un proyecto?", contact_desc: "Hagamos algo increíble juntos.", contact_btn: "Enviar Mensaje",
        footer_desc: "Estudio de diseño digital.", footer_links: "Enlaces", footer_follow: "Síguenos",
        ph_name: "Tu Nombre", ph_email: "Correo Electrónico", ph_msg: "Cuéntanos tu idea"
    },
    en: {
        nav_home: "Home", nav_services: "Services", nav_card: "Smart Card", nav_work: "Work", nav_contact: "Contact",
        hero_badge: "New Digital Spaces", hero_title: "Design that <br> <span class='highlight'>transcends.</span>",
        hero_desc: "At Quinze, we fuse strategy and minimalism to build brands that lead. We create digital assets.",
        hero_btn_start: "Start Project <i class='fas fa-arrow-right'></i>", hero_btn_portfolio: "View Portfolio",
        stats_custom: "100% Custom Design", stats_direct: "Direct Communication", stats_agile: "Agile Delivery",
        services_subtitle: "EXPERTISE", services_title: "Tailored Solutions",
        serv_web_title: "Web Development", serv_web_desc: "Fast, secure, and SEO-optimized sites.",
        serv_ecom_title: "E-Commerce", serv_ecom_desc: "Intuitive and secure online stores.",
        serv_card_title: "Wallet Cards", serv_card_desc: "Digital cards compatible with Apple and Google Wallet.",
        card_badge: "Plastic Free.", card_title: "Straight to your <br><span class='gradient-text'>client's pocket.</span>",
        card_desc: "Forget printing. Digital credentials ready for Apple and Google Wallet.",
        card_feat_1: "<i class='fab fa-apple'></i> iPhone Compatible", card_feat_2: "<i class='fab fa-android'></i> Android Compatible",
        card_feat_3: "<i class='fas fa-ban'></i> Zero printing costs", card_btn: "Design my Pass <i class='fas fa-arrow-right'></i>",
        pass_label_name: "NAME", pass_label_role: "ROLE", pass_scan: "Scan to save",
        work_subtitle: "SELECTED WORK", work_title: "Recent Projects",
        work_1_desc: "Success Story / Website", work_btn_view: "View Result <i class='fas fa-external-link-alt'></i>",
        work_2_title: "Custom Development", work_2_desc: "No Generic Templates", work_2_sub: "Your brand is unique.",
        work_3_title: "Your Project Here?", work_3_desc: "Open Agenda 2026", work_3_btn: "Get a Quote",
        contact_title: "Got a project?", contact_desc: "Let's create something amazing.", contact_btn: "Send Message",
        footer_desc: "Digital design studio.", footer_links: "Links", footer_follow: "Follow Us",
        ph_name: "Your Name", ph_email: "Email Address", ph_msg: "Tell us about your idea"
    }
};

let currentLang = 'es';

function changeLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    const langBtn = document.getElementById('lang-text');
    if (langBtn) langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    const inputName = document.getElementById('form_name');
    const inputEmail = document.getElementById('form_email');
    const inputMsg = document.getElementById('form_msg');
    if(inputName) inputName.placeholder = translations[currentLang].ph_name;
    if(inputEmail) inputEmail.placeholder = translations[currentLang].ph_email;
    if(inputMsg) inputMsg.placeholder = translations[currentLang].ph_msg;
}