(function () {
  "use strict";

  var es = {
    "brand.claim": "WebReimaginacion",
    "nav.open": "Abrir menu",
    "nav.landing": "Landing",
    "nav.map": "Mapa orbital",
    "nav.contact": "Contacto",
    "nav.language": "Seleccionar idioma",
    "ribbon.prev": "Mover cinta a la izquierda",
    "ribbon.next": "Mover cinta a la derecha",
    "orbit.core": "Arquitectura",
    "orbit.systems": "Sistemas",
    "orbit.systemsText": "Packs y control.",
    "orbit.apps": "Aplicaciones",
    "orbit.appsText": "Casos de uso.",
    "orbit.method": "Metodo",
    "orbit.methodText": "Proceso tecnico.",
    "orbit.docs": "Datos",
    "orbit.docsText": "CAD, CAN y HV.",
    "orbit.contact": "Contacto",
    "orbit.contactText": "Consulta guiada.",
    "card.orbitEyebrow": "Mapa vivo",
    "card.orbitTitle": "Mapa orbital navegable.",
    "card.orbitText": "Cada nodo abre una seccion desarrollada. La cinta funciona como entrada visual, no como bloque de texto.",
    "card.systemsEyebrow": "Sistemas",
    "card.systemsTitle": "Packs, BMS y arquitectura modular.",
    "card.systemsText": "Familias NMC, LFP y control multipack para entrar directo en la ficha tecnica.",
    "card.openSystems": "Abrir sistemas",
    "card.appsEyebrow": "Aplicaciones",
    "card.appsTitle": "Sectores electrificados por escenario.",
    "card.appsText": "Bus, marino, agricola, VCL, carga movil y ferrocarril en lectura rapida.",
    "card.openApps": "Abrir aplicaciones",
    "card.methodEyebrow": "Metodo",
    "card.methodTitle": "Del encaje tecnico a la propuesta viable.",
    "card.methodText": "Requisitos, integracion, validacion y soporte inicial sin rodeos.",
    "card.openMethod": "Abrir metodo",
    "card.docsEyebrow": "Documentacion",
    "card.docsTitle": "Datos tecnicos accionables.",
    "card.docsText": "CAD, CAN, HV, OPS y checklist de solicitud para equipos tecnicos.",
    "card.openDocs": "Abrir documentacion",
    "card.contactEyebrow": "Consulta",
    "card.contactTitle": "Formulario validado y contacto directo.",
    "card.contactText": "Solicitud limpia, filtrada y util para ventas e ingenieria.",
    "card.openContact": "Abrir contacto",
    "systems.eyebrow": "Sistemas",
    "systems.title": "Packs, BMS y arquitectura integrable.",
    "systems.text": "Familias NMC y LFP, supervision BMS, energia, tension y puntos de validacion tecnica.",
    "systems.ask": "Incluir sistema en consulta",
    "systems.docs": "Ver documentacion",
    "systems.add": "Incluir en consulta",
    "systems.matrixEyebrow": "Lectura tecnica",
    "systems.matrixTitle": "Lo que se valida antes de proponer configuracion.",
    "systems.m1Title": "Envolvente",
    "systems.m1Text": "Dimensiones, montaje, proteccion ambiental, acceso de servicio y restricciones del vehiculo.",
    "systems.m2Title": "Arquitectura HV",
    "systems.m2Text": "Tension nominal, numero de packs, estrategia serie/paralelo y protecciones.",
    "systems.m3Title": "Control",
    "systems.m3Text": "BMS, comunicacion CAN, diagnostico, estados SOC/SOH y logica de seguridad.",
    "ribbon.nmc": "Alta densidad en formato compacto.",
    "ribbon.lfp": "Seguridad, vida util y escalado.",
    "ribbon.bms": "Control multipack centralizado.",
    "apps.eyebrow": "Aplicaciones",
    "apps.title": "Aplicaciones por uso real.",
    "apps.text": "Sectores exigentes agrupados como escenarios: condicion de uso, prioridad tecnica y siguiente paso.",
    "apps.all": "Todas",
    "apps.mobility": "Movilidad",
    "apps.industrial": "Industrial",
    "apps.heavy": "Alta demanda",
    "apps.busTitle": "Autobuses electricos e hidrogeno",
    "apps.busText": "Arquitecturas multi-rack para urbano e interurbano, con foco en disponibilidad, seguridad y servicio.",
    "apps.seaTitle": "Marino electrico e hibrido",
    "apps.seaText": "Sistemas paralelizables para entornos exigentes donde pesan redundancia, envolvente y comunicacion.",
    "apps.agrTitle": "Agricola",
    "apps.agrText": "Energia robusta para maquinaria de campo, vibracion, polvo y ciclos de trabajo variables.",
    "apps.vclTitle": "Vehiculos comerciales ligeros",
    "apps.vclText": "Integracion para series cortas y medias donde importan plazo, coste y compatibilidad.",
    "apps.chargeTitle": "Carga movil",
    "apps.chargeText": "Soporte energetico temporal o semiestacionario para eventos, obra o respaldo local.",
    "apps.railTitle": "Ferrocarril",
    "apps.railText": "Escalado multipack para necesidades energeticas altas, ciclos intensivos y seguridad operacional.",
    "apps.validate": "Validar aplicacion",
    "method.eyebrow": "Metodo",
    "method.title": "De necesidad tecnica a propuesta viable.",
    "method.text": "Encaje, integracion, validacion y activacion ordenan la conversacion tecnico-comercial.",
    "method.oneTitle": "Encaje",
    "method.oneText": "Aplicacion, tension, energia, envolvente, volumen, calendario y restricciones de homologacion.",
    "method.twoTitle": "Integracion",
    "method.twoText": "Mecanica, comunicacion, termica, seguridad, arquitectura multipack y documentacion base.",
    "method.threeTitle": "Validacion",
    "method.threeText": "Revision tecnica, riesgos, compatibilidad, propuesta de configuracion y condiciones de arranque.",
    "method.fourTitle": "Activacion",
    "method.fourText": "Oferta, puesta en marcha, acompanamiento inicial y ajustes de configuracion.",
    "method.plannerEyebrow": "Preparador de consulta",
    "method.plannerTitle": "Ordena la primera conversacion tecnica.",
    "method.prepare": "Preparar consulta",
    "route.result": "Consulta preparada para {application}, en fase {stage}, con interes en {product}.",
    "docs.eyebrow": "Documentacion",
    "docs.title": "Documentacion por utilidad tecnica.",
    "docs.text": "CAD, CAN, HV y OPS separados para pedir solo lo necesario.",
    "docs.cadTitle": "Envolvente y montaje",
    "docs.cadText": "Planos, interfaces, volumen disponible, accesos de servicio y restricciones de fijacion.",
    "docs.canTitle": "Comunicacion",
    "docs.canText": "Mensajes, diagnostico, estados, alarmas y coordinacion con la unidad de control.",
    "docs.hvTitle": "Arquitectura electrica",
    "docs.hvText": "Tension nominal, protecciones, HVIL, seguridad y configuracion serie/paralelo.",
    "docs.opsTitle": "Operacion",
    "docs.opsText": "Puesta en marcha, mantenimiento, recomendaciones de uso y soporte inicial.",
    "docs.checkEyebrow": "Checklist",
    "docs.checkTitle": "Marca lo que necesitas revisar.",
    "docs.checkText": "La seleccion se guarda para abrir contacto con una solicitud mas ordenada.",
    "docs.needCad": "Planos CAD o volumen mecanico",
    "docs.needCan": "Matriz CAN o diagnostico",
    "docs.needHv": "Rango HV y protecciones",
    "docs.needOps": "Manual y puesta en marcha",
    "docs.request": "Solicitar documentacion",
    "docs.counter": "{count} elementos seleccionados.",
    "contact.eyebrow": "Consulta tecnica",
    "contact.title": "Consulta tecnica validada.",
    "contact.text": "El formulario limita campos, valida opciones y conserva selecciones hechas desde otras secciones.",
    "form.name": "Nombre",
    "form.company": "Empresa",
    "form.email": "Correo profesional",
    "form.country": "Pais",
    "form.application": "Aplicacion",
    "form.product": "Sistema de interes",
    "form.stage": "Fase",
    "form.volume": "Volumen",
    "form.message": "Necesidad tecnica",
    "form.placeholder": "Energia requerida, tension, restricciones mecanicas, comunicaciones, plazos o contexto del vehiculo.",
    "form.privacy": "Acepto el tratamiento de mis datos para responder a esta solicitud.",
    "form.submit": "Enviar consulta",
    "form.select": "Selecciona una opcion",
    "form.optional": "Opcional",
    "option.bus": "Autobuses",
    "option.sea": "Marino",
    "option.agr": "Agricola",
    "option.vcl": "Vehiculos comerciales ligeros",
    "option.charge": "Carga movil",
    "option.rail": "Ferrocarril",
    "option.unknown": "A definir",
    "option.system": "Sistema completo",
    "option.compare": "Comparar alternativas",
    "option.quote": "Presupuesto inicial",
    "option.design": "Diseno de integracion",
    "option.validation": "Validacion tecnica",
    "option.purchase": "Compra o industrializacion",
    "option.prototype": "Prototipo",
    "option.short": "Serie corta",
    "option.medium": "Serie media",
    "option.open": "A definir",
    "footer.text": "Version reimaginada con navegacion por cinta infinita.",
    "processGuide.eyebrow": "PROCESO GUIADO",
    "processGuide.open": "Abrir proceso guiado",
    "processGuide.close": "Cerrar proceso guiado",
    "scroll.top": "Volver al inicio",
    "feedback.invalid": "Revisa los campos marcados antes de enviar.",
    "feedback.ready": "Consulta validada. Preparando envio tecnico.",
    "feedback.file": "Consulta validada. Servida por HTTP se enviaria al endpoint tecnico.",
    "feedback.ok": "Consulta validada correctamente.",
    "feedback.error": "No se ha podido enviar la consulta. Revisa los campos.",
    "feedback.product": "Sistema incorporado a la consulta.",
    "feedback.requiredText": "Completa este campo con mas detalle.",
    "feedback.badText": "El contenido incluye caracteres no contemplados.",
    "feedback.email": "Introduce un correo profesional valido.",
    "feedback.select": "Selecciona una opcion.",
    "feedback.option": "La opcion seleccionada no esta contemplada.",
    "feedback.message": "Describe la necesidad tecnica con algo mas de detalle.",
    "feedback.badMessage": "La necesidad tecnica incluye caracteres no contemplados.",
    "feedback.privacy": "Debes aceptar el tratamiento de datos para enviar la consulta."
  };

  function merge(base, override) {
    var result = {};
    Object.keys(base).forEach(function (key) {
      result[key] = base[key];
    });
    Object.keys(override).forEach(function (key) {
      result[key] = override[key];
    });
    return result;
  }

  var copy = {
    es: es,
    en: merge(es, {
      "brand.claim": "WebReimagination",
      "nav.open": "Open menu",
      "nav.landing": "Landing",
      "nav.map": "Orbital map",
      "nav.contact": "Contact",
      "nav.language": "Select language",
      "ribbon.prev": "Move ribbon left",
      "ribbon.next": "Move ribbon right",
      "orbit.core": "Architecture",
      "orbit.systems": "Systems",
      "orbit.systemsText": "Packs and control.",
      "orbit.apps": "Applications",
      "orbit.appsText": "Use cases.",
      "orbit.method": "Method",
      "orbit.methodText": "Technical process.",
      "orbit.docs": "Data",
      "orbit.docsText": "CAD, CAN and HV.",
      "orbit.contact": "Contact",
      "orbit.contactText": "Guided request.",
      "card.orbitEyebrow": "Living map",
      "card.orbitTitle": "Navigable orbital map.",
      "card.orbitText": "Each node opens a developed section. The ribbon works as a visual entry point, not as a text block.",
      "card.systemsTitle": "Packs, BMS and modular architecture.",
      "card.systemsText": "NMC, LFP and multipack control families with direct access to the technical card.",
      "card.openSystems": "Open systems",
      "card.appsTitle": "Electrified sectors by scenario.",
      "card.appsText": "Bus, marine, agricultural, LCV, mobile charging and rail in a quick reading.",
      "card.openApps": "Open applications",
      "card.methodTitle": "From technical fit to viable proposal.",
      "card.methodText": "Requirements, integration, validation and initial support without detours.",
      "card.openMethod": "Open method",
      "card.docsTitle": "Actionable technical data.",
      "card.docsText": "CAD, CAN, HV, OPS and request checklist for technical teams.",
      "card.openDocs": "Open documentation",
      "card.contactTitle": "Validated form and direct contact.",
      "card.contactText": "A clean, filtered request useful for sales and engineering.",
      "card.openContact": "Open contact",
      "systems.title": "Packs, BMS and integrable architecture.",
      "systems.text": "NMC and LFP families, BMS supervision, energy, voltage and technical validation points.",
      "systems.ask": "Add system to request",
      "systems.docs": "View documentation",
      "systems.add": "Add to request",
      "systems.matrixTitle": "What is validated before proposing configuration.",
      "systems.m1Title": "Envelope",
      "systems.m1Text": "Dimensions, mounting, environmental protection, service access and vehicle constraints.",
      "systems.m2Title": "HV architecture",
      "systems.m2Text": "Nominal voltage, number of packs, series/parallel strategy and protections.",
      "systems.m3Title": "Control",
      "systems.m3Text": "BMS, CAN communication, diagnostics, SOC/SOH states and safety logic.",
      "ribbon.nmc": "High density in a compact format.",
      "ribbon.lfp": "Safety, service life and scaling.",
      "ribbon.bms": "Centralised multipack control.",
      "apps.title": "Applications by real use.",
      "apps.text": "Demanding sectors grouped as scenarios: use condition, technical priority and next step.",
      "apps.all": "All",
      "apps.mobility": "Mobility",
      "apps.industrial": "Industrial",
      "apps.heavy": "High demand",
      "apps.busTitle": "Electric and hydrogen buses",
      "apps.busText": "Multi-rack architectures for urban and intercity use, focused on availability, safety and service.",
      "apps.seaTitle": "Electric and hybrid marine",
      "apps.seaText": "Parallel systems for demanding environments where redundancy, envelope and communication matter.",
      "apps.agrTitle": "Agricultural",
      "apps.agrText": "Robust energy for field machinery, vibration, dust and variable duty cycles.",
      "apps.vclTitle": "Light commercial vehicles",
      "apps.vclText": "Integration for short and medium runs where timing, cost and compatibility matter.",
      "apps.chargeTitle": "Mobile charging",
      "apps.chargeText": "Temporary or semi-stationary energy support for events, work sites or local backup.",
      "apps.railTitle": "Rail",
      "apps.railText": "Multipack scaling for high energy needs, intensive cycles and operational safety.",
      "apps.validate": "Validate application",
      "method.title": "From technical need to viable proposal.",
      "method.text": "Fit, integration, validation and activation order the technical-commercial conversation.",
      "method.oneTitle": "Fit",
      "method.oneText": "Application, voltage, energy, envelope, volume, schedule and approval constraints.",
      "method.twoTitle": "Integration",
      "method.twoText": "Mechanics, communication, thermal profile, safety, multipack architecture and base documentation.",
      "method.threeTitle": "Validation",
      "method.threeText": "Technical review, risks, compatibility, configuration proposal and start-up conditions.",
      "method.fourTitle": "Activation",
      "method.fourText": "Offer, commissioning, initial support and configuration adjustments.",
      "method.plannerTitle": "Organise the first technical conversation.",
      "method.prepare": "Prepare request",
      "route.result": "Request prepared for {application}, at {stage} stage, with interest in {product}.",
      "docs.title": "Documentation by technical utility.",
      "docs.text": "CAD, CAN, HV and OPS separated so only the necessary material is requested.",
      "docs.cadTitle": "Envelope and mounting",
      "docs.cadText": "Drawings, interfaces, available volume, service access and fixing constraints.",
      "docs.canTitle": "Communication",
      "docs.canText": "Messages, diagnostics, states, alarms and coordination with the control unit.",
      "docs.hvTitle": "Electrical architecture",
      "docs.hvText": "Nominal voltage, protections, HVIL, safety and series/parallel configuration.",
      "docs.opsTitle": "Operation",
      "docs.opsText": "Commissioning, maintenance, usage recommendations and initial support.",
      "docs.checkTitle": "Mark what you need to review.",
      "docs.checkText": "The selection is saved to open contact with a more ordered request.",
      "docs.needCad": "CAD drawings or mechanical volume",
      "docs.needCan": "CAN matrix or diagnostics",
      "docs.needHv": "HV range and protections",
      "docs.needOps": "Manual and commissioning",
      "docs.request": "Request documentation",
      "docs.counter": "{count} items selected.",
      "contact.title": "Validated technical request.",
      "contact.text": "The form limits fields, validates options and preserves selections made from other sections.",
      "form.name": "Name",
      "form.company": "Company",
      "form.email": "Business email",
      "form.country": "Country",
      "form.application": "Application",
      "form.product": "System of interest",
      "form.stage": "Stage",
      "form.volume": "Volume",
      "form.message": "Technical need",
      "form.placeholder": "Required energy, voltage, mechanical constraints, communications, timeline or vehicle context.",
      "form.privacy": "I accept the processing of my data to answer this request.",
      "form.submit": "Send request",
      "form.select": "Select an option",
      "form.optional": "Optional",
      "option.bus": "Buses",
      "option.sea": "Marine",
      "option.agr": "Agricultural",
      "option.vcl": "Light commercial vehicles",
      "option.charge": "Mobile charging",
      "option.rail": "Rail",
      "option.unknown": "To be defined",
      "option.system": "Complete system",
      "option.compare": "Compare alternatives",
      "option.quote": "Initial quote",
      "option.design": "Integration design",
      "option.validation": "Technical validation",
      "option.purchase": "Purchase or industrialisation",
      "option.prototype": "Prototype",
      "option.short": "Short run",
      "option.medium": "Medium run",
      "option.open": "To be defined",
      "footer.text": "Reimagined version with infinite ribbon navigation.",
      "processGuide.eyebrow": "GUIDED PROCESS",
      "processGuide.open": "Open guided process",
      "processGuide.close": "Close guided process",
      "scroll.top": "Back to top",
      "feedback.invalid": "Review the marked fields before sending.",
      "feedback.ready": "Request validated. Preparing technical submission.",
      "feedback.file": "Request validated. Served by HTTP it would be sent to the technical endpoint.",
      "feedback.ok": "Request validated correctly.",
      "feedback.error": "The request could not be sent. Review the fields.",
      "feedback.product": "System added to the request."
    }),
    eu: merge(es, {
      "brand.claim": "Web berrirudikapena",
      "nav.open": "Ireki menua",
      "nav.landing": "Landing",
      "nav.map": "Orbita mapa",
      "nav.contact": "Kontaktua",
      "nav.language": "Hautatu hizkuntza",
      "ribbon.prev": "Mugitu zinta ezkerrera",
      "ribbon.next": "Mugitu zinta eskuinera",
      "orbit.core": "Arkitektura",
      "orbit.systems": "Sistemak",
      "orbit.systemsText": "Packak eta kontrola.",
      "orbit.apps": "Aplikazioak",
      "orbit.appsText": "Erabilera kasuak.",
      "orbit.method": "Metodoa",
      "orbit.methodText": "Prozesu teknikoa.",
      "orbit.docs": "Datuak",
      "orbit.docsText": "CAD, CAN eta HV.",
      "orbit.contact": "Kontaktua",
      "orbit.contactText": "Kontsulta gidatua.",
      "card.orbitTitle": "Nabigazio orbitala zintaren barruan.",
      "card.openSystems": "Ireki sistemak",
      "card.openApps": "Ireki aplikazioak",
      "card.openMethod": "Ireki metodoa",
      "card.openDocs": "Ireki dokumentazioa",
      "card.openContact": "Ireki kontaktua",
      "systems.title": "Arkitektura modularra packak integratu daitekeen soluzio bihurtzeko.",
      "systems.ask": "Sartu sistema kontsultan",
      "systems.docs": "Ikusi dokumentazioa",
      "systems.add": "Sartu kontsultan",
      "apps.title": "Soluzioa hobeto ulertzen da erabilera errealetik hasten denean.",
      "apps.all": "Guztiak",
      "apps.mobility": "Mugikortasuna",
      "apps.industrial": "Industriala",
      "apps.heavy": "Eskari handia",
      "apps.validate": "Balidatu aplikazioa",
      "method.title": "Behar teknikotik proposamen bideragarrira joateko bide argia.",
      "method.prepare": "Prestatu kontsulta",
      "route.result": "Kontsulta prestatuta {application} aplikaziorako, {stage} fasean, {product} sistemarekin.",
      "docs.title": "Datu teknikoak eskaera panel argi bihurtuta.",
      "docs.request": "Eskatu dokumentazioa",
      "docs.counter": "{count} elementu hautatuta.",
      "contact.title": "Webaren azken zatiak interesa informazio erabilgarri bihurtzen du.",
      "form.name": "Izena",
      "form.company": "Enpresa",
      "form.email": "Laneko posta",
      "form.country": "Herrialdea",
      "form.application": "Aplikazioa",
      "form.product": "Intereseko sistema",
      "form.stage": "Fasea",
      "form.volume": "Bolumena",
      "form.message": "Behar teknikoa",
      "form.placeholder": "Behar den energia, tentsioa, muga mekanikoak, komunikazioak, epeak edo ibilgailuaren testuingurua.",
      "form.privacy": "Nire datuak eskaera honi erantzuteko tratatzea onartzen dut.",
      "form.submit": "Bidali kontsulta",
      "form.select": "Aukeratu aukera bat",
      "form.optional": "Aukerakoa",
      "option.bus": "Autobusak",
      "option.sea": "Itsasoa",
      "option.agr": "Nekazaritza",
      "option.vcl": "Ibilgailu komertzial arinak",
      "option.charge": "Karga mugikorra",
      "option.rail": "Trena",
      "option.unknown": "Zehazteko",
      "option.system": "Sistema osoa",
      "option.compare": "Aukerak alderatu",
      "footer.text": "Zinta infinituko nabigazioa duen bertsio berrirudikatua.",
      "processGuide.eyebrow": "PROZESU GIDATUA",
      "processGuide.open": "Ireki prozesu gidatua",
      "processGuide.close": "Itxi prozesu gidatua",
      "scroll.top": "Itzuli hasierara"
    }),
    fr: merge(es, {
      "brand.claim": "WebReimagination",
      "nav.open": "Ouvrir le menu",
      "nav.landing": "Landing",
      "nav.map": "Carte orbitale",
      "nav.contact": "Contact",
      "nav.language": "Choisir la langue",
      "ribbon.prev": "Deplacer le ruban vers la gauche",
      "ribbon.next": "Deplacer le ruban vers la droite",
      "orbit.core": "Architecture",
      "orbit.systems": "Systemes",
      "orbit.systemsText": "Packs et controle.",
      "orbit.apps": "Applications",
      "orbit.appsText": "Cas d'usage.",
      "orbit.method": "Methode",
      "orbit.methodText": "Processus technique.",
      "orbit.docs": "Donnees",
      "orbit.docsText": "CAD, CAN et HV.",
      "orbit.contact": "Contact",
      "orbit.contactText": "Demande guidee.",
      "card.orbitTitle": "Navigation orbitale dans le ruban.",
      "card.openSystems": "Ouvrir systemes",
      "card.openApps": "Ouvrir applications",
      "card.openMethod": "Ouvrir methode",
      "card.openDocs": "Ouvrir documentation",
      "card.openContact": "Ouvrir contact",
      "systems.title": "Architecture modulaire pour transformer les packs en solution integrable.",
      "systems.ask": "Ajouter le systeme a la demande",
      "systems.docs": "Voir documentation",
      "systems.add": "Ajouter a la demande",
      "apps.title": "La solution se comprend mieux quand elle part de l'usage reel.",
      "apps.all": "Toutes",
      "apps.mobility": "Mobilite",
      "apps.industrial": "Industriel",
      "apps.heavy": "Forte demande",
      "apps.validate": "Valider application",
      "method.title": "Un chemin clair du besoin technique a la proposition viable.",
      "method.prepare": "Preparer la demande",
      "route.result": "Demande preparee pour {application}, phase {stage}, avec interet pour {product}.",
      "docs.title": "Donnees techniques transforme es en panneau de demande clair.",
      "docs.request": "Demander documentation",
      "docs.counter": "{count} elements selectionnes.",
      "contact.title": "La derniere partie du site transforme l'interet en information actionnable.",
      "form.name": "Nom",
      "form.company": "Entreprise",
      "form.email": "Email professionnel",
      "form.country": "Pays",
      "form.application": "Application",
      "form.product": "Systeme d'interet",
      "form.stage": "Phase",
      "form.volume": "Volume",
      "form.message": "Besoin technique",
      "form.placeholder": "Energie requise, tension, contraintes mecaniques, communications, delais ou contexte vehicule.",
      "form.privacy": "J'accepte le traitement de mes donnees pour repondre a cette demande.",
      "form.submit": "Envoyer la demande",
      "form.select": "Selectionnez une option",
      "form.optional": "Optionnel",
      "option.bus": "Bus",
      "option.sea": "Marine",
      "option.agr": "Agricole",
      "option.vcl": "Vehicules utilitaires legers",
      "option.charge": "Recharge mobile",
      "option.rail": "Rail",
      "option.unknown": "A definir",
      "option.system": "Systeme complet",
      "option.compare": "Comparer alternatives",
      "footer.text": "Version reimaginee avec navigation par ruban infini.",
      "processGuide.eyebrow": "PROCESSUS GUIDE",
      "processGuide.open": "Ouvrir le processus guide",
      "processGuide.close": "Fermer le processus guide",
      "scroll.top": "Retour en haut"
    })
  };

  var products = {
    es: {
      nmc: { tag: "Series NMC", title: "Pack compacto de alta densidad energetica", summary: "Solucion para aplicaciones con restricciones de espacio, montaje versatil y necesidad de energia en formato slim.", specs: [["35-56 kWh", "Energia"], ["333-666 V", "Tension"], ["IP67", "Proteccion"], ["CAN", "Comunicacion"]] },
      lfp: { tag: "Series LFP", title: "Pack orientado a seguridad, vida util y escalado", summary: "Familia para aplicaciones donde la vida util, la estabilidad termica y la industrializacion por volumen pesan mas.", specs: [["38-60 kWh", "Energia"], ["384-768 V", "Tension"], ["LFP", "Quimica"], ["Multi", "Escalado"]] },
      bms: { tag: "Supermaster BMS", title: "Control centralizado para arquitecturas multipack", summary: "Supervision de varios packs, gestion de seguridad, comunicacion de sistema y soporte para configuraciones complejas.", specs: [["CAN", "Bus"], ["HVIL", "Seguridad"], ["SOC/SOH", "Estado"], ["Multi", "Packs"]] }
    },
    en: {
      nmc: { tag: "NMC Series", title: "Compact high energy density pack", summary: "Solution for applications with space constraints, versatile mounting and energy needs in a slim format.", specs: [["35-56 kWh", "Energy"], ["333-666 V", "Voltage"], ["IP67", "Protection"], ["CAN", "Communication"]] },
      lfp: { tag: "LFP Series", title: "Pack focused on safety, service life and scaling", summary: "Family for applications where service life, thermal stability and volume industrialisation matter most.", specs: [["38-60 kWh", "Energy"], ["384-768 V", "Voltage"], ["LFP", "Chemistry"], ["Multi", "Scaling"]] },
      bms: { tag: "Supermaster BMS", title: "Centralised control for multipack architectures", summary: "Supervision of several packs, safety management, system communication and support for complex configurations.", specs: [["CAN", "Bus"], ["HVIL", "Safety"], ["SOC/SOH", "State"], ["Multi", "Packs"]] }
    },
    eu: {
      nmc: { tag: "NMC Series", title: "Energia dentsitate handiko pack trinkoa", summary: "Espazio mugak, muntaketa moldakorra eta formatu mehean energia behar duten aplikazioetarako soluzioa.", specs: [["35-56 kWh", "Energia"], ["333-666 V", "Tentsioa"], ["IP67", "Babesa"], ["CAN", "Komunikazioa"]] },
      lfp: { tag: "LFP Series", title: "Segurtasuna, bizi erabilgarria eta eskalatzea", summary: "Bizi erabilgarria, egonkortasun termikoa eta bolumen industrializazioa lehenesten dituzten aplikazioetarako familia.", specs: [["38-60 kWh", "Energia"], ["384-768 V", "Tentsioa"], ["LFP", "Kimika"], ["Multi", "Eskalatzea"]] },
      bms: { tag: "Supermaster BMS", title: "Multipack arkitekturentzako kontrol zentralizatua", summary: "Pack anitzen gainbegiratzea, segurtasun kudeaketa, sistemaren komunikazioa eta konfigurazio konplexuetarako euskarria.", specs: [["CAN", "Bus"], ["HVIL", "Segurtasuna"], ["SOC/SOH", "Egoera"], ["Multi", "Packak"]] }
    },
    fr: {
      nmc: { tag: "Series NMC", title: "Pack compact a haute densite energetique", summary: "Solution pour applications avec contraintes d'espace, montage polyvalent et besoin d'energie en format slim.", specs: [["35-56 kWh", "Energie"], ["333-666 V", "Tension"], ["IP67", "Protection"], ["CAN", "Communication"]] },
      lfp: { tag: "Series LFP", title: "Pack oriente securite, duree de vie et evolution", summary: "Famille pour applications ou la duree de vie, la stabilite thermique et l'industrialisation par volume sont prioritaires.", specs: [["38-60 kWh", "Energie"], ["384-768 V", "Tension"], ["LFP", "Chimie"], ["Multi", "Evolution"]] },
      bms: { tag: "Supermaster BMS", title: "Controle centralise pour architectures multipack", summary: "Supervision de plusieurs packs, gestion de securite, communication systeme et support pour configurations complexes.", specs: [["CAN", "Bus"], ["HVIL", "Securite"], ["SOC/SOH", "Etat"], ["Multi", "Packs"]] }
    }
  };

  var guides = {
    es: {
      landing: ["Ruta de la landing", [["01", "Mueve la cinta", "Usa las flechas laterales para avanzar o retroceder por las tarjetas sin abandonar la landing."], ["02", "Empieza por el mapa", "La primera tarjeta es el mapa orbital: cada nodo abre su pagina concreta y evita repetir menus estaticos."], ["03", "Lee solo el resumen", "Cada tarjeta da una idea corta de la seccion. No intenta sustituir la pagina desarrollada."], ["04", "Abre una seccion", "Pulsa Sistemas, Aplicaciones, Metodo, Documentacion o Contacto para entrar en contenido completo."], ["05", "Vuelve cuando quieras", "El enlace Landing de la cabecera te devuelve a esta cinta como indice principal."]]],
      sistemas: ["Ruta de sistemas", [["01", "Selecciona una familia", "Pasa por la cinta de NMC, LFP y BMS o usa las pestanas para fijar una familia concreta."], ["02", "Comprueba magnitudes", "Lee energia, tension, proteccion y comunicacion antes de mirar textos secundarios."], ["03", "Cruza con la matriz", "La parte inferior resume envolvente, HV y control: esos tres bloques indican si la solucion encaja."], ["04", "Guarda sistema", "Incluir en consulta lleva el producto seleccionado al formulario de contacto."], ["05", "Pide documentacion", "Si faltan datos, abre Documentacion para solicitar CAD, CAN, HV u OPS."]]],
      aplicaciones: ["Ruta de aplicaciones", [["01", "Filtra primero", "Elige movilidad, industrial o alta demanda para reducir tarjetas y evitar lectura innecesaria."], ["02", "Evalua el escenario", "Cada tarjeta responde a una aplicacion concreta: bus, marino, agricola, VCL, carga movil o rail."], ["03", "Valida una aplicacion", "El enlace de cada tarjeta guarda esa aplicacion para el formulario."], ["04", "Pasa a sistemas", "Despues de elegir uso, revisa que familia tecnica encaja mejor."], ["05", "Cierra con metodo", "Si todavia no hay datos suficientes, Metodo ordena fase, aplicacion y sistema."]]],
      metodo: ["Ruta del metodo", [["01", "Lee el flujo", "Encaje, integracion, validacion y activacion muestran como se transforma una necesidad en propuesta."], ["02", "Usa el preparador", "Selecciona aplicacion, fase y sistema para construir una consulta con contexto."], ["03", "Revisa el resultado", "La frase generada confirma que la solicitud tiene direccion tecnica."], ["04", "Prepara consulta", "El boton traslada esas selecciones al formulario."], ["05", "No repitas datos", "La pagina de contacto carga lo elegido para que solo completes empresa, correo y necesidad."]]],
      documentacion: ["Ruta de documentacion", [["01", "Identifica el bloque", "CAD, CAN, HV y OPS separan mecanica, comunicacion, arquitectura electrica y operacion."], ["02", "Marca necesidades", "El checklist convierte lo seleccionado en contexto para contacto."], ["03", "Evita pedir todo", "Selecciona solo lo que ayude a decidir el siguiente paso tecnico."], ["04", "Solicita documentacion", "El boton abre Contacto con sistema y fase preorientados."], ["05", "Completa detalle", "En el formulario anade tension, energia, plazos o restricciones si los tienes."]]],
      contacto: ["Ruta de contacto", [["01", "Revisa precargas", "Si vienes de otra pagina, aplicacion, sistema, fase o mensaje pueden aparecer ya seleccionados."], ["02", "Completa identidad", "Nombre, empresa y correo profesional son obligatorios para una respuesta util."], ["03", "Ajusta opciones", "Aplicacion, sistema y fase solo permiten valores contemplados por la web."], ["04", "Describe la necesidad", "Incluye energia, tension, montaje, comunicacion o plazo. El mensaje debe tener detalle minimo."], ["05", "Envia o escribe", "Puedes enviar el formulario validado o abrir correo directo desde el icono."]]]
    },
    en: {
      landing: ["Landing route", [["01", "Move the ribbon", "Use the side arrows to move through cards without leaving the landing."], ["02", "Start with the map", "The first card is the orbital map: every node opens its own page and avoids static menu repetition."], ["03", "Read only the summary", "Each card gives a short idea of the section. It does not replace the developed page."], ["04", "Open a section", "Click Systems, Applications, Method, Documentation or Contact to enter full content."], ["05", "Return anytime", "The Landing link in the header brings you back to this ribbon as the main index."]]],
      sistemas: ["Systems route", [["01", "Select a family", "Move through NMC, LFP and BMS or use the tabs to fix a specific family."], ["02", "Check magnitudes", "Read energy, voltage, protection and communication before secondary text."], ["03", "Cross with the matrix", "Envelope, HV and control show whether the solution fits."], ["04", "Save system", "Add to request sends the selected product to the contact form."], ["05", "Request documents", "If data is missing, open Documentation to ask for CAD, CAN, HV or OPS."]]],
      aplicaciones: ["Applications route", [["01", "Filter first", "Choose mobility, industrial or high demand to reduce cards and avoid unnecessary reading."], ["02", "Evaluate the scenario", "Each card answers a concrete application: bus, marine, agricultural, LCV, mobile charging or rail."], ["03", "Validate an application", "The card link stores that application for the form."], ["04", "Move to systems", "After choosing use, review which technical family fits best."], ["05", "Close with method", "If data is still missing, Method orders stage, application and system."]]],
      metodo: ["Method route", [["01", "Read the flow", "Fit, integration, validation and activation show how a need becomes a proposal."], ["02", "Use the planner", "Select application, stage and system to build a contextual request."], ["03", "Review the result", "The generated sentence confirms the request has technical direction."], ["04", "Prepare request", "The button transfers those selections to the form."], ["05", "Do not repeat data", "Contact loads the chosen context so you only complete company, email and need."]]],
      documentacion: ["Documentation route", [["01", "Identify the block", "CAD, CAN, HV and OPS separate mechanics, communication, electrical architecture and operation."], ["02", "Mark needs", "The checklist converts selected items into contact context."], ["03", "Avoid asking for everything", "Select only what helps decide the next technical step."], ["04", "Request documentation", "The button opens Contact with system and stage already oriented."], ["05", "Complete detail", "In the form add voltage, energy, timing or constraints if available."]]],
      contacto: ["Contact route", [["01", "Review preloads", "If you come from another page, application, system, stage or message may already be selected."], ["02", "Complete identity", "Name, company and business email are required for a useful response."], ["03", "Adjust options", "Application, system and stage only allow expected values."], ["04", "Describe the need", "Include energy, voltage, mounting, communication or timing. The message needs minimum detail."], ["05", "Send or write", "Send the validated form or open direct email from the icon."]]]
    }
  };

  guides.eu = {
    landing: ["Landing ibilbidea", [["01", "Mugitu zinta", "Erabili alboko geziak txarteletan aurrera edo atzera egiteko landingetik irten gabe."], ["02", "Hasi mapatik", "Lehen txartela mapa orbitala da: nodo bakoitzak bere orria irekitzen du eta menu errepikapena saihesten du."], ["03", "Irakurri laburpena", "Txartel bakoitzak atalaren ideia laburra ematen du. Ez du orri garatua ordezkatzen."], ["04", "Ireki atal bat", "Sistemak, aplikazioak, metodoa, dokumentazioa edo kontaktua sakatu eduki osoa ikusteko."], ["05", "Itzuli nahi duzunean", "Goiburuko Landing estekak zinta honetara itzultzen zaitu."]]],
    sistemas: ["Sistemen ibilbidea", [["01", "Aukeratu familia", "Mugitu NMC, LFP eta BMS artean edo erabili pestanak familia zehatza finkatzeko."], ["02", "Egiaztatu magnitudeak", "Irakurri energia, tentsioa, babesa eta komunikazioa bigarren mailako testua baino lehen."], ["03", "Lotu matrizearekin", "Ingurua, HV eta kontrola soluzioak egokitzen den ala ez erakusten dute."], ["04", "Gorde sistema", "Kontsultan sartzeak hautatutako produktua kontaktu formulariora bidaltzen du."], ["05", "Eskatu dokumentuak", "Datuak falta badira, ireki Dokumentazioa CAD, CAN, HV edo OPS eskatzeko."]]],
    aplicaciones: ["Aplikazioen ibilbidea", [["01", "Iragazi lehenik", "Aukeratu mugikortasuna, industriala edo eskari handia txartel kopurua murrizteko."], ["02", "Ebaluatu eszenarioa", "Txartel bakoitzak aplikazio zehatza azaltzen du: busa, itsasoa, nekazaritza, VCL, karga mugikorra edo trena."], ["03", "Balidatu aplikazioa", "Txartelaren estekak aplikazio hori gordetzen du formulariorako."], ["04", "Joan sistemetara", "Erabilera aukeratu ondoren, berrikusi zein familia tekniko egokitzen den hobekien."], ["05", "Itxi metodoarekin", "Datuak falta badira, Metodoak fasea, aplikazioa eta sistema ordenatzen ditu."]]],
    metodo: ["Metodoaren ibilbidea", [["01", "Irakurri fluxua", "Egokitzapena, integrazioa, balidazioa eta aktibazioa beharra proposamen bihurtzeko modua erakusten dute."], ["02", "Erabili prestatzailea", "Aukeratu aplikazioa, fasea eta sistema testuingurudun kontsulta sortzeko."], ["03", "Berrikusi emaitza", "Sortutako esaldiak eskaerak norabide teknikoa duela baieztatzen du."], ["04", "Prestatu kontsulta", "Botoiak hautapen horiek formulariora eramaten ditu."], ["05", "Ez errepikatu datuak", "Kontaktuak aukeratutako testuingurua kargatzen du."]]],
    documentacion: ["Dokumentazioaren ibilbidea", [["01", "Identifikatu blokea", "CAD, CAN, HV eta OPS mekanika, komunikazioa, arkitektura elektrikoa eta operazioa bereizten dituzte."], ["02", "Markatu beharrak", "Checklistak hautatutako elementuak kontaktu testuinguru bihurtzen ditu."], ["03", "Ez eskatu guztia", "Aukeratu hurrengo urrats teknikoa erabakitzeko balio duena bakarrik."], ["04", "Eskatu dokumentazioa", "Botoiak Kontaktua irekitzen du sistema eta fasea orientatuta."], ["05", "Osatu xehetasuna", "Formularioan gehitu tentsioa, energia, epeak edo murrizketak badituzu."]]],
    contacto: ["Kontaktuaren ibilbidea", [["01", "Berrikusi aurrekargak", "Beste orri batetik bazatoz, aplikazioa, sistema, fasea edo mezua hautatuta egon daitezke."], ["02", "Osatu identitatea", "Izena, enpresa eta laneko posta beharrezkoak dira erantzun erabilgarria jasotzeko."], ["03", "Doitu aukerak", "Aplikazioak, sistemak eta faseak balio aurreikusiak bakarrik onartzen dituzte."], ["04", "Azaldu beharra", "Sartu energia, tentsioa, muntaketa, komunikazioa edo epeak. Mezuak gutxieneko xehetasuna behar du."], ["05", "Bidali edo idatzi", "Bidali formulario balidatua edo ireki zuzeneko posta ikonotik."]]]
  };

  guides.fr = {
    landing: ["Parcours landing", [["01", "Deplacer le ruban", "Utilisez les fleches laterales pour avancer ou reculer dans les cartes sans quitter la landing."], ["02", "Commencer par la carte", "La premiere carte est la carte orbitale: chaque noeud ouvre sa page et evite les menus repetes."], ["03", "Lire seulement le resume", "Chaque carte donne une idee courte de la section. Elle ne remplace pas la page developpee."], ["04", "Ouvrir une section", "Cliquez Systemes, Applications, Methode, Documentation ou Contact pour entrer dans le contenu complet."], ["05", "Revenir quand necessaire", "Le lien Landing dans l'en-tete ramene a ce ruban comme index principal."]]],
    sistemas: ["Parcours systemes", [["01", "Selectionner une famille", "Parcourez NMC, LFP et BMS ou utilisez les onglets pour fixer une famille precise."], ["02", "Verifier les grandeurs", "Lisez energie, tension, protection et communication avant le texte secondaire."], ["03", "Croiser avec la matrice", "Enveloppe, HV et controle indiquent si la solution est adaptee."], ["04", "Garder le systeme", "Ajouter a la demande envoie le produit choisi vers le formulaire."], ["05", "Demander les documents", "Si des donnees manquent, ouvrez Documentation pour demander CAD, CAN, HV ou OPS."]]],
    aplicaciones: ["Parcours applications", [["01", "Filtrer d'abord", "Choisissez mobilite, industriel ou forte demande pour reduire les cartes et eviter la lecture inutile."], ["02", "Evaluer le scenario", "Chaque carte traite une application concrete: bus, marine, agricole, VCL, recharge mobile ou rail."], ["03", "Valider l'application", "Le lien de la carte garde cette application pour le formulaire."], ["04", "Passer aux systemes", "Apres le choix de l'usage, verifiez quelle famille technique convient le mieux."], ["05", "Fermer avec methode", "S'il manque encore des donnees, Methode ordonne phase, application et systeme."]]],
    metodo: ["Parcours methode", [["01", "Lire le flux", "Adaptation, integration, validation et activation montrent comment le besoin devient proposition."], ["02", "Utiliser le preparateur", "Selectionnez application, phase et systeme pour creer une demande contextualisee."], ["03", "Reviser le resultat", "La phrase generee confirme que la demande a une direction technique."], ["04", "Preparer la demande", "Le bouton transfere ces choix au formulaire."], ["05", "Ne pas repeter les donnees", "Contact charge le contexte choisi pour completer seulement entreprise, email et besoin."]]],
    documentacion: ["Parcours documentation", [["01", "Identifier le bloc", "CAD, CAN, HV et OPS separent mecanique, communication, architecture electrique et operation."], ["02", "Marquer les besoins", "La checklist transforme les elements choisis en contexte de contact."], ["03", "Eviter de tout demander", "Selectionnez uniquement ce qui aide a decider la prochaine etape technique."], ["04", "Demander documentation", "Le bouton ouvre Contact avec systeme et phase deja orientes."], ["05", "Completer le detail", "Dans le formulaire, ajoutez tension, energie, delais ou contraintes si disponibles."]]],
    contacto: ["Parcours contact", [["01", "Verifier les prechargements", "Si vous venez d'une autre page, application, systeme, phase ou message peuvent deja etre selectionnes."], ["02", "Completer l'identite", "Nom, entreprise et email professionnel sont obligatoires pour une reponse utile."], ["03", "Ajuster les options", "Application, systeme et phase acceptent uniquement les valeurs prevues."], ["04", "Decrire le besoin", "Incluez energie, tension, montage, communication ou delai. Le message demande un minimum de detail."], ["05", "Envoyer ou ecrire", "Envoyez le formulaire valide ou ouvrez l'email direct depuis l'icone."]]]
  };

  var allowed = {
    application: ["bus", "sea", "agr", "vcl", "charge", "rail", "unknown"],
    product: ["nmc", "lfp", "bms", "system", "compare"],
    stage: ["quote", "design", "validation", "purchase"],
    volume: ["", "prototype", "short", "medium", "open"]
  };

  var storedLanguage = readStore("pc1.lang");
  var currentLanguage = copy[storedLanguage] ? storedLanguage : "es";
  var currentProduct = "nmc";
  var page = document.body.getAttribute("data-page") || "landing";
  var menuButton = document.querySelector(".menu-toggle");
  var mainNav = document.querySelector(".main-nav");
  var mapButton = document.querySelector(".map-button");
  var miniMap = document.querySelector(".mini-map");
  var languageButton = document.querySelector(".language-button");
  var languageMenu = document.querySelector(".language-menu");
  var currentLangLabel = document.querySelector(".current-lang");
  var miniNodes = Array.prototype.slice.call(document.querySelectorAll(".mini-node"));
  var productRibbon = document.querySelector(".product-ribbon");
  var consoleTabs = Array.prototype.slice.call(document.querySelectorAll(".console-tab"));
  var detailTag = document.querySelector('[data-product-detail="tag"]');
  var detailTitle = document.querySelector('[data-product-detail="title"]');
  var detailSummary = document.querySelector('[data-product-detail="summary"]');
  var detailSpecs = document.querySelector('[data-product-detail="specs"]');
  var addProductButton = document.querySelector("[data-add-product]");
  var leadForm = document.querySelector(".lead-form");
  var feedback = document.querySelector(".form-feedback");
  var processTrigger = document.querySelector(".process-trigger");
  var processPanel = document.querySelector("#proceso-guia");
  var processTitle = document.querySelector("[data-process-title]");
  var processSteps = document.querySelector("[data-process-steps]");
  var processClose = document.querySelector(".process-close");
  var scrollTopButton = document.querySelector(".scroll-top");
  var siteFooter = document.querySelector(".site-footer");
  var ribbonControls = Array.prototype.slice.call(document.querySelectorAll("[data-ribbon-control]"));

  function t(key) {
    return (copy[currentLanguage] && copy[currentLanguage][key]) || copy.es[key] || "";
  }

  function readStore(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return "";
    }
  }

  function writeStore(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return false;
    }
    return true;
  }

  function removeStore(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      return false;
    }
    return true;
  }

  function setExpanded(button, expanded) {
    if (button) {
      button.setAttribute("aria-expanded", expanded ? "true" : "false");
    }
  }

  function clearNode(node) {
    while (node && node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function closePanels() {
    if (miniMap) {
      miniMap.classList.remove("is-open");
      setExpanded(mapButton, false);
    }
    if (languageMenu) {
      languageMenu.classList.remove("is-open");
      setExpanded(languageButton, false);
    }
  }

  function applyLanguage(language) {
    if (!copy[language]) {
      language = "es";
    }
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    writeStore("pc1.lang", language);
    if (currentLangLabel) {
      currentLangLabel.textContent = language.toUpperCase();
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      var active = button.getAttribute("data-lang") === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (node) {
      var value = t(node.getAttribute("data-i18n"));
      if (value) {
        node.textContent = value;
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-placeholder]"), function (node) {
      var value = t(node.getAttribute("data-i18n-placeholder"));
      if (value) {
        node.setAttribute("placeholder", value);
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria-label]"), function (node) {
      var value = t(node.getAttribute("data-i18n-aria-label"));
      if (value) {
        node.setAttribute("aria-label", value);
      }
    });
    renderGuide();
    renderProduct(currentProduct);
    updateRouteResult();
    updateDocCounter();
    refreshFormLanguageState();
    closePanels();
  }

  function getProductData(productKey) {
    return (products[currentLanguage] && products[currentLanguage][productKey]) || products.es[productKey] || products.es.nmc;
  }

  function renderProduct(productKey) {
    if (!detailTag && consoleTabs.length === 0) {
      return;
    }
    if (!products.es[productKey]) {
      productKey = "nmc";
    }
    currentProduct = productKey;
    var data = getProductData(productKey);
    if (detailTag) {
      detailTag.textContent = data.tag;
    }
    if (detailTitle) {
      detailTitle.textContent = data.title;
    }
    if (detailSummary) {
      detailSummary.textContent = data.summary;
    }
    if (detailSpecs) {
      clearNode(detailSpecs);
      data.specs.forEach(function (spec) {
        var pill = document.createElement("span");
        var strong = document.createElement("strong");
        var label = document.createElement("span");
        pill.className = "spec-pill";
        strong.textContent = spec[0];
        label.textContent = spec[1];
        pill.appendChild(strong);
        pill.appendChild(label);
        detailSpecs.appendChild(pill);
      });
    }
    consoleTabs.forEach(function (tab) {
      tab.classList.toggle("is-active", tab.getAttribute("data-product") === productKey);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".ribbon-card"), function (card) {
      card.classList.toggle("is-active", card.getAttribute("data-product") === productKey);
    });
  }

  function setupInfiniteRibbon() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-infinite-ribbon]"), function (track) {
      if (track.getAttribute("data-ready") === "true") {
        return;
      }
      var children = Array.prototype.slice.call(track.children);
      children.forEach(function (child) {
        var clone = child.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        Array.prototype.forEach.call(clone.querySelectorAll("a, button, input, select, textarea, [tabindex]"), function (focusable) {
          focusable.tabIndex = -1;
        });
        track.appendChild(clone);
      });
      track.setAttribute("data-ready", "true");
      track.addEventListener("mouseenter", function () { track.classList.add("is-paused"); });
      track.addEventListener("mouseleave", function () { track.classList.remove("is-paused"); });
      track.addEventListener("focusin", function () { track.classList.add("is-paused"); });
      track.addEventListener("focusout", function () { track.classList.remove("is-paused"); });
    });
  }

  function bindLandingRibbonControls() {
    if (ribbonControls.length === 0) {
      return;
    }
    ribbonControls.forEach(function (control) {
      control.addEventListener("click", function () {
        var shell = control.closest(".landing-ribbon-shell");
        var track = shell ? shell.querySelector("[data-infinite-ribbon]") : null;
        if (!track) {
          return;
        }
        var direction = control.getAttribute("data-ribbon-control") === "prev" ? 1 : -1;
        var card = track.querySelector("[data-ribbon-card]");
        var step = card ? Math.min(720, Math.max(360, card.getBoundingClientRect().width * 0.72)) : 460;
        var current = parseFloat(track.getAttribute("data-manual-shift") || "0");
        var halfWidth = Math.max(step, track.scrollWidth / 2);
        var next = current + (direction * step);
        if (Math.abs(next) > halfWidth) {
          next = 0;
        }
        track.setAttribute("data-manual-shift", String(next));
        track.style.setProperty("--manual-shift", next.toFixed(0) + "px");
        track.classList.add("is-paused");
        window.clearTimeout(track._pc1RibbonTimer);
        track._pc1RibbonTimer = window.setTimeout(function () {
          track.classList.remove("is-paused");
        }, 1500);
      });
    });
  }

  function setupProductRibbon() {
    if (!productRibbon || productRibbon.getAttribute("data-ready") === "true") {
      return;
    }
    var originals = Array.prototype.slice.call(productRibbon.children);
    originals.forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.tabIndex = -1;
      productRibbon.appendChild(clone);
    });
    productRibbon.setAttribute("data-ready", "true");
    Array.prototype.forEach.call(document.querySelectorAll(".ribbon-card"), function (card) {
      var productKey = card.getAttribute("data-product");
      if (!productKey) {
        return;
      }
      card.addEventListener("mouseenter", function () {
        productRibbon.classList.add("is-paused");
        renderProduct(productKey);
      });
      card.addEventListener("focus", function () {
        productRibbon.classList.add("is-paused");
        renderProduct(productKey);
      });
      card.addEventListener("mouseleave", function () {
        productRibbon.classList.remove("is-paused");
      });
      card.addEventListener("blur", function () {
        productRibbon.classList.remove("is-paused");
      });
      card.addEventListener("click", function () {
        renderProduct(productKey);
      });
      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          renderProduct(productKey);
        }
      });
    });
  }

  function setOrbitPositions(container, nodes, options, now) {
    var rect = container.getBoundingClientRect();
    var radiusX = Math.max(options.minX, rect.width * options.xFactor);
    var radiusY = Math.max(options.minY, rect.height * options.yFactor);
    var rotation = now * options.speed + options.offset;
    nodes.forEach(function (node, index) {
      var angle = rotation + (Math.PI * 2 * index / nodes.length);
      node.style.setProperty("--x", (Math.cos(angle) * radiusX).toFixed(2) + "px");
      node.style.setProperty("--y", (Math.sin(angle) * radiusY).toFixed(2) + "px");
    });
  }

  function animateOrbit(container, nodes, options) {
    if (!container || nodes.length === 0) {
      return;
    }
    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var paused = false;
    var start = window.performance.now();
    setOrbitPositions(container, nodes, options, 0);
    if (reducedMotion) {
      return;
    }
    nodes.forEach(function (node) {
      node.addEventListener("mouseenter", function () { paused = true; });
      node.addEventListener("focus", function () { paused = true; });
      node.addEventListener("mouseleave", function () { paused = false; });
      node.addEventListener("blur", function () { paused = false; });
    });
    function frame(now) {
      if (!paused) {
        setOrbitPositions(container, nodes, options, now - start);
      } else {
        start += 16;
      }
      window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  function renderGuide() {
    if (!processTitle || !processSteps) {
      return;
    }
    var languageGuides = guides[currentLanguage] || guides.es;
    var guide = languageGuides[page] || guides.es[page] || guides.es.landing;
    processTitle.textContent = guide[0];
    clearNode(processSteps);
    guide[1].forEach(function (step) {
      var item = document.createElement("li");
      var number = document.createElement("span");
      var wrapper = document.createElement("div");
      var title = document.createElement("h3");
      var text = document.createElement("p");
      number.textContent = step[0];
      title.textContent = step[1];
      text.textContent = step[2];
      wrapper.appendChild(title);
      wrapper.appendChild(text);
      item.appendChild(number);
      item.appendChild(wrapper);
      processSteps.appendChild(item);
    });
  }

  function setProcessPanel(open) {
    if (!processPanel || !processTrigger) {
      return;
    }
    processPanel.classList.toggle("is-open", open);
    processPanel.setAttribute("aria-hidden", open ? "false" : "true");
    processTrigger.setAttribute("aria-expanded", open ? "true" : "false");
    processTrigger.setAttribute("aria-label", t(open ? "processGuide.close" : "processGuide.open"));
    if (open) {
      processPanel.focus({ preventScroll: true });
    }
  }

  function bindNavigation() {
    if (menuButton && mainNav) {
      menuButton.addEventListener("click", function () {
        var isOpen = mainNav.classList.toggle("is-open");
        setExpanded(menuButton, isOpen);
      });
    }
    if (mapButton && miniMap) {
      mapButton.addEventListener("click", function (event) {
        event.stopPropagation();
        if (languageMenu) {
          languageMenu.classList.remove("is-open");
          setExpanded(languageButton, false);
        }
        var isOpen = miniMap.classList.toggle("is-open");
        setExpanded(mapButton, isOpen);
      });
    }
    if (languageButton && languageMenu) {
      languageButton.addEventListener("click", function (event) {
        event.stopPropagation();
        if (miniMap) {
          miniMap.classList.remove("is-open");
          setExpanded(mapButton, false);
        }
        var isOpen = languageMenu.classList.toggle("is-open");
        setExpanded(languageButton, isOpen);
      });
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (button) {
      button.addEventListener("click", function () {
        applyLanguage(button.getAttribute("data-lang"));
      });
    });
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (!target.closest(".map-widget") && !target.closest(".language-widget")) {
        closePanels();
      }
      if (!target.closest(".process-widget")) {
        setProcessPanel(false);
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (mainNav) {
          mainNav.classList.remove("is-open");
          setExpanded(menuButton, false);
        }
        closePanels();
        setProcessPanel(false);
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll(".main-nav a, .mini-node, .orbit-node"), function (link) {
      link.addEventListener("click", function () {
        if (mainNav) {
          mainNav.classList.remove("is-open");
          setExpanded(menuButton, false);
        }
        closePanels();
      });
    });
  }

  function bindProcessGuide() {
    if (!processTrigger || !processPanel) {
      return;
    }
    processTrigger.addEventListener("click", function () {
      setProcessPanel(!processPanel.classList.contains("is-open"));
    });
    if (processClose) {
      processClose.addEventListener("click", function () {
        setProcessPanel(false);
        processTrigger.focus({ preventScroll: true });
      });
    }
  }

  function labelForSelect(select) {
    if (!select || !select.selectedOptions || !select.selectedOptions[0]) {
      return "";
    }
    return select.selectedOptions[0].textContent.trim();
  }

  function updateRouteResult() {
    var result = document.querySelector("[data-route-result]");
    if (!result) {
      return;
    }
    var application = document.querySelector('[data-route-select="application"]');
    var stage = document.querySelector('[data-route-select="stage"]');
    var product = document.querySelector('[data-route-select="product"]');
    result.textContent = t("route.result")
      .replace("{application}", labelForSelect(application))
      .replace("{stage}", labelForSelect(stage))
      .replace("{product}", labelForSelect(product));
  }

  function currentRouteIntent() {
    var application = document.querySelector('[data-route-select="application"]');
    var stage = document.querySelector('[data-route-select="stage"]');
    var product = document.querySelector('[data-route-select="product"]');
    return {
      application: application ? application.value : "",
      stage: stage ? stage.value : "",
      product: product ? product.value : ""
    };
  }

  function bindRoutePlanner() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-route-select]"), function (select) {
      select.addEventListener("change", updateRouteResult);
    });
    var send = document.querySelector("[data-route-send]");
    if (send) {
      send.addEventListener("click", function () {
        writeStore("pc1.intent", JSON.stringify(currentRouteIntent()));
      });
    }
    updateRouteResult();
  }

  function bindApplicationFilters() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-app-filter]"));
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-sector]"));
    if (buttons.length === 0) {
      return;
    }
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-app-filter");
        buttons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });
        cards.forEach(function (card) {
          var visible = filter === "all" || card.getAttribute("data-sector") === filter;
          card.classList.toggle("is-hidden", !visible);
        });
      });
    });
  }

  function bindIntentLinks() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-product-link]"), function (link) {
      link.addEventListener("click", function () {
        writeStore("pc1.intent", JSON.stringify({ product: link.getAttribute("data-product-link") }));
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-application-link]"), function (link) {
      link.addEventListener("click", function () {
        writeStore("pc1.intent", JSON.stringify({ application: link.getAttribute("data-application-link") }));
      });
    });
  }

  function updateDocCounter() {
    var counter = document.querySelector("[data-doc-counter]");
    if (!counter) {
      return;
    }
    var checked = Array.prototype.slice.call(document.querySelectorAll("[data-doc-checklist] input:checked"));
    counter.textContent = t("docs.counter").replace("{count}", String(checked.length));
  }

  function bindDocsChecklist() {
    var checklist = document.querySelector("[data-doc-checklist]");
    if (!checklist) {
      return;
    }
    checklist.addEventListener("change", updateDocCounter);
    var send = document.querySelector("[data-doc-send]");
    if (send) {
      send.addEventListener("click", function () {
        var values = Array.prototype.slice.call(checklist.querySelectorAll("input:checked")).map(function (input) {
          return input.value.toUpperCase();
        });
        writeStore("pc1.intent", JSON.stringify({
          product: "system",
          stage: "validation",
          message: values.length ? "Documentacion solicitada: " + values.join(", ") + "." : ""
        }));
      });
    }
    updateDocCounter();
  }

  function bindProducts() {
    setupProductRibbon();
    consoleTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        renderProduct(tab.getAttribute("data-product"));
      });
    });
    if (addProductButton) {
      addProductButton.addEventListener("click", function () {
        writeStore("pc1.intent", JSON.stringify({ product: currentProduct }));
        if (feedback) {
          feedback.textContent = t("feedback.product");
        }
        window.location.href = "contacto.html";
      });
    }
  }

  function normalizeValue(field) {
    if (!field || typeof field.value !== "string") {
      return "";
    }
    return field.value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  }

  function sameOriginFormAction(form) {
    try {
      var action = new URL(form.action, window.location.href);
      return action.origin === window.location.origin && /\/backend\/contact\.php$/.test(action.pathname);
    } catch (error) {
      return false;
    }
  }

  function markValidity(field, valid, message) {
    if (!field) {
      return true;
    }
    field.setCustomValidity(valid ? "" : message);
    if (valid) {
      field.removeAttribute("aria-invalid");
    } else {
      field.setAttribute("aria-invalid", "true");
    }
    return valid;
  }

  function validateText(field, min, max, required) {
    var value = normalizeValue(field);
    var safeText = /^[A-Za-z0-9\u00C0-\u024F .,'&()\/+-]*$/;
    if (!required && value.length === 0) {
      return markValidity(field, true, "");
    }
    if (value.length < min) {
      return markValidity(field, false, t("feedback.requiredText"));
    }
    if (value.length > max || !safeText.test(value)) {
      return markValidity(field, false, t("feedback.badText"));
    }
    field.value = value;
    return markValidity(field, true, "");
  }

  function validateEmail(field) {
    var value = normalizeValue(field).toLowerCase();
    var emailPattern = /^[^\s@<>()[\]{}"'`]+@[^\s@<>()[\]{}"'`]+\.[^\s@<>()[\]{}"'`]{2,}$/;
    if (!emailPattern.test(value) || value.length > 160) {
      return markValidity(field, false, t("feedback.email"));
    }
    field.value = value;
    return markValidity(field, true, "");
  }

  function validateSelect(field, allowedValues, required) {
    var value = field ? field.value : "";
    if (required && value === "") {
      return markValidity(field, false, t("feedback.select"));
    }
    if (allowedValues.indexOf(value) === -1) {
      return markValidity(field, false, t("feedback.option"));
    }
    return markValidity(field, true, "");
  }

  function validateMessage(field) {
    var value = normalizeValue(field);
    var safeMessage = /^[A-Za-z0-9\u00C0-\u024F .,;:!?%&()\/+\-\n\r]*$/;
    if (value.length < 12) {
      return markValidity(field, false, t("feedback.message"));
    }
    if (value.length > 1400 || !safeMessage.test(value)) {
      return markValidity(field, false, t("feedback.badMessage"));
    }
    field.value = value;
    return markValidity(field, true, "");
  }

  function validateForm(form) {
    var valid = true;
    var website = form.elements.website;
    var allowedFields = ["website", "name", "company", "email", "country", "application", "product", "stage", "volume", "message", "privacy"];
    var controls = Array.prototype.slice.call(form.elements);
    if ((form.getAttribute("method") || "").toLowerCase() !== "post" || !sameOriginFormAction(form)) {
      return false;
    }
    valid = controls.every(function (field) {
      return !field.name || allowedFields.indexOf(field.name) !== -1;
    }) && valid;
    if (website && website.value.trim() !== "") {
      return false;
    }
    valid = validateText(form.elements.name, 2, 80, true) && valid;
    valid = validateText(form.elements.company, 2, 120, true) && valid;
    valid = validateEmail(form.elements.email) && valid;
    valid = validateText(form.elements.country, 0, 80, false) && valid;
    valid = validateSelect(form.elements.application, allowed.application, true) && valid;
    valid = validateSelect(form.elements.product, allowed.product, true) && valid;
    valid = validateSelect(form.elements.stage, allowed.stage, true) && valid;
    valid = validateSelect(form.elements.volume, allowed.volume, false) && valid;
    valid = validateMessage(form.elements.message) && valid;
    if (!form.elements.privacy.checked) {
      markValidity(form.elements.privacy, false, t("feedback.privacy"));
      valid = false;
    } else {
      markValidity(form.elements.privacy, true, "");
    }
    return valid;
  }

  function refreshFormLanguageState() {
    if (!leadForm) {
      return;
    }
    Array.prototype.forEach.call(leadForm.elements, function (field) {
      field.setCustomValidity("");
      field.removeAttribute("aria-invalid");
    });
    if (feedback) {
      feedback.textContent = "";
    }
  }

  function prefillForm() {
    if (!leadForm) {
      return;
    }
    var raw = readStore("pc1.intent");
    if (!raw) {
      return;
    }
    var intent;
    try {
      intent = JSON.parse(raw);
    } catch (error) {
      removeStore("pc1.intent");
      return;
    }
    ["application", "product", "stage", "volume"].forEach(function (key) {
      if (leadForm.elements[key] && allowed[key] && allowed[key].indexOf(intent[key]) !== -1) {
        leadForm.elements[key].value = intent[key];
      }
    });
    if (intent.message && leadForm.elements.message && /^[A-Za-z0-9\u00C0-\u024F .,;:!?%&()\/+\-\n\r]*$/.test(intent.message)) {
      leadForm.elements.message.value = intent.message;
    }
  }

  function bindForm() {
    if (!leadForm) {
      return;
    }
    prefillForm();
    Array.prototype.forEach.call(leadForm.elements, function (field) {
      field.addEventListener("input", function () {
        field.setCustomValidity("");
        field.removeAttribute("aria-invalid");
        if (feedback) {
          feedback.textContent = "";
        }
      });
      field.addEventListener("change", function () {
        field.setCustomValidity("");
        field.removeAttribute("aria-invalid");
      });
    });
    leadForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validateForm(leadForm)) {
        if (feedback) {
          feedback.textContent = t("feedback.invalid");
        }
        leadForm.reportValidity();
        return;
      }
      var submitButton = leadForm.querySelector("[type='submit']");
      if (submitButton) {
        submitButton.disabled = true;
      }
      if (feedback) {
        feedback.textContent = t("feedback.ready");
      }
      if (window.location.protocol === "file:") {
        if (feedback) {
          feedback.textContent = t("feedback.file");
        }
        if (submitButton) {
          submitButton.disabled = false;
        }
        return;
      }
      window.fetch(leadForm.action, {
        method: "POST",
        body: new FormData(leadForm),
        headers: { "Accept": "application/json" },
        credentials: "same-origin"
      }).then(function (response) {
        return response.json().then(function (payload) {
          return { response: response, payload: payload };
        });
      }).then(function (result) {
        if (!result.response.ok || !result.payload.ok) {
          throw result.payload;
        }
        if (feedback) {
          feedback.textContent = result.payload.message || t("feedback.ok");
        }
        leadForm.reset();
        removeStore("pc1.intent");
      }).catch(function (error) {
        if (feedback) {
          feedback.textContent = (error && error.message) || t("feedback.error");
        }
      }).finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
        }
      });
    });
  }

  function bindScrollTop() {
    if (!scrollTopButton) {
      return;
    }
    function updateVisibility() {
      var shouldShow = window.scrollY > 520;
      if (page === "landing") {
        shouldShow = siteFooter ? siteFooter.getBoundingClientRect().top < window.innerHeight + 140 : false;
      }
      scrollTopButton.classList.toggle("is-visible", shouldShow);
    }
    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    updateVisibility();
  }

  setupInfiniteRibbon();
  bindLandingRibbonControls();
  bindNavigation();
  bindProcessGuide();
  bindProducts();
  bindApplicationFilters();
  bindIntentLinks();
  bindRoutePlanner();
  bindDocsChecklist();
  bindForm();
  bindScrollTop();
  applyLanguage(currentLanguage);
  Array.prototype.slice.call(document.querySelectorAll(".landing-orbit")).forEach(function (container) {
    animateOrbit(container, Array.prototype.slice.call(container.querySelectorAll(".orbit-node")), { speed: 0.00024, offset: -0.4, xFactor: 0.38, yFactor: 0.22, minX: 210, minY: 92 });
  });
  animateOrbit(miniMap, miniNodes, { speed: 0.00045, offset: 0.3, xFactor: 0.33, yFactor: 0.25, minX: 130, minY: 70 });
}());
