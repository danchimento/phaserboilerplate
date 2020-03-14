export default class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "scene 1" });

        this.objects = [];
    }

    init() {
        console.log("Initializing scene 1...")
    }

    preload() {
        console.log("Preloading...");
    }

    create() {
        console.log("Creating...");

        // For some reason none of the objects appear if this isn't here
        this.add.text(10, 10, "v1.0");
        
        var path = this.add.path(100, 100)
            .lineTo(400, 100)
            .lineTo(400, 400)
            .lineTo(100, 400)
            .lineTo(100, 100);

        var graphics = this.add.graphics({
            lineStyle: {
                width: 3,
                color: "0x00ff00",
                alpha: 1
            }
        });

        path.draw(graphics);

        var rect = this.add.rectangle(100, 100, 50, 50, "0xff0000");

        rect.pathFollower = this.plugins.get('rexPathFollower')
            .add(rect, {
                path: path,
                t: 0,
                rotateToPath: false
            });

        this.tweens.add({
            targets: rect.pathFollower,
            t: 1,
            ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 3000,
            repeat: -1,
            yoyo: false
        });

    }

    update() {
        
    }
}