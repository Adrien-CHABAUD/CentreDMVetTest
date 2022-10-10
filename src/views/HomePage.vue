<template>
  <ion-page>
      <ion-content>
          <h3 id="header_w">Welcome to!</h3>
          <h2 id="header_p">Sudoku Master</h2>
          <div class="button">
              <ion-button><router-link to="/login">Login</router-link></ion-button>
              <ion-button><router-link to="/signup">Signup</router-link></ion-button>
          </div>
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

#header_w{
  margin-top: 20vw;
  margin-left: 25vw;
  color: #fff;
  font-size: 36px;
}

#header_p{
  margin-left: 30vw;
  color: #fff;
  font-size: 24px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>