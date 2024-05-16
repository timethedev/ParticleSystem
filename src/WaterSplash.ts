import { ParticleData, ParticleEffectData } from "./types"

const ParticleEffect: ParticleEffectData = {
	"alpha": {
		"start": 1,
		"end": 0.9
	},
	"scale": {
		"start": 0.4,
		"end": 0.1,
		"minimumScaleMultiplier": 0.2
	},
	"color": {
		"start": "#ffffff",
		"end": "#00aaff"
	},
	"speed": {
		"start": 800,
		"end": 0,
		"minimumSpeedMultiplier": 1.1
	},
	"acceleration": {
		"x": 0,
		"y": 4
	},
	"maxSpeed": 0,
	"startRotation": {
		"min": -7.5,
		"max": 7.5
	},
	"noRotation": false,
	"rotationSpeed": {
		"min": 0,
		"max": 0
	},
	"lifetime": {
		"min": 0.05,
		"max": 0.6
	},
	"blendMode": "normal",
	"frequency": 0.001,
	"emitterLifetime": 0.1,
	"maxParticles": 50,
	"pos": {
		"x": 0,
		"y": 0
	},
	"addAtBack": false,
	"spawnType": "point",
	"animationSpeed": 2
}

export default ParticleEffect