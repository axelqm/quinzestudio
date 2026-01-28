/* --- script.js FINAL (Quinze Studio) --- */

// 1. MENÚ HAMBURGUESA (MÓVIL)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        // Alternamos la clase 'active' para que el CSS haga la animación
        navLinks.classList.toggle('active');
        
        // Cambiamos el icono de hamburguesa a "X"
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

// 2. SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Cerrar menú móvil automáticamente al hacer clic
            if(window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
});

// 3. SISTEMA DE TRADUCCIÓN
const translations = {
    es: {
        nav_home: "Inicio", nav_services: "Servicios", nav_card: "Smart Card", nav_work: "Work", nav_quote: "Cotizar",
        hero_badge: "Nuevos Espacios Digitales", hero_title: "Diseño que <br> <span class='highlight'>trasciende.</span>",
        hero_desc: "En Quinze fusionamos estrategia y minimalismo para construir marcas que lideran su sector. No hacemos solo webs, creamos activos digitales.",
        hero_btn_start: "Iniciar Proyecto <i class='fas fa-arrow-right'></i>", hero_btn_portfolio: "Ver Portafolio",
        stats_custom: "Diseño 100% A Medida", stats_direct: "Trato Directo", stats_agile: "Entrega Ágil",
        services_subtitle: "EXPERTISE", services_title: "Soluciones a medida",
        serv_web_title: "Desarrollo Web", serv_web_desc: "Sitios rápidos, seguros y optimizados para Google (SEO). Desde landing pages hasta portales corporativos.",
        serv_ecom_title: "E-Commerce", serv_ecom_desc: "Transformamos visitantes en compradores. Tiendas en línea intuitivas y seguras.",
        serv_card_title: "Wallet Cards", serv_card_desc: "Tarjetas de presentación digitales compatibles con Apple y Google Wallet.",
        card_badge: "Sin Plásticos.", card_title: "Directo al bolsillo <br><span class='gradient-text'>de tu cliente.</span>",
        card_desc: "Olvídate de imprimir. Diseñamos tu credencial digital lista para guardarse en Apple Wallet y Google Wallet.",
        card_feat_1: "<i class='fab fa-apple'></i> Compatible con iPhone", card_feat_2: "<i class='fab fa-android'></i> Compatible con Android",
        card_feat_3: "<i class='fas fa-ban'></i> Cero gastos de impresión", card_btn: "Diseñar mi Pass <i class='fas fa-arrow-right'></i>",
        pass_label_name: "NOMBRE", pass_label_role: "PUESTO", pass_scan: "Escanea para guardar",
        work_subtitle: "SELECTED WORK", work_title: "Proyectos Recientes",
        work_1_desc: "Caso de Éxito / Sitio Web", work_btn_view: "Ver Resultado <i class='fas fa-external-link-alt'></i>",
        work_2_title: "Desarrollo a Medida", work_2_desc: "Sin Plantillas Genéricas", work_2_sub: "Tu marca es única.",
        work_3_title: "¿Tu Proyecto Aquí?", work_3_desc: "Agenda Abierta 2026", work_3_btn: "Cotizar Ahora",
        contact_title: "¿Tienes un proyecto?", contact_desc: "Hagamos algo increíble juntos.", 
        contact_form_title: "Inicia un Proyecto", contact_btn: "Enviar por WhatsApp",
        footer_desc: "Estudio de diseño digital.", footer_links: "Enlaces", footer_follow: "Síguenos",
        
        // ETIQUETAS DEL FORMULARIO Y OPCIONES
        ph_name: "Tu Nombre", 
        ph_service: "Tipo de Proyecto", 
        ph_msg: "Cuéntanos tu idea",
        opt_web: "Página Web",
        opt_card: "Tarjeta Digital (Wallet)",
        opt_ecom: "Tienda Online",
        opt_other: "Otro Proyecto"
    },
    en: {
        nav_home: "Home", nav_services: "Services", nav_card: "Smart Card", nav_work: "Work", nav_quote: "Get Quote",
        hero_badge: "New Digital Spaces", hero_title: "Design that <br> <span class='highlight'>transcends.</span>",
        hero_desc: "At Quinze, we fuse strategy and minimalism to build brands that lead. We create digital assets.",
        hero_btn_start: "Start Project <i class='fas fa-arrow-right'></i>", hero_btn_portfolio: "View Portfolio",
        stats_custom: "100% Custom Design", stats_direct: "Direct Communication", stats_agile: "Agile Delivery",
        services_subtitle: "EXPERTISE", services_title: "Tailored Solutions",
        serv_web_title: "Web Development", serv_web_desc: "Fast, secure, and SEO-optimized sites. From landing pages to corporate portals.",
        serv_ecom_title: "E-Commerce", serv_ecom_desc: "We turn visitors into buyers. Intuitive and secure online stores.",
        serv_card_title: "Wallet Cards", serv_card_desc: "Digital business cards compatible with Apple and Google Wallet.",
        card_badge: "Plastic Free.", card_title: "Straight to your <br><span class='gradient-text'>client's pocket.</span>",
        card_desc: "Forget printing. Digital credentials ready for Apple and Google Wallet.",
        card_feat_1: "<i class='fab fa-apple'></i> iPhone Compatible", card_feat_2: "<i class='fab fa-android'></i> Android Compatible",
        card_feat_3: "<i class='fas fa-ban'></i> Zero printing costs", card_btn: "Design my Pass <i class='fas fa-arrow-right'></i>",
        pass_label_name: "NAME", pass_label_role: "ROLE", pass_scan: "Scan to save",
        work_subtitle: "SELECTED WORK", work_title: "Recent Projects",
        work_1_desc: "Success Story / Website", work_btn_view: "View Result <i class='fas fa-external-link-alt'></i>",
        work_2_title: "Custom Development", work_2_desc: "No Generic Templates", work_2_sub: "Your brand is unique.",
        work_3_title: "Your Project Here?", work_3_desc: "Open Agenda 2026", work_3_btn: "Get a Quote",
        contact_title: "Got a project?", contact_desc: "Let's create something amazing.", 
        contact_form_title: "Start a Project", contact_btn: "Send via WhatsApp",
        footer_desc: "Digital design studio.", footer_links: "Links", footer_follow: "Follow Us",
        
        // FORM LABELS AND OPTIONS TRANSLATED
        ph_name: "Your Name", 
        ph_service: "Project Type", 
        ph_msg: "Tell us about your idea",
        opt_web: "Website",
        opt_card: "Digital Wallet Card",
        opt_ecom: "Online Store",
        opt_other: "Other Project"
    }
};

let currentLang = 'es'; // Idioma por defecto

function changeLanguage() {
    // 1. Cambiar variable
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // 2. Cambiar botón
    const langBtn = document.getElementById('lang-text');
    if (langBtn) langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';

    // 3. Traducir textos generales (innerHTML)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // 4. Traducir Placeholders (Inputs invisibles)
    // El label flotante se encarga de lo visual, pero mantenemos esto por accesibilidad
    const inputName = document.getElementById('wa_name');
    const inputMsg = document.getElementById('wa_message');

    if(inputName) inputName.placeholder = translations[currentLang].ph_name;
    if(inputMsg) inputMsg.placeholder = translations[currentLang].ph_msg;
}

// 4. ENVIAR A WHATSAPP
function sendToWhatsapp() {
    // Obtenemos los valores de los nuevos IDs
    let name = document.getElementById("wa_name").value;
    let service = document.getElementById("wa_service").value;
    let message = document.getElementById("wa_message").value;

    // Validación simple
    if (name === "") {
        alert(currentLang === 'es' ? "Por favor escribe tu nombre." : "Please enter your name.");
        return;
    }

    // Número y Mensaje
    let phoneNumber = "524776636387";
    
    // Formato del mensaje para WhatsApp
    let text = `Hola Quinze Studio, soy *${name}*.%0A%0AMe interesa un proyecto de: *${service}*.%0A%0A${message}`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
}