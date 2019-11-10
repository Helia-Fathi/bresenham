<template src="./ellipseb.html"></template>
<style scoped src="./ellipseb.css"></style>
<script>
    import { BresenhamEllipse } from "../../utils/BresenhamEllipse"
    export default {
        name: "ellipseb",
        data() {
            return {
                xUser: "",
                yUser: "",
                aUser: "",
                bUser: "",
                deltaXUser:"",
                deltaYUser:"",
                scaleX: "",
                scaleY: ""
            }
        },
        methods: {
            drawEllipse() {
                let bresenham = new BresenhamEllipse();
                bresenham.draw_ellipse(Number(this.xUser), Number(this.yUser), Number(this.aUser), Number(this.bUser));
            },
            drawEllipseScale() {
                let bresenham = new BresenhamEllipse();
                bresenham.draw_ellipse_scale(Number(this.scaleX), Number(this.scaleY), Number(this.xUser), Number(this.yUser), Number(this.aUser), Number(this.bUser));
            },
            drawEllipseTransition() {
                let bresenham = new BresenhamEllipse();
                bresenham.draw_ellipse_transition(Number(this.deltaXUser), Number(this.deltaYUser), Number(this.xUser), Number(this.yUser), Number(this.aUser), Number(this.bUser));
            },
            drawEllipseRotate() {
                let bresenham = new BresenhamEllipse();
                bresenham.draw_ellipse_rotate(Number(this.xUser), Number(this.yUser), Number(this.aUser), Number(this.bUser));
            },
            goToDrawLine() {
                this.$router.push( { name: "Line" } )
            },
            goToDrawCircle() {
                this.$router.push( { name: "Circle" } )
            }

        }
    }
</script>
