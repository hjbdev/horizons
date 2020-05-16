<template>
    <div class="hor-dialog-container">
        <div class="hor-dialog">
            <div class="hor-dialog-person">
                Isabelle
            </div>
            <div class="hor-dialog-text">I believe communication is key to solving any dispute. But, if you've already tried talking with them...</div>
            <div class="hor-dialog-bg">
                <div class="hor-dialog-bg-top"></div>
                <div class="hor-dialog-bg-bottom"></div>
            </div>
        </div>
        <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
        </filter>
    </div>
</template>
<script>
export default {
    props: {
        message: String,
        person: String
    }
}
</script>
<style lang="scss">
    .hor-dialog-container {
        display: flex;
        position: absolute;
        bottom: 10%;
        left: 20%;
        right: 20%;
        @media(max-width: 1500px) {
            left: 10%;
            right: 10%;
            width: 80%;
        }

        width: 60%;
        .hor-dialog {
            position: absolute;
            width: 100%;
            bottom: 0;

            .hor-dialog-person {
                z-index: 2;
                padding: 1rem 2rem;
                position: absolute;
                color: #fff;
                line-height: 1;
                font-size: 3rem;
                left: 0;
                background-color: #fff98e;
                color: #f79500;
                border-radius: 4rem;
                transform: translate(-2rem, -3rem) rotate(-10deg);
                font-family: 'Balsamiq Sans', sans-serif;
                @media (max-width: 1280px) {
                    font-size: 2rem;
                    padding: .5rem 1rem;
                    transform: translate(-1rem, -1.5rem) rotate(-10deg);
                }

                @media(max-width: 640px) {
                    font-size: 1rem;
                    transform: translate(-.5rem, -.5rem) rotate(-10deg);
                }
            }

            .hor-dialog-text {
                font-family: 'Balsamiq Sans', sans-serif;
                position: absolute;
                left: 6%;
                right: 6%;
                font-size: 3rem;
                z-index: 1;
                height: 100%;
                padding: 2rem;
                color: #82765b;
                overflow:hidden;

                @media(max-width: 1280px) {
                    font-size: 1.5rem;
                }

                @media(max-width: 640px) {
                    font-size: 1rem;
                    padding: 1.5rem;
                }

                span.hor-dialog-text-highlighted {
                    color: #10c6cd;
                }
            }
            
            .hor-dialog-bg {
                display: flex;
                justify-content:center;
                flex-direction: column;
                align-items:center;
                filter: contrast(20);
                overflow: hidden;
                background: rgba(0,0,0,0);
                filter:url('#goo');
                .hor-dialog-bg-top {
                    background-color: #fffae4;
                    border-radius: 9999px;
                    height: 10rem;
                    width: 100%;
                    @media (max-width: 1280px) {
                        height: 7rem;
                    }
                }
                .hor-dialog-bg-bottom {
                    background-color: #fffae4;
                    border-radius: 9999px;
                    height: 6rem;
                    width: 93%;
                    margin-top: -1.5rem;
                    @media (max-width: 1280px) {
                        height: 3rem;
                    }
                }
            }
        }
    }
</style>