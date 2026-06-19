(function () {
  "use strict";

  var copy = {
    es: {
      "brand.claim": "High Voltage Lab",
      "nav.map": "Mapa orbital",
      "nav.contact": "Contacto",
      "opening.eyebrow": "Reimaginacion industrial",
      "opening.title": "Una web que presenta el sistema como una arquitectura electrica viva.",
      "opening.text": "La tercera version transforma la navegacion en un mapa orbital, reduce el ruido comercial y convierte productos, aplicaciones, metodo y datos en una experiencia visual mas memorable.",
      "orbit.core": "Sistema vivo",
      "orbit.systems": "Sistemas",
      "orbit.systemsText": "Packs, control y energia.",
      "orbit.apps": "Aplicaciones",
      "orbit.appsText": "Sectores electrificados.",
      "orbit.method": "Metodo",
      "orbit.methodText": "Viabilidad e integracion.",
      "orbit.docs": "Datos",
      "orbit.docsText": "CAD, CAN y HV.",
      "orbit.contact": "Contacto",
      "orbit.contactText": "Consulta cualificada.",
      "hero.eyebrow": "Baterias de alto voltaje",
      "hero.title": "Del pack al ecosistema: energia, control y soporte en una unica lectura.",
      "hero.text": "Una propuesta para OEMs y fabricantes que necesitan integrar sistemas de bateria de alto voltaje en aplicaciones exigentes, con menos friccion tecnica y mas claridad en la decision.",
      "metric.energy": "Energia por pack",
      "metric.voltage": "Rango nominal",
      "metric.protection": "Proteccion",
      "systems.eyebrow": "Sistemas",
      "systems.title": "Familias tecnicas convertidas en piezas visuales.",
      "systems.text": "La cinta infinita mantiene la exploracion viva: primero se reconoce la familia, despues se abre la ficha concreta con datos de integracion.",
      "ribbon.nmc": "Alta densidad en formato compacto.",
      "ribbon.lfp": "Seguridad, vida util y escalado.",
      "ribbon.bms": "Control multipack centralizado.",
      "systems.add": "Incluir en consulta",
      "systems.docs": "Ver datos tecnicos",
      "apps.eyebrow": "Aplicaciones",
      "apps.title": "Seis escenarios, una misma arquitectura de decision.",
      "apps.busTitle": "Autobuses",
      "apps.busText": "Arquitecturas multi-rack para urbano e interurbano.",
      "apps.seaTitle": "Marino",
      "apps.seaText": "Sistemas paralelizables para entornos hibridos y electricos.",
      "apps.agrTitle": "Agricola",
      "apps.agrText": "Energia robusta para maquinaria exigente.",
      "apps.vclTitle": "VCL",
      "apps.vclText": "Integracion para series cortas y medias.",
      "apps.chargeTitle": "Carga movil",
      "apps.chargeText": "Soporte energetico temporal o semiestacionario.",
      "apps.railTitle": "Ferrocarril",
      "apps.railText": "Escalado multipack para grandes necesidades.",
      "method.eyebrow": "Metodo",
      "method.title": "Un proceso reimaginado como tres niveles de madurez tecnica.",
      "method.oneTitle": "Encaje",
      "method.oneText": "Aplicacion, tension, energia, envolvente, volumen y calendario.",
      "method.twoTitle": "Integracion",
      "method.twoText": "Mecanica, comunicaciones, termica, arquitectura multipack y documentacion.",
      "method.threeTitle": "Activacion",
      "method.threeText": "Puesta en marcha, formacion, soporte inicial y ajuste de configuracion.",
      "docs.eyebrow": "Datos tecnicos",
      "docs.title": "Documentacion presentada como panel de decisiones.",
      "docs.text": "En lugar de dispersar informacion, la version reimaginada agrupa lo que un equipo tecnico necesita pedir o revisar: envolvente, comunicaciones, tension, manuales y puesta en marcha.",
      "docs.cad": "Envolvente y montaje",
      "docs.can": "Comunicacion",
      "docs.hv": "Arquitectura electrica",
      "docs.ops": "Manual y arranque",
      "contact.eyebrow": "Consulta tecnica",
      "contact.title": "Convierte la visita en una solicitud util para ventas e ingenieria.",
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
      "footer.text": "Reimaginacion visual para sistemas de baterias de alto voltaje."
    },
    en: {
      "brand.claim": "High Voltage Lab",
      "nav.map": "Orbital map",
      "nav.contact": "Contact",
      "opening.eyebrow": "Industrial reimagination",
      "opening.title": "A website that presents the system as a living electrical architecture.",
      "opening.text": "The third version turns navigation into an orbital map, reduces commercial noise and makes products, applications, method and data feel more memorable.",
      "orbit.core": "Living system",
      "orbit.systems": "Systems",
      "orbit.systemsText": "Packs, control and energy.",
      "orbit.apps": "Applications",
      "orbit.appsText": "Electrified sectors.",
      "orbit.method": "Method",
      "orbit.methodText": "Feasibility and integration.",
      "orbit.docs": "Data",
      "orbit.docsText": "CAD, CAN and HV.",
      "orbit.contact": "Contact",
      "orbit.contactText": "Qualified request.",
      "hero.eyebrow": "High voltage batteries",
      "hero.title": "From pack to ecosystem: energy, control and support in one clear reading.",
      "hero.text": "A proposal for OEMs and manufacturers that need to integrate high voltage battery systems into demanding applications with less technical friction and clearer decisions.",
      "metric.energy": "Energy per pack",
      "metric.voltage": "Nominal range",
      "metric.protection": "Protection",
      "systems.eyebrow": "Systems",
      "systems.title": "Technical families turned into visual pieces.",
      "systems.text": "The infinite ribbon keeps exploration alive: first the family is recognised, then the selected card opens with integration data.",
      "ribbon.nmc": "High density in a compact format.",
      "ribbon.lfp": "Safety, service life and scaling.",
      "ribbon.bms": "Centralised multipack control.",
      "systems.add": "Add to request",
      "systems.docs": "View technical data",
      "apps.eyebrow": "Applications",
      "apps.title": "Six scenarios, one decision architecture.",
      "apps.busTitle": "Buses",
      "apps.busText": "Multi-rack architectures for urban and intercity platforms.",
      "apps.seaTitle": "Marine",
      "apps.seaText": "Parallel systems for hybrid and electric environments.",
      "apps.agrTitle": "Agricultural",
      "apps.agrText": "Robust energy for demanding machinery.",
      "apps.vclTitle": "LCV",
      "apps.vclText": "Integration for short and medium production runs.",
      "apps.chargeTitle": "Mobile charging",
      "apps.chargeText": "Temporary or semi-stationary energy support.",
      "apps.railTitle": "Rail",
      "apps.railText": "Multipack scaling for high energy needs.",
      "method.eyebrow": "Method",
      "method.title": "A process reimagined as three levels of technical maturity.",
      "method.oneTitle": "Fit",
      "method.oneText": "Application, voltage, energy, envelope, volume and schedule.",
      "method.twoTitle": "Integration",
      "method.twoText": "Mechanics, communications, thermal profile, multipack architecture and documentation.",
      "method.threeTitle": "Activation",
      "method.threeText": "Commissioning, training, initial support and configuration tuning.",
      "docs.eyebrow": "Technical data",
      "docs.title": "Documentation presented as a decision panel.",
      "docs.text": "Instead of scattering information, this reimagined version groups what a technical team needs to request or review: envelope, communications, voltage, manuals and commissioning.",
      "docs.cad": "Envelope and mounting",
      "docs.can": "Communication",
      "docs.hv": "Electrical architecture",
      "docs.ops": "Manual and start-up",
      "contact.eyebrow": "Technical request",
      "contact.title": "Turn the visit into a useful request for sales and engineering.",
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
      "footer.text": "Visual reimagination for high voltage battery systems."
    },
    eu: {
      "brand.claim": "High Voltage Lab",
      "nav.map": "Orbita mapa",
      "nav.contact": "Kontaktua",
      "opening.eyebrow": "Berrirudikatze industriala",
      "opening.title": "Sistema arkitektura elektriko bizi gisa aurkezten duen webgunea.",
      "opening.text": "Hirugarren bertsioak nabigazioa orbita mapa bihurtzen du, zarata komertziala murrizten du eta produktuak, aplikazioak, metodoa eta datuak esperientzia gogoangarriago batean antolatzen ditu.",
      "orbit.core": "Sistema bizia",
      "orbit.systems": "Sistemak",
      "orbit.systemsText": "Packak, kontrola eta energia.",
      "orbit.apps": "Aplikazioak",
      "orbit.appsText": "Sektore elektrifikatuak.",
      "orbit.method": "Metodoa",
      "orbit.methodText": "Bideragarritasuna eta integrazioa.",
      "orbit.docs": "Datuak",
      "orbit.docsText": "CAD, CAN eta HV.",
      "orbit.contact": "Kontaktua",
      "orbit.contactText": "Kontsulta kualifikatua.",
      "hero.eyebrow": "Tentsio altuko bateriak",
      "hero.title": "Packetik ekosistemara: energia, kontrola eta laguntza irakurketa bakarrean.",
      "hero.text": "Aplikazio zorrotzetan tentsio altuko bateria sistemak integratu behar dituzten OEM eta fabrikatzaileentzat egindako proposamena.",
      "metric.energy": "Energia pack bakoitzeko",
      "metric.voltage": "Tarte nominala",
      "metric.protection": "Babesa",
      "systems.eyebrow": "Sistemak",
      "systems.title": "Familia teknikoak pieza bisual bihurtuta.",
      "systems.text": "Zinta infinituak esplorazioa bizirik mantentzen du: lehenik familia identifikatzen da, gero fitxa teknikoa irekitzen da.",
      "ribbon.nmc": "Dentsitate handia formatu trinkoan.",
      "ribbon.lfp": "Segurtasuna, bizi erabilgarria eta eskalatzea.",
      "ribbon.bms": "Multipack kontrol zentralizatua.",
      "systems.add": "Kontsultan sartu",
      "systems.docs": "Datu teknikoak ikusi",
      "apps.eyebrow": "Aplikazioak",
      "apps.title": "Sei egoera, erabaki arkitektura bera.",
      "apps.busTitle": "Autobusak",
      "apps.busText": "Hiri eta hiriarteko plataformetarako multi-rack arkitekturak.",
      "apps.seaTitle": "Itsasoa",
      "apps.seaText": "Ingurune hibrido eta elektrikoetarako sistema paralelizagarriak.",
      "apps.agrTitle": "Nekazaritza",
      "apps.agrText": "Makineria zorrotzerako energia sendoa.",
      "apps.vclTitle": "VCL",
      "apps.vclText": "Serie labur eta ertainetarako integrazioa.",
      "apps.chargeTitle": "Karga mugikorra",
      "apps.chargeText": "Aldi baterako edo erdi-estazionarioko energia laguntza.",
      "apps.railTitle": "Trena",
      "apps.railText": "Energia premia handietarako multipack eskalatzea.",
      "method.eyebrow": "Metodoa",
      "method.title": "Prozesua hiru heldutasun tekniko mailatan berrirudikatuta.",
      "method.oneTitle": "Egokitzapena",
      "method.oneText": "Aplikazioa, tentsioa, energia, ingurua, bolumena eta egutegia.",
      "method.twoTitle": "Integrazioa",
      "method.twoText": "Mekanika, komunikazioak, termika, multipack arkitektura eta dokumentazioa.",
      "method.threeTitle": "Aktibazioa",
      "method.threeText": "Martxan jartzea, prestakuntza, hasierako laguntza eta konfigurazio doikuntza.",
      "docs.eyebrow": "Datu teknikoak",
      "docs.title": "Dokumentazioa erabaki panel gisa aurkeztuta.",
      "docs.text": "Informazioa sakabanatu ordez, bertsio honek talde teknikoak eskatu edo berrikusi behar duena biltzen du: ingurua, komunikazioak, tentsioa, eskuliburuak eta abiaraztea.",
      "docs.cad": "Ingurua eta muntaketa",
      "docs.can": "Komunikazioa",
      "docs.hv": "Arkitektura elektrikoa",
      "docs.ops": "Eskuliburua eta abiaraztea",
      "contact.eyebrow": "Kontsulta teknikoa",
      "contact.title": "Bisita salmenta eta ingeniaritzarako eskaera erabilgarri bihurtu.",
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
      "form.submit": "Kontsulta bidali",
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
      "option.compare": "Alternatibak alderatu",
      "option.quote": "Hasierako aurrekontua",
      "option.design": "Integrazio diseinua",
      "option.validation": "Balidazio teknikoa",
      "option.purchase": "Erosketa edo industrializazioa",
      "option.prototype": "Prototipoa",
      "option.short": "Serie laburra",
      "option.medium": "Serie ertaina",
      "option.open": "Zehazteko",
      "footer.text": "Tentsio altuko bateria sistemetarako berrirudikatze bisuala."
    },
    fr: {
      "brand.claim": "High Voltage Lab",
      "nav.map": "Carte orbitale",
      "nav.contact": "Contact",
      "opening.eyebrow": "Reimagination industrielle",
      "opening.title": "Un site qui presente le systeme comme une architecture electrique vivante.",
      "opening.text": "La troisieme version transforme la navigation en carte orbitale, reduit le bruit commercial et rend les produits, applications, methode et donnees plus memorables.",
      "orbit.core": "Systeme vivant",
      "orbit.systems": "Systemes",
      "orbit.systemsText": "Packs, controle et energie.",
      "orbit.apps": "Applications",
      "orbit.appsText": "Secteurs electrifies.",
      "orbit.method": "Methode",
      "orbit.methodText": "Faisabilite et integration.",
      "orbit.docs": "Donnees",
      "orbit.docsText": "CAD, CAN et HV.",
      "orbit.contact": "Contact",
      "orbit.contactText": "Demande qualifiee.",
      "hero.eyebrow": "Batteries haute tension",
      "hero.title": "Du pack a l'ecosysteme: energie, controle et support en une seule lecture.",
      "hero.text": "Une proposition pour les OEM et fabricants qui doivent integrer des systemes de batterie haute tension dans des applications exigeantes avec moins de friction technique.",
      "metric.energy": "Energie par pack",
      "metric.voltage": "Plage nominale",
      "metric.protection": "Protection",
      "systems.eyebrow": "Systemes",
      "systems.title": "Familles techniques transformees en pieces visuelles.",
      "systems.text": "Le ruban infini maintient l'exploration active: la famille est reconnue, puis la fiche concrete s'ouvre avec les donnees d'integration.",
      "ribbon.nmc": "Haute densite en format compact.",
      "ribbon.lfp": "Securite, duree de vie et evolution.",
      "ribbon.bms": "Controle multipack centralise.",
      "systems.add": "Ajouter a la demande",
      "systems.docs": "Voir donnees techniques",
      "apps.eyebrow": "Applications",
      "apps.title": "Six scenarios, une meme architecture de decision.",
      "apps.busTitle": "Bus",
      "apps.busText": "Architectures multi-rack pour urbain et interurbain.",
      "apps.seaTitle": "Maritime",
      "apps.seaText": "Systemes parallelisables pour environnements hybrides et electriques.",
      "apps.agrTitle": "Agricole",
      "apps.agrText": "Energie robuste pour machines exigeantes.",
      "apps.vclTitle": "VCL",
      "apps.vclText": "Integration pour petites et moyennes series.",
      "apps.chargeTitle": "Recharge mobile",
      "apps.chargeText": "Support energetique temporaire ou semi-stationnaire.",
      "apps.railTitle": "Ferroviaire",
      "apps.railText": "Evolution multipack pour grands besoins energetiques.",
      "method.eyebrow": "Methode",
      "method.title": "Un processus reimagine en trois niveaux de maturite technique.",
      "method.oneTitle": "Adequation",
      "method.oneText": "Application, tension, energie, enveloppe, volume et calendrier.",
      "method.twoTitle": "Integration",
      "method.twoText": "Mecanique, communications, thermique, architecture multipack et documentation.",
      "method.threeTitle": "Activation",
      "method.threeText": "Mise en service, formation, support initial et ajustement de configuration.",
      "docs.eyebrow": "Donnees techniques",
      "docs.title": "Documentation presentee comme panneau de decision.",
      "docs.text": "Au lieu de disperser l'information, cette version regroupe ce qu'une equipe technique doit demander ou verifier: enveloppe, communications, tension, manuels et mise en service.",
      "docs.cad": "Enveloppe et montage",
      "docs.can": "Communication",
      "docs.hv": "Architecture electrique",
      "docs.ops": "Manuel et demarrage",
      "contact.eyebrow": "Demande technique",
      "contact.title": "Transformer la visite en demande utile pour ventes et ingenierie.",
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
      "form.select": "Selectionner une option",
      "form.optional": "Optionnel",
      "option.bus": "Bus",
      "option.sea": "Maritime",
      "option.agr": "Agricole",
      "option.vcl": "Vehicules utilitaires legers",
      "option.charge": "Recharge mobile",
      "option.rail": "Ferroviaire",
      "option.unknown": "A definir",
      "option.system": "Systeme complet",
      "option.compare": "Comparer alternatives",
      "option.quote": "Devis initial",
      "option.design": "Conception d'integration",
      "option.validation": "Validation technique",
      "option.purchase": "Achat ou industrialisation",
      "option.prototype": "Prototype",
      "option.short": "Petite serie",
      "option.medium": "Serie moyenne",
      "option.open": "A definir",
      "footer.text": "Reimagination visuelle pour systemes de batteries haute tension."
    }
  };

  var products = {
    es: {
      nmc: {
        tag: "Series NMC",
        title: "Pack compacto de alta densidad energetica",
        summary: "Solucion para aplicaciones con restricciones de espacio, montaje versatil y necesidad de energia en formato slim.",
        specs: [["35-56 kWh", "Energia"], ["333-666 V", "Tension"], ["IP67", "Proteccion"], ["CAN", "Comunicacion"]]
      },
      lfp: {
        tag: "Series LFP",
        title: "Pack orientado a seguridad, durabilidad y escalado",
        summary: "Familia para aplicaciones donde la vida util, la estabilidad termica y la industrializacion por volumen tienen prioridad.",
        specs: [["38-60 kWh", "Energia"], ["384-768 V", "Tension"], ["LFP", "Quimica"], ["Multi", "Escalado"]]
      },
      bms: {
        tag: "Supermaster BMS",
        title: "Control centralizado para arquitecturas multipack",
        summary: "Supervision de varios packs, gestion de seguridad, comunicacion del sistema y soporte para configuraciones complejas.",
        specs: [["CAN", "Bus"], ["HVIL", "Seguridad"], ["SOC/SOH", "Estado"], ["Multi", "Packs"]]
      }
    },
    en: {
      nmc: {
        tag: "NMC Series",
        title: "Compact pack with high energy density",
        summary: "Solution for space-constrained applications with versatile mounting and energy needs in a slim format.",
        specs: [["35-56 kWh", "Energy"], ["333-666 V", "Voltage"], ["IP67", "Protection"], ["CAN", "Communication"]]
      },
      lfp: {
        tag: "LFP Series",
        title: "Pack focused on safety, durability and scaling",
        summary: "Family for applications where service life, thermal stability and volume industrialisation are key.",
        specs: [["38-60 kWh", "Energy"], ["384-768 V", "Voltage"], ["LFP", "Chemistry"], ["Multi", "Scaling"]]
      },
      bms: {
        tag: "Supermaster BMS",
        title: "Centralised control for multipack architectures",
        summary: "Supervision of multiple packs, safety management, system communication and support for complex configurations.",
        specs: [["CAN", "Bus"], ["HVIL", "Safety"], ["SOC/SOH", "State"], ["Multi", "Packs"]]
      }
    },
    eu: {
      nmc: {
        tag: "NMC serieak",
        title: "Energia dentsitate handiko pack trinkoa",
        summary: "Espazio mugatuetarako, muntaketa moldakorretarako eta formatu meheko energia beharretarako irtenbidea.",
        specs: [["35-56 kWh", "Energia"], ["333-666 V", "Tentsioa"], ["IP67", "Babesa"], ["CAN", "Komunikazioa"]]
      },
      lfp: {
        tag: "LFP serieak",
        title: "Segurtasuna, iraupena eta eskalatzea lehenesten dituen packa",
        summary: "Bizi erabilgarria, egonkortasun termikoa eta bolumeneko industrializazioa garrantzitsuak diren aplikazioetarako familia.",
        specs: [["38-60 kWh", "Energia"], ["384-768 V", "Tentsioa"], ["LFP", "Kimika"], ["Multi", "Eskalatzea"]]
      },
      bms: {
        tag: "Supermaster BMS",
        title: "Multipack arkituretarako kontrol zentralizatua",
        summary: "Pack anitzen gainbegiratzea, segurtasun kudeaketa, sistemaren komunikazioa eta konfigurazio konplexuentzako euskarria.",
        specs: [["CAN", "Bus"], ["HVIL", "Segurtasuna"], ["SOC/SOH", "Egoera"], ["Multi", "Packak"]]
      }
    },
    fr: {
      nmc: {
        tag: "Series NMC",
        title: "Pack compact a haute densite energetique",
        summary: "Solution pour applications avec contraintes d'espace, montage polyvalent et besoin d'energie en format slim.",
        specs: [["35-56 kWh", "Energie"], ["333-666 V", "Tension"], ["IP67", "Protection"], ["CAN", "Communication"]]
      },
      lfp: {
        tag: "Series LFP",
        title: "Pack oriente securite, duree de vie et evolution",
        summary: "Famille pour applications ou la duree de vie, la stabilite thermique et l'industrialisation par volume sont prioritaires.",
        specs: [["38-60 kWh", "Energie"], ["384-768 V", "Tension"], ["LFP", "Chimie"], ["Multi", "Evolution"]]
      },
      bms: {
        tag: "Supermaster BMS",
        title: "Controle centralise pour architectures multipack",
        summary: "Supervision de plusieurs packs, gestion de securite, communication systeme et support pour configurations complexes.",
        specs: [["CAN", "Bus"], ["HVIL", "Securite"], ["SOC/SOH", "Etat"], ["Multi", "Packs"]]
      }
    }
  };

  var currentLanguage = "es";
  var currentProduct = "nmc";
  var allowed = {
    application: ["bus", "sea", "agr", "vcl", "charge", "rail", "unknown"],
    product: ["nmc", "lfp", "bms", "system", "compare"],
    stage: ["quote", "design", "validation", "purchase"],
    volume: ["", "prototype", "short", "medium", "open"]
  };

  var menuButton = document.querySelector(".menu-toggle");
  var mainNav = document.querySelector(".main-nav");
  var mapButton = document.querySelector(".map-button");
  var miniMap = document.querySelector(".mini-map");
  var languageButton = document.querySelector(".language-button");
  var languageMenu = document.querySelector(".language-menu");
  var currentLangLabel = document.querySelector(".current-lang");
  var orbitMap = document.querySelector(".orbit-map");
  var orbitNodes = Array.prototype.slice.call(document.querySelectorAll(".orbit-node"));
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
  var scrollTopButton = document.querySelector(".scroll-top");

  function text(key) {
    return (copy[currentLanguage] && copy[currentLanguage][key]) || copy.es[key] || "";
  }

  function getProductData(productKey) {
    return (products[currentLanguage] && products[currentLanguage][productKey]) || products.es[productKey] || products.es.nmc;
  }

  function setExpanded(button, expanded) {
    if (button) {
      button.setAttribute("aria-expanded", expanded ? "true" : "false");
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
      return;
    }
    currentLanguage = language;
    document.documentElement.lang = language;
    if (currentLangLabel) {
      currentLangLabel.textContent = language.toUpperCase();
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (node) {
      var value = text(node.getAttribute("data-i18n"));
      if (value) {
        node.textContent = value;
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-placeholder]"), function (node) {
      var value = text(node.getAttribute("data-i18n-placeholder"));
      if (value) {
        node.setAttribute("placeholder", value);
      }
    });
    renderProduct(currentProduct);
    closePanels();
  }

  function clearNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function renderProduct(productKey) {
    var data = getProductData(productKey);
    currentProduct = productKey;
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

  function setupRibbon() {
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

  function animateOrbit(container, nodes, options) {
    if (!container || nodes.length === 0) {
      return;
    }
    var paused = false;
    var start = window.performance.now();
    var speed = options.speed;
    var offset = options.offset;

    function frame(now) {
      if (!paused) {
        var rect = container.getBoundingClientRect();
        var radiusX = Math.max(options.minX, rect.width * options.xFactor);
        var radiusY = Math.max(options.minY, rect.height * options.yFactor);
        var rotation = (now - start) * speed;
        nodes.forEach(function (node, index) {
          var angle = rotation + offset + (Math.PI * 2 * index / nodes.length);
          var x = Math.cos(angle) * radiusX;
          var y = Math.sin(angle) * radiusY;
          node.style.setProperty("--x", x.toFixed(2) + "px");
          node.style.setProperty("--y", y.toFixed(2) + "px");
        });
      } else {
        start += 16;
      }
      window.requestAnimationFrame(frame);
    }

    nodes.forEach(function (node) {
      node.addEventListener("mouseenter", function () { paused = true; });
      node.addEventListener("focus", function () { paused = true; });
      node.addEventListener("mouseleave", function () { paused = false; });
      node.addEventListener("blur", function () { paused = false; });
    });
    window.requestAnimationFrame(frame);
  }

  function normalizeValue(field) {
    if (!field || typeof field.value !== "string") {
      return "";
    }
    return field.value.replace(/\s+/g, " ").trim();
  }

  function validateText(field, min, max, required) {
    var value = normalizeValue(field);
    var safeText = /^[A-Za-z0-9\u00C0-\u024F .,'&()\/+-]*$/;
    if (!required && value.length === 0) {
      field.setCustomValidity("");
      return true;
    }
    if (value.length < min) {
      field.setCustomValidity("Completa este campo con mas detalle.");
      return false;
    }
    if (value.length > max || !safeText.test(value)) {
      field.setCustomValidity("El contenido incluye caracteres no contemplados.");
      return false;
    }
    field.value = value;
    field.setCustomValidity("");
    return true;
  }

  function validateEmail(field) {
    var value = normalizeValue(field).toLowerCase();
    var emailPattern = /^[^\s@<>()[\]{}"'`]+@[^\s@<>()[\]{}"'`]+\.[^\s@<>()[\]{}"'`]{2,}$/;
    if (!emailPattern.test(value) || value.length > 160) {
      field.setCustomValidity("Introduce un correo profesional valido.");
      return false;
    }
    field.value = value;
    field.setCustomValidity("");
    return true;
  }

  function validateSelect(field, allowedValues, required) {
    var value = field ? field.value : "";
    if (required && value === "") {
      field.setCustomValidity("Selecciona una opcion.");
      return false;
    }
    if (allowedValues.indexOf(value) === -1) {
      field.setCustomValidity("La opcion seleccionada no esta contemplada.");
      return false;
    }
    field.setCustomValidity("");
    return true;
  }

  function validateMessage(field) {
    var value = normalizeValue(field);
    var safeMessage = /^[A-Za-z0-9\u00C0-\u024F .,;:!?%&()\/+\-\n\r]*$/;
    if (value.length > 1400 || !safeMessage.test(value)) {
      field.setCustomValidity("La necesidad tecnica incluye caracteres no contemplados.");
      return false;
    }
    field.value = value;
    field.setCustomValidity("");
    return true;
  }

  function validateForm(form) {
    var valid = true;
    var website = form.elements.website;
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
      form.elements.privacy.setCustomValidity("Debes aceptar el tratamiento de datos para enviar la consulta.");
      valid = false;
    } else {
      form.elements.privacy.setCustomValidity("");
    }
    return valid;
  }

  function bindForm() {
    if (!leadForm) {
      return;
    }
    Array.prototype.forEach.call(leadForm.elements, function (field) {
      field.addEventListener("input", function () {
        field.setCustomValidity("");
        if (feedback) {
          feedback.textContent = "";
        }
      });
      field.addEventListener("change", function () {
        field.setCustomValidity("");
      });
    });
    leadForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validateForm(leadForm)) {
        if (feedback) {
          feedback.textContent = "Revisa los campos marcados antes de enviar.";
        }
        leadForm.reportValidity();
        return;
      }
      if (feedback) {
        feedback.textContent = "Consulta validada. En una integracion real se enviaria al equipo tecnico-comercial.";
      }
      leadForm.reset();
    });
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
    Array.prototype.forEach.call(document.querySelectorAll(".main-nav a, .mini-node, .orbit-node"), function (link) {
      link.addEventListener("click", function () {
        if (mainNav) {
          mainNav.classList.remove("is-open");
          setExpanded(menuButton, false);
        }
        closePanels();
      });
    });
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (!target.closest(".map-widget") && !target.closest(".language-widget")) {
        closePanels();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (mainNav) {
          mainNav.classList.remove("is-open");
          setExpanded(menuButton, false);
        }
        closePanels();
      }
    });
  }

  function bindProducts() {
    setupRibbon();
    consoleTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        renderProduct(tab.getAttribute("data-product"));
      });
    });
    if (addProductButton && leadForm) {
      addProductButton.addEventListener("click", function () {
        if (leadForm.elements.product && allowed.product.indexOf(currentProduct) !== -1) {
          leadForm.elements.product.value = currentProduct;
        }
        if (feedback) {
          feedback.textContent = "Sistema incorporado a la consulta.";
        }
        leadForm.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function bindScrollTop() {
    if (!scrollTopButton) {
      return;
    }
    function updateVisibility() {
      scrollTopButton.classList.toggle("is-visible", window.scrollY > 520);
    }
    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
  }

  bindNavigation();
  bindProducts();
  bindForm();
  bindScrollTop();
  applyLanguage("es");
  animateOrbit(orbitMap, orbitNodes, { speed: 0.00026, offset: -0.4, xFactor: 0.33, yFactor: 0.28, minX: 190, minY: 150 });
  animateOrbit(miniMap, miniNodes, { speed: 0.00045, offset: 0.3, xFactor: 0.33, yFactor: 0.25, minX: 130, minY: 70 });
}());
