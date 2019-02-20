<template>
    <div class="data-page">
        <dheader />
        <Topnav />
        <div class="data-content">
            <div class="data-time">
				 温馨提示: 后续还会继续加功能，请关注我github更新...
			</div>
            <div class="data-main">
                <div class="main-left">
                    <dleft :personalData="personalData" :username="username" ></dleft>
                </div>
                <div class="main-center">
                    <dcenter :numberData="numberData" :username="username"></dcenter>
                </div>
                <div class="main-right">
                    <dright :username="username"></dright>
                </div>
            </div>
        </div>
        <nouser :isShow="isShow"  v-if="isShow"></nouser>
        <loading v-if="pageShow"></loading>
    </div>
</template>
<script>
import dheader from './dheader';
import dleft from './dleft';
import dcenter from './dcenter';
import dright from './dright'

export default {
    components: {
        dheader,
        dleft,
        dcenter,
        dright
    },
    data() {
        return {
            username: '',
            personalData: {},
            numberData: {},
            pageShow: true,
            isShow: false
        }
    },
    created() {
        const username = this.$route.params.user;
        this.getData(username);
    },
    methods: {
        getData(username) {
            let seft = this;
            this.$axios.get('https://api.github.com/users/' + username).then((response) => {
                let res = JSON.parse(JSON.stringify(response));
                if(res.status == 200) {
                    this.username = username;
                    let data = res.data;
                    // 加入github的时间
                    let sinceDate = data.created_at;
                    let joinDate = sinceDate.substring(0, 10);
                    // 用户图像
                    let img = data.avatar_url;
                    let objP = {
                        username: username,
                        joinDate: joinDate,
                        img: img
                    }
                    this.personalData = objP;

                    // 仓库数，粉丝数，跟随数
                    let pubRepos = data.public_repos;
                    let followers = data.followers;
                    let following = data.following;
                    let objN = {
                        pubRepos,
                        followers,
                        following
                    }
                    this.numberData = objN;

                    this.pageShow = false;
                }
            }).catch((err) => {
                this.pageShow = false;
                this.isShow = true;
                console.log(err.message);
            })
        }
    }
}
</script>
<style lang="scss">
.data-page{
    background: url(../../assets/data/true.png) repeat-x;
    top: 0;
    right: 0;
	right: 0;
	bottom: 0;
	height: 100%;
    min-width: 1220px;
    .data-content {
        padding-top: 20px;
        padding-bottom: 20px;
        .data-time {
            width: 340px;
            height: 35px;
            line-height: 35px;  
            background: #2C58A6;
            color: #fff;
		    font-size: 12.8px;
		    margin-bottom: 25px;
		    margin-left: 20px;
		    text-align: center;
        }
        .data-main {
            width: calc(100% - 40px);
            margin-bottom: 40px;
            height: 720px;
            margin-left: 20px;
            .main-left {
                width: 24%;
                float: left;
            }
            .main-center {
                float: left;
                width: 52%;
                padding: 0 20px;
            }
            .main-right {
                float: left;
                width: 24%;
                height: 615px;
            }
        }
    }
}
</style>



