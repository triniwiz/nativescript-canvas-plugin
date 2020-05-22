<template>
	<Page actionBarHidden="true">
		<ActionBar title="Welcome to NativeScript-Vue!"/>
		<GridLayout iosOverflowSafeArea="false">
			<TNSCanvas iosOverflowSafeArea="true" col="0" row="0" @ready="ready($event)"/>
		</GridLayout>
	</Page>
</template>

<script lang="ts">
    import { particles } from './particles';
    import { swarm } from './swarm';

    export default {
        methods: {
            ready({object}) {
                const canvas = object;
                const ctx = canvas.getContext('2d');
                ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.arc(150, 75, 50, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            },
            drawFace(event) {
                const canvas = event;
                const ctx = canvas.getContext('2d');
                const TWO_PI = 2 * Math.PI;
                ctx.beginPath();
                ctx.arc(75, 75, 50, 0, TWO_PI, true); // Outer circle
                ctx.moveTo(110, 75);
                ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
                ctx.moveTo(65, 65);
                ctx.arc(60, 65, 5, 0, TWO_PI, true); // Left eye
                ctx.moveTo(95, 65);
                ctx.arc(90, 65, 5, 0, TWO_PI, true); // Right eye
                ctx.strokeStyle = 'blue';
                ctx.stroke();
            },
            parti(event) {
                particles(event);
            },
            swarmi(event) {
                swarm(event);
            },
        },
    };
</script>

<style scoped>
	ActionBar {
		background-color: #53ba82;
		color: #ffffff;
	}

	.message {
		vertical-align: center;
		text-align: center;
		font-size: 20;
		color: #333333;
	}
</style>
