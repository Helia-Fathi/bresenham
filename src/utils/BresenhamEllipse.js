export class BresenhamEllipse {

    draw_ellipse(x0, y0, a, b) {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        this.ellipse(ctx, x0, y0, a, b);
    }
    draw_ellipse_transition(deltaXUser,deltaYUser,x0, y0, a, b) {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'yellow';
        this.ellipseTransition(ctx,deltaXUser,deltaYUser, x0, y0, a, b);
    }
    draw_ellipse_scale(scaleX, scaleY, x0, y0, a, b) {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';
        this.ellipseScale(ctx,scaleX, scaleY, x0, y0, a, b);
    }
    draw_ellipse_rotate(x0, y0, a, b) {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'gray';
        this.ellipseRotate(ctx, x0, y0, a, b);
    }

    setPixel(ctx, x, y) {
        ctx.fillRect(x, y, 1, 1);
    }
    setPixelRotate(ctx, x, y) {
        ctx.fillRect(x,-y , 1, 1);
    }

    ellipse(ctx, xc,yc,  a,  b) {
        var a2 = a * a;
        var b2 = b * b;
        var twoa2 = 2 * a2;
        var twob2 = 2 * b2;
        var p;
        var x = 0;
        var y = b;
        var px = 0;
        var py = twoa2 * y;

        this.ellipsePlotPoints (ctx, xc,yc, x, y);

        /* Region 1 */
        p = Math.round (b2 - (a2 * b) + (0.25 * a2));
        while (px < py) {
            x++;
            px += twob2;
            if (p < 0)
                p += b2 + px;
            else {
                    y--;
                    py -= twoa2;
                    p += b2 + px - py;
                }
            this.ellipsePlotPoints (ctx, xc,yc, x, y);
}
    /* Region 2 */
    p = Math.round (b2 * (x+0.5) * (x+0.5) + a2 * (y-1) * (y-1) - a2 * b2);
    while (y > 0) {
    y--;
    py -= twoa2;
    if (p > 0)
        p += a2 - py;
    else {
        x++;
        px += twob2;
        p += a2 - py + px;
    }
           this.ellipsePlotPoints (ctx, xc,yc, x, y);
        }
    }

    ellipseScale(ctx,scaleX, scaleY, xc,yc,  a,  b) {
        var a2 = a * a;
        var b2 = b * b;
        var twoa2 = 2 * a2;
        var twob2 = 2 * b2;
        var p;
        var x = 0;
        var y = b;
        var px = 0;
        var py = twoa2 * y;


        this.ellipsePlotPointsScale (ctx,scaleX, scaleY, xc,yc, x, y);

        /* Region 1 */
        p = Math.round (b2 - (a2 * b) + (0.25 * a2));
        while (px < py) {
            x++;
            px += twob2;
            if (p < 0)
                p += b2 + px;
            else {
                y--;
                py -= twoa2;
                p += b2 + px - py;
            }
            this.ellipsePlotPointsScale (ctx,scaleX, scaleY, xc,yc, x, y);
        }
        /* Region 2 */
        p = Math.round (b2 * (x+0.5) * (x+0.5) + a2 * (y-1) * (y-1) - a2 * b2);
        while (y > 0) {
            y--;
            py -= twoa2;
            if (p > 0)
                p += a2 - py;
            else {
                x++;
                px += twob2;
                p += a2 - py + px;
            }
            this.ellipsePlotPointsScale (ctx,scaleX, scaleY, xc,yc, x, y);
        }
    }

    ellipseRotate(ctx, xc,yc,  a,  b) {
        var a2 = a * a;
        var b2 = b * b;
        var twoa2 = 2 * a2;
        var twob2 = 2 * b2;
        var p;
        var x = 0;
        var y = b;
        var px = 0;
        var py = twoa2 * y;

        this.ellipsePlotPointsRotate (ctx, xc,yc, x, y);

        /* Region 1 */
        p = Math.round (b2 - (a2 * b) + (0.25 * a2));
        while (px < py) {
            x++;
            px += twob2;
            if (p < 0)
                p += b2 + px;
            else {
                y--;
                py -= twoa2;
                p += b2 + px - py;
            }
            this.ellipsePlotPointsRotate (ctx, xc,yc, x, y);
        }
        /* Region 2 */
        p = Math.round (b2 * (x+0.5) * (x+0.5) + a2 * (y-1) * (y-1) - a2 * b2);
        while (y > 0) {
            y--;
            py -= twoa2;
            if (p > 0)
                p += a2 - py;
            else {
                x++;
                px += twob2;
                p += a2 - py + px;
            }
            this.ellipsePlotPointsRotate (ctx, xc,yc, x, y);
        }
    }

    ellipseTransition(ctx,deltaXUser,deltaYUser, xc,yc,  a,  b) {
        var a2 = a * a;
        var b2 = b * b;
        var twoa2 = 2 * a2;
        var twob2 = 2 * b2;
        var p;
        var x = 0;
        var y = b;
        var px = 0;
        var py = twoa2 * y;

        this.ellipsePlotPointsTransition (ctx,deltaXUser,deltaYUser, xc,yc, x, y);

        /* Region 1 */
        p = Math.round (b2 - (a2 * b) + (0.25 * a2));
        while (px < py) {
            x++;
            px += twob2;
            if (p < 0)
                p += b2 + px;
            else {
                y--;
                py -= twoa2;
                p += b2 + px - py;
            }
            this.ellipsePlotPointsTransition (ctx,deltaXUser,deltaYUser, xc,yc, x, y);
        }
        /* Region 2 */
        p = Math.round (b2 * (x+0.5) * (x+0.5) + a2 * (y-1) * (y-1) - a2 * b2);
        while (y > 0) {
            y--;
            py -= twoa2;
            if (p > 0)
                p += a2 - py;
            else {
                x++;
                px += twob2;
                p += a2 - py + px;
            }
            this.ellipsePlotPointsTransition (ctx,deltaXUser,deltaYUser, xc,yc, x, y);
        }
    }

    ellipsePlotPoints (ctx, xc,yc,  x,  y) {
        this.setPixel (ctx, xc + x, yc + y);
        this.setPixel (ctx,xc - x, yc + y);
        this.setPixel (ctx,xc + x, yc - y);
        this.setPixel (ctx,xc - x, yc - y);
    }
    ellipsePlotPointsScale (ctx,scaleX, scaleY, xc,yc,  x,  y) {
        this.setPixel (ctx,xc + scaleX*(x), yc + scaleY*(y));
        this.setPixel (ctx,xc - scaleX*(x), yc + scaleY*(y));
        this.setPixel (ctx,xc + scaleX*(x), yc - scaleY*(y));
        this.setPixel (ctx,xc - scaleX*(x), yc - scaleY*(y));
    }
    ellipsePlotPointsRotate (ctx, xc,yc,  x,  y) {
        this.setPixelRotate (ctx, xc + x, yc + y);
        this.setPixelRotate (ctx,xc - x, yc + y);
        this.setPixelRotate (ctx,xc + x, yc - y);
        this.setPixelRotate (ctx,xc - x, yc - y);
    }
    ellipsePlotPointsTransition (ctx,deltaXUser,deltaYUser, xc,yc,  x,  y) {
        this.setPixel (ctx, xc + (x + deltaXUser), yc + (y + deltaYUser));
        this.setPixel (ctx,xc - (x - deltaXUser), yc + (y + deltaYUser));
        this.setPixel (ctx,xc + (x + deltaXUser), yc - (y - deltaYUser));
        this.setPixel (ctx,xc - (x - deltaXUser), yc - (y - deltaYUser));
    }


}