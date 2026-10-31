import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  // Etapa real del análisis en curso (13/10/2026), para la pantalla de espera.
  progresoAnalisis: defineTable({ pid: v.string(), etapa: v.string(), t: v.number() }).index("by_pid", ["pid"]),
  users: defineTable({
    tokenIdentifier: v.optional(v.string()),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    image: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    dni: v.optional(v.string()),
    domicilio: v.optional(v.string()),
    plan: v.optional(v.union(v.literal("free"), v.literal("premium"), v.literal("vip"))),
    points: v.optional(v.number()),
    pdfCredits: v.optional(v.number()),
    stripeCustomerId: v.optional(v.string()),
    // Hercules Commerce customer ID (usado para plan empresas)
    herculesCustomerId: v.optional(v.string()),
    isAdmin: v.optional(v.boolean()),
    // Código del creador que apoyó este usuario al registrarse
    codigoCreadorUsado: v.optional(v.string()),
    // Rate limiting: recompensas de anuncios por día
    adRewardsToday: v.optional(v.number()),
    adRewardsDate: v.optional(v.string()), // YYYY-MM-DD
    // Rate limiting: análisis IA por día
    aiAnalysisToday: v.optional(v.number()),
    aiAnalysisDate: v.optional(v.string()), // YYYY-MM-DD
    // Plan empresas: nombre de empresa
    empresaNombre: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"])
    // Requerido por @convex-dev/auth: índice literal "email" en users
    // (uniqueUserWithVerifiedEmail lo consulta por ese nombre).
    .index("email", ["email"]),

  payments: defineTable({
    // Opcional: en el flujo sin registro no hay usuario
    userId: v.optional(v.id("users")),
    stripeSessionId: v.string(),
    producto: v.union(v.literal("pdf_unico"), v.literal("pdf_pack_10"), v.literal("vip_vitalicio")),
    importe: v.number(),
    status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    createdAt: v.string(),
    // Creador al que se atribuye esta compra
    codigoCreador: v.optional(v.string()),
    // Control de email de carrito abandonado
    abandonmentEmailSent: v.optional(v.boolean()),
    // Recurso concreto comprado (para adjuntar su PDF por email tras el pago)
    recursoId: v.optional(v.id("recursos")),
    // ── Flujo sin registro: datos para generar y enviar el PDF tras el pago ──
    sinRegistro: v.optional(v.boolean()),
    email: v.optional(v.string()),
    nombre: v.optional(v.string()),
    dni: v.optional(v.string()),
    domicilio: v.optional(v.string()),
    carta: v.optional(v.string()),
    expediente: v.optional(v.string()),
    multaImporte: v.optional(v.string()),
    infraccion: v.optional(v.string()),
    fecha: v.optional(v.string()),
    plazoRecurso: v.optional(v.string()),
    tipo: v.optional(v.union(v.literal("multa"), v.literal("sancion"))),
  })
    .index("by_user", ["userId"])
    .index("by_session", ["stripeSessionId"])
    .index("by_creador", ["codigoCreador"]),

  recursos: defineTable({
    userId: v.id("users"),
    expediente: v.optional(v.string()),
    importe: v.optional(v.string()),
    infraccion: v.optional(v.string()),
    provincia: v.optional(v.string()),
    fecha: v.optional(v.string()),
    plazo: v.optional(v.string()),
    // Texto completo del recurso para poder re-descargar el PDF
    carta: v.optional(v.string()),
    // Resultados del análisis IA
    // `viabilidad` está obsoleto (ya no se guarda); se conserva opcional para no invalidar documentos antiguos.
    viabilidad: v.optional(v.number()),
    nivel: v.optional(v.union(v.literal("alta"), v.literal("media"), v.literal("baja"), v.literal("no_valorable"))),
    status: v.union(v.literal("pendiente"), v.literal("enviado"), v.literal("resuelto")),
    createdAt: v.string(),
  }).index("by_user", ["userId"]),

  // ── Valoraciones de usuarios ──────────────────────────────────────────────
  valoraciones: defineTable({
    userId: v.id("users"),
    nombre: v.string(),           // nombre público (puede ser anónimo)
    ciudad: v.optional(v.string()),
    estrellas: v.number(),        // 1-5
    texto: v.string(),
    multa: v.optional(v.string()), // ej: "200€ · Exceso velocidad"
    resultado: v.optional(v.union(v.literal("anulada"), v.literal("reducida"), v.literal("pendiente"))),
    aprobada: v.boolean(),        // moderación: solo aparecen las aprobadas
    createdAt: v.string(),
  })
    .index("by_user", ["userId"])
    .index("by_aprobada", ["aprobada"]),

  // ── Reseñas de usuarios con fotos ("cuéntalo como un periodista") ──────────
  // Opiniones reales de propietarios sobre cada ficha de vehículo
  // (coches/motos/patinetes). Fuentes: formulario web, cosecha de comentarios
  // de Facebook (publicaciones propias) e importación manual. NADA se publica
  // sin pasar por moderación (estado "pendiente" → "aprobada").
  resenasVehiculos: defineTable({
    vehiculoTipo: v.union(
      v.literal("coches"),
      v.literal("motos"),
      v.literal("patinetes"),
    ),
    vehiculoSlug: v.string(), // slug de la ficha, ej. "yamaha-mt-07-2024-..."
    vehiculoNombre: v.string(), // nombre para mostrar, ej. "Yamaha MT-07"
    autor: v.string(), // nombre o nick público
    estrellas: v.optional(v.number()), // 1-5; null = "sin nota" (p. ej. FB)
    titular: v.optional(v.string()),
    texto: v.string(),
    fotos: v.array(v.object({ storageId: v.id("_storage") })),
    fuente: v.union(
      v.literal("web"),
      v.literal("facebook"),
      v.literal("importacion"),
    ),
    fbCommentId: v.optional(v.string()), // dedupe de la cosecha
    fbCommentUrl: v.optional(v.string()), // permalink al comentario original
    fbAutor: v.optional(v.string()),
    estado: v.union(
      v.literal("pendiente"),
      v.literal("aprobada"),
      v.literal("rechazada"),
    ),
    consentimiento: v.boolean(), // autorización de publicación de fotos
    verificado: v.boolean(), // insignia "Propietario verificado" (manual)
    destacada: v.boolean(), // "Probador del mes" (manual)
    createdAt: v.number(), // epoch ms
  })
    .index("by_vehiculo_estado", ["vehiculoTipo", "vehiculoSlug", "estado"])
    .index("by_estado", ["estado"])
    .index("by_fbCommentId", ["fbCommentId"]),

  // ── Tabla de creadores/youtubers ──────────────────────────────────────────
  creadores: defineTable({
    // Código único que da el creador a su comunidad (ej: "JUANITO10")
    codigo: v.string(),
    nombre: v.string(),
    // Canal / red social del creador
    canal: v.optional(v.string()),
    // Email para notificaciones y pagos
    email: v.optional(v.string()),
    // Usuario de la app que se auto-registró como creador (programa "Gana dinero")
    userId: v.optional(v.id("users")),
    // Porcentaje de comisión (0-100). Por defecto 10%
    comisionPct: v.number(),
    // Acumulados
    totalVentas: v.number(),
    totalComision: v.number(), // en céntimos
    totalUsos: v.number(),
    activo: v.boolean(),
    createdAt: v.string(),
    // Descarga gratuita del recurso: los creadores dados de alta por el admin
    // la tienen automáticamente (userId === undefined). Los que se auto-registran
    // desde "Gana dinero" (userId definido) necesitan aprobación manual del admin.
    gratisAprobado: v.optional(v.boolean()),
    // Datos de pago para recibir la comisión por transferencia (introducidos por el propio creador)
    iban: v.optional(v.string()),
    titular: v.optional(v.string()),
    // Total ya pagado al creador (en céntimos). Pendiente = totalComision - comisionPagada
    comisionPagada: v.optional(v.number()),
  }).index("by_codigo", ["codigo"]).index("by_user", ["userId"]).index("by_email", ["email"]),

  // ── Historial de pagos de comisiones a creadores/afiliados (registrado por el admin) ──
  pagosAfiliados: defineTable({
    creadorId: v.id("creadores"),
    importeCentimos: v.number(),
    notas: v.optional(v.string()),
    createdAt: v.string(),
  }).index("by_creador", ["creadorId"]),

  // ── Blog posts dinámicos (admin puede crear desde el panel) ──────────────
  blogPosts: defineTable({
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    category: v.string(),
    date: v.string(),
    readTime: v.number(),
    keywords: v.array(v.string()),
    content: v.string(),
    published: v.boolean(),
    createdAt: v.string(),
    updatedAt: v.string(),
    // Origen IA (comparador v2): borradores pendientes de revisión humana
    origenIA: v.optional(v.string()),
    revisionPendiente: v.optional(v.boolean()),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"]),

  // Rate limiting para análisis IA de usuarios anónimos (sin registro).
  // El fingerprint lo genera el cliente y lo guarda en localStorage.
  anonymousLimits: defineTable({
    fingerprint: v.string(),
    date: v.string(), // YYYY-MM-DD
    count: v.number(),
  }).index("by_fingerprint", ["fingerprint"]),

  // Sistema de autenticación simple (sin JWT)
  sessions: defineTable({
    token: v.string(),
    userId: v.id("users"),
    createdAt: v.number(),
    expiresAt: v.number(),
  }).index("by_token", ["token"]),

  // Calendario de lanzamientos 2026-2027 (página /calendario-lanzamientos-2026-2027).
  // Se siembra y actualiza vía lanzamientos:upsert (ver docs/calendario-lanzamientos.md).
  lanzamientos: defineTable({
    marca: v.string(),
    modelo: v.string(),
    segmento: v.string(),
    fechaPrevista: v.string(),
    fechaConfirmada: v.boolean(),
    fuenteUrl: v.optional(v.string()),
    notas: v.optional(v.string()),
    imagen: v.optional(v.string()),
    orden: v.number(),
  }).index("by_orden", ["orden"]).index("by_marca_modelo", ["marca", "modelo"]),

  // ── Caché del comparador v2 (búsqueda libre con IA) ─────────────────────────
  // Clave normalizada marca|modelo (minúsculas, sin tildes). La segunda búsqueda
  // del mismo modelo se sirve instantánea sin llamar a la IA.
  comparadorCache: defineTable({
    clave: v.string(),
    marca: v.string(),
    modelo: v.string(),
    ficha: v.string(), // JSON de la ficha (tipo FichaIA en convex/comparador.ts)
    confianza: v.union(v.literal("alta"), v.literal("media"), v.literal("baja")),
    camposEstimados: v.array(v.string()),
    fuenteUrls: v.array(v.string()),
    createdAt: v.string(), // ISO
    hits: v.number(), // veces servido desde caché
  }).index("by_clave", ["clave"]),

  // ── Caché de análisis de multas (03/10/2026) ──────────────────────────────
  // Garantiza que analizar la misma multa dos veces devuelva SIEMPRE el mismo
  // resultado: la primera vez se analiza con IA y se guarda; las siguientes se
  // sirven desde caché. Claves: hash SHA-256 del documento (mismo archivo) y
  // número de expediente normalizado (reescaneo/foto distinta de la misma multa).
  analisisCache: defineTable({
    expedienteKey: v.string(), // expediente normalizado (mayúsculas, sin espacios/guiones) o "SIN_EXPEDIENTE"
    docHash: v.string(), // SHA-256 del base64 del documento
    resultado: v.string(), // JSON del análisis + carta (con [COMPLETAR])
    createdAt: v.string(), // ISO
    hits: v.number(), // veces servido desde caché
  })
    .index("by_expediente", ["expedienteKey"])
    .index("by_docHash", ["docHash"]),

  emailCodes: defineTable({
    email: v.string(),
    code: v.string(),
    expiresAt: v.number(),
    used: v.boolean(),
    attempts: v.optional(v.number()),
    createdAt: v.optional(v.number()),
  }).index("by_email", ["email"]),

  // ── Newsletter "La semana del motor en 5 minutos" ──────────────────────────
  // Suscripciones gestionadas en convex/newsletter.ts. El envío semanal lo hace
  // el cron `recurretumulta-newsletter-motor` vía newsletter:enviarEdicionSemanal.
  newsletterSubs: defineTable({
    email: v.string(), // normalizado a minúsculas
    fechaAlta: v.string(), // ISO
    activo: v.boolean(),
    origen: v.string(), // ej: "motor", "blog-index", "ficha-coche"
    tokenBaja: v.string(), // token aleatorio para la baja en 1 clic
  }).index("by_email", ["email"]).index("by_tokenBaja", ["tokenBaja"]).index("by_activo", ["activo"]),

  // ── Cazachollos: avisos de bajadas de precio por modelo ────────────────────
  // Gestionado en convex/alertasPrecio.ts. El cron recurretumulta-radar-precios
  // lee las suscripciones activas (porModelo) y envía los avisos por email.
  alertasPrecio: defineTable({
    email: v.string(), // normalizado a minúsculas
    cocheId: v.string(), // id exacto de la ficha en el comparador
    precioObjetivo: v.optional(v.number()), // avisar si el PVP baja de esto; ausente = cualquier bajada
    token: v.string(), // token aleatorio para la baja en 1 clic
    activo: v.boolean(),
    creadoEn: v.number(), // epoch ms
  }).index("by_email_coche", ["email", "cocheId"])
    .index("by_token", ["token"])
    .index("by_coche_activo", ["cocheId", "activo"]),
  // Caza de monos (05/10/2026): ranking de cazadores. Sin cuentas: UUID anónimo
  // en localStorage + apodo opcional. El progreso se sincroniza desde el cliente.
  monkeyHunters: defineTable({
    hunterId: v.string(), // UUID anónimo, generado en el navegador
    nickname: v.optional(v.string()), // apodo opcional, para salir en el ranking
    found: v.number(), // monos cazados en la temporada activa (máx. 350)
    updatedAt: v.number(), // epoch ms
  }).index("by_hunterId", ["hunterId"])
    .index("by_found", ["found"]),
  // Cazas del mono legendario dorado (07/10/2026): 1 por temporada. Registro
  // para que Daniel vea quién lo ha cogido y cuándo.
  legendaryCatches: defineTable({
    hunterId: v.string(),
    nickname: v.optional(v.string()),
    temporada: v.number(),
    caughtAt: v.number(), // epoch ms
    ruta: v.string(), // página donde estaba escondido
  }).index("by_temporada", ["temporada"])
    .index("by_hunterId", ["hunterId"]),
  // Buscador de coches (08/10/2026): caché de búsquedas de anuncios (TTL 1h)
  // para no saturar los portales. La clave es un hash de los parámetros.
  buscadorCochesCache: defineTable({
    queryHash: v.string(),
    params: v.string(), // JSON de los parámetros (auditoría)
    anuncios: v.array(v.object({
      id: v.string(),
      portal: v.string(), // "wallapop" | "milanuncios" | "coches.net" | "autoscout24"
      titulo: v.string(),
      precio: v.number(),
      km: v.optional(v.number()),
      ano: v.optional(v.number()),
      ubicacion: v.optional(v.string()),
      url: v.string(),
      imagen: v.optional(v.string()),
      vendedorTipo: v.optional(v.string()), // "particular" | "profesional"
      verificado: v.boolean(),
      puntuacion: v.number(), // 0-100
      difMercadoPct: v.optional(v.number()), // % vs media mercado (negativo = más barato)
    })),
    fuentes: v.object({
      wallapop: v.string(),
      milanuncios: v.string(),
      cochesNet: v.string(),
      autoscout24: v.string(),
    }), // "ok" | "fallo" | "vacio" por portal
    creadoEn: v.number(), // epoch ms
  }).index("by_queryHash", ["queryHash"]),
  // Averías típicas reportadas por modelo (08/10/2026): agregación automática
  // desde foros y opiniones de usuarios (forocoches, foros de modelo, etc.).
  // Daniel NO las escribe a mano: se investigan vía web + Groq y se cachean 30 días.
  // Si no hay información fiable: estado "sin_datos" (nunca inventar).
  averiasTipicas: defineTable({
    modeloId: v.string(), // id de la ficha en COCHES_COMPARADOR (o "marca:modelo" si no hay ficha)
    marca: v.string(),
    modelo: v.string(),
    estado: v.union(v.literal("ok"), v.literal("sin_datos")),
    averias: v.array(v.object({
      titulo: v.string(), // ej. "Bomba de agua"
      detalle: v.string(), // ej. "Reportada a partir de los 80.000 km en foros"
      frecuencia: v.union(v.literal("alta"), v.literal("media"), v.literal("baja")),
    })),
    fuentes: v.array(v.object({
      titulo: v.string(),
      url: v.string(),
      dominio: v.string(),
    })),
    actualizadoEn: v.number(), // epoch ms
  }).index("by_modeloId", ["modeloId"]),
  // Alertas del Buscador de coches (08/10/2026): el usuario guarda una búsqueda
  // y el sistema avisa (email; WhatsApp preparado para cuando haya API) cuando:
  // a) baja el precio de un anuncio ya visto, b) aparece un anuncio nuevo más
  // barato que cumple sus filtros. Un cron llama a comprobarAlertas.
  alertasBuscador: defineTable({
    email: v.string(), // normalizado a minúsculas
    canal: v.union(v.literal("email"), v.literal("whatsapp")),
    telefono: v.optional(v.string()),
    queryHash: v.string(),
    params: v.string(), // JSON de BusquedaParams
    marca: v.string(),
    modelo: v.string(),
    ultimoMinPrecio: v.optional(v.number()),
    ultimosPrecios: v.array(v.object({ id: v.string(), precio: v.number() })),
    activo: v.boolean(),
    creadoEn: v.number(), // epoch ms
    ultimoAvisoEn: v.optional(v.number()),
  }).index("by_email_queryHash", ["email", "queryHash"])
    .index("by_activo", ["activo"]),

  // ── Audiencia (18/10/2026): votos anónimos en fichas y reacciones en el blog ──
  // Sin datos personales: `voter` es un SHA-256 (con sal) de un id aleatorio
  // del localStorage del navegador; nunca se guarda IP, email ni user-agent.
  // Nada de esto entra en el JSON-LD (sin aggregateRating).
  audienciaFicha: defineTable({
    tipo: v.union(v.literal("coches"), v.literal("motos"), v.literal("patinetes")),
    slug: v.string(),
    estrellasSuma: v.number(),
    estrellasVotos: v.number(),
    compraSi: v.number(),
    compraPienso: v.number(),
    compraNo: v.number(),
    visitas: v.number(),
    semana: v.string(), // "2026-W42" (UTC)
    visitasSemana: v.number(),
  }).index("by_tipo_slug", ["tipo", "slug"]),
  audienciaMes: defineTable({
    mes: v.string(), // "2026-10" (UTC)
    tipo: v.union(v.literal("coches"), v.literal("motos"), v.literal("patinetes")),
    slug: v.string(),
    estrellasSuma: v.number(),
    estrellasVotos: v.number(),
    visitas: v.number(),
  })
    .index("by_mes_tipo_slug", ["mes", "tipo", "slug"])
    .index("by_mes_tipo_votos", ["mes", "tipo", "estrellasVotos"])
    .index("by_mes_tipo_visitas", ["mes", "tipo", "visitas"]),
  audienciaVoto: defineTable({
    voter: v.string(),
    tipoVoto: v.union(v.literal("estrellas"), v.literal("compra"), v.literal("duelo"), v.literal("reaccion")),
    ambito: v.string(), // coches | motos | patinetes | blog
    clave: v.string(), // slug de la ficha/post, o "a|b" en los duelos
    valor: v.string(),
    mes: v.string(),
    t: v.number(),
  }).index("by_voter_clave", ["voter", "tipoVoto", "ambito", "clave"]),
  audienciaDuelo: defineTable({
    tipo: v.union(v.literal("coches"), v.literal("motos"), v.literal("patinetes")),
    a: v.string(), // slugs ordenados alfabéticamente (a < b)
    b: v.string(),
    votosA: v.number(),
    votosB: v.number(),
  }).index("by_par", ["tipo", "a", "b"]),
  audienciaReacciones: defineTable({
    slug: v.string(),
    like: v.number(),
    wow: v.number(),
    angry: v.number(),
  }).index("by_slug", ["slug"]),
  // Límite diario por votante (votos) y por sesión (visitas). Se purga a diario.
  audienciaLimite: defineTable({
    clave: v.string(), // "v:<voter>" | "s:<sesión>"
    dia: v.string(), // "2026-10-18" (UTC)
    n: v.number(),
  }).index("by_clave_dia", ["clave", "dia"]).index("by_dia", ["dia"]),
  // Deduplicación de visitas por sesión (una por ficha y sesión). Se purga a diario.
  audienciaVisitaSesion: defineTable({
    sesion: v.string(),
    ambito: v.string(),
    slug: v.string(),
    dia: v.string(),
  }).index("by_sesion_slug", ["sesion", "ambito", "slug"]).index("by_dia", ["dia"]),
});

