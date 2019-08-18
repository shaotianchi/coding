<template>
    <div class="interviews">
        <div class="head">
            <div style="flex: 1; display: flex; align-items: center;">
            </div>
            <div>
                <el-button @click="showPanel=true;" type="primary">新建面试题</el-button>
            </div>
        </div>
        <div class="list">
            <el-table
            :data="questions"
            style="width: 100%">
                <el-table-column
                    label="名称">
                    <template slot-scope="scope">
                        <el-link @click="showQuestionContent(scope.row)" type="primary">{{scope.row.name}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="lang"
                    label="语言"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="creater"
                    label="创建者">
                </el-table-column>
                <el-table-column
                    prop="updated"
                    label="修改时间">
                </el-table-column>
            </el-table>
        </div>
        <div class="page">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="10">
            </el-pagination>
        </div>

        <el-dialog :title="showingQuestion ? showingQuestion.name : '新建面试题'" :visible.sync="showPanel">
            <div style="display: flex; align-items: center;">
                <el-select v-model="questionLang" placeholder="请选择编程语言">
                    <el-option
                        v-for="item in langs"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
                <el-input
                    style="margin-left: 16px;"
                    placeholder="请输入面试题名称"
                    v-model="questionName"
                    clearable>
                </el-input>
            </div>
            <el-divider/>
            <div class="editor-container">
                <editor v-model="content" 
                    @init="editorInit" 
                    lang="javascript"
                    theme="dracula"
                    :readonly="false"
                />
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showPanel = false;showingQuestion=null;">取 消</el-button>
                <el-button type="primary" @click="showPanel = false;showingQuestion=null;">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.interviews {
    display: flex;
    flex-direction: column;
    flex: 1;
    .head {
        margin: 32px;
        display: flex;
        align-items: center;
    }
    .list {
        margin-left: 32px;
        margin-right: 32px;
    }
    .page {
        margin: 32px;
    }
}

.editor-container {
    height: 500px;
    .ace_editor {
        font-size: 20px;
    }
}
</style>
