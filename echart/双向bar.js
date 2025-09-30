var data = [
    {
        name: '新市镇',
        value1: 4,
        value2: 9,
    },
    {
        name: '渡舟镇',
        value1: 9,
        value2: 9,
    },
    {
        name: '双龙镇',
        value1: 20,
        value2: 20,
    },
    {
        name: '云集镇',
        value1: 32,
        value2: 32,
    },
    {
        name: '龙河镇',
        value1: 13,
        value2: 13,
    },
    {
        name: '石堰镇',
        value1: 43,
        value2: 43,
    },
    {
        name: '葛兰镇',
        value1: 62,
        value2: 62,
    },
    {
        name: '八颗镇',
        value1: 4,
        value2: 40,
    },
    {
        name: '江南镇',
        value1: 13,
        value2: 13,
    },
    {
        name: '洪湖镇',
        value1: 70,
        value2: 70,
    },
];
var xData = [],
    list1 = [],
    list2 = [],
    max = 0,
    min = 0;
data.forEach(({ name, value1, value2 }) => {
    xData.push(name);
    list1.push(value1);
    list2.push(value2);
    max = value1 > max ? value1 : max;
    min = value2 < min ? value2 : min;
});
var maxList = new Array(data.length).fill(max * 1.1);
var minList = new Array(data.length).fill(min * 1.1);

option = {
    backgroundColor: 'rgb(15,54,95)',
    grid: [
        {
            show: false,
            left: '120px',
            top: '10%',
            bottom: '55%',
            width: '80%',
        },
        {
            show: false,
            left: '120px',
            top: '50%',
            bottom: '55%',
            width: '80%',
        },
        {
            show: false,
            left: '120px',
            top: '55%',
            bottom: '10%',
            width: '80%',
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                color:"#fff",
            },
            splitLine: {
                show: false,
            },
        },
        {
            gridIndex: 1,
            show: false,
        },
        {
            gridIndex: 2,
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                color:"#fff",
            },
            splitLine: {
                show: false,
            },
        },
    ],
    xAxis: [
        {
            gridIndex: 0,
            show: false,
            data: xData,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        {
            gridIndex: 1,
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                interval: 0,
                align: 'auto',
                verticalAlign: 'middle',
                textStyle: {
                    color:"#fff",
                    fontSize: 16,
                    align: 'center',
                },
            },
            data: xData,
        },
        {
            gridIndex: 2,
            show: false,
            data: xData,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: list1,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: 'rgba(210,210,210,0.3)',
                        },
                        {
                            offset: 1,
                            color: '#5BFCF4',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
        },
        {
            name: '',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: list2,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: 'rgb(255,245,217)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(255,200,57)',
                        },
                    ]),
                },
            },
        }
    ],
};
