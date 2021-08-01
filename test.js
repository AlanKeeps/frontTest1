function draw() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let running = false;
    let ball = {
        x: 500,
        y: 500,
        radius: 50,
        color: 'blue',
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
			let x = e.clientX
			let y = e.clientY
			let c = Math.sqrt(((x - 600) ** 2) + ((y - 600) ** 2))
			if (c < 346) {
				ball.x = e.clientX;
				ball.y = e.clientY;
			}
			else{
				let k = 350 / c;
				ball.x = 600 + (x - 600) * k;
				ball.y = 600 + (y - 600) * k;
			}
            ball.draw();
        }
    });
    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(600, 600, 400, 0, 2 * Math.PI);
        ctx.arc(600, 600, 395, 0, 2 * Math.PI);
        ctx.fill('evenodd');
        ctx.closePath();
    }
}