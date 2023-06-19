<template>
    <Search>
        <el-form
            :model="form"
            :rules="rules"
            ref="searchForm"
            @keyup.enter="search('searchForm')"
        >
            <el-row>
                <el-col :span="8">
                    <el-form-item label="入驻时间:">
                        <el-date-picker
                            v-model="form.time"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd HH:mm:ss"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商家编码:">
                        <el-input
                            v-model="form.code"
                            placeholder="请输入商家编码"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商家名称:">
                        <el-input
                            v-model="form.shopName"
                            placeholder="请输入商家名称"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="手机号码:" prop="mobile">
                        <el-input
                            v-model="form.mobile"
                            placeholder="请输入手机号码"
                            maxlength="11"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="所属行业:">
                        <el-select v-model="form.industryCode">
                            <el-option
                                v-for="item in industryList"
                                :label="item.showName"
                                :value="item.code"
                                :key="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <SearchController>
                    <el-button type="primary" @click="search('searchForm')"
                        >查询</el-button
                    >
                    <el-button @click="reset"> 重置</el-button>
                </SearchController>
            </el-row>
        </el-form>
    </Search>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            form: {
                //入驻时间
                time: [],
                //商户编号
                code: '',
                //商户名称
                shopName: '',
                //手机号码
                mobile: '',
                //所属行业
                industryCode: '',
                //当前状态
                status: '',
                //是否已开户（1:已开户，0：未开户）
                bindStatus: '',
                //是否缴纳保证金：0否，1是
                isPayMargin: '',
                //是否签订合同：0否，1是
                isSignContract: '',
                //企业类型
                type: '',
                //交易状态
                openStatus: ''
            }
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
