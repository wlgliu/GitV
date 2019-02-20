<template>
	<div class="footer-link">
	    <p>Copyright © 2018  Design  and Development By codercao </p>
        <p>Contact Me by github : <a href="https://github.com" target="_blank" title="Eric">Cao</a></p>
	</div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style lang="scss">
.footer-link {
	position: relative;
    font-size: 18px;
    bottom: 0;
    left: 0;
    color: white;
    text-align: center;
    width: 100%;
    z-index: 1001;
    p{
    	a{
    		color: #E6E6FA ;
            cursor: pointer;
    	}
    }
}
</style>