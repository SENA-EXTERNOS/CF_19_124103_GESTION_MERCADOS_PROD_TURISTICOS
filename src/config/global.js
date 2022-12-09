export default {
  global: {
    componenteFormativo: 'Ejecución de eventos',
    descripcionCurso:
      'En este recurso el aprendiz conocerá las herramientas más usadas para la ejecución de eventos, así como los tipos que se realizan hoy en día, bajo procesos tan importantes como el registro de visitantes y el manejo de equipos para su ejecución. Se complementará dicha información con el estudio del plan de contingencia, herramienta esencial para la ejecución de eventos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ejecución de eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Registros',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Inventarios',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ofimática para eventos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ejecución de eventos',
      referencia:
        'Museo Nacional de Colombia (2021). <em>La historia del museo y el museo en la historia.</em>',
      tipo: 'Artículo web',
      link:
        'https://museonacional.gov.co/exposiciones/permanentes/Paginas/Primer_piso/1.aspx',
    },
    {
      tema: 'Ejecución de eventos',
      referencia:
        'Blog Flousbury Café. (2021, enero 15) <em>2021, el año de los eventos y las celebraciones. [Web log bost] Blog Flousbury</em>',
      tipo: 'Blog',
      link:
        'https://eventosempresa.fosburycafe.es/experienciaseventosbarcelona/2021-el-ano-de-los-eventos-y-las-celebraciones/',
    },
    {
      tema: 'Turismo de reuniones y eventos',
      referencia:
        'Perlaza Lopera, C., Correa Cortes, J. S. & Tamayo Galeano, C. (2015). Turismo de reuniones y eventos. <em>Revista Intersección: Eventos, turismo, gastronomía y moda</em>, (3) p. 38-53.',
      tipo: 'Artículo',
      link: 'https://www.academia.edu/44441344/Turismo_de_reuniones_y_eventos',
    },
    {
      tema: 'Turismo de eventos mega eventos y gobernanza territorial',
      referencia:
        'Vico, R. P. (2019) Turismo de eventos, <em>mega-eventos y gobernanza territorial. Revista Geográfica de Valparaíso</em>, (55) p. 1-20',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/publication/336741856_Turismo_de_eventos_mega-eventos_y_gobernanza_territorial',
    },
  ],
  glosario: [
    {
      termino: '<em>Afterwork</em>',
      significado:
        'también conocido como <em>after office</em>. Es una reunión informal con los compañeros de trabajo que tiene lugar después de haber concluido la jornada laboral.',
    },
    {
      termino: 'Avatar',
      significado:
        'en informática se denomina así a la representación gráfica que, en el ámbito de Internet y las nuevas tecnologías de la comunicación, se asocia a un usuario para su identificación en el mundo virtual. Los avatares pueden ser fotografías, dibujos o incluso representaciones tridimensionales.',
    },
    {
      termino: 'Almacenamiento en la nube',
      significado:
        'permite al gestor de eventos almacenar y consultar textos, hojas de cálculo, imágenes, videos y similares desde un dispositivo con conexión a Internet. Así mismo, los usuarios del servicio pueden acceder a ese tipo de información.',
    },
    {
      termino: '<em>Happy hour</em>',
      significado:
        'su traducción literal sería ‘hora feliz’, pero en realidad hace referencia a la estrategia comercial de algunos bares o establecimientos similares, consistente en ofrecer bebida gratuita a los clientes cuando estos han consumido con anterioridad la primera a precio normal.',
    },
    {
      termino: '<em>Influencers</em>',
      significado:
        'son personas que cuentan con cierta credibilidad acerca de un tema. Pueden popularizar un negocio y fomentar su visibilidad <em>online</em>.',
    },
    {
      termino: 'MICE',
      significado:
        'el término y acrónimo se usa ampliamente en la práctica del turismo internacional de negocios para referirse a cuatro palabras clave que caracterizan las áreas de turismo de negocios: reuniones, incentivos, conferencias y eventos.',
    },
    {
      termino: '<em>Networking</em>',
      significado:
        'realización de ciertas acciones por parte de profesionales y empresas en busca de aumentar su red de contactos.',
    },
    {
      termino: 'Ofimática',
      significado:
        'es la combinación de <em>hardware</em> y <em>software</em> para elaborar, automatizar y registrar de forma digital la información que necesita una oficina para llevar a cabo los procesos y metodologías de manera correcta.',
    },
    {
      termino: '<em>Online</em>',
      significado:
        'es una palabra inglesa que significa ‘en línea’. El concepto se utiliza en el ámbito de la informática para nombrar algo que está conectado o a alguien que está haciendo uso de una red (generalmente, en Internet).',
    },
    {
      termino: '<em>Streaming</em>',
      significado:
        'es el concepto que hace referencia a la visualización de videos o música en tiempo real a través de una serie de plataformas destinadas a ello.',
    },
  ],
  referencias: [
    {
      referencia:
        '<strong>Página Web:</strong> Blog Flousbury Café. (2021, enero 15) <em>2021, el año de los eventos y las celebraciones</em>. [Web log bost] Blog Flousbury Café.',
      link:
        'https://eventosempresa.fosburycafe.es/experienciaseventosbarcelona/2021-el-ano-de-los-eventos-y-las-celebraciones/',
    },
    {
      referencia:
        '<strong>Artículo de revista:</strong> Freyle, J. E., Rincón, E. C., & Gómez, L. C. (2014). Memoria organizacional en la retroalimentación de clientes. <em>AD-minister</em>, (25), p.121-138.',
      link: '',
    },
    {
      referencia:
        '<strong>Artículo de revista:</strong> Melián González, S. & Bulchand Gidumal, J. (2015) Competencias requeridas por el nuevo trabajo en turismo. <em>Investigaciones turísticas</em>, (10), p. 76-89',
      link: '',
    },
    {
      referencia:
        '<strong>Página web:</strong> Museo Nacional de Colombia. (2022). <em>Museo Nacional de Colombia</em>.',
      link: 'https://www.museonacional.gov.co/',
    },
    {
      referencia:
        '<strong>Archivo PDF:</strong> Servicio Nacional de Aprendizaje - SENA (2017). <em>Módulo de Equipos para la Guianza.</em>',
      link: '',
    },
    {
      referencia:
        '<strong>Página Web:</strong> Real Academia de la Lengua Española – RAE (2021) <em>Inventario.</em>',
      link: 'https://dle.rae.es/inventario',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
