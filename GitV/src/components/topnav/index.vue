<template>
    <div class="navbar">
        <ul>
            <li @click="fullBox">
				<icon 
					:type="'quanping'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'yuyanqiehuan'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'ziyuan'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'zuojiantou1'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Topnav',
    methods: {
        fullBox(e) {
            if((document.fullscreenElement && document.fullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen) ) {
                if (document.documentElement.requestFullScreen) {
                  document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            }else {
                if(document.exitFullscreen){
                    document.exitFullscreen();
                }else if(document.mozCancelFullScreen){
                    document.mozCancelFullScreen();
                }else if(document.webkitCancelFullScreen){
                    document.webkitCancelFullScreen();
                }
            }
        }
    }
}
</script>
<style lang="scss">
.navbar {
    width: 250px;
    height: 50px;
    line-height: 50px;
    top: -50px;
    text-align: right;
    background: rgba(216, 191, 216, 0.2);
    padding: 0;
    margin-left: -200px;
    transition: margin-left 0.9s;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        li {
            width:50px;
            height: 100%;
            cursor: pointer;
            text-align: center;
            &:hover {
                background-color: #3498da;
            }
        }
    }
    &:hover {
        margin-left: 0;
    }
}
</style>


