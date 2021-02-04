
	alert("Click Ok for page to load Stats\n:)");

FusionCharts.ready(function() {
    var visitChart = new FusionCharts({
      type: 'column3d',
      renderAt: 'chart-container',
      width: '1350',
      height: '700',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "Labour Force Per State",
          "subCaption": "Q2 2020",
          "xAxisName": "State",
          "yAxisName": "Labour Force Population",
          "lineThickness": "3"
        },
        "data": [{
            "label": "ABIA",
            "value": "1605290"
          },
          {
            "label": "ADAMAWA ",
            "value": "1789609"
          },
          {
            "label": "AKWA-IBOM",
            "value": "2534495"
          },
          {
            "label": "ANAMBRA",
            "value": "2256435"
          },
          {
            "label": "BAUCHI",
            "value": "2535661"
          },
          {
            "label": "BAYELSA",
            "value": "1033280"
          },
          {
            "label": "BENUE",
            "value": "2641049"
          },
          {
            "label": "BORNO",
            "value": "1130154"
          },
          {
            "label": "CROSS RIVER",
            "value": "1959675"
          },
          {
            "label": "DELTA",
            "value": "2494452 "
          },
          {
            "label": "EBONYI",
            "value": "1337032"
          },
          {
            "label": "EDO",
            "value": "1985765"
          },
          {
            "label": "EKITI",
            "value": "1218848 "
          },
          {
            "label": "ENUGU",
            "value": "2150839"
          },
          {
            "label": "GOMBE",
            "value": "1330299"
          },
          {
            "label": "IMO",
            "value": "2484757"
          },
          {
            "label": "JIGAWA",
            "value": "1979245"
          },
          {
            "label": "KADUNA",
            "value": "3363515"
          },
          {
            "label": "KANO",
            "value": "4512843 "
          },
          {
            "label": "KATSINA",
            "value": "2756710 "
          },
          {
            "label": "KEBBI",
            "value": "1527375"
          },
          {
            "label": "KOGI",
            "value": "1878990"
          },
          {
            "label": "KWARA",
            "value": "1348737"
          },
          {
            "label": "LAGOS",
            "value": "6831870"
          },
          {
            "label": "NASARAWA",
            "value": "1035259"
          },
          {
            "label": "NIGER",
            "value": "2093381"
          },
          {
            "label": "OGUN",
            "value": "2229187"
          },
          {
            "label": "ONDO",
            "value": "2085659"
          },
          {
            "label": "OSUN",
            "value": "1937531"
          },
          {
            "label": "OYO",
            "value": "3174707 "
          },
          {
            "label": "PLATEAU",
            "value": "1832185 "
          },
          {
            "label": "RIVERS",
            "value": "3921860"
          },
          {
            "label": "SOKOTO",
            "value": "1557378"
          },
         
          {
            "label": "TARABA",
            "value": "1351313 "
          },
          {
            "label": "YOBE",
            "value": "1115935 "
          },
          {
            "label": "ZAMFARA",
            "value": "1495490 "
          },
          {
            "label": "FCT, ABUJA",
            "value": "1775089"
          }
        ],
        
      }
    });
  
    visitChart.render();
  });
  
