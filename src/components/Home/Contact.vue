<template>
    <div class="contact-us">
        <img class="clock-cover" src="@/assets/img/home-page/clock.webp" alt="clock">
        <div class="section-card-title" :class="this.$i18n.locale">
            <span >//</span>
            <span> {{ $t('Contact Us') }}</span>
        </div>
        <div class="row flex-ar-reverse">
            <div class="col-md-6 d-flex">
                <video class="m-auto mt-0" autoplay loop>
                    <source src="@/assets/video/clock.webm" type="video/webm">
                </video>
            </div>
            <div class="col-md-6 mb-3">
                <Form class="form-contact" @submit="handelForm" :validation-schema="schema">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="field">
                                <i class="fa-solid fa-user"></i>
                                <Field class="contact-field" name="FirstName" type="text" :placeholder="$t('FirstName')" />
                                <ErrorMessage name="FirstName" class="error-message" />
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="field">
                                <i class="fa-solid fa-user"></i>
                                <Field class="contact-field" name="LastName" type="text" :placeholder="$t('LastName')" />
                                <ErrorMessage name="LastName" class="error-message" />
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="field">
                                <i class="fa-solid fa-envelope"></i>
                                <Field class="contact-field" name="email" type="email" :placeholder="$t('Email')" />
                                <ErrorMessage name="email" class="error-message" />
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="field">
                                <input id="phone" type="tel" name="phone">
                                <p id="output" class="error-message mt-1 mb-1"></p>
                            </div>
                        </div>
                        <!-- <div class="col-md-6 mb-3">
                            <div class="field">
                                <i class="fa-solid fa-link"></i>
                                <Field class="contact-field" name="website" type="text" :placeholder="$t('website')" />
                                <ErrorMessage name="website" class="error-message" />
                            </div>
                        </div> -->
                        <div class="col-12 mb-3">
                            <div class="field">
                                <i class="fa-solid fa-message" style="top: 28px;"></i>
                                <Field class="contact-field" as="textarea" name="messege"
                                    :placeholder="$t('messege')" />
                                <ErrorMessage name="messege" class="error-message" />
                            </div>
                            <div class="w-100 mt-5">
                                <BtnMouseEvEnt :Text="$t('Send messege')" :Animeation_Number="750" />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
            
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { configure } from "vee-validate";
import Cookies from "universal-cookie"
const cookie = new Cookies();
import intlTelInput from "../../intl-tel-input"
import BtnMouseEvEnt from '@/components/Global/BtnMouseEvEnt2.vue';
export default {
    data() {
        return {

        };
    },
    setup() {
        configure({
            validateOnInput: true,
        });
        const schema = yup.object({
            FirstName: yup.string().required(cookie.get('languages') == 'ar' ? 'حقل الاسم الاول مطلوب' : 'First Name required').min(6),
            LastName: yup.string().required(cookie.get('languages') == 'ar' ? 'حقل الاسم الاخير مطلوب' : 'Last Name required').min(6),
            email: yup.string().required(cookie.get('languages') == 'ar' ? 'حقل البريد الالكتروني مطلوب' : 'email required').email(),
            // website: yup.object().required(cookie.get('languages') == 'ar' ? 'رابط موقعك مطلوب' : 'website url required'),
            messege: yup.string().required(cookie.get('languages') == 'ar' ? 'يجب كتابة الرسالة' : 'messege required').min(10),
        });
        return {
            schema,
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
        BtnMouseEvEnt
    },
    methods: {
        async handelForm(values) {
            console.log(values);
        }
    },
    mounted() {
        const output = document.querySelector("#output");
        const inputElement = document.querySelector('#phone');

        const iti = intlTelInput(inputElement, {
            i18n: {
                searchPlaceholder: this.$i18n.locale == 'ar' ? 'بحث' : 'Search',
            },
            initialCountry: "auto",
            nationalMode: true,
            geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("us"));
            },
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.7.3/build/js/utils.js"
        });

        const handleChange = () => {
            let text;
            if (this.$i18n.locale == 'ar') {
                if (inputElement.value != '') {
                    text = iti.isValidNumber()
                        ? ""
                        : "رقم غير صحيح - الرجاء اعد المحاولة";
                    if (iti.isValidNumber()) {
                        this.FullNumber = iti.getNumber();
                    }
                } else {
                    text = "الرجاء ادخال رقم صحيح";
                }
            }
            else {
                if (inputElement.value != '') {
                    text = iti.isValidNumber()
                        ? ""
                        : "Invalid number - please try again";
                    if (iti.isValidNumber()) {
                        this.FullNumber = iti.getNumber();
                    }
                    else {
                        this.FullNumber = false;
                    }
                } else {
                    text = "Please enter a valid number below";
                }
            }
            const textNode = document.createTextNode(text);
            output.innerHTML = "";
            output.appendChild(textNode);
        };

        // listen to "keyup", but also "change" to update when the user selects a country
        inputElement.addEventListener('change', handleChange);
        inputElement.addEventListener('keyup', handleChange);


    }
}
</script>