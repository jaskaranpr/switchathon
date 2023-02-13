import { useEffect, useRef } from "react";
import Matter, {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Mouse,
  MouseConstraint,
  Events,
} from "matter-js";

const coin_names = [
  "1inch.svg",
  "atom.svg",
  "axie.svg",
  "bitcoin.svg",
  "celer.svg",
  "chiliz.svg",
  "chromia.svg",
  "coti.svg",
  "curvedaotoken.svg",
  "decentraland.svg",
  "dia.svg",
  "dot.svg",
  "elrond.svg",
  "enjincoin.svg",
  "ethereum.svg",
  "fantom.svg",
  "gala.svg",
  "harmony.svg",
  "keepnetwork.svg",
  "kybernetwork.svg",
  "loopring.svg",
  "maker.svg",
  "nano.svg",
  "ren.svg",
  "request.svg",
  "shibainu.svg",
  "sushiswap.svg",
  "thegraph.svg",
  "thesandbox.svg",
  "thetanetwork.svg",
  "zilliqa.svg",
];

const useCoinCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<Matter.World>();
  const engineRef = useRef<Matter.IEngineDefinition>();

  const startAnimation = () => {
    if (!canvasRef.current) {
      return () => {};
    }

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    const engine = Engine.create();

    engineRef.current = engine;
    worldRef.current = engine.world;

    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: WIDTH,
        height: HEIGHT,
        showAxes: false,
        wireframes: false,
      },
    });

    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const coins = coin_names.map((name, index) =>
      Bodies.circle(Math.random() * WIDTH, index * 40, 40, {
        render: {
          sprite: {
            texture: `https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/${name}`,
            xScale:2,
            yScale: 2,
          },
        },
        friction: 0.001,
        frictionAir: 0.05,
        density: 0.001,
        restitution: 0.2,
      })
    );
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const ground = Bodies.rectangle(
      (WIDTH * 5) / 2,
      HEIGHT + 30,
      WIDTH * 5,
      60,
      {
        isStatic: true,
        label: "Ground",
      }
    );
    const ceiling = Bodies.rectangle((WIDTH * 5) / 2, -30, WIDTH * 5, 60, {
      isStatic: true,
      label: "Ground",
    });
    const leftWall = Bodies.rectangle(-30, HEIGHT / 2, 60, HEIGHT, {
      isStatic: true,
      label: "Wall Left",
    });
    const rightWall = Bodies.rectangle(WIDTH + 30, HEIGHT / 2, 60, HEIGHT, {
      isStatic: true,
      label: "Wall Right",
    });

    Composite.add(engine.world, [
      boxA,
      boxB,
      ground,
      leftWall,
      rightWall,
      ceiling,
      ...coins,
    ]);
    
    let idRAF:any = null
    let inc = 0

    engine.world.gravity.y = 4
    function update() {
      if(inc > 8){
        engine.world.gravity.x = Math.cos(inc / 200)
        engine.world.gravity.y = Math.sin(inc / 200)
      }
      inc++
      idRAF = requestAnimationFrame(update.bind(this))
    }
  
    update()

    Render.run(render);

    const runner = Runner.create();

    const handleRendererResizer = () => {
      const { innerWidth: width, innerHeight: height } = window;
      console.log(ground);
      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.options.width = width;
      render.options.height = height;
      render.canvas.width = width;
      render.canvas.height = height;
      Matter.Body.setPosition(ground, { x: width / 2, y: height + 30 });
      Matter.Body.setPosition(rightWall, { x: width + 30, y: height / 2 });
    };

    Runner.run(runner, engine);

    window.addEventListener("resize", handleRendererResizer);

    return () => {
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener("resize", handleRendererResizer);
    };
  };

  const preLoad = () => {
    coin_names.forEach((coin) => {
      const image = new Image();
      image.src = `https://csk-genesis-stage.s3.ap-southeast-1.amazonaws.com/icons/coins/${coin}`;
    });
  };

  useEffect(() => {
    preLoad();
    const unMountCallback = startAnimation();
    return unMountCallback;
  }, []);
  return canvasRef;
};

export default useCoinCanvas;
