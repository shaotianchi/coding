<template>
    <div class="manage">
        <div class="left-pad">
            <div class="func" :class="{select: selectedFunc === 1}" @click="selectedFunc = 1;$router.push({name: 'questions'})">题目管理</div>
            <div class="func" :class="{select: selectedFunc === 2}" @click="selectedFunc = 2;$router.push({name: 'interviews'})">面试管理</div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedFunc: 1
        }
    }
}
</script>

<style lang="less" scoped>
.manage {
    display: flex;  
    flex: 1;
    .left-pad {
        display: flex;
        flex-direction: column;
        width: 200px;
        color: #EBEEF5;
        background-color: black;
        align-items: center;
        .func {
            font-size: 18px;
            margin-top: 104px;
            &+.func {
                margin-top: 64px;
            }
            &.select {
                color: #FF571A;
                font-weight: bold;
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
