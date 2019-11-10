<template src="./circleb.html"></template>
<style scoped src="./circleb.css"></style>
<script>
    import { BresenhamCircle } from "../../utils/BresenhamCircle.js"
    export default {
        name: "circleb",
        data() {
            return {
                xUser: "",
                yUser: "",
                scaleXUser: "",
                scaleYUser: "",
                deltaXUser:"",
                deltaYUser:"",
                radiusUser: ""
            }
        },
        methods: {
            drawCircle() {
                BresenhamCircle.DrawCircle(Number(this.xUser), Number(this.yUser), Number(this.radiusUser))
            },
            goToDrawLine() {
                this.$router.push( { name: "Line" } )
            },
            goToDrawEllipse() {
                this.$router.push( { name: "Ellipse" } )
            },
            scaleCircle(){
                BresenhamCircle.ScaleCircle(Number(this.xUser), Number(this.yUser), Number(this.radiusUser),Number(this.scaleXUser), Number(this.scaleYUser))

            },
            transitionCircle(){
                BresenhamCircle.TransitionCircle(Number(this.xUser), Number(this.yUser), Number(this.radiusUser),Number(this.deltaXUser), Number(this.deltaYUser))
            },
            rotateCircle() {
                BresenhamCircle.RotateCircle(Number(this.xUser), Number(this.yUser), Number(this.radiusUser))
            },
        }
    }
</script>


