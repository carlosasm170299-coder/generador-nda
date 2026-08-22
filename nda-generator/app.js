/* =========================================================================
   Generador de NDA y Contratos B2B — app.js
   100% client-side. Sin dependencias de backend.
   ========================================================================= */

/* ---------------------------------------------------------------------
   1) i18n DICTIONARY
   --------------------------------------------------------------------- */
const LANGS = {
  es: { code: 'es', label: 'Español', short: 'ES' },
  en: { code: 'en', label: 'English', short: 'EN' },
  pt: { code: 'pt', label: 'Português', short: 'PT' },
  fr: { code: 'fr', label: 'Français', short: 'FR' },
  ru: { code: 'ru', label: 'Русский', short: 'RU' },
  zh: { code: 'zh', label: '中文', short: 'ZH' },
  ja: { code: 'ja', label: '日本語', short: 'JA' },
  hi: { code: 'hi', label: 'हिन्दी', short: 'HI' },
};

const I18N = {
  es: {
    meta_title: "Generador de NDA y Contratos B2B Gratis Online | Plantillas PDF",
    meta_description: "Genera y descarga en PDF tu Acuerdo de Confidencialidad (NDA) unilateral, bilateral o Contrato de Prestación de Servicios B2B en minutos. Gratis, sin registro.",
    brand_name: "NDAgen",
    nav_tool: "Generador",
    nav_guide: "Guía Legal",
    nav_faq: "FAQ",
    ad_label: "Publicidad",
    ad_native: "Bloque nativo",
    hero_badge: "100% Gratis · Sin registro · Descarga instantánea",
    hero_title: "Generador de Acuerdos de Confidencialidad (NDA) y Contratos B2B",
    hero_subtitle: "Crea, previsualiza y descarga en PDF tu NDA o contrato de servicios profesional en menos de 3 minutos.",
    tpl_unilateral_title: "NDA Unilateral",
    tpl_unilateral_desc: "Una parte revela información, la otra la protege.",
    tpl_mutual_title: "NDA Bilateral (Mutuo)",
    tpl_mutual_desc: "Ambas partes comparten y protegen información.",
    tpl_b2b_title: "Contrato B2B de Servicios",
    tpl_b2b_desc: "Prestación de servicios entre empresas.",
    tpl_unilateral_short: "Unilateral",
    tpl_mutual_short: "Bilateral",
    tpl_b2b_short: "B2B",
    btn_view_document: "Ver Documento",
    step1_label: "Partes",
    step2_label: "Objeto",
    step3_label: "Duración",
    step4_label: "Revisar",
    party_a_legend: "Parte Emisora / Divulgante",
    party_a_legend_mutual: "Primera Parte",
    party_a_legend_b2b: "Prestador del Servicio",
    party_b_legend: "Parte Receptora",
    party_b_legend_mutual: "Segunda Parte",
    party_b_legend_b2b: "Cliente / Contratante",
    label_name: "Nombre / Empresa",
    label_taxid: "Identificación fiscal / ID",
    label_address: "Domicilio",
    ph_name: "Ej. Acme Corp S.L.",
    ph_taxid: "Ej. B-12345678",
    ph_address: "Ej. Calle Mayor 10, Madrid, España",
    label_object: "Objeto y propósito de la información confidencial",
    label_object_b2b: "Objeto y alcance del servicio prestado",
    ph_object: "Ej. Evaluación de una posible alianza comercial para el desarrollo conjunto de una plataforma de software...",
    object_hint: "Describe brevemente el motivo por el que se comparte la información (negociación, colaboración, prestación de servicios, etc.).",
    label_duration: "Duración de la obligación",
    label_duration_b2b: "Duración / vigencia del contrato",
    opt_indefinite: "Indefinida",
    label_jurisdiction: "Jurisdicción y legislación aplicable",
    ph_jurisdiction: "Ej. Ciudad de México, México",
    review_hint: "Revisa la vista previa a la derecha. Cuando esté todo correcto, descarga tu documento en PDF o cópialo al portapapeles.",
    btn_pdf: "Descargar en PDF",
    btn_copy: "Copiar texto",
    btn_clear: "Limpiar formulario",
    btn_prev: "← Anterior",
    btn_next: "Siguiente →",
    btn_finish: "Finalizar",
    preview_title: "Vista previa en tiempo real",
    preview_live: "En vivo",
    guide_h2_1: "¿Qué es un Acuerdo de Confidencialidad (NDA)?",
    guide_p_1: "Un Acuerdo de Confidencialidad, o NDA por sus siglas en inglés (Non-Disclosure Agreement), es un contrato legal mediante el cual una o varias partes se comprometen a no revelar, divulgar ni utilizar en beneficio propio la información confidencial compartida durante una negociación, colaboración o relación comercial. Es una herramienta esencial antes de compartir planes de negocio, código fuente, datos financieros, prototipos o cualquier información sensible con terceros.",
    guide_h3_1: "Tipos de NDA: unilateral vs. bilateral",
    guide_p_2: "En un <strong>NDA unilateral</strong>, solo una de las partes (la \"Parte Divulgante\") comparte información confidencial, mientras que la otra (la \"Parte Receptora\") asume la obligación de protegerla. Este modelo es habitual cuando una empresa comparte información con un proveedor, candidato o inversor potencial. En cambio, en un <strong>NDA bilateral o mutuo</strong>, ambas partes se intercambian información confidencial y ambas asumen obligaciones de protección, algo frecuente en fusiones, joint ventures o alianzas estratégicas.",
    guide_h3_2: "Cláusulas indispensables en un NDA",
    guide_p_clauses_intro: "Todo acuerdo de confidencialidad bien redactado debe contemplar, como mínimo, los siguientes elementos:",
    guide_list_clauses: [
      "<strong>Definición de información confidencial:</strong> qué tipo de datos, documentos o conocimientos quedan protegidos por el acuerdo (técnicos, comerciales, financieros, código fuente, etc.).",
      "<strong>Exclusiones:</strong> información que no se considera confidencial por ser pública, ya conocida por la parte receptora o exigida por una autoridad competente.",
      "<strong>Vigencia:</strong> el plazo durante el cual se mantiene la obligación de confidencialidad, que puede ser de 1, 3, 5 años o indefinido según el caso.",
      "<strong>Penalizaciones por incumplimiento:</strong> las consecuencias económicas o legales (indemnización por daños, cláusula penal, medidas cautelares) en caso de que una parte divulgue información sin autorización.",
      "<strong>Jurisdicción y ley aplicable:</strong> el país o ciudad cuyos tribunales y legislación resolverán cualquier disputa derivada del acuerdo."
    ],
    guide_h3_3: "Contratos de Prestación de Servicios B2B",
    guide_p_3: "Un contrato B2B (business-to-business) formaliza la relación entre dos empresas donde una presta servicios a la otra. Además de definir el alcance del servicio y los plazos, suele incorporar cláusulas de confidencialidad para proteger la información que se intercambia durante la colaboración, así como la jurisdicción aplicable en caso de disputa.",
    guide_h3_4: "Consejos para la firma y validez del documento",
    guide_p_tips_intro: "Para que tu NDA o contrato B2B tenga la mayor validez posible, ten en cuenta las siguientes recomendaciones antes de firmarlo:",
    guide_list_tips: [
      "Verifica la identidad y la capacidad legal de las personas que firman en representación de cada empresa.",
      "Firma el documento por duplicado (una copia para cada parte) o utiliza una plataforma de firma electrónica con validez legal en tu país.",
      "Incluye siempre la fecha de firma; es un elemento clave para calcular plazos y determinar la ley aplicable en el tiempo.",
      "Adapta las cláusulas de jurisdicción y penalizaciones a la legislación local antes de utilizar el documento en un litigio.",
      "Conserva una copia firmada y, si es posible, un comprobante de envío o recepción (correo certificado, firma electrónica con sello de tiempo).",
      "Ante información especialmente sensible o contratos de alto valor, solicita la revisión de un abogado especializado antes de firmar."
    ],
    faq_title: "Preguntas Frecuentes",
    faq_q1: "¿Es legalmente vinculante un NDA generado online?",
    faq_a1: "Sí, puede serlo. Un NDA generado con esta herramienta tiene la misma validez que cualquier otro contrato siempre que incluya los elementos esenciales (partes claramente identificadas, objeto lícito y consentimiento) y sea firmado correctamente por ambas partes. Aun así, su aplicabilidad concreta depende de la legislación de tu país, por lo que te recomendamos la revisión de un abogado antes de firmarlo, especialmente en acuerdos de alto valor.",
    faq_q2: "¿Qué diferencia hay entre un NDA unilateral y uno mutuo?",
    faq_a2: "En un NDA unilateral, solo una parte (la divulgante) comparte información confidencial y la otra (la receptora) se obliga a protegerla. En un NDA mutuo o bilateral, ambas partes se intercambian información confidencial entre sí, por lo que ambas asumen simultáneamente el rol de divulgante y de receptora.",
    faq_q3: "¿Cuánto tiempo debe durar la confidencialidad?",
    faq_a3: "No existe una regla única: los plazos más habituales son de 1, 3 o 5 años desde la firma del acuerdo. En sectores especialmente sensibles, como los secretos industriales o el código fuente de software, es común pactar una duración indefinida que se mantenga mientras la información conserve su carácter confidencial.",
    faq_q4: "¿Necesito un abogado para firmarlo?",
    faq_a4: "No es obligatorio, pero sí muy recomendable, en particular cuando el acuerdo protege información de alto valor, tiene una duración larga o formará parte de una negociación compleja. Esta herramienta te permite generar un borrador profesional y completo que después puedes validar con un abogado antes de la firma definitiva.",
    faq_q5: "¿Qué pasa si alguien incumple el acuerdo?",
    faq_a5: "El incumplimiento de un NDA puede dar lugar a una reclamación por los daños y perjuicios causados, a medidas cautelares para detener o impedir una divulgación en curso, y a la aplicación de las penalizaciones específicas que las partes hayan pactado en la cláusula correspondiente. Para hacerlo valer, la parte afectada deberá poder demostrar el incumplimiento y el perjuicio sufrido ante el tribunal competente indicado en la cláusula de jurisdicción.",
    faq_q6: "¿Cómo firmo este documento?",
    faq_a6: "Puedes descargar el PDF generado por la herramienta e imprimirlo para que ambas partes lo firmen de forma manuscrita, idealmente por duplicado. También puedes utilizar una plataforma de firma electrónica reconocida legalmente en tu país. En cualquiera de los dos casos, asegúrate de que quede constancia clara de la fecha de firma y conserva una copia del documento firmado.",
    disclaimer_title: "Aviso legal:",
    disclaimer_text: "Los documentos generados por esta herramienta son plantillas orientativas basadas en cláusulas estándar de uso común en acuerdos de confidencialidad y contratos de prestación de servicios B2B. Se ofrecen exclusivamente con fines informativos y de referencia, y no constituyen asesoramiento legal, fiscal ni de ningún otro tipo, ni crean una relación abogado-cliente entre el usuario y los responsables de esta herramienta. La legislación aplicable a los acuerdos de confidencialidad y contratos comerciales varía significativamente según el país, el estado o la jurisdicción, por lo que estas plantillas pueden requerir adaptaciones para ajustarse a la normativa local antes de su uso. El usuario es el único responsable de revisar, completar y adaptar el contenido generado, así como de verificar su validez y adecuación a su caso particular. Recomendamos encarecidamente la revisión de un profesional del derecho debidamente cualificado antes de firmar o utilizar cualquier documento generado con esta herramienta. En ningún caso los responsables de esta herramienta serán responsables por daños, perjuicios o consecuencias derivadas del uso, mal uso o interpretación de los documentos generados.",
    benefits_title: "¿Por qué usar NDAgen?",
    benefits_subtitle: "La forma más rápida, segura y profesional de proteger tu información confidencial.",
    benefit_1_title: "100% Gratuito y Sin Registro",
    benefit_1_desc: "Genera y descarga tus documentos sin costo alguno, sin crear cuentas ni compartir tu correo electrónico.",
    benefit_2_title: "Privacidad Total (Client-Side)",
    benefit_2_desc: "Todo el procesamiento ocurre en tu propio navegador. Tus datos nunca se envían ni se almacenan en ningún servidor.",
    benefit_3_title: "Validez y Estándar B2B",
    benefit_3_desc: "Cláusulas redactadas siguiendo estándares legales habituales en acuerdos de confidencialidad y contratos B2B internacionales.",
    benefit_4_title: "Modo Bilingüe y Exportación Dual",
    benefit_4_desc: "Crea contratos en dos idiomas en paralelo y expórtalos en PDF o Word con un solo clic.",
    donate_btn_label: "Apoya este Proyecto",
    donate_modal_title: "Apoya este Proyecto",
    donate_modal_desc: "NDAgen es gratuito y no requiere registro. Si esta herramienta te ha sido útil, considera invitarnos un café para ayudarnos a mantenerla.",
    donate_custom_placeholder: "Otro monto",
    donate_thanks_msg: "¡Gracias por tu apoyo! Serás redirigido a la plataforma de pago.",
    donate_btn_confirm: "Continuar",
    footer_rights: "Todos los derechos reservados.",
    footer_note: "Herramienta gratuita · No sustituye asesoría legal profesional.",
    copy_success: "¡Texto copiado al portapapeles!",
    copy_error: "No se pudo copiar el texto.",
    clear_confirm: "¿Seguro que deseas limpiar todo el formulario?",
    pdf_generating: "Generando PDF...",
    btn_docx: "Descargar en Word (.docx)",
    docx_generating: "Generando Word...",
    docx_error: "No se pudo generar el archivo Word. Inténtalo de nuevo.",
    docx_lib_error: "No se pudo cargar el motor de Word. Verifica tu conexión a internet.",

    /* --- Logo --- */
    logo_upload_btn: "Subir logotipo de la empresa (opcional)",
    logo_remove_btn: "Quitar logo",
    logo_error_type: "Formato de imagen no soportado. Usa PNG, JPG o SVG.",

    /* --- Digital signature --- */
    sig_modal_title: "Firma digital",
    sig_tab_draw: "Dibujar",
    sig_tab_upload: "Subir imagen",
    sig_draw_hint: "Dibuja tu firma arriba con el ratón o el dedo.",
    sig_upload_btn: "Elegir imagen (PNG/JPG)",
    sig_upload_hint: "La imagen se ajustará automáticamente al recuadro de firma.",
    sig_btn_clear: "Limpiar firma",
    sig_btn_confirm: "Confirmar firma",
    btn_cancel: "Cancelar",
    sig_add_btn: "Añadir firma",
    sig_edit_btn: "Editar",
    sig_remove_btn: "Quitar",
    sig_slot_prefix: "Firma:",
    sig_error_empty: "Dibuja o sube una imagen antes de confirmar la firma.",

    /* --- Persistence --- */
    btn_save_template: "Guardar mis datos como plantilla",
    btn_load_template: "Cargar mis datos",
    autosave_note: "Tus datos se guardan automáticamente en este navegador.",
    template_saved: "Datos de la Parte Emisora guardados como plantilla.",
    template_loaded: "Plantilla cargada correctamente.",
    template_empty: "Todavía no has guardado ninguna plantilla.",

    /* --- Completion & validation --- */
    completion_label: "Progreso del documento",
    validation_missing: "Completa los campos obligatorios resaltados antes de descargar el documento.",

    /* --- Bilingual mode & custom filename --- */
    bilingual_mode_label: "Modo Bilingüe (Dual Language)",
    bilingual_primary_label: "Idioma Principal",
    bilingual_secondary_label: "Idioma Secundario",
    custom_filename_label: "Nombre personalizado del archivo (opcional)",
    custom_filename_placeholder: "Ej. NDA_AcmeCorp_2026",

    /* --- Legal document strings --- */
    doc_title_nda_unilateral: "ACUERDO DE CONFIDENCIALIDAD UNILATERAL",
    doc_title_nda_mutual: "ACUERDO DE CONFIDENCIALIDAD BILATERAL (MUTUO)",
    doc_title_b2b_services: "CONTRATO DE PRESTACIÓN DE SERVICIOS B2B",
    doc_subtitle: "Documento generado el {date}",
    ph_nameA: "[Nombre de la Parte Emisora]",
    ph_nameB: "[Nombre de la Parte Receptora]",
    ph_id: "[identificación fiscal no especificada]",
    ph_addr: "[domicilio no especificado]",
    ph_purpose: "[propósito no especificado]",
    ph_jur: "[jurisdicción no especificada]",
    role_discloser: "LA PARTE DIVULGANTE",
    role_receiver: "LA PARTE RECEPTORA",
    role_first: "LA PRIMERA PARTE",
    role_second: "LA SEGUNDA PARTE",
    role_provider: "EL PRESTADOR",
    role_client: "EL CLIENTE",
    intro_nda: "Conste por el presente documento el Acuerdo de Confidencialidad (en adelante, el \"Acuerdo\") que celebran, de una parte, {nameA}, identificado(a) con {idA} y domicilio en {addrA} (en adelante, \"{roleA}\"); y de otra parte, {nameB}, identificado(a) con {idB} y domicilio en {addrB} (en adelante, \"{roleB}\"), quienes en conjunto serán denominados \"las Partes\", conforme a las siguientes cláusulas:",
    intro_b2b: "Conste por el presente documento el Contrato de Prestación de Servicios (en adelante, el \"Contrato\") que celebran, de una parte, {nameA}, identificado(a) con {idA} y domicilio en {addrA} (en adelante, \"{roleA}\"); y de otra parte, {nameB}, identificado(a) con {idB} y domicilio en {addrB} (en adelante, \"{roleB}\"), quienes en conjunto serán denominados \"las Partes\", conforme a las siguientes cláusulas:",

    c1_title_nda: "PRIMERA. OBJETO",
    c1_body_nda_uni: "El presente Acuerdo tiene por objeto establecer los términos y condiciones bajo los cuales {roleA} revelará a {roleB} determinada información confidencial en relación con lo siguiente: {purpose}. {roleB} se compromete a utilizar dicha información exclusivamente para dicho fin.",
    c1_body_nda_mutual: "El presente Acuerdo tiene por objeto establecer los términos y condiciones bajo los cuales {roleA} y {roleB} podrán revelarse mutuamente información confidencial en relación con lo siguiente: {purpose}. Cada Parte se compromete a utilizar la información recibida exclusivamente para dicho fin.",
    c1_title_b2b: "PRIMERA. OBJETO DEL CONTRATO",
    c1_body_b2b: "{roleA} se obliga a prestar en favor de {roleB} los servicios descritos a continuación: {purpose}. Los servicios se ejecutarán conforme a los estándares profesionales aplicables al sector y con la diligencia debida.",

    c2_title_nda_uni: "SEGUNDA. OBLIGACIONES DE LA PARTE RECEPTORA",
    c2_body_nda_uni: "{roleB} se obliga a: (i) mantener la información confidencial en estricta reserva; (ii) no divulgarla a terceros sin autorización previa y por escrito de {roleA}; (iii) no utilizarla para fines distintos a los establecidos en la Cláusula Primera; y (iv) adoptar las medidas de seguridad razonables para evitar su divulgación accidental o no autorizada.",
    c2_title_nda_mutual: "SEGUNDA. OBLIGACIONES DE CONFIDENCIALIDAD",
    c2_body_nda_mutual: "Cada Parte, en su calidad de receptora de información, se obliga a: (i) mantener la información confidencial recibida en estricta reserva; (ii) no divulgarla a terceros sin autorización previa y por escrito de la Parte divulgante; (iii) no utilizarla para fines distintos a los establecidos en la Cláusula Primera; y (iv) adoptar las medidas de seguridad razonables para evitar su divulgación accidental o no autorizada.",
    c2_title_b2b: "SEGUNDA. CONFIDENCIALIDAD",
    c2_body_b2b: "Las Partes se obligan a mantener en estricta confidencialidad toda la información técnica, comercial o financiera intercambiada con motivo de la ejecución del presente Contrato, no pudiendo divulgarla a terceros sin autorización previa y por escrito de la otra Parte, salvo requerimiento legal o de autoridad competente.",

    c3_title: "TERCERA. EXCLUSIONES",
    c3_body: "Las obligaciones de confidencialidad no serán aplicables respecto de aquella información que: (a) sea o llegue a ser de dominio público sin culpa de la parte receptora; (b) haya sido lícitamente conocida por la parte receptora con anterioridad a su divulgación; (c) sea recibida lícitamente de un tercero sin restricción de confidencialidad; o (d) deba ser divulgada por mandato legal, judicial o de autoridad competente, previa notificación a la otra Parte cuando ello sea posible.",

    c4_title_nda: "CUARTA. PLAZO Y DURACIÓN",
    c4_body_nda: "Las obligaciones de confidencialidad establecidas en el presente Acuerdo permanecerán vigentes durante {duration} contado(s) a partir de la fecha de firma del presente documento, con independencia de la terminación de cualquier relación comercial entre las Partes.",
    c4_title_b2b: "CUARTA. VIGENCIA Y CONFIDENCIALIDAD",
    c4_body_b2b: "El presente Contrato tendrá una vigencia de {duration} a partir de su firma. Las obligaciones de confidencialidad pactadas en la Cláusula Segunda permanecerán vigentes durante dicho período y con posterioridad a la terminación del Contrato por cualquier causa.",

    c5_title: "QUINTA. DEVOLUCIÓN O DESTRUCCIÓN DE LA INFORMACIÓN",
    c5_body: "A requerimiento de la parte divulgante, o a la terminación del presente Acuerdo, la parte receptora deberá devolver o destruir, según se le indique, todos los documentos, soportes y copias que contengan información confidencial, dejando constancia por escrito de dicha devolución o destrucción.",

    c6_title_nda: "SEXTA. AUSENCIA DE LICENCIA Y RELACIÓN LABORAL",
    c6_body_nda: "Ninguna disposición del presente Acuerdo se interpretará como el otorgamiento de licencia, derecho de propiedad intelectual o industrial, ni como la creación de una relación laboral, societaria o de representación entre las Partes.",
    c6_title_b2b: "QUINTA. NATURALEZA DE LA RELACIÓN",
    c6_body_b2b: "El presente Contrato no genera relación laboral, societaria, de agencia ni de representación entre las Partes. {roleA} actuará como contratista independiente, conservando plena autonomía técnica y administrativa en la ejecución de los servicios.",

    c7_title: "SÉPTIMA. LEY APLICABLE Y JURISDICCIÓN",
    c7_title_b2b: "SEXTA. LEY APLICABLE Y JURISDICCIÓN",
    c7_body: "El presente documento se regirá e interpretará de conformidad con las leyes vigentes en {jurisdiction}. Para la resolución de cualquier controversia derivada de su interpretación o cumplimiento, las Partes se someten a los tribunales competentes de dicha jurisdicción, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.",

    c8_title: "OCTAVA. DISPOSICIONES GENERALES",
    c8_title_b2b: "SÉPTIMA. DISPOSICIONES GENERALES",
    c8_body: "El presente documento constituye el acuerdo íntegro entre las Partes respecto de su objeto, dejando sin efecto cualquier entendimiento previo, verbal o escrito. Cualquier modificación deberá constar por escrito y ser firmada por ambas Partes. Si alguna cláusula fuera declarada nula o inaplicable, ello no afectará la validez de las restantes disposiciones.",

    sign_place_date: "En {jurisdiction}, a la fecha de firma indicada a continuación.",
    sign_label: "Firma",
    sign_name_label: "Nombre y cargo",

    duration_1: "un (1) año",
    duration_3: "tres (3) años",
    duration_5: "cinco (5) años",
    duration_indefinite: "un plazo indefinido, mientras la información conserve su carácter confidencial",

    /* --- Letterhead / signature cards / footer (editorial redesign) --- */
    doc_ref_label: "REF",
    doc_issue_date_label: "Fecha de emisión",
    doc_parties_heading: "Partes intervinientes",
    sign_field_name: "Nombre completo",
    sign_field_role: "Cargo / Rol",
    sign_field_id: "Documento de identidad",
    sign_field_date: "Fecha",
    doc_verified_badge: "Documento electrónico generado y verificado",
    pdf_footer_confidential: "Documento confidencial · Uso exclusivo de las partes firmantes",
    pdf_footer_page_of: "Página {current} de {total}",
  },

  en: {
    meta_title: "Free Online NDA & B2B Contract Generator | PDF Templates",
    meta_description: "Generate and download your Non-Disclosure Agreement (NDA) — unilateral, mutual, or B2B Services Contract — as a PDF in minutes. Free, no signup required.",
    brand_name: "NDAgen",
    nav_tool: "Generator",
    nav_guide: "Legal Guide",
    nav_faq: "FAQ",
    ad_label: "Advertisement",
    ad_native: "Native ad block",
    hero_badge: "100% Free · No signup · Instant download",
    hero_title: "Non-Disclosure Agreement (NDA) & B2B Contract Generator",
    hero_subtitle: "Create, preview, and download your professional NDA or services contract as a PDF in under 3 minutes.",
    tpl_unilateral_title: "Unilateral NDA",
    tpl_unilateral_desc: "One party discloses information, the other protects it.",
    tpl_mutual_title: "Mutual (Bilateral) NDA",
    tpl_mutual_desc: "Both parties share and protect information.",
    tpl_b2b_title: "B2B Services Contract",
    tpl_b2b_desc: "Service provision between companies.",
    tpl_unilateral_short: "Unilateral",
    tpl_mutual_short: "Mutual",
    tpl_b2b_short: "B2B",
    btn_view_document: "View Document",
    step1_label: "Parties",
    step2_label: "Purpose",
    step3_label: "Duration",
    step4_label: "Review",
    party_a_legend: "Disclosing Party",
    party_a_legend_mutual: "First Party",
    party_a_legend_b2b: "Service Provider",
    party_b_legend: "Receiving Party",
    party_b_legend_mutual: "Second Party",
    party_b_legend_b2b: "Client",
    label_name: "Name / Company",
    label_taxid: "Tax ID / Registration Number",
    label_address: "Address",
    ph_name: "E.g. Acme Corp Inc.",
    ph_taxid: "E.g. EIN 12-3456789",
    ph_address: "E.g. 500 Main St, New York, USA",
    label_object: "Purpose of the confidential information",
    label_object_b2b: "Scope and purpose of the service",
    ph_object: "E.g. Evaluation of a potential business partnership for the joint development of a software platform...",
    object_hint: "Briefly describe why the information is being shared (negotiation, collaboration, service provision, etc.).",
    label_duration: "Duration of the obligation",
    label_duration_b2b: "Contract term / duration",
    opt_indefinite: "Indefinite",
    label_jurisdiction: "Jurisdiction and governing law",
    ph_jurisdiction: "E.g. New York, United States",
    review_hint: "Review the live preview on the right. Once everything looks correct, download your document as a PDF or copy it to your clipboard.",
    btn_pdf: "Download PDF",
    btn_copy: "Copy text",
    btn_clear: "Clear form",
    btn_prev: "← Previous",
    btn_next: "Next →",
    btn_finish: "Finish",
    preview_title: "Real-time preview",
    preview_live: "Live",
    guide_h2_1: "What is a Non-Disclosure Agreement (NDA)?",
    guide_p_1: "A Non-Disclosure Agreement (NDA) is a legal contract under which one or more parties agree not to disclose, reveal, or use for their own benefit the confidential information shared during a negotiation, collaboration, or business relationship. It is an essential tool before sharing business plans, source code, financial data, prototypes, or any sensitive information with third parties.",
    guide_h3_1: "Types of NDA: unilateral vs. mutual",
    guide_p_2: "In a <strong>unilateral NDA</strong>, only one party (the \"Disclosing Party\") shares confidential information, while the other (the \"Receiving Party\") assumes the obligation to protect it. This model is common when a company shares information with a vendor, candidate, or potential investor. In a <strong>mutual or bilateral NDA</strong>, both parties exchange confidential information with each other and both take on protection obligations, which is common in mergers, joint ventures, or strategic alliances.",
    guide_h3_2: "Essential clauses in an NDA",
    guide_p_clauses_intro: "A well-drafted confidentiality agreement should include, at a minimum, the following elements:",
    guide_list_clauses: [
      "<strong>Definition of confidential information:</strong> what types of data, documents, or knowledge are protected by the agreement (technical, commercial, financial, source code, etc.).",
      "<strong>Exclusions:</strong> information that is not considered confidential because it is public, already known to the receiving party, or required to be disclosed by a competent authority.",
      "<strong>Term:</strong> the period during which the confidentiality obligation remains in effect, typically 1, 3, or 5 years, or indefinite depending on the case.",
      "<strong>Penalties for breach:</strong> the economic or legal consequences (damages, penalty clauses, injunctive relief) if a party discloses information without authorization.",
      "<strong>Governing law and jurisdiction:</strong> the country or city whose courts and laws will resolve any dispute arising from the agreement."
    ],
    guide_h3_3: "B2B Services Agreements",
    guide_p_3: "A B2B (business-to-business) contract formalizes the relationship between two companies where one provides services to the other. In addition to defining the scope of the service and timelines, it usually incorporates confidentiality clauses to protect information exchanged during the collaboration, as well as the applicable jurisdiction in the event of a dispute.",
    guide_h3_4: "Tips for signing and ensuring the document's validity",
    guide_p_tips_intro: "To give your NDA or B2B contract the strongest possible validity, keep these recommendations in mind before signing:",
    guide_list_tips: [
      "Verify the identity and legal capacity of the individuals signing on behalf of each company.",
      "Sign the document in duplicate (one copy per party) or use an e-signature platform that is legally recognized in your country.",
      "Always include the signature date — it is essential for calculating deadlines and determining the applicable law over time.",
      "Adapt the jurisdiction and penalty clauses to local law before relying on the document in a dispute.",
      "Keep a signed copy and, if possible, proof of delivery or receipt (certified mail, timestamped e-signature).",
      "For especially sensitive information or high-value contracts, have a qualified lawyer review the document before signing."
    ],
    faq_title: "Frequently Asked Questions",
    faq_q1: "Is an NDA generated online legally binding?",
    faq_a1: "Yes, it can be. An NDA generated with this tool has the same validity as any other contract as long as it includes the essential elements (clearly identified parties, a lawful purpose, and consent) and is properly signed by both parties. That said, its specific enforceability depends on your country's laws, so we recommend having a lawyer review it before signing, especially for high-value agreements.",
    faq_q2: "What is the difference between a unilateral and a mutual NDA?",
    faq_a2: "In a unilateral NDA, only one party (the discloser) shares confidential information and the other (the receiver) agrees to protect it. In a mutual or bilateral NDA, both parties exchange confidential information with each other, so both simultaneously act as discloser and receiver.",
    faq_q3: "How long should confidentiality last?",
    faq_a3: "There is no single rule: the most common terms are 1, 3, or 5 years from signing. In especially sensitive sectors, such as industrial trade secrets or software source code, it is common to agree on an indefinite term that lasts for as long as the information remains confidential.",
    faq_q4: "Do I need a lawyer to sign it?",
    faq_a4: "It's not mandatory, but it is highly recommended, particularly when the agreement protects high-value information, has a long duration, or is part of a complex negotiation. This tool lets you generate a complete, professional draft that you can then have validated by a lawyer before final signature.",
    faq_q5: "What happens if someone breaches the agreement?",
    faq_a5: "Breaching an NDA can lead to a claim for damages, injunctive relief to stop or prevent an ongoing disclosure, and the application of any specific penalties the parties agreed to in the relevant clause. To enforce it, the affected party must be able to prove the breach and the harm suffered before the competent court named in the jurisdiction clause.",
    faq_q6: "How do I sign this document?",
    faq_a6: "You can download the PDF generated by the tool and print it for both parties to sign by hand, ideally in duplicate. You can also use an e-signature platform that is legally recognized in your country. Either way, make sure the signature date is clearly recorded and keep a copy of the signed document.",
    disclaimer_title: "Legal notice:",
    disclaimer_text: "The documents generated by this tool are template drafts based on standard clauses commonly used in non-disclosure agreements and B2B services contracts. They are provided for informational and reference purposes only, and do not constitute legal, tax, or any other form of professional advice, nor do they create an attorney-client relationship between the user and the operators of this tool. The laws applicable to confidentiality agreements and commercial contracts vary significantly by country, state, or jurisdiction, so these templates may need to be adapted to comply with local regulations before use. The user is solely responsible for reviewing, completing, and adapting the generated content, as well as for verifying its validity and suitability for their specific case. We strongly recommend having a duly qualified legal professional review any document generated with this tool before signing or using it. Under no circumstances shall the operators of this tool be liable for any damages, losses, or consequences arising from the use, misuse, or interpretation of the generated documents.",
    benefits_title: "Why use NDAgen?",
    benefits_subtitle: "The fastest, safest, and most professional way to protect your confidential information.",
    benefit_1_title: "100% Free & No Sign-Up",
    benefit_1_desc: "Generate and download your documents at no cost, without creating an account or sharing your email.",
    benefit_2_title: "Total Privacy (Client-Side)",
    benefit_2_desc: "All processing happens right in your browser. Your data is never sent to or stored on any server.",
    benefit_3_title: "B2B Standard & Legal Validity",
    benefit_3_desc: "Clauses drafted following legal standards commonly used in international confidentiality and B2B agreements.",
    benefit_4_title: "Bilingual Mode & Dual Export",
    benefit_4_desc: "Create contracts in two languages side by side and export them to PDF or Word in a single click.",
    donate_btn_label: "Support this Project",
    donate_modal_title: "Support this Project",
    donate_modal_desc: "NDAgen is free and requires no sign-up. If this tool has been useful to you, consider buying us a coffee to help keep it running.",
    donate_custom_placeholder: "Other amount",
    donate_thanks_msg: "Thank you for your support! You'll be redirected to the payment platform.",
    donate_btn_confirm: "Continue",
    footer_rights: "All rights reserved.",
    footer_note: "Free tool · Does not replace professional legal advice.",
    copy_success: "Text copied to clipboard!",
    copy_error: "Could not copy the text.",
    clear_confirm: "Are you sure you want to clear the entire form?",
    pdf_generating: "Generating PDF...",
    btn_docx: "Download Word (.docx)",
    docx_generating: "Generating Word...",
    docx_error: "Could not generate the Word file. Please try again.",
    docx_lib_error: "Could not load the Word export engine. Check your internet connection.",

    /* --- Logo --- */
    logo_upload_btn: "Upload company logo (optional)",
    logo_remove_btn: "Remove logo",
    logo_error_type: "Unsupported image format. Use PNG, JPG, or SVG.",

    /* --- Digital signature --- */
    sig_modal_title: "Digital signature",
    sig_tab_draw: "Draw",
    sig_tab_upload: "Upload image",
    sig_draw_hint: "Draw your signature above with your mouse or finger.",
    sig_upload_btn: "Choose image (PNG/JPG)",
    sig_upload_hint: "The image will be automatically fitted to the signature box.",
    sig_btn_clear: "Clear signature",
    sig_btn_confirm: "Confirm signature",
    btn_cancel: "Cancel",
    sig_add_btn: "Add signature",
    sig_edit_btn: "Edit",
    sig_remove_btn: "Remove",
    sig_slot_prefix: "Signature:",
    sig_error_empty: "Draw or upload an image before confirming the signature.",

    /* --- Persistence --- */
    btn_save_template: "Save my info as a template",
    btn_load_template: "Load my info",
    autosave_note: "Your data is saved automatically in this browser.",
    template_saved: "Disclosing Party info saved as a template.",
    template_loaded: "Template loaded successfully.",
    template_empty: "You haven't saved a template yet.",

    /* --- Completion & validation --- */
    completion_label: "Document progress",
    validation_missing: "Fill in the highlighted required fields before downloading the document.",

    /* --- Bilingual mode & custom filename --- */
    bilingual_mode_label: "Bilingual Mode (Dual Language)",
    bilingual_primary_label: "Primary Language",
    bilingual_secondary_label: "Secondary Language",
    custom_filename_label: "Custom file name (optional)",
    custom_filename_placeholder: "E.g. NDA_AcmeCorp_2026",

    doc_title_nda_unilateral: "UNILATERAL NON-DISCLOSURE AGREEMENT",
    doc_title_nda_mutual: "MUTUAL (BILATERAL) NON-DISCLOSURE AGREEMENT",
    doc_title_b2b_services: "B2B SERVICES AGREEMENT",
    doc_subtitle: "Document generated on {date}",
    ph_nameA: "[Disclosing Party name]",
    ph_nameB: "[Receiving Party name]",
    ph_id: "[tax ID not specified]",
    ph_addr: "[address not specified]",
    ph_purpose: "[purpose not specified]",
    ph_jur: "[jurisdiction not specified]",
    role_discloser: "THE DISCLOSING PARTY",
    role_receiver: "THE RECEIVING PARTY",
    role_first: "THE FIRST PARTY",
    role_second: "THE SECOND PARTY",
    role_provider: "THE PROVIDER",
    role_client: "THE CLIENT",
    intro_nda: "This Non-Disclosure Agreement (the \"Agreement\") is entered into by and between {nameA}, identified with {idA} and domiciled at {addrA} (hereinafter, \"{roleA}\"); and {nameB}, identified with {idB} and domiciled at {addrB} (hereinafter, \"{roleB}\"), collectively referred to as the \"Parties\", under the following terms:",
    intro_b2b: "This Services Agreement (the \"Agreement\") is entered into by and between {nameA}, identified with {idA} and domiciled at {addrA} (hereinafter, \"{roleA}\"); and {nameB}, identified with {idB} and domiciled at {addrB} (hereinafter, \"{roleB}\"), collectively referred to as the \"Parties\", under the following terms:",

    c1_title_nda: "FIRST. PURPOSE",
    c1_body_nda_uni: "This Agreement establishes the terms under which {roleA} will disclose to {roleB} certain confidential information in connection with the following: {purpose}. {roleB} agrees to use such information exclusively for that purpose.",
    c1_body_nda_mutual: "This Agreement establishes the terms under which {roleA} and {roleB} may disclose confidential information to each other in connection with the following: {purpose}. Each Party agrees to use the information received exclusively for that purpose.",
    c1_title_b2b: "FIRST. PURPOSE OF THE AGREEMENT",
    c1_body_b2b: "{roleA} agrees to provide {roleB} with the following services: {purpose}. The services shall be performed in accordance with applicable professional standards and due diligence.",

    c2_title_nda_uni: "SECOND. OBLIGATIONS OF THE RECEIVING PARTY",
    c2_body_nda_uni: "{roleB} agrees to: (i) keep the confidential information in strict confidence; (ii) not disclose it to third parties without {roleA}'s prior written consent; (iii) not use it for purposes other than those set forth in Clause First; and (iv) implement reasonable security measures to prevent accidental or unauthorized disclosure.",
    c2_title_nda_mutual: "SECOND. CONFIDENTIALITY OBLIGATIONS",
    c2_body_nda_mutual: "Each Party, when acting as the receiving party, agrees to: (i) keep any confidential information received in strict confidence; (ii) not disclose it to third parties without the disclosing Party's prior written consent; (iii) not use it for purposes other than those set forth in Clause First; and (iv) implement reasonable security measures to prevent accidental or unauthorized disclosure.",
    c2_title_b2b: "SECOND. CONFIDENTIALITY",
    c2_body_b2b: "The Parties agree to keep in strict confidence all technical, commercial, or financial information exchanged in connection with the performance of this Agreement, and shall not disclose it to third parties without the other Party's prior written consent, except as required by law or a competent authority.",

    c3_title: "THIRD. EXCLUSIONS",
    c3_body: "The confidentiality obligations shall not apply to information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was lawfully known to the receiving party prior to disclosure; (c) is lawfully received from a third party without a confidentiality restriction; or (d) must be disclosed pursuant to a legal, judicial, or governmental requirement, subject to prior notice to the other Party whenever possible.",

    c4_title_nda: "FOURTH. TERM AND DURATION",
    c4_body_nda: "The confidentiality obligations set forth in this Agreement shall remain in effect for {duration} from the date of signature, regardless of the termination of any business relationship between the Parties.",
    c4_title_b2b: "FOURTH. TERM AND CONFIDENTIALITY",
    c4_body_b2b: "This Agreement shall remain in effect for {duration} from its date of signature. The confidentiality obligations set forth in Clause Second shall survive for that period and after termination of the Agreement for any reason.",

    c5_title: "FIFTH. RETURN OR DESTRUCTION OF INFORMATION",
    c5_body: "Upon request of the disclosing party, or upon termination of this Agreement, the receiving party shall return or destroy, as instructed, all documents, media, and copies containing confidential information, and shall provide written confirmation of such return or destruction.",

    c6_title_nda: "SIXTH. NO LICENSE OR EMPLOYMENT RELATIONSHIP",
    c6_body_nda: "Nothing in this Agreement shall be construed as granting any license or intellectual/industrial property right, or as creating an employment, partnership, or agency relationship between the Parties.",
    c6_title_b2b: "FIFTH. NATURE OF THE RELATIONSHIP",
    c6_body_b2b: "This Agreement does not create an employment, partnership, agency, or representation relationship between the Parties. {roleA} shall act as an independent contractor, retaining full technical and administrative autonomy in performing the services.",

    c7_title: "SEVENTH. GOVERNING LAW AND JURISDICTION",
    c7_title_b2b: "SIXTH. GOVERNING LAW AND JURISDICTION",
    c7_body: "This document shall be governed by and construed in accordance with the laws in force in {jurisdiction}. Any dispute arising from its interpretation or performance shall be submitted to the competent courts of that jurisdiction, with the Parties expressly waiving any other venue that might otherwise apply.",

    c8_title: "EIGHTH. GENERAL PROVISIONS",
    c8_title_b2b: "SEVENTH. GENERAL PROVISIONS",
    c8_body: "This document constitutes the entire agreement between the Parties with respect to its subject matter, superseding any prior understanding, whether verbal or written. Any amendment must be made in writing and signed by both Parties. Should any clause be declared void or unenforceable, the remaining provisions shall remain in full force and effect.",

    sign_place_date: "At {jurisdiction}, as of the signature date below.",
    sign_label: "Signature",
    sign_name_label: "Name and title",

    duration_1: "one (1) year",
    duration_3: "three (3) years",
    duration_5: "five (5) years",
    duration_indefinite: "an indefinite period, for as long as the information retains its confidential nature",

    /* --- Letterhead / signature cards / footer (editorial redesign) --- */
    doc_ref_label: "REF",
    doc_issue_date_label: "Issue date",
    doc_parties_heading: "Parties",
    sign_field_name: "Full name",
    sign_field_role: "Title / Role",
    sign_field_id: "Identification document",
    sign_field_date: "Date",
    doc_verified_badge: "Electronically generated and verified document",
    pdf_footer_confidential: "Confidential document · For exclusive use of the signing parties",
    pdf_footer_page_of: "Page {current} of {total}",
  },

  pt: {
    meta_title: "Gerador Gratuito de NDA e Contratos B2B Online | Modelos em PDF",
    meta_description: "Gere e baixe seu Acordo de Confidencialidade (NDA) — unilateral, mútuo ou Contrato de Prestação de Serviços B2B — em PDF em minutos. Grátis, sem cadastro.",
    brand_name: "NDAgen",
    nav_tool: "Gerador",
    nav_guide: "Guia Legal",
    nav_faq: "FAQ",
    ad_label: "Publicidade",
    ad_native: "Bloco nativo",
    hero_badge: "100% Grátis · Sem cadastro · Download instantâneo",
    hero_title: "Gerador de Acordos de Confidencialidade (NDA) e Contratos B2B",
    hero_subtitle: "Crie, visualize e baixe em PDF seu NDA ou contrato de serviços profissional em menos de 3 minutos.",
    tpl_unilateral_title: "NDA Unilateral",
    tpl_unilateral_desc: "Uma parte revela informações, a outra as protege.",
    tpl_mutual_title: "NDA Bilateral (Mútuo)",
    tpl_mutual_desc: "Ambas as partes compartilham e protegem informações.",
    tpl_b2b_title: "Contrato B2B de Serviços",
    tpl_b2b_desc: "Prestação de serviços entre empresas.",
    tpl_unilateral_short: "Unilateral",
    tpl_mutual_short: "Bilateral",
    tpl_b2b_short: "B2B",
    btn_view_document: "Ver Documento",
    step1_label: "Partes",
    step2_label: "Objeto",
    step3_label: "Duração",
    step4_label: "Revisar",
    party_a_legend: "Parte Divulgadora",
    party_a_legend_mutual: "Primeira Parte",
    party_a_legend_b2b: "Prestador do Serviço",
    party_b_legend: "Parte Receptora",
    party_b_legend_mutual: "Segunda Parte",
    party_b_legend_b2b: "Cliente / Contratante",
    label_name: "Nome / Empresa",
    label_taxid: "Identificação fiscal / ID",
    label_address: "Endereço",
    ph_name: "Ex.: Acme Corp Ltda.",
    ph_taxid: "Ex.: CNPJ 12.345.678/0001-99",
    ph_address: "Ex.: Rua Principal 10, Lisboa, Portugal",
    label_object: "Objeto e finalidade da informação confidencial",
    label_object_b2b: "Objeto e escopo do serviço prestado",
    ph_object: "Ex.: Avaliação de uma possível parceria comercial para o desenvolvimento conjunto de uma plataforma de software...",
    object_hint: "Descreva brevemente o motivo do compartilhamento da informação (negociação, colaboração, prestação de serviços, etc.).",
    label_duration: "Duração da obrigação",
    label_duration_b2b: "Duração / vigência do contrato",
    opt_indefinite: "Indefinida",
    label_jurisdiction: "Jurisdição e legislação aplicável",
    ph_jurisdiction: "Ex.: Lisboa, Portugal",
    review_hint: "Revise a pré-visualização à direita. Quando tudo estiver correto, baixe o documento em PDF ou copie-o para a área de transferência.",
    btn_pdf: "Baixar em PDF",
    btn_copy: "Copiar texto",
    btn_clear: "Limpar formulário",
    btn_prev: "← Anterior",
    btn_next: "Próximo →",
    btn_finish: "Concluir",
    preview_title: "Pré-visualização em tempo real",
    preview_live: "Ao vivo",
    guide_h2_1: "O que é um Acordo de Confidencialidade (NDA)?",
    guide_p_1: "Um Acordo de Confidencialidade, ou NDA (Non-Disclosure Agreement), é um contrato legal pelo qual uma ou várias partes se comprometem a não revelar, divulgar nem utilizar em benefício próprio a informação confidencial compartilhada durante uma negociação, colaboração ou relação comercial. É uma ferramenta essencial antes de compartilhar planos de negócio, código-fonte, dados financeiros, protótipos ou qualquer informação sensível com terceiros.",
    guide_h3_1: "Tipos de NDA: unilateral vs. bilateral",
    guide_p_2: "Em um <strong>NDA unilateral</strong>, apenas uma das partes (a \"Parte Divulgadora\") compartilha informação confidencial, enquanto a outra (a \"Parte Receptora\") assume a obrigação de protegê-la. Esse modelo é comum quando uma empresa compartilha informação com um fornecedor, candidato ou investidor potencial. Já em um <strong>NDA bilateral ou mútuo</strong>, ambas as partes trocam informação confidencial entre si e ambas assumem obrigações de proteção, algo frequente em fusões, joint ventures ou alianças estratégicas.",
    guide_h3_2: "Cláusulas indispensáveis em um NDA",
    guide_p_clauses_intro: "Todo acordo de confidencialidade bem redigido deve contemplar, no mínimo, os seguintes elementos:",
    guide_list_clauses: [
      "<strong>Definição de informação confidencial:</strong> que tipo de dados, documentos ou conhecimentos ficam protegidos pelo acordo (técnicos, comerciais, financeiros, código-fonte, etc.).",
      "<strong>Exclusões:</strong> informação que não é considerada confidencial por ser pública, já conhecida pela parte receptora ou exigida por uma autoridade competente.",
      "<strong>Vigência:</strong> o prazo durante o qual se mantém a obrigação de confidencialidade, que pode ser de 1, 3, 5 anos ou indefinido, conforme o caso.",
      "<strong>Penalidades por descumprimento:</strong> as consequências econômicas ou legais (indenização por danos, cláusula penal, medidas cautelares) caso uma parte divulgue informação sem autorização.",
      "<strong>Jurisdição e lei aplicável:</strong> o país ou cidade cujos tribunais e legislação resolverão qualquer disputa decorrente do acordo."
    ],
    guide_h3_3: "Contratos de Prestação de Serviços B2B",
    guide_p_3: "Um contrato B2B (business-to-business) formaliza a relação entre duas empresas, na qual uma presta serviços à outra. Além de definir o escopo do serviço e os prazos, costuma incorporar cláusulas de confidencialidade para proteger a informação trocada durante a colaboração, bem como a jurisdição aplicável em caso de disputa.",
    guide_h3_4: "Dicas para a assinatura e validade do documento",
    guide_p_tips_intro: "Para que seu NDA ou contrato B2B tenha a maior validade possível, considere as seguintes recomendações antes de assiná-lo:",
    guide_list_tips: [
      "Verifique a identidade e a capacidade legal das pessoas que assinam em nome de cada empresa.",
      "Assine o documento em duas vias (uma cópia para cada parte) ou utilize uma plataforma de assinatura eletrônica com validade legal em seu país.",
      "Inclua sempre a data de assinatura; é um elemento fundamental para calcular prazos e determinar a lei aplicável ao longo do tempo.",
      "Adapte as cláusulas de jurisdição e penalidades à legislação local antes de utilizar o documento em um litígio.",
      "Conserve uma cópia assinada e, se possível, um comprovante de envio ou recebimento (correio registrado, assinatura eletrônica com carimbo de tempo).",
      "Diante de informação especialmente sensível ou contratos de alto valor, solicite a revisão de um advogado especializado antes de assinar."
    ],
    faq_title: "Perguntas Frequentes",
    faq_q1: "Um NDA gerado online é juridicamente vinculante?",
    faq_a1: "Sim, pode ser. Um NDA gerado com esta ferramenta tem a mesma validade que qualquer outro contrato, desde que inclua os elementos essenciais (partes claramente identificadas, objeto lícito e consentimento) e seja assinado corretamente por ambas as partes. Ainda assim, sua aplicabilidade concreta depende da legislação do seu país, por isso recomendamos a revisão de um advogado antes de assiná-lo, especialmente em acordos de alto valor.",
    faq_q2: "Qual a diferença entre um NDA unilateral e um mútuo?",
    faq_a2: "Em um NDA unilateral, apenas uma parte (a divulgadora) compartilha informação confidencial e a outra (a receptora) se obriga a protegê-la. Em um NDA mútuo ou bilateral, ambas as partes trocam informação confidencial entre si, assumindo simultaneamente os papéis de divulgadora e receptora.",
    faq_q3: "Quanto tempo deve durar a confidencialidade?",
    faq_a3: "Não existe uma regra única: os prazos mais comuns são de 1, 3 ou 5 anos a partir da assinatura do acordo. Em setores especialmente sensíveis, como segredos industriais ou código-fonte de software, é comum pactuar uma duração indefinida que se mantenha enquanto a informação conservar seu caráter confidencial.",
    faq_q4: "Preciso de um advogado para assiná-lo?",
    faq_a4: "Não é obrigatório, mas é altamente recomendável, principalmente quando o acordo protege informação de alto valor, tem longa duração ou faz parte de uma negociação complexa. Esta ferramenta permite gerar um rascunho profissional e completo que depois pode ser validado com um advogado antes da assinatura definitiva.",
    faq_q5: "O que acontece se alguém descumprir o acordo?",
    faq_a5: "O descumprimento de um NDA pode gerar uma reclamação por danos e prejuízos causados, medidas cautelares para interromper ou impedir uma divulgação em curso, e a aplicação das penalidades específicas que as partes tenham pactuado na cláusula correspondente. Para fazer valer esses direitos, a parte afetada deverá poder comprovar o descumprimento e o prejuízo sofrido perante o tribunal competente indicado na cláusula de jurisdição.",
    faq_q6: "Como assino este documento?",
    faq_a6: "Você pode baixar o PDF gerado pela ferramenta e imprimi-lo para que ambas as partes o assinem manualmente, idealmente em duas vias. Também é possível utilizar uma plataforma de assinatura eletrônica legalmente reconhecida em seu país. Em ambos os casos, certifique-se de que a data de assinatura fique claramente registrada e conserve uma cópia do documento assinado.",
    disclaimer_title: "Aviso legal:",
    disclaimer_text: "Os documentos gerados por esta ferramenta são modelos orientativos baseados em cláusulas padrão de uso comum em acordos de confidencialidade e contratos de prestação de serviços B2B. São oferecidos exclusivamente para fins informativos e de referência, e não constituem aconselhamento jurídico, fiscal ou de qualquer outro tipo, nem criam uma relação advogado-cliente entre o usuário e os responsáveis por esta ferramenta. A legislação aplicável aos acordos de confidencialidade e contratos comerciais varia significativamente conforme o país, o estado ou a jurisdição, portanto esses modelos podem exigir adaptações para se ajustarem à normativa local antes do uso. O usuário é o único responsável por revisar, completar e adaptar o conteúdo gerado, bem como por verificar sua validade e adequação ao seu caso particular. Recomendamos enfaticamente a revisão de um profissional do direito devidamente qualificado antes de assinar ou utilizar qualquer documento gerado com esta ferramenta. Em nenhuma hipótese os responsáveis por esta ferramenta serão responsáveis por danos, prejuízos ou consequências decorrentes do uso, mau uso ou interpretação dos documentos gerados.",
    benefits_title: "Por que usar o NDAgen?",
    benefits_subtitle: "A forma mais rápida, segura e profissional de proteger suas informações confidenciais.",
    benefit_1_title: "100% Gratuito e Sem Cadastro",
    benefit_1_desc: "Gere e baixe seus documentos sem nenhum custo, sem criar contas nem compartilhar seu e-mail.",
    benefit_2_title: "Privacidade Total (Client-Side)",
    benefit_2_desc: "Todo o processamento ocorre no seu próprio navegador. Seus dados nunca são enviados nem armazenados em nenhum servidor.",
    benefit_3_title: "Validade e Padrão B2B",
    benefit_3_desc: "Cláusulas redigidas seguindo padrões jurídicos habituais em acordos de confidencialidade e contratos B2B internacionais.",
    benefit_4_title: "Modo Bilíngue e Exportação Dupla",
    benefit_4_desc: "Crie contratos em dois idiomas em paralelo e exporte-os em PDF ou Word com um único clique.",
    donate_btn_label: "Apoie este Projeto",
    donate_modal_title: "Apoie este Projeto",
    donate_modal_desc: "O NDAgen é gratuito e não exige cadastro. Se esta ferramenta foi útil para você, considere nos pagar um café para ajudar a mantê-la.",
    donate_custom_placeholder: "Outro valor",
    donate_thanks_msg: "Obrigado pelo seu apoio! Você será redirecionado para a plataforma de pagamento.",
    donate_btn_confirm: "Continuar",
    footer_rights: "Todos os direitos reservados.",
    footer_note: "Ferramenta gratuita · Não substitui aconselhamento jurídico profissional.",
    copy_success: "Texto copiado para a área de transferência!",
    copy_error: "Não foi possível copiar o texto.",
    clear_confirm: "Tem certeza de que deseja limpar todo o formulário?",
    pdf_generating: "Gerando PDF...",
    btn_docx: "Baixar em Word (.docx)",
    docx_generating: "Gerando Word...",
    docx_error: "Não foi possível gerar o arquivo Word. Tente novamente.",
    docx_lib_error: "Não foi possível carregar o mecanismo do Word. Verifique sua conexão com a internet.",
    logo_upload_btn: "Enviar logotipo da empresa (opcional)",
    logo_remove_btn: "Remover logotipo",
    logo_error_type: "Formato de imagem não suportado. Use PNG, JPG ou SVG.",
    sig_modal_title: "Assinatura digital",
    sig_tab_draw: "Desenhar",
    sig_tab_upload: "Enviar imagem",
    sig_draw_hint: "Desenhe sua assinatura acima com o mouse ou o dedo.",
    sig_upload_btn: "Escolher imagem (PNG/JPG)",
    sig_upload_hint: "A imagem será ajustada automaticamente à caixa de assinatura.",
    sig_btn_clear: "Limpar assinatura",
    sig_btn_confirm: "Confirmar assinatura",
    btn_cancel: "Cancelar",
    sig_add_btn: "Adicionar assinatura",
    sig_edit_btn: "Editar",
    sig_remove_btn: "Remover",
    sig_slot_prefix: "Assinatura:",
    sig_error_empty: "Desenhe ou envie uma imagem antes de confirmar a assinatura.",
    btn_save_template: "Salvar meus dados como modelo",
    btn_load_template: "Carregar meus dados",
    autosave_note: "Seus dados são salvos automaticamente neste navegador.",
    template_saved: "Dados da Parte Divulgadora salvos como modelo.",
    template_loaded: "Modelo carregado com sucesso.",
    template_empty: "Você ainda não salvou nenhum modelo.",
    completion_label: "Progresso do documento",
    validation_missing: "Preencha os campos obrigatórios destacados antes de baixar o documento.",
    bilingual_mode_label: "Modo Bilíngue (Idioma Duplo)",
    bilingual_primary_label: "Idioma Principal",
    bilingual_secondary_label: "Idioma Secundário",
    custom_filename_label: "Nome de arquivo personalizado (opcional)",
    custom_filename_placeholder: "Ex.: NDA_AcmeCorp_2026",
    doc_ref_label: "REF",
    doc_issue_date_label: "Data de emissão",
    doc_parties_heading: "Partes envolvidas",
    sign_field_name: "Nome completo",
    sign_field_role: "Cargo / Função",
    sign_field_id: "Documento de identidade",
    sign_field_date: "Data",
    doc_verified_badge: "Documento eletrônico gerado e verificado",
    pdf_footer_confidential: "Documento confidencial · Uso exclusivo das partes signatárias",
    pdf_footer_page_of: "Página {current} de {total}",

    doc_title_nda_unilateral: "ACORDO DE CONFIDENCIALIDADE UNILATERAL",
    doc_title_nda_mutual: "ACORDO DE CONFIDENCIALIDADE BILATERAL (MÚTUO)",
    doc_title_b2b_services: "CONTRATO DE PRESTAÇÃO DE SERVIÇOS B2B",
    doc_subtitle: "Documento gerado em {date}",
    ph_nameA: "[Nome da Parte Divulgadora]",
    ph_nameB: "[Nome da Parte Receptora]",
    ph_id: "[identificação fiscal não especificada]",
    ph_addr: "[endereço não especificado]",
    ph_purpose: "[finalidade não especificada]",
    ph_jur: "[jurisdição não especificada]",
    role_discloser: "A PARTE DIVULGADORA",
    role_receiver: "A PARTE RECEPTORA",
    role_first: "A PRIMEIRA PARTE",
    role_second: "A SEGUNDA PARTE",
    role_provider: "O PRESTADOR",
    role_client: "O CLIENTE",
    intro_nda: "Pelo presente instrumento, as partes celebram este Acordo de Confidencialidade (doravante, o \"Acordo\"), de um lado, {nameA}, identificado(a) com {idA} e domicílio em {addrA} (doravante, \"{roleA}\"); e, de outro lado, {nameB}, identificado(a) com {idB} e domicílio em {addrB} (doravante, \"{roleB}\"), doravante denominadas em conjunto \"as Partes\", nos seguintes termos:",
    intro_b2b: "Pelo presente instrumento, as partes celebram este Contrato de Prestação de Serviços (doravante, o \"Contrato\"), de um lado, {nameA}, identificado(a) com {idA} e domicílio em {addrA} (doravante, \"{roleA}\"); e, de outro lado, {nameB}, identificado(a) com {idB} e domicílio em {addrB} (doravante, \"{roleB}\"), doravante denominadas em conjunto \"as Partes\", nos seguintes termos:",

    c1_title_nda: "PRIMEIRA. OBJETO",
    c1_body_nda_uni: "O presente Acordo tem por objeto estabelecer os termos e condições sob os quais {roleA} revelará a {roleB} determinadas informações confidenciais relacionadas ao seguinte: {purpose}. {roleB} compromete-se a utilizar tais informações exclusivamente para essa finalidade.",
    c1_body_nda_mutual: "O presente Acordo tem por objeto estabelecer os termos e condições sob os quais {roleA} e {roleB} poderão revelar mutuamente informações confidenciais relacionadas ao seguinte: {purpose}. Cada Parte compromete-se a utilizar as informações recebidas exclusivamente para essa finalidade.",
    c1_title_b2b: "PRIMEIRA. OBJETO DO CONTRATO",
    c1_body_b2b: "{roleA} obriga-se a prestar em favor de {roleB} os serviços descritos a seguir: {purpose}. Os serviços serão executados de acordo com os padrões profissionais aplicáveis ao setor e com a devida diligência.",

    c2_title_nda_uni: "SEGUNDA. OBRIGAÇÕES DA PARTE RECEPTORA",
    c2_body_nda_uni: "{roleB} obriga-se a: (i) manter a informação confidencial em sigilo estrito; (ii) não divulgá-la a terceiros sem autorização prévia e por escrito de {roleA}; (iii) não utilizá-la para fins distintos dos estabelecidos na Cláusula Primeira; e (iv) adotar medidas de segurança razoáveis para evitar sua divulgação acidental ou não autorizada.",
    c2_title_nda_mutual: "SEGUNDA. OBRIGAÇÕES DE CONFIDENCIALIDADE",
    c2_body_nda_mutual: "Cada Parte, na qualidade de receptora de informações, obriga-se a: (i) manter a informação confidencial recebida em sigilo estrito; (ii) não divulgá-la a terceiros sem autorização prévia e por escrito da Parte divulgadora; (iii) não utilizá-la para fins distintos dos estabelecidos na Cláusula Primeira; e (iv) adotar medidas de segurança razoáveis para evitar sua divulgação acidental ou não autorizada.",
    c2_title_b2b: "SEGUNDA. CONFIDENCIALIDADE",
    c2_body_b2b: "As Partes obrigam-se a manter em sigilo estrito todas as informações técnicas, comerciais ou financeiras trocadas em decorrência da execução do presente Contrato, não podendo divulgá-las a terceiros sem autorização prévia e por escrito da outra Parte, salvo exigência legal ou de autoridade competente.",

    c3_title: "TERCEIRA. EXCLUSÕES",
    c3_body: "As obrigações de confidencialidade não se aplicam às informações que: (a) sejam ou se tornem de domínio público sem culpa da parte receptora; (b) tenham sido licitamente conhecidas pela parte receptora antes da divulgação; (c) sejam recebidas licitamente de terceiro sem restrição de confidencialidade; ou (d) devam ser divulgadas por determinação legal, judicial ou de autoridade competente, mediante prévia notificação à outra Parte sempre que possível.",

    c4_title_nda: "QUARTA. PRAZO E DURAÇÃO",
    c4_body_nda: "As obrigações de confidencialidade estabelecidas neste Acordo permanecerão vigentes por {duration} a partir da data de assinatura deste documento, independentemente do término de qualquer relação comercial entre as Partes.",
    c4_title_b2b: "QUARTA. VIGÊNCIA E CONFIDENCIALIDADE",
    c4_body_b2b: "O presente Contrato terá vigência de {duration} a partir de sua assinatura. As obrigações de confidencialidade estabelecidas na Cláusula Segunda permanecerão vigentes durante esse período e após o término do Contrato por qualquer motivo.",

    c5_title: "QUINTA. DEVOLUÇÃO OU DESTRUIÇÃO DA INFORMAÇÃO",
    c5_body: "Mediante solicitação da parte divulgadora, ou ao término deste Acordo, a parte receptora deverá devolver ou destruir, conforme instruído, todos os documentos, suportes e cópias que contenham informação confidencial, fornecendo confirmação por escrito de tal devolução ou destruição.",

    c6_title_nda: "SEXTA. AUSÊNCIA DE LICENÇA E RELAÇÃO TRABALHISTA",
    c6_body_nda: "Nenhuma disposição deste Acordo será interpretada como concessão de licença, direito de propriedade intelectual ou industrial, nem como criação de relação trabalhista, societária ou de representação entre as Partes.",
    c6_title_b2b: "QUINTA. NATUREZA DA RELAÇÃO",
    c6_body_b2b: "O presente Contrato não gera relação trabalhista, societária, de agência nem de representação entre as Partes. {roleA} atuará como contratado(a) independente, mantendo plena autonomia técnica e administrativa na execução dos serviços.",

    c7_title: "SÉTIMA. LEI APLICÁVEL E JURISDIÇÃO",
    c7_title_b2b: "SEXTA. LEI APLICÁVEL E JURISDIÇÃO",
    c7_body: "Este documento será regido e interpretado de acordo com as leis vigentes em {jurisdiction}. Para a resolução de qualquer controvérsia decorrente de sua interpretação ou cumprimento, as Partes submetem-se aos tribunais competentes dessa jurisdição, com expressa renúncia a qualquer outro foro que possa lhes caber.",

    c8_title: "OITAVA. DISPOSIÇÕES GERAIS",
    c8_title_b2b: "SÉTIMA. DISPOSIÇÕES GERAIS",
    c8_body: "Este documento constitui o acordo integral entre as Partes quanto ao seu objeto, deixando sem efeito qualquer entendimento anterior, verbal ou escrito. Qualquer alteração deverá constar por escrito e ser assinada por ambas as Partes. Caso alguma cláusula seja declarada nula ou inaplicável, isso não afetará a validade das demais disposições.",

    sign_place_date: "Em {jurisdiction}, na data de assinatura indicada a seguir.",
    sign_label: "Assinatura",
    sign_name_label: "Nome e cargo",

    duration_1: "um (1) ano",
    duration_3: "três (3) anos",
    duration_5: "cinco (5) anos",
    duration_indefinite: "prazo indeterminado, enquanto a informação mantiver seu caráter confidencial",
  },

  fr: {
    meta_title: "Générateur Gratuit d'Accords de Confidentialité et Contrats B2B | Modèles PDF",
    meta_description: "Générez et téléchargez votre Accord de Confidentialité (NDA) — unilatéral, mutuel ou Contrat de Prestation de Services B2B — au format PDF en quelques minutes. Gratuit, sans inscription.",
    brand_name: "NDAgen",
    nav_tool: "Générateur",
    nav_guide: "Guide Juridique",
    nav_faq: "FAQ",
    ad_label: "Publicité",
    ad_native: "Bloc natif",
    hero_badge: "100 % Gratuit · Sans inscription · Téléchargement instantané",
    hero_title: "Générateur d'Accords de Confidentialité (NDA) et de Contrats B2B",
    hero_subtitle: "Créez, prévisualisez et téléchargez votre NDA ou contrat de services professionnel au format PDF en moins de 3 minutes.",
    tpl_unilateral_title: "NDA Unilatéral",
    tpl_unilateral_desc: "Une partie divulgue des informations, l'autre les protège.",
    tpl_mutual_title: "NDA Bilatéral (Mutuel)",
    tpl_mutual_desc: "Les deux parties partagent et protègent des informations.",
    tpl_b2b_title: "Contrat B2B de Services",
    tpl_b2b_desc: "Prestation de services entre entreprises.",
    tpl_unilateral_short: "Unilatéral",
    tpl_mutual_short: "Bilatéral",
    tpl_b2b_short: "B2B",
    btn_view_document: "Voir le document",
    step1_label: "Parties",
    step2_label: "Objet",
    step3_label: "Durée",
    step4_label: "Vérifier",
    party_a_legend: "Partie Divulgatrice",
    party_a_legend_mutual: "Première Partie",
    party_a_legend_b2b: "Prestataire de Services",
    party_b_legend: "Partie Réceptrice",
    party_b_legend_mutual: "Deuxième Partie",
    party_b_legend_b2b: "Client",
    label_name: "Nom / Société",
    label_taxid: "Identifiant fiscal / SIRET",
    label_address: "Adresse",
    ph_name: "Ex. : Acme Corp SARL",
    ph_taxid: "Ex. : SIRET 123 456 789 00012",
    ph_address: "Ex. : 10 rue Principale, Paris, France",
    label_object: "Objet et finalité de l'information confidentielle",
    label_object_b2b: "Objet et périmètre du service fourni",
    ph_object: "Ex. : Évaluation d'un partenariat commercial potentiel pour le développement conjoint d'une plateforme logicielle...",
    object_hint: "Décrivez brièvement la raison du partage de l'information (négociation, collaboration, prestation de services, etc.).",
    label_duration: "Durée de l'obligation",
    label_duration_b2b: "Durée / validité du contrat",
    opt_indefinite: "Indéterminée",
    label_jurisdiction: "Juridiction et droit applicable",
    ph_jurisdiction: "Ex. : Paris, France",
    review_hint: "Vérifiez l'aperçu à droite. Une fois tout correct, téléchargez le document en PDF ou copiez-le dans le presse-papiers.",
    btn_pdf: "Télécharger en PDF",
    btn_copy: "Copier le texte",
    btn_clear: "Effacer le formulaire",
    btn_prev: "← Précédent",
    btn_next: "Suivant →",
    btn_finish: "Terminer",
    preview_title: "Aperçu en temps réel",
    preview_live: "En direct",
    guide_h2_1: "Qu'est-ce qu'un Accord de Confidentialité (NDA) ?",
    guide_p_1: "Un accord de confidentialité, ou NDA (Non-Disclosure Agreement), est un contrat juridique par lequel une ou plusieurs parties s'engagent à ne pas révéler, divulguer ni utiliser à leur propre bénéfice les informations confidentielles partagées au cours d'une négociation, d'une collaboration ou d'une relation commerciale. C'est un outil essentiel avant de partager des plans d'affaires, du code source, des données financières, des prototypes ou toute autre information sensible avec des tiers.",
    guide_h3_1: "Types de NDA : unilatéral vs. bilatéral",
    guide_p_2: "Dans un <strong>NDA unilatéral</strong>, une seule des parties (la « Partie Divulgatrice ») partage des informations confidentielles, tandis que l'autre (la « Partie Réceptrice ») s'engage à les protéger. Ce modèle est courant lorsqu'une entreprise partage des informations avec un fournisseur, un candidat ou un investisseur potentiel. Dans un <strong>NDA bilatéral ou mutuel</strong>, les deux parties échangent des informations confidentielles et assument toutes deux des obligations de protection, ce qui est fréquent dans les fusions, coentreprises ou alliances stratégiques.",
    guide_h3_2: "Clauses indispensables dans un NDA",
    guide_p_clauses_intro: "Tout accord de confidentialité bien rédigé doit comporter, au minimum, les éléments suivants :",
    guide_list_clauses: [
      "<strong>Définition de l'information confidentielle :</strong> quel type de données, documents ou connaissances sont protégés par l'accord (techniques, commerciaux, financiers, code source, etc.).",
      "<strong>Exclusions :</strong> les informations qui ne sont pas considérées comme confidentielles car publiques, déjà connues de la partie réceptrice ou exigées par une autorité compétente.",
      "<strong>Durée :</strong> la période pendant laquelle l'obligation de confidentialité est maintenue, qui peut être de 1, 3, 5 ans ou indéfinie selon le cas.",
      "<strong>Pénalités en cas de non-respect :</strong> les conséquences économiques ou juridiques (dommages-intérêts, clause pénale, mesures conservatoires) si une partie divulgue des informations sans autorisation.",
      "<strong>Juridiction et loi applicable :</strong> le pays ou la ville dont les tribunaux et la législation régleront tout litige découlant de l'accord."
    ],
    guide_h3_3: "Contrats de Prestation de Services B2B",
    guide_p_3: "Un contrat B2B (business-to-business) formalise la relation entre deux entreprises, l'une fournissant des services à l'autre. Outre la définition du périmètre du service et des délais, il intègre généralement des clauses de confidentialité pour protéger les informations échangées durant la collaboration, ainsi que la juridiction applicable en cas de litige.",
    guide_h3_4: "Conseils pour la signature et la validité du document",
    guide_p_tips_intro: "Pour que votre NDA ou contrat B2B ait la plus grande validité possible, tenez compte des recommandations suivantes avant de le signer :",
    guide_list_tips: [
      "Vérifiez l'identité et la capacité juridique des personnes qui signent au nom de chaque entreprise.",
      "Signez le document en deux exemplaires (une copie pour chaque partie) ou utilisez une plateforme de signature électronique légalement reconnue dans votre pays.",
      "Indiquez toujours la date de signature ; c'est un élément essentiel pour calculer les délais et déterminer la loi applicable dans le temps.",
      "Adaptez les clauses de juridiction et de pénalités à la législation locale avant d'utiliser le document dans un litige.",
      "Conservez une copie signée et, si possible, une preuve d'envoi ou de réception (courrier recommandé, signature électronique horodatée).",
      "En présence d'informations particulièrement sensibles ou de contrats à forte valeur, demandez la révision d'un avocat spécialisé avant de signer."
    ],
    faq_title: "Questions Fréquentes",
    faq_q1: "Un NDA généré en ligne est-il juridiquement contraignant ?",
    faq_a1: "Oui, il peut l'être. Un NDA généré avec cet outil a la même validité que tout autre contrat, à condition qu'il comporte les éléments essentiels (parties clairement identifiées, objet licite et consentement) et qu'il soit correctement signé par les deux parties. Toutefois, son applicabilité concrète dépend de la législation de votre pays ; nous recommandons donc la révision d'un avocat avant de le signer, en particulier pour les accords de grande valeur.",
    faq_q2: "Quelle est la différence entre un NDA unilatéral et un NDA mutuel ?",
    faq_a2: "Dans un NDA unilatéral, une seule partie (la divulgatrice) partage des informations confidentielles et l'autre (la réceptrice) s'engage à les protéger. Dans un NDA mutuel ou bilatéral, les deux parties échangent des informations confidentielles entre elles, assumant simultanément les rôles de divulgatrice et de réceptrice.",
    faq_q3: "Combien de temps doit durer la confidentialité ?",
    faq_a3: "Il n'existe pas de règle unique : les durées les plus courantes sont de 1, 3 ou 5 ans à compter de la signature de l'accord. Dans des secteurs particulièrement sensibles, comme les secrets industriels ou le code source de logiciels, il est courant de convenir d'une durée indéfinie qui se maintient tant que l'information conserve son caractère confidentiel.",
    faq_q4: "Ai-je besoin d'un avocat pour le signer ?",
    faq_a4: "Ce n'est pas obligatoire, mais c'est fortement recommandé, surtout lorsque l'accord protège des informations de grande valeur, a une longue durée ou fait partie d'une négociation complexe. Cet outil permet de générer un brouillon professionnel et complet qui pourra ensuite être validé par un avocat avant la signature définitive.",
    faq_q5: "Que se passe-t-il en cas de non-respect de l'accord ?",
    faq_a5: "Le non-respect d'un NDA peut donner lieu à une réclamation en dommages et intérêts pour les préjudices causés, à des mesures conservatoires pour interrompre ou empêcher une divulgation en cours, et à l'application des pénalités spécifiques convenues par les parties dans la clause correspondante. Pour faire valoir ces droits, la partie lésée devra pouvoir prouver le manquement et le préjudice subi devant le tribunal compétent indiqué dans la clause de juridiction.",
    faq_q6: "Comment signer ce document ?",
    faq_a6: "Vous pouvez télécharger le PDF généré par l'outil et l'imprimer afin que les deux parties le signent manuellement, idéalement en deux exemplaires. Il est également possible d'utiliser une plateforme de signature électronique légalement reconnue dans votre pays. Dans les deux cas, assurez-vous que la date de signature soit clairement indiquée et conservez une copie du document signé.",
    disclaimer_title: "Avertissement légal :",
    disclaimer_text: "Les documents générés par cet outil sont des modèles indicatifs basés sur des clauses standards couramment utilisées dans les accords de confidentialité et les contrats de prestation de services B2B. Ils sont fournis exclusivement à des fins d'information et de référence, et ne constituent pas un conseil juridique, fiscal ou de toute autre nature, et ne créent pas de relation avocat-client entre l'utilisateur et les responsables de cet outil. La législation applicable aux accords de confidentialité et aux contrats commerciaux varie considérablement selon le pays, l'État ou la juridiction ; ces modèles peuvent donc nécessiter des adaptations pour se conformer à la réglementation locale avant utilisation. L'utilisateur est seul responsable de la révision, de la complétion et de l'adaptation du contenu généré, ainsi que de la vérification de sa validité et de son adéquation à son cas particulier. Nous recommandons vivement la révision par un professionnel du droit dûment qualifié avant de signer ou d'utiliser tout document généré avec cet outil. En aucun cas les responsables de cet outil ne pourront être tenus responsables des dommages, préjudices ou conséquences découlant de l'utilisation, du mauvais usage ou de l'interprétation des documents générés.",
    benefits_title: "Pourquoi utiliser NDAgen ?",
    benefits_subtitle: "La façon la plus rapide, sûre et professionnelle de protéger vos informations confidentielles.",
    benefit_1_title: "100 % Gratuit et Sans Inscription",
    benefit_1_desc: "Générez et téléchargez vos documents gratuitement, sans créer de compte ni partager votre e-mail.",
    benefit_2_title: "Confidentialité Totale (Client-Side)",
    benefit_2_desc: "Tout le traitement s'effectue directement dans votre navigateur. Vos données ne sont jamais envoyées ni stockées sur un serveur.",
    benefit_3_title: "Validité et Norme B2B",
    benefit_3_desc: "Clauses rédigées selon les normes juridiques courantes des accords de confidentialité et des contrats B2B internationaux.",
    benefit_4_title: "Mode Bilingue et Export Double",
    benefit_4_desc: "Créez des contrats en deux langues en parallèle et exportez-les en PDF ou Word en un seul clic.",
    donate_btn_label: "Soutenez ce Projet",
    donate_modal_title: "Soutenez ce Projet",
    donate_modal_desc: "NDAgen est gratuit et ne nécessite aucune inscription. Si cet outil vous a été utile, envisagez de nous offrir un café pour nous aider à le maintenir.",
    donate_custom_placeholder: "Autre montant",
    donate_thanks_msg: "Merci pour votre soutien ! Vous allez être redirigé vers la plateforme de paiement.",
    donate_btn_confirm: "Continuer",
    footer_rights: "Tous droits réservés.",
    footer_note: "Outil gratuit · Ne remplace pas un conseil juridique professionnel.",
    copy_success: "Texte copié dans le presse-papiers !",
    copy_error: "Impossible de copier le texte.",
    clear_confirm: "Voulez-vous vraiment effacer tout le formulaire ?",
    pdf_generating: "Génération du PDF...",
    btn_docx: "Télécharger en Word (.docx)",
    docx_generating: "Génération du Word...",
    docx_error: "Impossible de générer le fichier Word. Veuillez réessayer.",
    docx_lib_error: "Impossible de charger le moteur Word. Vérifiez votre connexion internet.",
    logo_upload_btn: "Importer le logo de l'entreprise (facultatif)",
    logo_remove_btn: "Supprimer le logo",
    logo_error_type: "Format d'image non pris en charge. Utilisez PNG, JPG ou SVG.",
    sig_modal_title: "Signature numérique",
    sig_tab_draw: "Dessiner",
    sig_tab_upload: "Importer une image",
    sig_draw_hint: "Dessinez votre signature ci-dessus avec la souris ou le doigt.",
    sig_upload_btn: "Choisir une image (PNG/JPG)",
    sig_upload_hint: "L'image sera automatiquement ajustée au cadre de signature.",
    sig_btn_clear: "Effacer la signature",
    sig_btn_confirm: "Confirmer la signature",
    btn_cancel: "Annuler",
    sig_add_btn: "Ajouter une signature",
    sig_edit_btn: "Modifier",
    sig_remove_btn: "Supprimer",
    sig_slot_prefix: "Signature :",
    sig_error_empty: "Dessinez ou importez une image avant de confirmer la signature.",
    btn_save_template: "Enregistrer mes données comme modèle",
    btn_load_template: "Charger mes données",
    autosave_note: "Vos données sont enregistrées automatiquement dans ce navigateur.",
    template_saved: "Données de la Partie Divulgatrice enregistrées comme modèle.",
    template_loaded: "Modèle chargé avec succès.",
    template_empty: "Vous n'avez pas encore enregistré de modèle.",
    completion_label: "Progression du document",
    validation_missing: "Complétez les champs obligatoires surlignés avant de télécharger le document.",
    bilingual_mode_label: "Mode Bilingue (Double Langue)",
    bilingual_primary_label: "Langue Principale",
    bilingual_secondary_label: "Langue Secondaire",
    custom_filename_label: "Nom de fichier personnalisé (facultatif)",
    custom_filename_placeholder: "Ex. : NDA_AcmeCorp_2026",
    doc_ref_label: "RÉF",
    doc_issue_date_label: "Date d'émission",
    doc_parties_heading: "Parties concernées",
    sign_field_name: "Nom complet",
    sign_field_role: "Fonction / Rôle",
    sign_field_id: "Pièce d'identité",
    sign_field_date: "Date",
    doc_verified_badge: "Document électronique généré et vérifié",
    pdf_footer_confidential: "Document confidentiel · Usage exclusif des parties signataires",
    pdf_footer_page_of: "Page {current} sur {total}",

    doc_title_nda_unilateral: "ACCORD DE CONFIDENTIALITÉ UNILATÉRAL",
    doc_title_nda_mutual: "ACCORD DE CONFIDENTIALITÉ BILATÉRAL (MUTUEL)",
    doc_title_b2b_services: "CONTRAT DE PRESTATION DE SERVICES B2B",
    doc_subtitle: "Document généré le {date}",
    ph_nameA: "[Nom de la Partie Divulgatrice]",
    ph_nameB: "[Nom de la Partie Réceptrice]",
    ph_id: "[identifiant fiscal non précisé]",
    ph_addr: "[adresse non précisée]",
    ph_purpose: "[objet non précisé]",
    ph_jur: "[juridiction non précisée]",
    role_discloser: "LA PARTIE DIVULGATRICE",
    role_receiver: "LA PARTIE RÉCEPTRICE",
    role_first: "LA PREMIÈRE PARTIE",
    role_second: "LA DEUXIÈME PARTIE",
    role_provider: "LE PRESTATAIRE",
    role_client: "LE CLIENT",
    intro_nda: "Il est convenu par les présentes le présent Accord de Confidentialité (ci-après, l'« Accord ») entre, d'une part, {nameA}, identifié(e) par {idA} et domicilié(e) à {addrA} (ci-après, « {roleA} ») ; et, d'autre part, {nameB}, identifié(e) par {idB} et domicilié(e) à {addrB} (ci-après, « {roleB} »), ci-après dénommées ensemble « les Parties », dans les conditions suivantes :",
    intro_b2b: "Il est convenu par les présentes le présent Contrat de Prestation de Services (ci-après, le « Contrat ») entre, d'une part, {nameA}, identifié(e) par {idA} et domicilié(e) à {addrA} (ci-après, « {roleA} ») ; et, d'autre part, {nameB}, identifié(e) par {idB} et domicilié(e) à {addrB} (ci-après, « {roleB} »), ci-après dénommées ensemble « les Parties », dans les conditions suivantes :",

    c1_title_nda: "PREMIER. OBJET",
    c1_body_nda_uni: "Le présent Accord a pour objet d'établir les conditions selon lesquelles {roleA} divulguera à {roleB} certaines informations confidentielles relatives à ce qui suit : {purpose}. {roleB} s'engage à utiliser ces informations exclusivement à cette fin.",
    c1_body_nda_mutual: "Le présent Accord a pour objet d'établir les conditions selon lesquelles {roleA} et {roleB} pourront se divulguer mutuellement des informations confidentielles relatives à ce qui suit : {purpose}. Chaque Partie s'engage à utiliser les informations reçues exclusivement à cette fin.",
    c1_title_b2b: "PREMIER. OBJET DU CONTRAT",
    c1_body_b2b: "{roleA} s'engage à fournir à {roleB} les services décrits ci-après : {purpose}. Les services seront exécutés conformément aux normes professionnelles applicables au secteur et avec la diligence requise.",

    c2_title_nda_uni: "DEUXIÈME. OBLIGATIONS DE LA PARTIE RÉCEPTRICE",
    c2_body_nda_uni: "{roleB} s'engage à : (i) conserver l'information confidentielle en toute confidentialité ; (ii) ne pas la divulguer à des tiers sans l'autorisation préalable et écrite de {roleA} ; (iii) ne pas l'utiliser à des fins autres que celles établies à la Clause Première ; et (iv) mettre en œuvre des mesures de sécurité raisonnables pour éviter toute divulgation accidentelle ou non autorisée.",
    c2_title_nda_mutual: "DEUXIÈME. OBLIGATIONS DE CONFIDENTIALITÉ",
    c2_body_nda_mutual: "Chaque Partie, en sa qualité de partie réceptrice, s'engage à : (i) conserver toute information confidentielle reçue en toute confidentialité ; (ii) ne pas la divulguer à des tiers sans l'autorisation préalable et écrite de la Partie divulgatrice ; (iii) ne pas l'utiliser à des fins autres que celles établies à la Clause Première ; et (iv) mettre en œuvre des mesures de sécurité raisonnables pour éviter toute divulgation accidentelle ou non autorisée.",
    c2_title_b2b: "DEUXIÈME. CONFIDENTIALITÉ",
    c2_body_b2b: "Les Parties s'engagent à garder strictement confidentielle toute information technique, commerciale ou financière échangée dans le cadre de l'exécution du présent Contrat, et à ne pas la divulguer à des tiers sans l'autorisation préalable et écrite de l'autre Partie, sauf obligation légale ou requête d'une autorité compétente.",

    c3_title: "TROISIÈME. EXCLUSIONS",
    c3_body: "Les obligations de confidentialité ne s'appliquent pas aux informations qui : (a) sont ou deviennent publiques sans faute de la partie réceptrice ; (b) étaient licitement connues de la partie réceptrice avant leur divulgation ; (c) sont licitement reçues d'un tiers sans restriction de confidentialité ; ou (d) doivent être divulguées en vertu d'une obligation légale, judiciaire ou d'une autorité compétente, moyennant notification préalable à l'autre Partie lorsque cela est possible.",

    c4_title_nda: "QUATRIÈME. DURÉE",
    c4_body_nda: "Les obligations de confidentialité établies dans le présent Accord resteront en vigueur pendant {duration} à compter de la date de signature du présent document, indépendamment de la fin de toute relation commerciale entre les Parties.",
    c4_title_b2b: "QUATRIÈME. DURÉE ET CONFIDENTIALITÉ",
    c4_body_b2b: "Le présent Contrat aura une durée de {duration} à compter de sa signature. Les obligations de confidentialité établies à la Clause Deuxième resteront en vigueur pendant cette période et après la fin du Contrat, quelle qu'en soit la cause.",

    c5_title: "CINQUIÈME. RESTITUTION OU DESTRUCTION DE L'INFORMATION",
    c5_body: "Sur demande de la partie divulgatrice, ou à la fin du présent Accord, la partie réceptrice devra restituer ou détruire, selon les instructions reçues, tous les documents, supports et copies contenant des informations confidentielles, et fournir une confirmation écrite de cette restitution ou destruction.",

    c6_title_nda: "SIXIÈME. ABSENCE DE LICENCE ET DE RELATION DE TRAVAIL",
    c6_body_nda: "Aucune disposition du présent Accord ne sera interprétée comme accordant une licence, un droit de propriété intellectuelle ou industrielle, ni comme créant une relation de travail, sociétaire ou de représentation entre les Parties.",
    c6_title_b2b: "CINQUIÈME. NATURE DE LA RELATION",
    c6_body_b2b: "Le présent Contrat ne crée aucune relation de travail, sociétaire, d'agence ni de représentation entre les Parties. {roleA} agira en tant que prestataire indépendant, conservant une pleine autonomie technique et administrative dans l'exécution des services.",

    c7_title: "SEPTIÈME. DROIT APPLICABLE ET JURIDICTION",
    c7_title_b2b: "SIXIÈME. DROIT APPLICABLE ET JURIDICTION",
    c7_body: "Le présent document sera régi et interprété conformément aux lois en vigueur à {jurisdiction}. Pour la résolution de tout litige découlant de son interprétation ou de son exécution, les Parties se soumettent aux tribunaux compétents de cette juridiction, renonçant expressément à tout autre for qui pourrait leur être applicable.",

    c8_title: "HUITIÈME. DISPOSITIONS GÉNÉRALES",
    c8_title_b2b: "SEPTIÈME. DISPOSITIONS GÉNÉRALES",
    c8_body: "Le présent document constitue l'accord intégral entre les Parties concernant son objet, annulant tout accord antérieur, verbal ou écrit. Toute modification devra être faite par écrit et signée par les deux Parties. Si une clause est déclarée nulle ou inapplicable, cela n'affectera pas la validité des autres dispositions.",

    sign_place_date: "À {jurisdiction}, à la date de signature indiquée ci-dessous.",
    sign_label: "Signature",
    sign_name_label: "Nom et fonction",

    duration_1: "un (1) an",
    duration_3: "trois (3) ans",
    duration_5: "cinq (5) ans",
    duration_indefinite: "une durée indéterminée, tant que l'information conserve son caractère confidentiel",
  },

  ru: {
    meta_title: "Бесплатный онлайн-генератор NDA и B2B-договоров | PDF-шаблоны",
    meta_description: "Создайте и скачайте соглашение о неразглашении (NDA) — одностороннее, взаимное или договор оказания услуг B2B — в формате PDF за несколько минут. Бесплатно, без регистрации.",
    brand_name: "NDAgen",
    nav_tool: "Генератор",
    nav_guide: "Юридический гид",
    nav_faq: "Вопросы",
    ad_label: "Реклама",
    ad_native: "Нативный блок",
    hero_badge: "100% бесплатно · Без регистрации · Мгновенное скачивание",
    hero_title: "Генератор соглашений о неразглашении (NDA) и B2B-договоров",
    hero_subtitle: "Создайте, просмотрите и скачайте профессиональное NDA или договор оказания услуг в формате PDF менее чем за 3 минуты.",
    tpl_unilateral_title: "Одностороннее NDA",
    tpl_unilateral_desc: "Одна сторона раскрывает информацию, другая её защищает.",
    tpl_mutual_title: "Взаимное (двустороннее) NDA",
    tpl_mutual_desc: "Обе стороны обмениваются информацией и защищают её.",
    tpl_b2b_title: "B2B-договор оказания услуг",
    tpl_b2b_desc: "Оказание услуг между компаниями.",
    tpl_unilateral_short: "Односторонний",
    tpl_mutual_short: "Взаимный",
    tpl_b2b_short: "B2B",
    btn_view_document: "Смотреть документ",
    step1_label: "Стороны",
    step2_label: "Предмет",
    step3_label: "Срок",
    step4_label: "Проверка",
    party_a_legend: "Раскрывающая сторона",
    party_a_legend_mutual: "Первая сторона",
    party_a_legend_b2b: "Исполнитель услуг",
    party_b_legend: "Принимающая сторона",
    party_b_legend_mutual: "Вторая сторона",
    party_b_legend_b2b: "Заказчик",
    label_name: "Имя / Компания",
    label_taxid: "ИНН / Идентификационный номер",
    label_address: "Адрес",
    ph_name: "Напр.: ООО «Акме Корп»",
    ph_taxid: "Напр.: ИНН 1234567890",
    ph_address: "Напр.: ул. Главная 10, Москва, Россия",
    label_object: "Предмет и цель конфиденциальной информации",
    label_object_b2b: "Предмет и объём оказываемой услуги",
    ph_object: "Напр.: Оценка возможного делового партнёрства для совместной разработки программной платформы...",
    object_hint: "Кратко опишите причину передачи информации (переговоры, сотрудничество, оказание услуг и т.д.).",
    label_duration: "Срок действия обязательства",
    label_duration_b2b: "Срок действия договора",
    opt_indefinite: "Бессрочно",
    label_jurisdiction: "Юрисдикция и применимое право",
    ph_jurisdiction: "Напр.: Москва, Россия",
    review_hint: "Проверьте предварительный просмотр справа. Когда всё будет верно, скачайте документ в PDF или скопируйте его в буфер обмена.",
    btn_pdf: "Скачать в PDF",
    btn_copy: "Скопировать текст",
    btn_clear: "Очистить форму",
    btn_prev: "← Назад",
    btn_next: "Далее →",
    btn_finish: "Готово",
    preview_title: "Предпросмотр в реальном времени",
    preview_live: "В реальном времени",
    guide_h2_1: "Что такое соглашение о неразглашении (NDA)?",
    guide_p_1: "Соглашение о неразглашении, или NDA (Non-Disclosure Agreement), — это юридический договор, по которому одна или несколько сторон обязуются не раскрывать, не разглашать и не использовать в собственных интересах конфиденциальную информацию, полученную в ходе переговоров, сотрудничества или деловых отношений. Это необходимый инструмент перед тем, как делиться бизнес-планами, исходным кодом, финансовыми данными, прототипами или любой иной чувствительной информацией с третьими лицами.",
    guide_h3_1: "Виды NDA: односторонний и двусторонний",
    guide_p_2: "В <strong>одностороннем NDA</strong> только одна сторона («раскрывающая сторона») передаёт конфиденциальную информацию, а другая («принимающая сторона») обязуется её защищать. Такая модель распространена, когда компания передаёт информацию поставщику, кандидату на должность или потенциальному инвестору. В <strong>двустороннем (взаимном) NDA</strong> обе стороны обмениваются конфиденциальной информацией и обе принимают на себя обязательства по её защите — это типично для слияний, совместных предприятий и стратегических альянсов.",
    guide_h3_2: "Обязательные пункты NDA",
    guide_p_clauses_intro: "Любое грамотно составленное соглашение о неразглашении должно содержать как минимум следующие элементы:",
    guide_list_clauses: [
      "<strong>Определение конфиденциальной информации:</strong> какие данные, документы или сведения защищены соглашением (технические, коммерческие, финансовые, исходный код и т. д.).",
      "<strong>Исключения:</strong> информация, которая не считается конфиденциальной, поскольку является публичной, уже известна принимающей стороне или должна быть раскрыта по требованию компетентного органа.",
      "<strong>Срок действия:</strong> период, в течение которого сохраняется обязательство о конфиденциальности — 1, 3, 5 лет или бессрочно, в зависимости от случая.",
      "<strong>Санкции за нарушение:</strong> экономические или юридические последствия (возмещение убытков, штрафная неустойка, обеспечительные меры) в случае несанкционированного раскрытия информации.",
      "<strong>Юрисдикция и применимое право:</strong> страна или город, суды и законодательство которых будут разрешать любые споры, возникающие из соглашения."
    ],
    guide_h3_3: "Договоры оказания услуг B2B",
    guide_p_3: "Договор B2B (business-to-business) формализует отношения между двумя компаниями, в которых одна оказывает услуги другой. Помимо определения объёма услуг и сроков, такой договор обычно включает пункты о конфиденциальности для защиты информации, которой стороны обмениваются в ходе сотрудничества, а также указание применимой юрисдикции на случай спора.",
    guide_h3_4: "Советы по подписанию и обеспечению юридической силы документа",
    guide_p_tips_intro: "Чтобы ваш NDA или договор B2B имел максимальную юридическую силу, перед подписанием учтите следующие рекомендации:",
    guide_list_tips: [
      "Проверьте личность и правоспособность лиц, подписывающих документ от имени каждой компании.",
      "Подпишите документ в двух экземплярах (по одному для каждой стороны) или используйте платформу электронной подписи, имеющую юридическую силу в вашей стране.",
      "Всегда указывайте дату подписания — это ключевой элемент для расчёта сроков и определения применимого права с течением времени.",
      "Перед использованием документа в споре адаптируйте положения о юрисдикции и санкциях к местному законодательству.",
      "Сохраните подписанный экземпляр и, по возможности, доказательство отправки или получения (заказное письмо, электронная подпись с меткой времени).",
      "При работе с особо чувствительной информацией или контрактами большой стоимости перед подписанием обратитесь за проверкой к профильному юристу."
    ],
    faq_title: "Часто задаваемые вопросы",
    faq_q1: "Имеет ли юридическую силу NDA, созданный онлайн?",
    faq_a1: "Да, может иметь. NDA, созданный с помощью этого инструмента, обладает такой же юридической силой, как и любой другой договор, при условии, что в нём присутствуют существенные элементы (чётко определённые стороны, законный предмет и согласие сторон) и он должным образом подписан обеими сторонами. Однако его практическая применимость зависит от законодательства вашей страны, поэтому перед подписанием, особенно в случае договоров большой ценности, рекомендуем проверку юристом.",
    faq_q2: "В чём разница между односторонним и взаимным NDA?",
    faq_a2: "В одностороннем NDA только одна сторона (раскрывающая) передаёт конфиденциальную информацию, а другая (принимающая) обязуется её защищать. Во взаимном или двустороннем NDA обе стороны обмениваются конфиденциальной информацией, одновременно выступая и в роли раскрывающей, и в роли принимающей стороны.",
    faq_q3: "Как долго должна действовать конфиденциальность?",
    faq_a3: "Единого правила не существует: наиболее распространённые сроки — 1, 3 или 5 лет с момента подписания соглашения. В особо чувствительных сферах, таких как промышленные секреты или исходный код программного обеспечения, часто устанавливают бессрочный срок, действующий до тех пор, пока информация сохраняет конфиденциальный характер.",
    faq_q4: "Нужен ли мне юрист для подписания?",
    faq_a4: "Это не обязательно, но настоятельно рекомендуется, особенно если соглашение защищает информацию высокой ценности, имеет длительный срок действия или является частью сложных переговоров. Этот инструмент позволяет создать профессиональный и полный черновик, который затем можно проверить у юриста перед окончательным подписанием.",
    faq_q5: "Что произойдёт, если кто-то нарушит соглашение?",
    faq_a5: "Нарушение NDA может повлечь иск о возмещении причинённых убытков, обеспечительные меры для прекращения или предотвращения продолжающегося раскрытия информации, а также применение конкретных санкций, согласованных сторонами в соответствующем пункте. Чтобы воспользоваться этими правами, пострадавшая сторона должна будет доказать факт нарушения и причинённый ущерб в компетентном суде, указанном в пункте о юрисдикции.",
    faq_q6: "Как подписать этот документ?",
    faq_a6: "Вы можете скачать PDF, созданный инструментом, и распечатать его, чтобы обе стороны подписали документ вручную, в идеале в двух экземплярах. Также можно использовать платформу электронной подписи, юридически признанную в вашей стране. В обоих случаях убедитесь, что дата подписания чётко зафиксирована, и сохраните копию подписанного документа.",
    disclaimer_title: "Юридическое уведомление:",
    disclaimer_text: "Документы, создаваемые этим инструментом, являются ориентировочными шаблонами, основанными на стандартных положениях, широко используемых в соглашениях о неразглашении и договорах оказания услуг B2B. Они предоставляются исключительно в информационных и справочных целях и не являются юридической, налоговой или иной консультацией, а также не создают отношений «адвокат — клиент» между пользователем и разработчиками данного инструмента. Законодательство, применимое к соглашениям о неразглашении и коммерческим договорам, существенно различается в зависимости от страны, штата или юрисдикции, поэтому данные шаблоны могут потребовать адаптации к местным нормам перед использованием. Пользователь несёт единоличную ответственность за проверку, дополнение и адаптацию созданного содержания, а также за проверку его действительности и соответствия конкретному случаю. Мы настоятельно рекомендуем проверку квалифицированным юристом перед подписанием или использованием любого документа, созданного с помощью этого инструмента. Ни при каких обстоятельствах разработчики данного инструмента не несут ответственности за ущерб, убытки или последствия, возникшие в результате использования, неправильного использования или толкования созданных документов.",
    benefits_title: "Почему стоит использовать NDAgen?",
    benefits_subtitle: "Самый быстрый, безопасный и профессиональный способ защитить вашу конфиденциальную информацию.",
    benefit_1_title: "100% бесплатно, без регистрации",
    benefit_1_desc: "Создавайте и скачивайте документы бесплатно, без создания аккаунта и указания электронной почты.",
    benefit_2_title: "Полная конфиденциальность (на стороне клиента)",
    benefit_2_desc: "Вся обработка происходит прямо в вашем браузере. Ваши данные никогда не отправляются и не хранятся на сервере.",
    benefit_3_title: "Юридическая сила и стандарт B2B",
    benefit_3_desc: "Пункты составлены в соответствии с юридическими стандартами, обычно применяемыми в международных соглашениях о неразглашении и договорах B2B.",
    benefit_4_title: "Двуязычный режим и двойной экспорт",
    benefit_4_desc: "Создавайте договоры на двух языках параллельно и экспортируйте их в PDF или Word одним щелчком.",
    donate_btn_label: "Поддержать проект",
    donate_modal_title: "Поддержать проект",
    donate_modal_desc: "NDAgen бесплатен и не требует регистрации. Если этот инструмент оказался вам полезен, рассмотрите возможность угостить нас чашкой кофе, чтобы помочь поддерживать его работу.",
    donate_custom_placeholder: "Другая сумма",
    donate_thanks_msg: "Спасибо за вашу поддержку! Вы будете перенаправлены на платёжную платформу.",
    donate_btn_confirm: "Продолжить",
    footer_rights: "Все права защищены.",
    footer_note: "Бесплатный инструмент · Не заменяет профессиональную юридическую консультацию.",
    copy_success: "Текст скопирован в буфер обмена!",
    copy_error: "Не удалось скопировать текст.",
    clear_confirm: "Вы уверены, что хотите очистить всю форму?",
    pdf_generating: "Создание PDF...",
    btn_docx: "Скачать в Word (.docx)",
    docx_generating: "Создание Word...",
    docx_error: "Не удалось создать файл Word. Попробуйте снова.",
    docx_lib_error: "Не удалось загрузить модуль Word. Проверьте подключение к интернету.",
    logo_upload_btn: "Загрузить логотип компании (необязательно)",
    logo_remove_btn: "Удалить логотип",
    logo_error_type: "Неподдерживаемый формат изображения. Используйте PNG, JPG или SVG.",
    sig_modal_title: "Электронная подпись",
    sig_tab_draw: "Нарисовать",
    sig_tab_upload: "Загрузить изображение",
    sig_draw_hint: "Нарисуйте свою подпись выше мышью или пальцем.",
    sig_upload_btn: "Выбрать изображение (PNG/JPG)",
    sig_upload_hint: "Изображение будет автоматически подогнано под область подписи.",
    sig_btn_clear: "Очистить подпись",
    sig_btn_confirm: "Подтвердить подпись",
    btn_cancel: "Отмена",
    sig_add_btn: "Добавить подпись",
    sig_edit_btn: "Изменить",
    sig_remove_btn: "Удалить",
    sig_slot_prefix: "Подпись:",
    sig_error_empty: "Нарисуйте или загрузите изображение перед подтверждением подписи.",
    btn_save_template: "Сохранить мои данные как шаблон",
    btn_load_template: "Загрузить мои данные",
    autosave_note: "Ваши данные автоматически сохраняются в этом браузере.",
    template_saved: "Данные раскрывающей стороны сохранены как шаблон.",
    template_loaded: "Шаблон успешно загружен.",
    template_empty: "Вы ещё не сохранили ни одного шаблона.",
    completion_label: "Заполненность документа",
    validation_missing: "Заполните выделенные обязательные поля перед скачиванием документа.",
    bilingual_mode_label: "Двуязычный режим (два языка)",
    bilingual_primary_label: "Основной язык",
    bilingual_secondary_label: "Дополнительный язык",
    custom_filename_label: "Пользовательское имя файла (необязательно)",
    custom_filename_placeholder: "Напр.: NDA_AcmeCorp_2026",
    doc_ref_label: "НОМЕР",
    doc_issue_date_label: "Дата выдачи",
    doc_parties_heading: "Стороны соглашения",
    sign_field_name: "Полное имя",
    sign_field_role: "Должность / Роль",
    sign_field_id: "Документ, удостоверяющий личность",
    sign_field_date: "Дата",
    doc_verified_badge: "Электронный документ создан и проверен",
    pdf_footer_confidential: "Конфиденциальный документ · Только для сторон, подписавших соглашение",
    pdf_footer_page_of: "Страница {current} из {total}",

    doc_title_nda_unilateral: "ОДНОСТОРОННЕЕ СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ",
    doc_title_nda_mutual: "ДВУСТОРОННЕЕ (ВЗАИМНОЕ) СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ",
    doc_title_b2b_services: "B2B-ДОГОВОР ОКАЗАНИЯ УСЛУГ",
    doc_subtitle: "Документ создан {date}",
    ph_nameA: "[Название раскрывающей стороны]",
    ph_nameB: "[Название принимающей стороны]",
    ph_id: "[ИНН не указан]",
    ph_addr: "[адрес не указан]",
    ph_purpose: "[цель не указана]",
    ph_jur: "[юрисдикция не указана]",
    role_discloser: "РАСКРЫВАЮЩАЯ СТОРОНА",
    role_receiver: "ПРИНИМАЮЩАЯ СТОРОНА",
    role_first: "ПЕРВАЯ СТОРОНА",
    role_second: "ВТОРАЯ СТОРОНА",
    role_provider: "ИСПОЛНИТЕЛЬ",
    role_client: "ЗАКАЗЧИК",
    intro_nda: "Настоящим заключается Соглашение о неразглашении (далее — «Соглашение») между, с одной стороны, {nameA}, идентифицированным(ой) как {idA}, с местонахождением {addrA} (далее — «{roleA}»); и, с другой стороны, {nameB}, идентифицированным(ой) как {idB}, с местонахождением {addrB} (далее — «{roleB}»), совместно именуемыми «Стороны», на следующих условиях:",
    intro_b2b: "Настоящим заключается Договор оказания услуг (далее — «Договор») между, с одной стороны, {nameA}, идентифицированным(ой) как {idA}, с местонахождением {addrA} (далее — «{roleA}»); и, с другой стороны, {nameB}, идентифицированным(ой) как {idB}, с местонахождением {addrB} (далее — «{roleB}»), совместно именуемыми «Стороны», на следующих условиях:",

    c1_title_nda: "ПЕРВОЕ. ПРЕДМЕТ",
    c1_body_nda_uni: "Предметом настоящего Соглашения является установление условий, на которых {roleA} раскроет {roleB} определённую конфиденциальную информацию, связанную со следующим: {purpose}. {roleB} обязуется использовать такую информацию исключительно в этих целях.",
    c1_body_nda_mutual: "Предметом настоящего Соглашения является установление условий, на которых {roleA} и {roleB} смогут взаимно раскрывать друг другу конфиденциальную информацию, связанную со следующим: {purpose}. Каждая Сторона обязуется использовать полученную информацию исключительно в этих целях.",
    c1_title_b2b: "ПЕРВОЕ. ПРЕДМЕТ ДОГОВОРА",
    c1_body_b2b: "{roleA} обязуется оказать {roleB} услуги, описанные ниже: {purpose}. Услуги будут выполняться в соответствии с применимыми профессиональными стандартами и с должной осмотрительностью.",

    c2_title_nda_uni: "ВТОРОЕ. ОБЯЗАННОСТИ ПРИНИМАЮЩЕЙ СТОРОНЫ",
    c2_body_nda_uni: "{roleB} обязуется: (i) хранить конфиденциальную информацию в строгой тайне; (ii) не раскрывать её третьим лицам без предварительного письменного согласия {roleA}; (iii) не использовать её для целей, отличных от указанных в Первом пункте; и (iv) принимать разумные меры безопасности для предотвращения случайного или несанкционированного раскрытия.",
    c2_title_nda_mutual: "ВТОРОЕ. ОБЯЗАТЕЛЬСТВА О КОНФИДЕНЦИАЛЬНОСТИ",
    c2_body_nda_mutual: "Каждая Сторона, выступая в роли принимающей стороны, обязуется: (i) хранить полученную конфиденциальную информацию в строгой тайне; (ii) не раскрывать её третьим лицам без предварительного письменного согласия раскрывающей Стороны; (iii) не использовать её для целей, отличных от указанных в Первом пункте; и (iv) принимать разумные меры безопасности для предотвращения случайного или несанкционированного раскрытия.",
    c2_title_b2b: "ВТОРОЕ. КОНФИДЕНЦИАЛЬНОСТЬ",
    c2_body_b2b: "Стороны обязуются сохранять в строгой тайне всю техническую, коммерческую или финансовую информацию, которой они обмениваются в связи с исполнением настоящего Договора, и не раскрывать её третьим лицам без предварительного письменного согласия другой Стороны, за исключением случаев, предусмотренных законом или требованием компетентного органа.",

    c3_title: "ТРЕТЬЕ. ИСКЛЮЧЕНИЯ",
    c3_body: "Обязательства о конфиденциальности не распространяются на информацию, которая: (a) является или становится общедоступной не по вине принимающей стороны; (b) была правомерно известна принимающей стороне до её раскрытия; (c) правомерно получена от третьего лица без ограничений конфиденциальности; или (d) должна быть раскрыта по требованию закона, суда или компетентного органа при условии предварительного уведомления другой Стороны, когда это возможно.",

    c4_title_nda: "ЧЕТВЁРТОЕ. СРОК ДЕЙСТВИЯ",
    c4_body_nda: "Обязательства о конфиденциальности, установленные настоящим Соглашением, остаются в силе в течение {duration} с даты подписания настоящего документа, независимо от прекращения любых деловых отношений между Сторонами.",
    c4_title_b2b: "ЧЕТВЁРТОЕ. СРОК ДЕЙСТВИЯ И КОНФИДЕНЦИАЛЬНОСТЬ",
    c4_body_b2b: "Настоящий Договор действует в течение {duration} с момента его подписания. Обязательства о конфиденциальности, установленные во Втором пункте, остаются в силе в течение этого периода и после прекращения Договора по любой причине.",

    c5_title: "ПЯТОЕ. ВОЗВРАТ ИЛИ УНИЧТОЖЕНИЕ ИНФОРМАЦИИ",
    c5_body: "По требованию раскрывающей стороны или по окончании настоящего Соглашения принимающая сторона обязана вернуть или уничтожить, в соответствии с полученными инструкциями, все документы, носители и копии, содержащие конфиденциальную информацию, и предоставить письменное подтверждение такого возврата или уничтожения.",

    c6_title_nda: "ШЕСТОЕ. ОТСУТСТВИЕ ЛИЦЕНЗИИ И ТРУДОВЫХ ОТНОШЕНИЙ",
    c6_body_nda: "Ничто в настоящем Соглашении не должно толковаться как предоставление лицензии, права интеллектуальной или промышленной собственности, а также как создание трудовых, корпоративных или представительских отношений между Сторонами.",
    c6_title_b2b: "ПЯТОЕ. ХАРАКТЕР ОТНОШЕНИЙ",
    c6_body_b2b: "Настоящий Договор не создаёт трудовых, корпоративных, агентских или представительских отношений между Сторонами. {roleA} действует как независимый подрядчик, сохраняя полную техническую и административную самостоятельность при оказании услуг.",

    c7_title: "СЕДЬМОЕ. ПРИМЕНИМОЕ ПРАВО И ЮРИСДИКЦИЯ",
    c7_title_b2b: "ШЕСТОЕ. ПРИМЕНИМОЕ ПРАВО И ЮРИСДИКЦИЯ",
    c7_body: "Настоящий документ регулируется и толкуется в соответствии с законодательством, действующим в {jurisdiction}. Для разрешения любых споров, возникающих в связи с его толкованием или исполнением, Стороны подчиняются компетентным судам данной юрисдикции, прямо отказываясь от любой иной подсудности, которая могла бы им принадлежать.",

    c8_title: "ВОСЬМОЕ. ОБЩИЕ ПОЛОЖЕНИЯ",
    c8_title_b2b: "СЕДЬМОЕ. ОБЩИЕ ПОЛОЖЕНИЯ",
    c8_body: "Настоящий документ представляет собой полное соглашение между Сторонами относительно его предмета, отменяя любые предыдущие договорённости, устные или письменные. Любые изменения должны быть оформлены в письменном виде и подписаны обеими Сторонами. Признание какого-либо пункта недействительным или неприменимым не влияет на действительность остальных положений.",

    sign_place_date: "В {jurisdiction}, датой подписания, указанной ниже.",
    sign_label: "Подпись",
    sign_name_label: "Имя и должность",

    duration_1: "один (1) год",
    duration_3: "три (3) года",
    duration_5: "пять (5) лет",
    duration_indefinite: "неопределённый срок, пока информация сохраняет конфиденциальный характер",
  },

  zh: {
    meta_title: "免费在线保密协议(NDA)与B2B合同生成器 | PDF模板",
    meta_description: "几分钟内生成并下载您的保密协议(NDA)——单向、双向或B2B服务合同——PDF格式。免费，无需注册。",
    brand_name: "NDAgen",
    nav_tool: "生成器",
    nav_guide: "法律指南",
    nav_faq: "常见问题",
    ad_label: "广告",
    ad_native: "原生广告位",
    hero_badge: "100% 免费 · 无需注册 · 即时下载",
    hero_title: "保密协议(NDA)与B2B合同生成器",
    hero_subtitle: "3分钟内创建、预览并下载专业的NDA或服务合同PDF文件。",
    tpl_unilateral_title: "单向保密协议",
    tpl_unilateral_desc: "一方披露信息，另一方负责保护。",
    tpl_mutual_title: "双向（互惠）保密协议",
    tpl_mutual_desc: "双方互相分享并保护信息。",
    tpl_b2b_title: "B2B服务合同",
    tpl_b2b_desc: "企业间的服务提供。",
    tpl_unilateral_short: "单向",
    tpl_mutual_short: "双向",
    tpl_b2b_short: "B2B",
    btn_view_document: "查看文档",
    step1_label: "各方信息",
    step2_label: "目的",
    step3_label: "期限",
    step4_label: "审核",
    party_a_legend: "披露方",
    party_a_legend_mutual: "第一方",
    party_a_legend_b2b: "服务提供方",
    party_b_legend: "接收方",
    party_b_legend_mutual: "第二方",
    party_b_legend_b2b: "客户",
    label_name: "姓名 / 公司名称",
    label_taxid: "税务登记号 / 身份证明",
    label_address: "地址",
    ph_name: "例如：Acme Corp 有限公司",
    ph_taxid: "例如：统一社会信用代码 91110000XXXXXXXXXX",
    ph_address: "例如：北京市朝阳区主街10号",
    label_object: "保密信息的目的与用途",
    label_object_b2b: "所提供服务的目的与范围",
    ph_object: "例如：评估双方在软件平台联合开发方面的潜在商业合作...",
    object_hint: "简要说明分享该信息的原因（谈判、合作、服务提供等）。",
    label_duration: "保密义务期限",
    label_duration_b2b: "合同期限 / 有效期",
    opt_indefinite: "无限期",
    label_jurisdiction: "管辖权与适用法律",
    ph_jurisdiction: "例如：中国上海",
    review_hint: "请查看右侧预览。确认无误后，下载PDF文件或复制到剪贴板。",
    btn_pdf: "下载PDF",
    btn_copy: "复制文本",
    btn_clear: "清空表单",
    btn_prev: "← 上一步",
    btn_next: "下一步 →",
    btn_finish: "完成",
    preview_title: "实时预览",
    preview_live: "实时",
    guide_h2_1: "什么是保密协议(NDA)？",
    guide_p_1: "保密协议，即NDA（Non-Disclosure Agreement，不披露协议），是一份法律合同，一方或多方在其中承诺不披露、不泄露、也不为自身利益使用在谈判、合作或商业关系过程中共享的机密信息。在与第三方分享商业计划、源代码、财务数据、原型或任何其他敏感信息之前，这是一项必不可少的工具。",
    guide_h3_1: "NDA的类型：单方与双方",
    guide_p_2: "在<strong>单方保密协议</strong>中，只有一方（\"披露方\"）分享机密信息，而另一方（\"接收方\"）承担保护该信息的义务。这种模式在公司向供应商、求职者或潜在投资者分享信息时很常见。而在<strong>双方（互惠）保密协议</strong>中，双方相互交换机密信息，并各自承担保护义务，这在合并、合资企业或战略联盟中十分常见。",
    guide_h3_2: "NDA中不可或缺的条款",
    guide_p_clauses_intro: "任何一份妥善拟定的保密协议至少应包含以下要素：",
    guide_list_clauses: [
      "<strong>机密信息的定义：</strong>协议所保护的数据、文件或知识类型（技术、商业、财务、源代码等）。",
      "<strong>排除事项：</strong>因属于公开信息、接收方已知悉或应主管机关要求而不被视为机密的信息。",
      "<strong>有效期：</strong>保密义务持续的时间，视情况可为1年、3年、5年或无限期。",
      "<strong>违约处罚：</strong>若一方未经授权披露信息所产生的经济或法律后果（损害赔偿、违约金条款、保全措施）。",
      "<strong>管辖权与适用法律：</strong>解决协议引起的任何争议所依据的法院所在国家或城市及其法律。"
    ],
    guide_h3_3: "B2B服务合同",
    guide_p_3: "B2B（企业对企业）合同将两家公司之间的关系正式化，其中一方向另一方提供服务。除了界定服务范围和期限外，此类合同通常还包含保密条款，以保护合作期间交换的信息，以及发生争议时适用的管辖权。",
    guide_h3_4: "文件签署与有效性建议",
    guide_p_tips_intro: "为使您的NDA或B2B合同尽可能具有法律效力，在签署前请考虑以下建议：",
    guide_list_tips: [
      "核实代表每家公司签署文件之人的身份和法律行为能力。",
      "将文件一式两份签署（各方各持一份），或使用在您所在国家具有法律效力的电子签名平台。",
      "务必注明签署日期；这是计算期限和确定适用法律随时间变化的关键要素。",
      "在将文件用于诉讼之前，请根据当地法律调整管辖权和处罚条款。",
      "保留一份已签署的副本，并尽可能保留发送或收到的证明（挂号信、带时间戳的电子签名）。",
      "面对特别敏感的信息或高价值合同时，在签署前请咨询专业律师进行审查。"
    ],
    faq_title: "常见问题",
    faq_q1: "在线生成的NDA具有法律约束力吗？",
    faq_a1: "是的，可以具有法律约束力。使用本工具生成的NDA与任何其他合同具有相同的效力，只要其包含基本要素（明确界定的各方、合法标的和双方同意），并由双方正确签署。不过，其实际可执行性取决于您所在国家的法律，因此我们建议在签署前，尤其是对于高价值协议，请律师进行审查。",
    faq_q2: "单方NDA与互惠NDA有什么区别？",
    faq_a2: "在单方NDA中，只有一方（披露方）分享机密信息，另一方（接收方）承诺保护该信息。而在互惠或双方NDA中，双方相互交换机密信息，同时承担披露方和接收方的双重角色。",
    faq_q3: "保密期限应为多久？",
    faq_a3: "没有统一的规则：最常见的期限为协议签署之日起1年、3年或5年。在工业机密或软件源代码等特别敏感的领域，通常约定无限期，只要信息保持机密性质即持续有效。",
    faq_q4: "签署时需要律师吗？",
    faq_a4: "这不是强制性的，但强烈建议聘请律师，尤其是当协议保护高价值信息、期限较长或属于复杂谈判的一部分时。本工具可生成专业完整的草案，随后可在最终签署前由律师进行审核确认。",
    faq_q5: "如果有人违反协议会怎样？",
    faq_a5: "违反NDA可能导致就所造成的损害提出赔偿要求、采取保全措施以阻止或防止正在进行的信息披露，以及适用双方在相应条款中约定的具体处罚。为主张这些权利，受损方须在管辖条款所指定的有权法院面前证明违约行为及所遭受的损害。",
    faq_q6: "如何签署此文件？",
    faq_a6: "您可以下载本工具生成的PDF文件并打印出来，由双方手动签署，最好一式两份。也可以使用您所在国家法律认可的电子签名平台。无论采用哪种方式，请确保清楚记录签署日期，并保留一份已签署文件的副本。",
    disclaimer_title: "法律免责声明：",
    disclaimer_text: "本工具生成的文件是基于保密协议和B2B服务合同中常用标准条款的参考模板。这些文件仅供参考和信息用途，不构成法律、税务或其他任何形式的建议，也不在用户与本工具运营方之间建立律师与客户关系。适用于保密协议和商业合同的法律因国家、州或司法管辖区的不同而存在显著差异，因此这些模板在使用前可能需要根据当地法规进行调整。用户须自行负责审查、补充和调整所生成的内容，并核实其有效性及是否适用于其具体情况。我们强烈建议在签署或使用本工具生成的任何文件之前，咨询具备相应资质的法律专业人士进行审查。在任何情况下，本工具运营方均不对因使用、误用或解释所生成文件而产生的损害、损失或后果承担责任。",
    benefits_title: "为什么选择NDAgen？",
    benefits_subtitle: "保护您机密信息最快速、安全、专业的方式。",
    benefit_1_title: "100%免费且无需注册",
    benefit_1_desc: "免费生成并下载您的文件，无需创建账户，也无需提供电子邮箱。",
    benefit_2_title: "全面隐私保护（客户端处理）",
    benefit_2_desc: "所有处理均在您的浏览器中完成。您的数据永远不会发送或存储到任何服务器。",
    benefit_3_title: "B2B标准与法律效力",
    benefit_3_desc: "条款依据国际保密协议和B2B合同中常见的法律标准拟定。",
    benefit_4_title: "双语模式与双重导出",
    benefit_4_desc: "同时创建两种语言版本的合同，并一键导出为PDF或Word格式。",
    donate_btn_label: "支持本项目",
    donate_modal_title: "支持本项目",
    donate_modal_desc: "NDAgen完全免费且无需注册。如果这个工具对您有帮助，欢迎请我们喝杯咖啡，帮助我们持续维护它。",
    donate_custom_placeholder: "其他金额",
    donate_thanks_msg: "感谢您的支持！您将被重定向到支付平台。",
    donate_btn_confirm: "继续",
    footer_rights: "版权所有。",
    footer_note: "免费工具 · 不能替代专业法律咨询。",
    copy_success: "文本已复制到剪贴板！",
    copy_error: "无法复制文本。",
    clear_confirm: "确定要清空整个表单吗？",
    pdf_generating: "正在生成PDF...",
    btn_docx: "下载Word文档（.docx）",
    docx_generating: "正在生成Word文档...",
    docx_error: "无法生成Word文件，请重试。",
    docx_lib_error: "无法加载Word生成引擎，请检查您的网络连接。",
    logo_upload_btn: "上传公司徽标（可选）",
    logo_remove_btn: "移除徽标",
    logo_error_type: "不支持的图片格式，请使用PNG、JPG或SVG。",
    sig_modal_title: "电子签名",
    sig_tab_draw: "手绘",
    sig_tab_upload: "上传图片",
    sig_draw_hint: "请在上方用鼠标或手指绘制您的签名。",
    sig_upload_btn: "选择图片（PNG/JPG）",
    sig_upload_hint: "图片将自动调整以适应签名框。",
    sig_btn_clear: "清除签名",
    sig_btn_confirm: "确认签名",
    btn_cancel: "取消",
    sig_add_btn: "添加签名",
    sig_edit_btn: "编辑",
    sig_remove_btn: "移除",
    sig_slot_prefix: "签名：",
    sig_error_empty: "请先绘制或上传图片，然后再确认签名。",
    btn_save_template: "将我的信息保存为模板",
    btn_load_template: "加载我的信息",
    autosave_note: "您的数据会自动保存在此浏览器中。",
    template_saved: "披露方信息已保存为模板。",
    template_loaded: "模板加载成功。",
    template_empty: "您尚未保存任何模板。",
    completion_label: "文档完成度",
    validation_missing: "请先填写高亮显示的必填字段，然后再下载文档。",
    bilingual_mode_label: "双语模式（双语对照）",
    bilingual_primary_label: "主要语言",
    bilingual_secondary_label: "次要语言",
    custom_filename_label: "自定义文件名（可选）",
    custom_filename_placeholder: "例如：NDA_AcmeCorp_2026",
    doc_ref_label: "编号",
    doc_issue_date_label: "签发日期",
    doc_parties_heading: "协议各方",
    sign_field_name: "全名",
    sign_field_role: "职位 / 角色",
    sign_field_id: "身份证明文件",
    sign_field_date: "日期",
    doc_verified_badge: "已生成并验证的电子文档",
    pdf_footer_confidential: "保密文件 · 仅供签署各方使用",
    pdf_footer_page_of: "第 {current} 页，共 {total} 页",

    doc_title_nda_unilateral: "单向保密协议",
    doc_title_nda_mutual: "双向（互惠）保密协议",
    doc_title_b2b_services: "B2B服务合同",
    doc_subtitle: "文档生成日期：{date}",
    ph_nameA: "[披露方名称]",
    ph_nameB: "[接收方名称]",
    ph_id: "[未填写税务登记号]",
    ph_addr: "[未填写地址]",
    ph_purpose: "[未填写目的]",
    ph_jur: "[未填写管辖权]",
    role_discloser: "披露方",
    role_receiver: "接收方",
    role_first: "第一方",
    role_second: "第二方",
    role_provider: "服务提供方",
    role_client: "客户",
    intro_nda: "本保密协议（以下简称\"协议\"）由以下双方签订：一方为{nameA}，识别号为{idA}，地址为{addrA}（以下简称\"{roleA}\"）；另一方为{nameB}，识别号为{idB}，地址为{addrB}（以下简称\"{roleB}\"），以下统称为\"双方\"，条款如下：",
    intro_b2b: "本服务合同（以下简称\"合同\"）由以下双方签订：一方为{nameA}，识别号为{idA}，地址为{addrA}（以下简称\"{roleA}\"）；另一方为{nameB}，识别号为{idB}，地址为{addrB}（以下简称\"{roleB}\"），以下统称为\"双方\"，条款如下：",

    c1_title_nda: "第一条 目的",
    c1_body_nda_uni: "本协议旨在明确{roleA}向{roleB}披露与以下事项相关的特定保密信息的条款和条件：{purpose}。{roleB}承诺仅将该信息用于上述目的。",
    c1_body_nda_mutual: "本协议旨在明确{roleA}与{roleB}之间就以下事项互相披露保密信息的条款和条件：{purpose}。各方承诺仅将所获得的信息用于上述目的。",
    c1_title_b2b: "第一条 合同目的",
    c1_body_b2b: "{roleA}承诺向{roleB}提供以下服务：{purpose}。服务将按照适用于该行业的专业标准并以应有的注意义务履行。",

    c2_title_nda_uni: "第二条 接收方义务",
    c2_body_nda_uni: "{roleB}承诺：(i) 对保密信息严格保密；(ii) 未经{roleA}事先书面同意不得向第三方披露；(iii) 不得将其用于第一条规定以外的目的；(iv) 采取合理的安全措施以防止意外或未经授权的披露。",
    c2_title_nda_mutual: "第二条 保密义务",
    c2_body_nda_mutual: "各方在作为接收方时承诺：(i) 对所接收的保密信息严格保密；(ii) 未经披露方事先书面同意不得向第三方披露；(iii) 不得将其用于第一条规定以外的目的；(iv) 采取合理的安全措施以防止意外或未经授权的披露。",
    c2_title_b2b: "第二条 保密义务",
    c2_body_b2b: "双方承诺对因履行本合同而交换的所有技术、商业或财务信息严格保密，未经对方事先书面同意不得向第三方披露，法律要求或主管机关要求的除外。",

    c3_title: "第三条 除外情形",
    c3_body: "保密义务不适用于以下信息：(a) 非因接收方过错而属于或成为公开信息的；(b) 接收方在披露前已合法获知的；(c) 从第三方合法获得且无保密限制的；或 (d) 根据法律、司法或主管机关要求必须披露的，在可能的情况下应事先通知对方。",

    c4_title_nda: "第四条 期限",
    c4_body_nda: "本协议规定的保密义务自本文件签署之日起持续{duration}，不受双方之间任何商业关系终止的影响。",
    c4_title_b2b: "第四条 有效期与保密义务",
    c4_body_b2b: "本合同自签署之日起有效期为{duration}。第二条规定的保密义务在此期间以及合同因任何原因终止后仍继续有效。",

    c5_title: "第五条 信息的归还或销毁",
    c5_body: "应披露方要求，或本协议终止时，接收方应按指示归还或销毁所有载有保密信息的文件、载体及副本，并提供归还或销毁的书面确认。",

    c6_title_nda: "第六条 无许可及无雇佣关系",
    c6_body_nda: "本协议任何条款均不得被解释为授予许可、知识产权或工业产权，亦不构成双方之间的雇佣、合伙或代理关系。",
    c6_title_b2b: "第五条 关系性质",
    c6_body_b2b: "本合同不构成双方之间的雇佣、合伙、代理或代表关系。{roleA}作为独立承包商行事，在履行服务过程中保有完全的技术和管理自主权。",

    c7_title: "第七条 适用法律与管辖权",
    c7_title_b2b: "第六条 适用法律与管辖权",
    c7_body: "本文件受{jurisdiction}现行法律管辖并据此解释。因本文件解释或履行产生的任何争议，双方应提交该管辖区有管辖权的法院处理，并明确放弃可能适用的其他管辖权。",

    c8_title: "第八条 一般规定",
    c8_title_b2b: "第七条 一般规定",
    c8_body: "本文件构成双方就本协议标的达成的完整协议，取代此前任何口头或书面的理解。任何修改均须以书面形式作出并经双方签署。若任何条款被宣告无效或不可执行，不影响其余条款的效力。",

    sign_place_date: "于{jurisdiction}，签署日期如下所示。",
    sign_label: "签名",
    sign_name_label: "姓名及职位",

    duration_1: "一（1）年",
    duration_3: "三（3）年",
    duration_5: "五（5）年",
    duration_indefinite: "无限期，直至该信息不再具有保密性质为止",
  },

  ja: {
    meta_title: "無料オンラインNDA・B2B契約書ジェネレーター | PDFテンプレート",
    meta_description: "秘密保持契約（NDA）——片務型、双務型、またはB2Bサービス契約——を数分でPDF形式で作成・ダウンロードできます。無料、登録不要。",
    brand_name: "NDAgen",
    nav_tool: "ジェネレーター",
    nav_guide: "法律ガイド",
    nav_faq: "よくある質問",
    ad_label: "広告",
    ad_native: "ネイティブ広告枠",
    hero_badge: "100%無料 · 登録不要 · 即時ダウンロード",
    hero_title: "秘密保持契約（NDA）・B2B契約書ジェネレーター",
    hero_subtitle: "3分以内にプロフェッショナルなNDAまたはサービス契約書を作成・プレビューし、PDFでダウンロードできます。",
    tpl_unilateral_title: "片務型NDA",
    tpl_unilateral_desc: "一方が情報を開示し、他方がそれを保護します。",
    tpl_mutual_title: "双務型（相互）NDA",
    tpl_mutual_desc: "両当事者が情報を共有し、保護します。",
    tpl_b2b_title: "B2Bサービス契約",
    tpl_b2b_desc: "企業間のサービス提供。",
    tpl_unilateral_short: "片務型",
    tpl_mutual_short: "双務型",
    tpl_b2b_short: "B2B",
    btn_view_document: "書類を見る",
    step1_label: "当事者",
    step2_label: "目的",
    step3_label: "期間",
    step4_label: "確認",
    party_a_legend: "開示当事者",
    party_a_legend_mutual: "第一当事者",
    party_a_legend_b2b: "サービス提供者",
    party_b_legend: "受領当事者",
    party_b_legend_mutual: "第二当事者",
    party_b_legend_b2b: "クライアント",
    label_name: "氏名 / 会社名",
    label_taxid: "納税者番号 / 識別番号",
    label_address: "住所",
    ph_name: "例：Acme Corp株式会社",
    ph_taxid: "例：法人番号 1234567890123",
    ph_address: "例：東京都千代田区メイン通り10番地",
    label_object: "秘密情報の目的および用途",
    label_object_b2b: "提供されるサービスの目的および範囲",
    ph_object: "例：ソフトウェアプラットフォームの共同開発に関する事業提携の可能性を評価するため...",
    object_hint: "情報を共有する理由（交渉、協業、サービス提供など）を簡潔に記載してください。",
    label_duration: "義務の存続期間",
    label_duration_b2b: "契約期間 / 有効期間",
    opt_indefinite: "無期限",
    label_jurisdiction: "管轄および準拠法",
    ph_jurisdiction: "例：東京、日本",
    review_hint: "右側のプレビューをご確認ください。内容に問題がなければ、PDFでダウンロードするかクリップボードにコピーしてください。",
    btn_pdf: "PDFでダウンロード",
    btn_copy: "テキストをコピー",
    btn_clear: "フォームをクリア",
    btn_prev: "← 前へ",
    btn_next: "次へ →",
    btn_finish: "完了",
    preview_title: "リアルタイムプレビュー",
    preview_live: "ライブ",
    guide_h2_1: "秘密保持契約(NDA)とは何ですか？",
    guide_p_1: "秘密保持契約、すなわちNDA（Non-Disclosure Agreement）とは、交渉、協業、または取引関係の中で共有された機密情報を、開示、漏洩、または自己の利益のために利用しないことを一方または複数の当事者が約束する法的契約です。事業計画、ソースコード、財務データ、試作品、その他の機密情報を第三者と共有する前に不可欠なツールです。",
    guide_h3_1: "NDAの種類：一方向型と双方向型",
    guide_p_2: "<strong>一方向型NDA</strong>では、一方の当事者（「開示当事者」）のみが機密情報を共有し、他方（「受領当事者」）がそれを保護する義務を負います。このモデルは、企業がサプライヤー、候補者、または潜在的投資家と情報を共有する際によく見られます。一方、<strong>双方向型（相互）NDA</strong>では、両当事者が互いに機密情報を交換し、双方が保護義務を負います。これは合併、ジョイントベンチャー、戦略的提携で頻繁に見られます。",
    guide_h3_2: "NDAに欠かせない条項",
    guide_p_clauses_intro: "適切に作成された秘密保持契約には、少なくとも以下の要素を含める必要があります。",
    guide_list_clauses: [
      "<strong>機密情報の定義：</strong>契約によって保護されるデータ、文書、または知識の種類（技術的、商業的、財務的、ソースコードなど）。",
      "<strong>除外事項：</strong>公知である、受領当事者が既に知っている、または権限のある機関の要求による場合など、機密情報とみなされない情報。",
      "<strong>有効期間：</strong>秘密保持義務が維持される期間で、場合により1年、3年、5年、または無期限となります。",
      "<strong>違反時の罰則：</strong>無許可で情報が開示された場合の経済的または法的な結果（損害賠償、違約金条項、保全措置）。",
      "<strong>管轄権および準拠法：</strong>契約から生じる紛争を解決する裁判所および法律が属する国または都市。"
    ],
    guide_h3_3: "B2Bサービス提供契約",
    guide_p_3: "B2B（企業間）契約は、一方が他方にサービスを提供する2つの企業間の関係を正式なものにします。サービスの範囲や期限を定めるだけでなく、協業中に交換される情報を保護するための秘密保持条項や、紛争が生じた場合の管轄権も通常含まれます。",
    guide_h3_4: "署名と文書の有効性に関するアドバイス",
    guide_p_tips_intro: "NDAまたはB2B契約を可能な限り有効なものにするため、署名前に以下の点を考慮してください。",
    guide_list_tips: [
      "各企業を代表して署名する人物の身元および法的能力を確認してください。",
      "文書を2部作成して署名し（各当事者が1部ずつ保管）、または自国で法的効力を持つ電子署名プラットフォームを利用してください。",
      "署名日を必ず記載してください。これは期限を計算し、時間の経過とともに準拠法を判断するための重要な要素です。",
      "紛争において文書を使用する前に、管轄権および罰則条項を現地の法律に適合させてください。",
      "署名済みの写しを保管し、可能であれば送付または受領の証明（書留郵便、タイムスタンプ付き電子署名）も保管してください。",
      "特に機密性の高い情報や高額な契約の場合は、署名前に専門の弁護士による確認を求めてください。"
    ],
    faq_title: "よくある質問",
    faq_q1: "オンラインで生成されたNDAには法的拘束力がありますか？",
    faq_a1: "はい、法的拘束力を持つことができます。本ツールで生成されたNDAは、必須要素（明確に特定された当事者、適法な目的、および合意）を含み、両当事者が正しく署名していれば、他のいかなる契約とも同等の効力を持ちます。ただし、その実際の執行可能性は自国の法律に依存するため、特に高額な契約の場合は署名前に弁護士による確認をお勧めします。",
    faq_q2: "一方向型NDAと相互型NDAの違いは何ですか？",
    faq_a2: "一方向型NDAでは、一方の当事者（開示当事者）のみが機密情報を共有し、他方（受領当事者）がそれを保護する義務を負います。相互型（双方向型）NDAでは、両当事者が互いに機密情報を交換し、同時に開示当事者と受領当事者の両方の役割を担います。",
    faq_q3: "秘密保持期間はどのくらいにすべきですか？",
    faq_a3: "一律の規則はありません。最も一般的な期間は契約締結から1年、3年、または5年です。産業秘密やソフトウェアのソースコードなど特に機密性の高い分野では、情報が機密性を保つ限り無期限とすることが一般的です。",
    faq_q4: "署名するのに弁護士は必要ですか？",
    faq_a4: "必須ではありませんが、特に契約が高価値の情報を保護している場合、長期間にわたる場合、または複雑な交渉の一部である場合には強くお勧めします。本ツールでは専門的で完全な草案を作成でき、最終署名の前に弁護士による確認を受けることができます。",
    faq_q5: "契約に違反した場合はどうなりますか？",
    faq_a5: "NDA違反は、生じた損害に対する賠償請求、進行中の開示を中止または防止するための保全措置、および当事者が該当条項で合意した具体的な罰則の適用につながる可能性があります。これらの権利を行使するには、被害を受けた当事者が、管轄条項で指定された管轄裁判所において違反および被った損害を証明する必要があります。",
    faq_q6: "この文書にはどのように署名すればよいですか？",
    faq_a6: "本ツールで生成されたPDFをダウンロードして印刷し、両当事者が手動で署名することができます。理想的には2部作成してください。また、自国で法的に認められた電子署名プラットフォームを利用することも可能です。いずれの場合も、署名日が明確に記録されていることを確認し、署名済み文書の写しを保管してください。",
    disclaimer_title: "法的免責事項：",
    disclaimer_text: "本ツールによって生成される文書は、秘密保持契約およびB2Bサービス提供契約で一般的に使用される標準条項に基づく参考テンプレートです。これらは情報提供および参考のみを目的として提供されるものであり、法的、税務、その他いかなる助言も構成せず、利用者と本ツールの運営者との間に弁護士・依頼人関係を生じさせるものでもありません。秘密保持契約および商取引契約に適用される法律は、国、州、または管轄区域によって大きく異なるため、これらのテンプレートは使用前に現地の規制に適合するよう調整が必要な場合があります。生成された内容の確認、補完、調整、およびその有効性と個別の状況への適合性の検証は、利用者の責任において行うものとします。本ツールで生成された文書に署名または使用する前に、資格を有する法律専門家による確認を強くお勧めします。本ツールの運営者は、生成された文書の使用、誤用、または解釈から生じるいかなる損害、損失、または結果についても、一切責任を負わないものとします。",
    benefits_title: "なぜNDAgenを使うのか？",
    benefits_subtitle: "機密情報を保護する、最も速く、安全で、プロフェッショナルな方法です。",
    benefit_1_title: "100%無料・登録不要",
    benefit_1_desc: "アカウント作成やメールアドレスの入力なしで、無料で文書を作成・ダウンロードできます。",
    benefit_2_title: "完全なプライバシー（クライアントサイド処理）",
    benefit_2_desc: "すべての処理はお使いのブラウザ内で行われます。データがサーバーに送信・保存されることは一切ありません。",
    benefit_3_title: "B2B基準と法的有効性",
    benefit_3_desc: "国際的な秘密保持契約およびB2B契約で一般的に使用される法的基準に基づいて条項を作成しています。",
    benefit_4_title: "バイリンガルモードとデュアルエクスポート",
    benefit_4_desc: "2つの言語で契約書を並行して作成し、ワンクリックでPDFまたはWordにエクスポートできます。",
    donate_btn_label: "このプロジェクトを支援する",
    donate_modal_title: "このプロジェクトを支援する",
    donate_modal_desc: "NDAgenは無料で登録も不要です。このツールがお役に立った場合は、運営維持のためにコーヒー一杯分のご支援をご検討ください。",
    donate_custom_placeholder: "その他の金額",
    donate_thanks_msg: "ご支援ありがとうございます！決済プラットフォームへ転送されます。",
    donate_btn_confirm: "続ける",
    footer_rights: "全著作権所有。",
    footer_note: "無料ツール · 専門家による法律相談の代わりにはなりません。",
    copy_success: "テキストをクリップボードにコピーしました！",
    copy_error: "テキストをコピーできませんでした。",
    clear_confirm: "フォーム全体をクリアしてもよろしいですか？",
    pdf_generating: "PDFを生成中...",
    btn_docx: "Word（.docx）でダウンロード",
    docx_generating: "Wordを生成中...",
    docx_error: "Wordファイルを生成できませんでした。もう一度お試しください。",
    docx_lib_error: "Word生成エンジンを読み込めませんでした。インターネット接続をご確認ください。",
    logo_upload_btn: "会社のロゴをアップロード（任意）",
    logo_remove_btn: "ロゴを削除",
    logo_error_type: "サポートされていない画像形式です。PNG、JPG、またはSVGをご使用ください。",
    sig_modal_title: "電子署名",
    sig_tab_draw: "手書き",
    sig_tab_upload: "画像をアップロード",
    sig_draw_hint: "上のエリアにマウスまたは指で署名を描いてください。",
    sig_upload_btn: "画像を選択（PNG/JPG）",
    sig_upload_hint: "画像は署名欄に自動的に合わせて調整されます。",
    sig_btn_clear: "署名をクリア",
    sig_btn_confirm: "署名を確定",
    btn_cancel: "キャンセル",
    sig_add_btn: "署名を追加",
    sig_edit_btn: "編集",
    sig_remove_btn: "削除",
    sig_slot_prefix: "署名：",
    sig_error_empty: "署名を確定する前に、描画または画像のアップロードを行ってください。",
    btn_save_template: "自分の情報をテンプレートとして保存",
    btn_load_template: "自分の情報を読み込む",
    autosave_note: "データはこのブラウザに自動的に保存されます。",
    template_saved: "開示当事者の情報をテンプレートとして保存しました。",
    template_loaded: "テンプレートを正常に読み込みました。",
    template_empty: "まだテンプレートが保存されていません。",
    completion_label: "文書の入力状況",
    validation_missing: "ダウンロードする前に、ハイライトされた必須項目を入力してください。",
    bilingual_mode_label: "バイリンガルモード（二言語対応）",
    bilingual_primary_label: "第一言語",
    bilingual_secondary_label: "第二言語",
    custom_filename_label: "カスタムファイル名（任意）",
    custom_filename_placeholder: "例：NDA_AcmeCorp_2026",
    doc_ref_label: "参照番号",
    doc_issue_date_label: "発行日",
    doc_parties_heading: "契約当事者",
    sign_field_name: "氏名",
    sign_field_role: "役職 / 役割",
    sign_field_id: "身分証明書",
    sign_field_date: "日付",
    doc_verified_badge: "電子生成・検証済み文書",
    pdf_footer_confidential: "秘密文書 · 署名当事者限定使用",
    pdf_footer_page_of: "{total}ページ中{current}ページ",

    doc_title_nda_unilateral: "片務型秘密保持契約",
    doc_title_nda_mutual: "双務型（相互）秘密保持契約",
    doc_title_b2b_services: "B2Bサービス契約",
    doc_subtitle: "文書作成日：{date}",
    ph_nameA: "[開示当事者の名称]",
    ph_nameB: "[受領当事者の名称]",
    ph_id: "[識別番号未記入]",
    ph_addr: "[住所未記入]",
    ph_purpose: "[目的未記入]",
    ph_jur: "[管轄未記入]",
    role_discloser: "開示当事者",
    role_receiver: "受領当事者",
    role_first: "第一当事者",
    role_second: "第二当事者",
    role_provider: "サービス提供者",
    role_client: "クライアント",
    intro_nda: "本秘密保持契約（以下「本契約」）は、一方当事者である{nameA}（識別番号：{idA}、所在地：{addrA}。以下「{roleA}」）と、他方当事者である{nameB}（識別番号：{idB}、所在地：{addrB}。以下「{roleB}」）との間で、以下の条項に従い締結される。両当事者を以下「両当事者」と総称する。",
    intro_b2b: "本サービス契約（以下「本契約」）は、一方当事者である{nameA}（識別番号：{idA}、所在地：{addrA}。以下「{roleA}」）と、他方当事者である{nameB}（識別番号：{idB}、所在地：{addrB}。以下「{roleB}」）との間で、以下の条項に従い締結される。両当事者を以下「両当事者」と総称する。",

    c1_title_nda: "第一条（目的）",
    c1_body_nda_uni: "本契約は、{roleA}が{roleB}に対し、以下の事項に関連する特定の秘密情報を開示するための条件を定めることを目的とする：{purpose}。{roleB}は、当該情報を専らその目的のためにのみ使用することを約束する。",
    c1_body_nda_mutual: "本契約は、{roleA}と{roleB}が、以下の事項に関連する秘密情報を相互に開示し合うための条件を定めることを目的とする：{purpose}。各当事者は、受領した情報を専らその目的のためにのみ使用することを約束する。",
    c1_title_b2b: "第一条（契約の目的）",
    c1_body_b2b: "{roleA}は、{roleB}に対して以下に定めるサービスを提供することを約束する：{purpose}。当該サービスは、当該業界に適用される専門的基準に従い、相応の注意をもって遂行されるものとする。",

    c2_title_nda_uni: "第二条（受領当事者の義務）",
    c2_body_nda_uni: "{roleB}は次の事項を遵守することを約束する：(i) 秘密情報を厳格に秘密として保持すること、(ii) {roleA}の事前の書面による同意なく第三者に開示しないこと、(iii) 第一条に定める目的以外に使用しないこと、(iv) 偶発的または無許可の開示を防止するため合理的な安全対策を講じること。",
    c2_title_nda_mutual: "第二条（秘密保持義務）",
    c2_body_nda_mutual: "各当事者は、受領当事者としての立場において、次の事項を遵守することを約束する：(i) 受領した秘密情報を厳格に秘密として保持すること、(ii) 開示当事者の事前の書面による同意なく第三者に開示しないこと、(iii) 第一条に定める目的以外に使用しないこと、(iv) 偶発的または無許可の開示を防止するため合理的な安全対策を講じること。",
    c2_title_b2b: "第二条（秘密保持）",
    c2_body_b2b: "両当事者は、本契約の履行に関連して交換される技術上、商業上または財務上の情報を厳格に秘密として保持し、法令または権限ある当局の要求による場合を除き、相手方の事前の書面による同意なく第三者に開示しないことを約束する。",

    c3_title: "第三条（除外事項）",
    c3_body: "秘密保持義務は、次に該当する情報には適用されない：(a) 受領当事者の責によらず公知となった、または公知である情報、(b) 開示前に受領当事者が適法に了知していた情報、(c) 秘密保持制限なく第三者から適法に取得した情報、(d) 法令、司法または権限ある当局の要求により開示が義務付けられる情報（可能な限り相手方への事前通知を条件とする）。",

    c4_title_nda: "第四条（存続期間）",
    c4_body_nda: "本契約に定める秘密保持義務は、本文書の署名日から{duration}にわたり効力を有するものとし、両当事者間の取引関係の終了の有無にかかわらず存続する。",
    c4_title_b2b: "第四条（有効期間および秘密保持）",
    c4_body_b2b: "本契約は、署名日から{duration}にわたり有効とする。第二条に定める秘密保持義務は、当該期間中およびいかなる理由による本契約の終了後も存続する。",

    c5_title: "第五条（情報の返還または廃棄）",
    c5_body: "開示当事者からの要求があった場合、または本契約の終了時には、受領当事者は指示に従い、秘密情報を含むすべての文書、媒体および複製物を返還または廃棄し、その返還または廃棄について書面による確認を提供しなければならない。",

    c6_title_nda: "第六条（ライセンスおよび雇用関係の不存在）",
    c6_body_nda: "本契約のいかなる規定も、ライセンス、知的財産権もしくは工業所有権の付与、または両当事者間の雇用関係、組合関係もしくは代理関係の創設を意味するものと解釈されない。",
    c6_title_b2b: "第五条（関係の性質）",
    c6_body_b2b: "本契約は、両当事者間に雇用関係、組合関係、代理関係または代表関係を生じさせるものではない。{roleA}は独立した請負人として行動し、サービスの遂行において完全な技術上および管理上の独立性を保持する。",

    c7_title: "第七条（準拠法および管轄）",
    c7_title_b2b: "第六条（準拠法および管轄）",
    c7_body: "本文書は、{jurisdiction}において施行されている法律に準拠し、これに従って解釈されるものとする。本文書の解釈または履行から生じるいかなる紛争についても、両当事者は当該管轄区域の権限ある裁判所に服するものとし、他に帰属し得るいかなる管轄も明示的に放棄する。",

    c8_title: "第八条（一般条項）",
    c8_title_b2b: "第七条（一般条項）",
    c8_body: "本文書は、その目的に関して両当事者間で成立した完全な合意を構成し、口頭または書面によるこれまでの了解事項に優先する。いかなる変更も書面により行われ、両当事者による署名を要するものとする。いずれかの条項が無効または執行不能と宣言された場合であっても、他の規定の有効性には影響を及ぼさない。",

    sign_place_date: "{jurisdiction}にて、下記の署名日をもって。",
    sign_label: "署名",
    sign_name_label: "氏名および役職",

    duration_1: "一（1）年間",
    duration_3: "三（3）年間",
    duration_5: "五（5）年間",
    duration_indefinite: "情報が秘密性を保持する限りにおいて無期限",
  },

  hi: {
    meta_title: "मुफ़्त ऑनलाइन NDA और B2B अनुबंध जनरेटर | PDF टेम्पलेट",
    meta_description: "मिनटों में अपना गोपनीयता समझौता (NDA) — एकतरफ़ा, पारस्परिक या B2B सेवा अनुबंध — PDF प्रारूप में बनाएं और डाउनलोड करें। मुफ़्त, बिना पंजीकरण के।",
    brand_name: "NDAgen",
    nav_tool: "जनरेटर",
    nav_guide: "कानूनी गाइड",
    nav_faq: "सामान्य प्रश्न",
    ad_label: "विज्ञापन",
    ad_native: "नेटिव विज्ञापन ब्लॉक",
    hero_badge: "100% मुफ़्त · पंजीकरण की आवश्यकता नहीं · तुरंत डाउनलोड",
    hero_title: "गोपनीयता समझौता (NDA) और B2B अनुबंध जनरेटर",
    hero_subtitle: "3 मिनट से भी कम समय में अपना पेशेवर NDA या सेवा अनुबंध बनाएं, पूर्वावलोकन करें और PDF में डाउनलोड करें।",
    tpl_unilateral_title: "एकतरफ़ा NDA",
    tpl_unilateral_desc: "एक पक्ष जानकारी प्रकट करता है, दूसरा उसकी सुरक्षा करता है।",
    tpl_mutual_title: "पारस्परिक (द्विपक्षीय) NDA",
    tpl_mutual_desc: "दोनों पक्ष जानकारी साझा करते हैं और उसकी सुरक्षा करते हैं।",
    tpl_b2b_title: "B2B सेवा अनुबंध",
    tpl_b2b_desc: "कंपनियों के बीच सेवा प्रावधान।",
    tpl_unilateral_short: "एकतरफ़ा",
    tpl_mutual_short: "पारस्परिक",
    tpl_b2b_short: "B2B",
    btn_view_document: "दस्तावेज़ देखें",
    step1_label: "पक्ष",
    step2_label: "उद्देश्य",
    step3_label: "अवधि",
    step4_label: "समीक्षा",
    party_a_legend: "प्रकटकर्ता पक्ष",
    party_a_legend_mutual: "प्रथम पक्ष",
    party_a_legend_b2b: "सेवा प्रदाता",
    party_b_legend: "प्राप्तकर्ता पक्ष",
    party_b_legend_mutual: "द्वितीय पक्ष",
    party_b_legend_b2b: "ग्राहक",
    label_name: "नाम / कंपनी",
    label_taxid: "कर पहचान / आईडी",
    label_address: "पता",
    ph_name: "उदा.: Acme Corp Pvt. Ltd.",
    ph_taxid: "उदा.: GSTIN 12ABCDE3456F7Z8",
    ph_address: "उदा.: मुख्य मार्ग 10, नई दिल्ली, भारत",
    label_object: "गोपनीय जानकारी का उद्देश्य और प्रयोजन",
    label_object_b2b: "प्रदान की जाने वाली सेवा का उद्देश्य और दायरा",
    ph_object: "उदा.: एक सॉफ़्टवेयर प्लेटफ़ॉर्म के संयुक्त विकास हेतु संभावित व्यावसायिक साझेदारी का मूल्यांकन...",
    object_hint: "जानकारी साझा करने का कारण संक्षेप में बताएं (बातचीत, सहयोग, सेवा प्रावधान, आदि)।",
    label_duration: "दायित्व की अवधि",
    label_duration_b2b: "अनुबंध की अवधि / वैधता",
    opt_indefinite: "अनिश्चितकालीन",
    label_jurisdiction: "क्षेत्राधिकार और लागू कानून",
    ph_jurisdiction: "उदा.: नई दिल्ली, भारत",
    review_hint: "दाईं ओर पूर्वावलोकन की जाँच करें। सब कुछ सही होने पर, दस्तावेज़ को PDF में डाउनलोड करें या क्लिपबोर्ड पर कॉपी करें।",
    btn_pdf: "PDF में डाउनलोड करें",
    btn_copy: "टेक्स्ट कॉपी करें",
    btn_clear: "फ़ॉर्म साफ़ करें",
    btn_prev: "← पिछला",
    btn_next: "अगला →",
    btn_finish: "समाप्त करें",
    preview_title: "रीयल-टाइम पूर्वावलोकन",
    preview_live: "लाइव",
    guide_h2_1: "गोपनीयता समझौता (NDA) क्या है?",
    guide_p_1: "गोपनीयता समझौता, या NDA (Non-Disclosure Agreement), एक कानूनी अनुबंध है जिसके तहत एक या अधिक पक्ष किसी बातचीत, सहयोग या व्यावसायिक संबंध के दौरान साझा की गई गोपनीय जानकारी को प्रकट न करने, उजागर न करने या अपने लाभ के लिए उपयोग न करने का वचन देते हैं। किसी तीसरे पक्ष के साथ व्यवसाय योजनाएँ, स्रोत कोड, वित्तीय डेटा, प्रोटोटाइप या कोई अन्य संवेदनशील जानकारी साझा करने से पहले यह एक आवश्यक उपकरण है।",
    guide_h3_1: "NDA के प्रकार: एकपक्षीय बनाम द्विपक्षीय",
    guide_p_2: "<strong>एकपक्षीय NDA</strong> में, केवल एक पक्ष (\"प्रकटकर्ता पक्ष\") गोपनीय जानकारी साझा करता है, जबकि दूसरा (\"प्राप्तकर्ता पक्ष\") उसे सुरक्षित रखने का दायित्व लेता है। यह मॉडल तब आम है जब कोई कंपनी किसी आपूर्तिकर्ता, उम्मीदवार या संभावित निवेशक के साथ जानकारी साझा करती है। वहीं, <strong>द्विपक्षीय (पारस्परिक) NDA</strong> में दोनों पक्ष आपस में गोपनीय जानकारी का आदान-प्रदान करते हैं और दोनों ही सुरक्षा के दायित्व लेते हैं, जो विलय, संयुक्त उद्यमों या रणनीतिक गठजोड़ों में सामान्य है।",
    guide_h3_2: "NDA में अनिवार्य धाराएँ",
    guide_p_clauses_intro: "किसी भी अच्छी तरह से तैयार किए गए गोपनीयता समझौते में कम से कम निम्नलिखित तत्व शामिल होने चाहिए:",
    guide_list_clauses: [
      "<strong>गोपनीय जानकारी की परिभाषा:</strong> समझौते द्वारा किस प्रकार का डेटा, दस्तावेज़ या ज्ञान संरक्षित है (तकनीकी, वाणिज्यिक, वित्तीय, स्रोत कोड आदि)।",
      "<strong>अपवाद:</strong> वह जानकारी जिसे गोपनीय नहीं माना जाता क्योंकि वह सार्वजनिक है, प्राप्तकर्ता पक्ष को पहले से ज्ञात है, या किसी सक्षम प्राधिकरण द्वारा आवश्यक है।",
      "<strong>अवधि:</strong> वह समयावधि जिसके दौरान गोपनीयता का दायित्व बना रहता है, जो मामले के अनुसार 1, 3, 5 वर्ष या अनिश्चितकालीन हो सकती है।",
      "<strong>उल्लंघन पर दंड:</strong> यदि कोई पक्ष बिना अनुमति के जानकारी उजागर करता है तो होने वाले आर्थिक या कानूनी परिणाम (हर्जाना, दंड धारा, निषेधाज्ञा उपाय)।",
      "<strong>क्षेत्राधिकार और लागू कानून:</strong> वह देश या शहर जिसकी अदालतें और कानून समझौते से उत्पन्न किसी भी विवाद को सुलझाएंगे।"
    ],
    guide_h3_3: "B2B सेवा प्रदाता अनुबंध",
    guide_p_3: "B2B (business-to-business) अनुबंध दो कंपनियों के बीच के संबंध को औपचारिक रूप देता है, जिसमें एक दूसरी को सेवाएँ प्रदान करती है। सेवा के दायरे और समय-सीमा को परिभाषित करने के अलावा, इसमें आमतौर पर सहयोग के दौरान साझा की गई जानकारी की सुरक्षा के लिए गोपनीयता धाराएँ, साथ ही विवाद की स्थिति में लागू क्षेत्राधिकार भी शामिल होता है।",
    guide_h3_4: "हस्ताक्षर और दस्तावेज़ की वैधता के लिए सुझाव",
    guide_p_tips_intro: "अपने NDA या B2B अनुबंध को अधिकतम संभव वैधता देने के लिए, हस्ताक्षर करने से पहले निम्नलिखित सिफारिशों पर विचार करें:",
    guide_list_tips: [
      "प्रत्येक कंपनी की ओर से हस्ताक्षर करने वाले व्यक्तियों की पहचान और कानूनी क्षमता सत्यापित करें।",
      "दस्तावेज़ पर दो प्रतियों में हस्ताक्षर करें (प्रत्येक पक्ष के लिए एक प्रति) या अपने देश में कानूनी रूप से मान्य इलेक्ट्रॉनिक हस्ताक्षर प्लेटफ़ॉर्म का उपयोग करें।",
      "हमेशा हस्ताक्षर की तारीख शामिल करें; यह समय-सीमा की गणना करने और समय के साथ लागू कानून निर्धारित करने के लिए एक महत्वपूर्ण तत्व है।",
      "किसी विवाद में दस्तावेज़ का उपयोग करने से पहले क्षेत्राधिकार और दंड धाराओं को स्थानीय कानून के अनुरूप अनुकूलित करें।",
      "हस्ताक्षरित प्रति सुरक्षित रखें और यदि संभव हो तो भेजने या प्राप्त करने का प्रमाण भी (पंजीकृत डाक, टाइमस्टैम्प के साथ इलेक्ट्रॉनिक हस्ताक्षर)।",
      "विशेष रूप से संवेदनशील जानकारी या उच्च मूल्य के अनुबंधों के मामले में, हस्ताक्षर करने से पहले किसी विशेषज्ञ वकील से समीक्षा करवाएँ।"
    ],
    faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    faq_q1: "क्या ऑनलाइन बनाया गया NDA कानूनी रूप से बाध्यकारी है?",
    faq_a1: "हाँ, यह हो सकता है। इस टूल से बनाया गया NDA किसी भी अन्य अनुबंध के समान वैधता रखता है, बशर्ते इसमें आवश्यक तत्व शामिल हों (स्पष्ट रूप से पहचाने गए पक्ष, वैध उद्देश्य और सहमति) और दोनों पक्षों द्वारा सही ढंग से हस्ताक्षरित हो। फिर भी, इसकी वास्तविक प्रवर्तनीयता आपके देश के कानून पर निर्भर करती है, इसलिए हम हस्ताक्षर करने से पहले, विशेष रूप से उच्च मूल्य के समझौतों में, किसी वकील से समीक्षा कराने की सलाह देते हैं।",
    faq_q2: "एकपक्षीय और पारस्परिक NDA में क्या अंतर है?",
    faq_a2: "एकपक्षीय NDA में, केवल एक पक्ष (प्रकटकर्ता) गोपनीय जानकारी साझा करता है और दूसरा (प्राप्तकर्ता) उसे सुरक्षित रखने का वचन देता है। पारस्परिक या द्विपक्षीय NDA में, दोनों पक्ष आपस में गोपनीय जानकारी का आदान-प्रदान करते हैं, एक साथ प्रकटकर्ता और प्राप्तकर्ता दोनों की भूमिका निभाते हुए।",
    faq_q3: "गोपनीयता कितने समय तक बनी रहनी चाहिए?",
    faq_a3: "इसका कोई एक निश्चित नियम नहीं है: सबसे आम अवधि समझौते पर हस्ताक्षर होने के बाद से 1, 3 या 5 वर्ष है। विशेष रूप से संवेदनशील क्षेत्रों में, जैसे औद्योगिक रहस्य या सॉफ़्टवेयर स्रोत कोड, अनिश्चितकालीन अवधि तय करना आम है जो तब तक बनी रहती है जब तक जानकारी अपनी गोपनीय प्रकृति बनाए रखती है।",
    faq_q4: "क्या हस्ताक्षर करने के लिए मुझे वकील की आवश्यकता है?",
    faq_a4: "यह अनिवार्य नहीं है, लेकिन अत्यधिक अनुशंसित है, विशेष रूप से जब समझौता उच्च मूल्य की जानकारी की रक्षा करता हो, लंबी अवधि का हो, या किसी जटिल बातचीत का हिस्सा हो। यह टूल एक पेशेवर और पूर्ण मसौदा तैयार करने की अनुमति देता है जिसे बाद में अंतिम हस्ताक्षर से पहले किसी वकील द्वारा सत्यापित किया जा सकता है।",
    faq_q5: "यदि कोई समझौते का उल्लंघन करता है तो क्या होता है?",
    faq_a5: "NDA के उल्लंघन से हुए नुकसान के लिए हर्जाने का दावा, चल रहे प्रकटीकरण को रोकने या रोकने के लिए निषेधाज्ञा उपाय, और पक्षों द्वारा संबंधित धारा में सहमत विशिष्ट दंडों का प्रयोग हो सकता है। इन अधिकारों का प्रयोग करने के लिए, प्रभावित पक्ष को क्षेत्राधिकार धारा में निर्दिष्ट सक्षम न्यायालय के समक्ष उल्लंघन और हुए नुकसान को साबित करना होगा।",
    faq_q6: "मैं इस दस्तावेज़ पर हस्ताक्षर कैसे करूँ?",
    faq_a6: "आप इस टूल द्वारा बनाई गई PDF डाउनलोड कर सकते हैं और उसे प्रिंट करके दोनों पक्षों से हाथ से हस्ताक्षर करवा सकते हैं, आदर्श रूप से दो प्रतियों में। आप अपने देश में कानूनी रूप से मान्यता प्राप्त इलेक्ट्रॉनिक हस्ताक्षर प्लेटफ़ॉर्म का भी उपयोग कर सकते हैं। किसी भी स्थिति में, सुनिश्चित करें कि हस्ताक्षर की तारीख स्पष्ट रूप से दर्ज हो और हस्ताक्षरित दस्तावेज़ की एक प्रति सुरक्षित रखें।",
    disclaimer_title: "कानूनी अस्वीकरण:",
    disclaimer_text: "इस टूल द्वारा बनाए गए दस्तावेज़ गोपनीयता समझौतों और B2B सेवा प्रदाता अनुबंधों में सामान्य रूप से उपयोग की जाने वाली मानक धाराओं पर आधारित संदर्भात्मक टेम्पलेट हैं। ये केवल सूचनात्मक और संदर्भ उद्देश्यों के लिए प्रदान किए जाते हैं, और कानूनी, कर या किसी अन्य प्रकार की सलाह नहीं हैं, न ही ये उपयोगकर्ता और इस टूल के जिम्मेदार लोगों के बीच वकील-मुवक्किल संबंध स्थापित करते हैं। गोपनीयता समझौतों और वाणिज्यिक अनुबंधों पर लागू कानून देश, राज्य या क्षेत्राधिकार के अनुसार काफी भिन्न होता है, इसलिए उपयोग से पहले इन टेम्पलेट्स को स्थानीय नियमों के अनुरूप अनुकूलित करने की आवश्यकता हो सकती है। उत्पन्न सामग्री की समीक्षा, पूर्णता और अनुकूलन, साथ ही इसकी वैधता और अपने विशेष मामले के लिए उपयुक्तता की जाँच करने की जिम्मेदारी पूर्णतः उपयोगकर्ता की है। हम इस टूल से बनाए गए किसी भी दस्तावेज़ पर हस्ताक्षर करने या उपयोग करने से पहले किसी योग्य कानूनी पेशेवर से समीक्षा कराने की दृढ़ता से सलाह देते हैं। किसी भी स्थिति में इस टूल के जिम्मेदार लोग उत्पन्न दस्तावेज़ों के उपयोग, दुरुपयोग या व्याख्या से उत्पन्न होने वाले नुकसान, हानि या परिणामों के लिए उत्तरदायी नहीं होंगे।",
    benefits_title: "NDAgen का उपयोग क्यों करें?",
    benefits_subtitle: "अपनी गोपनीय जानकारी की सुरक्षा का सबसे तेज़, सुरक्षित और पेशेवर तरीका।",
    benefit_1_title: "100% मुफ़्त और बिना पंजीकरण",
    benefit_1_desc: "बिना खाता बनाए या ईमेल साझा किए, अपने दस्तावेज़ मुफ़्त में बनाएं और डाउनलोड करें।",
    benefit_2_title: "पूर्ण गोपनीयता (क्लाइंट-साइड)",
    benefit_2_desc: "सारी प्रोसेसिंग आपके अपने ब्राउज़र में होती है। आपका डेटा कभी भी किसी सर्वर पर भेजा या संग्रहीत नहीं किया जाता।",
    benefit_3_title: "वैधता और B2B मानक",
    benefit_3_desc: "अंतरराष्ट्रीय गोपनीयता समझौतों और B2B अनुबंधों में सामान्यतः उपयोग किए जाने वाले कानूनी मानकों के अनुसार धाराएँ तैयार की गई हैं।",
    benefit_4_title: "द्विभाषी मोड और दोहरा निर्यात",
    benefit_4_desc: "दो भाषाओं में समानांतर अनुबंध बनाएं और एक क्लिक में PDF या Word में निर्यात करें।",
    donate_btn_label: "इस परियोजना का समर्थन करें",
    donate_modal_title: "इस परियोजना का समर्थन करें",
    donate_modal_desc: "NDAgen मुफ़्त है और इसके लिए किसी पंजीकरण की आवश्यकता नहीं है। यदि यह टूल आपके लिए उपयोगी रहा है, तो इसे बनाए रखने में मदद के लिए हमें एक कॉफ़ी दिलाने पर विचार करें।",
    donate_custom_placeholder: "अन्य राशि",
    donate_thanks_msg: "आपके समर्थन के लिए धन्यवाद! आपको भुगतान प्लेटफ़ॉर्म पर पुनर्निर्देशित किया जाएगा।",
    donate_btn_confirm: "जारी रखें",
    footer_rights: "सर्वाधिकार सुरक्षित।",
    footer_note: "मुफ़्त उपकरण · यह पेशेवर कानूनी सलाह का विकल्प नहीं है।",
    copy_success: "टेक्स्ट क्लिपबोर्ड पर कॉपी हो गया!",
    copy_error: "टेक्स्ट कॉपी नहीं किया जा सका।",
    clear_confirm: "क्या आप वाकई पूरा फ़ॉर्म साफ़ करना चाहते हैं?",
    pdf_generating: "PDF बनाया जा रहा है...",
    btn_docx: "Word (.docx) में डाउनलोड करें",
    docx_generating: "Word बनाया जा रहा है...",
    docx_error: "Word फ़ाइल नहीं बनाई जा सकी। कृपया पुनः प्रयास करें।",
    docx_lib_error: "Word इंजन लोड नहीं हो सका। कृपया अपना इंटरनेट कनेक्शन जाँचें।",
    logo_upload_btn: "कंपनी का लोगो अपलोड करें (वैकल्पिक)",
    logo_remove_btn: "लोगो हटाएं",
    logo_error_type: "असमर्थित छवि प्रारूप। कृपया PNG, JPG या SVG का उपयोग करें।",
    sig_modal_title: "डिजिटल हस्ताक्षर",
    sig_tab_draw: "बनाएं",
    sig_tab_upload: "छवि अपलोड करें",
    sig_draw_hint: "ऊपर माउस या उंगली से अपना हस्ताक्षर बनाएं।",
    sig_upload_btn: "छवि चुनें (PNG/JPG)",
    sig_upload_hint: "छवि स्वतः हस्ताक्षर बॉक्स के अनुसार समायोजित हो जाएगी।",
    sig_btn_clear: "हस्ताक्षर साफ़ करें",
    sig_btn_confirm: "हस्ताक्षर की पुष्टि करें",
    btn_cancel: "रद्द करें",
    sig_add_btn: "हस्ताक्षर जोड़ें",
    sig_edit_btn: "संपादित करें",
    sig_remove_btn: "हटाएं",
    sig_slot_prefix: "हस्ताक्षर:",
    sig_error_empty: "हस्ताक्षर की पुष्टि करने से पहले कृपया चित्र बनाएं या अपलोड करें।",
    btn_save_template: "मेरी जानकारी को टेम्पलेट के रूप में सहेजें",
    btn_load_template: "मेरी जानकारी लोड करें",
    autosave_note: "आपका डेटा इस ब्राउज़र में स्वचालित रूप से सहेजा जाता है।",
    template_saved: "प्रकटकर्ता पक्ष की जानकारी टेम्पलेट के रूप में सहेजी गई।",
    template_loaded: "टेम्पलेट सफलतापूर्वक लोड हुआ।",
    template_empty: "आपने अभी तक कोई टेम्पलेट सहेजा नहीं है।",
    completion_label: "दस्तावेज़ की प्रगति",
    validation_missing: "दस्तावेज़ डाउनलोड करने से पहले हाइलाइट किए गए आवश्यक फ़ील्ड भरें।",
    bilingual_mode_label: "द्विभाषी मोड (दोहरी भाषा)",
    bilingual_primary_label: "प्राथमिक भाषा",
    bilingual_secondary_label: "द्वितीयक भाषा",
    custom_filename_label: "कस्टम फ़ाइल नाम (वैकल्पिक)",
    custom_filename_placeholder: "उदा.: NDA_AcmeCorp_2026",
    doc_ref_label: "संदर्भ",
    doc_issue_date_label: "जारी करने की तिथि",
    doc_parties_heading: "अनुबंध के पक्ष",
    sign_field_name: "पूरा नाम",
    sign_field_role: "पद / भूमिका",
    sign_field_id: "पहचान दस्तावेज़",
    sign_field_date: "तिथि",
    doc_verified_badge: "इलेक्ट्रॉनिक रूप से उत्पन्न और सत्यापित दस्तावेज़",
    pdf_footer_confidential: "गोपनीय दस्तावेज़ · केवल हस्ताक्षरकर्ता पक्षों के उपयोग हेतु",
    pdf_footer_page_of: "पृष्ठ {current}, कुल {total} में से",

    doc_title_nda_unilateral: "एकतरफ़ा गोपनीयता समझौता",
    doc_title_nda_mutual: "पारस्परिक (द्विपक्षीय) गोपनीयता समझौता",
    doc_title_b2b_services: "B2B सेवा अनुबंध",
    doc_subtitle: "दस्तावेज़ {date} को बनाया गया",
    ph_nameA: "[प्रकटकर्ता पक्ष का नाम]",
    ph_nameB: "[प्राप्तकर्ता पक्ष का नाम]",
    ph_id: "[कर पहचान निर्दिष्ट नहीं]",
    ph_addr: "[पता निर्दिष्ट नहीं]",
    ph_purpose: "[उद्देश्य निर्दिष्ट नहीं]",
    ph_jur: "[क्षेत्राधिकार निर्दिष्ट नहीं]",
    role_discloser: "प्रकटकर्ता पक्ष",
    role_receiver: "प्राप्तकर्ता पक्ष",
    role_first: "प्रथम पक्ष",
    role_second: "द्वितीय पक्ष",
    role_provider: "सेवा प्रदाता",
    role_client: "ग्राहक",
    intro_nda: "प्रस्तुत दस्तावेज़ द्वारा यह गोपनीयता समझौता (इसके बाद, \"समझौता\") एक ओर {nameA}, जिसकी पहचान {idA} से है तथा जिसका पता {addrA} है (इसके बाद, \"{roleA}\"), तथा दूसरी ओर {nameB}, जिसकी पहचान {idB} से है तथा जिसका पता {addrB} है (इसके बाद, \"{roleB}\") के बीच, जिन्हें संयुक्त रूप से \"पक्ष\" कहा जाएगा, निम्नलिखित शर्तों के अनुसार संपन्न किया जाता है:",
    intro_b2b: "प्रस्तुत दस्तावेज़ द्वारा यह सेवा अनुबंध (इसके बाद, \"अनुबंध\") एक ओर {nameA}, जिसकी पहचान {idA} से है तथा जिसका पता {addrA} है (इसके बाद, \"{roleA}\"), तथा दूसरी ओर {nameB}, जिसकी पहचान {idB} से है तथा जिसका पता {addrB} है (इसके बाद, \"{roleB}\") के बीच, जिन्हें संयुक्त रूप से \"पक्ष\" कहा जाएगा, निम्नलिखित शर्तों के अनुसार संपन्न किया जाता है:",

    c1_title_nda: "प्रथम। उद्देश्य",
    c1_body_nda_uni: "इस समझौते का उद्देश्य उन शर्तों को स्थापित करना है जिनके अंतर्गत {roleA}, {roleB} को निम्नलिखित से संबंधित कुछ गोपनीय जानकारी प्रकट करेगा: {purpose}। {roleB} उस जानकारी का उपयोग केवल उसी उद्देश्य के लिए करने हेतु प्रतिबद्ध है।",
    c1_body_nda_mutual: "इस समझौते का उद्देश्य उन शर्तों को स्थापित करना है जिनके अंतर्गत {roleA} और {roleB} निम्नलिखित से संबंधित गोपनीय जानकारी परस्पर एक-दूसरे को प्रकट कर सकते हैं: {purpose}। प्रत्येक पक्ष प्राप्त जानकारी का उपयोग केवल उसी उद्देश्य के लिए करने हेतु प्रतिबद्ध है।",
    c1_title_b2b: "प्रथम। अनुबंध का उद्देश्य",
    c1_body_b2b: "{roleA}, {roleB} को निम्नलिखित सेवाएं प्रदान करने हेतु बाध्य है: {purpose}। सेवाएं संबंधित क्षेत्र पर लागू पेशेवर मानकों के अनुसार तथा उचित सावधानी के साथ निष्पादित की जाएंगी।",

    c2_title_nda_uni: "द्वितीय। प्राप्तकर्ता पक्ष के दायित्व",
    c2_body_nda_uni: "{roleB} निम्नलिखित हेतु बाध्य है: (i) गोपनीय जानकारी को सख़्त गोपनीयता में रखना; (ii) {roleA} की पूर्व लिखित अनुमति के बिना इसे तीसरे पक्ष को प्रकट न करना; (iii) प्रथम खंड में निर्धारित उद्देश्यों के अतिरिक्त इसका उपयोग न करना; तथा (iv) आकस्मिक या अनधिकृत प्रकटीकरण को रोकने हेतु उचित सुरक्षा उपाय अपनाना।",
    c2_title_nda_mutual: "द्वितीय। गोपनीयता दायित्व",
    c2_body_nda_mutual: "प्रत्येक पक्ष, प्राप्तकर्ता की भूमिका में रहते हुए, निम्नलिखित हेतु बाध्य है: (i) प्राप्त गोपनीय जानकारी को सख़्त गोपनीयता में रखना; (ii) प्रकटकर्ता पक्ष की पूर्व लिखित अनुमति के बिना इसे तीसरे पक्ष को प्रकट न करना; (iii) प्रथम खंड में निर्धारित उद्देश्यों के अतिरिक्त इसका उपयोग न करना; तथा (iv) आकस्मिक या अनधिकृत प्रकटीकरण को रोकने हेतु उचित सुरक्षा उपाय अपनाना।",
    c2_title_b2b: "द्वितीय। गोपनीयता",
    c2_body_b2b: "पक्ष इस अनुबंध के निष्पादन के संबंध में विनिमय की गई समस्त तकनीकी, वाणिज्यिक या वित्तीय जानकारी को सख़्त गोपनीयता में रखने हेतु बाध्य हैं, तथा कानून या सक्षम प्राधिकरण की आवश्यकता के अतिरिक्त, दूसरे पक्ष की पूर्व लिखित अनुमति के बिना इसे तीसरे पक्ष को प्रकट नहीं करेंगे।",

    c3_title: "तृतीय। अपवाद",
    c3_body: "गोपनीयता दायित्व उस जानकारी पर लागू नहीं होंगे जो: (a) प्राप्तकर्ता पक्ष की गलती के बिना सार्वजनिक हो या सार्वजनिक हो जाए; (b) प्रकटीकरण से पूर्व प्राप्तकर्ता पक्ष को वैधानिक रूप से पहले से ज्ञात हो; (c) बिना किसी गोपनीयता प्रतिबंध के किसी तीसरे पक्ष से वैधानिक रूप से प्राप्त हो; या (d) कानूनी, न्यायिक या सक्षम प्राधिकरण की आवश्यकता के अनुसार प्रकट की जानी अनिवार्य हो, जहां संभव हो वहां दूसरे पक्ष को पूर्व सूचना के अधीन।",

    c4_title_nda: "चतुर्थ। अवधि",
    c4_body_nda: "इस समझौते में निर्धारित गोपनीयता दायित्व इस दस्तावेज़ पर हस्ताक्षर की तिथि से {duration} तक प्रभावी रहेंगे, चाहे पक्षों के बीच किसी भी व्यावसायिक संबंध की समाप्ति हो जाए।",
    c4_title_b2b: "चतुर्थ। वैधता और गोपनीयता",
    c4_body_b2b: "इस अनुबंध की वैधता इसके हस्ताक्षर से {duration} तक रहेगी। द्वितीय खंड में निर्धारित गोपनीयता दायित्व इस अवधि के दौरान तथा अनुबंध की किसी भी कारण से समाप्ति के पश्चात भी प्रभावी रहेंगे।",

    c5_title: "पंचम। जानकारी की वापसी या नष्टीकरण",
    c5_body: "प्रकटकर्ता पक्ष के अनुरोध पर, अथवा इस समझौते की समाप्ति पर, प्राप्तकर्ता पक्ष को निर्देशानुसार गोपनीय जानकारी वाले सभी दस्तावेज़, माध्यम एवं प्रतियां वापस करनी होंगी या नष्ट करनी होंगी, तथा ऐसी वापसी या नष्टीकरण की लिखित पुष्टि प्रदान करनी होगी।",

    c6_title_nda: "षष्ठ। लाइसेंस तथा रोज़गार संबंध का अभाव",
    c6_body_nda: "इस समझौते का कोई भी प्रावधान लाइसेंस, बौद्धिक अथवा औद्योगिक संपदा अधिकार प्रदान करने, अथवा पक्षों के बीच रोज़गार, साझेदारी अथवा प्रतिनिधित्व संबंध सृजित करने के रूप में नहीं समझा जाएगा।",
    c6_title_b2b: "पंचम। संबंध की प्रकृति",
    c6_body_b2b: "यह अनुबंध पक्षों के बीच किसी रोज़गार, साझेदारी, एजेंसी अथवा प्रतिनिधित्व संबंध को जन्म नहीं देता। {roleA} एक स्वतंत्र ठेकेदार के रूप में कार्य करेगा तथा सेवाओं के निष्पादन में पूर्ण तकनीकी एवं प्रशासनिक स्वायत्तता बनाए रखेगा।",

    c7_title: "सप्तम। लागू कानून और क्षेत्राधिकार",
    c7_title_b2b: "षष्ठ। लागू कानून और क्षेत्राधिकार",
    c7_body: "यह दस्तावेज़ {jurisdiction} में प्रवर्तित कानूनों के अनुसार शासित एवं व्याख्यायित होगा। इसकी व्याख्या अथवा अनुपालन से उत्पन्न किसी भी विवाद के समाधान हेतु, पक्ष उस क्षेत्राधिकार के सक्षम न्यायालयों के अधीन होंगे, तथा उन्हें प्राप्त किसी भी अन्य क्षेत्राधिकार का स्पष्ट रूप से परित्याग करते हैं।",

    c8_title: "अष्टम। सामान्य प्रावधान",
    c8_title_b2b: "सप्तम। सामान्य प्रावधान",
    c8_body: "यह दस्तावेज़ अपने विषय के संबंध में पक्षों के बीच संपूर्ण समझौता गठित करता है, तथा किसी भी पूर्व मौखिक अथवा लिखित समझ को निरस्त करता है। किसी भी संशोधन को लिखित रूप में किया जाना चाहिए तथा दोनों पक्षों द्वारा हस्ताक्षरित होना चाहिए। यदि कोई खंड अमान्य या अप्रवर्तनीय घोषित किया जाता है, तो इससे शेष प्रावधानों की वैधता प्रभावित नहीं होगी।",

    sign_place_date: "{jurisdiction} में, नीचे दर्शाई गई हस्ताक्षर तिथि पर।",
    sign_label: "हस्ताक्षर",
    sign_name_label: "नाम और पद",

    duration_1: "एक (1) वर्ष",
    duration_3: "तीन (3) वर्ष",
    duration_5: "पांच (5) वर्ष",
    duration_indefinite: "अनिश्चितकालीन अवधि, जब तक जानकारी अपनी गोपनीय प्रकृति बनाए रखती है",
  },
};

/* ---------------------------------------------------------------------
   2) STATE
   --------------------------------------------------------------------- */
const state = {
  lang: localStorage.getItem('ndagen_lang') || 'es',
  docType: 'nda_unilateral',
  step: 1,
  totalSteps: 4,
  logo: null,
  signatures: { A: null, B: null },
  docCode: null,
  docYear: null,
  bilingual: false,
  langSecondary: 'en',
};

const AUTOSAVE_KEY = 'ndagen_autosave_v1';
const TEMPLATE_KEY = 'ndagen_partyA_template_v1';

const REQUIRED_FIELDS = [
  { id: 'partyA_name', step: 1 },
  { id: 'partyA_id', step: 1 },
  { id: 'partyA_address', step: 1 },
  { id: 'partyB_name', step: 1 },
  { id: 'partyB_id', step: 1 },
  { id: 'partyB_address', step: 1 },
  { id: 'purpose', step: 2 },
  { id: 'jurisdiction', step: 3 },
];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $all = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function tFor(lang, key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
}

function t(key) {
  return tFor(state.lang, key);
}

/* ---------------------------------------------------------------------
   3) i18n APPLICATION
   --------------------------------------------------------------------- */
function applyI18n() {
  document.documentElement.lang = state.lang;

  $all('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });

  $all('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  $all('[data-i18n-list]').forEach(el => {
    const key = el.getAttribute('data-i18n-list');
    const items = (I18N[state.lang] && I18N[state.lang][key]) || I18N.es[key] || [];
    el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
  });

  document.title = t('meta_title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta_description'));

  $('#lang-select').value = state.lang;
  updateBilingualPicker();

  updatePartyLegends();
  updateObjectLabel();
  updateDurationLabel();
  updateSignatureLabels();
}

function populateLangSelect(selectEl, excludeLang) {
  selectEl.innerHTML = Object.values(LANGS)
    .filter(l => l.code !== excludeLang)
    .map(l => `<option value="${l.code}">${l.short} · ${escapeHtml(l.label)}</option>`)
    .join('');
}

function updateBilingualPicker() {
  const readout = $('#bilingual-primary-readout');
  if (readout) readout.textContent = LANGS[state.lang] ? `${LANGS[state.lang].short} · ${LANGS[state.lang].label}` : state.lang;

  const secondarySelect = $('#bilingual-secondary-select');
  if (secondarySelect) {
    populateLangSelect(secondarySelect, state.lang);
    if (state.langSecondary === state.lang || !LANGS[state.langSecondary]) {
      state.langSecondary = Object.keys(LANGS).find(code => code !== state.lang) || 'en';
    }
    secondarySelect.value = state.langSecondary;
  }
}

function updatePartyLegends() {
  const legendA = $('#legend-partyA');
  const legendB = $('#legend-partyB');
  if (state.docType === 'nda_mutual') {
    legendA.textContent = t('party_a_legend_mutual');
    legendB.textContent = t('party_b_legend_mutual');
  } else if (state.docType === 'b2b_services') {
    legendA.textContent = t('party_a_legend_b2b');
    legendB.textContent = t('party_b_legend_b2b');
  } else {
    legendA.textContent = t('party_a_legend');
    legendB.textContent = t('party_b_legend');
  }
}

function updateObjectLabel() {
  const label = $('#label-object');
  label.textContent = state.docType === 'b2b_services' ? t('label_object_b2b') : t('label_object');
}

function updateDurationLabel() {
  const labels = $all('label.field-label');
  labels.forEach(l => {
    if (l.getAttribute('data-i18n') === 'label_duration') {
      l.textContent = state.docType === 'b2b_services' ? t('label_duration_b2b') : t('label_duration');
    }
  });
}

function updateSignatureLabels() {
  const labelA = $('#sig-slot-label-A');
  const labelB = $('#sig-slot-label-B');
  if (!labelA || !labelB) return;
  let legendA, legendB;
  if (state.docType === 'nda_mutual') {
    legendA = t('party_a_legend_mutual');
    legendB = t('party_b_legend_mutual');
  } else if (state.docType === 'b2b_services') {
    legendA = t('party_a_legend_b2b');
    legendB = t('party_b_legend_b2b');
  } else {
    legendA = t('party_a_legend');
    legendB = t('party_b_legend');
  }
  labelA.textContent = `${t('sig_slot_prefix')} ${legendA}`;
  labelB.textContent = `${t('sig_slot_prefix')} ${legendB}`;
}

/* ---------------------------------------------------------------------
   4) DOCUMENT GENERATION
   --------------------------------------------------------------------- */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function fieldOrPlaceholder(value, placeholderKey) {
  const trimmed = (value || '').trim();
  if (trimmed) return escapeHtml(trimmed);
  return `<span class="placeholder-text">${escapeHtml(t(placeholderKey))}</span>`;
}

function formatDate(lang) {
  const d = new Date();
  return d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function durationText(value, lang = state.lang) {
  switch (value) {
    case '1': return tFor(lang, 'duration_1');
    case '3': return tFor(lang, 'duration_3');
    case '5': return tFor(lang, 'duration_5');
    default: return tFor(lang, 'duration_indefinite');
  }
}

function getDocRef() {
  if (!state.docCode) {
    state.docCode = Math.random().toString(36).slice(2, 8).toUpperCase();
    state.docYear = new Date().getFullYear();
  }
  const prefix = state.docType === 'b2b_services' ? 'B2B' : 'NDA';
  return `${prefix}-${state.docYear}-${state.docCode}`;
}

function sanitizeFilename(name) {
  return name.trim().replace(/[^a-zA-Z0-9_\-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80);
}

const DOC_TYPE_FILE_LABEL = {
  nda_unilateral: 'NDA_Unilateral',
  nda_mutual: 'NDA_Mutuo',
  b2b_services: 'Contrato_B2B',
};

function getExportFilename(ext) {
  const customInput = $('#custom-filename');
  const custom = customInput ? sanitizeFilename(customInput.value || '') : '';
  if (custom) return `${custom}.${ext}`;
  const dateStr = new Date().toISOString().slice(0, 10);
  const typeLabel = DOC_TYPE_FILE_LABEL[state.docType] || 'Documento';
  return `${typeLabel}_${dateStr}_${getDocRef().split('-').pop()}.${ext}`;
}

function getFormData() {
  return {
    nameA: $('#partyA_name').value,
    idA: $('#partyA_id').value,
    addrA: $('#partyA_address').value,
    nameB: $('#partyB_name').value,
    idB: $('#partyB_id').value,
    addrB: $('#partyB_address').value,
    purpose: $('#purpose').value,
    duration: $('#duration').value,
    jurisdiction: $('#jurisdiction').value,
  };
}

function resolveTemplateParts(docType, lang = state.lang) {
  let roleA, roleB, title, intro, c1title, c1body, c2title, c2body;
  const tt = (key) => tFor(lang, key);

  if (docType === 'nda_unilateral') {
    roleA = tt('role_discloser');
    roleB = tt('role_receiver');
    title = tt('doc_title_nda_unilateral');
    intro = tt('intro_nda');
    c1title = tt('c1_title_nda');
    c1body = tt('c1_body_nda_uni');
    c2title = tt('c2_title_nda_uni');
    c2body = tt('c2_body_nda_uni');
  } else if (docType === 'nda_mutual') {
    roleA = tt('role_first');
    roleB = tt('role_second');
    title = tt('doc_title_nda_mutual');
    intro = tt('intro_nda');
    c1title = tt('c1_title_nda');
    c1body = tt('c1_body_nda_mutual');
    c2title = tt('c2_title_nda_mutual');
    c2body = tt('c2_body_nda_mutual');
  } else {
    roleA = tt('role_provider');
    roleB = tt('role_client');
    title = tt('doc_title_b2b_services');
    intro = tt('intro_b2b');
    c1title = tt('c1_title_b2b');
    c1body = tt('c1_body_b2b');
    c2title = tt('c2_title_b2b');
    c2body = tt('c2_body_b2b');
  }

  return { roleA, roleB, title, intro, c1title, c1body, c2title, c2body };
}

function resolveClauses(docType, parts, lang = state.lang) {
  const tt = (key) => tFor(lang, key);
  const isB2b = docType === 'b2b_services';
  const clauses = [];
  clauses.push({ title: parts.c1title, body: parts.c1body });
  clauses.push({ title: parts.c2title, body: parts.c2body });
  if (!isB2b) clauses.push({ title: tt('c3_title'), body: tt('c3_body') });
  clauses.push({
    title: isB2b ? tt('c4_title_b2b') : tt('c4_title_nda'),
    body: isB2b ? tt('c4_body_b2b') : tt('c4_body_nda')
  });
  if (!isB2b) clauses.push({ title: tt('c5_title'), body: tt('c5_body') });
  clauses.push({
    title: isB2b ? tt('c6_title_b2b') : tt('c6_title_nda'),
    body: isB2b ? tt('c6_body_b2b') : tt('c6_body_nda')
  });
  clauses.push({ title: isB2b ? tt('c7_title_b2b') : tt('c7_title'), body: tt('c7_body') });
  clauses.push({ title: isB2b ? tt('c8_title_b2b') : tt('c8_title'), body: tt('c8_body') });
  return clauses;
}

function buildDocumentHtml() {
  const data = getFormData();
  const lang = state.lang;
  const docType = state.docType;

  const nameA = fieldOrPlaceholder(data.nameA, 'ph_nameA');
  const nameB = fieldOrPlaceholder(data.nameB, 'ph_nameB');
  const idA = fieldOrPlaceholder(data.idA, 'ph_id');
  const idB = fieldOrPlaceholder(data.idB, 'ph_id');
  const addrA = fieldOrPlaceholder(data.addrA, 'ph_addr');
  const addrB = fieldOrPlaceholder(data.addrB, 'ph_addr');
  const purpose = fieldOrPlaceholder(data.purpose, 'ph_purpose');
  const jurisdiction = fieldOrPlaceholder(data.jurisdiction, 'ph_jur');
  const duration = durationText(data.duration);

  const parts = resolveTemplateParts(docType, lang);
  const { roleA, roleB, title, intro } = parts;

  const makeFill = (roleAL, roleBL, durationL) => (str) => str
    .replace(/\{nameA\}/g, nameA).replace(/\{nameB\}/g, nameB)
    .replace(/\{idA\}/g, idA).replace(/\{idB\}/g, idB)
    .replace(/\{addrA\}/g, addrA).replace(/\{addrB\}/g, addrB)
    .replace(/\{roleA\}/g, `<strong>${roleAL}</strong>`).replace(/\{roleB\}/g, `<strong>${roleBL}</strong>`)
    .replace(/\{purpose\}/g, purpose)
    .replace(/\{duration\}/g, `<strong>${durationL}</strong>`)
    .replace(/\{jurisdiction\}/g, `<strong>${jurisdiction}</strong>`);

  const fill = makeFill(roleA, roleB, duration);
  const clauses = resolveClauses(docType, parts, lang);

  const isBilingual = state.bilingual && state.langSecondary && state.langSecondary !== lang;

  const renderClause = (c, idx, fillFn) => `
    <div class="clause-block bilingual-cell">
      <div class="clause-header">
        <span class="clause-num">${String(idx + 1).padStart(2, '0')}</span>
        <h2 class="clause-title">${escapeHtml(c.title)}</h2>
      </div>
      <p>${fillFn(escapeHtml(c.body))}</p>
    </div>
  `;

  // Bilingual clause cell (table <td>, not the div used by the single-
  // column layout above): a real HTML <table> is used for the bilingual
  // pairing instead of a CSS grid, because html2canvas does not reliably
  // lock a CSS grid row's height to its tallest cell — the shorter
  // column's text would flow straight into the NEXT clause while the
  // taller column was still finishing the current one, once captured
  // and paginated. A <table> guarantees each <tr>'s cells share one row
  // height in every rendering engine, and 'tr' is already in the
  // pagebreak avoid list, so each clause row also stays on one page.
  const renderClauseCell = (c, idx, fillFn) => `
    <td class="bilingual-cell">
      <div class="clause-header">
        <span class="clause-num">${String(idx + 1).padStart(2, '0')}</span>
        <h2 class="clause-title">${escapeHtml(c.title)}</h2>
      </div>
      <p>${fillFn(escapeHtml(c.body))}</p>
    </td>
  `;

  let bodyHtml;
  if (isBilingual) {
    const langB = state.langSecondary;
    const partsB = resolveTemplateParts(docType, langB);
    const durationB = durationText(data.duration, langB);
    const fillB = makeFill(partsB.roleA, partsB.roleB, durationB);
    const clausesB = resolveClauses(docType, partsB, langB);

    const pairedClauseRows = clauses.map((c, idx) => `
      <tr>${renderClauseCell(c, idx, fill)}${renderClauseCell(clausesB[idx], idx, fillB)}</tr>
    `).join('');

    bodyHtml = `
      <table class="bilingual-table">
        <tr>
          <td class="bilingual-cell bilingual-lang-header">${escapeHtml(LANGS[lang] ? LANGS[lang].label : lang)}</td>
          <td class="bilingual-cell bilingual-lang-header">${escapeHtml(LANGS[langB] ? LANGS[langB].label : langB)}</td>
        </tr>
        <tr>
          <td class="bilingual-cell"><p>${fill(escapeHtml(intro))}</p></td>
          <td class="bilingual-cell"><p>${fillB(escapeHtml(partsB.intro))}</p></td>
        </tr>
        ${pairedClauseRows}
        <tr>
          <td class="bilingual-cell"><p>${fill(escapeHtml(t('sign_place_date')))}</p></td>
          <td class="bilingual-cell"><p>${fillB(escapeHtml(tFor(langB, 'sign_place_date')))}</p></td>
        </tr>
      </table>
    `;
  } else {
    const clausesHtml = clauses.map((c, idx) => renderClause(c, idx, fill)).join('');
    bodyHtml = `
      <p>${fill(escapeHtml(intro))}</p>
      ${clausesHtml}
      <p style="margin-top:1.5rem;">${fill(escapeHtml(t('sign_place_date')))}</p>
    `;
  }

  const issueDate = formatDate(lang);
  const docRef = getDocRef();

  const logoHtml = state.logo
    ? `<img class="doc-logo" src="${state.logo}" alt="logo">`
    : `<div class="doc-logo-placeholder"></div>`;
  const sigAHtml = state.signatures.A
    ? `<img class="sign-img" src="${state.signatures.A}" alt="signature">`
    : `<div class="sign-area-empty"></div>`;
  const sigBHtml = state.signatures.B
    ? `<img class="sign-img" src="${state.signatures.B}" alt="signature">`
    : `<div class="sign-area-empty"></div>`;

  const partyCard = (roleLabel, name, id, addr) => `
    <div class="party-card">
      <span class="party-card-label">${roleLabel}</span>
      <div class="party-card-name">${name}</div>
      <div class="party-card-row"><span>${escapeHtml(t('label_taxid'))}:</span> ${id}</div>
      <div class="party-card-row"><span>${escapeHtml(t('label_address'))}:</span> ${addr}</div>
    </div>
  `;

  const signCard = (roleLabel, sigHtml, name, role, id) => `
    <div class="sign-card">
      <span class="sign-card-label">${roleLabel}</span>
      <div class="sign-area">${sigHtml}</div>
      <div class="sign-line"></div>
      <div class="sign-field"><strong>${escapeHtml(t('sign_field_name'))}:</strong> ${name}</div>
      <div class="sign-field"><strong>${escapeHtml(t('sign_field_role'))}:</strong> ${role}</div>
      <div class="sign-field"><strong>${escapeHtml(t('sign_field_id'))}:</strong> ${id}</div>
      <div class="sign-field"><strong>${escapeHtml(t('sign_field_date'))}:</strong> ${issueDate}</div>
    </div>
  `;

  return `
    <div class="doc-letterhead">
      <div class="doc-letterhead-logo">${logoHtml}</div>
      <div class="doc-letterhead-meta">
        <div class="doc-letterhead-title">${escapeHtml(title)}</div>
        <div class="doc-letterhead-ref">${escapeHtml(t('doc_ref_label'))}: ${escapeHtml(docRef)}</div>
        <div class="doc-letterhead-date">${escapeHtml(t('doc_issue_date_label'))}: ${escapeHtml(issueDate)}</div>
      </div>
    </div>
    <div class="doc-letterhead-divider"></div>

    <div class="doc-parties-grid">
      ${partyCard(`<strong>${roleA}</strong>`, nameA, idA, addrA)}
      ${partyCard(`<strong>${roleB}</strong>`, nameB, idB, addrB)}
    </div>

    ${bodyHtml}

    <div class="sign-block">
      ${signCard(`<strong>${roleA}</strong>`, sigAHtml, nameA, `<strong>${roleA}</strong>`, idA)}
      ${signCard(`<strong>${roleB}</strong>`, sigBHtml, nameB, `<strong>${roleB}</strong>`, idB)}
    </div>

    <div class="doc-verified-badge">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      ${escapeHtml(t('doc_verified_badge'))}
    </div>
  `;
}

function getDocumentModel(lang = state.lang) {
  const data = getFormData();
  const docType = state.docType;
  const tt = (key) => tFor(lang, key);

  const nameA = (data.nameA || '').trim() || tt('ph_nameA');
  const nameB = (data.nameB || '').trim() || tt('ph_nameB');
  const idA = (data.idA || '').trim() || tt('ph_id');
  const idB = (data.idB || '').trim() || tt('ph_id');
  const addrA = (data.addrA || '').trim() || tt('ph_addr');
  const addrB = (data.addrB || '').trim() || tt('ph_addr');
  const purpose = (data.purpose || '').trim() || tt('ph_purpose');
  const jurisdiction = (data.jurisdiction || '').trim() || tt('ph_jur');
  const duration = durationText(data.duration, lang);

  const parts = resolveTemplateParts(docType, lang);
  const clauses = resolveClauses(docType, parts, lang);

  const subs = {
    '{nameA}': { text: nameA, bold: false }, '{nameB}': { text: nameB, bold: false },
    '{idA}': { text: idA, bold: false }, '{idB}': { text: idB, bold: false },
    '{addrA}': { text: addrA, bold: false }, '{addrB}': { text: addrB, bold: false },
    '{roleA}': { text: parts.roleA, bold: true }, '{roleB}': { text: parts.roleB, bold: true },
    '{purpose}': { text: purpose, bold: false },
    '{duration}': { text: duration, bold: true },
    '{jurisdiction}': { text: jurisdiction, bold: true },
  };

  const toRuns = (str) => str
    .split(/(\{nameA\}|\{nameB\}|\{idA\}|\{idB\}|\{addrA\}|\{addrB\}|\{roleA\}|\{roleB\}|\{purpose\}|\{duration\}|\{jurisdiction\})/g)
    .filter(part => part !== '')
    .map(part => subs[part] || { text: part, bold: false });

  return {
    lang,
    title: parts.title,
    dateLine: tt('doc_subtitle').replace('{date}', formatDate(lang)),
    introRuns: toRuns(parts.intro),
    clauses: clauses.map(c => ({ title: c.title, bodyRuns: toRuns(c.body) })),
    signPlaceRuns: toRuns(tt('sign_place_date')),
    nameA, nameB,
    roleA: parts.roleA, roleB: parts.roleB,
    signNameLabel: tt('sign_name_label'),
    logo: state.logo,
    sigA: state.signatures.A,
    sigB: state.signatures.B,
  };
}

function updatePreview() {
  $('#pdf-content').innerHTML = buildDocumentHtml();
  updateCompletion();
}

/* ---------------------------------------------------------------------
   5) WIZARD NAVIGATION
   --------------------------------------------------------------------- */
function goToStep(step) {
  state.step = Math.min(Math.max(step, 1), state.totalSteps);

  $all('.form-step').forEach(el => {
    el.classList.toggle('hidden', Number(el.dataset.step) !== state.step);
  });

  $all('.step-dot').forEach(dot => {
    const n = Number(dot.dataset.step);
    dot.classList.remove('active', 'done');
    if (n === state.step) dot.classList.add('active');
    else if (n < state.step) dot.classList.add('done');
  });

  $('#btn-prev').disabled = state.step === 1;
  const nextBtn = $('#btn-next');
  if (state.step === state.totalSteps) {
    nextBtn.style.visibility = 'hidden';
  } else {
    nextBtn.style.visibility = 'visible';
  }
}

/* ---------------------------------------------------------------------
   6) TEMPLATE SELECTION
   --------------------------------------------------------------------- */
function selectTemplate(type) {
  state.docType = type;
  $all('.template-card').forEach(card => {
    card.classList.toggle('active', card.dataset.template === type);
  });
  $all('.template-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.template === type);
  });
  updatePartyLegends();
  updateObjectLabel();
  updateDurationLabel();
  updateSignatureLabels();
  updatePreview();
}

/* ---------------------------------------------------------------------
   7) ACTIONS: PDF / COPY / CLEAR
   --------------------------------------------------------------------- */
// The physical page padding (mm) the .pdf-export-clone CSS class (in
// styles.css) bakes directly into the clone's own box — since the
// html2pdf `margin` option is 0 (see downloadPdf() below), this is the
// only thing creating the page's visual margin, and it also defines
// where the jsPDF footer overlay is drawn. Keep in sync with styles.css.
const PDF_PAGE_PADDING_MM = { top: 20, right: 15, bottom: 20, left: 15 };

// Builds a throwaway, fully isolated A4-width clone of the live preview
// and appends it (off-screen) to <body>. Exporting FROM this clone
// instead of the visible #pdf-content is the fix for the "blank first
// page + text cut between pages in real browsers" bug: #pdf-content
// normally lives inside #preview-scroll, itself inside a responsive
// flex/grid layout (w-full lg:w-[46%]) — so its actual on-screen pixel
// width (and therefore how text wraps, and therefore where html2canvas
// slices pages) depends on the visitor's current viewport/zoom. The
// .pdf-export-clone class (styles.css) forces a fixed 210mm width, fixed
// pt typography, and !important page-break-inside:avoid on every
// paragraph/clause/card/heading/table-row, so the exported PDF always
// paginates identically regardless of the device it was generated from.
function buildPdfExportClone() {
  const source = $('#pdf-content');
  const clone = source.cloneNode(true);
  clone.classList.add('pdf-export-clone');
  clone.style.removeProperty('page-break-before');

  const host = document.createElement('div');
  host.id = 'pdf-export-host';
  Object.assign(host.style, {
    position: 'fixed',
    top: '0',
    left: '-10000px',
    zIndex: '-1',
    background: '#ffffff'
  });
  host.appendChild(clone);
  document.body.appendChild(host);
  return host;
}

function downloadPdf() {
  if (!validateBeforeDownload()) return;

  const host = buildPdfExportClone();
  const clone = host.firstElementChild;

  const opt = {
    margin: 0,
    filename: getExportFilename('pdf'),
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollY: 0,
      scrollX: 0
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] }
  };
  const btn = $('#btn-pdf');
  const originalHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span>${escapeHtml(t('pdf_generating'))}</span>`;

  // jsPDF's built-in standard fonts (Helvetica/Times/Courier) only support
  // WinAnsiEncoding (Latin script + Western accents) — they cannot render
  // Cyrillic, CJK, or Devanagari at all. The document body itself is fine
  // (it's a rasterized image of the real DOM/CSS with proper Noto fonts),
  // but this footer is added afterwards as real jsPDF vector text, so for
  // non-Latin-script languages it falls back to the English footer copy
  // rather than drawing corrupted/missing glyphs.
  const NON_LATIN_FOOTER_LANGS = ['ru', 'zh', 'ja', 'hi'];
  const footerLang = NON_LATIN_FOOTER_LANGS.includes(state.lang) ? 'en' : state.lang;
  const footerLeft = tFor(footerLang, 'pdf_footer_confidential');
  const footerPageOfTemplate = tFor(footerLang, 'pdf_footer_page_of');
  const marginBottom = PDF_PAGE_PADDING_MM.bottom;
  const marginLeft = PDF_PAGE_PADDING_MM.left;
  const marginRight = PDF_PAGE_PADDING_MM.right;

  const fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  fontsReady.then(() => html2pdf().set(opt).from(clone).toPdf().get('pdf').then(function (pdf) {
    // Add a vector (crisp, not rasterized) confidentiality note + page
    // number to every page, using jsPDF's own text API directly on the
    // already-rendered PDF, after html2canvas/pagination has run.
    const totalPages = pdf.internal.getNumberOfPages();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const footerY = pageHeight - marginBottom / 2;
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(7.5);
      pdf.setTextColor(148, 163, 184);
      pdf.text(footerLeft, marginLeft, footerY);
      pdf.text(footerPageOfTemplate.replace('{current}', i).replace('{total}', totalPages), pageWidth - marginRight, footerY, { align: 'right' });
    }
  }).save()).finally(() => {
    btn.disabled = false;
    btn.innerHTML = originalHtml;
    host.remove();
  });
}

function dataUrlToUint8Array(dataUrl) {
  const base64 = dataUrl.split(',')[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function downloadDocx() {
  if (!validateBeforeDownload()) return;
  if (!window.docx) {
    toast(t('docx_lib_error'));
    return;
  }

  const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, ImageRun, WidthType, BorderStyle } = window.docx;
  const model = getDocumentModel(state.lang);
  const isBilingual = state.bilingual && state.langSecondary && state.langSecondary !== state.lang;
  const modelSecondary = isBilingual ? getDocumentModel(state.langSecondary) : null;
  const btn = $('#btn-docx');
  const originalHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span>${escapeHtml(t('docx_generating'))}</span>`;

  try {
    const children = [];

    if (model.logo) {
      children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new ImageRun({ type: 'png', data: dataUrlToUint8Array(model.logo), transformation: { width: 140, height: 70 } })],
      }));
    }

    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [new TextRun({ text: model.title, bold: true, size: 24 })],
    }));
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
      children: [new TextRun({ text: model.dateLine, italics: true, size: 18, color: '555555' })],
    }));

    // --- Body: single column, or a paired two-column table (one row per
    // clause) mirroring the bilingual live-preview/PDF layout when the
    // dual-language mode is on. Letterhead/title/date and the signature
    // block above/below stay in the primary language either way.
    if (isBilingual) {
      const bilingualCell = (paragraphs) => new TableCell({
        width: { size: 50, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }
        },
        margins: { left: 150, right: 150 },
        children: paragraphs,
      });
      const langHeaderCell = (label) => bilingualCell([new Paragraph({
        spacing: { after: 100 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '2563EB' } },
        children: [new TextRun({ text: label.toUpperCase(), bold: true, size: 16, color: '2563EB' })],
      })]);
      const introParagraph = (m) => new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 150, line: 300 },
        children: m.introRuns.map(r => new TextRun({ text: r.text, bold: r.bold })),
      });
      const signPlaceParagraph = (m) => new Paragraph({
        spacing: { before: 100, after: 100 },
        children: m.signPlaceRuns.map(r => new TextRun({ text: r.text, bold: r.bold })),
      });
      const clauseParagraphs = (c) => [
        new Paragraph({ keepNext: true, spacing: { before: 100, after: 100 }, children: [new TextRun({ text: c.title, bold: true, size: 20 })] }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { after: 150, line: 300 },
          children: c.bodyRuns.map(r => new TextRun({ text: r.text, bold: r.bold })),
        }),
      ];

      const rows = [];
      rows.push(new TableRow({ cantSplit: true, children: [
        langHeaderCell((LANGS[model.lang] || {}).label || model.lang),
        langHeaderCell((LANGS[modelSecondary.lang] || {}).label || modelSecondary.lang),
      ] }));
      rows.push(new TableRow({ cantSplit: true, children: [bilingualCell([introParagraph(model)]), bilingualCell([introParagraph(modelSecondary)])] }));
      model.clauses.forEach((c, idx) => {
        rows.push(new TableRow({ cantSplit: true, children: [
          bilingualCell(clauseParagraphs(c)),
          bilingualCell(clauseParagraphs(modelSecondary.clauses[idx])),
        ] }));
      });
      rows.push(new TableRow({ cantSplit: true, children: [bilingualCell([signPlaceParagraph(model)]), bilingualCell([signPlaceParagraph(modelSecondary)])] }));

      children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
      children.push(new Paragraph({ text: '', spacing: { after: 200 } }));
    } else {
      children.push(new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200, line: 300 },
        children: model.introRuns.map(r => new TextRun({ text: r.text, bold: r.bold })),
      }));

      model.clauses.forEach(c => {
        children.push(new Paragraph({
          keepNext: true,
          spacing: { before: 200, after: 100 },
          children: [new TextRun({ text: c.title, bold: true, size: 20 })],
        }));
        children.push(new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { after: 150, line: 300 },
          children: c.bodyRuns.map(r => new TextRun({ text: r.text, bold: r.bold })),
        }));
      });

      children.push(new Paragraph({
        spacing: { before: 300, after: 300 },
        children: model.signPlaceRuns.map(r => new TextRun({ text: r.text, bold: r.bold })),
      }));
    }

    function signatureCell(name, role, sigDataUrl) {
      const cellChildren = [];
      if (sigDataUrl) {
        cellChildren.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new ImageRun({ type: 'png', data: dataUrlToUint8Array(sigDataUrl), transformation: { width: 130, height: 55 } })],
        }));
      } else {
        cellChildren.push(new Paragraph({ text: ' ', spacing: { before: 300 } }));
      }
      cellChildren.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: '333333' } },
        spacing: { before: 100 },
        children: [new TextRun({ text: name, bold: true, size: 18 })],
      }));
      cellChildren.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: `${model.signNameLabel}: ${role}`, size: 16 })],
      }));
      return new TableCell({
        width: { size: 50, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }
        },
        margins: { left: 200, right: 200 },
        children: cellChildren,
      });
    }

    children.push(new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [new TableRow({ cantSplit: true, children: [
        signatureCell(model.nameA, model.roleA, model.sigA),
        signatureCell(model.nameB, model.roleB, model.sigB),
      ] })],
    }));

    const doc = new Document({
      sections: [{
        properties: { page: { margin: { top: 1000, bottom: 1000, left: 1200, right: 1200 } } },
        children,
      }],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = getExportFilename('docx');
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error(err);
    toast(t('docx_error'));
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  }
}

async function copyText() {
  const el = $('#pdf-content');
  const text = el.innerText;
  try {
    await navigator.clipboard.writeText(text);
    toast(t('copy_success'));
  } catch (e) {
    toast(t('copy_error'));
  }
}

function clearForm() {
  if (!confirm(t('clear_confirm'))) return;
  $('#nda-form').reset();
  state.logo = null;
  state.signatures = { A: null, B: null };
  state.docCode = null;
  state.docYear = null;
  $all('.field-input').forEach(el => el.classList.remove('field-error'));
  renderLogo();
  renderSignatureSlots();
  goToStep(1);
  updatePreview();
  try { localStorage.removeItem(AUTOSAVE_KEY); } catch (e) {}
}

/* ---------------------------------------------------------------------
   COMPLETION BAR & VALIDATION
   --------------------------------------------------------------------- */
function updateCompletion() {
  const filled = REQUIRED_FIELDS.filter(f => (($(`#${f.id}`) || {}).value || '').trim().length > 0).length;
  const pct = Math.round((filled / REQUIRED_FIELDS.length) * 100);
  const fillEl = $('#completion-fill');
  const pctEl = $('#completion-percent');
  if (fillEl) fillEl.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  return pct;
}

function getMissingFields() {
  return REQUIRED_FIELDS.filter(f => !(($(`#${f.id}`) || {}).value || '').trim());
}

function validateBeforeDownload() {
  const missing = getMissingFields();
  $all('.field-input').forEach(el => el.classList.remove('field-error'));
  if (missing.length === 0) return true;
  missing.forEach(f => {
    const el = $(`#${f.id}`);
    if (el) el.classList.add('field-error');
  });
  goToStep(missing[0].step);
  toast(t('validation_missing'));
  return false;
}

/* ---------------------------------------------------------------------
   8) TOAST
   --------------------------------------------------------------------- */
let toastTimeout;
function toast(message) {
  let el = $('#ndagen-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'ndagen-toast';
    el.style.cssText = `
      position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
      background: rgb(15 23 42); color: white; padding: 0.65rem 1.25rem;
      border-radius: 0.6rem; font-size: 0.85rem; font-weight: 600; z-index: 100;
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.3); opacity: 0; transition: opacity 0.2s ease;
    `;
    document.body.appendChild(el);
  }
  el.textContent = message;
  clearTimeout(toastTimeout);
  requestAnimationFrame(() => { el.style.opacity = '1'; });
  toastTimeout = setTimeout(() => { el.style.opacity = '0'; }, 2200);
}

/* ---------------------------------------------------------------------
   9) THEME (dark mode)
   --------------------------------------------------------------------- */
function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('ndagen_theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('ndagen_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
}

/* ---------------------------------------------------------------------
   10) COMPANY LOGO UPLOAD
   --------------------------------------------------------------------- */
function renderLogo() {
  const previewWrap = $('#logo-preview-wrap');
  const emptyWrap = $('#logo-empty-wrap');
  const img = $('#logo-preview-img');
  if (state.logo) {
    img.src = state.logo;
    previewWrap.classList.remove('hidden');
    emptyWrap.classList.add('hidden');
  } else {
    previewWrap.classList.add('hidden');
    emptyWrap.classList.remove('hidden');
  }
}

function handleLogoFile(file) {
  if (!file) return;
  if (!/^image\/(png|jpeg|jpg|svg\+xml)$/.test(file.type)) {
    toast(t('logo_error_type'));
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const maxW = 320, maxH = 160;
      let w = img.naturalWidth || maxW, h = img.naturalHeight || maxH;
      const ratio = Math.min(maxW / w, maxH / h, 1);
      w = Math.round(w * ratio);
      h = Math.round(h * ratio);
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      state.logo = canvas.toDataURL('image/png');
      renderLogo();
      updatePreview();
      autosave();
    };
    img.onerror = () => toast(t('logo_error_type'));
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function removeLogo() {
  state.logo = null;
  renderLogo();
  updatePreview();
  autosave();
}

/* ---------------------------------------------------------------------
   11) DIGITAL SIGNATURE PAD
   --------------------------------------------------------------------- */
let sigCanvas, sigCtx, sigDrawing = false, sigHasContent = false, sigTarget = null;

function initSignaturePad() {
  sigCanvas = $('#signature-canvas');
  sigCtx = sigCanvas.getContext('2d');

  function pos(e) {
    const rect = sigCanvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  sigCanvas.addEventListener('pointerdown', (e) => {
    sigDrawing = true;
    sigHasContent = true;
    const p = pos(e);
    sigCtx.beginPath();
    sigCtx.moveTo(p.x, p.y);
    sigCanvas.setPointerCapture(e.pointerId);
  });
  sigCanvas.addEventListener('pointermove', (e) => {
    if (!sigDrawing) return;
    const p = pos(e);
    sigCtx.lineTo(p.x, p.y);
    sigCtx.stroke();
  });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(evt => {
    sigCanvas.addEventListener(evt, () => { sigDrawing = false; });
  });
}

function sizeSignatureCanvas() {
  // Must run only while the modal is visible: a hidden ancestor (display:none)
  // reports a 0x0 bounding rect, which would leave the canvas unusable.
  const rect = sigCanvas.getBoundingClientRect();
  sigCanvas.width = rect.width;
  sigCanvas.height = rect.height;
  sigCtx.lineWidth = 2.5;
  sigCtx.lineCap = 'round';
  sigCtx.lineJoin = 'round';
  sigCtx.strokeStyle = '#1a1a1a';
}

function openSignatureModal(target) {
  sigTarget = target;
  sigHasContent = false;
  setSigTab('draw');
  $('#signature-modal').classList.remove('hidden');
  setTimeout(sizeSignatureCanvas, 0);
}

function closeSignatureModal() {
  $('#signature-modal').classList.add('hidden');
  sigTarget = null;
}

function setSigTab(tab) {
  $all('.sig-tab').forEach(b => b.classList.toggle('active', b.dataset.sigtab === tab));
  $('#sig-draw-hint').classList.toggle('hidden', tab !== 'draw');
  $('#sig-upload-panel').classList.toggle('hidden', tab !== 'upload');
}

function clearSignaturePad() {
  sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
  sigHasContent = false;
}

function handleSignatureFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
      const maxW = sigCanvas.width * 0.9, maxH = sigCanvas.height * 0.9;
      const ratio = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1);
      const w = img.naturalWidth * ratio, h = img.naturalHeight * ratio;
      const x = (sigCanvas.width - w) / 2, y = (sigCanvas.height - h) / 2;
      sigCtx.drawImage(img, x, y, w, h);
      sigHasContent = true;
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function confirmSignature() {
  if (!sigHasContent) {
    toast(t('sig_error_empty'));
    return;
  }
  const dataUrl = sigCanvas.toDataURL('image/png');
  state.signatures[sigTarget] = dataUrl;
  closeSignatureModal();
  renderSignatureSlots();
  updatePreview();
  autosave();
}

function removeSignature(target) {
  state.signatures[target] = null;
  renderSignatureSlots();
  updatePreview();
  autosave();
}

function renderSignatureSlots() {
  ['A', 'B'].forEach(target => {
    const body = $(`#sig-slot-body-${target}`);
    if (!body) return;
    const sig = state.signatures[target];
    if (sig) {
      body.innerHTML = `
        <div class="sig-thumb-box">
          <img src="${sig}" alt="signature">
          <div class="sig-thumb-actions">
            <button type="button" class="btn-ghost btn-sm" data-sig-edit="${target}">${escapeHtml(t('sig_edit_btn'))}</button>
            <button type="button" class="btn-ghost btn-sm" data-sig-remove="${target}">${escapeHtml(t('sig_remove_btn'))}</button>
          </div>
        </div>`;
    } else {
      body.innerHTML = `
        <button type="button" class="sig-add-btn" data-sig-add="${target}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          ${escapeHtml(t('sig_add_btn'))}
        </button>`;
    }
  });

  $all('[data-sig-add]').forEach(b => b.addEventListener('click', () => openSignatureModal(b.dataset.sigAdd)));
  $all('[data-sig-edit]').forEach(b => b.addEventListener('click', () => openSignatureModal(b.dataset.sigEdit)));
  $all('[data-sig-remove]').forEach(b => b.addEventListener('click', () => removeSignature(b.dataset.sigRemove)));
}

/* ---------------------------------------------------------------------
   12) PERSISTENCE: AUTOSAVE & TEMPLATE
   --------------------------------------------------------------------- */
function getSerializableFields() {
  return {
    partyA_name: $('#partyA_name').value,
    partyA_id: $('#partyA_id').value,
    partyA_address: $('#partyA_address').value,
    partyB_name: $('#partyB_name').value,
    partyB_id: $('#partyB_id').value,
    partyB_address: $('#partyB_address').value,
    purpose: $('#purpose').value,
    duration: $('#duration').value,
    jurisdiction: $('#jurisdiction').value,
    'custom-filename': $('#custom-filename').value,
  };
}

function applyFieldsToForm(fields) {
  if (!fields) return;
  Object.keys(fields).forEach(id => {
    const el = document.getElementById(id);
    if (el && fields[id] != null) el.value = fields[id];
  });
}

let autosaveTimeout;
function autosave() {
  clearTimeout(autosaveTimeout);
  autosaveTimeout = setTimeout(() => {
    try {
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({
        docType: state.docType,
        fields: getSerializableFields(),
        logo: state.logo,
        signatures: state.signatures,
        docCode: state.docCode,
        docYear: state.docYear,
        bilingual: state.bilingual,
        langSecondary: state.langSecondary,
      }));
    } catch (e) { /* storage full or unavailable */ }
  }, 400);
}

function loadAutosave() {
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.docType) state.docType = data.docType;
    applyFieldsToForm(data.fields);
    state.logo = data.logo || null;
    state.signatures = data.signatures || { A: null, B: null };
    state.docCode = data.docCode || null;
    state.docYear = data.docYear || null;
    state.bilingual = !!data.bilingual;
    state.langSecondary = data.langSecondary || 'en';
  } catch (e) { /* ignore corrupt data */ }
}

function saveAsTemplate() {
  try {
    localStorage.setItem(TEMPLATE_KEY, JSON.stringify({
      partyA_name: $('#partyA_name').value,
      partyA_id: $('#partyA_id').value,
      partyA_address: $('#partyA_address').value,
      logo: state.logo,
    }));
    toast(t('template_saved'));
  } catch (e) {
    toast(t('template_empty'));
  }
}

function loadTemplate() {
  const raw = localStorage.getItem(TEMPLATE_KEY);
  if (!raw) {
    toast(t('template_empty'));
    return;
  }
  try {
    const data = JSON.parse(raw);
    applyFieldsToForm(data);
    if (data.logo) {
      state.logo = data.logo;
      renderLogo();
    }
    updatePreview();
    autosave();
    toast(t('template_loaded'));
  } catch (e) {
    toast(t('template_empty'));
  }
}

/* ---------------------------------------------------------------------
   13) FAQ ACCORDION
   --------------------------------------------------------------------- */
function initFaqAccordion() {
  $all('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ---------------------------------------------------------------------
   13a2) LEGAL GUIDE ACCORDION
   --------------------------------------------------------------------- */
function expandGuideItem(item) {
  const panel = item.querySelector('.guide-panel');
  item.classList.add('open');
  item.querySelector('.guide-question').setAttribute('aria-expanded', 'true');
  panel.style.maxHeight = panel.scrollHeight + 'px';
}

function collapseGuideItem(item) {
  const panel = item.querySelector('.guide-panel');
  item.classList.remove('open');
  item.querySelector('.guide-question').setAttribute('aria-expanded', 'false');
  panel.style.maxHeight = '0px';
}

function refreshOpenGuidePanels() {
  $all('.guide-item.open').forEach(item => {
    item.querySelector('.guide-panel').style.maxHeight = item.querySelector('.guide-panel').scrollHeight + 'px';
  });
}

function initGuideAccordion() {
  $all('.guide-item').forEach(item => {
    const btn = item.querySelector('.guide-question');
    btn.addEventListener('click', () => {
      item.classList.contains('open') ? collapseGuideItem(item) : expandGuideItem(item);
    });
    if (item.classList.contains('open')) {
      expandGuideItem(item);
    }
  });
  window.addEventListener('resize', () => refreshOpenGuidePanels());
}

/* ---------------------------------------------------------------------
   13a3) MOBILE PREVIEW COLLAPSE / FAB
   --------------------------------------------------------------------- */
function initMobilePreview() {
  const toggleBtn = $('#btn-preview-toggle');
  const scrollEl = $('#preview-scroll');
  const fab = $('#btn-preview-fab');
  const previewCard = $('#preview-card');
  if (!toggleBtn || !scrollEl) return;

  const isMobileLayout = () => window.innerWidth < 1024;

  function collapsePreview() {
    scrollEl.style.maxHeight = '0px';
    scrollEl.style.opacity = '0';
    scrollEl.style.paddingTop = '0px';
    scrollEl.style.paddingBottom = '0px';
    scrollEl.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
  function expandPreview() {
    scrollEl.style.maxHeight = '';
    scrollEl.style.opacity = '';
    scrollEl.style.paddingTop = '';
    scrollEl.style.paddingBottom = '';
    scrollEl.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  if (isMobileLayout()) collapsePreview(); else expandPreview();

  toggleBtn.addEventListener('click', () => {
    if (!isMobileLayout()) return;
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    isExpanded ? collapsePreview() : expandPreview();
  });

  fab?.addEventListener('click', () => {
    expandPreview();
    previewCard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  window.addEventListener('resize', () => {
    if (!isMobileLayout()) expandPreview();
  });
}

/* ---------------------------------------------------------------------
   13b) DONATION MODAL
   --------------------------------------------------------------------- */
const DONATE_CONFIG = {
  // Reemplaza esta URL con tu enlace real de pago: Stripe Payment Link,
  // PayPal.me / botón de PayPal, o tu página de Buy Me a Coffee.
  // Ejemplos:
  //   Stripe:  'https://buy.stripe.com/xxxxxxxx'
  //   PayPal:  'https://www.paypal.com/paypalme/tuusuario'
  //   BMC:     'https://www.buymeacoffee.com/tuusuario'
  // Mientras quede vacía, el modal solo mostrará un mensaje de agradecimiento.
  url: ''
};

function initDonationModal() {
  const modal = $('#donate-modal');
  if (!modal) return;
  const amountBtns = $all('.donate-amount-btn');
  const customInput = $('#donate-custom-amount');
  const thanksBox = $('#donate-thanks');
  const confirmBtn = $('#btn-donate-confirm');
  let selectedAmount = 5;

  function selectAmount(amount) {
    selectedAmount = amount;
    amountBtns.forEach(b => b.classList.toggle('active', Number(b.dataset.amount) === amount));
    customInput.value = '';
  }

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => selectAmount(Number(btn.dataset.amount)));
  });

  customInput.addEventListener('input', () => {
    if (customInput.value) {
      selectedAmount = Number(customInput.value);
      amountBtns.forEach(b => b.classList.remove('active'));
    }
  });

  function openDonateModal() {
    thanksBox.classList.add('hidden');
    selectAmount(5);
    modal.classList.remove('hidden');
  }
  function closeDonateModal() {
    modal.classList.add('hidden');
  }

  $('#btn-donate-nav')?.addEventListener('click', openDonateModal);
  $('#btn-donate-footer')?.addEventListener('click', openDonateModal);
  $('#donate-modal-close').addEventListener('click', closeDonateModal);
  $('#btn-donate-cancel').addEventListener('click', closeDonateModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeDonateModal();
  });

  confirmBtn.addEventListener('click', () => {
    const amount = selectedAmount > 0 ? selectedAmount : 5;
    if (DONATE_CONFIG.url) {
      const sep = DONATE_CONFIG.url.includes('?') ? '&' : '?';
      window.open(`${DONATE_CONFIG.url}${sep}amount=${amount}`, '_blank', 'noopener');
      closeDonateModal();
    } else {
      thanksBox.classList.remove('hidden');
    }
  });
}

/* ---------------------------------------------------------------------
   14) INIT & EVENT BINDING
   --------------------------------------------------------------------- */
function init() {
  initTheme();
  loadAutosave();
  applyI18n();
  $('#bilingual-toggle').checked = state.bilingual;
  $('#bilingual-lang-picker').classList.toggle('hidden', !state.bilingual);
  selectTemplate(state.docType);
  renderLogo();
  initSignaturePad();
  renderSignatureSlots();
  goToStep(1);
  updatePreview();

  $('#year').textContent = new Date().getFullYear();

  initFaqAccordion();
  initGuideAccordion();
  initDonationModal();
  initMobilePreview();

  // Template cards
  $all('.template-card').forEach(card => {
    card.addEventListener('click', () => selectTemplate(card.dataset.template));
  });
  // Template mobile tabs
  $all('.template-tab').forEach(tab => {
    tab.addEventListener('click', () => selectTemplate(tab.dataset.template));
  });

  // Language switch
  $('#lang-select').addEventListener('change', (e) => {
    state.lang = e.target.value;
    localStorage.setItem('ndagen_lang', state.lang);
    applyI18n();
    renderSignatureSlots();
    updatePreview();
    refreshOpenGuidePanels();
    autosave();
  });

  // Bilingual (dual-language) mode
  $('#bilingual-toggle').addEventListener('change', (e) => {
    state.bilingual = e.target.checked;
    $('#bilingual-lang-picker').classList.toggle('hidden', !state.bilingual);
    updatePreview();
    autosave();
  });
  $('#bilingual-secondary-select').addEventListener('change', (e) => {
    state.langSecondary = e.target.value;
    updatePreview();
    autosave();
  });

  // Custom filename (persisted, no re-render needed)
  $('#custom-filename').addEventListener('input', autosave);

  // Theme toggle
  $('#theme-toggle').addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });

  // Wizard navigation
  $('#btn-next').addEventListener('click', () => goToStep(state.step + 1));
  $('#btn-prev').addEventListener('click', () => goToStep(state.step - 1));

  // Step dots (clickable)
  $all('.step-dot').forEach(dot => {
    dot.addEventListener('click', () => goToStep(Number(dot.dataset.step)));
    dot.style.cursor = 'pointer';
  });

  // Live preview updates + autosave + clear field errors as the user types
  $('#nda-form').addEventListener('input', (e) => {
    e.target.classList.remove('field-error');
    updatePreview();
    autosave();
  });
  $('#nda-form').addEventListener('change', () => { updatePreview(); autosave(); });

  // Actions
  $('#btn-pdf').addEventListener('click', downloadPdf);
  $('#btn-docx').addEventListener('click', downloadDocx);
  $('#btn-copy').addEventListener('click', copyText);
  $('#btn-clear').addEventListener('click', clearForm);

  // Prevent implicit form submit on Enter
  $('#nda-form').addEventListener('submit', (e) => e.preventDefault());

  // Logo upload
  $('#logo-file-input').addEventListener('change', (e) => handleLogoFile(e.target.files[0]));
  $('#btn-logo-remove').addEventListener('click', removeLogo);

  // Save / load template
  $('#btn-save-template').addEventListener('click', saveAsTemplate);
  $('#btn-load-template').addEventListener('click', loadTemplate);

  // Signature modal
  $all('.sig-tab').forEach(b => b.addEventListener('click', () => setSigTab(b.dataset.sigtab)));
  $('#signature-file-input').addEventListener('change', (e) => handleSignatureFile(e.target.files[0]));
  $('#btn-sig-clear').addEventListener('click', clearSignaturePad);
  $('#btn-sig-cancel').addEventListener('click', closeSignatureModal);
  $('#sig-modal-close').addEventListener('click', closeSignatureModal);
  $('#btn-sig-confirm').addEventListener('click', confirmSignature);
  $('#signature-modal').addEventListener('click', (e) => {
    if (e.target.id === 'signature-modal') closeSignatureModal();
  });
}

document.addEventListener('DOMContentLoaded', init);
