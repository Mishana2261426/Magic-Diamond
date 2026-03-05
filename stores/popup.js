// import { defineStore } from 'pinia'

// export const usePopupStore = defineStore('popup', {
//     state: () => ({
//         active: null,
//         payload: null,
//         step: 1,
//     }),
//     actions: {
//         open(name, data = null) {
//             this.active = name
//             this.payload = data
//             this.step = 1
//         },
//         close() {
//             this.active = null
//             this.payload = null
//             this.step = 1
//         },
//         nextStep(max = 3) {
//             if (this.step < max) this.step++
//         },
//         prevStep() {
//             if (this.step > 1) this.step--
//         },
//         setStep(n) {
//             this.step = n
//         }
//     },

