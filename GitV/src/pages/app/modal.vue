<template>
    <div>
        <div class="modal pm-box" :class="{'in': isShow}">
		    <div class="modal-dialog" role="document">
		        <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">GitDataV服务条款</h4>
                        <button type="button" @click="closebtn" class="close"><span>&times;</span></button>
                    </div>
                    <div class="modal-body pm-body">
                        <p>感谢您使用GitDataV！我们很高兴你在这里。在访问或使用GitDataV之前，请仔细阅读本服务条款协议:</p>
                        <P>A、GitDataV通过<a href="https://developer.github.com/v3/" target="_blank"></a>github官方api提供接口平台</P>
                        <p>B、本网站只通过用户账号通过官方接口进行查询您的公开相关数据，并对这些数据进行梳理和在网页上展示，网站本身并不存储您任何相关数据</p>
                        <p>C、本网站由于依赖github官方提供接口，对查询的次数有限制，请勿恶意攻击和压力查询,如果网站有问题请及时与开发者：<a href="https://github.com/" target="_blank">codercao</a>联系 </p>
                        <P>D、本网站属于非盈利性质，请勿进行商业用途，源码已开源</P>
                        <p>E、其他条款遵循<a href="https://help.github.com/articles/github-terms-of-service/" target="_blank">GitHub服务条款</a></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="closebtn" class="btn btn-default">知道了</button>
                    </div>
                </div>
		    </div>
		</div>
		<div class="modal-backdrop" :class="{in: isShow}"></div>
    </div>
</template>
<script>
export default {
    name: 'modal',
    data() {
        return {
            sayhidden: false
        }
    },
    methods: {
        closebtn() {
            this.$emit('sayhidden', this.sayhidden)
        }
    },
    props: {
        isShow: null
    }
}
</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
body {
    font-size: 24px;
}
.pm-box{
    z-index: 9999;
    display: block;
} 
.modal-backdrop{
    filter: blur(2px);
    z-index: 9997;
}
.modal-content {
    border-radius: 6px;
}
.modal-title{
    width: 100%;
    text-align: center;
}
.modal-body{
    font-size: 2rem;
    color: #888;
    padding: 1.5rem;
}
.pm-body{
    display: block;
    height: auto;
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 60rem;
        margin: 3rem auto;
    }
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border-radius: 4px;
}
.btn-default:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
}
.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
    outline: none;
}
.modal-backdrop.in {
    filter: alpha(opacity=50);
    opacity: .5;
}

</style>


