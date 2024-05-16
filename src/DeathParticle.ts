import { ParticleData, ParticleEffectData } from "./types"

const DeathParticleData: ParticleEffectData = {
	"alpha": {
		"start": 1,
		"end": 1
	},
	"scale": {
		"start": 0.4,
		"end": 0,
		"minimumScaleMultiplier": 0.96
	},
	"color": {
		"start": "#ff002e",
		"end": "#270002"
	},
	"speed": {
		"start": 500,
		"end": 100,
		"minimumSpeedMultiplier": 1.1
	},
	"acceleration": {
		"x": 0,
		"y": 0
	},
	"maxSpeed": 0,
	"startRotation": {
		"min": -35+90,
		"max": 35+90
	},
	"noRotation": false,
	"rotationSpeed": {
		"min": 0,
		"max": 0
	},
	"lifetime": {
		"min": 0.22,
		"max": 0.8
	},
	"blendMode": "normal",
	"frequency": 0.001,
	"emitterLifetime": 0.1,
	"maxParticles": 30,
	"pos": {
		"x": 0,
		"y": 0
	},
	"addAtBack": false,
	"spawnType": "point"
}

export default DeathParticleData;