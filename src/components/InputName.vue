<template>
  <div class="man">
    <div style="border-top: 1px solid black; border-bottom: 1px solid black; background-color: aliceblue">
        <div>
            <p style='text-align: center'>Merci de renseigner votre nom pour utiliser le todoApp :</p>
            <input @change='nameTextChange'  style='text-align:center' class='form-control mr-2' type='text' placeholder="Votre Nom ?"/>
            <button @click="addNameI" class='btn btn-primary mt-4 mb-4'>Ajouter </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapActions} from 'vuex'

@Options({
    data (){
        return {
            name: ''
        }
    },
  methods: {
       ...mapActions(['addName']),

       nameTextChange(e: any): string {
           return this.name = e.target.value
       },
       addNameI(): string {
           return this.addName(this.name)
       }
  },
})
export default class InputName extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}

</style>

