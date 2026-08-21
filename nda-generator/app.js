/* =========================================================================
   Generador de NDA y Contratos B2B — app.js
   100% client-side. Sin dependencias de backend.
   ========================================================================= */

/* ---------------------------------------------------------------------
   1) i18n DICTIONARY
   --------------------------------------------------------------------- */
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
  }
};

/* ---------------------------------------------------------------------
   2) STATE
   --------------------------------------------------------------------- */
const state = {
  lang: localStorage.getItem('ndagen_lang') || 'es',
  docType: 'nda_unilateral',
  step: 1,
  totalSteps: 4,
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $all = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.es[key] || key;
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

  $('#lang-es').setAttribute('aria-pressed', String(state.lang === 'es'));
  $('#lang-en').setAttribute('aria-pressed', String(state.lang === 'en'));

  updatePartyLegends();
  updateObjectLabel();
  updateDurationLabel();
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

function durationText(value) {
  switch (value) {
    case '1': return t('duration_1');
    case '3': return t('duration_3');
    case '5': return t('duration_5');
    default: return t('duration_indefinite');
  }
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

  let roleA, roleB, title, intro, c1title, c1body, c2title, c2body;

  if (docType === 'nda_unilateral') {
    roleA = t('role_discloser');
    roleB = t('role_receiver');
    title = t('doc_title_nda_unilateral');
    intro = t('intro_nda');
    c1title = t('c1_title_nda');
    c1body = t('c1_body_nda_uni');
    c2title = t('c2_title_nda_uni');
    c2body = t('c2_body_nda_uni');
  } else if (docType === 'nda_mutual') {
    roleA = t('role_first');
    roleB = t('role_second');
    title = t('doc_title_nda_mutual');
    intro = t('intro_nda');
    c1title = t('c1_title_nda');
    c1body = t('c1_body_nda_mutual');
    c2title = t('c2_title_nda_mutual');
    c2body = t('c2_body_nda_mutual');
  } else {
    roleA = t('role_provider');
    roleB = t('role_client');
    title = t('doc_title_b2b_services');
    intro = t('intro_b2b');
    c1title = t('c1_title_b2b');
    c1body = t('c1_body_b2b');
    c2title = t('c2_title_b2b');
    c2body = t('c2_body_b2b');
  }

  const fill = (str) => str
    .replace(/\{nameA\}/g, nameA).replace(/\{nameB\}/g, nameB)
    .replace(/\{idA\}/g, idA).replace(/\{idB\}/g, idB)
    .replace(/\{addrA\}/g, addrA).replace(/\{addrB\}/g, addrB)
    .replace(/\{roleA\}/g, `<strong>${roleA}</strong>`).replace(/\{roleB\}/g, `<strong>${roleB}</strong>`)
    .replace(/\{purpose\}/g, purpose)
    .replace(/\{duration\}/g, `<strong>${duration}</strong>`)
    .replace(/\{jurisdiction\}/g, `<strong>${jurisdiction}</strong>`);

  const isB2b = docType === 'b2b_services';

  const clauses = [];
  clauses.push({ title: c1title, body: c1body });
  clauses.push({ title: c2title, body: c2body });
  if (!isB2b) clauses.push({ title: t('c3_title'), body: t('c3_body') });
  clauses.push({
    title: isB2b ? t('c4_title_b2b') : t('c4_title_nda'),
    body: isB2b ? t('c4_body_b2b') : t('c4_body_nda')
  });
  if (!isB2b) clauses.push({ title: t('c5_title'), body: t('c5_body') });
  clauses.push({
    title: isB2b ? t('c6_title_b2b') : t('c6_title_nda'),
    body: isB2b ? t('c6_body_b2b') : t('c6_body_nda')
  });
  clauses.push({ title: isB2b ? t('c7_title_b2b') : t('c7_title'), body: t('c7_body') });
  clauses.push({ title: isB2b ? t('c8_title_b2b') : t('c8_title'), body: t('c8_body') });

  const clausesHtml = clauses.map(c => `
    <h2 class="clause-title">${escapeHtml(c.title)}</h2>
    <p>${fill(escapeHtml(c.body))}</p>
  `).join('');

  const signPlace = fill(escapeHtml(t('sign_place_date')));

  return `
    <h1>${escapeHtml(title)}</h1>
    <div class="doc-subtitle">${escapeHtml(t('doc_subtitle').replace('{date}', formatDate(lang)))}</div>
    <p>${fill(escapeHtml(intro))}</p>
    ${clausesHtml}
    <p style="margin-top:1.5rem;">${signPlace}</p>
    <div class="sign-block">
      <div class="sign-col">
        <div class="sign-line">${nameA}</div>
        <div>${escapeHtml(t('sign_name_label'))}: ${roleA}</div>
      </div>
      <div class="sign-col">
        <div class="sign-line">${nameB}</div>
        <div>${escapeHtml(t('sign_name_label'))}: ${roleB}</div>
      </div>
    </div>
  `;
}

function updatePreview() {
  $('#pdf-content').innerHTML = buildDocumentHtml();
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
  updatePreview();
}

/* ---------------------------------------------------------------------
   7) ACTIONS: PDF / COPY / CLEAR
   --------------------------------------------------------------------- */
function downloadPdf() {
  const el = $('#pdf-content');
  const opt = {
    margin: [15, 15, 18, 15],
    filename: `${state.docType}_${Date.now()}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };
  const btn = $('#btn-pdf');
  const originalHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span>${escapeHtml(t('pdf_generating'))}</span>`;
  html2pdf().set(opt).from(el).save().finally(() => {
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  });
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
  goToStep(1);
  updatePreview();
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
   10) FAQ ACCORDION
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
   11) INIT & EVENT BINDING
   --------------------------------------------------------------------- */
function init() {
  initTheme();
  applyI18n();
  selectTemplate(state.docType);
  goToStep(1);
  updatePreview();

  $('#year').textContent = new Date().getFullYear();

  initFaqAccordion();

  // Template cards
  $all('.template-card').forEach(card => {
    card.addEventListener('click', () => selectTemplate(card.dataset.template));
  });

  // Language switch
  $('#lang-es').addEventListener('click', () => { state.lang = 'es'; localStorage.setItem('ndagen_lang', 'es'); applyI18n(); updatePreview(); });
  $('#lang-en').addEventListener('click', () => { state.lang = 'en'; localStorage.setItem('ndagen_lang', 'en'); applyI18n(); updatePreview(); });

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

  // Live preview updates
  $('#nda-form').addEventListener('input', updatePreview);
  $('#nda-form').addEventListener('change', updatePreview);

  // Actions
  $('#btn-pdf').addEventListener('click', downloadPdf);
  $('#btn-copy').addEventListener('click', copyText);
  $('#btn-clear').addEventListener('click', clearForm);

  // Prevent implicit form submit on Enter
  $('#nda-form').addEventListener('submit', (e) => e.preventDefault());
}

document.addEventListener('DOMContentLoaded', init);
