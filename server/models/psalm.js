'use strict';

module.exports = function(Psalm) {
    Psalm.getPs1 = () => {
        return Promise.resolve({
            psalm: [
                {
                    verse: 1,
                    message: [
                        {
                            lang: "EN",
                            message: [
                                "AS,FDHDSDASHMDSAJ"
                            ]
                        },
                        {
                            lang: "LA",
                            message: [
                                "beatus vir qui non abiit in consilio impiorum et in via peccatorum non stetit et in cathedra pestilentiae non sedit"
                            ]
                        },
                    ]
                },
                {
                    verse: 2,
                    message: [
                        {
                            lang: "EN",
                            message: [
                                "AS,FDHDSDASHMDSAJ"
                            ]
                        },
                        {
                            lang: "LA",
                            message: [
                                "sed in lege Domini voluntas eius et in lege eius meditabitur die ac nocte"
                            ]
                        },
                    ]
                },
/*1:3 et erit tamquam lignum quod plantatum est secus decursus aquarum quod fructum suum dabit in tempore suo et folium eius non defluet et omnia quaecumque faciet prosperabuntur
1:4 non sic impii non sic; sed tamquam pulvis quem proicit ventus a facie terrae;
1:5 ideo non resurgent impii in iudicio neque peccatores in consilio iustorum
1:6 quoniam novit Dominus viam iustorum et iter impiorum peribit*/
            ]
        })
    }

    Psalm.remoteMethod('getPs1', {
        http: {path: '/1', verb: 'GET'},
        returns: {root: true, type: 'Object'}
    })
};
