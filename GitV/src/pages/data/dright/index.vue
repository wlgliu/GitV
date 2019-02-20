<template>
    <div class="right-content">
        <div class="top-box">
            <databox :title="''" :dheight="440">
                <databox :title="'新增粉丝'" :dheight="210" :boxb="false">
                    <follower :data="followers"></follower>
                    <nodata :nodata="'一个粉丝'" v-if="noFollowing"></nodata>
                </databox>
                <databox :title="'最近跟随'" :dheight="210" :boxb="false">
                    <follower :data="following"></follower>
	     	     	<nodata :nodata="'一个跟随'" v-if="noFollowing"></nodata>
                </databox>
            </databox>
            <div class="message">
                <databox :title="'最新消息'" :dheight="260" :icon="'account'">
                    <message :data="message"></message>
                    <nodata :nodata="'最新消息'" v-if="noMessage"></nodata>
                </databox>
            </div>
        </div>
    </div>
</template>
<script>
import follower from './follower';
import message from './message';

export default {
    components: {
        follower,
        message
    },
    props: {
        username: String
    },
    data() {
        return {
            followers:[],
            noFollowers:false,
            following:[],
            noFollowing:false,
            message:[],
            noMessage:false
        }
    },
    methods: {
        getData(username) {
            let comUrl = "https://api.github.com/users/";
            let url1 = comUrl + username + "/followers";
            let url2 = comUrl + username + "/following";
            let url3 = comUrl + username + "/received_events";
            this.$axios.all([
                this.$axios.get(url1),
                this.$axios.get(url2),
                this.$axios.get(url3)
            ]).then(this.$axios.spread((res1, res2, res3) => {
                // 粉丝情况
                let data1 = JSON.parse(JSON.stringify(res1.data));
                if(data1.length < 1) {
                    this.noFollowers = true;
                }else {
                    this.followers = data1.reverse();  
                }
                // 跟随情况
                let data2 = JSON.parse(JSON.stringify(res2.data));
                if(data2.length < 1) {
                    this.noFollowing = true;
                }else {
                    this.following = data2.reverse();
                }

                // 最近消息
                let data3 = JSON.parse(JSON.stringify(res3.data));
                if(data3.length < 1) {
                    this.noMessage = true;
                }else {
                    this.message = data3;
                }

                return;
            })).catch((err) => {
                console.log(err.messege);
            })
        }
    },
    watch: {
        username(username) {
            this.getData(username);
        }
    }
}
</script>
<style lang="scss">
.right-content {
    width: 100%;
    height: 100%;
    .top-box {
        padding-bottom: 20px;
        
    }
}
</style>


