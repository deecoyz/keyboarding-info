var tmp = {
    stGain: E(0),
    stSoftcaps: 0,
    calcUniTime: E(0),
    tab: 0,
    stab: [0,0,0,0],
    story_percent: 0,
    upgs_eff: {
        st: [],
        inf: [],
        ft: [],
        qu: [],
    },
    susy: {
        powerGain: [],
        powerEff: [],
    },
    quarks: {
        rewards: E(0),
        types: [E(0),E(0),E(0)],
        effs: [E(1),E(1),E(1)],
    },
}

var tmp_update = []

function updateTemp() {
    for (let x = 0; x < tmp_update.length; x++) tmp_update[x]()
}