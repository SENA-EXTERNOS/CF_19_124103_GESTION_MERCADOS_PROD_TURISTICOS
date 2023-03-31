<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plan de contingencia

    .row.justify-content-center
      .col-lg-6.col-xs-6.mt-3
        p Un plan de contingencia es una herramienta de planeación estratégica, en la cual se contemplan actividades preventivas y reactivas que ayudan a controlar situaciones imprevistas de emergencia o de peligro durante el desarrollo del evento. Es el procedimiento alternativo al orden normal en su desarrollo, cuyo fin es permitir el normal funcionamiento de este, aun cuando alguna de sus funciones se viese dañada por un accidente interno o externo.
        ul.lista-ul(data-aos="fade-down-left")
          li 
            i.fas.fa-stop.vineta-fuscia-stop
            | #[strong Estructura y componentes]
        .cajon.color2.p-4
          p Los planes de contingencia se deben hacer para superar cualquier eventualidad que pueda acarrear pérdidas materiales o humanas; se deben hacer de cara a futuros acontecimientos para los que puede ser útil estar preparados.
          p Su elaboración se divide en cuatro etapas: ‘evaluación’, ‘planificación’, ‘prueba de viabilidad’ y ‘ejecución’. Las tres primeras hacen referencia al componente preventivo, y la última a la ejecución del plan una vez ocurrido el siniestro. En el siguiente video se describen.        
      
      .col-lg-6.justify-content-center(data-aos="flip-up")
        figure
          img.mt-2(src='@/assets/curso/temas/tema3/t3-1.svg', alt='')

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aID5HayWGSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO  

    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-4.justify-content-center(data-aos="flip-up")
            figure
              img.mt-2(src='@/assets/curso/temas/tema3/t3-2.svg', alt='')    
          .col-lg-8.col-xs-6.mt-3
            p Hacer un diagnóstico de las situaciones riesgosas que se presentan en la ejecución de eventos, analizar juiciosamente el potencial de accidentes, identificando los factores objetivos y subjetivos, definiendo la mejor forma de controlar estos últimos. Es indispensable estructurar un plan para prevenir la posibilidad de ocurrencia de las mismas.

            p.text-bold Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, como son la síntesis, la actividad didáctica, el material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
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
