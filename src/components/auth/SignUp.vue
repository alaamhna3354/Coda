<template>
	<div class="auth-signUP-body">
		<div class="auth-signUP-body-item">
        <div class="shine"></div>
        <div class="background">
            <div class="tiles">
                <div class="tile tile-1"></div>
                <div class="tile tile-2"></div>
                <div class="tile tile-3"></div>
                <div class="tile tile-4"></div>

                <div class="tile tile-5"></div>
                <div class="tile tile-6"></div>
                <div class="tile tile-7"></div>
                <div class="tile tile-8"></div>

                <div class="tile tile-9"></div>
                <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
    </div>
	<div class="auth-card">
		<div class="main">
			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true" class="mb-3">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="">
					<input type="email" name="email" placeholder="Email" required="">
					<input type="number" name="broj" placeholder="Phone" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<div class="d-flex justify-content-center mt-3">
						<BtnMouseEvEnt :Text="`Sign up`" :width="`250px`" :Animeation_Number="700" />
						
					</div>
					<div class="d-flex justify-content-center mt-3">
						<router-link class="auth-link" to="/sign-in">
							have an account ?  
						</router-link>
					</div>
				</form>
			</div>
			
			<!-- <div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Login</button>
				</form>
			</div> -->
		</div>
	</div>
	</div>
	
</template>
<script>
import BtnMouseEvEnt from "@/components/Global/BtnMouseEvEnt.vue"
export default {
	data() {
		return {

		}
	},
  components: {
        BtnMouseEvEnt,
    },

};
</script>
<style lang="scss" scoped>

.auth-card {
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	position: absolute;
	top: 40px;
	transform: translate(-50%,0);
	left: 50%;
	z-index: 5;

.main {
	position: relative;
	width: 600px;
	border: 1px solid #f57046;
	background-color: #0000004f;
	box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #f57046,
            0 0 0.8rem #f57046,
            0 0 2.8rem #f57046,
            inset 0 0 1.3rem #f57046; 
	height: 500px;
	overflow: hidden;
	border-radius: 10px;
}


.auth-link{
  color: #fff;
  display: block;
  text-align: center;
  position: relative;
  &::after{
	position: absolute;
	content: '';
	width: 0;
	height: 3px;
	border-radius: 50px;
	background-color: #fff;
	transition: .5s;
	bottom: -10px;
	left: 0;
  }
  &:hover{
	&::after{
		width: 100%;
	}
  }
}
.signup {
	position: relative;
	width: 100%;
	height: 100%;
}

label {
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 50px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}

input {
	width: 80%;
	height: 40px;
	justify-content: center;
	display: flex;
	margin: 20px auto 10px;
	padding: 12px;
	border: none;
	outline: none;
	border-radius: 5px;
	border: 1px solid #eeeeee25;
}


input[type=number] {
	-moz-appearance: textfield;
	-webkit-appearance: textfield;
	appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 7px #f57046, 0 0 10px #f57046;
}
}
</style>