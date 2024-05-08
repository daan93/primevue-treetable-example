<template>
    <div>
        <DataTable :value="nodes" class="no-body" scrollable scrollDirection="both" removableSort
            v-model:sortField="sortField" v-model:sortOrder="sortOrder" style="position: sticky; top: 0px; z-index: 2;">
            <Column frozen style="width: 16px; padding: 0;"></Column>
            <Column frozen style="width: 48px;">
                <template #header>
                    <Checkbox></Checkbox>
                </template>
            </Column>
            <Column header="Shift" frozen style="min-width: 400px; flex: 1 1 0;"></Column>
            <Column sortable field="filled" header="Filled" style="width: 160px;"></Column>
            <Column sortable field="weekHours" header="Week hours" style="width: 160px;"></Column>
            <Column sortable field="contractHours" header="Contract hours" style="width: 160px;"></Column>
            <Column sortable field="contract" header="Contract" style="width: 160px;"></Column>
            <Column sortable field="labels" header="Labels" style="width: 160px;"></Column>
            <Column sortable field="staffCost" header="Staff costs budget" style="width: 160px;"></Column>
            <Column sortable field="staffHours" header="Hours budget" style="width: 160px;"></Column>
            <Column frozen alignFrozen="right" style="width: 64px;"></Column>
            <Column frozen alignFrozen="right" style="width: 16px; padding: 0;"></Column>
        </DataTable>

        <!-- <div class="card">
                <Chart type="line" :data="chartData" :options="chartOptions" :height="30" />
            </div> -->

        <TreeTable v-for="department in mockDepartments" :value="nodes" showGridlines class="no-header pt-4" scrollable
            scrollDirection="both" v-model:sortField="sortField" v-model:sortOrder="sortOrder"
            :pt:header:style="{ 'width': `${headerWidth}px` }" ref="tables" :style="{ 'width': `${tableWidth}px` }"
            v-model:selectionKeys="selectedKey" selectionMode="checkbox" @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
            <template #header>
                <div class="flex" style="position: sticky; top: 56px; left: 0px;">
                    <div style="border-right: 1px solid #e2e8f0; width: 16px; background: var(--surface-ground);"></div>
                    <div class="px-3 py-2 align-items-center flex-grow-1 flex">
                        <Checkbox></Checkbox>
                        <div class="flex-grow-1 px-4">
                            <div>The Hague</div>
                            <div class="text-xl font-bold">Kitchen / {{ department }}</div>
                        </div>
                    </div>
                </div>
                <div class="flex" style="position: sticky; top: 56px; right: 0px;">
                    <div class="px-3 py-2 align-items-center flex-grow-1 flex">
                        <Button label="Secondary" severity="secondary" class="mr-2"><i class="pi pi-plus mr-2"></i> Add
                            Shift</Button>
                        <Chip><i class="pi pi-circle-fill mr-2" style="color: green;"></i> Online</Chip>
                    </div>
                    <div style="border-left: 1px solid #e2e8f0; width: 16px; background: var(--surface-ground);"></div>
                </div>
            </template>
            <Column frozen style="width: 16px; padding: 0; border: 0; background: var(--surface-ground);"></Column>
            <Column field="checked" frozen style="width: 48px;">
                <template #body="slotProps">
                    <Checkbox v-model="slotProps.node.data.partialChecked" :binary="true" />
                </template>
            </Column>
            <Column field="name" expander frozen style="min-width: 400px; flex: 1 1 0;"></Column>
            <Column sortable field="filled" style="width: 160px;">
                <template #body="slotProps">
                    <TableMeterGroup v-if="slotProps.node.data.filled" :value="slotProps.node.data.filled[0]"
                        :max="slotProps.node.data.filled[1]"></TableMeterGroup>
                </template>
            </Column>
            <Column sortable field="weekHours" style="width: 160px;">
                <template #body="slotProps">
                    <TableMeterGroup v-if="slotProps.node.data.weekHours" :value="slotProps.node.data.weekHours[0]"
                        :max="slotProps.node.data.weekHours[1]"></TableMeterGroup>
                </template>
            </Column>
            <Column sortable field="contractHours" style="width: 160px;">
                <template #body="slotProps">
                    <TableMeterGroup v-if="slotProps.node.data.contractHours"
                        :value="slotProps.node.data.contractHours[0]" :max="slotProps.node.data.contractHours[1]">
                    </TableMeterGroup>
                </template>
            </Column>
            <Column sortable field="contract" style="width: 160px;"></Column>
            <Column sortable field="labels" style="width: 160px;"></Column>
            <Column sortable field="staffCosts" style="width: 160px;">
                <template #body="slotProps">
                    <TableMeterGroup
                        v-if="slotProps.node.data.staffCosts && Array.isArray(slotProps.node.data.staffCosts)"
                        :value="slotProps.node.data.staffCosts[0]" :max="slotProps.node.data.staffCosts[1]">
                    </TableMeterGroup>
                    <template v-else-if="slotProps.node.data.staffCosts">€ {{ slotProps.node.data.staffCosts
                        }}</template>
                </template>
            </Column>
            <Column sortable field="staffHours" style="width: 160px;">
                <template #body="slotProps" style="width: 48px;">
                    <TableMeterGroup
                        v-if="slotProps.node.data.staffHours && Array.isArray(slotProps.node.data.staffHours)"
                        :value="slotProps.node.data.staffHours[0]" :max="slotProps.node.data.staffHours[1]">
                    </TableMeterGroup>
                    <template v-else-if="slotProps.node.data.staffHours">{{ slotProps.node.data.staffHours }}
                        hours</template>
                </template>
            </Column>
            <Column frozen alignFrozen="right" style="width: 64px;">
                <template #body>
                    <Button icon="pi pi-ellipsis-v" severity="primary" text rounded aria-label="Cancel" />
                </template>
            </Column>
            <Column frozen alignFrozen="right"
                style="width: 16px; padding: 0; border-bottom: 0; background: var(--surface-ground);">
            </Column>
            <template #footer>
                <DataTable :value="mockFooter" class="no-header" scrollable scrollDirection="both" removableSort
                    v-model:sortField="sortField" v-model:sortOrder="sortOrder" showGridlines>
                    <Column frozen style="width: 16px; padding: 0; background: var(--surface-ground); border: 0;">
                    </Column>
                    <Column frozen style="width: 48px;"></Column>
                    <Column frozen style="min-width: 400px; flex: 1 1 0;">
                        <template #body>total</template>
                    </Column>
                    <Column sortable field="filled" style="width: 160px;">
                        <template #body>total</template>
                    </Column>
                    <Column sortable field="weekHours" style="width: 160px;">
                        <template #body>total</template>
                    </Column>
                    <Column sortable field="contractHours" style="width: 160px;">
                        <template #body>total</template>
                    </Column>
                    <Column sortable field="contract" style="width: 160px;">
                        <template #body>total</template>
                    </Column>
                    <Column sortable field="labels" style="width: 160px;">
                        <template #body>total</template>
                    </Column>
                    <Column sortable field="staffCost" style="width: 160px;">
                        <template #body>total</template>
                    </Column>
                    <Column sortable field="staffHours" style="width: 160px;">
                        <template #body>total</template>
                    </Column>
                    <Column frozen alignFrozen="right" style="width: 64px;"></Column>
                    <Column frozen alignFrozen="right"
                        style="width: 16px; padding: 0; background: var(--surface-ground); border-bottom: 0;"></Column>
                </DataTable>
            </template>
        </TreeTable>
    </div>
</template>

<script setup>
import TableMeterGroup from "./TableMeterGroup.vue";
import { ref, onMounted } from "vue";
import { NodeService } from '@/service/NodeService';

const nodes = ref();
const selectedKey = ref();
const sortField = ref();
const sortOrder = ref();
const chartData = ref();
const chartOptions = ref();

const tables = ref([]);
const headerWidth = ref();
const tableWidth = ref();

const mockDepartments = [
    'Chefs',
    'Dishwashers'
]

const mockFooter = ref([]);

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
    mockFooter.value = [nodes[0]]

    setTimeout(() => {
        // headerWidth.value = window.innerWidth;
        headerWidth.value = tables.value[0].$refs.table.scrollWidth;
        tableWidth.value = tables.value[0].$refs.table.scrollWidth;
    }, 0); // Wait until next tick, I guess
});

const onNodeSelect = (node) => {
    console.log(node.data.name, selectedKey);
};
const onNodeUnselect = (node) => {
    console.log(node.data.name, selectedKey);
};

const onSort = (event) => {
    console.log(event);
}

const setChartData = () => {
    return {
        labels: ['00:00', '00:15', '00:30', '00:45',
            '01:00', '01:15', '01:30', '01:45',
            '02:00', '02:15', '02:30', '02:45',
            '03:00', '03:15', '03:30', '03:45',
            '04:00', '04:15', '04:30', '04:45',
            '05:00', '05:15', '05:30', '05:45',
            '06:00', '06:15', '06:30', '06:45',
            '07:00', '07:15', '07:30', '07:45',
            '08:00', '08:15', '08:30', '08:45',
            '09:00', '09:15', '09:30', '09:45',
            '10:00', '10:15', '10:30', '10:45',
            '11:00', '11:15', '11:30', '11:45',
            '12:00', '12:15', '12:30', '12:45',
            '13:00', '13:15', '13:30', '13:45',
            '14:00', '14:15', '14:30', '14:45',
            '15:00', '15:15', '15:30', '15:45',
            '16:00', '16:15', '16:30', '16:45',
            '17:00', '17:15', '17:30', '17:45',
            '18:00', '18:15', '18:30', '18:45',
            '19:00', '19:15', '19:30', '19:45',
            '20:00', '20:15', '20:30', '20:45',
            '21:00', '21:15', '21:30', '21:45',
            '22:00', '22:15', '22:30', '22:45',
            '23:00', '23:15', '23:30', '23:45'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620, 400, 590, 800, 720, 670, 550, 450, 400, 620, 730, 820, 740, 680, 570, 460, 530,
                    610, 690, 780, 690, 610, 500, 570, 660, 770, 760, 540, 325, 702, 620, 400, 590, 800, 720, 670, 550, 450, 400, 620, 730, 820, 740, 680, 570, 460, 530,
                    610, 690, 780, 690, 610, 500, 570, 660, 770, 760, 540, 325, 702, 620, 400, 590, 800, 720, 670, 550, 450, 400, 620, 730, 820, 740, 680, 570, 460, 530,
                    610, 690, 780, 690, 610, 500, 570, 660, 770, 760, 540, 325, 702, 620, 400, 590, 800, 720, 670, 550, 450, 400, 620, 730, 820, 740, 680, 570, 460, 530,
                    610, 690, 780, 690, 610, 500, 570, 660, 770, 760], // Example sales data for each day
                borderColor: 'rgb(22, 22, 249)',
                stepped: 'middle',
                pointStyle: 'dash',
            },
            {
                type: 'line',
                label: 'Projected Sales',
                data: [680, 720, 630, 570, 490, 550, 610, 680, 730, 780, 810, 750, 680, 610, 550, 490, 530, 580, 630, 670,
                    710, 750, 790, 820, 770, 720, 670, 620, 570, 530, 680, 720, 630, 570, 490, 550, 610, 680, 730, 780, 810, 750, 680, 610, 550, 490, 530, 580, 630, 670,
                    710, 750, 790, 820, 770, 720, 670, 620, 570, 530, 680, 720, 630, 570, 490, 550, 610, 680, 730, 780, 810, 750, 680, 610, 550, 490, 530, 580, 630, 670,
                    710, 750, 790, 820, 770, 720, 670, 620, 570, 530, 680, 720, 630, 570, 490, 550, 610, 680, 730, 780, 810, 750, 680, 610, 550, 490, 530, 580, 630, 670,
                    710, 750, 790, 820, 770, 720, 670, 620, 570, 530], // Example sales data for each day
                borderColor: 'rgb(249, 22, 22)',
                stepped: 'middle',
                pointStyle: 'dash',
            },
        ],
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                position: 'top',
                ticks: {
                    callback: function (val, index) {
                        // Hide every 2nd tick label
                        return index % 4 === 0 ? this.getLabelForValue(val).slice(0, 2) : '';
                    },
                    // callback: function (val, index) {
                    //     return index % 3 === 0 ? this.getLabelForValue(val)[0] : '';
                    // },
                    color: textColorSecondary,
                    maxRotation: 0, // Rotate labels to 0 degrees
                    minRotation: 0  // Rotate labels to 0 degrees
                },
                grid: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary,
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>

<style>
body {
    overscroll-behavior: none;
}

.p-treetable,
.p-datatable {
    position: static;
}

.p-treetable-wrapper,
.p-datatable-wrapper {
    position: static;
    overflow: visible !important;
}

.p-treetable .p-treetable-header {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 56px;
    padding: 0;
    border: 1px solid #e2e8f0;
}

.p-treetable .p-treetable-header>* {
    margin-top: -1px;
    margin-bottom: -1px;
}

.p-treetable .p-treetable-footer {
    padding: 0;
    border: 0px;
}

.p-treetable .p-treetable-footer .p-datatable .p-datatable-tbody>tr {
    background: var(--surface-ground);
}

.p-datatable-scrollable-table .p-datatable-thead>tr,
.p-datatable-scrollable-table .p-datatable-tbody>tr,
.p-datatable-scrollable-table .p-datatable-tfoot>tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.p-treetable .p-treetable-tbody>tr>td {
    border-width: 0 0 1px 1px;
}

.no-body table tbody tr {
    display: none !important;
}

.no-header table thead tr {
    display: none !important;
}
</style>
