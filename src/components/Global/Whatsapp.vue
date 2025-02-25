<template>
    <a id="whatsapp" href="https://wa.me/+963933080648" class="whatsapp-btn" target="_blank">
        <!-- <i class="fa-brands fa-whatsapp"></i> -->
         <img src="@/assets/img/global/whatsapp-removebg-preview.png" alt="">
        <div class="glow"></div>
        <div class="particles">

            <div class="rotate">

                <div class="angle">
                    <div class="size">
                        <div class="position">
                            <div class="pulse">
                                <div class="particle">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="angle">
                    <div class="size">
                        <div class="position">
                            <div class="pulse">
                                <div class="particle">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="angle">
                    <div class="size">
                        <div class="position">
                            <div class="pulse">
                                <div class="particle">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
</a>
</template>
<style lang="scss" scoped>
.whatsapp-btn {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    // background: rgba(255, 255, 255, 0.1);
    // backdrop-filter: blur(10px);
    // border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    // box-shadow: 0 0 15px #5996f1;
    transition: all 0.3s ease-in-out;
    z-index: 100;
}

.whatsapp-btn:hover {
    // box-shadow: 0 0 25px #5996f1, 0 0 50px #5996f1;
    transform: scale(1.1);
}
.whatsapp-btn img{
    width: 100px;
}
// .whatsapp-btn i {
//     color: #328af1;
//     font-size: 30px;
//     // text-shadow:0 0 7px #328af1 ;
//     text-shadow:
//     0 0 7px #328af1,
//     0 0 10px #328af1;
//     position: relative;
//     z-index: 3;
// }

.dir-ar {
    .whatsapp-btn {
        left: auto;
        right: 20px;
    }
}


</style>
<style scoped>
.glow {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  animation: glow 3s linear 0s infinite alternate;
  z-index: 2;
}

.particles {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  z-index: 1;
  
}

.rotate {
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
  width: 10px;
  height: 10px;
}

.angle {
  position: absolute;
  top: 0;
  left: 0;
}

.size {
  position: absolute;
  top: 0;
  left: 0;
}

.position {
  position: absolute;
  top: 0;
  left: 0;
}

.pulse {
  position: absolute;
  top: 0;
  left: 0;
}

.particle {
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.rotate {
  animation: rotate 20s linear 0s infinite alternate;
}

.pulse{
  animation: pulse 1.5s linear 0s infinite alternate;
}


@keyframes glow {
  0% {
    transform: rotate(0deg);
    box-shadow: 0 0 60px 20px #328af1, 25px 15px 50px 10px #fff, -5px -25px 30px 5px #fff;
  }
  100% {
        transform: rotate(5deg);
    box-shadow: 0 0 90px 20px #328af1, 35px 20px 40px 10px #fff, -30px -30px 40px 5px #fff;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes angle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes size {
  0% {
    transform: scale(.2);
  }
  100% {
    transform: scale(.6);
  }
}

@keyframes position {
  0% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  100% {
    transform: translate3d(100px,100px,0);
    opacity: 0;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(.5);
  }
}

@keyframes particle {
  0% {
    box-shadow: inset 0 0 20px 20px #2da2b3, 0 0 50px 10px #2da2b3, inset 0 0 80px 80px #2da2b3;
  }
  33.33% {
    box-shadow: inset 0 0 20px 20px #2da2b3, 0 0 130px 10px #2da2b3, inset 0 0 50px 50px #2da2b3;
  }
  33.34% {
    box-shadow: inset 0 0 20px 20px #2da2b3, 0 0 50px 10px #2da2b3, inset 0 0 80px 80px #2da2b3;
  }
  66.66% {
    box-shadow: inset 0 0 20px 20px #2da2b3, 0 0 130px 10px #2da2b3, inset 0 0 50px 50px #2da2b3;
  }
  66.67% {
    box-shadow: inset 0 0 20px 20px #2da2b3, 0 0 50px 10px #2da2b3, inset 0 0 80px 80px #2da2b3;
  }
  100% {
    box-shadow: inset 0 0 20px 20px #2da2b3, 0 0 130px 10px #485fe8, inset 0 0 50px 50px #2da2b3;
  }
}



.rotate .angle:nth-child(1){
  /* change the angle every 2 seconds */
  animation: angle 10s steps(5) 0s infinite;
}
.rotate .angle:nth-child(1) .size{
  /* change the size of the particle every 2 seconds */
  animation: size 10s steps(5) 0s infinite;
}
.rotate .angle:nth-child(1) .particle{
  /* animate the glow and change the color every 2 seconds */
  animation: particle 6s linear infinite alternate;
}
.rotate .angle:nth-child(1) .position{
  /* animate the fly out of the particle and its fade out at the end */
  animation: position 2s linear 0s infinite;
}



.rotate .angle:nth-child(2){
  /* change the angle every 2 seconds */
  animation: angle 4.95s steps(3) -1.65s infinite;
}
.rotate .angle:nth-child(2) .size{
  /* change the size of the particle every 2 seconds */
  animation: size 4.95s steps(3) -1.65s infinite alternate;
}
.rotate .angle:nth-child(2) .particle{
  /* animate the glow and change the color every 2 seconds */
  animation: particle 4.95s linear -3.3s infinite alternate;
}
.rotate .angle:nth-child(2) .position{
  /* animate the fly out of the particle and its fade out at the end */
  animation: position 1.65s linear 0s infinite;
}


.rotate .angle:nth-child(3){
  /* change the angle every 2 seconds */
  animation: angle 13.76s steps(8) -6.88s infinite;
}
.rotate .angle:nth-child(3) .size{
  /* change the size of the particle every 2 seconds */
  animation: size 6.88s steps(4) -5.16s infinite alternate;
}
.rotate .angle:nth-child(3) .particle{
  /* animate the glow and change the color every 2 seconds */
  animation: particle 5.16s linear -1.72 infinite alternate;
}
.rotate .angle:nth-child(3) .position{
  /* animate the fly out of the particle and its fade out at the end */
  animation: position 1.72s linear 0s infinite;
}

.rotate .angle:nth-child(5) .position{
  /* animate the fly out of the particle and its fade out at the end */
  animation: position 2.45s linear 0s infinite;
}
</style>