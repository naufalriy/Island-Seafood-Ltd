var APP_DATA = {
  "scenes": [
    {
      "id": "0-island-seafood-main-entrance",
      "name": "Island Seafood Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.2657031837099044,
        "pitch": 0.32459600357157115,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.5236676920501253,
          "pitch": 0.005403307183989625,
          "rotation": 5.497787143782138,
          "target": "1-waste-water-treatment"
        },
        {
          "yaw": 2.4230914679903357,
          "pitch": 0.24851387242811995,
          "rotation": 0,
          "target": "7-parking-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0469730162292894,
          "pitch": 0.20483401485886432,
          "title": "Island Seafood Ltd",
          "text": "Island Seafoods Ltd (ISL), established in 1986, is a fish processing company committed to supply chain sustainability and production efficiency. To meet its energy needs sustainably, ISL relies on renewable sources such as hydropower (with a hydroelectric plant since 2007) and wind power (with a wind turbine since 2021), generating more than the electricity required for its operations."
        }
      ]
    },
    {
      "id": "1-waste-water-treatment",
      "name": "Waste Water Treatment",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3287538107859547,
          "pitch": 0.2460120598574882,
          "rotation": 5.497787143782138,
          "target": "0-island-seafood-main-entrance"
        },
        {
          "yaw": -0.7020375448468172,
          "pitch": 0.2181022852503176,
          "rotation": 13.351768777756625,
          "target": "2-front-power-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2376802527941564,
          "pitch": 0.24368067734452836,
          "title": "Waste Water Treatment",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-front-power-house",
      "name": "Front Power House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.54600054278073,
          "pitch": 0.5538150218944793,
          "rotation": 0,
          "target": "5-power-house"
        },
        {
          "yaw": 0.9002617714166679,
          "pitch": 0.35363438257776814,
          "rotation": 5.497787143782138,
          "target": "6-tailrace"
        },
        {
          "yaw": -2.6283884725028024,
          "pitch": 0.19119455229261106,
          "rotation": 0,
          "target": "1-waste-water-treatment"
        },
        {
          "yaw": -0.2932501512074488,
          "pitch": 0.43444285888142176,
          "rotation": 3.9269908169872414,
          "target": "3-upper-reservoir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.30936254112216943,
          "pitch": 0.4064766506244304,
          "title": "Power House",
          "text": "<br>"
        },
        {
          "yaw": -3.039505755134538,
          "pitch": -0.18935167119911256,
          "title": "Waste Water Treatment",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-upper-reservoir",
      "name": "Upper Reservoir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9068332941437767,
          "pitch": 0.1265483428254992,
          "rotation": 10.995574287564278,
          "target": "4-intake"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4154148420663315,
          "pitch": -0.012850384883197563,
          "title": "Reservoir",
          "text": "<br>"
        },
        {
          "yaw": -0.30235940942849737,
          "pitch": 0.5493439209532696,
          "title": "Waterway",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-intake",
      "name": "Intake",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.746801055069721,
          "pitch": 0.1449641492621474,
          "rotation": 0.7853981633974483,
          "target": "3-upper-reservoir"
        },
        {
          "yaw": -2.8541952404551854,
          "pitch": 0.17631266447062188,
          "rotation": 5.497787143782138,
          "target": "2-front-power-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6641203450949638,
          "pitch": 0.7277388294283895,
          "title": "Intake",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-power-house",
      "name": "Power House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.723492632272176,
          "pitch": 0.19570488075998327,
          "rotation": 0,
          "target": "2-front-power-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.22150234816825431,
          "pitch": -0.15031183506283874,
          "title": "Francis Turbine",
          "text": "<div style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\"><div>Rate 380 kW</div><div>Head 61 m</div><div>Flow Rate Design 700 L/s</div><div>Rotational Speed 1000 RPM</div></div>"
        }
      ]
    },
    {
      "id": "6-tailrace",
      "name": "Tailrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8541839692923716,
          "pitch": 0.10183944055374283,
          "rotation": 0.7853981633974483,
          "target": "2-front-power-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-parking-area",
      "name": "Parking Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2571598682453562,
          "pitch": 0.13792183995676766,
          "rotation": 0,
          "target": "8-front-field"
        },
        {
          "yaw": 3.089612140403652,
          "pitch": 0.41114025073192195,
          "rotation": 0,
          "target": "0-island-seafood-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-front-field",
      "name": "Front Field",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7344938734903224,
          "pitch": 0.34927592705894384,
          "rotation": 13.351768777756625,
          "target": "7-parking-area"
        },
        {
          "yaw": -0.480771079413973,
          "pitch": 0.07706545341371296,
          "rotation": 5.497787143782138,
          "target": "9-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.350885734695268,
          "pitch": -0.08397920432069483,
          "title": "The Factory",
          "text": "Fish processing facility"
        }
      ]
    },
    {
      "id": "9-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4389228028843526,
          "pitch": 0.32593969621384566,
          "rotation": 0.7853981633974483,
          "target": "8-front-field"
        },
        {
          "yaw": 0.5967562930337138,
          "pitch": 0.21450020197150899,
          "rotation": 5.497787143782138,
          "target": "10-wind-turbine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.14613474625629053,
          "pitch": -0.07751472179793595,
          "title": "ISL Office",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "10-wind-turbine",
      "name": "Wind Turbine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.749036779967426,
          "pitch": 0.2514093080567825,
          "rotation": 11.780972450961727,
          "target": "9-office"
        },
        {
          "yaw": 0.07093931096579098,
          "pitch": -0.07516785491745637,
          "rotation": 0.7853981633974483,
          "target": "11-log-processing"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.17254475812223546,
          "pitch": -0.16722770792434183,
          "title": "Wind Turbine",
          "text": "Second hand turbine 850 kW<div>Vestas - V52 Turbine</div><div>Hub Height 44 m</div>"
        },
        {
          "yaw": 0.17022226130168505,
          "pitch": -0.02954510573428948,
          "title": "Log Processing",
          "text": "ISL has established a biomass unit that efficiently utilizes the circular economy model, where excess energy from the renewable energy is stored by processing and drying biomass, including wood, to create kiln-dried logs, which can be used for energy generation by burning the biomass when required to produce electricity."
        }
      ]
    },
    {
      "id": "11-log-processing",
      "name": "Log Processing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21174719247991547,
          "pitch": 0.31530441518144947,
          "rotation": 0,
          "target": "10-wind-turbine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
