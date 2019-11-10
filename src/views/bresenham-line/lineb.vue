<template src="./lineb.html"></template>
<style scoped src="./lineb.css"></style>
<script>
    import { BresenhamLine } from "../../utils/BresenhamLine.js"
    export default {
        name: "lineb",
        data(){
            return {
                xUser: "",
                yUser: "",
                xTwoUser: "",
                yTwoUser: ""
            }
        },
        methods: {
            drawNewLine(){
                BresenhamLine.BresLine(Number(this.xUser), Number(this.xTwoUser), Number(this.yUser), Number(this.yTwoUser))
            },
            goToDrawCircle() {
                this.$router.push( { name: "Circle" } )
            },
            goToDrawEllipse() {
                this.$router.push( { name: "Ellipse" } )
            },
        },
        mounted() {

        }
    }
</script>

