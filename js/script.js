var app = new Vue({
    el: '#app',
    data: {
        inputs: []
    },

    methods: {
        addRow() {
            this.inputs.push({
                fieldName: ''
            })
        },
        deleteRow(index) {
            this.inputs.splice(index, 1)
        }
    }
});


// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue.js!',
//         info: null
//     },
//     mounted() {
//         axios
//             // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//             .get('http://localhost:8002/finalforms/api/document.php')
//             .then(response => (this.info = response))
//     },
//     methods: {
//         reverseMessage: function () {
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })
