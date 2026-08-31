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
        let mult = new Decimal(1)
        if (hasMilestone('b', 0)) mult = mult.times(2)
        if (hasMilestone('b', 1)) mult = mult.times(2)
        if (hasMilestone('b', 3)) mult = mult.times(1.73)
        if (hasUpgrade('b', 12)) mult = mult.times(1.86)

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
            description: "descension points boosts points.",
            cost: new Decimal(10),
            effect() {
                return player[this.layer].points.add(1).pow(0.5);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"; },
        },
        13: {
            title: "tripler",
            description: "x3 point gain.",
            cost: new Decimal(30),
        },
        14: {
            title: "tripler^2",
            description: "x3 point gain.",
            cost: new Decimal(50),
        },
        15: {
            title: "tenfold",
            description: "x10 point gain.",
            cost: new Decimal(100),
        },
        21: {
            title: "another tenfold",
            description: "x10 point gain.",
            cost: new Decimal(200),
        },
        22: {
            title: "doubler^2",
            description: "x2 point gain.",
            cost: new Decimal(1000),
        },
        23: {
            title: "doubler^3",
            description: "x2 point gain.",
            cost: new Decimal(2000),
        },
        24: {
            title: "doubler^4",
            description: "x2 point gain.",
            cost: new Decimal(3500),
        },
        25: {
            title: "doubler.5",
            description: "x2.5 point gain.",
            cost: new Decimal(15000),
        },
        31: {
            title: "synergetically",
            description: "points boosts points",
            cost: new Decimal(44444),
            effect() {
                if (hasUpgrade('b', 15)) return player.points.add(1).pow(0.1095);
                if (hasUpgrade('b', 14)) return player.points.add(1).pow(0.105);
                return player.points.add(1).pow(0.1);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"; },
        },
        32: {
            title: "tripler^3",
            description: "x3 point gain.",
            cost: new Decimal("1.75e5"),
        },
        33: {
            title: "tripler^4",
            description: "x3 point gain.",
            cost: new Decimal("7e5"),
        },
        34: {
            title: "one more tenfold",
            description: "x10 point gain.",
            cost: new Decimal("2.5e6"),
        },
        35: {
            title: "variation",
            description: "x2.1 point gain.",
            cost: new Decimal("2.5e7"),
        },
        41: {
            title: "variation2",
            description: "x2.75 point gain.",
            cost: new Decimal("4.9e7"),
        },
        42: {
            title: "variation3",
            description: "x2.47 point gain.",
            cost: new Decimal("8.8e7"),
        },
        43: {
            title: "tripler^5",
            description: "x3 point gain.",
            cost: new Decimal("1.6e8"),
        },
        44: {
            title: "variation4",
            description: "x2.39 point gain.",
            cost: new Decimal("6.7e8"),
        },
        45: {
            title: "just one more tenfold before the big reset",
            description: "x10 point gain.",
            cost: new Decimal("8.7e8"),
        },
        51: {
            title: "descension expansion",
            description: "x3.45 point gain.",
            cost: new Decimal("2.5e10"),
            unlocked() { return hasMilestone('b', 1); }, // Moved unlock condition here per upgrade

        },
        52: {
            title: "elevenfold",
            description: "x11 point gain.",
            cost: new Decimal("2e12"),
            unlocked() { return hasMilestone('b', 1); }, // Moved unlock condition here per upgrade

        },
        53: {
            title: "elevenfold^2",
            description: "x11 point gain.",
            cost: new Decimal("1e16"),
            unlocked() { return hasMilestone('b', 1); }, // Moved unlock condition here per upgrade

        },
        54: {
            title: "big points",
            description: "x25 point gain.",
            cost: new Decimal("6.9e19"),
            unlocked() { return hasMilestone('b', 1); }, // Moved unlock condition here per upgrade

        },
        55: {
            title: "'tiny bit less than big' points",
            description: "x23 point gain.",
            cost: new Decimal("4.04e24"),
            unlocked() { return hasMilestone('b', 1); }, // Moved unlock condition here per upgrade

        },
    },
    row: 0, 
    hotkeys: [
        {key: "d", description: "D: Reset for descension points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return true; }
});

addLayer("b", {
    name: "bolt", 
    symbol: "B", 
    position: 0, 
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#84ff6b",
    requires: new Decimal(1e10), 
    resource: "bolts", 
    baseResource: "descension points", 
    baseAmount() { return player.d.points; }, 
    type: "normal", 
    exponent: 0.4, 
    gainMult() { 
        let mult = new Decimal(1); 
        return mult;
    },
    gainExp() { 
        return new Decimal(1);
    },
    row: 1, 
    hotkeys: [
        {key: "b", description: "B: Reset for bolts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return true; },
    milestones: {
        0: {
            requirementDescription: "1 bolt",
            effectDescription: "x2 descension points",
            done() { return player.b.points.gte(1); }
        },
        1: {
            requirementDescription: "4 bolts",
            effectDescription: "x2.5 points, and x2 descension points again and unlock more descension upgrades",
            done() { return player.b.points.gte(4); }
        },
        2: {
            requirementDescription: "5 bolts",
            effectDescription: "x7.77 points",
            done() { return player.b.points.gte(5); }
        },
        3: {
            requirementDescription: "10 bolts",
            effectDescription: "x2 points, x1.73 descension points, unlock bolt upgrades",
            done() { return player.b.points.gte(10); }
        },
        4: {
            requirementDescription: "200 bolts",
            effectDescription: "x11 points",
            done() { return player.b.points.gte(200); }
        }, 
    },
    milestonePopups: false, // Added comma here
    upgrades: {
        11: {
            title: 'bolt upgrade 1',
            description: "x3.33 points",
            cost: new Decimal(5),
            unlocked() { return hasMilestone('b', 3); }, // Moved unlock condition here per upgrade
        },
        12: {
            title: "descension depth",
            description: "x1.86 descension points",
            cost: new Decimal(9),
            unlocked() { return hasMilestone('b', 3); }, // Moved unlock condition here per upgrade
        },
        13: {
            title: "bolted points",
            description: "x4 points",
            cost: new Decimal(16),
            unlocked() { return hasMilestone('b', 3); }, // Moved unlock condition here per upgrade
        },
        14: {
            title: "synergeticallier",
            description: "point synergy is slightly stronger",
            cost: new Decimal(27),
            unlocked() { return hasMilestone('b', 3); }, // Moved unlock condition here per upgrade
        },
        15: {
            title: "synergeticallierly",
            description: "point synergy is more slightly stronger",
            cost: new Decimal(53),
            unlocked() { return hasMilestone('b', 3); }, // Moved unlock condition here per upgrade
        },
    },
});