
<template>
    <div class="container">
        <div id="left">
            <a class="section-link" href="#two">数组语法</a><br>
            <a class="section-link active" href="#one">用在组件上</a>
        </div>
        <div style="background-color: blue; width: 20px; overflow-y:auto; height: 80px">
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div style="width:20px"></div>
        <div id="right">
            <div id="one">
                <a href="#one" class="headerlink" title="用在组件上">用在组件上</a>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div id="two">
                <a href="#two" class="headerlink" title="数组语法">数组语法</a>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
    </div>
</template>
    
<script setup lang="ts">
</script>
    
<style lang="scss">
#left {
    height: 200px;
    width: 200px;
    float: left;
    // display: inline-block;
    // vertical-align: top;
	overflow-y: auto;
}

#right {
    height: 100%;
    width: 500px;
    float: left;
    // display: inline-block;
    // vertical-align: top;
	// overflow-y: hidden; // 整体不动
    
	overflow-y:auto;
}

.container {
    height: 93vh;
	display: flex;
	// flex-direction: row-reverse;
	overflow-y: hidden; // 整体不动
    // overflow: hidden;
}
</style>