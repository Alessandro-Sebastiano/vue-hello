

const { createApp } = Vue

createApp({
    data() {
        return {
            text: 'Hello Vue Test!',
            image: './img/vuejs.svg'
        }
    }
}).mount('#app')