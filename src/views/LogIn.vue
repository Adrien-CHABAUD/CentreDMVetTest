<template>
    <ion-page>
        <ion-content>
            <h3 id="header_w">Welcome Back!</h3>
            <h2 id="header_p">Please Log In</h2>
            <div class="form">
                <ion-input type="email" placeholder="Email"></ion-input>
                <ion-input type="password" placeholder="Password"></ion-input>
            </div>
            <div class="button">
                <ion-button>Login</ion-button>
            </div>
            <h3 id="footer"><router-link to="/signup">Don't have an account? <span id="signup">Sign Up</span></router-link></h3>
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
    margin-top: 50px;
    margin-left:50px
}

.form{
    padding: 0 12vw;
    margin-top: 70px;
}

#header_w{
    margin-top: 20vw;
    margin-left: 20vw;
    color: #fff;
    font-size: 36px;
}

#header_p{
    margin-left: 30vw;
    color: #fff;
    font-size: 24px;
}

#footer{
    color: #fff;
    padding: 0 12vw;
    margin-top:50px;
    text-align:center;
    font-size: 1.125rem;
    font-weight:400
}

#signup {
    font-size: 1.5rem;
    color: #aeabab;
    font-weight: 500;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>