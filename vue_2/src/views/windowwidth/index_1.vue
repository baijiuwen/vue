<template>
    <button @click="consolewidth(tableColumns)">输出字段宽度 console</button>
</template>

<script>
export default {
    data() {
        return {
            // 表单参数
            tableColumns: [
                {
                    key: 0,
                    headerAlign: 'center',
                    label: `账号`,
                    align: 'center',
                    field: 'zh',
                    isDefault: true,
                    resizable: true,
                    visible: true
                },
                {
                    key: 1,
                    headerAlign: 'center',
                    label: `账号名称`,
                    align: 'left',
                    field: 'zhmc',
                    resizable: true,
                    visible: true,
                    width: 270
                },
                {
                    key: 2,
                    headerAlign: 'center',
                    label: `科目`,
                    align: 'left',
                    field: 'kmh',
                    isTip: true,
                    isDict: true,
                    resizable: true,
                    dictType: 'selectKmhOption', visible: true,
                    sortable: true,
                    showOverflow: false
                },
                {
                    key: 3,
                    headerAlign: 'center',
                    label: `币种`,
                    align: 'center',
                    field: 'bz',
                    isDict: true,
                    resizable: true,
                    dictType: 'getCurrencyOption', visible: true,
                    sortable: false
                },
                {
                    key: 4,
                    headerAlign: 'center',
                    label: `开户日期`,
                    align: 'center',
                    field: 'khrq',
                    isTime: true,
                    visible: true,
                    resizable: true,
                    sortable: true
                },
                {
                    key: 5,
                    headerAlign: 'center',
                    label: `状态`,
                    align: 'center',
                    field: 'ztbz',
                    isDict: true,
                    dictType: '10027',
                    resizable: true,
                    visible: true,
                    sortable: false
                },
                {
                    key: 6,
                    headerAlign: 'center',
                    label: `控制标志`,
                    align: 'center',
                    field: 'kzbz',
                    isDict: true,
                    dictType: '10018',
                    resizable: true,
                    visible: true,
                    sortable: false
                },
                {
                    key: 7,
                    headerAlign: 'center',
                    label: `销户日期`,
                    align: 'center',
                    field: 'xhrq',
                    isTime: true,
                    visible: true,
                    resizable: true,
                    sortable: true
                },
                {
                    key: 8, headerAlign: 'center', label: `客户号`, align: 'center', field: 'khh', isDefault: true, visible: true,
                    sortable: false, resizable: true
                },
                {
                    key: 9,
                    headerAlign: 'center',
                    label: `客户名称`,
                    align: 'left',
                    field: 'cusName',
                    visible: true,
                    sortable: false, resizable: true
                },
                {
                    key: 10,
                    headerAlign: 'center',
                    label: `代办人`,
                    align: 'center',
                    field: 'khczy',
                    isDict: true,
                    resizable: true,
                    dictType: 'getUserOption', visible: true,
                    sortable: false
                },
                {
                    key: 11,
                    headerAlign: 'center',
                    label: `开户机构`,
                    align: 'center',
                    field: 'jgbm',
                    isDict: true,
                    resizable: true,
                    dictType: 'selectCoreOrgOption', visible: true,
                    sortable: false, width: 150

                }
            ],
            windowwidth: 0,
            columnsNumber: 0
        }
    },
    methods: {
        consolewidth(tableColumns) {
            console.log(this.windowwidth)
            tableColumns.forEach(element => {
                let width = this.itemwidth(element)
                console.log(width)
            });
        },
        itemwidth(item) {
            let width = 0;
            if (item.width) {
                return item.width
            } else if (item.field == "zh") {
                return 150
            } else if (item.isTime) {
                return 130
            } else if (item.isAmount) {
                return 150
            } else {
                width = (item.label.length * 40)
                // 16 * n + 24
            }
            let tmpwidth = parseInt(this.windowwidth / this.columnsNumber);
            // this.windowwidth = this.windowwidth - width
            // this.columnsNumber = this.columnsNumber - 1;
            if (width > tmpwidth) {
                return width
            } else {
                return tmpwidth
            }
        }
    },
    mounted() {
        window.tableColumns = this.tableColumns
        window.columnsNumber = this.columnsNumber
        this.windowwidth = window.innerWidth
        this.columnsNumber = this.tableColumns.length
        console.log(this.columnsNumber)
        this.tableColumns.forEach(element => {
            if (element.width) {
                this.windowwidth = this.windowwidth - element.width
                this.columnsNumber = this.columnsNumber - 1;
            } else if (element.field == "zh") {
                this.windowwidth = this.windowwidth - 150
                this.columnsNumber = this.columnsNumber - 1;
            }else if(element.isTime){
                this.windowwidth = this.windowwidth - 130
                this.columnsNumber = this.columnsNumber - 1;
            }else if(element.isAmount){
                this.windowwidth = this.windowwidth - 150
                this.columnsNumber = this.columnsNumber - 1;
            }
        })
    }
}
</script>