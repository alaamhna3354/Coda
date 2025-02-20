<template>
	<div class="auth-signIN-body">
		<div class="auth-signIN-body-item">
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
				<div class="signin">
					<Form class="auth-form" @submit="HandelLogin" :validation-schema="schema">
						<div class="position-relative">
							<label for="chk" aria-hidden="true">{{ $t('Login Into T-Coda') }}</label>
							<Field name="email" type="email" :placeholder="$t('Email')" />
							<ErrorMessage name="email" class="error-message" />
						</div>
						<div class="position-relative">
							<svg v-if="type_password == 'text'" @click="showPassword" :class="this.$i18n.locale"
							class="svg-eye" width="16"
								height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8 0.0458984C4.36364 0.0458984 1.25818 2.30772 0 5.50044C1.25818 8.69317 4.36364 10.955 8 10.955C11.6364 10.955 14.7418 8.69317 16 5.50044C14.7418 2.30772 11.6364 0.0458984 8 0.0458984ZM8 9.13681C5.99273 9.13681 4.36364 7.50772 4.36364 5.50044C4.36364 3.49317 5.99273 1.86408 8 1.86408C10.0073 1.86408 11.6364 3.49317 11.6364 5.50044C11.6364 7.50772 10.0073 9.13681 8 9.13681ZM8 3.31863C6.79273 3.31863 5.81818 4.29317 5.81818 5.50044C5.81818 6.70772 6.79273 7.68226 8 7.68226C9.20727 7.68226 10.1818 6.70772 10.1818 5.50044C10.1818 4.29317 9.20727 3.31863 8 3.31863Z"
									fill="#b9d9fc" />
							</svg>
							<svg v-else @click="showPassword" :class="this.$i18n.locale"
							class="svg-eye" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512" width="18" height="13">
								<path fill="#b9d9fc"
									d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
							</svg>
							<Field name="password" :type="type_password" id="password" :placeholder="$t('Password')" />
							<ErrorMessage name="password" class="error-message" />
						</div>
						<div class="d-flex justify-content-center mt-5">
							<button class="btn-submit">
								<BtnMouseEvEnt  :Text="$t('Log In')" :width="`250px`" :Animeation_Number="700" />
							</button>
							
						</div>
						<!-- <div class="d-flex justify-content-center mt-3">
            <router-link class="auth-link" to="/sign-up">
              Don't have an account yet ?  
            </router-link>
          </div> -->
					</Form>
				</div>

			</div>
		</div>
	</div>

</template>
<script>
import BtnMouseEvEnt from "@/components/Global/BtnMouseEvEnt2.vue";
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { configure } from "vee-validate"
import Cookies from "universal-cookie"
const cookie = new Cookies();
export default {
	data() {
		return {
			type_password: 'password',
		}
	},
	components: {
		BtnMouseEvEnt,
		Form,
		Field,
		ErrorMessage,
	},
	setup() {
		configure({
			validateOnInput: true,
		});
		const schema = yup.object({
			email: yup.string().required(cookie.get('languages') == 'ar' ? 'حقل البريد الالكتروني مطلوب' : 'email is required').email(cookie.get('languages') == 'ar' ? 'يجب إدخال بريد إلكتروني صالح' : 'email must be valid'),
			password: yup.string().required(cookie.get('languages') == 'ar' ? 'كلمة المرور  مطلوبة' : 'password is required').min(8, cookie.get('languages') == 'ar' ? 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل' : 'password must be at least 8 characters'),
		});
		return {
			schema,
		}
	},
	methods: {
		showPassword() {
			if (this.type_password == 'text') {
				this.type_password = 'password'
			}
			else {
				this.type_password = 'text';
			}
		},
		async HandelLogin(values) {
			console.log(values)
		}
	}
};
</script>
<style lang="scss" scoped>
@import '../../assets/styles/varible';

.auth-card {
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	position: absolute;
	top: 80px;
	transform: translate(-50%, 0);
	left: 50%;
	z-index: 5;

	.main {
		position: relative;
		width: 600px;
		border: 1px solid $primary;
		background-color: #0000004f;
		box-shadow: 0 0 .2rem #fff,
			0 0 .2rem #fff,
			0 0 2rem $primary,
			0 0 0.8rem $primary,
			0 0 2.8rem $primary,
			inset 0 0 1.3rem $primary;
		height: 425px;
		overflow: hidden;
		border-radius: 10px;
	}


	.auth-link {
		color: #fff;
		display: block;
		text-align: center;
		position: relative;

		&::after {
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

		&:hover {
			&::after {
				width: 100%;
			}
		}
	}

	.signin {
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
		&:focus{
			background-color: transparent
		}
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

	input:focus,
	textarea:focus {
		outline: none;
		box-shadow: 0 0 7px $primary, 0 0 10px $primary;
	}
	.svg-eye{
		position: absolute;
		left: 80px;
		top: 13px;
		cursor: pointer;
		&.en{
			left: auto;
			right: 80px
		}
	}
	.btn-submit{
		background-color: transparent;
		border: none
	}
	.error-message{
		margin-top: -3px;
		display: block;
		margin-inline-start: 60px;
	}
}
</style>