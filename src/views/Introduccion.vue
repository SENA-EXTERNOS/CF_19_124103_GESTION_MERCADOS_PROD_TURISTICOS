<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-2.p-sm-4.p-md-4
          .bloque-texto-g1__img(:style="{'background-image': `url(${require('@/assets/curso/temas/introduccion.png')})`}")
          .bloque-texto-g1__texto.p-4
            p Estimado aprendiz, en este proceso de formación se detallan aspectos relacionados con la ejecución profesional de eventos, actividad que hoy en día es una de las más solicitadas en el campo laboral, no solo en el área del turismo sino también a nivel empresarial y social por su alta demanda, para la cual será importante el registro de participantes y llevar un control de inventarios asociados al mismo. Con el estudio de este recurso estará en capacidad de desarrollar eventos de promoción turística, teniendo en cuenta estrategias comerciales de acuerdo con el plan estratégico organizacional o de mercadeo.
            br
            p En el siguiente video conocerá, de forma general, la temática que estudiará. ¡Muchos éxitos!

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7ojqhVdH35o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
