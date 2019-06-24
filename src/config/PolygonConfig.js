 /**
  * 默认散点、围栏参数结构
  */

 export default {
     tooltip: {
         show: false,
         formatter: '{count}',
         customClass: 'inmap-tooltip-black', //是否自定义样式
         offsets: {
             top: 5,
             left: 12,
         }

     },
     legend: {
         show: false,
         toFixed: 2, //保留两位小数
     },
     style: {
         isHighlight: false,
         normal: {
             borderWidth: 0.1,
             backgroundColor: 'rgba(200, 200, 200, 0.5)',
             mergeCount: 1.5,
             label: {
                 enable: true,
                 show: false,
                 color: 'rgba(0,0,0,1)',
                 font: '13px Arial'
             },
         },
         mouseOver: {
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 10,
            borderWidth: 1.5,
            label: {
                color: 'rgba(0, 0, 0, 1)'
            }
        },
         colors: [

         ],
         splitList: [],

     },
     data: [],
     checkDataType: {
         name: true,
         count: true
     },
     event: {
        emitEvent: true,
         multiSelect: false, //是否支持多选
         onMouseClick() {},
         onMouseOver() { }, 
         onState() {

         }
     }
 };