import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Input, Button } from 'antd';

import { Neo4jD3 } from './js/neo4jd3.js';
const init_data = {
    "results": [{
        "columns": ["user", "entity"],
        "data": [{
            "graph": {
                "nodes": [{
                    "id": "1",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sca_point进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "2",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sca_analog进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "3",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sca_cal进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "4",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sca_op进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "5",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sca_topo进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "6",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sca_plan进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "7",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sca_load_rate_static进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "8",
                    "labels": ["进程"],
                    "properties": {
                        "name": "fes_net进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "9",
                    "labels": ["进程"],
                    "properties": {
                        "name": "fes_prot进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "10",
                    "labels": ["进程"],
                    "properties": {
                        "name": "fes_updae_zf进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "11",
                    "labels": ["进程"],
                    "properties": {
                        "name": "fes_prot_sjpt_zf进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "12",
                    "labels": ["进程"],
                    "properties": {
                        "name": "proxy_station进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "13",
                    "labels": ["进程"],
                    "properties": {
                        "name": "sample_history进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "14",
                    "labels": ["进程"],
                    "properties": {
                        "name": "kingbase进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "15",
                    "labels": ["进程"],
                    "properties": {
                        "name": "proxy_server进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "16",
                    "labels": ["进程"],
                    "properties": {
                        "name": "rtdb_server进程",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "17",
                    "labels": ["业务"],
                    "properties": {
                        "name": "遥测处理业务",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "18",
                    "labels": ["业务"],
                    "properties": {
                        "name": "遥信处理业务",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "19",
                    "labels": ["业务"],
                    "properties": {
                        "name": "遥控及操作业务",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "20",
                    "labels": ["业务"],
                    "properties": {
                        "name": "计算业务",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "21",
                    "labels": ["业务"],
                    "properties": {
                        "name": "拓扑业务",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "22",
                    "labels": ["业务"],
                    "properties": {
                        "name": "远程调阅业务",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "23",
                    "labels": ["业务"],
                    "properties": {
                        "name": "历史数据存储业务",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "24",
                    "labels": ["服务器"],
                    "properties": {
                        "name": "SCADA服务器",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "25",
                    "labels": ["服务器"],
                    "properties": {
                        "name": "FES服务器",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "26",
                    "labels": ["服务器"],
                    "properties": {
                        "name": "历史服务器",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }, {
                    "id": "27",
                    "labels": ["服务器"],
                    "properties": {
                        "name": "PP服务器",
                        "status": "正常",
                        "cpu": "75%"
                    }
                }],
                "relationships": [{
                    "id": "1",
                    "name": "运行",
                    "startNode": "1",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "2",
                    "name": "运行",
                    "startNode": "2",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "3",
                    "name": "运行",
                    "startNode": "3",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "4",
                    "name": "运行",
                    "startNode": "4",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "5",
                    "name": "运行",
                    "startNode": "5",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "6",
                    "name": "运行",
                    "startNode": "6",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "7",
                    "name": "运行",
                    "startNode": "7",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "8",
                    "name": "运行",
                    "startNode": "13",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "9",
                    "name": "运行",
                    "startNode": "16",
                    "endNode": "24",
                    "properties": {
                    }
                }, {
                    "id": "10",
                    "name": "运行",
                    "startNode": "8",
                    "endNode": "25",
                    "properties": {
                    }
                }, {
                    "id": "11",
                    "name": "运行",
                    "startNode": "9",
                    "endNode": "25",
                    "properties": {
                    }
                }, {
                    "id": "12",
                    "name": "运行",
                    "startNode": "10",
                    "endNode": "25",
                    "properties": {
                    }
                }, {
                    "id": "13",
                    "name": "运行",
                    "startNode": "11",
                    "endNode": "25",
                    "properties": {
                    }
                }, {
                    "id": "14",
                    "name": "运行",
                    "startNode": "12",
                    "endNode": "25",
                    "properties": {
                    }
                }, {
                    "id": "15",
                    "name": "运行",
                    "startNode": "15",
                    "endNode": "27",
                    "properties": {
                    }
                }, {
                    "id": "16",
                    "name": "运行",
                    "startNode": "14",
                    "endNode": "26",
                    "properties": {
                    }
                }, {
                    "id": "17",
                    "name": "依赖",
                    "startNode": "23",
                    "endNode": "13",
                    "properties": {
                    }
                }, {
                    "id": "18",
                    "name": "依赖",
                    "startNode": "13",
                    "endNode": "14",
                    "properties": {
                    }
                }, {
                    "id": "19",
                    "name": "依赖",
                    "startNode": "13",
                    "endNode": "16",
                    "properties": {
                    }
                }, {
                    "id": "20",
                    "name": "依赖",
                    "startNode": "19",
                    "endNode": "4",
                    "properties": {
                    }
                }, {
                    "id": "21",
                    "name": "依赖",
                    "startNode": "4",
                    "endNode": "5",
                    "properties": {
                    }
                }, {
                    "id": "22",
                    "name": "依赖",
                    "startNode": "21",
                    "endNode": "5",
                    "properties": {
                    }
                }, {
                    "id": "23",
                    "name": "依赖",
                    "startNode": "5",
                    "endNode": "16",
                    "properties": {
                    }
                }, {
                    "id": "24",
                    "name": "依赖",
                    "startNode": "20",
                    "endNode": "3",
                    "properties": {
                    }
                }, {
                    "id": "25",
                    "name": "依赖",
                    "startNode": "3",
                    "endNode": "16",
                    "properties": {
                    }
                }, {
                    "id": "26",
                    "name": "依赖",
                    "startNode": "22",
                    "endNode": "15",
                    "properties": {
                    }
                }, {
                    "id": "27",
                    "name": "依赖",
                    "startNode": "18",
                    "endNode": "1",
                    "properties": {
                    }
                }, {
                    "id": "28",
                    "name": "依赖",
                    "startNode": "16",
                    "endNode": "1",
                    "properties": {
                    }
                }, {
                    "id": "29",
                    "name": "依赖",
                    "startNode": "16",
                    "endNode": "2",
                    "properties": {
                    }
                }, {
                    "id": "30",
                    "name": "依赖",
                    "startNode": "17",
                    "endNode": "2",
                    "properties": {
                    }
                }, {
                    "id": "31",
                    "name": "下连接",
                    "startNode": "4",
                    "endNode": "8",
                    "properties": {
                    }
                }, {
                    "id": "32",
                    "name": "下连接",
                    "startNode": "16",
                    "endNode": "10",
                    "properties": {
                    }
                }, {
                    "id": "33",
                    "name": "下连接",
                    "startNode": "16",
                    "endNode": "15",
                    "properties": {
                    }
                }, {
                    "id": "34",
                    "name": "上连接",
                    "startNode": "8",
                    "endNode": "1",
                    "properties": {
                    }
                }, {
                    "id": "35",
                    "name": "上连接",
                    "startNode": "8",
                    "endNode": "2",
                    "properties": {
                    }
                }, {
                    "id": "36",
                    "name": "关联",
                    "startNode": "8",
                    "endNode": "9",
                    "properties": {
                    }
                }]
            }
        }]
    }],
    "errors": []
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graph_data: init_data,
            question: '',
            type: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.init();
    }
    init = () => {
        new Neo4jD3('#neo4jd3G_1', {
            minCollision: 60,
            neo4jData: init_data
            ,
            nodeRadius: 25,
            onNodeDoubleClick: function (node) {
                // switch(node.id) {
                //     case '25':
                //         // Google
                //         window.open(node.properties.url, '_blank');
                //         break;
                //     default:
                //         var maxNodes = 5,
                //             data = neo4jd3.randomD3Data(node, maxNodes);
                //         neo4jd3.updateWithD3Data(data);
                //         break;
                // }
            },
            onRelationshipDoubleClick: function (relationship) {
                console.log('double click on relationship: ' + JSON.stringify(relationship));
            },
            zoomFit: true
        });

    }
    handleClick = () => {
        if (this.state.question == '调度控制系统有哪些异常进程') {
            this.setState(
                {
                    type: 1,
                    graph_data: init_data
                }, () => {
                    new Neo4jD3('#neo4jd3G_1', {
                        highlight: [
                            {
                                class: '进程',
                                property: 'name',
                                value: 'sample_history进程'
                            },
                            {
                                class: '进程',
                                property: 'name',
                                value: 'fes_prot进程'
                            }
                        ],
                        minCollision: 60,
                        neo4jData: this.state.graph_data
                        ,
                        nodeRadius: 25,
                        onNodeDoubleClick: function (node) {
                            // switch(node.id) {
                            //     case '25':
                            //         // Google
                            //         window.open(node.properties.url, '_blank');
                            //         break;
                            //     default:
                            //         var maxNodes = 5,
                            //             data = neo4jd3.randomD3Data(node, maxNodes);
                            //         neo4jd3.updateWithD3Data(data);
                            //         break;
                            // }
                        },
                        onRelationshipDoubleClick: function (relationship) {
                            console.log('double click on relationship: ' + JSON.stringify(relationship));
                        },
                        zoomFit: true
                    });

                }
            )
        }
        if (this.state.question == '遥测处理业务依赖哪些进程') {
            this.setState(
                {
                    type: 2,
                    graph_data: {
                        "results": [{
                            "columns": ["user", "entity"],
                            "data": [{
                                "graph": {
                                    "nodes": [{
                                        "id": "17",
                                        "labels": ["业务"],
                                        "properties": {
                                            "name": "遥测处理业务",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "2",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_analog进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }],
                                    "relationships": [{
                                        "id": "30",
                                        "name": "依赖",
                                        "startNode": "17",
                                        "endNode": "2",
                                        "properties": {
                                        }
                                    }
                                    ]
                                }
                            }]
                        }],
                        "errors": []
                    }
                }, () => {
                    new Neo4jD3('#neo4jd3G_1', {
                        minCollision: 60,
                        neo4jData: this.state.graph_data
                        ,
                        nodeRadius: 25,
                        onNodeDoubleClick: function (node) {
                            // switch(node.id) {
                            //     case '25':
                            //         // Google
                            //         window.open(node.properties.url, '_blank');
                            //         break;
                            //     default:
                            //         var maxNodes = 5,
                            //             data = neo4jd3.randomD3Data(node, maxNodes);
                            //         neo4jd3.updateWithD3Data(data);
                            //         break;
                            // }
                        },
                        onRelationshipDoubleClick: function (relationship) {
                            console.log('double click on relationship: ' + JSON.stringify(relationship));
                        },
                        zoomFit: false
                    });

                }
            )
        }
        if (this.state.question == 'SCADA服务器运行了哪些进程') {
            this.setState(
                {
                    type: 3,
                    graph_data: {
                        "results": [{
                            "columns": ["user", "entity"],
                            "data": [{
                                "graph": {
                                    "nodes": [{
                                        "id": "24",
                                        "labels": ["服务器"],
                                        "properties": {
                                            "name": "SCADA服务器",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "6",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_plan进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "1",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_point进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "2",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_analog进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "3",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_cal进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "4",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_op进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "5",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_topo进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "7",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_load_rate_static进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "13",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sample_history进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }, {
                                        "id": "16",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "rtdb_server进程",
                                            "status": "正常",
                                            "cpu": "1%"
                                        }
                                    }],
                                    "relationships": [{
                                        "id": "9",
                                        "name": "运行",
                                        "startNode": "16",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "8",
                                        "name": "运行",
                                        "startNode": "13",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "7",
                                        "name": "运行",
                                        "startNode": "7",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "6",
                                        "name": "运行",
                                        "startNode": "6",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "5",
                                        "name": "运行",
                                        "startNode": "5",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "4",
                                        "name": "运行",
                                        "startNode": "4",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "3",
                                        "name": "运行",
                                        "startNode": "3",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "2",
                                        "name": "运行",
                                        "startNode": "2",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "1",
                                        "name": "运行",
                                        "startNode": "1",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }
                                    ]
                                }
                            }]
                        }],
                        "errors": []
                    }
                }, () => {
                    new Neo4jD3('#neo4jd3G_1', {
                        minCollision: 60,
                        neo4jData: this.state.graph_data
                        ,
                        nodeRadius: 25,
                        onNodeDoubleClick: function (node) {
                            // switch(node.id) {
                            //     case '25':
                            //         // Google
                            //         window.open(node.properties.url, '_blank');
                            //         break;
                            //     default:
                            //         var maxNodes = 5,
                            //             data = neo4jd3.randomD3Data(node, maxNodes);
                            //         neo4jd3.updateWithD3Data(data);
                            //         break;
                            // }
                        },
                        onRelationshipDoubleClick: function (relationship) {
                            console.log('double click on relationship: ' + JSON.stringify(relationship));
                        },
                        zoomFit: false
                    });

                }
            )
        }
        if (this.state.question == 'sca_analog进程运行在哪个服务器') {
            this.setState(
                {
                    type: 4,
                    graph_data: {
                        "results": [{
                            "columns": ["user", "entity"],
                            "data": [{
                                "graph": {
                                    "nodes": [{
                                        "id": "2",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_analog进程",
                                            "status": "正常",
                                            "cpu": "2%"
                                        }
                                    }, {
                                        "id": "24",
                                        "labels": ["服务器"],
                                        "properties": {
                                            "name": "SCADA服务器",
                                            "status": "正常",
                                            "cpu": "3%"
                                        }
                                    }],
                                    "relationships": [{
                                        "id": "2",
                                        "name": "运行",
                                        "startNode": "2",
                                        "endNode": "24",
                                        "properties": {
                                        }
                                    }
                                    ]
                                }
                            }]
                        }],
                        "errors": []
                    }
                }, () => {
                    new Neo4jD3('#neo4jd3G_1', {
                        minCollision: 60,
                        neo4jData: this.state.graph_data
                        ,
                        nodeRadius: 25,
                        onNodeDoubleClick: function (node) {
                            // switch(node.id) {
                            //     case '25':
                            //         // Google
                            //         window.open(node.properties.url, '_blank');
                            //         break;
                            //     default:
                            //         var maxNodes = 5,
                            //             data = neo4jd3.randomD3Data(node, maxNodes);
                            //         neo4jd3.updateWithD3Data(data);
                            //         break;
                            // }
                        },
                        onRelationshipDoubleClick: function (relationship) {
                            console.log('double click on relationship: ' + JSON.stringify(relationship));
                        },
                        zoomFit: false
                    });

                }
            )
        }
        if (this.state.question == 'rtdb_server进程故障影响') {
            this.setState(
                {
                    type: 5,
                    graph_data: init_data
                }, () => {
                    new Neo4jD3('#neo4jd3G_1', {
                        highlight: [
                            {
                                class: '进程',
                                property: 'name',
                                value: 'rtdb_server进程'
                            },
                            {
                                class: '进程',
                                property: 'name',
                                value: 'sample_history进程'
                            },
                            {
                                class: '进程',
                                property: 'name',
                                value: 'sca_topo进程'
                            }, {
                                class: '业务',
                                property: 'name',
                                value: '拓扑业务'
                            },
                            {
                                class: '业务',
                                property: 'name',
                                value: '历史数据存储业务'
                            }, {
                                class: '业务',
                                property: 'name',
                                value: '遥控及操作业务'
                            }, {
                                class: '进程',
                                property: 'name',
                                value: 'sca_op进程'
                            }
                        ],
                        minCollision: 60,
                        neo4jData: this.state.graph_data
                        ,
                        nodeRadius: 25,
                        onNodeDoubleClick: function (node) {
                            // switch(node.id) {
                            //     case '25':
                            //         // Google
                            //         window.open(node.properties.url, '_blank');
                            //         break;
                            //     default:
                            //         var maxNodes = 5,
                            //             data = neo4jd3.randomD3Data(node, maxNodes);
                            //         neo4jd3.updateWithD3Data(data);
                            //         break;
                            // }
                        },
                        onRelationshipDoubleClick: function (relationship) {
                            console.log('double click on relationship: ' + JSON.stringify(relationship));
                        },
                        zoomFit: true
                    });

                }
            )
        }
        if (this.state.question == '遥测处理业务异常的原因') {
            this.setState(
                {
                    type: 6,
                    graph_data: {
                        "results": [{
                            "columns": ["user", "entity"],
                            "data": [{
                                "graph": {
                                    "nodes": [{
                                        "id": "17",
                                        "labels": ["业务"],
                                        "properties": {
                                            "name": "遥测处理业务",
                                            "status": "正常",
                                            "cpu": "5%"
                                        }
                                    }, {
                                        "id": "2",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "sca_analog进程",
                                            "status": "正常",
                                            "cpu": "5%"
                                        }
                                    }, {
                                        "id": "8",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "fes_net进程",
                                            "status": "正常",
                                            "cpu": "5%"
                                        }
                                    }, {
                                        "id": "9",
                                        "labels": ["进程"],
                                        "properties": {
                                            "name": "fes_prot进程",
                                            "status": "异常",
                                            "cpu": "100%"
                                        }
                                    }],
                                    "relationships": [{
                                        "id": "30",
                                        "name": "依赖",
                                        "startNode": "17",
                                        "endNode": "2",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "35",
                                        "name": "上连接",
                                        "startNode": "8",
                                        "endNode": "2",
                                        "properties": {
                                        }
                                    }, {
                                        "id": "36",
                                        "name": "关联",
                                        "startNode": "8",
                                        "endNode": "9",
                                        "properties": {
                                        }
                                    }
                                    ]
                                }
                            }]
                        }],
                        "errors": []
                    }
                }, () => {
                    new Neo4jD3('#neo4jd3G_1', {
                        highlight: [
                            {
                                class: '进程',
                                property: 'name',
                                value: 'fes_prot进程'
                            }
                        ],
                        minCollision: 60,
                        neo4jData: this.state.graph_data
                        ,
                        nodeRadius: 25,
                        onNodeDoubleClick: function (node) {
                            // switch(node.id) {
                            //     case '25':
                            //         // Google
                            //         window.open(node.properties.url, '_blank');
                            //         break;
                            //     default:
                            //         var maxNodes = 5,
                            //             data = neo4jd3.randomD3Data(node, maxNodes);
                            //         neo4jd3.updateWithD3Data(data);
                            //         break;
                            // }
                        },
                        onRelationshipDoubleClick: function (relationship) {
                            console.log('double click on relationship: ' + JSON.stringify(relationship));
                        },
                        zoomFit: false
                    });

                }
            )
        }
    }
    handleChange(e) {
        this.setState({ question: e.target.value }, () => {
            if (this.state.question == '') {

                this.init()
                this.setState({ type: 0 })
            }
        });
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1>语义搜索</h1>
                    <Input
                        placeholder="请输入搜索内容"
                        onChange={(e) => this.handleChange(e)}
                        style={{ width: 500 }}
                        value={this.state.question}

                    />
                    <Button type="primary" onClick={(e) => this.handleClick(e)}>
                        搜索一下
                    </Button>
                </div>
                <div className="left">
                    <div id="neo4jd3G_1" className="left"></div>
                </div>
                <div className="right">
                    <h2>查询结果：</h2>
                    {this.state.type == 1 && <div> <p className="p1">sample_history进程异常<br />fes_prot进程异常</p></div>}
                    {this.state.type == 2 && <div> <p className="p2">sca_analog进程</p></div>}
                    {this.state.type == 3 && <div> <p className="p3">sca_point进程<br />sca_op进程<br />sca_topo进程<br />
                        sca_cal进程<br />sca_ananlog进程<br />sample_history进程<br />sca_plan进程<br />sca_load_rate_static进程<br />
                        rtdb_server进程</p></div>}
                    {this.state.type == 4 && <div> <p className="p2">SCADA服务器</p></div>}
                    {this.state.type == 5 && <div> <p className="p1">sample_history进程<br />sca_topo进程<br />拓扑业务<br />历史数据存储业务<br />sca_op进程<br />遥控及操作业务</p></div>}
                    {this.state.type == 6 && <div> <p className="p3">遥测处理业务--依赖--&gt;sca_analog进程(正常)<br/>sca_analog进程&lt;--上连接--fes_net进程(正常)<br/>fes_net进程--关联--&gt;fes_prot进程<font color="red">(异常)</font>
                        </p></div>}
                </div>
            </div>


        );
    }
}

export default App;


