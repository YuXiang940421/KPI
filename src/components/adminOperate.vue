<template>
  <div>
    <el-dropdown @command="handleCommand">
      <el-button type="primary" plain>
        {{ config.called }}<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="add">添加人员</el-dropdown-item>
        <el-dropdown-item command="del">删除人员</el-dropdown-item>
        <el-dropdown-item command="admin">绑定链接</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 添加界面 -->
    <el-dialog
      :title="'添加' + config.called"
      :visible.sync="isOpenAdd"
      width="350px"
      :modal-append-to-body="false"
      :lock-scroll="false"
    >
      <el-form @submit.native.prevent="isAdd">
        <el-form-item style="text-align: center">
          <el-input
            ref="input"
            v-model.trim="addOperate"
            :placeholder="`请输入${config.called}姓名`"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isOpenAdd = false">取 消</el-button>
        <el-button type="primary" @click="isAdd">确定添加</el-button>
      </div>
    </el-dialog>

    <!-- 删除界面 -->
    <el-dialog
      :title="`删除${config.called}`"
      :visible.sync="isOpenDel"
      width="350px"
      :modal-append-to-body="false"
      :lock-scroll="false"
    >
      <el-form>
        <el-form-item style="text-align: center">
          <el-select v-model="delOperate" placeholder="请选择运营" filterable>
            <el-option
              v-for="item in config.staffs"
              :key="item.id"
              :label="item.operate"
              :value="item.operate"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isOpenDel = false">取 消</el-button>
        <el-button type="danger" @click="isDel">确定删除</el-button>
      </div>
    </el-dialog>

    <!-- 绑定界面 -->
    <el-dialog title="绑定链接" :visible.sync="isOpenAdmin" width="350px" :lock-scroll="false">
      <!-- :modal-append-to-body="false" -->
      <el-form label-width="70px">
        <el-form-item label="运营">
          <el-select v-model="operateSelect" placeholder="请选择运营" filterable @change="idDefault">
            <el-option
              v-for="item in config.staffs"
              :key="item.id"
              :label="item.operate"
              :value="item.operate"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品id" style="margin-top: 10px" v-if="operateSelect">
          <el-select
            placeholder=" 请输入商品id "
            v-model="idSelect"
            filterable
            multiple
            :allow-create="true"
            @remove-tag="clearId"
          >
            <el-option
              v-for="item in productArr"
              :key="item.id"
              :label="`${item.id}(${item.title.slice(0, 5) + '...'})`"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isOpenAdmin = false">取 消</el-button>
        <el-button type="primary" @click="isAdmin">确认绑定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "admin-operate",
  props: ["productArr", "config"],
  data() {
    return {
      //添加界面
      isOpenAdd: null,
      addOperate: null,
      //删除界面
      isOpenDel: null,
      delOperate: null,
      //绑定界面
      isOpenAdmin: false,
      operateSelect: null,
      idSelect: null,
      delId: null, //被删除的id
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "add") {
        this.isOpenAdd = true;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      }
      if (command == "del") this.isOpenDel = true;
      if (command == "admin" && this.config.staffs.length === 0) {
        return this.$message.error("请先添加运营人员!");
      }
      if (command == "admin") this.isOpenAdmin = true;
      if (command == "check") this.isOpenCheck = true;
    },
    //确定添加
    isAdd() {
      if (!this.addOperate) return this.$message.error(`内容不能为空`);
      if (this.config.staffs.some(val => val.operate == this.addOperate)) {
        return this.$message.error(`运营 ${this.addOperate} 已存在`);
      }
      this.$emit("admin-add", this.addOperate, this.config.called);
      this.addOperate = null;
    },
    //确定删除
    isDel() {
      this.$confirm(
        `<h3>是否确定删除 ${this.delOperate}？</h3>---该操作会同时删除${this.delOperate}的<strong>所有链接绑定</strong>---`,
        "确认信息",
        {
          distinguishCancelAndClose: true,
          dangerouslyUseHTMLString: true,
          lockScroll: false,
          confirmButtonText: "确定",
          cancelButtonText: "放弃修改",
          type: "warning",
        }
      ).then(() => {
        this.$emit("admin-del", this.delOperate, this.config.called);
        this.delOperate = null;
      });
    },
    //默认选中已绑定的id
    idDefault() {
      let index = this.config.staffs.findIndex(val => val.operate == this.operateSelect);
      this.idSelect = index != -1 ? this.config.staffs[index].ids : null;
    },
    //下拉框中直接删除id
    clearId(tag) {
      this.delId = tag;
      this.$confirm(
        `<h3>是否确定为 ${this.operateSelect} 删除 ${tag} 链接？</h3>---继续点击【确认绑定】后生效---`,
        "删除链接确认",
        {
          distinguishCancelAndClose: true,
          dangerouslyUseHTMLString: true,
          confirmButtonText: "确定",
          cancelButtonText: "放弃",
          type: "warning",
        }
      ).catch(() => {
        this.idSelect.push(this.delId);
      });
    },
    //确定绑定
    isAdmin() {
      this.$confirm(`<h3>${this.operateSelect}</h3>${this.idSelect.join("<br>")}`, "确认绑定信息", {
        distinguishCancelAndClose: true,
        dangerouslyUseHTMLString: true,
        confirmButtonText: "确定",
        cancelButtonText: "放弃修改",
        type: "success",
      }).then(() => {
        //id选项去除前后空格
        this.idSelect.forEach((item, index) => {
          this.idSelect.splice(index, 1, item.toString().trim());
        });
        //id选项去重
        this.idSelect = this.idSelect.filter((item, index) => this.idSelect.indexOf(item) == index);
        this.$emit("admin-bind", this.operateSelect, this.idSelect, this.config.called);
        this.isOpenAdmin = false;
        this.operateSelect = this.idSelect = null;
      });
    },
  },
  watch: {},
};
</script>

<style lang="less" scoped></style>
