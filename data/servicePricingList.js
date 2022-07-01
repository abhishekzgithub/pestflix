export const servicePricingList=[
    {
        type:"watertankcleaning",
        name:"Water Tank",
        description:"Water Tank Cleaning Services",
        services:[
            {
                type:"PVC",
                name:"PVC",
                description:"PVC Made",
                litrevsprice:[
                    {
                    "litre":500,
                    "price":499,
                    },
                    {
                    "litre":1000,
                    "price":599

                    },
                    {
                    "litre":1500,
                    "price":649,

                    },
                    {
                    "litre":2000,
                    "price":749,

                    },
                    {
                    "litre":3000,
                    "price":1099,

                    },
                    {
                    "litre":5000,
                    "price":1499,
                    }
            ]
            },
            {
                type:"RCC",
                name:"RCC",
                description:"RCC Made",
                litrevsprice:[
                    {
                    "litre":1000,
                    "price":749,
                    },
                    {
                    "litre":2000,
                    "price":1099

                    },
                    {
                    "litre":5000,
                    "price":1499,

                    },
                    {
                    "litre":10000,
                    "price":1999,

                    },
                    {
                    "litre":15000,
                    "price":2499,

                    },
                    {
                    "litre":20000,
                    "price":2999,
                    }
            ]
            },
            {
                type:"Septic",
                name:"Septic",
                description:"Septic Tank Cleaning",
                diameter:"5-12km radius",
                price:1500,
                vehicleQuantity:1,
                capacity:3500,
                litrevsprice:[
                    {
                        litre:3500,
                        price:1500,
                    }
                ]
            }
        ]
    },
    {
        type:"pest",
        name:"Pest Control",
        description:"Pest Control",
        services:[
            {
                type:"general_pest_control",
                name:"General Pest Control",
                description:"General pest control",
                areaVsprice:[
                    {
                        area:"kitchen_bathroom",
                        type:1,
                        rates:599
                    },
                    {
                        area:"kitchen_bathroom",
                        type:2,
                        rates:699
                    },
                    {
                        area:"kitchen_bathroom",
                        type:3,
                        rates:799
                    },
                    {
                        area:"kitchen_bathroom",
                        type:4,
                        rates:899
                    }
                ]
            },
            {
                type:"apartment",
                name:"Apartement Pest Control",
                description:"Apartment",
                areaVsprice:[
                    {
                        area:"1BHK",
                        type:1,
                        rates:1099
                    },
                    {
                        area:"2BHK",
                        type:2,
                        rates:1299
                    },
                    {
                        area:"3BHK",
                        type:3,
                        rates:1399
                    },
                    {
                        area:"4BHK",
                        type:4,
                        rates:1499
                    },
                    {
                        area:"5BHK",
                        type:5,
                        rates:1799
                    }
                ]

            },
            {
                type:"bunglow",
                name:"Bunglow/ Courtyard Pest Control",
                description:"bunglow/courtyard",
                areaVsprice:[
                    {
                        area:"2000-3000 sqft",
                        type:1,
                        rates:1699
                    },
                    {
                        area:"3000-4000 sqft",
                        type:2,
                        rates:1899
                    },
                    {
                        area:"4000-5000 sqft",
                        type:3,
                        rates:2099
                    },
                    {
                        area:"5000 sqft",
                        type:4,
                        rates:2499
                    }
                ]
            },
            {
                type:"office",
                name:"Office/Retail Shop",
                description:"Office/Retail Shops",
                areaVsprice:[
                    {
                        area:"1000-1500 sqft",
                        type:1,
                        rates:1199
                    },
                    {
                        area:"1500-2000 sqft",
                        type:2,
                        rates:1499
                    },
                    {
                        area:"2000-3000 sqft",
                        type:3,
                        rates:1699
                    },
                    {
                        area:"3000-4000 sqft",
                        type:4,
                        rates:1799
                    },
                    {
                        area:"4000-5000 sqft",
                        type:5,
                        rates:1949
                    },
                    {
                        area:"5000+ sqft",
                        type:6,
                        rates:2599
                    }
                ]
            }
        ]

    },
    {
        type:"pest_bedbug",
        description:"Bed bugs Treatment",
        services:[
            
            {
                type:"bedbug_6_month",
                name:"Bed Bugs Treatment",
                description:"Bed Bugs with 6 months warranty protection plan",
                areaVsprice:[
                    {
                        area:"1BHK",
                        type:1,
                        rates:1599
                    },
                    {
                        area:"2BHK",
                        type:2,
                        rates:1699
                    },
                    {
                        area:"3BHK",
                        type:3,
                        rates:2299
                    },
                    {
                        area:"4BHK",
                        type:4,
                        rates:2599
                    },
                    {
                        area:"5BHK",
                        type:5,
                        rates:3099
                    }
                ]
            },
            {
                type:"termite_treatment",
                name:"Termite Treatment",
                description:"Service valid for 5 years on termite treatment",
                areaVsprice:[
                    {
                        area:"1BHK",
                        type:1,
                        rates:3099
                    },
                    {
                        area:"2BHK",
                        type:2,
                        rates:4099
                    },
                    {
                        area:"3BHK",
                        type:3,
                        rates:5099
                    },
                    {
                        area:"4BHK",
                        type:4,
                        rates:6099
                    },
                    {
                        area:"5BHK",
                        type:5,
                        rates:7499
                    }
                ]
            },
            {
                type:"mosquito_treatment",
                name:"Mosquito Treatment",
                description:"Mosquitoes, Fogging, Fugimation Services",
                areaVsprice:[
                    {
                        area:"1BHK",
                        type:1,
                        rates:799
                    },
                    {
                        area:"2BHK",
                        type:2,
                        rates:1099
                    },
                    {
                        area:"3BHK",
                        type:3,
                        rates:1499
                    },
                    {
                        area:"4BHK",
                        type:4,
                        rates:1999
                    },
                    {
                        area:"5BHK",
                        type:5,
                        rates:2499
                    }
                ]
            },
            {
                type:"rodent_treatment",
                name:"Rodent Treatment",
                description:"Rodent/ Rats Control with 3 month - 1 year protection plan",
                areaVsprice:[
                    {
                        area:"1BHK",
                        type:1,
                        rates:599
                    },
                    {
                        area:"2BHK",
                        type:2,
                        rates:899
                    },
                    {
                        area:"3BHK",
                        type:3,
                        rates:1299
                    },
                    {
                        area:"4BHK",
                        type:4,
                        rates:1599
                    },
                    {
                        area:"5BHK",
                        type:5,
                        rates:1899
                    }
                ]
            },
            {
                type:"beehive_treatment",
                name:"Beehive Removal",
                description:"Beehive removal per trap",
                areaVsprice:[
                    {
                        area:"1 Trap",
                        type:1,
                        rates:1500
                    },
                    {
                        area:"2 Trap",
                        type:2,
                        rates:2500
                    },
                    {
                        area:"3 Trap",
                        type:3,
                        rates:3000
                    },
                    {
                        area:"4 Trap",
                        type:4,
                        rates:3500
                    },
                    {
                        area:"5 Trap",
                        type:5,
                        rates:4000
                    }
                ]
            },

        ]
    },
    {
        type:"swimming_pool",
        description:"Swimming Pool Cleaning",
        services:[
            {
            type:"floor_wall",
            name:"Swimming Pool",
            description:"Swimming Pool Cleaning",
            areaVsprice:[
                {
                    area:"1 sqft",
                    type:1,
                    rates:15
                }
            ],
        }
        ]
    },
    {
        type:"facade_glass",
        description:"FACADE Glass Cleaning, Inner and Outer Glass Area Covered",
        services:[
            {
            type:"glass",
            name:"Facade/Glass Cleaning",
            description:"Facade/Glass Cleaning per sqft",
            areaVsprice:[
                {
                    area:"1 sqft",
                    type:1,
                    rates:20
                }
            ],
        }
        ]
    }
]
