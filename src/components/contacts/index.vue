<template>
  <div :class="b()">
    <ul :class="b('content')" ref="content" :style="{ 'height': currentHeight + 'px'}">
      <div v-for="(section,index) in sections">
        <div v-for="item in section">
          <ma-cell :obj="item" @select="toggle" :checked="item.checked"></ma-cell>
        </div>
      </div>
    </ul>
    <div :class="b('nav')" @touchstart="handleTouchStart" ref="nav">
      <ul :class="b('navlist')">
        <li :class="b('navitem')" v-for="(item,index) in sections" :key="index">{{ index }}</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
import create from "utils/create"
import cnToPinyin from "./pinyinUtil"

export default create({
    name: "contacts",
    props: {
        height: Number,
        showToast: {
            type: Boolean,
            default: true
        },
        checkbox: {
            type: Boolean,
            default: true
        },
        staff: Array,
        duration: {
            type: Number,
            default() {
                return 500;
            }
        },
        checks: Array
    },

    data() {
        return {
            sections: {},
            currentHeight: this.height,
            navOffsetX: 0,
            checkValues: this.checks
        };
    },

    watch: {
        height(val) {
            if (val) {
                this.currentHeight = val;
            }
        },
        checks(val){
          this.checkValues = this.checks
        }
    },
    methods: {
      toggle(v) {
        console.log(v)
      },
        change(c) {
            this.$emit("change", c);
        },
        onChange(b){
            console.log(b)
        },
        getStaffArray(staff) {
            let arr = {};
            staff.sort((a, b) => {
                return (
                    Number(cnToPinyin.getFirstLetter(a.name).charCodeAt(0)) -
                    Number(cnToPinyin.getFirstLetter(b.name).charCodeAt(0))
                );
            });
            staff.forEach(item => {
                if (!arr[cnToPinyin.getFirstLetter(item.name)[0]]) {
                    arr[cnToPinyin.getFirstLetter(item.name)[0]] = [];
                }
                arr[cnToPinyin.getFirstLetter(item.name)[0]].push(item);
            });
            return arr;
        },

        sort(staff) {
            if (
                staff.every(item => {
                    return typeof item === "object";
                })
            ) {
                this.sections = this.getStaffArray(staff);
            } else {
                throw new TypeError("Items of staff must be Object");
            }
        },

        handleTouchStart(e) {
            if (e.target.tagName !== "LI") {
                return;
            }
            this.navOffsetX = e.changedTouches[0].clientX;
            this.scrollList(e.changedTouches[0].clientY);
            window.addEventListener("touchmove", this.handleTouchMove);
            window.addEventListener("touchend", this.handleTouchEnd);
        },

        handleTouchMove(e) {
            e.preventDefault();
            this.scrollList(e.changedTouches[0].clientY);
        },

        handleTouchEnd() {
            window.removeEventListener("touchmove", this.handleTouchMove);
            window.removeEventListener("touchend", this.handleTouchEnd);
        },

        scrollList(y) {
            let currentItem = document.elementFromPoint(this.navOffsetX, y);
            if (
                !currentItem ||
                !currentItem.classList.contains("ma-contacts__navitem")
            ) {
                return;
            }
//          this.$toast({
//              message: currentItem.innerText,
//              duration: this.duration
//          });
            this.$refs["view" + currentItem.innerText][0].scrollIntoView(true);
        }
    },

    mounted() {
        if (!this.currentHeight) {
            window.scrollTo(0, 0);
            this.$nextTick(() => {
                this.currentHeight =
                    document.documentElement.clientHeight -
                    this.$refs.content.getBoundingClientRect().top;
            });
        }
        this.sort(this.staff);
    }
});
</script>
<style lang="scss">
  .ma-contacts{
    width: 100%;
    position: relative;
    overflow: hidden;
    li.ma-contacts__index-section{
        border-bottom: 1px solid #e2e2e2;  
    }
    &__content{
        margin: 0;
        padding: 0;
        overflow: auto;
    }
    &__nav {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        background:rgba(255,255,255,0.4);
        text-align: center;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    &__navlist {
        padding: 0;
        margin: 0;
        list-style: none;
        max-height: 100%;
        display: flex;
        flex-direction: column;
    }
      
    &__navitem {
        padding: 2px 6px;
        font-size: 12px;
        user-select: none;
        -webkit-touch-callout: none;
    }
    //jc-cell样式
    .jc-cell{
        min-height:auto;
        padding:.27rem 0;
        margin:0;
        border-bottom: 1px solid #e2e2e2;
        
        .jc-cell-title img{
            width: .96rem;
            height: .96rem;
            margin-right: .27rem;
            border-radius: 4px;
        }
    }
    //indexsection样式
    &__index-section{
        &--index{
            font-size:14px;
            color:#757a95;
            height:.61rem;
            line-height:.61rem;
            padding-left:.48rem;
            background: #ececec;
        }
    }
    //checklist样式
    .jc-checklist{
        margin:0 0 0 .4rem;
        &:last-child .jc-cell{
            border-bottom: 0;
        }
    }
}
</style>