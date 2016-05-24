
var MakePie = {
    createNew: function (ctnJq, inConfig) {
        var ret = {};

        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                ret.myChart = ec.init(ctnJq[0]);
                ret.option = {
                    backgroundColor: "#fff",
                    title: {
                        text: inConfig['title'],
                        x: 'center',
                        y: 'bottom'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}  <br/>{c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: []
                    },
                    calculable: true,
                    series: [
                        {
                            name: inConfig['name'],
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {},
                                {},
                                {},
                                {},
                                {}
                                //{value: 1, name: ''},
                                //{value: 1, name: ''},
                                //{value: 1, name: ''},
                                //{value: 1, name: ''},
                                //{value: 1, name: ''}
                            ]
                        }
                    ]
                };

                // 为echarts对象加载数据
                ret.myChart.setOption(ret.option);


            }
        );

        ret.interval = function (inData) {
            var i = 0;
            for (i = 0; i < inData.length; ++i) {
                ret.option.series[0].data[i] = {};
                ret.option.series[0].data[i].value = inData[i]['count'];
                ret.option.series[0].data[i].name = inData[i]['name'];
                ret.option.legend.data[i] = inData[i]['name'];
            }
            ret.myChart.setOption(ret.option);
        };



        return ret;
    }
};

function coreFunc(pie1Jq, pie2Jq, pie3Jq, pie4Jq) {
    $.ajax({
        type: 'GET',
        url: '/tmp/pie',
        //contentType: 'application/json; charset=utf-8',
        success: function (msg) {
            console.log(JSON.stringify(msg));
            pie1Jq.interval(msg['data']['station']);
            pie2Jq.interval(msg['data']['host']);
            pie3Jq.interval(msg['data']['domain']);
            pie4Jq.interval(msg['data']['agent']);

        },

        error: function (xhr, err) {
            console.log("err: " + JSON.stringify(err));
        }
    });
}

function dealPieData(pie1Jq, pie2Jq, pie3Jq, pie4Jq, timeInterval){

    var refreshPieInterval=setInterval(function(){
        coreFunc(pie1Jq, pie2Jq, pie3Jq, pie4Jq);
    }, timeInterval);

}


var MakeLine={
    createNew: function(ctnJq){
        var ret={};
        require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                ret.myLine = ec.init(ctnJq[0]);


                ret.option = {
                    backgroundColor: "#fff",
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            //mark: {show: true},
                            //dataView: {show: true, readOnly: false},
                            //magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['2016-03-31', '2016-04-01', '2016-04-02', '2016-04-03', '2016-04-04', '2016-04-05', '2016-04-06']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '',
                            type: 'line',
                            stack: '总量',
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [1140, 2330, 2340, 1230, 3242, 1234, 2341]
                        },
                        //{
                        //    name: '',
                        //    type: 'line',
                        //    stack: '总量',
                        //    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        //    data: [0, 0, 0, 0, 0, 0, 0]
                        //},
                        //{
                        //    name: '',
                        //    type: 'line',
                        //    stack: '总量',
                        //    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        //    data: [0, 0, 0, 0, 0, 0, 0]
                        //},
                        //{
                        //    name: '',
                        //    type: 'line',
                        //    stack: '总量',
                        //    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        //    data: [0, 0, 0, 0, 0, 0, 0]
                        //},
                        //{
                        //    name: '',
                        //    type: 'line',
                        //    stack: '总量',
                        //    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        //    data: [0, 0, 0, 0, 0, 0, 0]
                        //}
                    ]
                };

                // 为echarts对象加载数据
                ret.myLine.setOption(ret.option);
            }
        );
        /*
        inData['x']=['2012-01-01', '','', '', '', '', '']
        inData['legend']=['station1']
        inData['series']=[{'data': [1, 2, 3], 'name': 'station1'}]
        */
        ret.interval=function(inData){
            ret.option.xAxis.data=inData['x'];
            ret.option.legend.data=inData['legend'];
            for(var i=0; i<7; ++i){
                ret.series[i].data=inData['series'][i]['data'];
                ret.series[i].name=inData['series'][i]['name'];
            }
            ret.myLine.setOption(ret.option);
        };
        return ret;
    }
};



var MakeDash={
    createNew: function(ctnJq){
        var ret={};

        require(
            [
                'echarts',
                'echarts/chart/gauge' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                ret.myDash = ec.init(ctnJq[0]);

//start option----------------------------------------------------------------------
                ret.option = {
                    tooltip: {
                        formatter: "{a} <br/>{c} {b}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            center: ['36%', '50%'],
                            name: 'CPU',
                            type: 'gauge',
                            z: 3,
                            min: 0,
                            max: 100,
                            splitNumber: 10,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    width: 5
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic'
                                }
                            },
                            detail: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                }
                            },
                            data: [{value: 40, name: 'CPU'}]
                        },

                        {
                            name: '内存',
                            type: 'gauge',
                            center: ['74%', '50%'],    // 默认全局居中
                            radius: '50%',
                            min: 0,
                            max: 2,
                            startAngle: 135,
                            endAngle: 45,
                            splitNumber: 2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#228b22'], [0.8, '#48b'], [1, '#ff4500']],
                                    width: 5
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                splitNumber: 5,
                                length: 10,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            axisLabel: {
                                formatter: function (v) {
                                    switch (v + '') {
                                        case '0' :
                                            return 'L';
                                        case '1' :
                                            return '内存';
                                        case '2' :
                                            return 'H';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            pointer: {
                                width: 2
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                show: false
                            },
                            data: [{value: 0.5, name: 'gas'}]
                        },
                        {
                            name: '磁盘',
                            type: 'gauge',
                            center: ['74%', '50%'],    // 默认全局居中
                            radius: '50%',
                            min: 0,
                            max: 2,
                            startAngle: 315,
                            endAngle: 225,
                            splitNumber: 2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#228b22'], [0.8, '#48b'], [1, '#ff4500']],
                                    width: 5
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                formatter: function (v) {
                                    switch (v + '') {
                                        case '0' :
                                            return 'L';
                                        case '1' :
                                            return '磁盘';
                                        case '2' :
                                            return 'H';
                                    }
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            pointer: {
                                width: 2
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                show: false
                            },
                            data: [{value: 0.5, name: 'gas'}]
                        }
                    ]
                };


                ret.option.series[0].data[0].value = (0 * 100).toFixed(2) - 0;
                ret.option.series[1].data[0].value = (0 * 7).toFixed(2) - 0;
                ret.option.series[2].data[0].value = (0 * 2).toFixed(2) - 0;
                //option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
                ret.myDash.setOption(ret.option, true);
            }
        )

        ret.interval=function(data){

                ret.option.series[0].data[0].value = (data.cpu).toFixed(2).toString();
                ret.option.series[1].data[0].value = data.memory;
                ret.option.series[2].data[0].value = data.disk;

                ret.myDash.setOption(ret.option, true);


        }



        return ret;
    }
};




var DashLine={
    createNew: function(ctnJq){
        var ret={};
        require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                ret.myLine = ec.init(ctnJq[0]);

                ret.option = {
                    //title: {
                    //    text: '未来一周气温变化',
                    //    subtext: '纯属虚构'
                    //},
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['CPU', 'Memory']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            position: 'left',
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            min: 0,
                            max: 100,
                        },
                        {
                            type: 'value',
                            position: 'right',
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                    ],
                    series: [
                        {
                            name: 'CPU',
                            type: 'line',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            //markPoint: {
                            //    data: [
                            //        {type: 'max', name: '最大值'},
                            //        {type: 'min', name: '最小值'}
                            //    ]
                            //},
                            //markLine: {
                            //    data: [
                            //        {type: 'average', name: '平均值'}
                            //    ]
                            //}
                        },
                        {
                            name: 'Memory',
                            type: 'line',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            //markPoint: {
                            //    data: [
                            //        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            //    ]
                            //},
                            //markLine: {
                            //    data: [
                            //        {type: 'average', name: '平均值'}
                            //    ]
                            //}
                        }
                    ]
                };



                // 为echarts对象加载数据
                ret.myLine.setOption(ret.option);
            }
        );

        ret.interval=function(inData){
            ret.option.series[0].data.pop();
            ret.option.series[0].data.unshift(inData.cpu);
            ret.option.series[1].data.pop();
            ret.option.series[1].data.unshift(inData.memory);
            ret.myLine.setOption(ret.option);
        }


        return ret;
    }
};



function getSvInfo(boardObj, lineObj){

    setInterval(function(){(Math.random() * 100).toFixed(2)
        $.get('./tmp/server_info', function(data){
            var cpuInfo=data['cpu'];
            var memUseInfo=data['mem']['used'];
            var memAllInfo=data['mem']['all'];
            var memPercentage=(memUseInfo/memAllInfo*100).toFixed(2);
            var diskUseInfo=data['disk']['used'];
            var diskAllInfo=data['disk']['all'];
            var diskPercentage=(diskUseInfo/diskAllInfo*100).toFixed(2);
            boardObj.interval({
                'cpu': cpuInfo,
                'memory': memPercentage/50,
                'disk': diskPercentage/50,
            });
            $("#cpu-percentage").text((cpuInfo).toFixed(2)+'%');
            $("#mem-info").text(memUseInfo+"M/"+memAllInfo+"M");
            $("#disk-info").text(diskUseInfo+"G/"+diskAllInfo+"G");
            //
            lineObj.interval({
                'cpu': cpuInfo,
                'memory': memPercentage,

            });

        });

    }, 500);


}


$(document).ready(function () {
    require.config({
        paths: {
            echarts: './static/js/build/dist'
        }
    });

    var pie1=MakePie.createNew($("#pie1"),{
        'title': '部门',
        'name':'部门'
    });
    var pie2=MakePie.createNew($("#pie2"),{
        'title': '访问网站比例',
        'name': '访问网站'
    });
    var pie3=MakePie.createNew($("#pie3"),{
        'title': '访问网址比例',
        'name': '访问网址'
    });
    var pie4=MakePie.createNew($("#pie4"), {
        'title': '浏览器比例',
        'name':'浏览器'
    });
    setTimeout(function(){
        coreFunc(pie1, pie2, pie3, pie4);
    }, 300);
    dealPieData(pie1, pie2, pie3, pie4, 1800000);
    var line=MakeLine.createNew($("#stacked-graph"));

    var dashBoard=MakeDash.createNew($("#dash-board"));

    var dashLine=DashLine.createNew($("#dash-line"));
    getSvInfo(dashBoard, dashLine);

    //dashLine.interval();
});