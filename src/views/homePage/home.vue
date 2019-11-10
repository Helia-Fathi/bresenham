<template src="./home.html">
</template>
<style scoped src="./home.css">

</style>
<script>
    export default {
        name: "home",


        methods : {
            goToDrawCircle() {
                this.$router.push( { name: "Circle" } )
            },
            goToDrawLine() {
                this.$router.push( { name: "Line" } )
            },
            goToDrawEllipse() {
                this.$router.push( { name: "Ellipse" } )
                 },
            },
        }



</script>

