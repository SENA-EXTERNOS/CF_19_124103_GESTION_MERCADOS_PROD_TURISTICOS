<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ofimática para eventos

    .row.justify-content-center.mt-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/tema2/t2-1.svg', alt='')

    .row.justify-content-center.mt-5
      .col-lg-10
        p En la producción de eventos las herramientas ofimáticas hacen referencia a las técnicas, aplicaciones y programas informáticos que se utilizan en funciones de administración para optimizar, automatizar y mejorar los procedimientos y tareas, tales como:

    .row.my-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/t2-2.svg' alt='AvatarTop')
          h4.text-center.mt-5 Usuario del servicio
          p.text-center Interacción con el usuario del servicio para conocer al detalle sus necesidades, así mismo, con otros prestadores de servicios.

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/t2-3.svg' alt='AvatarTop')
          h4.text-center.mt-5 Productos y servicios
          p.text-center Mostrar gráficamente los productos y servicios disponibles y ejemplos de estos últimos.

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/t2-4.svg' alt='AvatarTop')
          h4.text-center.mt-5 Propuesta de servicio
          p.text-center Presentar una propuesta de servicio en formato adecuado.

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/t2-5.svg' alt='AvatarTop')
          h4.text-center.mt-5 Información de usuarios
          p.text-center Organización eficaz de la información de los usuarios.

        .tarjeta.bkg-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/t2-6.svg' alt='AvatarTop')
          h4.text-center.mt-5 Conocimientos adquiridos
          p.text-center Construir una memoria sobre los conocimientos adquiridos. (Melián González y Bulchand-Gidumal, 2015). 

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Herramientas ofimáticas]
        p El gestor de eventos está llamado a trabajar constantemente en la actualización de sus conocimientos sobre estas herramientas.

        img(src='@/assets/curso/temas/tema2/t2-7.png', alt='' data-aos="flip-up")

    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Los procesadores de textos y las hojas de cálculo]
        p El procesador de texto es un #[em software] que permite al escritor utilizar comandos para editar texto en la pantalla, eliminando la tarea de volver a escribir páginas hasta que el mensaje sea el correcto; además, puede controlar el tipo de letra, el espaciado, los márgenes y usar plantillas para cartas, presentación del servicio entre otros, también tiene herramientas para la revisión ortográfica y gramatical. Es posible procesar un texto a partir de su digitación, por reconocimiento de voz y escritura a mano.

    .row.justify-content-center.my-5
      .tarjeta.bkg-slyder.p-5
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center.my-4(titulo="Word")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-8.svg', alt='')           
            .col-lg-6
              p.mt-3 Es útil para la presentación de propuestas formales, realizar informes y demás documentos que requiera la operación
     

          .row.justify-content-center.my-4(titulo="Excel")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-9.svg', alt='')             
            .col-lg-6
              p.mt-3 Los programas de hoja de cálculo fueron desarrollados para simular y automatizar el libro mayor contable, ahora son utilizados para hacer casi cualquier tarea que implique cálculos numéricos repetitivos. Los documentos de hoja de cálculo permiten el registro de valores numéricos y fórmulas facilitando la actualización automatizada de los datos. Además, incluyen comandos para generar gráficos a fin de convertir los números en una variedad de gráficas.


          .row.justify-content-center.my-4(titulo="Correo electrónico")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-10.svg', alt='')          
            .col-lg-6
              p.mt-3 El correo electrónico es otra herramienta que facilita la integración con el contratante, prestadores de servicios y clientes potenciales. Estos programas permiten a usuarios ocasionales de computadoras enviar fácilmente mensajes, los cuales se pueden escribir, dirigir, enviar, distribuir y responder en cuestión de minutos.
   

          .row.justify-content-center.my-4(titulo="<em>E-mail</em>")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-11.svg', alt='')            
            .col-lg-6
              p.mt-3 El correo electrónico ha permitido cambiar el concepto de la comunicación escrita, reemplazó rápidamente el correo postal y amplió el radio de contacto con las personas en el medio empresarial, permitiendo llegar de forma ágil y personal a contactar inclusive al gerente, sin pasar por ningún otro eslabón.
 

          .row.justify-content-center.my-4(titulo="Creación de correo")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-12.svg', alt='')             
            .col-lg-6
              p.mt-3 Inicia con la creación de una cuenta con un nombre de usuario (#[em login, name] o alias) y un área de almacenamiento para los mensajes (buzón de correo o #[em mail box]). 


          .row.justify-content-center.my-4(titulo="<em>E-mails</em> masivos")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-13.svg', alt='')            
            .col-lg-6
              p.mt-3 Una ventaja para la empresa es poder enviar mensajes masivos de promoción, facilitando la rápida divulgación de textos, imágenes, archivos adjuntos y multimedia.  
 

          .row.justify-content-center.my-4(titulo="Arroba")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-14.svg', alt='')            
            .col-lg-6
              p.mt-3 Una dirección de #[em e-mail] de Internet está compuesta por dos partes separadas por un signo arroba ‘@’: el nombre de usuario de la persona y el nombre del #[em host], es decir, de la computadora #[em host], la red o la dirección del IP donde el usuario recibe el correo. 
 

          .row.justify-content-center.my-4(titulo="Redes sociales")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-15.svg', alt='')            
            .col-lg-6
              p.mt-3 Las redes sociales como canales de difusión empresarial han tomado fuerza. Entre los medios a utilizar están los videos sobre servicios y campañas publicitarias, concursos y otras estrategias. Más del 90 % de los clientes potenciales están en estas. 
 

          .row.justify-content-center.my-4(titulo="Redes")
            .col.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/t2-16.svg', alt='')             
            .col-lg-6
              p.mt-3 Las redes son excelentes herramientas para saber lo que funciona o no de los servicios, y también un canal de comunicación personalizado de atención a clientes.
                                                                                                                                        
    .row.justify-content-center.mt-5
      .col-lg-10
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Las redes sociales y sus usos]
        p Otro de los aspectos que se deben tener en cuenta en la producción de eventos es el uso de las redes sociales y a su vez el manejo de almacenamiento en la nube como una ventaja competitiva.

    .bkg-slyder.px-5.py-5.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-8
            h2 Facebook
            p Permite dar a conocer el evento, ganar visibilidad, crear y comunicar promociones, crear una tienda #[em online] y fidelizar clientes.
            
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-17.svg', alt='')

        .row.justify-content-center
          .col-md-8
            h2 Instagram
            p Una imagen vale más que mil palabras. Ayuda a crear comunidad, mostrar los productos y mejorar la imagen de la marca.
            
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-18.svg', alt='Texto que describa la imagen').mt-2

        .row.justify-content-center
          .col-md-8
            h2 YouTube
            p Permite crear contenido dinámico en formato de video y en diferentes longitudes, facilita mostrar videos sobre la empresa, servicios, etc.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-19.svg', alt='Texto que describa la imagen').mt-2  

        .row.justify-content-center
          .col-md-8
            h2 Twitter
            p Da a conocer lo que se dice de la marca o servicio,  es un medio de contacto con los clientes para atención a quejas y comunicación de avisos cortos.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-20.svg', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-8
            h2 LinkedIn
            p Permite desarrollar una imagen corporativa, encontrar colaboradores, comunicar proyectos e incrementar relaciones con otras marcas.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-21.svg', alt='Texto que describa la imagen').mt-2   

        .row.justify-content-center
          .col-md-8
            h2 Trabajo en equipo
            p Según  el artículo ‘Memoria organizacional en la retroalimentación de clientes’ (#[em Freyle et al]., 2014), la gestión de las operaciones de las organizaciones, mejora de servicios, optimización de los procesos y mejoramiento de las relaciones con los usuarios y otros prestadores, se logra con la gestión del conocimiento o #[em knowledge management] en inglés (KM), que busca la identificación y el aprovechamiento del conocimiento colectivo de una organización, en este caso específico, la experiencia del gestor de eventos para ayudarle a competir.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-22.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            h2 Guardar la información
            p El proceso de almacenamiento de conocimientos se centra en la forma de capturar y guardar para posteriormente poder consultar sus experiencias, o ponerlas a disposición de usuarios como valor agregado.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-23.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            h2 Consultar la información
            p La posibilidad de que el organizador de eventos almacene las memorias de su experiencia en cada servicio y las pueda compartir es cada vez mayor, con servicios gratuitos que le permite almacenarla y consultarla de manera gratuita desde sus dispositivos. 
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-24.svg', alt='Texto que describa la imagen').mt-2               

        .row.justify-content-center
          .col-md-8
            h2 Captura de datos
            p Definitivamente, se convierte en una estrategia administrativa enfocada a la eficiencia y no como un esfuerzo aislado para la captura de datos.
          .col-md-4
            figure
             img(src='@/assets/curso/temas/tema2/t2-25.svg', alt='Texto que describa la imagen').mt-2 

</template>

<script>
export default {
  name: 'Tema2',
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
