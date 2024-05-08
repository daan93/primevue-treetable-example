<template>
    <MeterGroup :value="[{ value: value }]"
        :max="max" labelPosition="start">
        <template #label>
            <div>{{ value }} / {{ max }}</div>
        </template>
    </MeterGroup>
</template>

<script setup>
defineProps(['value', 'max'])
</script>