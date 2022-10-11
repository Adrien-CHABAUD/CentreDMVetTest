<template>
    <ion-page>
        <ion-content>
            <p>  Sudoku is a logic-based, combinatorial number- placement puzzle. In classic Sudoku, the objective is to fill a
9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid (also called "boxes", "blocks", or "regions") contain all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a
single solution.
</p>
            <div class="button">
                <ion-button><router-link to="/game">Let's Play</router-link></ion-button>
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

ion-button {
    --background: #E06032;
    --border-radius: 30px;
}

.button {
    width:50vw;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 50px;
    margin-left:50px
}

a {
    text-decoration: none;
    color: inherit;
}

p {
    text-align: center;
    font-size: 1.5rem;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
}
</style>