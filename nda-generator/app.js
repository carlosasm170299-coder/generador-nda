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
    meta_title: "DraftB2B — Generador Gratuito de Contratos B2B y Acuerdos de Confidencialidad (NDA)",
    meta_description: "DraftB2B: genera y descarga en PDF tu Acuerdo de Confidencialidad (NDA) unilateral, bilateral, Contrato de Prestación de Servicios B2B o Política de Privacidad en minutos. Gratis, sin registro.",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "Cláusulas Adicionales / Opcionales",
    optional_clauses_hint: "Activa las cláusulas que quieras incluir. Se añadirán automáticamente al documento con la numeración correcta.",
    toggle_noncompete_label: "No Competencia",
    toggle_noncompete_desc: "Impide que la parte receptora desarrolle negocios directamente competidores durante la vigencia del acuerdo.",
    toggle_nonsolicit_label: "No Captación",
    toggle_nonsolicit_desc: "Prohíbe solicitar o contratar empleados, contratistas o clientes de la otra parte.",
    toggle_arbitration_label: "Arbitraje en lugar de Tribunales",
    toggle_arbitration_desc: "Sustituye la cláusula estándar de tribunales ordinarios por arbitraje comercial vinculante.",
    clause_noncompete_title: "NO COMPETENCIA",
    clause_noncompete_body: "Durante la vigencia del presente Acuerdo y por un período de {duration} posterior a su terminación, {roleB} se compromete a no desarrollar, operar, invertir en, ni participar directa o indirectamente en cualquier negocio, proyecto o actividad que compita directamente con el objeto descrito en la Cláusula Primera, sin el consentimiento previo y por escrito de {roleA}.",
    clause_nonsolicit_title: "NO CAPTACIÓN DE PERSONAL Y CLIENTES",
    clause_nonsolicit_body: "Durante la vigencia del presente Acuerdo y por un período de {duration} posterior a su terminación, {roleB} se compromete a no solicitar, contratar, ni captar, directa o indirectamente, a empleados, contratistas o clientes de {roleA} que hayan tenido relación con el objeto del presente Acuerdo, sin el consentimiento previo y por escrito de {roleA}.",
    clause_arbitration_title: "RESOLUCIÓN DE DISPUTAS - ARBITRAJE",
    clause_arbitration_body: "Cualquier controversia derivada de la interpretación o cumplimiento del presente documento será resuelta de manera definitiva mediante arbitraje comercial vinculante, con sede en {jurisdiction}, renunciando las Partes expresamente a acudir a los tribunales ordinarios, salvo para la ejecución del laudo arbitral que se dicte.",
    custom_clause_add_btn: "+ Agregar cláusula personalizada",
    custom_clause_title_label: "Título de la cláusula",
    custom_clause_title_placeholder: "Ej. Propiedad Intelectual",
    custom_clause_body_label: "Contenido de la cláusula",
    custom_clause_body_placeholder: "Escribe el texto completo de la cláusula...",
    custom_clause_remove_btn: "Eliminar",
    custom_clause_empty_hint: "Aún no has agregado cláusulas personalizadas.",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "Hash de Verificación",
    doc_timestamp_label: "Timbrado digital",
    doc_integrity_hint: "Este sello permite verificar que el contenido no ha sido alterado tras su generación.",

    // --- Watermark ---
    watermark_label: "Marca de Agua",
    watermark_none: "Sin Marca de Agua",
    watermark_draft: "BORRADOR",
    watermark_confidential: "CONFIDENCIAL",
    watermark_review: "COPIA DE REVISIÓN",

    // --- Share pre-filled link ---
    btn_share_link: "Compartir con la contraparte",
    share_modal_title: "Compartir formulario",
    share_modal_desc: "Comparte este enlace con la otra parte. Se abrirá con los datos de tu empresa ya completados; ellos solo deberán completar los suyos.",
    share_copy_btn: "Copiar Enlace",
    share_copied_msg: "¡Enlace copiado al portapapeles!",
    share_prefill_notice: "Hemos completado los datos de la contraparte. Por favor, completa tu información como Parte Receptora.",

    // --- Penalty clause calculator ---
    penalty_calc_title: "Calculadora de Cláusula Penal",
    penalty_calc_desc: "Estima un monto y una redacción para la cláusula de indemnización por incumplimiento, según el valor de tu información o proyecto. Es solo una sugerencia orientativa, no asesoría legal.",
    penalty_value_label: "Valor estimado del proyecto / información",
    penalty_currency_label: "Moneda",
    penalty_calc_btn: "Calcular sugerencia",
    penalty_result_intro: "Sugerencia orientativa:",
    penalty_result_text: "En caso de incumplimiento, se sugiere una penalización de aproximadamente {amount} {currency} (equivalente al 15% del valor declarado), sin perjuicio de otros daños y perjuicios demostrables.",
    penalty_insert_btn: "Insertar en el contrato",
    penalty_inserted_msg: "Cláusula de penalización añadida a tus cláusulas personalizadas.",
    penalty_clause_title: "INDEMNIZACIÓN POR INCUMPLIMIENTO",

    // --- Pre-download checklist ---
    checklist_title: "Verificación Rápida Pre-Descarga",
    checklist_item1: "He comprobado la identidad de ambas partes",
    checklist_item2: "El alcance y objeto están claramente delimitados",
    checklist_item3: "Existe acuerdo mutuo sobre la jurisdicción aplicable",
    checklist_hint: "Marca las 3 casillas para habilitar la descarga.",

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
    benefits_title: "¿Por qué usar DraftB2B?",
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
    donate_modal_desc: "DraftB2B es gratuito y no requiere registro. Si esta herramienta te ha sido útil, considera invitarnos un café para ayudarnos a mantenerla.",
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
    validation_alert_title: "Campos requeridos incompletos",
    validation_alert_intro: "Por favor completa:",
    validation_field_name: "Nombre / Empresa",
    validation_field_id: "Identificación fiscal",
    validation_field_address: "Domicilio legal",
    validation_field_purpose: "Objeto / Propósito",
    validation_field_jurisdiction: "Jurisdicción",
    validation_field_signature: "Firma",

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
    meta_title: "DraftB2B — Free B2B Contract and NDA Generator",
    meta_description: "DraftB2B: generate and download your Non-Disclosure Agreement (NDA), B2B Services Contract, or Privacy Policy as a PDF in minutes. Free, no signup required.",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "Additional / Optional Clauses",
    optional_clauses_hint: "Turn on the clauses you want to include. They'll be added automatically with the correct numbering.",
    toggle_noncompete_label: "Non-Compete",
    toggle_noncompete_desc: "Prevents the receiving party from operating directly competing businesses during the term of the agreement.",
    toggle_nonsolicit_label: "Non-Solicitation",
    toggle_nonsolicit_desc: "Prohibits soliciting or hiring the other party's employees, contractors, or clients.",
    toggle_arbitration_label: "Arbitration Instead of Courts",
    toggle_arbitration_desc: "Replaces the standard ordinary-courts clause with binding commercial arbitration.",
    clause_noncompete_title: "NON-COMPETE",
    clause_noncompete_body: "During the term of this Agreement and for a period of {duration} following its termination, {roleB} agrees not to develop, operate, invest in, or directly or indirectly participate in any business, project, or activity that directly competes with the subject matter described in the First Clause, without {roleA}'s prior written consent.",
    clause_nonsolicit_title: "NON-SOLICITATION OF PERSONNEL AND CLIENTS",
    clause_nonsolicit_body: "During the term of this Agreement and for a period of {duration} following its termination, {roleB} agrees not to solicit, hire, or otherwise recruit, directly or indirectly, any employees, contractors, or clients of {roleA} who have been involved with the subject matter of this Agreement, without {roleA}'s prior written consent.",
    clause_arbitration_title: "DISPUTE RESOLUTION - ARBITRATION",
    clause_arbitration_body: "Any dispute arising from the interpretation or performance of this document shall be finally resolved through binding commercial arbitration, seated in {jurisdiction}, with the Parties expressly waiving recourse to ordinary courts, except for the enforcement of the resulting arbitral award.",
    custom_clause_add_btn: "+ Add custom clause",
    custom_clause_title_label: "Clause title",
    custom_clause_title_placeholder: "E.g. Intellectual Property",
    custom_clause_body_label: "Clause content",
    custom_clause_body_placeholder: "Write the full text of the clause...",
    custom_clause_remove_btn: "Remove",
    custom_clause_empty_hint: "You haven't added any custom clauses yet.",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "Verification Hash",
    doc_timestamp_label: "Digital timestamp",
    doc_integrity_hint: "This seal lets you verify the content hasn't been altered since it was generated.",

    // --- Watermark ---
    watermark_label: "Watermark",
    watermark_none: "No Watermark",
    watermark_draft: "DRAFT",
    watermark_confidential: "CONFIDENTIAL",
    watermark_review: "REVIEW COPY",

    // --- Share pre-filled link ---
    btn_share_link: "Share with counterparty",
    share_modal_title: "Share form",
    share_modal_desc: "Share this link with the other party. It will open with your company's details already filled in; they'll only need to complete theirs.",
    share_copy_btn: "Copy Link",
    share_copied_msg: "Link copied to clipboard!",
    share_prefill_notice: "We've filled in the counterparty's details. Please complete your information as the Receiving Party.",

    // --- Penalty clause calculator ---
    penalty_calc_title: "Penalty Clause Calculator",
    penalty_calc_desc: "Estimate an amount and wording for the breach-of-contract indemnity clause, based on the value of your information or project. This is only an indicative suggestion, not legal advice.",
    penalty_value_label: "Estimated value of the project / information",
    penalty_currency_label: "Currency",
    penalty_calc_btn: "Calculate suggestion",
    penalty_result_intro: "Indicative suggestion:",
    penalty_result_text: "In the event of a breach, a penalty of approximately {amount} {currency} is suggested (equivalent to 15% of the declared value), without prejudice to other demonstrable damages.",
    penalty_insert_btn: "Insert into the contract",
    penalty_inserted_msg: "Penalty clause added to your custom clauses.",
    penalty_clause_title: "INDEMNIFICATION FOR BREACH",

    // --- Pre-download checklist ---
    checklist_title: "Quick Pre-Download Checklist",
    checklist_item1: "I have verified the identity of both parties",
    checklist_item2: "The scope and purpose are clearly defined",
    checklist_item3: "There is mutual agreement on the applicable jurisdiction",
    checklist_hint: "Check all 3 boxes to enable downloading.",

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
    benefits_title: "Why use DraftB2B?",
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
    donate_modal_desc: "DraftB2B is free and requires no sign-up. If this tool has been useful to you, consider buying us a coffee to help keep it running.",
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
    validation_alert_title: "Incomplete required fields",
    validation_alert_intro: "Please complete:",
    validation_field_name: "Name / Company",
    validation_field_id: "Tax ID",
    validation_field_address: "Legal address",
    validation_field_purpose: "Purpose",
    validation_field_jurisdiction: "Jurisdiction",
    validation_field_signature: "Signature",

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
    meta_title: "DraftB2B — Gerador Gratuito de Contratos B2B e NDA",
    meta_description: "DraftB2B: gere e baixe seu Acordo de Confidencialidade (NDA), Contrato de Prestação de Serviços B2B ou Política de Privacidade em PDF em minutos. Grátis, sem cadastro.",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "Cláusulas Adicionais / Opcionais",
    optional_clauses_hint: "Ative as cláusulas que deseja incluir. Elas serão adicionadas automaticamente ao documento com a numeração correta.",
    toggle_noncompete_label: "Não Concorrência",
    toggle_noncompete_desc: "Impede que a parte receptora desenvolva negócios diretamente concorrentes durante a vigência do acordo.",
    toggle_nonsolicit_label: "Não Aliciamento",
    toggle_nonsolicit_desc: "Proíbe solicitar ou contratar funcionários, prestadores ou clientes da outra parte.",
    toggle_arbitration_label: "Arbitragem em vez de Tribunais",
    toggle_arbitration_desc: "Substitui a cláusula padrão de tribunais ordinários por arbitragem comercial vinculante.",
    clause_noncompete_title: "NÃO CONCORRÊNCIA",
    clause_noncompete_body: "Durante a vigência do presente Acordo e por um período de {duration} após seu término, {roleB} compromete-se a não desenvolver, operar, investir ou participar direta ou indiretamente em qualquer negócio, projeto ou atividade que concorra diretamente com o objeto descrito na Cláusula Primeira, sem o consentimento prévio e por escrito de {roleA}.",
    clause_nonsolicit_title: "NÃO ALICIAMENTO DE PESSOAL E CLIENTES",
    clause_nonsolicit_body: "Durante a vigência do presente Acordo e por um período de {duration} após seu término, {roleB} compromete-se a não solicitar, contratar ou aliciar, direta ou indiretamente, funcionários, prestadores ou clientes de {roleA} que tenham tido relação com o objeto do presente Acordo, sem o consentimento prévio e por escrito de {roleA}.",
    clause_arbitration_title: "RESOLUÇÃO DE DISPUTAS - ARBITRAGEM",
    clause_arbitration_body: "Qualquer controvérsia decorrente da interpretação ou cumprimento do presente documento será resolvida de forma definitiva por meio de arbitragem comercial vinculante, com sede em {jurisdiction}, renunciando as Partes expressamente a recorrer aos tribunais ordinários, exceto para a execução da sentença arbitral proferida.",
    custom_clause_add_btn: "+ Adicionar cláusula personalizada",
    custom_clause_title_label: "Título da cláusula",
    custom_clause_title_placeholder: "Ex. Propriedade Intelectual",
    custom_clause_body_label: "Conteúdo da cláusula",
    custom_clause_body_placeholder: "Escreva o texto completo da cláusula...",
    custom_clause_remove_btn: "Remover",
    custom_clause_empty_hint: "Você ainda não adicionou cláusulas personalizadas.",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "Hash de Verificação",
    doc_timestamp_label: "Timbre digital",
    doc_integrity_hint: "Este selo permite verificar que o conteúdo não foi alterado após sua geração.",

    // --- Watermark ---
    watermark_label: "Marca d'Água",
    watermark_none: "Sem Marca d'Água",
    watermark_draft: "RASCUNHO",
    watermark_confidential: "CONFIDENCIAL",
    watermark_review: "CÓPIA DE REVISÃO",

    // --- Share pre-filled link ---
    btn_share_link: "Compartilhar com a contraparte",
    share_modal_title: "Compartilhar formulário",
    share_modal_desc: "Compartilhe este link com a outra parte. Ele abrirá com os dados da sua empresa já preenchidos; eles só precisarão completar os deles.",
    share_copy_btn: "Copiar Link",
    share_copied_msg: "Link copiado para a área de transferência!",
    share_prefill_notice: "Preenchemos os dados da contraparte. Por favor, complete suas informações como Parte Receptora.",

    // --- Penalty clause calculator ---
    penalty_calc_title: "Calculadora de Cláusula Penal",
    penalty_calc_desc: "Estime um valor e uma redação para a cláusula de indenização por descumprimento, com base no valor da sua informação ou projeto. É apenas uma sugestão orientativa, não assessoria jurídica.",
    penalty_value_label: "Valor estimado do projeto / informação",
    penalty_currency_label: "Moeda",
    penalty_calc_btn: "Calcular sugestão",
    penalty_result_intro: "Sugestão orientativa:",
    penalty_result_text: "Em caso de descumprimento, sugere-se uma penalidade de aproximadamente {amount} {currency} (equivalente a 15% do valor declarado), sem prejuízo de outros danos comprováveis.",
    penalty_insert_btn: "Inserir no contrato",
    penalty_inserted_msg: "Cláusula de penalidade adicionada às suas cláusulas personalizadas.",
    penalty_clause_title: "INDENIZAÇÃO POR DESCUMPRIMENTO",

    // --- Pre-download checklist ---
    checklist_title: "Verificação Rápida Pré-Download",
    checklist_item1: "Verifiquei a identidade de ambas as partes",
    checklist_item2: "O escopo e objeto estão claramente delimitados",
    checklist_item3: "Há acordo mútuo sobre a jurisdição aplicável",
    checklist_hint: "Marque as 3 caixas para habilitar o download.",

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
    benefits_title: "Por que usar o DraftB2B?",
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
    donate_modal_desc: "O DraftB2B é gratuito e não exige cadastro. Se esta ferramenta foi útil para você, considere nos pagar um café para ajudar a mantê-la.",
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
    validation_alert_title: "Campos obrigatórios incompletos",
    validation_alert_intro: "Por favor, preencha:",
    validation_field_name: "Nome / Empresa",
    validation_field_id: "Identificação fiscal",
    validation_field_address: "Domicílio legal",
    validation_field_purpose: "Objeto / Propósito",
    validation_field_jurisdiction: "Jurisdição",
    validation_field_signature: "Assinatura",
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
    meta_title: "DraftB2B — Générateur Gratuit de Contrats B2B et d'Accords de Confidentialité (NDA)",
    meta_description: "DraftB2B : générez et téléchargez votre Accord de Confidentialité (NDA), Contrat de Prestation de Services B2B ou Politique de Confidentialité au format PDF en quelques minutes. Gratuit, sans inscription.",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "Clauses Additionnelles / Optionnelles",
    optional_clauses_hint: "Activez les clauses que vous souhaitez inclure. Elles seront ajoutées automatiquement au document avec la numérotation correcte.",
    toggle_noncompete_label: "Non-Concurrence",
    toggle_noncompete_desc: "Empêche la partie réceptrice d'exploiter des activités directement concurrentes pendant la durée de l'accord.",
    toggle_nonsolicit_label: "Non-Débauchage",
    toggle_nonsolicit_desc: "Interdit de solliciter ou d'embaucher les employés, prestataires ou clients de l'autre partie.",
    toggle_arbitration_label: "Arbitrage au lieu des Tribunaux",
    toggle_arbitration_desc: "Remplace la clause standard des tribunaux ordinaires par un arbitrage commercial contraignant.",
    clause_noncompete_title: "NON-CONCURRENCE",
    clause_noncompete_body: "Pendant la durée du présent Accord et pendant une période de {duration} suivant sa résiliation, {roleB} s'engage à ne pas développer, exploiter, investir dans, ni participer directement ou indirectement à toute activité, projet ou entreprise concurrençant directement l'objet décrit dans la Première Clause, sans le consentement préalable et écrit de {roleA}.",
    clause_nonsolicit_title: "NON-DÉBAUCHAGE DE PERSONNEL ET DE CLIENTS",
    clause_nonsolicit_body: "Pendant la durée du présent Accord et pendant une période de {duration} suivant sa résiliation, {roleB} s'engage à ne pas solliciter, embaucher ou débaucher, directement ou indirectement, les employés, prestataires ou clients de {roleA} ayant été impliqués dans l'objet du présent Accord, sans le consentement préalable et écrit de {roleA}.",
    clause_arbitration_title: "RÈGLEMENT DES DIFFÉRENDS - ARBITRAGE",
    clause_arbitration_body: "Tout différend découlant de l'interprétation ou de l'exécution du présent document sera résolu de manière définitive par voie d'arbitrage commercial contraignant, avec siège à {jurisdiction}, les Parties renonçant expressément à recourir aux tribunaux ordinaires, sauf pour l'exécution de la sentence arbitrale rendue.",
    custom_clause_add_btn: "+ Ajouter une clause personnalisée",
    custom_clause_title_label: "Titre de la clause",
    custom_clause_title_placeholder: "Ex. Propriété Intellectuelle",
    custom_clause_body_label: "Contenu de la clause",
    custom_clause_body_placeholder: "Rédigez le texte complet de la clause...",
    custom_clause_remove_btn: "Supprimer",
    custom_clause_empty_hint: "Vous n'avez pas encore ajouté de clause personnalisée.",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "Hachage de Vérification",
    doc_timestamp_label: "Horodatage numérique",
    doc_integrity_hint: "Ce sceau permet de vérifier que le contenu n'a pas été modifié depuis sa génération.",

    // --- Watermark ---
    watermark_label: "Filigrane",
    watermark_none: "Sans Filigrane",
    watermark_draft: "BROUILLON",
    watermark_confidential: "CONFIDENTIEL",
    watermark_review: "COPIE DE RÉVISION",

    // --- Share pre-filled link ---
    btn_share_link: "Partager avec la contrepartie",
    share_modal_title: "Partager le formulaire",
    share_modal_desc: "Partagez ce lien avec l'autre partie. Il s'ouvrira avec les informations de votre entreprise déjà renseignées ; elle n'aura plus qu'à compléter les siennes.",
    share_copy_btn: "Copier le Lien",
    share_copied_msg: "Lien copié dans le presse-papiers !",
    share_prefill_notice: "Nous avons rempli les informations de la contrepartie. Veuillez compléter vos informations en tant que Partie Réceptrice.",

    // --- Penalty clause calculator ---
    penalty_calc_title: "Calculateur de Clause Pénale",
    penalty_calc_desc: "Estimez un montant et une formulation pour la clause d'indemnisation en cas de manquement, selon la valeur de votre information ou projet. Ce n'est qu'une suggestion indicative, pas un conseil juridique.",
    penalty_value_label: "Valeur estimée du projet / de l'information",
    penalty_currency_label: "Devise",
    penalty_calc_btn: "Calculer la suggestion",
    penalty_result_intro: "Suggestion indicative :",
    penalty_result_text: "En cas de manquement, une pénalité d'environ {amount} {currency} est suggérée (équivalente à 15 % de la valeur déclarée), sans préjudice d'autres dommages démontrables.",
    penalty_insert_btn: "Insérer dans le contrat",
    penalty_inserted_msg: "Clause de pénalité ajoutée à vos clauses personnalisées.",
    penalty_clause_title: "INDEMNISATION EN CAS DE MANQUEMENT",

    // --- Pre-download checklist ---
    checklist_title: "Vérification Rapide Avant Téléchargement",
    checklist_item1: "J'ai vérifié l'identité des deux parties",
    checklist_item2: "Le périmètre et l'objet sont clairement délimités",
    checklist_item3: "Il existe un accord mutuel sur la juridiction applicable",
    checklist_hint: "Cochez les 3 cases pour activer le téléchargement.",

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
    benefits_title: "Pourquoi utiliser DraftB2B ?",
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
    donate_modal_desc: "DraftB2B est gratuit et ne nécessite aucune inscription. Si cet outil vous a été utile, envisagez de nous offrir un café pour nous aider à le maintenir.",
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
    validation_alert_title: "Champs obligatoires incomplets",
    validation_alert_intro: "Veuillez compléter :",
    validation_field_name: "Nom / Société",
    validation_field_id: "Identification fiscale",
    validation_field_address: "Domicile légal",
    validation_field_purpose: "Objet / Finalité",
    validation_field_jurisdiction: "Juridiction",
    validation_field_signature: "Signature",
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
    meta_title: "DraftB2B — Бесплатный генератор B2B-договоров и NDA",
    meta_description: "DraftB2B: создайте и скачайте соглашение о неразглашении (NDA), договор оказания услуг B2B или политику конфиденциальности в формате PDF за несколько минут. Бесплатно, без регистрации.",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "Дополнительные / Опциональные пункты",
    optional_clauses_hint: "Включите пункты, которые хотите добавить. Они будут автоматически добавлены в документ с правильной нумерацией.",
    toggle_noncompete_label: "Отказ от конкуренции",
    toggle_noncompete_desc: "Запрещает принимающей стороне вести напрямую конкурирующий бизнес в течение срока действия соглашения.",
    toggle_nonsolicit_label: "Запрет переманивания",
    toggle_nonsolicit_desc: "Запрещает переманивать или нанимать сотрудников, подрядчиков или клиентов другой стороны.",
    toggle_arbitration_label: "Арбитраж вместо судов",
    toggle_arbitration_desc: "Заменяет стандартный пункт об обычных судах на обязательный коммерческий арбитраж.",
    clause_noncompete_title: "ОТКАЗ ОТ КОНКУРЕНЦИИ",
    clause_noncompete_body: "В течение срока действия настоящего Соглашения и в течение {duration} после его прекращения {roleB} обязуется не развивать, не эксплуатировать, не инвестировать и не участвовать прямо или косвенно в каком-либо бизнесе, проекте или деятельности, напрямую конкурирующей с предметом, описанным в Первом пункте, без предварительного письменного согласия {roleA}.",
    clause_nonsolicit_title: "ЗАПРЕТ ПЕРЕМАНИВАНИЯ ПЕРСОНАЛА И КЛИЕНТОВ",
    clause_nonsolicit_body: "В течение срока действия настоящего Соглашения и в течение {duration} после его прекращения {roleB} обязуется не переманивать, не нанимать и не привлекать прямо или косвенно сотрудников, подрядчиков или клиентов {roleA}, имевших отношение к предмету настоящего Соглашения, без предварительного письменного согласия {roleA}.",
    clause_arbitration_title: "РАЗРЕШЕНИЕ СПОРОВ - АРБИТРАЖ",
    clause_arbitration_body: "Любой спор, возникающий из толкования или исполнения настоящего документа, будет окончательно разрешён путём обязательного коммерческого арбитража с местом проведения в {jurisdiction}, при этом Стороны прямо отказываются от обращения в обычные суды, за исключением случаев приведения в исполнение вынесенного арбитражного решения.",
    custom_clause_add_btn: "+ Добавить свой пункт",
    custom_clause_title_label: "Название пункта",
    custom_clause_title_placeholder: "Напр., Интеллектуальная собственность",
    custom_clause_body_label: "Содержание пункта",
    custom_clause_body_placeholder: "Введите полный текст пункта...",
    custom_clause_remove_btn: "Удалить",
    custom_clause_empty_hint: "Вы ещё не добавили пользовательские пункты.",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "Хеш проверки",
    doc_timestamp_label: "Цифровая отметка времени",
    doc_integrity_hint: "Эта печать позволяет убедиться, что содержимое не было изменено после создания.",

    // --- Watermark ---
    watermark_label: "Водяной знак",
    watermark_none: "Без водяного знака",
    watermark_draft: "ЧЕРНОВИК",
    watermark_confidential: "КОНФИДЕНЦИАЛЬНО",
    watermark_review: "КОПИЯ НА ПРОВЕРКЕ",

    // --- Share pre-filled link ---
    btn_share_link: "Поделиться с контрагентом",
    share_modal_title: "Поделиться формой",
    share_modal_desc: "Поделитесь этой ссылкой с другой стороной. Она откроется с уже заполненными данными вашей компании; им останется заполнить только свои.",
    share_copy_btn: "Скопировать ссылку",
    share_copied_msg: "Ссылка скопирована в буфер обмена!",
    share_prefill_notice: "Мы заполнили данные контрагента. Пожалуйста, заполните свою информацию как Принимающая сторона.",

    // --- Penalty clause calculator ---
    penalty_calc_title: "Калькулятор штрафной неустойки",
    penalty_calc_desc: "Оцените сумму и формулировку для пункта о возмещении убытков за нарушение, исходя из стоимости вашей информации или проекта. Это лишь ориентировочное предложение, а не юридическая консультация.",
    penalty_value_label: "Оценочная стоимость проекта / информации",
    penalty_currency_label: "Валюта",
    penalty_calc_btn: "Рассчитать предложение",
    penalty_result_intro: "Ориентировочное предложение:",
    penalty_result_text: "В случае нарушения предлагается штраф в размере примерно {amount} {currency} (эквивалент 15% от заявленной стоимости), без ущерба для других доказуемых убытков.",
    penalty_insert_btn: "Вставить в договор",
    penalty_inserted_msg: "Штрафной пункт добавлен в ваши пользовательские пункты.",
    penalty_clause_title: "ВОЗМЕЩЕНИЕ УБЫТКОВ ЗА НАРУШЕНИЕ",

    // --- Pre-download checklist ---
    checklist_title: "Быстрая проверка перед скачиванием",
    checklist_item1: "Я проверил(а) личность обеих сторон",
    checklist_item2: "Объём и предмет чётко определены",
    checklist_item3: "Существует взаимное согласие относительно применимой юрисдикции",
    checklist_hint: "Отметьте все 3 пункта, чтобы разрешить скачивание.",

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
    benefits_title: "Почему стоит использовать DraftB2B?",
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
    donate_modal_desc: "DraftB2B бесплатен и не требует регистрации. Если этот инструмент оказался вам полезен, рассмотрите возможность угостить нас чашкой кофе, чтобы помочь поддерживать его работу.",
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
    validation_alert_title: "Не заполнены обязательные поля",
    validation_alert_intro: "Пожалуйста, заполните:",
    validation_field_name: "Имя / Компания",
    validation_field_id: "Налоговый идентификатор",
    validation_field_address: "Юридический адрес",
    validation_field_purpose: "Предмет / Цель",
    validation_field_jurisdiction: "Юрисдикция",
    validation_field_signature: "Подпись",
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
    meta_title: "DraftB2B — 免费 B2B 合同与保密协议(NDA)生成器",
    meta_description: "DraftB2B：几分钟内生成并下载您的保密协议(NDA)、B2B服务合同或隐私政策，PDF格式。免费，无需注册。",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "附加/可选条款",
    optional_clauses_hint: "启用您想要包含的条款，它们将自动以正确的编号添加到文档中。",
    toggle_noncompete_label: "禁止竞业",
    toggle_noncompete_desc: "禁止接收方在协议有效期内经营直接竞争性业务。",
    toggle_nonsolicit_label: "禁止招揽",
    toggle_nonsolicit_desc: "禁止招揽或聘用对方的员工、承包商或客户。",
    toggle_arbitration_label: "以仲裁代替法院",
    toggle_arbitration_desc: "以具有约束力的商业仲裁取代标准的普通法院条款。",
    clause_noncompete_title: "禁止竞业",
    clause_noncompete_body: "在本协议有效期内及终止后的{duration}内，未经{roleA}事先书面同意，{roleB}承诺不开发、经营、投资或以直接或间接方式参与与第一条所述事项直接竞争的任何业务、项目或活动。",
    clause_nonsolicit_title: "禁止招揽人员及客户",
    clause_nonsolicit_body: "在本协议有效期内及终止后的{duration}内，未经{roleA}事先书面同意，{roleB}承诺不直接或间接招揽、聘用与本协议事项相关的{roleA}的员工、承包商或客户。",
    clause_arbitration_title: "争议解决 - 仲裁",
    clause_arbitration_body: "因本文件的解释或履行而产生的任何争议，均应通过具有约束力的商业仲裁最终解决，仲裁地为{jurisdiction}，双方明确放弃诉诸普通法院的权利，但执行所作出的仲裁裁决除外。",
    custom_clause_add_btn: "+ 添加自定义条款",
    custom_clause_title_label: "条款标题",
    custom_clause_title_placeholder: "例如：知识产权",
    custom_clause_body_label: "条款内容",
    custom_clause_body_placeholder: "请输入条款的完整文本...",
    custom_clause_remove_btn: "删除",
    custom_clause_empty_hint: "您尚未添加任何自定义条款。",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "验证哈希值",
    doc_timestamp_label: "数字时间戳",
    doc_integrity_hint: "此印章可用于验证内容自生成以来是否被篡改。",

    // --- Watermark ---
    watermark_label: "水印",
    watermark_none: "无水印",
    watermark_draft: "草稿",
    watermark_confidential: "保密",
    watermark_review: "审阅副本",

    // --- Share pre-filled link ---
    btn_share_link: "与对方共享",
    share_modal_title: "共享表单",
    share_modal_desc: "将此链接分享给对方。打开后将自动填充您公司的信息；对方只需填写他们自己的信息。",
    share_copy_btn: "复制链接",
    share_copied_msg: "链接已复制到剪贴板！",
    share_prefill_notice: "我们已填写对方的信息。请以接收方身份填写您的信息。",

    // --- Penalty clause calculator ---
    penalty_calc_title: "违约金计算器",
    penalty_calc_desc: "根据您的信息或项目的价值，估算违约赔偿条款的金额和措辞建议。这仅是参考性建议，不构成法律意见。",
    penalty_value_label: "项目/信息的估计价值",
    penalty_currency_label: "货币",
    penalty_calc_btn: "计算建议",
    penalty_result_intro: "参考建议：",
    penalty_result_text: "如发生违约，建议赔偿金约为{amount} {currency}（相当于申报价值的15%），但不影响其他可证明的损害赔偿。",
    penalty_insert_btn: "插入合同",
    penalty_inserted_msg: "违约金条款已添加到您的自定义条款中。",
    penalty_clause_title: "违约赔偿",

    // --- Pre-download checklist ---
    checklist_title: "下载前快速检查",
    checklist_item1: "我已核实双方的身份",
    checklist_item2: "范围和目的已明确界定",
    checklist_item3: "双方就适用管辖权达成一致",
    checklist_hint: "勾选全部3项以启用下载。",

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
    benefits_title: "为什么选择DraftB2B？",
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
    donate_modal_desc: "DraftB2B完全免费且无需注册。如果这个工具对您有帮助，欢迎请我们喝杯咖啡，帮助我们持续维护它。",
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
    validation_alert_title: "必填字段未完成",
    validation_alert_intro: "请填写：",
    validation_field_name: "姓名/公司",
    validation_field_id: "税务识别号",
    validation_field_address: "法定地址",
    validation_field_purpose: "目的/用途",
    validation_field_jurisdiction: "管辖权",
    validation_field_signature: "签名",
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
    meta_title: "DraftB2B — 無料のB2B契約書・NDAジェネレーター",
    meta_description: "DraftB2B：秘密保持契約（NDA）、B2Bサービス契約、プライバシーポリシーを数分でPDF形式で作成・ダウンロードできます。無料、登録不要。",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "追加・任意条項",
    optional_clauses_hint: "含めたい条項を有効にしてください。正しい番号で文書に自動的に追加されます。",
    toggle_noncompete_label: "競業避止",
    toggle_noncompete_desc: "契約期間中、受領当事者が直接競合する事業を行うことを防止します。",
    toggle_nonsolicit_label: "引き抜き禁止",
    toggle_nonsolicit_desc: "相手方の従業員、業務委託先、または顧客を勧誘・雇用することを禁止します。",
    toggle_arbitration_label: "裁判所の代わりに仲裁",
    toggle_arbitration_desc: "通常裁判所に関する標準条項を、拘束力のある商事仲裁に置き換えます。",
    clause_noncompete_title: "競業避止",
    clause_noncompete_body: "本契約の有効期間中及び終了後{duration}の間、{roleB}は、{roleA}の事前の書面による同意なく、第一条に記載された事項と直接競合する事業、プロジェクト、または活動を、開発、運営、投資、または直接的もしくは間接的に関与しないことに同意する。",
    clause_nonsolicit_title: "人材及び顧客の引き抜き禁止",
    clause_nonsolicit_body: "本契約の有効期間中及び終了後{duration}の間、{roleB}は、{roleA}の事前の書面による同意なく、本契約の対象事項に関与した{roleA}の従業員、業務委託先、または顧客を、直接的または間接的に勧誘、雇用、その他採用しないことに同意する。",
    clause_arbitration_title: "紛争解決 - 仲裁",
    clause_arbitration_body: "本文書の解釈または履行から生じるいかなる紛争も、{jurisdiction}を仲裁地とする拘束力のある商事仲裁により最終的に解決されるものとし、両当事者は下される仲裁判断の執行を除き、通常裁判所への提訴を明示的に放棄する。",
    custom_clause_add_btn: "+ カスタム条項を追加",
    custom_clause_title_label: "条項のタイトル",
    custom_clause_title_placeholder: "例：知的財産",
    custom_clause_body_label: "条項の内容",
    custom_clause_body_placeholder: "条項の全文を入力してください...",
    custom_clause_remove_btn: "削除",
    custom_clause_empty_hint: "まだカスタム条項を追加していません。",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "検証ハッシュ",
    doc_timestamp_label: "デジタルタイムスタンプ",
    doc_integrity_hint: "このシールにより、生成後に内容が改ざんされていないことを確認できます。",

    // --- Watermark ---
    watermark_label: "透かし",
    watermark_none: "透かしなし",
    watermark_draft: "ドラフト",
    watermark_confidential: "機密",
    watermark_review: "レビュー用コピー",

    // --- Share pre-filled link ---
    btn_share_link: "相手方と共有",
    share_modal_title: "フォームを共有",
    share_modal_desc: "このリンクを相手方と共有してください。開くとあなたの会社の情報が入力済みの状態で表示され、相手は自分の情報を入力するだけで済みます。",
    share_copy_btn: "リンクをコピー",
    share_copied_msg: "リンクをクリップボードにコピーしました！",
    share_prefill_notice: "相手方の情報を入力しました。受領当事者としてご自身の情報を入力してください。",

    // --- Penalty clause calculator ---
    penalty_calc_title: "違約金計算ツール",
    penalty_calc_desc: "情報またはプロジェクトの価値に基づいて、契約違反時の損害賠償条項の金額と文言を見積もります。これはあくまで目安の提案であり、法的助言ではありません。",
    penalty_value_label: "プロジェクト・情報の推定価値",
    penalty_currency_label: "通貨",
    penalty_calc_btn: "提案を計算",
    penalty_result_intro: "目安の提案：",
    penalty_result_text: "契約違反の場合、約{amount} {currency}（申告額の15%相当）の違約金が提案されます。ただし、その他の立証可能な損害賠償を妨げるものではありません。",
    penalty_insert_btn: "契約書に挿入",
    penalty_inserted_msg: "違約金条項がカスタム条項に追加されました。",
    penalty_clause_title: "契約違反に対する損害賠償",

    // --- Pre-download checklist ---
    checklist_title: "ダウンロード前のクイックチェック",
    checklist_item1: "両当事者の身元を確認しました",
    checklist_item2: "範囲と目的が明確に定義されています",
    checklist_item3: "適用管轄について相互に合意しています",
    checklist_hint: "3つのボックスすべてにチェックを入れるとダウンロードが有効になります。",

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
    benefits_title: "なぜDraftB2Bを使うのか？",
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
    donate_modal_desc: "DraftB2Bは無料で登録も不要です。このツールがお役に立った場合は、運営維持のためにコーヒー一杯分のご支援をご検討ください。",
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
    validation_alert_title: "必須項目が未入力です",
    validation_alert_intro: "以下を入力してください：",
    validation_field_name: "氏名・会社名",
    validation_field_id: "税務ID",
    validation_field_address: "法定住所",
    validation_field_purpose: "目的",
    validation_field_jurisdiction: "管轄",
    validation_field_signature: "署名",
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
    meta_title: "DraftB2B — मुफ़्त B2B अनुबंध और NDA जनरेटर",
    meta_description: "DraftB2B: अपना गोपनीयता समझौता (NDA), B2B सेवा अनुबंध या गोपनीयता नीति मिनटों में PDF प्रारूप में बनाएं और डाउनलोड करें। मुफ़्त, बिना पंजीकरण के।",
    brand_name: "DraftB2B",
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

    // --- Optional / additional clauses ---
    optional_clauses_title: "अतिरिक्त / वैकल्पिक धाराएँ",
    optional_clauses_hint: "जिन धाराओं को आप शामिल करना चाहते हैं उन्हें सक्षम करें। वे सही क्रमांक के साथ स्वतः दस्तावेज़ में जोड़ दी जाएँगी।",
    toggle_noncompete_label: "गैर-प्रतिस्पर्धा",
    toggle_noncompete_desc: "समझौते की अवधि के दौरान प्राप्तकर्ता पक्ष को सीधे प्रतिस्पर्धी व्यवसाय संचालित करने से रोकता है।",
    toggle_nonsolicit_label: "गैर-अनुनयन",
    toggle_nonsolicit_desc: "दूसरे पक्ष के कर्मचारियों, ठेकेदारों या ग्राहकों को लुभाने या नियुक्त करने पर रोक लगाता है।",
    toggle_arbitration_label: "न्यायालयों के बजाय मध्यस्थता",
    toggle_arbitration_desc: "सामान्य न्यायालयों की मानक धारा को बाध्यकारी वाणिज्यिक मध्यस्थता से प्रतिस्थापित करता है।",
    clause_noncompete_title: "गैर-प्रतिस्पर्धा",
    clause_noncompete_body: "इस समझौते की अवधि के दौरान और इसकी समाप्ति के बाद {duration} तक, {roleB} बिना {roleA} की पूर्व लिखित सहमति के, प्रथम धारा में वर्णित विषय से सीधे प्रतिस्पर्धा करने वाले किसी भी व्यवसाय, परियोजना या गतिविधि को विकसित करने, संचालित करने, उसमें निवेश करने या प्रत्यक्ष या अप्रत्यक्ष रूप से भाग लेने से सहमत नहीं होने का वचन देता है।",
    clause_nonsolicit_title: "कर्मचारियों और ग्राहकों के अनुनयन पर रोक",
    clause_nonsolicit_body: "इस समझौते की अवधि के दौरान और इसकी समाप्ति के बाद {duration} तक, {roleB} बिना {roleA} की पूर्व लिखित सहमति के, इस समझौते के विषय से संबंधित {roleA} के कर्मचारियों, ठेकेदारों या ग्राहकों को प्रत्यक्ष या अप्रत्यक्ष रूप से लुभाने, नियुक्त करने या अन्यथा भर्ती करने से सहमत नहीं होने का वचन देता है।",
    clause_arbitration_title: "विवाद समाधान - मध्यस्थता",
    clause_arbitration_body: "इस दस्तावेज़ की व्याख्या या पालन से उत्पन्न कोई भी विवाद {jurisdiction} में स्थित बाध्यकारी वाणिज्यिक मध्यस्थता के माध्यम से अंतिम रूप से हल किया जाएगा, जिसमें पक्षकार स्पष्ट रूप से सामान्य न्यायालयों में जाने का अधिकार त्याग देते हैं, सिवाय जारी मध्यस्थता निर्णय के प्रवर्तन के।",
    custom_clause_add_btn: "+ कस्टम धारा जोड़ें",
    custom_clause_title_label: "धारा का शीर्षक",
    custom_clause_title_placeholder: "उदा.: बौद्धिक संपदा",
    custom_clause_body_label: "धारा की सामग्री",
    custom_clause_body_placeholder: "धारा का पूरा पाठ लिखें...",
    custom_clause_remove_btn: "हटाएँ",
    custom_clause_empty_hint: "आपने अभी तक कोई कस्टम धारा नहीं जोड़ी है।",

    // --- Integrity seal (SHA-256 + QR) ---
    doc_hash_label: "सत्यापन हैश",
    doc_timestamp_label: "डिजिटल टाइमस्टैंप",
    doc_integrity_hint: "यह मुहर यह सत्यापित करने में मदद करती है कि सामग्री बनने के बाद बदली नहीं गई है।",

    // --- Watermark ---
    watermark_label: "वॉटरमार्क",
    watermark_none: "बिना वॉटरमार्क",
    watermark_draft: "मसौदा",
    watermark_confidential: "गोपनीय",
    watermark_review: "समीक्षा प्रति",

    // --- Share pre-filled link ---
    btn_share_link: "प्रतिपक्ष के साथ साझा करें",
    share_modal_title: "फ़ॉर्म साझा करें",
    share_modal_desc: "इस लिंक को दूसरे पक्ष के साथ साझा करें। यह आपकी कंपनी का विवरण पहले से भरा हुआ खुलेगा; उन्हें केवल अपनी जानकारी पूरी करनी होगी।",
    share_copy_btn: "लिंक कॉपी करें",
    share_copied_msg: "लिंक क्लिपबोर्ड पर कॉपी हो गया!",
    share_prefill_notice: "हमने प्रतिपक्ष का विवरण भर दिया है। कृपया प्राप्तकर्ता पक्ष के रूप में अपनी जानकारी पूरी करें।",

    // --- Penalty clause calculator ---
    penalty_calc_title: "दंड धारा कैलकुलेटर",
    penalty_calc_desc: "अपनी जानकारी या परियोजना के मूल्य के आधार पर, अनुबंध उल्लंघन क्षतिपूर्ति धारा हेतु एक राशि और शब्दावली का अनुमान लगाएँ। यह केवल एक संकेतात्मक सुझाव है, कानूनी सलाह नहीं।",
    penalty_value_label: "परियोजना / जानकारी का अनुमानित मूल्य",
    penalty_currency_label: "मुद्रा",
    penalty_calc_btn: "सुझाव की गणना करें",
    penalty_result_intro: "संकेतात्मक सुझाव:",
    penalty_result_text: "उल्लंघन की स्थिति में, लगभग {amount} {currency} (घोषित मूल्य के 15% के बराबर) का दंड सुझाया जाता है, जो अन्य सिद्ध करने योग्य नुकसानों पर प्रतिकूल प्रभाव डाले बिना है।",
    penalty_insert_btn: "अनुबंध में जोड़ें",
    penalty_inserted_msg: "दंड धारा आपकी कस्टम धाराओं में जोड़ दी गई है।",
    penalty_clause_title: "उल्लंघन हेतु क्षतिपूर्ति",

    // --- Pre-download checklist ---
    checklist_title: "डाउनलोड-पूर्व त्वरित जाँच सूची",
    checklist_item1: "मैंने दोनों पक्षों की पहचान सत्यापित कर ली है",
    checklist_item2: "दायरा और उद्देश्य स्पष्ट रूप से परिभाषित हैं",
    checklist_item3: "लागू क्षेत्राधिकार पर आपसी सहमति है",
    checklist_hint: "डाउनलोड सक्षम करने के लिए सभी 3 बॉक्स चेक करें।",

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
    benefits_title: "DraftB2B का उपयोग क्यों करें?",
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
    donate_modal_desc: "DraftB2B मुफ़्त है और इसके लिए किसी पंजीकरण की आवश्यकता नहीं है। यदि यह टूल आपके लिए उपयोगी रहा है, तो इसे बनाए रखने में मदद के लिए हमें एक कॉफ़ी दिलाने पर विचार करें।",
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
    validation_alert_title: "आवश्यक फ़ील्ड अधूरे हैं",
    validation_alert_intro: "कृपया पूरा करें:",
    validation_field_name: "नाम / कंपनी",
    validation_field_id: "कर पहचान",
    validation_field_address: "कानूनी पता",
    validation_field_purpose: "उद्देश्य",
    validation_field_jurisdiction: "क्षेत्राधिकार",
    validation_field_signature: "हस्ताक्षर",
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

// Privacy Policy document type: kept in a separate object (merged into
// I18N right below) instead of inlined into each of the 8 language
// blocks above, so this large content addition stays reviewable as its
// own unit rather than a scattered diff across ~2400 lines.
const PP_I18N = {
  es: {
    tpl_privacy_title: "Política de Privacidad",
    tpl_privacy_desc: "Documento de protección de datos personales para tu web o app.",
    tpl_privacy_short: "Privacidad",
    role_data_controller: "Responsable del Tratamiento",
    role_data_subject: "Titular de los Datos",
    doc_title_privacy_policy: "Política de Privacidad",
    intro_privacy: "La presente Política de Privacidad describe cómo {roleA}, identificado como {nameA}, recopila, utiliza, conserva y protege los datos personales de los usuarios y visitantes, de conformidad con la normativa de protección de datos aplicable.",
    c1_title_pp: "Responsable del Tratamiento",
    c1_body_pp: "El responsable del tratamiento de los datos personales es {roleA}, con identificación {idA} y domicilio en {addrA}. Cualquier consulta relacionada con esta política puede dirigirse a los datos de contacto indicados al final de este documento.",
    c2_title_pp: "Datos Personales que Recopilamos",
    c2_body_pp: "Podemos recopilar datos de identificación y contacto (como nombre, correo electrónico o teléfono), datos de navegación (dirección IP, tipo de dispositivo, páginas visitadas) y cualquier otro dato que el usuario proporcione voluntariamente a través de formularios, cuentas o comunicaciones.",
    c3_title_pp: "Finalidad del Tratamiento",
    c3_body_pp: "Los datos personales se tratan con la siguiente finalidad: {purpose} Además, podrán utilizarse para mejorar el servicio, atender consultas y cumplir obligaciones legales.",
    c4_title_pp: "Base Legal / Legitimación",
    c4_body_pp: "El tratamiento se fundamenta en el consentimiento del titular, la ejecución de una relación contractual o comercial, y el cumplimiento de obligaciones legales aplicables a {roleA}.",
    c5_title_pp: "Plazo de Conservación",
    c5_body_pp: "Los datos personales se conservarán durante {duration}, o durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados, salvo obligación legal de conservarlos por un plazo distinto.",
    c6_title_pp: "Destinatarios y Encargados del Tratamiento",
    c6_body_pp: "Los datos podrán ser comunicados a proveedores de servicios (alojamiento, análisis, pagos) que actúan como encargados del tratamiento bajo instrucciones de {roleA}, así como a autoridades competentes cuando exista una obligación legal de hacerlo.",
    c7_title_pp: "Transferencias Internacionales de Datos",
    c7_body_pp: "En caso de que los datos sean transferidos fuera del país o región de origen del {roleB}, {roleA} adoptará las garantías adecuadas exigidas por la normativa aplicable para asegurar un nivel de protección equivalente.",
    c8_title_pp: "Derechos del Titular de los Datos",
    c8_body_pp: "El {roleB} podrá ejercer, en los términos previstos por la ley, sus derechos de acceso, rectificación, cancelación u oposición, así como, cuando corresponda, portabilidad y limitación del tratamiento, dirigiéndose a {roleA} a través de los datos de contacto indicados.",
    c9_title_pp: "Uso de Cookies y Tecnologías Similares",
    c9_body_pp: "Este sitio o aplicación puede utilizar cookies u otras tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico y personalizar contenido, pudiendo el {roleB} configurar sus preferencias desde su navegador.",
    c10_title_pp: "Legislación Aplicable",
    c10_body_pp: "La presente Política de Privacidad se rige por la legislación de protección de datos vigente en {jurisdiction}, sin perjuicio de otras normas de aplicación obligatoria.",
    c11_title_pp: "Cambios a esta Política y Contacto",
    c11_body_pp: "{roleA} podrá actualizar esta Política de Privacidad para reflejar cambios legales, técnicos u operativos, publicando la versión vigente en este mismo canal. Para consultas sobre el tratamiento de datos, el {roleB} puede contactar directamente con {roleA} a través de los datos indicados en este documento.",
    sign_place_date_pp: "Esta Política de Privacidad entra en vigor en la fecha indicada a continuación:",
    label_object_pp: "Descripción de los datos y finalidad del tratamiento",
    label_duration_pp: "Plazo de conservación de los datos",
    party_a_legend_pp: "Responsable del Tratamiento",
    checklist_item1_pp: "He verificado la identidad y los datos del responsable del tratamiento",
    checklist_item2_pp: "El alcance de los datos recopilados y su finalidad están claramente delimitados",
    checklist_item3_pp: "La legislación de protección de datos aplicable es correcta",
    verify_link_label: "Enlace público de verificación",
    verify_copy_btn: "Copiar enlace",
    verify_link_hint: "Cualquiera con este enlace (o el código QR del documento) puede comprobar que el contenido no ha sido alterado.",
  },
  en: {
    tpl_privacy_title: "Privacy Policy",
    tpl_privacy_desc: "Data protection document for your website or app.",
    tpl_privacy_short: "Privacy",
    role_data_controller: "Data Controller",
    role_data_subject: "Data Subject",
    doc_title_privacy_policy: "Privacy Policy",
    intro_privacy: "This Privacy Policy describes how {roleA}, identified as {nameA}, collects, uses, retains and protects the personal data of users and visitors, in accordance with applicable data protection law.",
    c1_title_pp: "Data Controller",
    c1_body_pp: "The data controller responsible for processing personal data is {roleA}, with identification {idA} and address at {addrA}. Any questions regarding this policy may be directed to the contact details provided at the end of this document.",
    c2_title_pp: "Personal Data We Collect",
    c2_body_pp: "We may collect identification and contact data (such as name, email address or phone number), browsing data (IP address, device type, pages visited) and any other data voluntarily provided by the user through forms, accounts or communications.",
    c3_title_pp: "Purpose of Processing",
    c3_body_pp: "Personal data is processed for the following purpose: {purpose} It may also be used to improve the service, respond to inquiries and comply with legal obligations.",
    c4_title_pp: "Legal Basis",
    c4_body_pp: "Processing is based on the data subject's consent, the performance of a contractual or business relationship, and compliance with legal obligations applicable to {roleA}.",
    c5_title_pp: "Retention Period",
    c5_body_pp: "Personal data will be retained for {duration}, or for as long as strictly necessary to fulfill the purpose for which it was collected, unless a longer retention period is required by law.",
    c6_title_pp: "Recipients and Data Processors",
    c6_body_pp: "Data may be shared with service providers (hosting, analytics, payments) acting as data processors under the instructions of {roleA}, as well as with competent authorities where legally required.",
    c7_title_pp: "International Data Transfers",
    c7_body_pp: "Should data be transferred outside the country or region where the {roleB} is located, {roleA} will implement the appropriate safeguards required by applicable law to ensure an equivalent level of protection.",
    c8_title_pp: "Rights of the Data Subject",
    c8_body_pp: "The {roleB} may exercise, as provided by law, their rights of access, rectification, erasure or objection, as well as, where applicable, data portability and restriction of processing, by contacting {roleA} through the contact details provided.",
    c9_title_pp: "Use of Cookies and Similar Technologies",
    c9_body_pp: "This site or application may use cookies or similar technologies to improve user experience, analyze traffic and personalize content; the {roleB} may configure their preferences from their browser settings.",
    c10_title_pp: "Governing Law",
    c10_body_pp: "This Privacy Policy is governed by the data protection law in force in {jurisdiction}, without prejudice to other mandatory applicable rules.",
    c11_title_pp: "Changes to This Policy and Contact",
    c11_body_pp: "{roleA} may update this Privacy Policy to reflect legal, technical or operational changes, publishing the current version through this same channel. For inquiries about data processing, the {roleB} may contact {roleA} directly using the details provided in this document.",
    sign_place_date_pp: "This Privacy Policy takes effect as of the date indicated below:",
    label_object_pp: "Description of data and purpose of processing",
    label_duration_pp: "Data retention period",
    party_a_legend_pp: "Data Controller",
    checklist_item1_pp: "I have verified the identity and details of the data controller",
    checklist_item2_pp: "The scope of data collected and its purpose are clearly defined",
    checklist_item3_pp: "The applicable data protection law is correct",
    verify_link_label: "Public verification link",
    verify_copy_btn: "Copy link",
    verify_link_hint: "Anyone with this link (or the document's QR code) can check that its content hasn't been altered.",
  },
  pt: {
    tpl_privacy_title: "Política de Privacidade",
    tpl_privacy_desc: "Documento de proteção de dados pessoais para o seu site ou app.",
    tpl_privacy_short: "Privacidade",
    role_data_controller: "Responsável pelo Tratamento",
    role_data_subject: "Titular dos Dados",
    doc_title_privacy_policy: "Política de Privacidade",
    intro_privacy: "Esta Política de Privacidade descreve como {roleA}, identificado como {nameA}, coleta, utiliza, conserva e protege os dados pessoais de usuários e visitantes, em conformidade com a legislação de proteção de dados aplicável.",
    c1_title_pp: "Responsável pelo Tratamento",
    c1_body_pp: "O responsável pelo tratamento dos dados pessoais é {roleA}, com identificação {idA} e domicílio em {addrA}. Qualquer dúvida sobre esta política pode ser direcionada aos dados de contato indicados ao final deste documento.",
    c2_title_pp: "Dados Pessoais que Coletamos",
    c2_body_pp: "Podemos coletar dados de identificação e contato (como nome, e-mail ou telefone), dados de navegação (endereço IP, tipo de dispositivo, páginas visitadas) e quaisquer outros dados fornecidos voluntariamente pelo usuário por meio de formulários, contas ou comunicações.",
    c3_title_pp: "Finalidade do Tratamento",
    c3_body_pp: "Os dados pessoais são tratados com a seguinte finalidade: {purpose} Além disso, poderão ser utilizados para melhorar o serviço, atender solicitações e cumprir obrigações legais.",
    c4_title_pp: "Base Legal",
    c4_body_pp: "O tratamento fundamenta-se no consentimento do titular, na execução de uma relação contratual ou comercial, e no cumprimento de obrigações legais aplicáveis a {roleA}.",
    c5_title_pp: "Prazo de Conservação",
    c5_body_pp: "Os dados pessoais serão conservados durante {duration}, ou pelo tempo estritamente necessário para cumprir a finalidade para a qual foram coletados, salvo obrigação legal de conservação por prazo distinto.",
    c6_title_pp: "Destinatários e Operadores do Tratamento",
    c6_body_pp: "Os dados poderão ser comunicados a prestadores de serviços (hospedagem, análise, pagamentos) que atuam como operadores sob as instruções de {roleA}, bem como a autoridades competentes quando houver obrigação legal.",
    c7_title_pp: "Transferências Internacionais de Dados",
    c7_body_pp: "Caso os dados sejam transferidos para fora do país ou região onde se encontra o {roleB}, {roleA} adotará as garantias adequadas exigidas pela legislação aplicável para assegurar um nível de proteção equivalente.",
    c8_title_pp: "Direitos do Titular dos Dados",
    c8_body_pp: "O {roleB} poderá exercer, nos termos da lei, seus direitos de acesso, retificação, eliminação ou oposição, bem como, quando aplicável, portabilidade e limitação do tratamento, entrando em contato com {roleA} pelos dados indicados.",
    c9_title_pp: "Uso de Cookies e Tecnologias Semelhantes",
    c9_body_pp: "Este site ou aplicativo pode utilizar cookies ou tecnologias semelhantes para melhorar a experiência do usuário, analisar o tráfego e personalizar conteúdo, podendo o {roleB} configurar suas preferências no navegador.",
    c10_title_pp: "Legislação Aplicável",
    c10_body_pp: "Esta Política de Privacidade rege-se pela legislação de proteção de dados vigente em {jurisdiction}, sem prejuízo de outras normas de aplicação obrigatória.",
    c11_title_pp: "Alterações a esta Política e Contato",
    c11_body_pp: "{roleA} poderá atualizar esta Política de Privacidade para refletir mudanças legais, técnicas ou operacionais, publicando a versão vigente neste mesmo canal. Para dúvidas sobre o tratamento de dados, o {roleB} pode contatar diretamente {roleA} pelos dados indicados neste documento.",
    sign_place_date_pp: "Esta Política de Privacidade entra em vigor na data indicada a seguir:",
    label_object_pp: "Descrição dos dados e finalidade do tratamento",
    label_duration_pp: "Prazo de conservação dos dados",
    party_a_legend_pp: "Responsável pelo Tratamento",
    checklist_item1_pp: "Verifiquei a identidade e os dados do responsável pelo tratamento",
    checklist_item2_pp: "O escopo dos dados coletados e sua finalidade estão claramente definidos",
    checklist_item3_pp: "A legislação de proteção de dados aplicável está correta",
    verify_link_label: "Link público de verificação",
    verify_copy_btn: "Copiar link",
    verify_link_hint: "Qualquer pessoa com este link (ou o código QR do documento) pode verificar que o conteúdo não foi alterado.",
  },
  fr: {
    tpl_privacy_title: "Politique de Confidentialité",
    tpl_privacy_desc: "Document de protection des données personnelles pour votre site ou application.",
    tpl_privacy_short: "Confidentialité",
    role_data_controller: "Responsable du Traitement",
    role_data_subject: "Personne Concernée",
    doc_title_privacy_policy: "Politique de Confidentialité",
    intro_privacy: "La présente Politique de Confidentialité décrit comment {roleA}, identifié comme {nameA}, collecte, utilise, conserve et protège les données personnelles des utilisateurs et visiteurs, conformément à la réglementation applicable en matière de protection des données.",
    c1_title_pp: "Responsable du Traitement",
    c1_body_pp: "Le responsable du traitement des données personnelles est {roleA}, identifié sous {idA} et domicilié à {addrA}. Toute question relative à cette politique peut être adressée aux coordonnées indiquées à la fin de ce document.",
    c2_title_pp: "Données Personnelles Collectées",
    c2_body_pp: "Nous pouvons collecter des données d'identification et de contact (nom, e-mail, téléphone), des données de navigation (adresse IP, type d'appareil, pages consultées) ainsi que toute autre donnée fournie volontairement par l'utilisateur via des formulaires, comptes ou communications.",
    c3_title_pp: "Finalité du Traitement",
    c3_body_pp: "Les données personnelles sont traitées aux fins suivantes : {purpose} Elles peuvent également être utilisées pour améliorer le service, répondre aux demandes et respecter les obligations légales.",
    c4_title_pp: "Base Légale",
    c4_body_pp: "Le traitement repose sur le consentement de la personne concernée, l'exécution d'une relation contractuelle ou commerciale, et le respect des obligations légales applicables à {roleA}.",
    c5_title_pp: "Durée de Conservation",
    c5_body_pp: "Les données personnelles seront conservées pendant {duration}, ou pendant la durée strictement nécessaire à la finalité pour laquelle elles ont été collectées, sauf obligation légale de conservation pour une durée différente.",
    c6_title_pp: "Destinataires et Sous-traitants",
    c6_body_pp: "Les données peuvent être communiquées à des prestataires de services (hébergement, analyse, paiements) agissant en tant que sous-traitants sur instruction de {roleA}, ainsi qu'aux autorités compétentes lorsque la loi l'exige.",
    c7_title_pp: "Transferts Internationaux de Données",
    c7_body_pp: "Si les données sont transférées en dehors du pays ou de la région où se trouve la {roleB}, {roleA} mettra en place les garanties appropriées exigées par la réglementation applicable afin d'assurer un niveau de protection équivalent.",
    c8_title_pp: "Droits de la Personne Concernée",
    c8_body_pp: "La {roleB} peut exercer, dans les conditions prévues par la loi, ses droits d'accès, de rectification, d'effacement ou d'opposition, ainsi que, le cas échéant, de portabilité et de limitation du traitement, en contactant {roleA} aux coordonnées indiquées.",
    c9_title_pp: "Utilisation de Cookies et Technologies Similaires",
    c9_body_pp: "Ce site ou cette application peut utiliser des cookies ou technologies similaires afin d'améliorer l'expérience utilisateur, analyser le trafic et personnaliser le contenu ; la {roleB} peut configurer ses préférences depuis son navigateur.",
    c10_title_pp: "Droit Applicable",
    c10_body_pp: "La présente Politique de Confidentialité est régie par la législation de protection des données en vigueur à {jurisdiction}, sans préjudice d'autres normes d'application obligatoire.",
    c11_title_pp: "Modifications de cette Politique et Contact",
    c11_body_pp: "{roleA} peut mettre à jour cette Politique de Confidentialité afin de refléter des changements légaux, techniques ou opérationnels, en publiant la version en vigueur sur ce même canal. Pour toute question relative au traitement des données, la {roleB} peut contacter directement {roleA} aux coordonnées indiquées dans ce document.",
    sign_place_date_pp: "Cette Politique de Confidentialité entre en vigueur à la date indiquée ci-dessous :",
    label_object_pp: "Description des données et finalité du traitement",
    label_duration_pp: "Durée de conservation des données",
    party_a_legend_pp: "Responsable du Traitement",
    checklist_item1_pp: "J'ai vérifié l'identité et les coordonnées du responsable du traitement",
    checklist_item2_pp: "La portée des données collectées et leur finalité sont clairement définies",
    checklist_item3_pp: "La législation de protection des données applicable est correcte",
    verify_link_label: "Lien public de vérification",
    verify_copy_btn: "Copier le lien",
    verify_link_hint: "Toute personne disposant de ce lien (ou du code QR du document) peut vérifier que le contenu n'a pas été modifié.",
  },
  ru: {
    tpl_privacy_title: "Политика конфиденциальности",
    tpl_privacy_desc: "Документ о защите персональных данных для вашего сайта или приложения.",
    tpl_privacy_short: "Конфиденциальность",
    role_data_controller: "Оператор персональных данных",
    role_data_subject: "Субъект персональных данных",
    doc_title_privacy_policy: "Политика конфиденциальности",
    intro_privacy: "Настоящая Политика конфиденциальности описывает, как {roleA}, именуемый {nameA}, собирает, использует, хранит и защищает персональные данные пользователей и посетителей в соответствии с применимым законодательством о защите данных.",
    c1_title_pp: "Оператор персональных данных",
    c1_body_pp: "Оператором обработки персональных данных является {roleA}, с идентификатором {idA} и адресом {addrA}. По любым вопросам, связанным с настоящей политикой, можно обращаться по контактным данным, указанным в конце документа.",
    c2_title_pp: "Персональные данные, которые мы собираем",
    c2_body_pp: "Мы можем собирать идентификационные и контактные данные (имя, электронная почта, телефон), данные о просмотре (IP-адрес, тип устройства, посещённые страницы), а также любые иные данные, добровольно предоставленные пользователем через формы, учётные записи или сообщения.",
    c3_title_pp: "Цель обработки",
    c3_body_pp: "Персональные данные обрабатываются со следующей целью: {purpose} Кроме того, они могут использоваться для улучшения сервиса, ответа на запросы и выполнения юридических обязательств.",
    c4_title_pp: "Правовое основание",
    c4_body_pp: "Обработка данных основывается на согласии субъекта данных, исполнении договорных или коммерческих отношений, а также на выполнении юридических обязательств, применимых к {roleA}.",
    c5_title_pp: "Срок хранения",
    c5_body_pp: "Персональные данные будут храниться в течение {duration} либо в течение времени, строго необходимого для достижения цели их сбора, если иное не предусмотрено законом.",
    c6_title_pp: "Получатели данных и обработчики",
    c6_body_pp: "Данные могут передаваться поставщикам услуг (хостинг, аналитика, платежи), действующим в качестве обработчиков по указанию {roleA}, а также компетентным органам в случаях, предусмотренных законом.",
    c7_title_pp: "Международная передача данных",
    c7_body_pp: "В случае передачи данных за пределы страны или региона, где находится {roleB}, {roleA} примет надлежащие меры защиты, требуемые применимым законодательством, для обеспечения эквивалентного уровня защиты.",
    c8_title_pp: "Права субъекта данных",
    c8_body_pp: "{roleB} вправе в порядке, предусмотренном законом, реализовать свои права на доступ, исправление, удаление или возражение, а также, если применимо, на переносимость и ограничение обработки данных, обратившись к {roleA} по указанным контактным данным.",
    c9_title_pp: "Использование файлов cookie и аналогичных технологий",
    c9_body_pp: "Данный сайт или приложение может использовать файлы cookie или аналогичные технологии для улучшения пользовательского опыта, анализа трафика и персонализации контента; {roleB} может настроить свои предпочтения в настройках браузера.",
    c10_title_pp: "Применимое законодательство",
    c10_body_pp: "Настоящая Политика конфиденциальности регулируется законодательством о защите данных, действующим в {jurisdiction}, без ущерба для иных обязательных норм.",
    c11_title_pp: "Изменения настоящей Политики и контакты",
    c11_body_pp: "{roleA} может обновлять настоящую Политику конфиденциальности с учётом правовых, технических или операционных изменений, публикуя действующую версию по тому же каналу. По вопросам обработки данных {roleB} может напрямую обратиться к {roleA} по контактным данным, указанным в этом документе.",
    sign_place_date_pp: "Настоящая Политика конфиденциальности вступает в силу с даты, указанной ниже:",
    label_object_pp: "Описание данных и цель обработки",
    label_duration_pp: "Срок хранения данных",
    party_a_legend_pp: "Оператор персональных данных",
    checklist_item1_pp: "Я проверил(а) личность и данные оператора обработки данных",
    checklist_item2_pp: "Объём собираемых данных и их цель чётко определены",
    checklist_item3_pp: "Применимое законодательство о защите данных указано верно",
    verify_link_label: "Публичная ссылка для проверки",
    verify_copy_btn: "Скопировать ссылку",
    verify_link_hint: "Любой, у кого есть эта ссылка (или QR-код документа), может проверить, что содержание не было изменено.",
  },
  zh: {
    tpl_privacy_title: "隐私政策",
    tpl_privacy_desc: "适用于您的网站或应用程序的个人数据保护文件。",
    tpl_privacy_short: "隐私政策",
    role_data_controller: "数据控制者",
    role_data_subject: "数据主体",
    doc_title_privacy_policy: "隐私政策",
    intro_privacy: "本隐私政策说明 {roleA}（即 {nameA}）如何根据适用的数据保护法规收集、使用、保留和保护用户及访问者的个人数据。",
    c1_title_pp: "数据控制者",
    c1_body_pp: "负责处理个人数据的数据控制者为 {roleA}，标识号为 {idA}，地址为 {addrA}。与本政策相关的任何疑问，请通过本文件末尾提供的联系方式咨询。",
    c2_title_pp: "我们收集的个人数据",
    c2_body_pp: "我们可能收集身份和联系数据（如姓名、电子邮件或电话）、浏览数据（IP 地址、设备类型、访问的页面），以及用户通过表单、账户或通信自愿提供的其他任何数据。",
    c3_title_pp: "处理目的",
    c3_body_pp: "个人数据的处理目的如下：{purpose} 此外，数据还可能用于改进服务、回应咨询以及履行法律义务。",
    c4_title_pp: "法律依据",
    c4_body_pp: "数据处理的依据包括数据主体的同意、合同或商业关系的履行，以及 {roleA} 应遵守的法律义务。",
    c5_title_pp: "保留期限",
    c5_body_pp: "个人数据将保留 {duration}，或在实现收集目的所严格必需的时间内保留，法律另有规定的除外。",
    c6_title_pp: "数据接收方与处理者",
    c6_body_pp: "数据可能被共享给作为受 {roleA} 指示行事的处理者的服务提供商（托管、分析、支付），以及在法律要求的情况下共享给主管机关。",
    c7_title_pp: "国际数据传输",
    c7_body_pp: "如数据被传输至 {roleB} 所在国家或地区以外，{roleA} 将采取适用法律要求的适当保障措施，以确保同等水平的保护。",
    c8_title_pp: "数据主体的权利",
    c8_body_pp: "{roleB} 可依法行使访问、更正、删除或反对的权利，以及在适用情况下的可携带权和限制处理权，具体方式为通过所提供的联系方式联系 {roleA}。",
    c9_title_pp: "Cookie 及类似技术的使用",
    c9_body_pp: "本网站或应用程序可能使用 Cookie 或类似技术以改善用户体验、分析流量并个性化内容；{roleB} 可通过浏览器设置调整相关偏好。",
    c10_title_pp: "适用法律",
    c10_body_pp: "本隐私政策受 {jurisdiction} 现行数据保护法律管辖，不影响其他强制适用的规定。",
    c11_title_pp: "本政策的变更与联系方式",
    c11_body_pp: "{roleA} 可能因法律、技术或运营方面的变化而更新本隐私政策，并通过同一渠道发布现行版本。如对数据处理有任何疑问，{roleB} 可通过本文件中提供的联系方式直接联系 {roleA}。",
    sign_place_date_pp: "本隐私政策自以下注明日期起生效：",
    label_object_pp: "数据描述及处理目的",
    label_duration_pp: "数据保留期限",
    party_a_legend_pp: "数据控制者",
    checklist_item1_pp: "我已核实数据控制者的身份和信息",
    checklist_item2_pp: "所收集数据的范围及其目的已明确界定",
    checklist_item3_pp: "适用的数据保护法律信息正确",
    verify_link_label: "公开验证链接",
    verify_copy_btn: "复制链接",
    verify_link_hint: "任何拥有此链接（或文档二维码）的人都可以核实内容是否被篡改。",
  },
  ja: {
    tpl_privacy_title: "プライバシーポリシー",
    tpl_privacy_desc: "ウェブサイトやアプリ向けの個人データ保護文書。",
    tpl_privacy_short: "プライバシー",
    role_data_controller: "データ管理者",
    role_data_subject: "データ主体",
    doc_title_privacy_policy: "プライバシーポリシー",
    intro_privacy: "本プライバシーポリシーは、{nameA}として特定される{roleA}が、適用されるデータ保護法令に従い、利用者および訪問者の個人データをどのように収集、利用、保管、保護するかを説明するものです。",
    c1_title_pp: "データ管理者",
    c1_body_pp: "個人データの取り扱いに関するデータ管理者は{roleA}であり、識別番号は{idA}、住所は{addrA}です。本ポリシーに関するお問い合わせは、本書末尾に記載の連絡先までお願いいたします。",
    c2_title_pp: "収集する個人データ",
    c2_body_pp: "氏名、メールアドレス、電話番号などの識別・連絡情報、IPアドレスや端末の種類、閲覧ページなどの閲覧データ、また利用者がフォームやアカウント、通信を通じて任意に提供するその他のデータを収集する場合があります。",
    c3_title_pp: "取り扱いの目的",
    c3_body_pp: "個人データは次の目的で取り扱われます: {purpose} また、サービスの改善、問い合わせへの対応、法的義務の遵守のためにも利用される場合があります。",
    c4_title_pp: "法的根拠",
    c4_body_pp: "データの取り扱いは、データ主体の同意、契約または商取引関係の履行、および{roleA}に適用される法的義務の遵守に基づいています。",
    c5_title_pp: "保管期間",
    c5_body_pp: "個人データは{duration}の間、または収集目的の達成に厳密に必要な期間、保管されます。ただし、法令により異なる期間の保管が求められる場合はこの限りではありません。",
    c6_title_pp: "データの提供先および委託先",
    c6_body_pp: "データは、{roleA}の指示のもとで委託先として行動するサービス提供者(ホスティング、分析、決済など)、および法令上必要な場合には所管当局に提供されることがあります。",
    c7_title_pp: "国際的なデータ移転",
    c7_body_pp: "{roleB}が所在する国または地域の外にデータが移転される場合、{roleA}は同等水準の保護を確保するため、適用法令が求める適切な保護措置を講じます。",
    c8_title_pp: "データ主体の権利",
    c8_body_pp: "{roleB}は、法令の定めるところにより、アクセス権、訂正権、消去権、異議申立権、また該当する場合はデータポータビリティの権利および取り扱いの制限を求める権利を、記載の連絡先を通じて{roleA}に対して行使することができます。",
    c9_title_pp: "Cookieおよび類似技術の利用",
    c9_body_pp: "本サイトまたはアプリは、利用体験の向上、アクセス解析、コンテンツの最適化のためにCookieや類似の技術を使用する場合があり、{roleB}はブラウザの設定から選択を変更することができます。",
    c10_title_pp: "準拠法",
    c10_body_pp: "本プライバシーポリシーは、{jurisdiction}で施行されているデータ保護法令に準拠しますが、その他の強行法規の適用を妨げるものではありません。",
    c11_title_pp: "本ポリシーの変更およびお問い合わせ",
    c11_body_pp: "{roleA}は、法的、技術的または運用上の変更を反映するため、本プライバシーポリシーを更新することがあり、最新版は同じ手段で公開されます。データの取り扱いに関するお問い合わせは、{roleB}が本書に記載の連絡先を通じて{roleA}に直接ご連絡いただけます。",
    sign_place_date_pp: "本プライバシーポリシーは、以下に示す日付より効力を生じます:",
    label_object_pp: "データの内容および取り扱いの目的",
    label_duration_pp: "データの保管期間",
    party_a_legend_pp: "データ管理者",
    checklist_item1_pp: "データ管理者の身元と情報を確認しました",
    checklist_item2_pp: "収集するデータの範囲とその目的が明確に定義されています",
    checklist_item3_pp: "適用されるデータ保護法令の記載が正しいことを確認しました",
    verify_link_label: "公開検証リンク",
    verify_copy_btn: "リンクをコピー",
    verify_link_hint: "このリンク(または文書のQRコード)を持つ人は誰でも、内容が改ざんされていないことを確認できます。",
  },
  hi: {
    tpl_privacy_title: "गोपनीयता नीति",
    tpl_privacy_desc: "आपकी वेबसाइट या ऐप के लिए डेटा सुरक्षा दस्तावेज़।",
    tpl_privacy_short: "गोपनीयता",
    role_data_controller: "डेटा नियंत्रक",
    role_data_subject: "डेटा विषय",
    doc_title_privacy_policy: "गोपनीयता नीति",
    intro_privacy: "यह गोपनीयता नीति बताती है कि {nameA} के रूप में पहचाना गया {roleA}, लागू डेटा सुरक्षा कानून के अनुसार उपयोगकर्ताओं और आगंतुकों के व्यक्तिगत डेटा को कैसे एकत्र, उपयोग, संरक्षित और सुरक्षित करता है।",
    c1_title_pp: "डेटा नियंत्रक",
    c1_body_pp: "व्यक्तिगत डेटा के प्रसंस्करण के लिए उत्तरदायी डेटा नियंत्रक {roleA} है, जिसकी पहचान संख्या {idA} और पता {addrA} है। इस नीति से संबंधित किसी भी प्रश्न के लिए इस दस्तावेज़ के अंत में दिए गए संपर्क विवरण पर संपर्क किया जा सकता है।",
    c2_title_pp: "हम जो व्यक्तिगत डेटा एकत्र करते हैं",
    c2_body_pp: "हम पहचान और संपर्क डेटा (जैसे नाम, ईमेल या फोन नंबर), ब्राउज़िंग डेटा (आईपी पता, डिवाइस का प्रकार, देखे गए पृष्ठ), और उपयोगकर्ता द्वारा फ़ॉर्म, खातों या संचार के माध्यम से स्वेच्छा से प्रदान किया गया कोई भी अन्य डेटा एकत्र कर सकते हैं।",
    c3_title_pp: "प्रसंस्करण का उद्देश्य",
    c3_body_pp: "व्यक्तिगत डेटा का प्रसंस्करण निम्नलिखित उद्देश्य के लिए किया जाता है: {purpose} इसके अतिरिक्त, इसका उपयोग सेवा में सुधार, प्रश्नों का उत्तर देने और कानूनी दायित्वों के पालन के लिए भी किया जा सकता है।",
    c4_title_pp: "कानूनी आधार",
    c4_body_pp: "प्रसंस्करण डेटा विषय की सहमति, संविदात्मक या व्यावसायिक संबंध के निष्पादन, और {roleA} पर लागू कानूनी दायित्वों के अनुपालन पर आधारित है।",
    c5_title_pp: "प्रतिधारण अवधि",
    c5_body_pp: "व्यक्तिगत डेटा को {duration} तक, या जिस उद्देश्य के लिए इसे एकत्र किया गया था उसे पूरा करने हेतु आवश्यक न्यूनतम समय तक संरक्षित रखा जाएगा, जब तक कि कानून द्वारा किसी भिन्न अवधि की आवश्यकता न हो।",
    c6_title_pp: "प्राप्तकर्ता और डेटा प्रोसेसर",
    c6_body_pp: "डेटा को {roleA} के निर्देशों के तहत डेटा प्रोसेसर के रूप में कार्य करने वाले सेवा प्रदाताओं (होस्टिंग, विश्लेषण, भुगतान) के साथ, तथा कानूनी रूप से आवश्यक होने पर सक्षम प्राधिकारियों के साथ साझा किया जा सकता है।",
    c7_title_pp: "अंतर्राष्ट्रीय डेटा स्थानांतरण",
    c7_body_pp: "यदि डेटा को {roleB} के देश या क्षेत्र से बाहर स्थानांतरित किया जाता है, तो {roleA} समान स्तर की सुरक्षा सुनिश्चित करने के लिए लागू कानून द्वारा आवश्यक उचित सुरक्षा उपाय अपनाएगा।",
    c8_title_pp: "डेटा विषय के अधिकार",
    c8_body_pp: "{roleB} कानून द्वारा निर्धारित शर्तों के अनुसार, पहुंच, सुधार, विलोपन या आपत्ति के अपने अधिकारों का, और जहां लागू हो, डेटा पोर्टेबिलिटी तथा प्रसंस्करण की सीमा के अधिकारों का प्रयोग, दिए गए संपर्क विवरण के माध्यम से {roleA} से संपर्क करके कर सकता है।",
    c9_title_pp: "कुकीज़ और समान तकनीकों का उपयोग",
    c9_body_pp: "यह साइट या एप्लिकेशन उपयोगकर्ता अनुभव को बेहतर बनाने, ट्रैफ़िक का विश्लेषण करने और सामग्री को वैयक्तिकृत करने के लिए कुकीज़ या समान तकनीकों का उपयोग कर सकता है; {roleB} अपने ब्राउज़र सेटिंग्स से अपनी प्राथमिकताएँ कॉन्फ़िगर कर सकता है।",
    c10_title_pp: "लागू कानून",
    c10_body_pp: "यह गोपनीयता नीति {jurisdiction} में लागू डेटा सुरक्षा कानून द्वारा शासित होती है, अन्य अनिवार्य रूप से लागू होने वाले नियमों पर प्रतिकूल प्रभाव डाले बिना।",
    c11_title_pp: "इस नीति में परिवर्तन और संपर्क",
    c11_body_pp: "{roleA} कानूनी, तकनीकी या परिचालन परिवर्तनों को प्रतिबिंबित करने के लिए इस गोपनीयता नीति को अद्यतन कर सकता है, तथा वर्तमान संस्करण इसी माध्यम से प्रकाशित करेगा। डेटा प्रसंस्करण से संबंधित प्रश्नों के लिए, {roleB} इस दस्तावेज़ में दिए गए विवरण के माध्यम से सीधे {roleA} से संपर्क कर सकता है।",
    sign_place_date_pp: "यह गोपनीयता नीति नीचे दी गई तिथि से प्रभावी होती है:",
    label_object_pp: "डेटा का विवरण और प्रसंस्करण का उद्देश्य",
    label_duration_pp: "डेटा प्रतिधारण अवधि",
    party_a_legend_pp: "डेटा नियंत्रक",
    checklist_item1_pp: "मैंने डेटा नियंत्रक की पहचान और विवरण सत्यापित कर लिए हैं",
    checklist_item2_pp: "एकत्र किए गए डेटा का दायरा और उसका उद्देश्य स्पष्ट रूप से परिभाषित है",
    checklist_item3_pp: "लागू डेटा सुरक्षा कानून सही है",
    verify_link_label: "सार्वजनिक सत्यापन लिंक",
    verify_copy_btn: "लिंक कॉपी करें",
    verify_link_hint: "इस लिंक (या दस्तावेज़ के क्यूआर कोड) वाला कोई भी व्यक्ति यह जांच सकता है कि सामग्री में कोई बदलाव नहीं किया गया है।",
  },
};
Object.keys(PP_I18N).forEach(lang => Object.assign(I18N[lang], PP_I18N[lang]));

// Native print, the .ics expiration reminder, the legal glossary, and
// the post-download email-capture banner: same merge-after-the-fact
// pattern as PP_I18N above, kept as its own reviewable block instead of
// inlined into each of the 8 language sections.
const V2_I18N = {
  es: {
    nav_glossary: "Glosario",
    btn_print: "Imprimir",
    btn_ics: "Recordatorio de vencimiento",
    ics_no_duration: "Este documento tiene una duración indefinida; no se puede generar un recordatorio de vencimiento.",
    ics_event_title: "Vencimiento: {ref}",
    ics_event_desc: "Recordatorio automático generado por DraftB2B para el documento {ref}. Revisa si es necesario renovar, actualizar o dar por finalizado el acuerdo.",
    ics_downloaded_msg: "Recordatorio (.ics) descargado",
    glossary_title: "Glosario Legal",
    glossary_subtitle: "Términos legales explicados en lenguaje sencillo.",
    glossary_search_placeholder: "Buscar un término...",
    glossary_empty: "No se encontraron términos que coincidan con tu búsqueda.",
    glossary_term_nda: "NDA (Acuerdo de Confidencialidad)",
    glossary_def_nda: "Contrato mediante el cual una o ambas partes se comprometen a no divulgar la información confidencial que se comparta entre ellas. También llamado acuerdo de confidencialidad.",
    glossary_term_noncompete: "Cláusula de No Competencia",
    glossary_def_noncompete: "Disposición que impide a una de las partes desarrollar negocios directamente competidores con la otra durante un período determinado, normalmente mientras esté vigente el acuerdo.",
    glossary_term_nonsolicit: "Cláusula de No Captación (No Solicitation)",
    glossary_def_nonsolicit: "Prohíbe a una parte contratar o intentar contratar a empleados, contratistas o clientes de la otra parte mientras el acuerdo esté vigente.",
    glossary_term_arbitration: "Arbitraje Comercial",
    glossary_def_arbitration: "Mecanismo de resolución de disputas fuera de los tribunales ordinarios, en el que un tercero neutral (árbitro) emite una decisión vinculante para ambas partes.",
    glossary_term_penalty: "Cláusula Penal",
    glossary_def_penalty: "Estipulación que fija por adelantado el monto de la indemnización que deberá pagar la parte que incumpla el contrato, evitando así tener que probar el daño exacto sufrido.",
    glossary_term_controller: "Responsable del Tratamiento",
    glossary_def_controller: "Persona física o jurídica que decide con qué finalidad y de qué manera se tratan los datos personales. Es quien asume las obligaciones legales frente a los titulares de los datos.",
    glossary_term_subject: "Titular de los Datos",
    glossary_def_subject: "La persona física a la que pertenecen los datos personales que se recopilan o tratan, y que puede ejercer derechos de acceso, rectificación, cancelación u oposición sobre ellos.",
    glossary_term_legalbasis: "Base Legal / Legitimación",
    glossary_def_legalbasis: "El fundamento jurídico que permite tratar datos personales de forma lícita: puede ser el consentimiento del titular, la ejecución de un contrato, o el cumplimiento de una obligación legal, entre otros.",
    glossary_term_transfer: "Transferencia Internacional de Datos",
    glossary_def_transfer: "El envío de datos personales a un país o región distinto de donde reside el titular, que suele requerir garantías adicionales para asegurar un nivel de protección equivalente.",
    glossary_term_esignature: "Firma Electrónica",
    glossary_def_esignature: "Conjunto de datos en formato electrónico que se utilizan para identificar al firmante de un documento y manifestar su conformidad con el contenido, con distintos niveles de validez legal según la jurisdicción.",
    email_capture_title: "¿Quieres enterarte de nuevas plantillas?",
    email_capture_desc: "Déjanos tu correo y te avisaremos cuando lancemos nuevas plantillas y funciones. Sin spam.",
    email_capture_placeholder: "tu@correo.com",
    email_capture_btn: "Avisarme",
    email_capture_error: "Ingresa un correo electrónico válido.",
    email_capture_thanks: "¡Gracias! Te avisaremos de las novedades.",
  },
  en: {
    nav_glossary: "Glossary",
    btn_print: "Print",
    btn_ics: "Expiration reminder",
    ics_no_duration: "This document has an indefinite duration; an expiration reminder can't be generated.",
    ics_event_title: "Expiration: {ref}",
    ics_event_desc: "Automatic reminder generated by DraftB2B for document {ref}. Check whether the agreement needs to be renewed, updated, or terminated.",
    ics_downloaded_msg: "Reminder (.ics) downloaded",
    glossary_title: "Legal Glossary",
    glossary_subtitle: "Legal terms explained in plain language.",
    glossary_search_placeholder: "Search a term...",
    glossary_empty: "No terms match your search.",
    glossary_term_nda: "NDA (Non-Disclosure Agreement)",
    glossary_def_nda: "A contract in which one or both parties agree not to disclose confidential information shared between them. Also called a confidentiality agreement.",
    glossary_term_noncompete: "Non-Compete Clause",
    glossary_def_noncompete: "A provision preventing one party from running a directly competing business for a set period, usually while the agreement is in effect.",
    glossary_term_nonsolicit: "Non-Solicitation Clause",
    glossary_def_nonsolicit: "Prohibits one party from hiring or attempting to hire the other party's employees, contractors, or clients while the agreement is in effect.",
    glossary_term_arbitration: "Commercial Arbitration",
    glossary_def_arbitration: "A dispute-resolution method outside ordinary courts, where a neutral third party (arbitrator) issues a decision binding on both parties.",
    glossary_term_penalty: "Penalty Clause",
    glossary_def_penalty: "A stipulation that fixes in advance the amount of compensation owed by the breaching party, avoiding the need to prove the exact damage suffered.",
    glossary_term_controller: "Data Controller",
    glossary_def_controller: "The individual or entity that decides the purpose and means of processing personal data, and bears the legal obligations toward data subjects.",
    glossary_term_subject: "Data Subject",
    glossary_def_subject: "The individual to whom the personal data being collected or processed belongs, who may exercise rights of access, rectification, erasure, or objection over it.",
    glossary_term_legalbasis: "Legal Basis",
    glossary_def_legalbasis: "The legal ground that makes processing personal data lawful: it can be the subject's consent, the performance of a contract, or compliance with a legal obligation, among others.",
    glossary_term_transfer: "International Data Transfer",
    glossary_def_transfer: "Sending personal data to a country or region other than where the data subject resides, which usually requires additional safeguards to ensure an equivalent level of protection.",
    glossary_term_esignature: "Electronic Signature",
    glossary_def_esignature: "A set of electronic data used to identify a document's signer and show their agreement with its content, with varying levels of legal validity depending on the jurisdiction.",
    email_capture_title: "Want to hear about new templates?",
    email_capture_desc: "Leave your email and we'll let you know when we launch new templates and features. No spam.",
    email_capture_placeholder: "you@email.com",
    email_capture_btn: "Notify me",
    email_capture_error: "Enter a valid email address.",
    email_capture_thanks: "Thanks! We'll let you know about updates.",
  },
  pt: {
    nav_glossary: "Glossário",
    btn_print: "Imprimir",
    btn_ics: "Lembrete de vencimento",
    ics_no_duration: "Este documento tem duração indefinida; não é possível gerar um lembrete de vencimento.",
    ics_event_title: "Vencimento: {ref}",
    ics_event_desc: "Lembrete automático gerado pelo DraftB2B para o documento {ref}. Verifique se é necessário renovar, atualizar ou encerrar o acordo.",
    ics_downloaded_msg: "Lembrete (.ics) baixado",
    glossary_title: "Glossário Legal",
    glossary_subtitle: "Termos legais explicados em linguagem simples.",
    glossary_search_placeholder: "Buscar um termo...",
    glossary_empty: "Nenhum termo encontrado para sua busca.",
    glossary_term_nda: "NDA (Acordo de Confidencialidade)",
    glossary_def_nda: "Contrato pelo qual uma ou ambas as partes se comprometem a não divulgar as informações confidenciais compartilhadas entre elas. Também chamado de acordo de confidencialidade.",
    glossary_term_noncompete: "Cláusula de Não Concorrência",
    glossary_def_noncompete: "Disposição que impede uma das partes de desenvolver negócios diretamente concorrentes durante um período determinado, geralmente enquanto o acordo estiver vigente.",
    glossary_term_nonsolicit: "Cláusula de Não Aliciamento",
    glossary_def_nonsolicit: "Proíbe uma parte de contratar ou tentar contratar funcionários, contratados ou clientes da outra parte enquanto o acordo estiver vigente.",
    glossary_term_arbitration: "Arbitragem Comercial",
    glossary_def_arbitration: "Mecanismo de resolução de disputas fora dos tribunais ordinários, no qual um terceiro neutro (árbitro) emite uma decisão vinculante para ambas as partes.",
    glossary_term_penalty: "Cláusula Penal",
    glossary_def_penalty: "Estipulação que fixa antecipadamente o valor da indenização devida pela parte que descumprir o contrato, evitando a necessidade de provar o dano exato sofrido.",
    glossary_term_controller: "Responsável pelo Tratamento",
    glossary_def_controller: "Pessoa física ou jurídica que decide a finalidade e a forma como os dados pessoais são tratados, assumindo as obrigações legais perante os titulares dos dados.",
    glossary_term_subject: "Titular dos Dados",
    glossary_def_subject: "A pessoa física à qual pertencem os dados pessoais coletados ou tratados, podendo exercer direitos de acesso, retificação, eliminação ou oposição sobre eles.",
    glossary_term_legalbasis: "Base Legal",
    glossary_def_legalbasis: "O fundamento jurídico que permite tratar dados pessoais de forma lícita: pode ser o consentimento do titular, a execução de um contrato ou o cumprimento de uma obrigação legal, entre outros.",
    glossary_term_transfer: "Transferência Internacional de Dados",
    glossary_def_transfer: "O envio de dados pessoais para um país ou região diferente daquele em que o titular reside, o que geralmente exige garantias adicionais para assegurar um nível de proteção equivalente.",
    glossary_term_esignature: "Assinatura Eletrônica",
    glossary_def_esignature: "Conjunto de dados eletrônicos utilizados para identificar o signatário de um documento e manifestar sua concordância com o conteúdo, com diferentes níveis de validade legal conforme a jurisdição.",
    email_capture_title: "Quer saber sobre novos modelos?",
    email_capture_desc: "Deixe seu e-mail e avisaremos quando lançarmos novos modelos e funcionalidades. Sem spam.",
    email_capture_placeholder: "voce@email.com",
    email_capture_btn: "Avisar-me",
    email_capture_error: "Digite um e-mail válido.",
    email_capture_thanks: "Obrigado! Vamos avisá-lo sobre novidades.",
  },
  fr: {
    nav_glossary: "Glossaire",
    btn_print: "Imprimer",
    btn_ics: "Rappel d'échéance",
    ics_no_duration: "Ce document a une durée indéterminée ; un rappel d'échéance ne peut pas être généré.",
    ics_event_title: "Échéance : {ref}",
    ics_event_desc: "Rappel automatique généré par DraftB2B pour le document {ref}. Vérifiez s'il est nécessaire de renouveler, mettre à jour ou résilier l'accord.",
    ics_downloaded_msg: "Rappel (.ics) téléchargé",
    glossary_title: "Glossaire Juridique",
    glossary_subtitle: "Termes juridiques expliqués simplement.",
    glossary_search_placeholder: "Rechercher un terme...",
    glossary_empty: "Aucun terme ne correspond à votre recherche.",
    glossary_term_nda: "NDA (Accord de Confidentialité)",
    glossary_def_nda: "Contrat par lequel une ou les deux parties s'engagent à ne pas divulguer les informations confidentielles échangées entre elles. Également appelé accord de non-divulgation.",
    glossary_term_noncompete: "Clause de Non-Concurrence",
    glossary_def_noncompete: "Disposition empêchant une partie d'exercer une activité directement concurrente pendant une période déterminée, généralement tant que l'accord est en vigueur.",
    glossary_term_nonsolicit: "Clause de Non-Sollicitation",
    glossary_def_nonsolicit: "Interdit à une partie d'embaucher ou de tenter d'embaucher les employés, prestataires ou clients de l'autre partie tant que l'accord est en vigueur.",
    glossary_term_arbitration: "Arbitrage Commercial",
    glossary_def_arbitration: "Mode de règlement des litiges en dehors des tribunaux ordinaires, dans lequel un tiers neutre (arbitre) rend une décision contraignante pour les deux parties.",
    glossary_term_penalty: "Clause Pénale",
    glossary_def_penalty: "Stipulation fixant à l'avance le montant de l'indemnisation due par la partie défaillante, évitant ainsi d'avoir à prouver le préjudice exact subi.",
    glossary_term_controller: "Responsable du Traitement",
    glossary_def_controller: "Personne physique ou morale qui détermine la finalité et les moyens du traitement des données personnelles, et qui assume les obligations légales envers les personnes concernées.",
    glossary_term_subject: "Personne Concernée",
    glossary_def_subject: "La personne physique à laquelle appartiennent les données personnelles collectées ou traitées, et qui peut exercer des droits d'accès, de rectification, d'effacement ou d'opposition sur celles-ci.",
    glossary_term_legalbasis: "Base Légale",
    glossary_def_legalbasis: "Le fondement juridique qui rend licite le traitement de données personnelles : il peut s'agir du consentement de la personne concernée, de l'exécution d'un contrat ou du respect d'une obligation légale, entre autres.",
    glossary_term_transfer: "Transfert International de Données",
    glossary_def_transfer: "L'envoi de données personnelles vers un pays ou une région autre que celui où réside la personne concernée, ce qui nécessite généralement des garanties supplémentaires pour assurer un niveau de protection équivalent.",
    glossary_term_esignature: "Signature Électronique",
    glossary_def_esignature: "Ensemble de données électroniques utilisées pour identifier le signataire d'un document et manifester son accord avec le contenu, avec différents niveaux de validité juridique selon la juridiction.",
    email_capture_title: "Envie d'être informé des nouveaux modèles ?",
    email_capture_desc: "Laissez votre e-mail et nous vous informerons du lancement de nouveaux modèles et fonctionnalités. Sans spam.",
    email_capture_placeholder: "vous@email.com",
    email_capture_btn: "M'avertir",
    email_capture_error: "Saisissez une adresse e-mail valide.",
    email_capture_thanks: "Merci ! Nous vous tiendrons informé des nouveautés.",
  },
  ru: {
    nav_glossary: "Глоссарий",
    btn_print: "Печать",
    btn_ics: "Напоминание об истечении срока",
    ics_no_duration: "Этот документ имеет бессрочный срок действия; напоминание об истечении срока не может быть создано.",
    ics_event_title: "Истечение срока: {ref}",
    ics_event_desc: "Автоматическое напоминание, созданное DraftB2B для документа {ref}. Проверьте, нужно ли продлить, обновить или прекратить действие соглашения.",
    ics_downloaded_msg: "Напоминание (.ics) скачано",
    glossary_title: "Юридический глоссарий",
    glossary_subtitle: "Юридические термины простым языком.",
    glossary_search_placeholder: "Поиск термина...",
    glossary_empty: "По вашему запросу ничего не найдено.",
    glossary_term_nda: "NDA (Соглашение о неразглашении)",
    glossary_def_nda: "Договор, по которому одна или обе стороны обязуются не разглашать конфиденциальную информацию, которой они обмениваются. Также называется соглашением о конфиденциальности.",
    glossary_term_noncompete: "Условие о неконкуренции",
    glossary_def_noncompete: "Положение, запрещающее одной из сторон вести напрямую конкурирующую деятельность в течение определённого периода, как правило, пока действует соглашение.",
    glossary_term_nonsolicit: "Условие о непереманивании",
    glossary_def_nonsolicit: "Запрещает одной стороне нанимать или пытаться нанять сотрудников, подрядчиков или клиентов другой стороны, пока соглашение действует.",
    glossary_term_arbitration: "Коммерческий арбитраж",
    glossary_def_arbitration: "Способ разрешения споров вне обычных судов, при котором нейтральная третья сторона (арбитр) выносит решение, обязательное для обеих сторон.",
    glossary_term_penalty: "Штрафная неустойка",
    glossary_def_penalty: "Условие, заранее устанавливающее размер компенсации, которую должна выплатить нарушившая сторона, что избавляет от необходимости доказывать точный размер ущерба.",
    glossary_term_controller: "Оператор персональных данных",
    glossary_def_controller: "Физическое или юридическое лицо, определяющее цель и способы обработки персональных данных и несущее юридические обязательства перед субъектами данных.",
    glossary_term_subject: "Субъект персональных данных",
    glossary_def_subject: "Физическое лицо, которому принадлежат собираемые или обрабатываемые персональные данные и которое может реализовать права на доступ, исправление, удаление или возражение в отношении них.",
    glossary_term_legalbasis: "Правовое основание",
    glossary_def_legalbasis: "Юридическое основание, делающее обработку персональных данных законной: согласие субъекта, исполнение договора или выполнение юридического обязательства, среди прочего.",
    glossary_term_transfer: "Международная передача данных",
    glossary_def_transfer: "Передача персональных данных в страну или регион, отличные от места проживания субъекта данных, что обычно требует дополнительных гарантий для обеспечения эквивалентного уровня защиты.",
    glossary_term_esignature: "Электронная подпись",
    glossary_def_esignature: "Набор электронных данных, используемых для идентификации лица, подписывающего документ, и подтверждения его согласия с содержанием, с разным уровнем юридической силы в зависимости от юрисдикции.",
    email_capture_title: "Хотите узнавать о новых шаблонах?",
    email_capture_desc: "Оставьте свою почту, и мы сообщим вам о новых шаблонах и функциях. Без спама.",
    email_capture_placeholder: "you@email.com",
    email_capture_btn: "Уведомить меня",
    email_capture_error: "Введите корректный адрес электронной почты.",
    email_capture_thanks: "Спасибо! Мы сообщим вам о новостях.",
  },
  zh: {
    nav_glossary: "术语表",
    btn_print: "打印",
    btn_ics: "到期提醒",
    ics_no_duration: "该文档为无限期，无法生成到期提醒。",
    ics_event_title: "到期提醒：{ref}",
    ics_event_desc: "由 DraftB2B 为文档 {ref} 自动生成的提醒。请检查是否需要续签、更新或终止该协议。",
    ics_downloaded_msg: "提醒文件（.ics）已下载",
    glossary_title: "法律术语表",
    glossary_subtitle: "用通俗语言解释的法律术语。",
    glossary_search_placeholder: "搜索术语...",
    glossary_empty: "未找到匹配的术语。",
    glossary_term_nda: "NDA（保密协议）",
    glossary_def_nda: "一方或双方承诺不披露彼此共享的机密信息的合同，也称为保密协议。",
    glossary_term_noncompete: "竞业禁止条款",
    glossary_def_noncompete: "在约定期限内（通常是协议有效期内）禁止一方从事与另一方直接竞争的业务的条款。",
    glossary_term_nonsolicit: "禁止招揽条款",
    glossary_def_nonsolicit: "在协议有效期内，禁止一方聘用或试图聘用另一方的员工、承包商或客户。",
    glossary_term_arbitration: "商事仲裁",
    glossary_def_arbitration: "在普通法院之外解决争议的机制，由中立的第三方（仲裁员）作出对双方均有约束力的裁决。",
    glossary_term_penalty: "违约金条款",
    glossary_def_penalty: "预先约定违约方应支付的赔偿金额的条款，从而避免需要证明具体损失。",
    glossary_term_controller: "数据控制者",
    glossary_def_controller: "决定个人数据处理目的和方式的自然人或法人，对数据主体承担相应的法律义务。",
    glossary_term_subject: "数据主体",
    glossary_def_subject: "被收集或处理的个人数据所属的自然人，可对其数据行使访问、更正、删除或反对等权利。",
    glossary_term_legalbasis: "法律依据",
    glossary_def_legalbasis: "使个人数据处理合法化的法律基础，可以是数据主体的同意、合同的履行或法律义务的履行等。",
    glossary_term_transfer: "国际数据传输",
    glossary_def_transfer: "将个人数据发送到数据主体所在国家或地区以外的地方，通常需要额外的保障措施以确保同等水平的保护。",
    glossary_term_esignature: "电子签名",
    glossary_def_esignature: "用于识别文件签署人身份并表明其对内容认可的一组电子数据，其法律效力因司法管辖区而异。",
    email_capture_title: "想了解新模板吗？",
    email_capture_desc: "留下您的邮箱，我们会在推出新模板和新功能时通知您。绝不发送垃圾邮件。",
    email_capture_placeholder: "you@email.com",
    email_capture_btn: "通知我",
    email_capture_error: "请输入有效的电子邮箱地址。",
    email_capture_thanks: "谢谢！我们会通知您最新动态。",
  },
  ja: {
    nav_glossary: "用語集",
    btn_print: "印刷",
    btn_ics: "期限リマインダー",
    ics_no_duration: "この文書は無期限のため、期限リマインダーを作成できません。",
    ics_event_title: "期限：{ref}",
    ics_event_desc: "DraftB2Bが文書{ref}のために自動生成したリマインダーです。契約の更新・変更・終了が必要かご確認ください。",
    ics_downloaded_msg: "リマインダー（.ics）をダウンロードしました",
    glossary_title: "法律用語集",
    glossary_subtitle: "法律用語をわかりやすく解説します。",
    glossary_search_placeholder: "用語を検索...",
    glossary_empty: "該当する用語が見つかりませんでした。",
    glossary_term_nda: "NDA（秘密保持契約）",
    glossary_def_nda: "一方または双方が、互いに共有した機密情報を第三者に開示しないことを約束する契約。守秘義務契約とも呼ばれます。",
    glossary_term_noncompete: "競業避止条項",
    glossary_def_noncompete: "一定期間（通常は契約の有効期間中）、一方が直接競合する事業を行うことを禁止する条項。",
    glossary_term_nonsolicit: "引き抜き禁止条項",
    glossary_def_nonsolicit: "契約が有効な間、一方が相手方の従業員、業務委託先、顧客を雇用または勧誘することを禁止する条項。",
    glossary_term_arbitration: "商事仲裁",
    glossary_def_arbitration: "通常の裁判所によらず、中立な第三者（仲裁人）が双方を拘束する判断を下す紛争解決手段。",
    glossary_term_penalty: "違約金条項",
    glossary_def_penalty: "契約違反時に支払うべき賠償額をあらかじめ定めておく条項で、実際の損害額を証明する必要がなくなります。",
    glossary_term_controller: "データ管理者",
    glossary_def_controller: "個人データの取り扱いの目的と方法を決定する個人または法人であり、データ主体に対して法的義務を負います。",
    glossary_term_subject: "データ主体",
    glossary_def_subject: "収集または処理される個人データの本人であり、アクセス権、訂正権、消去権、異議申立権などを行使できます。",
    glossary_term_legalbasis: "法的根拠",
    glossary_def_legalbasis: "個人データの取り扱いを適法にする法的基盤で、本人の同意、契約の履行、法的義務の遵守などが該当します。",
    glossary_term_transfer: "国際データ移転",
    glossary_def_transfer: "データ主体が居住する国・地域以外へ個人データを送ることで、同等水準の保護を確保するための追加的な保護措置が必要となる場合があります。",
    glossary_term_esignature: "電子署名",
    glossary_def_esignature: "文書の署名者を識別し、その内容への同意を示すために用いられる電子データの集合で、法域によって法的効力の水準が異なります。",
    email_capture_title: "新しいテンプレートの情報を受け取りますか？",
    email_capture_desc: "メールアドレスをご登録いただくと、新しいテンプレートや機能をリリースした際にお知らせします。迷惑メールは送りません。",
    email_capture_placeholder: "you@email.com",
    email_capture_btn: "通知を受け取る",
    email_capture_error: "有効なメールアドレスを入力してください。",
    email_capture_thanks: "ありがとうございます！最新情報をお知らせします。",
  },
  hi: {
    nav_glossary: "शब्दावली",
    btn_print: "प्रिंट करें",
    btn_ics: "समाप्ति रिमाइंडर",
    ics_no_duration: "इस दस्तावेज़ की अवधि अनिश्चितकालीन है; समाप्ति रिमाइंडर नहीं बनाया जा सकता।",
    ics_event_title: "समाप्ति: {ref}",
    ics_event_desc: "DraftB2B द्वारा दस्तावेज़ {ref} के लिए स्वचालित रूप से बनाया गया रिमाइंडर। जांचें कि क्या समझौते को नवीनीकृत, अद्यतन या समाप्त करने की आवश्यकता है।",
    ics_downloaded_msg: "रिमाइंडर (.ics) डाउनलोड हो गया",
    glossary_title: "कानूनी शब्दावली",
    glossary_subtitle: "सरल भाषा में समझाए गए कानूनी शब्द।",
    glossary_search_placeholder: "एक शब्द खोजें...",
    glossary_empty: "आपकी खोज से मेल खाने वाला कोई शब्द नहीं मिला।",
    glossary_term_nda: "NDA (गोपनीयता समझौता)",
    glossary_def_nda: "एक अनुबंध जिसके तहत एक या दोनों पक्ष आपस में साझा की गई गोपनीय जानकारी को उजागर न करने का वचन देते हैं। इसे गोपनीयता समझौता भी कहा जाता है।",
    glossary_term_noncompete: "प्रतिस्पर्धा-निषेध धारा",
    glossary_def_noncompete: "एक प्रावधान जो एक पक्ष को एक निश्चित अवधि के लिए—आमतौर पर जब तक समझौता प्रभावी है—सीधे प्रतिस्पर्धी व्यवसाय चलाने से रोकता है।",
    glossary_term_nonsolicit: "भर्ती-निषेध धारा",
    glossary_def_nonsolicit: "समझौता प्रभावी रहने तक एक पक्ष को दूसरे पक्ष के कर्मचारियों, ठेकेदारों या ग्राहकों को नियुक्त करने या नियुक्त करने का प्रयास करने से रोकती है।",
    glossary_term_arbitration: "वाणिज्यिक मध्यस्थता",
    glossary_def_arbitration: "सामान्य अदालतों के बाहर विवाद समाधान की एक प्रक्रिया, जिसमें एक तटस्थ तीसरा पक्ष (मध्यस्थ) दोनों पक्षों के लिए बाध्यकारी निर्णय देता है।",
    glossary_term_penalty: "दंड धारा",
    glossary_def_penalty: "एक प्रावधान जो अनुबंध का उल्लंघन करने वाले पक्ष द्वारा देय मुआवजे की राशि पहले से तय करता है, जिससे वास्तविक क्षति साबित करने की आवश्यकता नहीं रहती।",
    glossary_term_controller: "डेटा नियंत्रक",
    glossary_def_controller: "वह व्यक्ति या संस्था जो व्यक्तिगत डेटा के प्रसंस्करण का उद्देश्य और तरीका तय करती है, और डेटा विषयों के प्रति कानूनी दायित्व वहन करती है।",
    glossary_term_subject: "डेटा विषय",
    glossary_def_subject: "वह व्यक्ति जिससे एकत्र या संसाधित व्यक्तिगत डेटा संबंधित है, और जो उस पर पहुंच, सुधार, विलोपन या आपत्ति के अधिकारों का प्रयोग कर सकता है।",
    glossary_term_legalbasis: "कानूनी आधार",
    glossary_def_legalbasis: "वह कानूनी आधार जो व्यक्तिगत डेटा के प्रसंस्करण को वैध बनाता है: यह डेटा विषय की सहमति, अनुबंध का निष्पादन, या कानूनी दायित्व का पालन आदि हो सकता है।",
    glossary_term_transfer: "अंतर्राष्ट्रीय डेटा स्थानांतरण",
    glossary_def_transfer: "व्यक्तिगत डेटा को डेटा विषय के निवास वाले देश या क्षेत्र से बाहर भेजना, जिसके लिए आमतौर पर समान स्तर की सुरक्षा सुनिश्चित करने हेतु अतिरिक्त सुरक्षा उपायों की आवश्यकता होती है।",
    glossary_term_esignature: "इलेक्ट्रॉनिक हस्ताक्षर",
    glossary_def_esignature: "इलेक्ट्रॉनिक डेटा का एक समूह जिसका उपयोग किसी दस्तावेज़ पर हस्ताक्षरकर्ता की पहचान करने और सामग्री के प्रति उसकी सहमति दर्शाने के लिए किया जाता है, जिसकी कानूनी वैधता क्षेत्राधिकार के अनुसार भिन्न होती है।",
    email_capture_title: "नए टेम्पलेट के बारे में जानना चाहते हैं?",
    email_capture_desc: "अपना ईमेल छोड़ें और जब हम नए टेम्पलेट और सुविधाएँ लॉन्च करें तो हम आपको बताएंगे। कोई स्पैम नहीं।",
    email_capture_placeholder: "you@email.com",
    email_capture_btn: "मुझे सूचित करें",
    email_capture_error: "एक मान्य ईमेल पता दर्ज करें।",
    email_capture_thanks: "धन्यवाद! हम आपको नई जानकारी के बारे में बताएंगे।",
  },
};
Object.keys(V2_I18N).forEach(lang => Object.assign(I18N[lang], V2_I18N[lang]));

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
  optionalClauses: { nonCompete: false, nonSolicit: false, arbitration: false },
  customClauses: [], // [{ id, title, body }]
  watermark: 'none', // 'none' | 'draft' | 'confidential' | 'review'
  docHash: null,
  docHashTime: null,
  checklist: { identity: false, scope: false, jurisdiction: false },
};

let customClauseSeq = 0;

const AUTOSAVE_KEY = 'ndagen_autosave_v1';
const TEMPLATE_KEY = 'ndagen_partyA_template_v1';

// `party` + `fieldKey` let the validation alert build a human label like
// "Parte Receptora: Identificación fiscal" for each missing field,
// reusing whatever party legend (Divulgante/Receptora, Prestador/Cliente,
// ...) is currently on screen for the active document type.
const REQUIRED_FIELDS = [
  { id: 'partyA_name', step: 1, party: 'A', fieldKey: 'validation_field_name' },
  { id: 'partyA_id', step: 1, party: 'A', fieldKey: 'validation_field_id' },
  { id: 'partyA_address', step: 1, party: 'A', fieldKey: 'validation_field_address' },
  { id: 'partyB_name', step: 1, party: 'B', fieldKey: 'validation_field_name' },
  { id: 'partyB_id', step: 1, party: 'B', fieldKey: 'validation_field_id' },
  { id: 'partyB_address', step: 1, party: 'B', fieldKey: 'validation_field_address' },
  { id: 'purpose', step: 2, party: null, fieldKey: 'validation_field_purpose' },
  { id: 'jurisdiction', step: 3, party: null, fieldKey: 'validation_field_jurisdiction' },
];

// Signatures aren't <input> elements (they're canvas-driven slots), so
// they're validated separately from REQUIRED_FIELDS but described with
// the same { party, fieldKey } shape for a consistent alert message.
const SIGNATURE_FIELDS = [
  { sigTarget: 'A', step: 4, party: 'A', fieldKey: 'validation_field_signature', isSignature: true },
  { sigTarget: 'B', step: 4, party: 'B', fieldKey: 'validation_field_signature', isSignature: true },
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
  updateChecklistLabels();
  updateCanonicalForLang();
}

// Technical SEO: the site has no per-language routing (every language is
// client-side, same URL), so hreflang alternates (index.html <head>) point
// to this same page with ?lang=xx, and this function keeps the canonical
// tag self-referential to whichever language is actually active — the
// standard pattern for hreflang alternates that share one physical URL.
function updateCanonicalForLang() {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) return;
  const base = 'https://draftb2b.com/';
  canonical.setAttribute('href', state.lang === 'es' ? base : `${base}?lang=${state.lang}`);
}

// Reads a ?lang= param from a shared/indexed URL (e.g. a search result
// landing on a hreflang alternate) so the page actually renders in that
// language on load, rather than only ever reflecting localStorage.
function readLangFromUrl() {
  const urlLang = new URLSearchParams(location.search).get('lang');
  if (urlLang && LANGS[urlLang]) {
    state.lang = urlLang;
    localStorage.setItem('ndagen_lang', urlLang);
  }
}

// Keeps the address bar's ?lang= param (and therefore what a crawler or
// a bookmark sees) in sync with a manual language switch, without a full
// reload — same history.replaceState pattern already used to strip the
// one-shot ?share= param in applySharedDataFromUrl().
function syncLangUrl() {
  const url = new URL(location.href);
  if (state.lang === 'es') url.searchParams.delete('lang');
  else url.searchParams.set('lang', state.lang);
  const qs = url.searchParams.toString();
  history.replaceState(null, '', url.pathname + (qs ? '?' + qs : ''));
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
  } else if (state.docType === 'privacy_policy') {
    legendA.textContent = t('party_a_legend_pp');
    legendB.textContent = '';
  } else {
    legendA.textContent = t('party_a_legend');
    legendB.textContent = t('party_b_legend');
  }
}

function updateObjectLabel() {
  const label = $('#label-object');
  if (state.docType === 'b2b_services') label.textContent = t('label_object_b2b');
  else if (state.docType === 'privacy_policy') label.textContent = t('label_object_pp');
  else label.textContent = t('label_object');
}

function updateDurationLabel() {
  const labels = $all('label.field-label');
  labels.forEach(l => {
    if (l.getAttribute('data-i18n') === 'label_duration') {
      if (state.docType === 'b2b_services') l.textContent = t('label_duration_b2b');
      else if (state.docType === 'privacy_policy') l.textContent = t('label_duration_pp');
      else l.textContent = t('label_duration');
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
  } else if (state.docType === 'privacy_policy') {
    legendA = t('party_a_legend_pp');
    legendB = '';
  } else {
    legendA = t('party_a_legend');
    legendB = t('party_b_legend');
  }
  labelA.textContent = `${t('sig_slot_prefix')} ${legendA}`;
  labelB.textContent = legendB ? `${t('sig_slot_prefix')} ${legendB}` : '';
}

// Privacy Policy has no counterparty: Party B never fills fields or
// signs (the "second party" is just the general data subject, referenced
// in clause text via {roleB} but never named). Hide the whole Party B
// column, the non-compete/non-solicit/arbitration toggles and the
// penalty calculator (all bilateral-dispute concepts that don't apply
// to a unilaterally-published policy), and let Party A's fieldset span
// the full row.
function applyDocTypeVisibility() {
  const isPP = state.docType === 'privacy_policy';
  $('#partyB-fieldset')?.classList.toggle('hidden', isPP);
  $('#partyA-fieldset')?.classList.toggle('party-fieldset-expand', isPP);
  $('.sig-slot[data-sig-party="B"]')?.classList.toggle('hidden', isPP);
  $('.sig-slots')?.classList.toggle('sig-slots-single', isPP);
  $('#bilateral-clause-toggles')?.classList.toggle('hidden', isPP);
  $('#penalty-calc-box')?.classList.toggle('hidden', isPP);
}

function updateChecklistLabels() {
  const isPP = state.docType === 'privacy_policy';
  const t1 = $('#checklist-text-1'), t2 = $('#checklist-text-2'), t3 = $('#checklist-text-3');
  if (t1) t1.textContent = t(isPP ? 'checklist_item1_pp' : 'checklist_item1');
  if (t2) t2.textContent = t(isPP ? 'checklist_item2_pp' : 'checklist_item2');
  if (t3) t3.textContent = t(isPP ? 'checklist_item3_pp' : 'checklist_item3');
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
  const prefix = state.docType === 'b2b_services' ? 'B2B' : state.docType === 'privacy_policy' ? 'PP' : 'NDA';
  return `${prefix}-${state.docYear}-${state.docCode}`;
}

function sanitizeFilename(name) {
  return name.trim().replace(/[^a-zA-Z0-9_\-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80);
}

const DOC_TYPE_FILE_LABEL = {
  nda_unilateral: 'NDA_Unilateral',
  nda_mutual: 'NDA_Mutuo',
  b2b_services: 'Contrato_B2B',
  privacy_policy: 'Politica_Privacidad',
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

  if (docType === 'privacy_policy') {
    // "Party B" here is never a named counterparty who fills fields or
    // signs — it's the general data subject/user, referenced only as a
    // role label inside clause text (see resolveClauses()).
    roleA = tt('role_data_controller');
    roleB = tt('role_data_subject');
    title = tt('doc_title_privacy_policy');
    intro = tt('intro_privacy');
    c1title = ''; c1body = ''; c2title = ''; c2body = '';
  } else if (docType === 'nda_unilateral') {
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
  if (docType === 'privacy_policy') {
    const clauses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => ({
      title: tt(`c${n}_title_pp`), body: tt(`c${n}_body_pp`)
    }));
    state.customClauses.forEach(cc => {
      if ((cc.title || '').trim() || (cc.body || '').trim()) {
        clauses.push({ title: cc.title || '', body: cc.body || '' });
      }
    });
    return clauses;
  }
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
  if (state.optionalClauses.nonCompete) {
    clauses.push({ title: tt('clause_noncompete_title'), body: tt('clause_noncompete_body') });
  }
  if (state.optionalClauses.nonSolicit) {
    clauses.push({ title: tt('clause_nonsolicit_title'), body: tt('clause_nonsolicit_body') });
  }
  // Arbitration replaces the standard ordinary-courts clause entirely
  // rather than sitting alongside it, since the two are contradictory
  // (one submits disputes to courts, the other waives them).
  if (state.optionalClauses.arbitration) {
    clauses.push({ title: tt('clause_arbitration_title'), body: tt('clause_arbitration_body') });
  } else {
    clauses.push({ title: isB2b ? tt('c7_title_b2b') : tt('c7_title'), body: tt('c7_body') });
  }
  clauses.push({ title: isB2b ? tt('c8_title_b2b') : tt('c8_title'), body: tt('c8_body') });
  state.customClauses.forEach(cc => {
    if ((cc.title || '').trim() || (cc.body || '').trim()) {
      clauses.push({ title: cc.title || '', body: cc.body || '' });
    }
  });
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
  const singleParty = docType === 'privacy_policy';
  const signPlaceKey = singleParty ? 'sign_place_date_pp' : 'sign_place_date';

  const makeFill = (roleAL, roleBL, durationL) => (str) => str
    .replace(/\{nameA\}/g, nameA).replace(/\{nameB\}/g, nameB)
    .replace(/\{idA\}/g, idA).replace(/\{idB\}/g, idB)
    .replace(/\{addrA\}/g, addrA).replace(/\{addrB\}/g, addrB)
    .replace(/\{roleA\}/g, `<strong>${roleAL}</strong>`).replace(/\{roleB\}/g, `<strong>${roleBL}</strong>`)
    .replace(/\{purpose\}/g, purpose)
    .replace(/\{duration\}/g, `<strong>${durationL}</strong>`)
    .replace(/\{jurisdiction\}/g, `<strong>${jurisdiction}</strong>`)
    // Only ever matters for free-form custom clause bodies (standard
    // translated clauses are single-line) — a textarea's literal "\n"
    // is otherwise silently collapsed to a space by white-space:normal.
    .replace(/\n/g, '<br>');

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
          <td class="bilingual-cell"><p>${fill(escapeHtml(t(signPlaceKey)))}</p></td>
          <td class="bilingual-cell"><p>${fillB(escapeHtml(tFor(langB, signPlaceKey)))}</p></td>
        </tr>
      </table>
    `;
  } else {
    const clausesHtml = clauses.map((c, idx) => renderClause(c, idx, fill)).join('');
    bodyHtml = `
      <p>${fill(escapeHtml(intro))}</p>
      ${clausesHtml}
      <p style="margin-top:1.5rem;">${fill(escapeHtml(t(signPlaceKey)))}</p>
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

  const watermarkHtml = state.watermark !== 'none'
    ? `<div class="doc-watermark">${escapeHtml(t('watermark_' + state.watermark))}</div>`
    : '';

  return `
    ${watermarkHtml}
    <div class="doc-letterhead">
      <div class="doc-letterhead-logo">${logoHtml}</div>
      <div class="doc-letterhead-meta">
        <div class="doc-letterhead-title">${escapeHtml(title)}</div>
        <div class="doc-letterhead-ref">${escapeHtml(t('doc_ref_label'))}: ${escapeHtml(docRef)}</div>
        <div class="doc-letterhead-date">${escapeHtml(t('doc_issue_date_label'))}: ${escapeHtml(issueDate)}</div>
      </div>
    </div>
    <div class="doc-letterhead-divider"></div>

    <div class="doc-parties-grid${singleParty ? ' single' : ''}">
      ${partyCard(`<strong>${roleA}</strong>`, nameA, idA, addrA)}
      ${singleParty ? '' : partyCard(`<strong>${roleB}</strong>`, nameB, idB, addrB)}
    </div>

    ${bodyHtml}

    <div class="sign-block${singleParty ? ' single' : ''}">
      ${signCard(`<strong>${roleA}</strong>`, sigAHtml, nameA, `<strong>${roleA}</strong>`, idA)}
      ${singleParty ? '' : signCard(`<strong>${roleB}</strong>`, sigBHtml, nameB, `<strong>${roleB}</strong>`, idB)}
    </div>

    <div class="doc-verified-badge">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      ${escapeHtml(t('doc_verified_badge'))}
    </div>

    <div class="doc-integrity-block">
      <div id="doc-qr-slot" class="doc-qr-slot"></div>
      <div class="doc-integrity-text">
        <div class="doc-integrity-line"><span data-i18n="doc_hash_label">${escapeHtml(t('doc_hash_label'))}</span>: <span id="doc-hash-value">…</span></div>
        <div class="doc-integrity-line"><span data-i18n="doc_timestamp_label">${escapeHtml(t('doc_timestamp_label'))}</span>: <span id="doc-timestamp-value">…</span></div>
      </div>
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
    .flatMap(part => {
      if (subs[part]) return [subs[part]];
      // Free-form custom clause text may contain literal newlines from a
      // textarea; expand each into its own run with a break marker so
      // downloadDocx() can turn it into a real Word line break instead of
      // silently losing it (standard translated clauses are single-line,
      // so this is a no-op for them).
      const lines = part.split('\n');
      return lines.flatMap((line, i) => i === 0 ? [{ text: line, bold: false }] : [{ break: true }, { text: line, bold: false }]);
    });

  return {
    lang,
    title: parts.title,
    dateLine: tt('doc_subtitle').replace('{date}', formatDate(lang)),
    introRuns: toRuns(parts.intro),
    clauses: clauses.map(c => ({ title: c.title, bodyRuns: toRuns(c.body) })),
    signPlaceRuns: toRuns(tt(docType === 'privacy_policy' ? 'sign_place_date_pp' : 'sign_place_date')),
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
  scheduleIntegrityUpdate();
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
  updateChecklistLabels();
  applyDocTypeVisibility();
  updatePreview();
}

/* ---------------------------------------------------------------------
   7) ACTIONS: PDF / COPY / CLEAR
   --------------------------------------------------------------------- */
// html2pdf's own page margin (mm), passed to its `margin` option below.
// This is a REPEATING per-page inset (html2pdf reserves it on every
// page it slices the content into, not just the first/last one) — unlike
// padding baked into the source HTML, which only ever appears once, at
// the very start/end of the single continuous content flow. A generous
// 25mm bottom margin is what guarantees the last clause on ANY page
// (not just the final one) never gets drawn underneath the jsPDF footer
// overlay, which is written at a fixed Y position on every page. Also
// used to position that footer overlay itself — keep in sync with the
// `opt.margin` array in downloadPdf().
const PDF_MARGIN_MM = { top: 15, right: 15, bottom: 25, left: 15 };

// Builds a throwaway, fully isolated clone of the live preview and
// appends it (off-screen) to <body>. Exporting FROM this clone instead
// of the visible #pdf-content is the fix for the "blank first page +
// text cut between pages in real browsers" bug: #pdf-content normally
// lives inside #preview-scroll, itself inside a responsive flex/grid
// layout (w-full lg:w-[46%]) — so its actual on-screen pixel width (and
// therefore how text wraps, and therefore where html2canvas slices
// pages) depends on the visitor's current viewport/zoom. The
// .pdf-export-clone class (styles.css) gives it fixed pt typography and
// !important page-break-inside:avoid on every paragraph/clause/card/
// heading/table-row, and stretches it to fill (width:100%) whatever
// fixed-size wrapper html2pdf's own toContainer() step puts it in — that
// wrapper's width is derived purely from the A4 page format and
// PDF_MARGIN_MM below, never from the live page's layout, so the
// exported PDF always paginates identically regardless of the device it
// was generated from.
function buildPdfExportClone() {
  const source = $('#pdf-content');
  const clone = source.cloneNode(true);
  clone.classList.add('pdf-export-clone');
  clone.style.removeProperty('page-break-before');
  // The CSS watermark is a single absolutely-positioned div meant for the
  // one continuous on-screen preview; it would only ever land on whatever
  // page its fixed position happens to fall on once sliced. The PDF gets
  // its own watermark instead, drawn per-page as jsPDF vector text after
  // pagination (see downloadPdf()) — strip this one so it doesn't also
  // show up once, in the wrong place, underneath that.
  const cloneWatermark = clone.querySelector('.doc-watermark');
  if (cloneWatermark) cloneWatermark.remove();

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

async function downloadPdf() {
  if (!validateBeforeDownload()) return;

  // Refresh the integrity seal (hash + QR) synchronously right before
  // cloning, so the export always reflects the exact current content —
  // not whatever the last 500ms-debounced background update happened to
  // compute.
  await updateIntegritySeal();

  const host = buildPdfExportClone();
  const clone = host.firstElementChild;

  const opt = {
    margin: [PDF_MARGIN_MM.top, PDF_MARGIN_MM.left, PDF_MARGIN_MM.bottom, PDF_MARGIN_MM.right],
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
  const marginBottom = PDF_MARGIN_MM.bottom;
  const marginLeft = PDF_MARGIN_MM.left;
  const marginRight = PDF_MARGIN_MM.right;
  const watermarkText = state.watermark !== 'none' ? tFor(footerLang, 'watermark_' + state.watermark) : null;

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
      if (watermarkText) {
        // Diagonal, translucent watermark repeated on every page — drawn
        // as jsPDF vector text (not baked into the rasterized content),
        // since the source is a single continuous flow with no per-page
        // boundaries of its own; this is the only way to guarantee it
        // repeats on every sliced page rather than appearing once.
        const hasGState = typeof pdf.setGState === 'function' && typeof pdf.GState === 'function';
        if (hasGState) { pdf.saveGraphicsState(); pdf.setGState(new pdf.GState({ opacity: 0.15 })); }
        pdf.setFontSize(60);
        pdf.setTextColor(203, 213, 225); // #cbd5e1
        pdf.text(watermarkText, pageWidth / 2, pageHeight / 2, { angle: 45, align: 'center', baseline: 'middle' });
        if (hasGState) pdf.restoreGraphicsState();
      }
      pdf.setFontSize(7.5);
      pdf.setTextColor(148, 163, 184);
      pdf.text(footerLeft, marginLeft, footerY);
      pdf.text(footerPageOfTemplate.replace('{current}', i).replace('{total}', totalPages), pageWidth - marginRight, footerY, { align: 'right' });
    }
  }).save()).finally(() => {
    btn.disabled = false;
    btn.innerHTML = originalHtml;
    host.remove();
    showEmailCaptureBanner();
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

  // Refresh the integrity seal (hash + QR) so the export always reflects
  // the exact current content, not a stale debounced background update.
  await updateIntegritySeal();

  const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, ImageRun, WidthType, BorderStyle, TableLayoutType } = window.docx;
  const model = getDocumentModel(state.lang);
  const isBilingual = state.bilingual && state.langSecondary && state.langSecondary !== state.lang;
  const modelSecondary = isBilingual ? getDocumentModel(state.langSecondary) : null;
  const btn = $('#btn-docx');
  const originalHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span>${escapeHtml(t('docx_generating'))}</span>`;

  try {
    const children = [];
    // Custom clause bodies can carry a { break: true } marker in place of
    // a run (see toRuns() in getDocumentModel()) for each textarea
    // newline — render that as a real Word line break instead of text.
    const runToTextRun = (r) => r.break ? new TextRun({ text: '', break: 1 }) : new TextRun({ text: r.text, bold: r.bold });

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
        children: m.introRuns.map(runToTextRun),
      });
      const signPlaceParagraph = (m) => new Paragraph({
        spacing: { before: 100, after: 100 },
        children: m.signPlaceRuns.map(runToTextRun),
      });
      const clauseParagraphs = (c) => [
        new Paragraph({ keepNext: true, spacing: { before: 100, after: 100 }, children: [new TextRun({ text: c.title, bold: true, size: 20 })] }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { after: 150, line: 300 },
          children: c.bodyRuns.map(runToTextRun),
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

      // layout: FIXED forces Word to honor the declared column widths as
      // literal (via <w:tblLayout w:type="fixed"/>) instead of shrinking
      // or stretching each column to fit its own content — without it,
      // Word's default AUTOFIT layout can render one language's column
      // very narrow and the other excessively wide whenever the two
      // languages' text naturally wraps to different lengths.
      children.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, rows }));
      children.push(new Paragraph({ text: '', spacing: { after: 200 } }));
    } else {
      children.push(new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 200, line: 300 },
        children: model.introRuns.map(runToTextRun),
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
          children: c.bodyRuns.map(runToTextRun),
        }));
      });

      children.push(new Paragraph({
        spacing: { before: 300, after: 300 },
        children: model.signPlaceRuns.map(runToTextRun),
      }));
    }

    function signatureCell(name, role, sigDataUrl, widthPct) {
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
        width: { size: widthPct, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }
        },
        margins: { left: 200, right: 200 },
        children: cellChildren,
      });
    }

    // Privacy Policy has no counterparty signature — a single, full-width
    // signature cell for the data controller's representative instead of
    // the two-party table used by every other document type.
    const isSingleSignatory = state.docType === 'privacy_policy';
    const signatureRowChildren = isSingleSignatory
      ? [signatureCell(model.nameA, model.roleA, model.sigA, 100)]
      : [signatureCell(model.nameA, model.roleA, model.sigA, 50), signatureCell(model.nameB, model.roleB, model.sigB, 50)];

    children.push(new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      layout: TableLayoutType.FIXED,
      rows: [new TableRow({ cantSplit: true, children: signatureRowChildren })],
    }));

    // Integrity seal: QR code + SHA-256 hash + digital timestamp,
    // matching the same block shown in the live preview and PDF footer.
    if (state.qrDataUrl) {
      children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 300 },
        children: [new ImageRun({ type: 'png', data: dataUrlToUint8Array(state.qrDataUrl), transformation: { width: 60, height: 60 } })],
      }));
    }
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100 },
      children: [new TextRun({ text: `${tFor(state.lang, 'doc_hash_label')}: ${shortHash(state.docHash)}`, size: 16, color: '888888' })],
    }));
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({
        text: `${tFor(state.lang, 'doc_timestamp_label')}: ${state.docHashTime ? state.docHashTime.toLocaleString(state.lang) : ''}`,
        size: 16, color: '888888'
      })],
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
    showEmailCaptureBanner();
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
  state.optionalClauses = { nonCompete: false, nonSolicit: false, arbitration: false };
  state.customClauses = [];
  state.watermark = 'none';
  $all('.field-input').forEach(el => el.classList.remove('field-error'));
  renderLogo();
  renderSignatureSlots();
  renderCustomClausesList();
  updateChecklistGate();
  goToStep(1);
  updatePreview();
  try { localStorage.removeItem(AUTOSAVE_KEY); } catch (e) {}
}

/* ---------------------------------------------------------------------
   COMPLETION BAR & VALIDATION
   --------------------------------------------------------------------- */
// Privacy Policy has no counterparty and no required signature (it's a
// unilaterally-published document, not a bilateral agreement) — Party B
// fields and both signature requirements are dropped from validation for
// that document type only.
function activeRequiredFields() {
  return state.docType === 'privacy_policy' ? REQUIRED_FIELDS.filter(f => f.party !== 'B') : REQUIRED_FIELDS;
}

function activeSignatureFields() {
  return state.docType === 'privacy_policy' ? [] : SIGNATURE_FIELDS;
}

function updateCompletion() {
  const fields = activeRequiredFields();
  const filled = fields.filter(f => (($(`#${f.id}`) || {}).value || '').trim().length > 0).length;
  const pct = Math.round((filled / fields.length) * 100);
  const fillEl = $('#completion-fill');
  const pctEl = $('#completion-percent');
  if (fillEl) fillEl.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  return pct;
}

function getMissingFields() {
  const missingInputs = activeRequiredFields().filter(f => !(($(`#${f.id}`) || {}).value || '').trim());
  const missingSignatures = activeSignatureFields().filter(f => !state.signatures[f.sigTarget]);
  return missingInputs.concat(missingSignatures);
}

// Reads whatever party legend (Divulgante/Receptora, Prestador/Cliente,
// Primera/Segunda Parte, ...) is currently shown for the active document
// type, so the alert always names the party the way the user is already
// seeing it on screen, in the active language.
function partyLabelFor(party) {
  if (party === 'A') return ($('#legend-partyA') || {}).textContent?.trim() || '';
  if (party === 'B') return ($('#legend-partyB') || {}).textContent?.trim() || '';
  return null;
}

function missingFieldLabel(f) {
  const partyLabel = partyLabelFor(f.party);
  const fieldLabel = t(f.fieldKey);
  return partyLabel ? `${partyLabel}: ${fieldLabel}` : fieldLabel;
}

function missingFieldElement(f) {
  return f.isSignature ? $(`.sig-slot[data-sig-party="${f.sigTarget}"]`) : $(`#${f.id}`);
}

function validateBeforeDownload() {
  const missing = getMissingFields();
  $all('.field-input').forEach(el => el.classList.remove('field-error'));
  $all('.sig-slot').forEach(el => el.classList.remove('field-error'));
  if (missing.length === 0) {
    hideValidationAlert();
    return true;
  }

  missing.forEach(f => {
    const el = missingFieldElement(f);
    if (el) el.classList.add('field-error');
  });

  goToStep(missing[0].step);
  const firstEl = missingFieldElement(missing[0]);
  // Let goToStep()'s step switch commit its layout first so the target
  // is actually visible (not display:none) before we measure/scroll to it.
  if (firstEl) {
    setTimeout(() => firstEl.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
  }

  showValidationAlert(missing.map(missingFieldLabel));
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
   8b) VALIDATION ALERT (missing required fields before download)
   --------------------------------------------------------------------- */
let validationAlertTimeout;

function buildValidationAlert() {
  const el = document.createElement('div');
  el.id = 'validation-alert';
  el.className = 'validation-alert';
  el.setAttribute('role', 'alert');
  el.innerHTML = `
    <button type="button" class="validation-alert-close" aria-label="Close">&times;</button>
    <div class="validation-alert-header">
      <span class="validation-alert-icon" aria-hidden="true">⚠️</span>
      <strong class="validation-alert-title"></strong>
    </div>
    <p class="validation-alert-intro"></p>
    <ul class="validation-alert-list"></ul>
  `;
  document.body.appendChild(el);
  el.querySelector('.validation-alert-close').addEventListener('click', hideValidationAlert);
  return el;
}

function showValidationAlert(missingLabels) {
  const el = $('#validation-alert') || buildValidationAlert();
  el.querySelector('.validation-alert-title').textContent = t('validation_alert_title');
  el.querySelector('.validation-alert-intro').textContent = t('validation_alert_intro');
  el.querySelector('.validation-alert-list').innerHTML = missingLabels.map(l => `<li>${escapeHtml(l)}</li>`).join('');

  // A plain setTimeout (rather than requestAnimationFrame) still forces
  // the "no .show class yet" frame to commit before the class is added,
  // which is all the CSS transition needs to actually animate in — and
  // unlike rAF it isn't tied to the paint loop, so it isn't starved if
  // the tab is backgrounded when the user clicks download.
  el.classList.remove('show');
  setTimeout(() => el.classList.add('show'), 10);
  clearTimeout(validationAlertTimeout);
  validationAlertTimeout = setTimeout(hideValidationAlert, 7000);
}

function hideValidationAlert() {
  clearTimeout(validationAlertTimeout);
  const el = $('#validation-alert');
  if (el) el.classList.remove('show');
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
  if (!/^image\/(png|jpeg|jpg)$/.test(file.type)) {
    toast(t('logo_error_type'));
    return;
  }
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
    img.onerror = () => toast(t('logo_error_type'));
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
      // A signature was just supplied — clear any validation-error
      // highlight left on this slot from a previous failed download.
      $(`.sig-slot[data-sig-party="${target}"]`)?.classList.remove('field-error');
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
        optionalClauses: state.optionalClauses,
        customClauses: state.customClauses,
        watermark: state.watermark,
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
    state.optionalClauses = Object.assign({ nonCompete: false, nonSolicit: false, arbitration: false }, data.optionalClauses || {});
    state.customClauses = Array.isArray(data.customClauses) ? data.customClauses : [];
    customClauseSeq = state.customClauses.reduce((max, cc) => {
      const n = parseInt(String(cc.id).replace('cc', ''), 10);
      return Number.isFinite(n) && n > max ? n : max;
    }, 0);
    state.watermark = data.watermark || 'none';
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
   13c) OPTIONAL & CUSTOM CLAUSES
   --------------------------------------------------------------------- */
function renderCustomClausesList() {
  const container = $('#custom-clauses-list');
  if (!container) return;
  if (state.customClauses.length === 0) {
    container.innerHTML = `<p class="custom-clause-empty" data-i18n="custom_clause_empty_hint">${escapeHtml(t('custom_clause_empty_hint'))}</p>`;
    return;
  }
  container.innerHTML = state.customClauses.map(cc => `
    <div class="custom-clause-item">
      <div class="custom-clause-item-row">
        <input type="text" class="field-input custom-clause-title-input" data-clause-id="${cc.id}" value="${escapeHtml(cc.title)}" placeholder="${escapeHtml(t('custom_clause_title_placeholder'))}">
        <button type="button" class="btn-ghost btn-sm custom-clause-remove" data-clause-id="${cc.id}">
          <span>${escapeHtml(t('custom_clause_remove_btn'))}</span>
        </button>
      </div>
      <textarea class="field-input custom-clause-body-input mt-2" data-clause-id="${cc.id}" rows="3" placeholder="${escapeHtml(t('custom_clause_body_placeholder'))}">${escapeHtml(cc.body)}</textarea>
    </div>
  `).join('');

  $all('.custom-clause-title-input', container).forEach(el => {
    el.addEventListener('input', () => {
      const cc = state.customClauses.find(c => c.id === el.dataset.clauseId);
      if (cc) { cc.title = el.value; updatePreview(); autosave(); }
    });
  });
  $all('.custom-clause-body-input', container).forEach(el => {
    el.addEventListener('input', () => {
      const cc = state.customClauses.find(c => c.id === el.dataset.clauseId);
      if (cc) { cc.body = el.value; updatePreview(); autosave(); }
    });
  });
  $all('.custom-clause-remove', container).forEach(btn => {
    btn.addEventListener('click', () => {
      state.customClauses = state.customClauses.filter(c => c.id !== btn.dataset.clauseId);
      renderCustomClausesList();
      updatePreview();
      autosave();
    });
  });
}

function addCustomClause() {
  customClauseSeq++;
  state.customClauses.push({ id: 'cc' + customClauseSeq, title: '', body: '' });
  renderCustomClausesList();
  autosave();
}

function initOptionalClauses() {
  renderCustomClausesList();
  $('#toggle-noncompete').addEventListener('change', (e) => {
    state.optionalClauses.nonCompete = e.target.checked;
    updatePreview(); autosave();
  });
  $('#toggle-nonsolicit').addEventListener('change', (e) => {
    state.optionalClauses.nonSolicit = e.target.checked;
    updatePreview(); autosave();
  });
  $('#toggle-arbitration').addEventListener('change', (e) => {
    state.optionalClauses.arbitration = e.target.checked;
    updatePreview(); autosave();
  });
  $('#btn-add-custom-clause').addEventListener('click', addCustomClause);
}

/* ---------------------------------------------------------------------
   13d) PENALTY CLAUSE CALCULATOR
   --------------------------------------------------------------------- */
function calcPenaltySuggestion() {
  const value = parseFloat($('#penalty-value').value);
  const currency = $('#penalty-currency').value;
  const resultBox = $('#penalty-result');
  const resultText = $('#penalty-result-text');
  if (!value || value <= 0) {
    toast(t('validation_missing'));
    return;
  }
  const suggested = Math.round(value * 0.15);
  let formattedAmount;
  try { formattedAmount = suggested.toLocaleString(state.lang); }
  catch (e) { formattedAmount = String(suggested); }
  resultText.textContent = t('penalty_result_text')
    .replace('{amount}', formattedAmount)
    .replace('{currency}', currency);
  resultBox.classList.remove('hidden');
}

function insertPenaltyClause() {
  const text = $('#penalty-result-text').textContent;
  if (!text) return;
  customClauseSeq++;
  state.customClauses.push({ id: 'cc' + customClauseSeq, title: t('penalty_clause_title'), body: text });
  renderCustomClausesList();
  updatePreview();
  autosave();
  toast(t('penalty_inserted_msg'));
}

function initPenaltyCalculator() {
  const toggleBtn = $('#btn-penalty-toggle');
  const body = $('#penalty-calc-body');
  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isOpen));
    body.style.maxHeight = isOpen ? '0px' : body.scrollHeight + 'px';
  });
  $('#btn-penalty-calc').addEventListener('click', calcPenaltySuggestion);
  $('#btn-penalty-insert').addEventListener('click', insertPenaltyClause);
}

/* ---------------------------------------------------------------------
   13e) PRE-DOWNLOAD CHECKLIST
   --------------------------------------------------------------------- */
function updateChecklistGate() {
  const allChecked = $('#check-identity').checked && $('#check-scope').checked && $('#check-jurisdiction').checked;
  $('#btn-pdf').disabled = !allChecked;
  $('#btn-docx').disabled = !allChecked;
}

function initChecklist() {
  ['check-identity', 'check-scope', 'check-jurisdiction'].forEach(id => {
    $('#' + id).addEventListener('change', updateChecklistGate);
  });
}

/* ---------------------------------------------------------------------
   13f) WATERMARK
   --------------------------------------------------------------------- */
function initWatermarkSelector() {
  $('#watermark-select').addEventListener('change', (e) => {
    state.watermark = e.target.value;
    updatePreview();
    autosave();
  });
}

/* ---------------------------------------------------------------------
   13g) INTEGRITY SEAL: SHA-256 HASH + QR CODE
   --------------------------------------------------------------------- */
// Everything the SHA-256 seal covers, plus a few extra display-only
// fields (docType/lang/ref) — this is also exactly what gets embedded
// (base64url-encoded) in the QR code / verification link, so the public
// verify.html page can recompute the same hash from the same payload
// with no server or lookup table involved. Keep the hashed subset
// (title/nameA/nameB/date/clauseTitles/sigA/sigB/optional) and its key
// order stable: verify.html's canonicalHashPayload() must stay byte-for-
// byte identical to this one for recomputed hashes to ever match.
function buildVerificationPayload() {
  const model = getDocumentModel(state.lang);
  // Privacy Policy has no counterparty (see resolveTemplateParts()) — its
  // document never shows a Party B card/signature, so the seal shouldn't
  // reference one either, even if a stale nameB/signatures.B value is
  // still sitting in state from a previously selected document type.
  const isPP = state.docType === 'privacy_policy';
  return {
    v: 1,
    docType: state.docType,
    lang: state.lang,
    ref: getDocRef(),
    title: model.title,
    nameA: model.nameA, nameB: isPP ? '' : model.nameB,
    date: model.dateLine,
    clauseTitles: model.clauses.map(c => c.title),
    sigA: !!state.signatures.A, sigB: isPP ? false : !!state.signatures.B,
    optional: state.optionalClauses,
  };
}

function canonicalHashPayload(payload) {
  return JSON.stringify({
    title: payload.title,
    nameA: payload.nameA, nameB: payload.nameB,
    date: payload.date,
    clauseTitles: payload.clauseTitles,
    sigA: payload.sigA, sigB: payload.sigB,
    optional: payload.optional,
  });
}

async function computeDocHash() {
  const payload = buildVerificationPayload();
  const enc = new TextEncoder().encode(canonicalHashPayload(payload));
  const digestBuffer = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(digestBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Builds the public verify.html URL for the current document: a self-
// contained link (and QR payload) that carries the document's own data
// so verification works with zero backend — verify.html decodes `d`,
// recomputes the hash the same way, and compares it against `h`.
function buildVerifyUrl(payload, hash) {
  const encoded = encodeShareData(payload);
  const verifyPath = new URL('verify.html', location.href).toString();
  return `${verifyPath}?d=${encoded}&h=${hash}`;
}

function shortHash(hash) {
  return hash ? `${hash.slice(0, 8)}…${hash.slice(-4)}` : '';
}

function renderQrIntoSlot(text) {
  const slot = $('#doc-qr-slot');
  if (!slot || typeof QRCode === 'undefined') return;
  const tempHost = document.createElement('div');
  new QRCode(tempHost, { text, width: 64, height: 64, colorDark: '#1e293b', colorLight: '#ffffff' });
  // QRCode.js renders into a <canvas>. cloneNode() does NOT copy a
  // canvas's rendered pixels (only its DOM attributes), so leaving a
  // live <canvas> in #pdf-content would export as a blank square in the
  // PDF — read it back out as a data-URL <img> immediately, which DOES
  // clone/rasterize correctly.
  const canvas = tempHost.querySelector('canvas');
  const dataUrl = canvas ? canvas.toDataURL('image/png') : null;
  state.qrDataUrl = dataUrl;
  slot.innerHTML = dataUrl ? `<img src="${dataUrl}" class="doc-qr-img" alt="QR">` : '';
}

let integrityTimeout;
function scheduleIntegrityUpdate() {
  clearTimeout(integrityTimeout);
  integrityTimeout = setTimeout(updateIntegritySeal, 500);
}

async function updateIntegritySeal() {
  const payload = buildVerificationPayload();
  const hash = await computeDocHash();
  state.docHash = hash;
  state.docHashTime = new Date();
  const hashEl = $('#doc-hash-value');
  const tsEl = $('#doc-timestamp-value');
  if (hashEl) hashEl.textContent = shortHash(hash);
  if (tsEl) { try { tsEl.textContent = state.docHashTime.toLocaleString(state.lang); } catch (e) { tsEl.textContent = state.docHashTime.toISOString(); } }
  state.verifyUrl = buildVerifyUrl(payload, hash);
  renderQrIntoSlot(state.verifyUrl);
  const verifyInput = $('#verify-link-output');
  if (verifyInput) verifyInput.value = state.verifyUrl;
  return hash;
}

function copyVerifyLink() {
  const input = $('#verify-link-output');
  if (!input || !input.value) return;
  input.select();
  const done = () => toast(t('share_copied_msg'));
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(done).catch(() => { document.execCommand('copy'); done(); });
  } else {
    document.execCommand('copy');
    done();
  }
}

/* ---------------------------------------------------------------------
   13h) SHARE PRE-FILLED FORM VIA URL
   --------------------------------------------------------------------- */
function encodeShareData(fields) {
  const json = JSON.stringify(fields);
  const base64 = btoa(unescape(encodeURIComponent(json)));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeShareData(encoded) {
  try {
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) base64 += '=';
    return JSON.parse(decodeURIComponent(escape(atob(base64))));
  } catch (e) {
    return null;
  }
}

function openShareModal() {
  const fields = {
    n: $('#partyA_name').value,
    i: $('#partyA_id').value,
    a: $('#partyA_address').value,
  };
  const encoded = encodeShareData(fields);
  const url = `${location.origin}${location.pathname}?share=${encoded}`;
  $('#share-link-output').value = url;
  $('#share-modal').classList.remove('hidden');
}

function closeShareModal() {
  $('#share-modal').classList.add('hidden');
}

function copyShareLink() {
  const input = $('#share-link-output');
  input.select();
  const done = () => toast(t('share_copied_msg'));
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(done).catch(() => { document.execCommand('copy'); done(); });
  } else {
    document.execCommand('copy');
    done();
  }
}

function initShareLink() {
  $('#btn-share-link').addEventListener('click', openShareModal);
  $('#share-modal-close').addEventListener('click', closeShareModal);
  $('#btn-share-close').addEventListener('click', closeShareModal);
  $('#btn-share-copy').addEventListener('click', copyShareLink);
  $('#share-modal').addEventListener('click', (e) => { if (e.target.id === 'share-modal') closeShareModal(); });
}

function applySharedDataFromUrl() {
  const params = new URLSearchParams(location.search);
  const encoded = params.get('share');
  if (!encoded) return;
  const fields = decodeShareData(encoded);
  if (!fields) return;
  if (fields.n) $('#partyA_name').value = fields.n;
  if (fields.i) $('#partyA_id').value = fields.i;
  if (fields.a) $('#partyA_address').value = fields.a;
  updatePreview();
  autosave();
  toast(t('share_prefill_notice'));
  setTimeout(() => { $('#partyB_name').focus(); }, 300);
  // Strip the ?share= param so a refresh/bookmark doesn't keep
  // re-prefilling and the encoded data isn't left in browser history.
  history.replaceState(null, '', location.pathname);
}

/* ---------------------------------------------------------------------
   13i) NATIVE PRINT
   --------------------------------------------------------------------- */
function initPrint() {
  $('#btn-print')?.addEventListener('click', () => window.print());
}

/* ---------------------------------------------------------------------
   13j) EXPIRATION REMINDER (.ics)
   --------------------------------------------------------------------- */
function icsEscape(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

function formatIcsDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}${m}${d}`;
}

function formatIcsDateTimeUtc(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

// Reuses the same #duration field every doc type already has — for NDAs
// it's the confidentiality term, for a Privacy Policy it's the data
// retention period (see label_duration_pp) — either way, "1"/"3"/"5"
// years from today is a real, meaningful expiration date. "indefinite"
// has no such date, so there's nothing to remind about.
function computeExpirationDate() {
  const durationVal = ($('#duration') || {}).value;
  if (!durationVal || durationVal === 'indefinite') return null;
  const years = parseInt(durationVal, 10);
  if (!Number.isFinite(years)) return null;
  const d = new Date();
  d.setFullYear(d.getFullYear() + years);
  return d;
}

function downloadIcsReminder() {
  const expDate = computeExpirationDate();
  if (!expDate) {
    toast(t('ics_no_duration'));
    return;
  }
  const docRef = getDocRef();
  // RFC 5545 all-day events use an exclusive DTEND (the day AFTER the
  // event), otherwise most calendar apps render a spurious extra day.
  const endDate = new Date(expDate);
  endDate.setDate(endDate.getDate() + 1);
  const uid = `${docRef}-${Date.now()}@draftb2b.com`;
  const summary = t('ics_event_title').replace('{ref}', docRef);
  const description = t('ics_event_desc').replace('{ref}', docRef);
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//DraftB2B//Document Reminder//ES',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcsDateTimeUtc(new Date())}`,
    `DTSTART;VALUE=DATE:${formatIcsDate(expDate)}`,
    `DTEND;VALUE=DATE:${formatIcsDate(endDate)}`,
    `SUMMARY:${icsEscape(summary)}`,
    `DESCRIPTION:${icsEscape(description)}`,
    'BEGIN:VALARM',
    'TRIGGER:-P7D',
    'ACTION:DISPLAY',
    `DESCRIPTION:${icsEscape(summary)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${sanitizeFilename(docRef)}_recordatorio.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast(t('ics_downloaded_msg'));
}

function initIcsReminder() {
  $('#btn-ics')?.addEventListener('click', downloadIcsReminder);
}

/* ---------------------------------------------------------------------
   13k) LEGAL GLOSSARY (client-side search filter)
   --------------------------------------------------------------------- */
function initGlossary() {
  const searchInput = $('#glossary-search');
  if (!searchInput) return;
  const emptyMsg = $('#glossary-empty');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    const items = $all('.glossary-item');
    let anyVisible = false;
    items.forEach(item => {
      const match = !q || item.textContent.toLowerCase().includes(q);
      item.classList.toggle('hidden', !match);
      if (match) anyVisible = true;
    });
    if (emptyMsg) emptyMsg.classList.toggle('hidden', anyVisible);
  });
}

/* ---------------------------------------------------------------------
   13l) POST-DOWNLOAD EMAIL CAPTURE
   --------------------------------------------------------------------- */
const EMAIL_CAPTURE_CONFIG = {
  // Set this to the address that should receive lead notifications (e.g.
  // 'hello@draftb2b.com'). Each interested visitor's own mail client
  // opens a pre-filled message addressed to it when they submit the
  // banner below — no backend or server-side storage involved. While
  // empty, submissions are only remembered locally (so the banner
  // doesn't ask again) and the visitor just sees a thank-you message.
  notifyEmail: '',
};
const EMAIL_CAPTURE_KEY = 'draftb2b_email_capture_v1';
const EMAIL_CAPTURE_DISMISS_KEY = 'draftb2b_email_capture_dismissed';

function buildEmailCaptureBanner() {
  const el = document.createElement('div');
  el.id = 'email-capture-banner';
  el.className = 'email-capture-banner';
  el.innerHTML = `
    <button type="button" class="email-capture-close" aria-label="Close">&times;</button>
    <strong class="email-capture-title"></strong>
    <p class="email-capture-desc"></p>
    <form class="email-capture-form">
      <input type="email" class="field-input email-capture-input" required>
      <button type="submit" class="btn-primary btn-sm email-capture-submit"></button>
    </form>
  `;
  document.body.appendChild(el);
  el.querySelector('.email-capture-close').addEventListener('click', dismissEmailCapture);
  el.querySelector('.email-capture-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = el.querySelector('.email-capture-input');
    const email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast(t('email_capture_error'));
      return;
    }
    try { localStorage.setItem(EMAIL_CAPTURE_KEY, JSON.stringify({ email, ts: Date.now() })); } catch (err) { /* storage unavailable */ }
    if (EMAIL_CAPTURE_CONFIG.notifyEmail) {
      const subject = encodeURIComponent('Nuevo interés en DraftB2B');
      const body = encodeURIComponent(`Correo del interesado: ${email}`);
      window.open(`mailto:${EMAIL_CAPTURE_CONFIG.notifyEmail}?subject=${subject}&body=${body}`, '_blank');
    }
    toast(t('email_capture_thanks'));
    hideEmailCaptureBanner();
  });
  return el;
}

function showEmailCaptureBanner() {
  try {
    if (localStorage.getItem(EMAIL_CAPTURE_KEY)) return; // already captured on this device
    if (sessionStorage.getItem(EMAIL_CAPTURE_DISMISS_KEY)) return; // dismissed earlier this session
  } catch (e) { /* storage unavailable, fall through and show it */ }
  const el = $('#email-capture-banner') || buildEmailCaptureBanner();
  el.querySelector('.email-capture-title').textContent = t('email_capture_title');
  el.querySelector('.email-capture-desc').textContent = t('email_capture_desc');
  el.querySelector('.email-capture-input').placeholder = t('email_capture_placeholder');
  el.querySelector('.email-capture-submit').textContent = t('email_capture_btn');
  el.classList.remove('show');
  setTimeout(() => el.classList.add('show'), 10);
}

function hideEmailCaptureBanner() {
  $('#email-capture-banner')?.classList.remove('show');
}

function dismissEmailCapture() {
  try { sessionStorage.setItem(EMAIL_CAPTURE_DISMISS_KEY, '1'); } catch (e) { /* storage unavailable */ }
  hideEmailCaptureBanner();
}

/* ---------------------------------------------------------------------
   14) INIT & EVENT BINDING
   --------------------------------------------------------------------- */
function init() {
  initTheme();
  loadAutosave();
  readLangFromUrl();
  applyI18n();
  $('#bilingual-toggle').checked = state.bilingual;
  $('#bilingual-lang-picker').classList.toggle('hidden', !state.bilingual);
  selectTemplate(state.docType);
  renderLogo();
  initSignaturePad();
  renderSignatureSlots();
  $('#toggle-noncompete').checked = state.optionalClauses.nonCompete;
  $('#toggle-nonsolicit').checked = state.optionalClauses.nonSolicit;
  $('#toggle-arbitration').checked = state.optionalClauses.arbitration;
  $('#watermark-select').value = state.watermark;
  applySharedDataFromUrl();
  goToStep(1);
  updatePreview();

  $('#year').textContent = new Date().getFullYear();

  initFaqAccordion();
  initGuideAccordion();
  initDonationModal();
  initMobilePreview();
  initOptionalClauses();
  initPenaltyCalculator();
  initChecklist();
  initWatermarkSelector();
  initShareLink();
  initPrint();
  initIcsReminder();
  initGlossary();
  updateChecklistGate();

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
    syncLangUrl();
    renderSignatureSlots();
    renderCustomClausesList();
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
  $('#btn-verify-copy')?.addEventListener('click', copyVerifyLink);

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
