const app = Vue.createApp({
    data(){
        return {
            email: null,
            telegramToken: '1608570862:AAHZgGCIg2qE4HnieVc11ShM1M2lRhQ4lGE',    
            botId: '1608570862',
            chatId: '422013319'
        }
    },
    methods: {
        subscribe()
        {
            console.log(this.email);
        }
    }
})

app.component('countdown', {
    props: ['todate'],
    data()
    {
        return {
            now: Date(),
            till: new Date(this.todate),
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
            intervalId: null
        }
    }, 
    mounted() {
        this.intervalId = setInterval(()=>{
            let now = new Date();
            diff = Math.floor((this.till - now.getTime())/ 1000);

            if (diff < 0)
            {
                clearInterval(this.intervalId);
            }   else {

                console.log(diff);
            this.days = Math.floor(diff / (3600*24));
            diff = diff - this.days*(3600*24);
    
            this.hours = Math.floor(diff / (3600));
            diff = diff - this.hours*(3600);
    
            this.mins = Math.floor(diff / (60));
            diff = diff - this.mins*(60);
            this.secs = diff;
            
            }

        }, 1000)
    },
    template: `{{ todate }} 
    <ul class="countdown">
        <li class="countdown__item">
            <div class="countdown__num">{{ days }}</div>
            <div class="countdown__text">days</div>
        </li>
        <li class="countdown__item">
            <div class="countdown__num">{{ hours }}</div>
            <div class="countdown__text">hours</div>
        </li>
        <li class="countdown__item">
            <div class="countdown__num">{{ mins }}</div>
            <div class="countdown__text">minutes</div>
        </li>
        <li class="countdown__item">
            <div class="countdown__num">{{ secs }}</div>
            <div class="countdown__text">seconds</div>
        </li>
    </ul>`
});


    


app.mount('#app');