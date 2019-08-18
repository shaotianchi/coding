<template>
    <div class="main">
        <div class="code-editor">
            <editor v-model="code" 
                @init="editorInit" 
                lang="javascript"
                theme="dracula"
                :readonly="false"
            />
        </div>
        <div class="left-pad">
            <el-button class="submit-button" type="primary">提交答案</el-button>
            <el-divider></el-divider>
            <div class="lang">
                <div style="margin-bottom: 10px;">当前使用语言: </div>
                <el-select v-model="selectedLang" placeholder="请选择编程语言">
                    <el-option
                        v-for="item in langs"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </div>
        </div>
    </div>
</template>

<script>
import ace from 'brace'
export default {
    data() {
        return {
            code: '',
            selectedLang: 'javascript',
            langs: [
                'javascript',
                'java'
            ]
        }
    },
    components: {
        editor: require('vue2-ace-editor')
    },
    methods: {
        editorInit(editor) {
            require('brace/mode/html')
            require('brace/mode/javascript')
            require('brace/mode/less')
            require('brace/theme/dracula')
            require('brace/snippets/javascript')

            require('brace/ext/language_tools.js')
            ace.acequire("ace/ext/language_tools");
            editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: false
            });
        }
    } 
}
</script>

<style lang="less" scoped>
.ace_editor {
    font-size: 20px;
}
.main {
    display: flex;
    flex: 1;
    .code-editor {
        display: flex;
        flex: 1;
    }
    .left-pad {
        width: 200px;
        display: flex;
        flex-direction: column;
        .submit-button {
            margin-left: 16px;
            margin-right: 16px;
            margin-top: 32px;
        }
        .lang {
            margin-left: 16px;
            margin-right: 16px;
            margin-top: 20px;
        }
    }
}
</style>
