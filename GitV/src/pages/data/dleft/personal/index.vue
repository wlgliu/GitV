<template>
    <div class="personal-box">
        <div class="personal-body">
            <div class="left">
                <div class="img">
                    <img :src="personalData.img"  />
                </div>
            </div>
            <div class="right">
                <div class="name">{{ personalData.username }}</div>
                <div class="year">
                    <a class="date">{{ personalData.joinDate}}</a>
                    <a class="time">加入github</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'personal',
    props: {
        personalData: Object
    }
}
</script>
<style lang="scss">
.personal-box {
    width: 100%;
    height: 140px;
    padding: 15px;
    overflow: hidden;
    .personal-body {
        width: 100%;
        height: 100%;
        .left {
            width: 110px;
            height: 100%;
            float: left;
            padding: 15px;
            .img {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                padding: 10px;
                border: 1px solid #4788fb;
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }
        .right {
            float: left;
            width: calc(100% - 110px);
            .name {
                margin-top: 10px;
                font-size: 2.5rem;
                line-height: 4rem;
                font-weight: bold;
                color: #25f3e6;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .year {
                .date{
                    display: block;
                    color: #f6a645;
                    font-size: 2rem;
                    text-decoration: none;
                    cursor: none;
                }
                .time {
                    display: block;
                    font-size: 1rem;
                    color: #fff;
                    text-decoration: none;
                    cursor: none;
                }
            }
        }
    }
}
</style>


