<template>
    <ion-page>
        <ion-content>
            <span id="span_l">Score: 0</span>
            <span id="span_r"> Timer: 1:00</span>
            
        </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonContent, IonPage} from '@ionic/vue';
  
  export default{
    components: {
        IonContent,
        IonPage
    }
  }
  
  </script>
  
  <style scoped>
  ion-content{
    --background: #0681EE;
  }
  
  ion-input {
        --background: #FFFF;
        --padding-start: 33px;
        height: 55px;
        border-radius: 25px;
        margin-bottom: 22px;
        --placeholder-color: #535a61;
        --color: #fff
  }
  
  ion-button {
    --background: #E06032;
    --border-radius: 30px;
  }
  
  .button {
    width:50vw;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 100px;
    margin-left:50px
  }
  
#span_l {
    display: inline-block;
    margin-left: 10vw;
}

#span_r {
    display: inline-block;
    margin-left: 40vw;
}

#span_l, #span_r {
    margin-top: 10vw;
}

  </style>