<template>
    <ion-page>
        <ion-content>
            <span id="span_l">Score: 0</span>
            <span id="span_r"> Timer: 1:00</span>
            <ion-grid>
                <ion-row class="ion-align-items-center">
                    <ion-col>1</ion-col>
                    <ion-col> 2</ion-col>
                    <ion-col> 3</ion-col>
                </ion-row>
                <ion-row class="ion-align-items-center">
                    <ion-col> 4</ion-col>
                    <ion-col>5</ion-col>
                    <ion-col> 6</ion-col>
                </ion-row>
                <ion-row class="ion-align-items-center">
                    <ion-col>7 </ion-col>
                    <ion-col>8 </ion-col>
                    <ion-col> 9</ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonContent, IonPage, IonGrid, IonRow} from '@ionic/vue';
  
  export default{
    components: {
        IonContent,
        IonPage,
        IonGrid,
        IonRow
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