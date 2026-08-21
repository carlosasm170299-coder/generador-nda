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
    footer_rights: "All rights reserved.",
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

  let bodyHtml;
  if (isBilingual) {
    const langB = state.langSecondary;
    const partsB = resolveTemplateParts(docType, langB);
    const durationB = durationText(data.duration, langB);
    const fillB = makeFill(partsB.roleA, partsB.roleB, durationB);
    const clausesB = resolveClauses(docType, partsB, langB);

    const pairedClausesHtml = clauses.map((c, idx) => (
      renderClause(c, idx, fill) + renderClause(clausesB[idx], idx, fillB)
    )).join('');

    bodyHtml = `
      <div class="bilingual-lang-headers">
        <div>${escapeHtml(LANGS[lang] ? LANGS[lang].label : lang)}</div>
        <div>${escapeHtml(LANGS[langB] ? LANGS[langB].label : langB)}</div>
      </div>
      <div class="bilingual-grid">
        <p class="bilingual-cell">${fill(escapeHtml(intro))}</p>
        <p class="bilingual-cell">${fillB(escapeHtml(partsB.intro))}</p>
        ${pairedClausesHtml}
        <p class="bilingual-cell" style="margin-top:1.5rem;">${fill(escapeHtml(t('sign_place_date')))}</p>
        <p class="bilingual-cell" style="margin-top:1.5rem;">${fillB(escapeHtml(tFor(langB, 'sign_place_date')))}</p>
      </div>
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
  updatePartyLegends();
  updateObjectLabel();
  updateDurationLabel();
  updateSignatureLabels();
  updatePreview();
}

/* ---------------------------------------------------------------------
   7) ACTIONS: PDF / COPY / CLEAR
   --------------------------------------------------------------------- */
function downloadPdf() {
  if (!validateBeforeDownload()) return;

  // Pass #pdf-content straight to html2pdf. Its own toContainer() step
  // already clones the source node and re-parents the clone into a
  // detached, off-screen overlay it fully controls (position: fixed
  // overlay + position: absolute, width: <page width>, height: auto
  // container) — so the clone is never subject to #preview-scroll's
  // max-height/overflow-y:auto ancestor, and its full natural height is
  // captured regardless of that container's current scroll position.
  // (An earlier version of this function pre-cloned the element itself
  // and forced position:fixed on it before handing it to html2pdf; that
  // inline "fixed" position survived html2pdf's own cloneNode() call and
  // broke out of its container's layout flow, collapsing the container
  // to 0x0 and producing a blank PDF — do not reintroduce that.)
  const el = $('#pdf-content');
  const opt = {
    margin: [15, 15, 15, 15],
    filename: getExportFilename('pdf'),
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    // Deliberately NOT using 'avoid-all': that mode marks every single
    // element in the tree (every <p>, <strong>, <div>, ...) as
    // break-inside:avoid, which compounds tiny gap-filling padding
    // throughout the document and reliably produces a near-blank
    // trailing page. 'css' + the explicit avoid list below already
    // covers everything that actually needs to stay together.
    pagebreak: { mode: ['css', 'legacy'], avoid: ['.clause-block', '.sign-block', 'tr', 'h2.clause-title'] }
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
  const marginBottom = opt.margin[2];
  const marginLeft = opt.margin[3];
  const marginRight = opt.margin[1];

  const fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  fontsReady.then(() => html2pdf().set(opt).from(el).toPdf().get('pdf').then(function (pdf) {
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
        new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: c.title, bold: true, size: 20 })] }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { after: 150, line: 300 },
          children: c.bodyRuns.map(r => new TextRun({ text: r.text, bold: r.bold })),
        }),
      ];

      const rows = [];
      rows.push(new TableRow({ children: [
        langHeaderCell((LANGS[model.lang] || {}).label || model.lang),
        langHeaderCell((LANGS[modelSecondary.lang] || {}).label || modelSecondary.lang),
      ] }));
      rows.push(new TableRow({ children: [bilingualCell([introParagraph(model)]), bilingualCell([introParagraph(modelSecondary)])] }));
      model.clauses.forEach((c, idx) => {
        rows.push(new TableRow({ children: [
          bilingualCell(clauseParagraphs(c)),
          bilingualCell(clauseParagraphs(modelSecondary.clauses[idx])),
        ] }));
      });
      rows.push(new TableRow({ children: [bilingualCell([signPlaceParagraph(model)]), bilingualCell([signPlaceParagraph(modelSecondary)])] }));

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
      rows: [new TableRow({ children: [
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

  // Template cards
  $all('.template-card').forEach(card => {
    card.addEventListener('click', () => selectTemplate(card.dataset.template));
  });

  // Language switch
  $('#lang-select').addEventListener('change', (e) => {
    state.lang = e.target.value;
    localStorage.setItem('ndagen_lang', state.lang);
    applyI18n();
    renderSignatureSlots();
    updatePreview();
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
