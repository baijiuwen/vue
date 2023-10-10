<template>
    <input type="text" v-model="queryParams.je1" @blur="inputMoney($event, 'je1')" /><br>
    <input type="text" v-model="queryParams.je2" @blur="inputMoney($event, 'je2')" /><br>
    <input type="text" v-model="queryParams.je3" v-currency="addFeeOnMoney" /><br>
    <CurrencyInput />
</template>

<script>
import { getInputValue } from '@/utils/currencyNumber'
export default {
    data() {
        return {
            queryParams: {
                je1: null,
                je2: null,
                je3: null
            }
        }
    },
    methods: {
        inputMoney(el, name) {
            this.queryParams[name] = getInputValue(el);
        }
    }
}
</script>