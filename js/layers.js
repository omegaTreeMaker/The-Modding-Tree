addLayer("d", {
    name: "descension", 
    symbol: "D", 
    position: 0, 
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#ce7070",
    requires: new Decimal(10), 
    resource: "descension points", 
    baseResource: "points", 
    baseAmount() { return player.points }, 
    type: "normal", 
    exponent: 0.6, 
    gainMult() { 
        let mult = new Decimal(1); // Added "let" here
        return mult;
    },
    gainExp() { 
        return new Decimal(1);
    },
        upgrades: {
        11: {
                title: "doubler",
                description: "x2 point gain.",
                cost: new Decimal(1),
        },
        12: {
                title: "increaser",
                description: "descension give more point.",
                cost: new Decimal(1),
        },
    },
    row: 0, 
    hotkeys: [
        {key: "d", description: "D: Reset for descension points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return true }
})