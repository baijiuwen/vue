<template>
    <input ref="inputRef" v-model="formattedValue" :placeholder="attributes.placeholder" />
</template>
  
<script>
import { useCurrencyInput } from 'vue-currency-input'
import { watch } from 'vue'

export default {
    name: 'CurrencyInput',
    props: {
        value: Number,
        attributes: {
            type: Object,
            default() {
                return {
                    placeholder: ''
                }
            }
        },
        options: {
            type: Object,
            default() {
                return {
                    currency: "CNY",
                    currencyDisplay: "hidden",
                    precision: 2,
                    hideCurrencySymbolOnFocus: true,
                    hideGroupingSeparatorOnFocus: true,
                    hideNegligibleDecimalDigitsOnFocus: true,
                    autoDecimalDigits: false,
                    autoSign: false,
                    useGrouping: true,
                    accountingSign: false
                }
            }
        }
    },
    setup(props) {
        const {
            inputRef,
            formattedValue,
            setValue
        } = useCurrencyInput(props.options)
        watch(() => props.value, (value) => {
            setValue(value)
        })
        return { inputRef, formattedValue }
    }
}
</script>
<style></style>
  