function draw() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let running = false;
    let ball = {
        x: 500,
        y: 500,
        radius: 50,
        color: '#0095DF',
        draw: function () {
            ctx.beginPath();
            ctx.arc(ball.x , ball.y , this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    canvas.addEventListener('mousemove', function(e) {
        if (!running) {
            clear();
            ball.x = e.clientX;
            ball.y = e.clientY;
            ctx.beginPath();
            ctx.arc(600, 600, 395, 0, Math.PI * 2, true);
            ctx.clip();

            while (ball.y > 945)
                ball.y--;
            while (ball.y < 255)
                ball.y++;
            while (ball.x > 945)
                ball.x--;
            while (ball.x < 255)
                ball.x++;
            ball.draw();
        }
    });
    function clear() {
        // ctx.fillStyle = "white";
        // ctx.arc(600, 600, 390, 0, 2 * Math.PI);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = '#0061a1';
        ctx.arc(600, 600, 400, 0, 2 * Math.PI);
        ctx.arc(600, 600, 395, 0, 2 * Math.PI);
        ctx.fill('evenodd');
        ctx.closePath();
        // ctx.fill();
    }
    // ctx.beginPath();
    // ctx.fillStyle = '#0061a1';
    // ctx.arc(600, 600, 400, 0, 2 * Math.PI);
    // ctx.arc(600, 600, 395, 0, 2 * Math.PI);
    // ctx.fill('evenodd');
    // ctx.closePath();
    // ctx.fill();
    function draw() {
        clear();
        // ball.draw();
        // ball.x += ball.vx;
        // ball.y += ball.vy;
        // if (ball.y + ball.vy > 400 || ball.y + ball.vy -50 < 0) {
        //     ball.vy = -ball.vy;
        // }
        // if (ball.x + ball.vx > 400 || ball.x + ball.vx - 50 < 0) {
        //     ball.vx = -ball.vx;
        // }
        ball.draw();
    }
    clear();
    draw();
// console.log(123);
    // while (1) {
   //     ctx.beginPath();
   //      ctx.fillStyle = '#0095DF';
   //      ctx.arc(10 + m.x, 10 + m.y , 55, 0, 2 * Math.PI);
   //      ctx.fill();
   //  // }
   //  ctx.closePath();
    // ball.draw()
    // ctx.arc(60, 60, 40, 0, 2 * Math.PI);
    // ctx.fill()
}