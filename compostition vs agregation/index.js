/* const dictionary = {
    ammoType: {

    }
}
 */
class Gun {
    constructor(cal, length) {
        this.caliber = cal
        this.barrelLenght = length
    }

    getCaliber() {
        return this.caliber
    }

    isOnTarget(dice) {
        return (this.barrelLenght + dice) > 100
    }
}

class Ammo {
    constructor(someGun, type) {
        this.gun = someGun
        this.type = type
    }

    getDamage() {
        return this.gun.getCaliber()*3
    }

    getPenetration() {
        return gun.getCaliber()
    }

    toString() {
        return `Снаряд ${this.type} к пушке калибра ${this.gun.getCaliber()}`
    }
}

class HECartridge extends Ammo {
    constructor(someGun) {
        super(someGun, "Фугасный")
    }

    getDamage() {
        return super.getDamage()
    }
}

class HEATCartridge extends Ammo {
    constructor(someGun) {
        super(someGun, "Кумулятивный")
    }

    getDamage() {
        return super.getDamage() * 0,6
    }
}

class APCartridge  extends Ammo {
    constructor(someGun) {
        super(someGun, "Подкалиберный")
    }

    getDamage() {
        return super.getDamage() * 0,3
    }
}

class Armour
{
    constructor(thickness, type)
    {
        this.thickness = thickness
        this.type = type
    }

    isPenetrated(projectile) {
        return projectile.getDamage() > this.thickness
    }
}

class HArmour extends Armour {
    constructor(thickness) {
        super(thickness, 'Гомогенная')
    }

    isPenetrated(projectile) {
        switch (projectile.type) {
            case "Фугасный" : return projectile.getDamage() > super.thickness * 1.2
            case "Кумулятивный" : return projectile.getDamage() > super.thickness * 1
            case "Подкалиберный" : return projectile.getDamage() > super.thickness * 0.7
        }
    }
}

class SArmour extends Armour {
    constructor(thickness) {
        super(thickness, 'Анти куммулятив')
    }

    isPenetrated(projectile) {
        switch (projectile.type) {
            case "Фугасный" : return projectile.getDamage() > super.thickness * 0.7
            case "Кумулятивный" : return projectile.getDamage() > super.thickness * 1.2
            case "Подкалиберный" : return projectile.getDamage() > super.thickness * 1
        }
    }
}

class CArmour extends Armour {
    constructor(thickness) {
        super(thickness, 'Анти подкалиберная')
    }

    isPenetrated(projectile) {
        switch (projectile.type) {
            case "Фугасный" : return projectile.getDamage() > super.thickness * 1
            case "Кумулятивный" : return projectile.getDamage() > super.thickness * 0.7
            case "Подкалиберный" : return projectile.getDamage() > super.thickness * 1.2
        }
    }
}

class Panzer {
    static model
    static gun
    static armours = new Array()
    static ammos = new Array()
    static health = 100
    static loadedAmmo = null
    static selectedArmour

    constructor(name, someGun, armourWidth, healthPoint) {
        this.model = name
        this.gun = someGun
        this.health = healthPoint
        this.armours = new Array()
        this.ammos = new Array()
        this.addArmour(armourWidth)
        this.loadAmmos()
        this.selectedArmour = this.armours[0]
        this.loadedAmmo = null

    }

    /* get LoadedAmmo() {
        return this.loadedAmmo
    }

    set LoadedAmmo(value) {
        this.loadedAmmo = value
    }

    get SelectedArmour() {
        return this.selectedArmour
    }

    set LoadedAmmo(loadedAmmo) {
        this.loadedAmmo = loadedAmmo
    } */
    
    addArmour(armourWidth) {
        this.armours.push(new SArmour(armourWidth))
        this.armours.push(new HArmour(armourWidth))
        this.armours.push(new CArmour(armourWidth))
    }

    loadAmmos() {
        for(let i = 0; i < 10; i++) {
            this.ammos.push(new APCartridge(this.gun))
            this.ammos.push(new HEATCartridge(this.gun))
            this.ammos.push(new HECartridge(this.gun))
        }
    }

    selectArmour(type) {
        this.armours.map(armour => {
            if(armour.type === type) this.selectedArmour = armour
        })
    }

    selectAmmo(type) {
        const idx = this.ammos.findIndex((ammo) => ammo.type === type)
        if(idx < 0) {
            console.log(`Сорян, командир, ${type} закончились!`)
        } else {
            this.loadedAmmo = this.ammos[idx]
            console.log("Заряжено😶")
        }
    }

    shoot() {
        if (!this.loadedAmmo) {
            console.log("Не заряжено😮")
            return null
        } else {
            const firedAmmo = this.loadedAmmo
            const idx = this.ammos.findIndex((ammo) => ammo.type === firedAmmo.type)
            this.ammos = [
                ...this.ammos.slice(0, idx),
                ...this.ammos.slice(idx + 1, this.ammos.length)
            ]
            const dice = Math.ceil(Math.random()* 100)
            const hit = this.gun.isOnTarget(dice)
            if (hit) {
                console.log("Попадание!✨")
                return firedAmmo
            } else {
                console.log("Промах!😥")
                return null
            }
        }
    }

    handleHit(projectile) {
        if(this.selectedArmour.isPenetrated(projectile)) {
            this.health -= projectile.getDamage()
        } else {
            console.log("Броня не пробита😫")
        }
    }
    
}

const gun = new Gun(15.6, 7)
const heCartridge = new HECartridge(gun)
const hArmour = new HArmour(100)

const panzer1 = new Panzer('tiger 1', gun, 50, 100)
const panzer2 = new Panzer('tiger 2', gun, 50, 100)
let buff
panzer1.selectAmmo('Подкалиберный')