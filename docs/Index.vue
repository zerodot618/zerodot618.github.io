<template>
    <h1>首页</h1>
</template>

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
console.log(page)
</script>