export class BresenhamCircle {

    static DrawCircle(x0, y0 , radius) {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        var DrawPixel = function (x, y) {
            ctx.fillRect(x, y, 1, 1);
        };

        var x = radius;
        var y = 0;
        var radiusError = 1 - x;

        while (x >= y) {
            DrawPixel(x + x0, y + y0);
            DrawPixel(y + x0, x + y0);
            DrawPixel(-x + x0, y + y0);
            DrawPixel(-y + x0, x + y0);
            DrawPixel(-x + x0, -y + y0);
            DrawPixel(-y + x0, -x + y0);
            DrawPixel(x + x0, -y + y0);
            DrawPixel(y + x0, -x + y0);
            y++;

            if (radiusError < 0) {
                radiusError += 2 * y + 1;
            }
            else {
                x--;
                radiusError+= 2 * (y - x + 1);
            }
        }
    }

    static ScaleCircle(x0, y0 , radius,sX,sY) {

        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';

        var DrawPixel = function (x, y) {
            ctx.fillRect(x, y, 1, 1);
        };

        var x = radius;
        var y = 0;
        var radiusError = 1 - x;

        while (x >= y) {
            DrawPixel(sX*(x) + x0,   sY*(y) + y0);
            DrawPixel(sX*(y) + x0, sY*(x) + y0);
            DrawPixel(sX*(-x) + x0, sY*(y) + y0);
            DrawPixel(sX*(-y) + x0, sY*(x) + y0);
            DrawPixel(sX*(-x) + x0, sY*(-y) + y0);
            DrawPixel(sX*(-y) + x0, sY*(-x) + y0);
            DrawPixel(sX*(x) + x0, sY*(-y) + y0);
            DrawPixel(sX*(y) + x0, sY*(-x) + y0);
            y++;

            if (radiusError < 0) {
                radiusError += 2 * y + 1;
            }
            else {
                x--;
                radiusError+= 2 * (y - x + 1);
            }
        }
    }

    static RotateCircle(x0, y0 , radius) {

        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'green';

        var DrawPixel = function (x, y) {
            ctx.fillRect(x , y ,  1, 1);
        };

        var x = radius;
        var y = 0;
        var radiusError = 1 - x;

        while (x >= y) {
            DrawPixel(x + x0, y + y0);
            DrawPixel(y + x0, x + y0);
            DrawPixel(-x + x0, y + y0);
            DrawPixel(-y + x0, x + y0);
            DrawPixel(-x + x0, -y + y0);
            DrawPixel(-y + x0, -x + y0);
            DrawPixel(x + x0, -y + y0);
            DrawPixel(y + x0, -x + y0);
            y++;

            if (radiusError < 0) {
                radiusError += 2 * y + 1;
            }
            else {
                x--;
                radiusError+= 2 * (y - x + 1);
            }
        }
    }

    static TransitionCircle(x0, y0 , radius,xx,yy) {

        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'gray';

        var DrawPixel = function (x, y) {
            ctx.fillRect(x, y, 1, 1);
        };

        var x = radius;
        var y = 0;
        var radiusError = 1 - x;

        while (x >= y) {
            DrawPixel(xx+(x + x0),   yy+(y + y0));
            DrawPixel(xx+(y + x0), yy+(x + y0));
            DrawPixel(xx+(-x + x0), yy+(y + y0));
            DrawPixel(xx+(-y + x0), yy+(x + y0));
            DrawPixel(xx+(-x + x0), yy+(-y + y0));
            DrawPixel(xx+(-y + x0), yy+(-x + y0));
            DrawPixel(xx+(x + x0), yy+(-y + y0));
            DrawPixel(xx+(y + x0), yy+(-x + y0));
            y++;

            if (radiusError < 0) {
                radiusError += 2 * y + 1;
            }
            else {
                x--;
                radiusError+= 2 * (y - x + 1);
            }
        }
    }
}
