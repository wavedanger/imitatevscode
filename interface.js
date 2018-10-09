new Vue({
    el: '#app',
    data() {
        return {
            split1: .15,
            tab0: true,
            tab1: true,
            tab2: true,
            data5: [
                {
                    title: 'parent 1',
                    expand: true,
                    render: (h, { root, node, data }) => {
                        return h('span', {
                            style: {
                                display: 'inline-block',
                                width: '100%'
                            }
                        }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ])
                            ]);
                    },
                    children: [
                        {
                            title: 'child 1-1',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-1-1',
                                    expand: true
                                },
                                {
                                    title: 'leaf 1-1-2',
                                    expand: true
                                }
                            ]
                        },
                        {
                            title: 'child 1-2',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-2-1',
                                    expand: true
                                },
                                {
                                    title: 'leaf 1-2-1',
                                    expand: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        renderContent(h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ])
                ]);
            },
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
    }
})