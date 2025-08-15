var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Üsküdar Suyolu / Üsküdar Waterway',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
         {
            id: 'seven',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.097, 41.009],
                zoom:10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            },
         {
            id: 'slug-style-id',
            alignment: 'left',
            hidden:false,
            title: '',
            image: 'https://i.ibb.co/k6PF4d7c/MEF-AAP-027-BAP-2025-07-31-11-40-20.png',
            description: '',
            location: {
                center: [29.011, 41.019],
                zoom:17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation:false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixteen',
            alignment: 'centered',
            hidden:false,
            title: '',
            image: 'https://i.ibb.co/XZRLtZfk/MEF-AAP-027-BAP-2025-08-09-13-40-02.png',
            description: '',
            location: {
                center: [29.011, 41.019],
                zoom:14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/21ZC8NHf/MEF-AAP-027-BAP-2025-07-31-11-31-47.png',
            description: '',
            location: {
                center: [29.010, 41.022],
                zoom: 17,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/9mzDYfLW/MEF-AAP-027-BAP-2025-07-19-17-17-00.png',
            description: '',
            location: {
                center: [29.014, 41.024],
                zoom: 17,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/q366drgb/MEF-AAP-027-BAP-2025-07-22-14-04-25.png',
            description: '',
            location: {
                center: [29.040, 41.022],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'five-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/B2ML1g75/MEF-AAP-027-BAP-2025-07-22-14-09-21.png',
            description: '',
            location: {
                center: [29.053, 41.019],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'six-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.056, 41.013],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'seven-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.064, 41.012],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'eight-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.076, 41.011],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
             {
            id: 'nine-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.081, 41.018],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'ten-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.087, 41.021],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'eleven-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.089, 41.026],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
             {
            id: 'twelve-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.087, 41.030],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
             {
            id: 'thirteen-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/KcWDwszV/MEF-AAP-027-BAP-2025-08-08-20-23-41.png',
            description: '',
            location: {
                center: [29.087, 41.030],
                zoom: 12,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'fourteen-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/7NtRRTDG/MEF-AAP-027-BAP-2025-08-09-20-33-48.png',
            description: '',
            location: {
                center: [29.087, 41.030],
                zoom: 12,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
             
             
       
    ]
};
