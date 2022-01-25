let app = new Vue ({
    el:  "#app",
    data: {
        email_list : [] //creo array vuoto in cui pushare le email, così da poter creare in forEach con VueJS
    },
    mounted: function(){
        for(let i = 0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                // handle success
                this.email_list.push(response.data.response)
                console.log(this.email_list)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            });
        }
        
    }

});