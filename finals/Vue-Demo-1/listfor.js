const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Clean the House' },
                { text: 'Prepare Breakfast' },
                { text: 'Attend WCSERVER class' }
                ]
            }
        }
    }
    
    Vue.createApp(ListRendering).mount('#list-rendering')