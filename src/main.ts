// Dependency imports
import kaboom from "kaboom";
import "kaboom/global";


// Other imports
import ParticleEffect, { Particle } from "./ParticleManager/renderer";
import DeathParticleData from "./DeathParticle";
import WaterSplashEffectData from "./WaterSplash";




kaboom({ // Client Start
	background: [20, 20, 40],
	logMax: 10,
	logTime: 10000,
})


const WaterSplashEffect = new ParticleEffect(WaterSplashEffectData, {
	position: center(),
	angle: 90
})

onClick(() =>{
	WaterSplashEffect.emit()
})

onDraw(() =>{
	WaterSplashEffect.emitterData.position = mousePos()
	WaterSplashEffect.emitterData.angle += dt() * 100
	WaterSplashEffect.render()
})