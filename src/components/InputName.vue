<template>
  <div class="man">
    <div class="row">
        <p style='text-align: left'>Merci de renseigner votre nom pour utiliser le todoApp :</p>
      <input @change='nameTextChange'  class='col form-control mr-2' type='text' placeholder="Votre Nom ?"/>
      <button @click="addNameI" class='btn btn-primary'>Ajouter </button>
      </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex'

@Options({
    data (){
        return {
            name: ''
          
        }
    },
  components: {},
  props: {
  },
  methods: {
       ...mapActions(['addName']),

       nameTextChange(e: any){
           this.name = e.target.value

       },
       addNameI(): void{
           this.addName(this.name)
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

