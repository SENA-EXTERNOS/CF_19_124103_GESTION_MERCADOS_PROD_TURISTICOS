<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ejecución de eventos
      
    .row.justify-content-center
      .col-lg-3.justify-content-center(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema1/t1-1.svg', alt='Texto que describa la imagen')
      .col-lg-9.col-xs-6.mt-3
        p La demanda actual en el segmento turístico de eventos exige una evolución constante a la oferta. Los prestadores de servicios turísticos pertenecientes al producto MICE (Reuniones, Incentivos, Conferencias y Exposiciones en español), sus aliados y proveedores,  se reinventan permanentemente ajustando sus propuestas a las nuevas exigencias en el mercado, creando experiencias únicas que satisfacen los estándares de servicio del usuario.

    .row.justify-content-center.mt-5
      .col-lg-10
        p Algunas tendencias que se presentan hoy en día:

    .bkg-slyder.px-5.py-5.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Eventos digitales]        
            p Es similar a un evento tradicional, marca la diferencia al ser en línea y permitir que los asistentes se reúnan desde lugares diversos a través de una plataforma.
            p Presenta algunas ventajas como, por ejemplo, proporcionar al organizador la alternativa de ampliar el número de participantes y ponentes que puedan estar ubicados en diferentes partes del mundo o que presentan incompatibilidad de horario.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-2.png', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Evento híbrido]
            p Su característica principal se encuentra en la interacción y participación incrementada al combinar acciones físicas o materiales con la virtualidad. Se realiza con presencia física de los actores en diferentes sedes que están enlazadas vía #[em streaming], posibilitando una retransmisión en vivo y entregando experiencias reales sincrónicas.
            p En el espacio físico normalmente asiste un reducido número de personas y en el virtual se usan plataformas audiovisuales y tecnológicas (videoconferencias en #[em streaming, chats], etc.) a través de las cuales se puede participar desde cualquier lugar. Cuenta con varias ventajas: ahorro en tiempo y gastos que se derivan de los traslados de personas, audiencias más numerosas y mejora el impacto en redes sociales.

          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-3.png', alt='Texto que describa la imagen').mt-2

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Eventos en escenarios 3D con la personificación de avatares]
            p Se usa una réplica del rostro de una persona en un avatar en 3D, lo cual facilita que sea una figura capaz de interactuar de manera inmersiva en escenarios virtuales.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-4.svg', alt='Texto que describa la imagen').mt-2  

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Eventos sostenibles]
            p Las acciones amigables con el medioambiente son una consigna mundial, razón por la cual muchas empresas se enfocan en eventos que minimicen la afectación al ecosistema promocionando la producción del lugar y la conexión con la naturaleza. Algunas medidas que se vienen utilizando son: ofrecimiento de medios de transporte menos contaminantes, ajuste de las cantidades de alimentos sobrantes en comidas y cenas, etc.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-5.png', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong #[em Small meeting]]
            p Consiste en organizar pequeños espacios y grupos de trabajo observando los protocolos de bioseguridad. Sus usuarios valoran el trabajo en equipo, reforzando vínculos personales y profesionales con clientes, proveedores y colaboradores.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-6.png', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Cumbre virtual]
            p El formato está diseñado en función del #[em marketing], los ponentes presentan información específica tendiente a varios objetivos: captación y fidelización de clientes, construcción de imagen y marca, etc., generando así nuevos contenidos a su audiencia; el promedio de oradores es de 30 y su duración varía entre 3 y 10 días.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-7.png', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Conferencias #[em online]]
            p Sus oradores y temáticas son variados, se realiza en vivo y cuenta con áreas virtuales de relajación para la práctica de #[em networking] y el entretenimiento.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-8.png', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong #[em Webinar]]
            p Conferencia, taller o seminario virtual con contenido educativo. Su principal diferencia radica en el nivel de participación de los asistentes, porque en estos eventos la interactividad es mayor que en otros de tipo académico.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-9.png', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Talleres #[em online]]
            p Se brinda entrenamiento práctico a los empleados de una organización y puede durar entre 30 minutos a 3 horas. Es necesario que no sea muy extenso y elimine barreras de acceso para las personas que están trabajando. 
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-10.png', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Chats #[em online fireside] (caseros)]
            p Formato caracterizado por facilitar la cercanía entre asistentes y oradores en sesiones privadas; también puede darse como una sesión complementaria en una cumbre o conferencia virtual.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-11.png', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Ferias y exposiciones comerciales virtuales]
            p Formato de gran escala en el cual se exponen productos y servicios de manera directa, con el objetivo de sensibilizar a futuros clientes y fidelizar a los existentes. 
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-12.png', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong #[em Happy hour] virtual o #[em afterwork]]
            p Son eventos cortos que se pueden realizar en cualquier momento, fomentando la interacción entre los participantes en un ambiente más tranquilo. La idea es que el organizador envíe previamente a la casa de sus invitados un desayuno, bebida o algún tipo de merienda para que pueda ser compartida de manera #[em online] con los otros participantes. Propicia el relacionamiento y denota afecto y atención en el bienestar entre oferente e invitados.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-13.png', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong #[em Tour] virtual]
            p “Se crean a partir de la tecnología de realidad virtual que permite la construcción de lugares artificiales para generar experiencias inmersivas a los usuarios. Cada participante puede desplazarse e interactuar con elementos o mobiliario del lugar que se está mostrando”. (Museo Nacional de Colombia, 2022). El #[em tour] puede ser un recorrido programado o no, con libre desplazamiento.
          .col-md-5
            figure
             img(src='@/assets/curso/temas/tema1/t1-14.png', alt='Texto que describa la imagen').mt-2               
             

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Plataformas para desarrollar eventos virtuales]
      
        p A continuación, se identifican las diferentes plataformas para desarrollar los eventos virtuales:
      

    .row.justify-content-center.mt-5
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema1/t1-15.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-4(x="25.6%" y="14.5%" numero="+")
            h2 Zoom
            p Es intuitiva y fácil de usar. Transmite reuniones, conferencias y seminarios web con video, audio y mensajería instantánea. Dispone de versión #[em premium], que posibilita tener hasta 1.000 participantes y 10.000 espectadores con herramientas interactivas.
          
          .tarjeta.color-acento-botones.p-4(x="58%" y="14.5%" numero="+")
            h2 Google Meet
            p Es una aplicación de videoconferencias desarrollada por la compañía Google Inc. Se accede desde buscadores web y dispositivos móviles; las empresas y organizaciones son sus principales usuarios, ya que fue ideada para dinamizar el entorno laboral. Para poder crear las reuniones se debe tener una cuenta activa en Google.

          .tarjeta.color-acento-botones.p-4(x="90.5%" y="14.5%" numero="+")
            h2 Microsoft Teams
            p Es un espacio de trabajo diseñado para mejorar la comunicación y colaboración de los equipos de trabajo de las organizaciones. Cuenta con chats individuales y grupales, conversaciones de equipo, videoconferencias, notas, acceso a contenido compartido, #[em Office online, Planner], entre otros.

          .tarjeta.color-acento-botones.p-4(x="25.6%" y="61.5%" numero="+")
            h2 StreamYard
            p Permite tener hasta 6 expositores en vivo, compartir pantalla y difundir el #[em streaming] por medio de diferentes redes sociales para tener mayor alcance.   

          .tarjeta.color-acento-botones.p-4(x="57.5%" y="61.5%" numero="+")
            h2 Crowdcast
            p Se pueden hacer videoconferencias y congresos #[em online], cuenta con funciones para preguntas y respuestas.

          .tarjeta.color-acento-botones.p-4(x="90.5%" y="61.5%" numero="+")
            h2 Livestorm
            p Crea videos en tiempo real tanto para pequeños negocios como para grandes empresas. Puede usar esta herramienta para realizar demostraciones de productos, reuniones, seminarios, cursos #[em online], etc.                                        

    .row.justify-content-center
      .col-lg-10.mt-5
        .row
          .col-lg-4.justify-content-center(data-aos="flip-up")
            figure
              img(src='@/assets/curso/temas/tema1/t1-16.svg', alt='Texto que describa la imagen')
          .col-lg-8.col-xs-6.mt-3
            .cajon.color1.p-4
              p Los eventos virtuales, al igual que los presenciales, deben despertar emociones en los asistentes. Los organizadores con muchos años de experiencia han comenzado a migrar sus servicios al mundo #[em online], y para ello ha sido esencial contar con una planificación y estrategias de mercadeo que logren afianzar sus relaciones con los clientes y conectarlos con los valores de la marca.    
            p.mt-5 Desarrollar estrategias de producción de eventos, no solo es importante en el antes, sino también en el durante y en el después de los mismos. 

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Estrategias de producción de eventos]

    .row.my-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/t1-17.svg' alt='AvatarTop')
          h4.text-center.mt-5 Internet
          p.text-center Hoy en día todo suceso pasa por Internet, que es un medio ideal para cualquier tipo de proceso. Los #[em websites] y las plataformas digitales han abierto un panorama inmenso.

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/t1-18.svg' alt='AvatarTop')
          h4.text-center.mt-5 Cibernauta
          p.text-center Al conseguir un mayor impacto y visibilidad para las organizaciones que comprenden que el consumidor moderno es autónomo (gestiona él mismo la información, es decir, es un cibernauta).

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/t1-19.svg' alt='AvatarTop')
          h4.text-center.mt-5 Medios digitales
          p.text-center Los medios digitales representan una oportunidad para la formulación de estrategias de marca en las organizaciones.

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/t1-20.svg' alt='AvatarTop')
          h4.text-center.mt-5 Métricas de  #[em marketing]
          p.text-center El mercadeo en este campo realiza métricas de #[em marketing] sincrónicas, interactuando con los consumidores y ajustando la estrategia a partir de los resultados.        

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/t1-21.svg' alt='AvatarTop')
          h4.text-center.mt-5 #[em Marketing] digital
          p.text-center Esta flexibilidad y dinámica propia del #[em marketing] digital resulta, en términos económicos, más viable al compararla con los medios tradicionales de difusión, como radio, televisión y prensa.                  

    .row.justify-content-center
      .col-lg-10
        p.text-bold A continuación, se mencionan algunas estrategias para la producción de eventos.
        TabsA.color-acento-contenido.mt-5
          .tarjeta.color-acento-contenido.p-3(style="background-color:#fee3e4" titulo="Desarrollo de contenidos")
            .row.justify-content-center.p-3
              .col-8.col-lg-4.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/t1-22.svg', alt='')           

              .col-lg-8
                p.mt-4 Los contenidos digitales deben tener la facultad de atraer y retener el interés de los visitantes. Se constituyen en una herramienta de promoción y venta de productos o servicios, al ser integrados al desarrollo de un evento virtual. Existen variedad de formatos, como blogs, revistas, correos electrónicos, videos, #[em e-books], etc.
          
          .tarjeta.color-acento-contenido.p-3(style="background-color:#fee3e4" titulo="<em>Streaming</em> del evento")
            .row.justify-content-center.p-3
              .col-8.col-lg-4.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/t1-23.svg', alt='')           

              .col-lg-8
                p.mt-4 Es difundir un evento en vivo con audio y video en directo a interesados en cualquier lugar del planeta, quienes acceden a través de una plataforma digital. Presenta características inmejorables que contribuyen al buen relacionamiento con clientes, empleados, proveedores y la comunidad en general. De igual manera, asegura que las personas que no pudieron asistir queden entusiasmadas para una próxima oportunidad.
                

          .tarjeta.color-acento-contenido.p-3(style="background-color:#fee3e4" titulo="<em>Influencers</em>")
            .row.justify-content-center.p-3
              .col-8.col-lg-4.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/t1-24.svg', alt='')           

              .col-lg-8
                p.mt-4 Es una técnica que está siendo empleada por muchas organizaciones, donde se escoge una persona que tenga reconocimiento en el medio y que esté relacionada con la temática del evento. La idea es que hable en sus redes sociales sobre la actividad que se está organizando, para impactar favorablemente.

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Claves para lograr experiencias únicas en los asistentes a los eventos]

        p Según el blog de eventos Fosbury Café (2021), se deben tener presentes estas claves al momento de generar sensaciones en los asistentes:

    .row.justify-content-center.my-5
      .col-lg-6.mb-4
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Sentimiento")
            p Se debe definir el sentimiento que se desea estimular.
            
          .row(numero="2" titulo="Sistema sensorial")
            p Se deben originar experiencias que inciten el sistema sensorial de los asistentes; por ejemplo, la vista se debe sorprender mostrando un producto de manera excepcional y emotiva, o el gusto se puede activar incitando a los usuarios a probar algún producto.
            
          .row(numero="3" titulo="El oído")
            p El oído también puede participar a través de los sonidos en la música, el olfato a través de olores y el tacto haciendo sentir al asistente todo lo que se genera en el evento.
          
          .row(numero="4" titulo="La creatividad")
            p Un evento debe crear sorpresa, intriga o provocación. Al utilizar la creatividad para llamar la atención de las personas, estas relacionarán al producto o servicio con algo positivo que resuelve sus problemas.
            
          .row(numero="5" titulo="Experiencias físicas")
            p Se deben generar experiencias físicas, interacciones y estilos de vida. Un evento puede ampliar el horizonte de los asistentes a través de actividades que creen interacciones de carácter físico, enseñando formas nuevas de realizar algo y de relacionarse con la marca.
          
          .row(numero="6" titulo="Nuevas tecnologías")
            p Se deben utilizar espacios, tiempos y actividades innovadoras. Ante esto, las nuevas tecnologías aplicadas a los eventos son un ejemplo claro de las posibilidades de creatividad e innovación que tienen estas herramientas para generar notoriedad.               

          .row(numero="7" titulo="Recordar la experiencia")
            p Adicionalmente, cuando el evento termine se debe continuar creando experiencia. Se puede hacer uso de un video resumen o regalos pequeños que sean útiles y que sirvan de recordatorio, como cuadernos o bolígrafos con la identidad corporativa del evento.         
 
      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/t1-25.svg', alt='')

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Ejemplos de experiencias en eventos]

        p Las experiencias vividas se quedarán en la mente del consumidor porque se le incitó a participar de manera activa, con emoción y energía.

    .row.justify-content-center.my-5
      .tarjeta.bkg-slyder.p-5
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center.my-4(titulo="1")
            .col-lg-6
              ul.lista-ul
                li 
                  i.fas.fa-circle.vineta-fuscia-circle
                  b Eventos <em>Red Bull</em>
              p <em>Red Bull</em> ha logrado posicionar su marca a través de eventos deportivos de acción, en los que se encarga de generar emociones fuertes y hacer que los asistentes identifiquen la marca con fuerza, adrenalina y aventura. Así, la compañía no solo tiene el poder de atraer a quienes disfrutan de su producto, sino también a los que no lo hacen a través de #[i shows] memorables.
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-26.png', alt='')              

          .row.justify-content-center.my-4(titulo="2")
            .col-lg-6
              ul.lista-ul
                li 
                  i.fas.fa-circle.vineta-fuscia-circle
                  | #[strong #[em Airbnb]]
              p #[em Airbnb experiences] es una plataforma en la que los usuarios experimentan nuevos aspectos de los destinos, les brinda la posibilidad de participar de #[em tours] y vivir como locales. En el 2018, la compañía lanzó #[em Airbnb concerts], donde se puede acceder a diversos espectáculos en vivo originados desde cualquier posición en nuestro planeta.
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-27.png', alt='') 

          .row.justify-content-center.my-4(titulo="3")
            .col-lg-6
              ul.lista-ul
                li 
                  i.fas.fa-circle.vineta-fuscia-circle
                  | #[strong #[em American Express]]
              p #[em American Express] gestiona a sus clientes a partir de la información que reposa en sus bases de datos, creando experiencias personalizadas transmitidas en los eventos. Dentro de las más destacadas se encuentra el lanzamiento de nuevos servicios para los tarjetahabientes, por ejemplo, al incorporarse al festival de música y artes Coachella, sus clientes disfrutan de todo tipo de privilegios VIP, generando lealtad y fidelización.
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-28.png', alt='')

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 1.1 Registros

    .row.justify-content-center
      .cajon.color2.p-4
        p Los resultados de un evento pueden ser evaluados para determinar su éxito y las posibles mejoras que se deben realizar a futuro. Esto se puede lograr usando sistemas de medición de diferentes maneras.   

    .row.justify-content-center.mt-5
      .col-lg-10
        p A continuación, se describen los elementos cuantitativos a considerar en un evento.  

    .row.justify-content-center.mb-5.mt-5
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/t1-29.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.crd-color2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/t1-30.svg", alt="alt").numero.img-movil
            .col
              h3 Cantidad de registros
              p Se debe realizar un balance entre los ingresos y egresos resultantes, una vez realizado el cierre del evento.
              p Un buen indicador que se puede tener en cuenta en este punto es la cantidad de registros o entradas vendidas.
        .crd.crd--avatarHorizontal.crd-color1.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/t1-32.svg", alt="alt").numero.img-movil
            .col
              h3 #[em Software]
              p Un #[em software] ayuda a establecer diferencias entre número de registros y de asistentes finales.  
        .crd.crd--avatarHorizontal.crd-color2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/t1-33.svg", alt="alt").numero.img-movil
            .col
              h3 Costos en planeación
              p Estos datos servirán como punto de comparación frente a los costos que se debieron asumir desde la planeación. Existen empresas que brindan este tipo de servicio.
        .crd.crd--avatarHorizontal.crd-color1.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/t1-34.svg", alt="alt").numero.img-movil
            .col
              h3 Seguimiento
              p Realizar seguimiento a la implementación de mejoras es fundamental cuando la actividad se ha realizado con anterioridad.

    .row.justify-content-center.mt-5
      p La percepción de los asistentes es una apreciación subjetiva de los participantes. Se puede hacer considerando varios indicadores: 

    .row.justify-content-center.mt-5
      .col-12
        LineaTiempoT.color-acento-botones.mb-5
          .row(titulo="Promoción e impacto en redes sociales")
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/t1-35.svg', alt='')
            .col-lg-8.mb-4.mb-lg-0
              p.mt-3 Cada una de las plataformas sociales que existen en la web, tienen de manera individual un sistema que mide el alcance y cobertura de una actividad.
          .row(titulo="Satisfacción con el evento")
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/t1-36.svg', alt='')
            .col-lg-8.mb-4.mb-lg-0
              p.mt-3 Se puede establecer si los objetivos planeados se concretaron de manera adecuada. Es posible conocer el nivel de satisfacción del usuario de manera ágil y directa a través del correo electrónico.
          .row(titulo="Calidad de los ponentes")
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/t1-37.svg', alt='')
            .col-lg-8.mb-4.mb-lg-0
              p.mt-2 Se deben evaluar temas como: calidad de los ponentes, adecuación de las salas, horarios, disposición del personal del evento, instalaciones, tecnología, etc. Se puede hacer uso de una #[i app] específicamente para el evento que pondere esta información, incrementando el índice de respuestas.
          .row(titulo="<em>Engagement</em> y participación de los asistentes")
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/t1-38.svg', alt='')
            .col-lg-8.mb-4.mb-lg-0
              p.mt-3 El evento debe estar activo #[em online] antes, durante y después de su desarrollo. Si se creó un #[em hashtag], se puede medir contando las veces que fue usado por los usuarios.  


    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.mt-3 1.2 Inventarios

    .row.justify-content-center
      .col-lg-8.col-xs-6.mt-3
        p Según la RAE (2021), el término inventario hace referencia al registro de bienes. En el caso de la ejecución de eventos, es el listado de equipos, materiales y recursos físicos pertenecientes a la organización hecho con orden y precisión. Su control para la producción se realiza mediante el conteo físico de aquellos disponibles, siendo indispensable su fácil localización dentro de un lugar de almacenamiento apropiado. 
        .titulo-sexto.color-acento-contenido.mb-3
          span Ejemplo de inventario de equipo y materiales para la producción de un evento
        figure
          img(src='@/assets/curso/temas/tema1/t1-60.svg', alt='')
          figcaption.figcaption.mt-2 #[strong Nota.] Elaboración propia del experto.                 
      
      .col-lg-4.justify-content-center(data-aos="flip-up")
        figure
          img.mt-2(src='@/assets/curso/temas/tema1/t1-39.svg', alt='')

    .row.justify-content-center.mt-5
      .col-lg-10
        p A continuación, se brinda un ejemplo de inventario de equipo y materiales para la producción de un evento: 
        ImagenInfografica.color-acento-botones.mt-3.bkg-punto-caliente
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema1/t1-40.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-4(x="38%" y="22.5%" numero="+")
            h2 Código 
            p Corresponde a las iniciales del producto o la marca. El objetivo es acortar, puede ser con 2 o 3 letras; por ejemplo MP: material promocional o BA: banderas.
          
          .tarjeta.color-acento-botones.p-4(x="28.5%" y="50.5%" numero="+")
            h2 Tipo
            p En este espacio se ponen las especificaciones de materiales y el nombre del tipo de bien. Por ejemplo: escarapelas, estandartes, etc.

          .tarjeta.color-acento-botones.p-4(x="38%" y="77.5%" numero="+")
            h2 Marca/modelo
            p Marca y modelo del bien que correspondan a la información dada por el fabricante o consignada en la hoja de vida del equipo. 

          .tarjeta.color-acento-botones.p-4(x="62%" y="22.5%" numero="+")
            h2 Responsable
            p Nombre o cargo de la persona responsable o que tiene asignado el cuidado y/o uso del bien detallado. 

          .tarjeta.color-acento-botones.p-4(x="71.5%" y="50.5%" numero="+")
            h2 Estado
            p Estado en el que se encuentra el bien, puede categorizarse como funcional (bien que puede ser utilizado sin problema), no funcional (que requiere ser reparado para ser utilizado) y de baja (que no puede ser utilizado). 

          .tarjeta.color-acento-botones.p-4(x="62%" y="77.5%" numero="+")
            h2 Número de serie
            p Si hay varios equipos del mismo tipo y marca, es ideal asignar a cada uno un número para hacer el seguimiento. 

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-b.color-bloque-texto.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left.vineta-fuscia
            p Dependiendo de las políticas y las necesidades de la organización o el contratante, puede agregar al formato columnas como ubicación (nombre de la dependencia donde se encuentra el equipo); fecha de ingreso (fecha de adquisición del bien); N.º factura (número de factura del bien cuando fue adquirido); observaciones/motivos de baja (observaciones relacionadas con el estado del bien u otras como motivos por el que fue dado de baja).
            i.fas.fa-quote-right.vineta-fuscia
            
          p.alineacion1 (SENA, 2017)

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Solicitud y entrega de equipos y materiales]

    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.color1.p-4
          p El proceso de solicitud y entrega de equipos para la producción de un evento se hace por medio de un soporte denominado ‘requisición’, que es un documento por medio del cual el organizador solicita al contratante los equipos que requiere para la prestación del servicio.  

    .row.justify-content-center.mt-5
      .col-lg-10    
        img(src='@/assets/curso/temas/tema1/t1-41.svg', alt='')
        figcaption.figcaption.mt-2 #[strong Nota.] Elaboración propia del experto.

    .row.justify-content-center.mt-5
      .col-lg-4.justify-content-center(data-aos="flip-up")
        figure
          img.mt-2(src='@/assets/curso/temas/tema1/t1-42.svg', alt='')  

      .col-lg-8.col-xs-6

        .bloque-texto-b.color-bloque-texto.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left.vineta-fuscia
            p El formato para solicitud y devolución de equipos es construido por cada contratante u organización según sus políticas organizacionales. Se realiza a partir del momento que se tiene la información del servicio a ejecutar, y se seleccionan los equipos necesarios; con ello, se hace la solicitud al encargado del almacenamiento o él mismo realiza el alistamiento.
            i.fas.fa-quote-right.vineta-fuscia        
          p.alineacion1 (SENA, 2017)


        figure.mt-5
          img(src='@/assets/curso/temas/tema1/t1-43.svg', alt='')
          figcaption.figcaption.mt-3 #[strong Nota.] Servicio Nacional de Aprendizaje - SENA (2017).  Adaptación.                
      
    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Técnicas de almacenamiento y ubicación de equipos]

        p El almacenamiento es una actividad que tiene por objeto organizar, guardar y proteger equipos que hacen parte de la producción de eventos. 


    TabsC.color-acento-contenido.mb-5.mt-5
      .py-3.py-md-4(titulo="Almacenamiento de equipos")
        .row.justify-content-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/t1-44.svg', alt='')
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            p Los equipos almacenados están debidamente registrados, lo cual facilita llevar su control favoreciendo la rotación de aquellos defectuosos, o que no respaldan el cumplimiento de la normatividad. 

      .py-3.py-md-4(titulo="Clasificación")
        .row.justify-content-center          
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/t1-45.svg', alt='')          
          .col-lg-7
            p Además de planear y proyectar los requerimientos de equipos, es necesario conocer la forma como se clasifican, se almacenan en un espacio físico adecuado y se transportan en condiciones óptimas ambientales, garantizando su conservación y aseguramiento. (SENA, 2017).

      .py-3.py-md-4(titulo="Principios 5S")
        .row.justify-content-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/t1-46.svg', alt='')
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            p Una técnica genérica que se aplica a cualquier proceso de inventarios son los principios 5S. Esta filosofía es de origen japonés, por ello los principios comienzan por S y todos van en la misma dirección para optimizar el almacenamiento. 

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Principio de las 5S]
        p A continuación, se mencionan los elementos que componen el proceso de almacenamiento para realizarlo de forma sencilla pero práctica:

    .row.justify-content-center.mt-5
      .col-lg-8      
        AcordionA(tipo="b" clase-tarjeta="tarjeta acordeonA").mt-5
          .row(titulo="<em>Seiro</em>").p-3
            p <b>Clasificación.</b> Se realiza de acuerdo a las características del equipo. Además, se trata de identificar y separar los necesarios de los innecesarios, eliminando estos últimos al momento de planear el servicio. 
          
          .row(titulo="<em>Seinton</em>").p-3
            p <b>Organizar.</b> Consiste en establecer el modo en que deben ubicarse los equipos necesarios, de manera que sea fácil y rápido encontrarlos, utilizarlos y reponerlos.
            
          .row(titulo="<em>Seiso</em>").p-3
            p <b>Limpieza.</b> Radica en identificar y eliminar las fuentes de suciedad, asegurando que todos los medios del equipo se encuentren siempre perfectamente limpios.

          .row(titulo="<em>Seiketsu</em>").p-3
            p <b>Estandarizar.</b> Consiste en distinguir fácilmente una situación normal de otra anormal, mediante normas sencillas y visibles para el control de equipos.

          .row(titulo="<em>Shitsuke</em>").p-3
            p <b>Disciplina.</b> Hace referencia a construir autodisciplina y formar el hábito de las 5S mediante el establecimiento de estándares y seguimiento de los procedimientos en el lugar de trabajo.

      .col-lg-4          
        figure
          img(src='@/assets/curso/temas/tema1/t1-47.png', alt='')            

    .row.justify-content-center.mt-5
      .col-lg-10
        p Las técnicas permiten estandarizar los procedimientos de tal forma que se pueda tener un proceso único, siempre realizado de la misma manera. A continuación, algunos elementos que permiten sistematizar los resultados: 

    .bkg-slyder.px-5.py-5.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            p.text-bold Técnica        
            p La técnica que dice cómo hacer las cosas se basa en experiencias previas que han permitido su estandarización (SENA, 2017).
            
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-48.svg', alt='')

        .row.justify-content-center
          .col-md-8
            p.text-bold Almacenamiento
            p En la producción de eventos el almacenamiento de insumos, equipos y material en general es una actividad cuidadosa que pretende preservar y mantener en óptimas condiciones lo requerido para las actividades con turistas.
            
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-49.svg', alt='Texto que describa la imagen').mt-2

        .row.justify-content-center
          .col-md-8
            p.text-bold Armario de bodega
            p Para el correcto almacenamiento se recomienda utilizar un armario o una bodega donde se puedan guardar, por medio de ganchos anclados a la pared, los diferentes equipos y elementos para así evitar caídas y golpes.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-50.svg', alt='Texto que describa la imagen').mt-2  

        .row.justify-content-center
          .col-md-8
            p.text-bold Lugar de almacenamiento 
            p El lugar de almacenamiento debe ser ventilado y preferiblemente libre de humedad, evitando que los equipos queden expuestos a la luz del sol.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-51.svg', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-8
            p.text-bold Equipos
            p Los equipos se almacenan junto a la ficha técnica con las especificaciones establecidas para cada uno.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-52.svg', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-8
            p.text-bold Espacios
            p Una vez analizado el aprovechamiento de los espacios y de las áreas especiales de almacenamiento, #[strong se deben tener en cuenta los siguientes elementos (SENA, 2017):]
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-53.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong La revisión:]
            p Acción de comprobar el estado del equipo cada vez que se utiliza, haciendo uso de un registro al recibirlo probado y funcionando, o en condición de uso para evitar reclamos con posterioridad.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-54.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Estado de los equipos:]
            p Nunca guardar los equipos sucios o húmedos.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-55.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Préstamo de equipos:]
            p El préstamo del equipo y su devolución es personal.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-56.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Oportuna devolución:]
            p El personal que retira el equipo se hará responsable de su oportuna devolución y de todo daño que provenga del uso del material.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-57.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Limpieza de equipos:]
            p El equipo se entrega limpio y ordenado. Informar al encargado cualquier daño o mal funcionamiento, con el objeto de tomar acción inmediata y así evitar inconvenientes o condiciones de uso inseguras para el próximo usuario.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-58.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            ul.lista-ul
              li 
                i.fas.fa-circle.vineta-fuscia-circle
                | #[strong Mantenimiento de equipos:]
            p Se aplicará un régimen especial de cuidado y mantenimiento al equipo clasificado, de manera que la seguridad de los colaboradores y los usuarios esté preservada.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema1/t1-59.svg', alt='Texto que describa la imagen').mt-2  

</template>

<script>
import LineaTiempoT from '../components/LineaTiempoT.vue'
export default {
  name: 'Tema1',
  components: { LineaTiempoT },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
