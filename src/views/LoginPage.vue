<template>
    <div>
      <!-- <form>
          <input v-model="email" type='text' placeholder="email"/>
          <input v-model="password" type='text' placeholder="password"/>
          <button @click='login'>Login</button>
      </form> -->
      <div class="row">
          <div class="col-xs-12 col-md-12">
              <b-form>
                <label class="sr-only" for="inlineFormInputName2">Name</label>
                <b-input v-model="email" class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="email" />
                <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input v-model="password" id="inlineFormInputGroupUsername2" placeholder="password" />
                </b-input-group>
                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
                <b-button @click="login" variant="primary">Login</b-button>
            </b-form>
          </div>
      </div>
    
    </div>
</template>

<script>
export default {
    data(){
      return {
      email: '',
      password: '',
    }
    },
     methods: {
    login(e) {
        e.preventDefault();
      // https://firebase.google.com/docs/auth/web/password-auth?hl=ko
      firebase.auth().signInWithEmailAndPassword(
        this.email,
        this.password
        
      )
        .then(response =>{
               this.$router.push('/main')
        })
        .catch(function(error){
            console.log(error);
        })
    }
  }

}
</script>

<style>

</style>
