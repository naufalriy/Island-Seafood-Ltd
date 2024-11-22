var APP_DATA = {
  "scenes": [
    {
      "id": "0-island-seafood-ltd",
      "name": "Island Seafood Ltd",
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
          "yaw": 2.4046188241021653,
          "pitch": 0.27954699511354875,
          "rotation": 0,
          "target": "1-parking-area"
        },
        {
          "yaw": -0.49790877636558406,
          "pitch": 0.012378429713541195,
          "rotation": 5.497787143782138,
          "target": "6-waste-water-treatment"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0268056075361685,
          "pitch": 0.21416469632558943,
          "title": "Island Seafood Ltd",
          "text": "Island Seafoods Ltd (ISL), established in 1986, is a fish processing company committed to supply chain sustainability and production efficiency. To meet its energy needs sustainably, ISL relies on renewable sources such as hydropower (with a hydroelectric plant since 2007) and wind power (with a wind turbine since 2021), generating more than the electricity required for its operations."
        }
      ]
    },
    {
      "id": "1-parking-area",
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
          "yaw": -0.30679942508420766,
          "pitch": 0.13497884811654082,
          "rotation": 0,
          "target": "2-front-field"
        },
        {
          "yaw": 3.087639795327169,
          "pitch": 0.27495509754691305,
          "rotation": 0,
          "target": "0-island-seafood-ltd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-field",
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
          "yaw": -0.6097266912124759,
          "pitch": 0.08336846551116217,
          "rotation": 5.497787143782138,
          "target": "3-office"
        },
        {
          "yaw": 1.8963912422143174,
          "pitch": 0.27942413301981084,
          "rotation": 0.7853981633974483,
          "target": "1-parking-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3239275571407134,
          "pitch": -0.052319731008729775,
          "title": "The Factory",
          "text": "Fish processing facility&nbsp;specializing in primary products such as Mackerel, Horse Mackerel, Herring, Sprat, and Blue Whiting."
        }
      ]
    },
    {
      "id": "3-office",
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
          "yaw": 0.5629236235677553,
          "pitch": 0.21563365925925382,
          "rotation": 5.497787143782138,
          "target": "4-wind-turbine"
        },
        {
          "yaw": 2.598375354727904,
          "pitch": 0.31274483741997905,
          "rotation": 0.7853981633974483,
          "target": "2-front-field"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.22732225183440313,
          "pitch": -0.09749893992410108,
          "title": "ISL Office",
          "text": "Receptionist area as well as the workspace for ISL managers, and facilities for handling company operations<div><br></div><div>https://islandseafoodsltd.ie/</div>"
        },
        {
          "yaw": -0.11521890311958316,
          "pitch": 0.14050124115328977,
          "title": "Award Plaque",
          "text": "Bord Iascaigh Mhara (BIM) awarded ISL the <strong>Green Business of the Year</strong> title at the Green Awards 2015. ISL has been actively involved in green initiatives for several years, utilizing hydropower to generate 65% of its electricity needs and reducing greenhouse gas emissions by 350 tonnes annually.<br><br>https://bim.ie/news-and-events/news/island-seafoods-recognised-as-green-business-of-the-year-at-green-awards-2015/"
        }
      ]
    },
    {
      "id": "4-wind-turbine",
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
          "yaw": -0.015692197945032405,
          "pitch": -0.03297000895340041,
          "rotation": 0.7853981633974483,
          "target": "5-log-processing"
        },
        {
          "yaw": -2.778973334720032,
          "pitch": 0.31384375700177003,
          "rotation": 0,
          "target": "3-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.24645256940354976,
          "pitch": -0.14319401489120054,
          "title": "Wind Turbine",
          "text": "Operated in 2021.<div>Second hand turbine 850 kW.</div><div>Vestas - V52 Turbine</div><div>Hub height 44 m</div>"
        },
        {
          "yaw": 0.19354832812678602,
          "pitch": -0.1692247168084684,
          "title": "Log Processing",
          "text": "<div>ISL has established a biomass unit that efficiently utilizes the circular economy model, where excess energy from the renewable energy is stored by processing and drying biomass, including wood, to create kiln-dried logs, which can be used for energy generation by burning the biomass when required to produce electricity.</div><div>Wind Turbine</div>"
        }
      ]
    },
    {
      "id": "5-log-processing",
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
          "yaw": -0.21696068829010784,
          "pitch": 0.25917679189007536,
          "rotation": 0,
          "target": "4-wind-turbine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-waste-water-treatment",
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
          "yaw": -0.5352893653092714,
          "pitch": 0.16042171470802735,
          "rotation": 0.7853981633974483,
          "target": "7-front-Hydropower-house"
        },
        {
          "yaw": -2.143889904305162,
          "pitch": 0.2712766431632758,
          "rotation": 5.497787143782138,
          "target": "0-island-seafood-ltd"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Waste Water Treatment",
          "text": "Treatment plat capacity is 15 cubic meter per hour. The treatment plant processes 9 cubic meter per hour for 9 - 10 hours daily, 5 days per week. Electricity consumption is 18-20 kW/hour. The treatment plant running continously, including recycling at night."
        }
      ]
    },
    {
      "id": "7-front-Hydropower-house",
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
          "yaw": -0.30813241811903325,
          "pitch": 0.5007794138036772,
          "rotation": 3.9269908169872414,
          "target": "11-upper-reservoir"
        },
        {
          "yaw": 0.6028996098338766,
          "pitch": 0.6572875166147938,
          "rotation": 0,
          "target": "9-Hydropower-house"
        },
        {
          "yaw": 0.42087085811837355,
          "pitch": 0.4348890196324682,
          "rotation": 1.5707963267948966,
          "target": "8-plaque-detail"
        },
        {
          "yaw": 0.901471885844483,
          "pitch": 0.32223852427809874,
          "rotation": 4.71238898038469,
          "target": "10-tailrace"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2614203970164013,
          "pitch": 0.39287600182961846,
          "title": "Hydropower House",
          "text": "The project was supported by Interreg, which funds the construction of the hydropower house with a budget of 310,000 Euros."
        }
      ]
    },
    {
      "id": "8-plaque-detail",
      "name": "Plaque Detail",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-Hydropower-house",
      "name": "Hydropower House",
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
          "yaw": -2.728329378482389,
          "pitch": 0.2382770248658268,
          "rotation": 0,
          "target": "7-front-Hydropower-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.20439644596952178,
          "pitch": -0.005326469512366927,
          "title": "Francis Turbine",
          "text": "Rate 380 kW<br>Head 61 m<br>Flow rate design 700 L/s<div>Rotational speed 1000 RPM</div>"
        }
      ]
    },
    {
      "id": "10-tailrace",
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
          "yaw": -1.1536627384290377,
          "pitch": 0.0333884436921803,
          "rotation": 0.7853981633974483,
          "target": "7-front-Hydropower-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upper-reservoir",
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
          "yaw": 1.8924083386727686,
          "pitch": 0.1555028391775437,
          "rotation": 4.71238898038469,
          "target": "12-intake"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.26947296712514657,
          "pitch": 0.6241643860193697,
          "title": "Waterway",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "12-intake",
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
          "yaw": -2.9208328796153413,
          "pitch": 0.20299403163485863,
          "rotation": 7.853981633974483,
          "target": "11-upper-reservoir"
        },
        {
          "yaw": -3.0685854193171114,
          "pitch": 0.21910412202086604,
          "rotation": 5.497787143782138,
          "target": "7-front-Hydropower-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.667400175844879,
          "pitch": 0.7779463033399914,
          "title": "Intake",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
