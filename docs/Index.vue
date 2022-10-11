<template>
    <img class="wechat-qrcode" src="/img/wechat-qrcode.jpg" alt="六码公众号">
</template>

<script setup>
</script>

<style>
.wechat-qrcode {
    width: 120px;
    position: absolute;
    left: 36%;
    top: -176px;
}

@media screen and (max-device-width: 640px) {
    .wechat-qrcode {
        width: 120px;
        position: absolute;
        top: -30px;
    }
}
</style>