export default function usePopup() {
    const active  = useState('popup_active',  () => null)
    const payload = useState('popup_payload', () => null)
    const step    = useState('popup_step',    () => 1)

    function open(name, data = null) {
        active.value  = name
        payload.value = data
        step.value    = 1
    }
    function close() {
        active.value  = null
        payload.value = null
        step.value    = 1
    }
    function nextStep(max = 3) { if (step.value < max) step.value++ }
    function prevStep()       { if (step.value > 1)   step.value-- }
    function setStep(n)       { step.value = n }

    // ВОЗВРАЩАЕМ ref'ы ОТДЕЛЬНО, не как вложенные свойства
    return { active, payload, step, open, close, nextStep, prevStep, setStep }
}
