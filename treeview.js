var defaultData = [
    {
        text: 'Parent 1',
        href: '#parent1',
        icon: 'glyphicon glyphicon-home',
        tags: ['4'],
        nodes: [
            {
                text: 'Child 1',
                href: '#child1',
                icon: 'glyphicon glyphicon-book',
                nodes: [
                    {
                        text: 'Grandchild 1',
                        href: '#grandchild1',
                        icon: 'glyphicon glyphicon-file',
                        tags: ['0']
                    },
                    {
                        text: 'Grandchild 2',
                        href: '#grandchild2',
                        icon: 'glyphicon glyphicon-file',
                        tags: ['0']
                    }
                ]
            },
            {
                text: 'Child 2',
                href: '#child2',
                icon: 'glyphicon glyphicon-book',
                tags: ['0']
            }
        ]
    },
    {
        text: 'Parent 2',
        href: '#parent2',
        icon: 'glyphicon glyphicon-home',
        tags: ['0']
    },
    {
        text: 'Parent 3',
        href: '#parent3',
        icon: 'glyphicon glyphicon-home',
        tags: ['0']
    },
    {
        text: 'Parent 4',
        href: '#parent4',
        icon: 'glyphicon glyphicon-home',
        tags: ['0']
    },
    {
        text: 'Parent 5',
        href: '#parent5'  ,
        icon: 'glyphicon glyphicon-home',
        tags: ['0']
    }
];
var tree=[];
 $('#tree').treeview({
        color: "rgb(173,173,173)",
        backColor: "rgba(255,255,255,0)",
        //borderColor:'green',
        collapseIcon: "glyphicon glyphicon-chevron-down",//可收缩的节点图标
    //    nodeIcon: "glyphicon glyphicon-user",
        // emptyIcon: "glyphicon glyphicon-ban-circle",//设置列表树中没有子节点的节点的图标
        expandIcon: "glyphicon glyphicon-chevron-right",  //设置列表上中有子节点的图标
        highlightSearchResults:true,//是否高亮搜索结果 默认true
        highlightSelected:true,     //是否选中高亮显示
        onhoverColor: "rgb(51,51,51)",    //鼠标滑过的颜色
        levels: 99 ,                 //设置初始化展开几级菜单 默认为2
        //selectedIcon: 'glyphicon glyphicon-tint',
       // selectedBackColor: 'black',  //设置被选中的节点背景颜色
        //selectedColor : 'red',      //设置被选择节点的字体、图标颜色
        showBorder:false,                //是否显示边框
        showCheckbox:false,              //是否显示多选框
        //uncheckedIcon:'',             //设置未选择节点的图标
        data:defaultData,
        showTags:false,//显示徽章
     });
     $('#tree').on('nodeSelected', function(event, data) {
        console.log(data.text);
    var rightPane=document.getElementsByClassName("right-pane")[0];
    rightPane.innerHTML='<div style="color:rgb(173,173,173);height:100vh;">'+data.text+'</div>';
      });