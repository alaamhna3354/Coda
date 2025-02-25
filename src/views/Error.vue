<template>
  <div class="row justify-content-center pt-5 py-5">
    <div class='glowing-btn'>
    <span class='glowing-txt'><span class="span-404">404</span> <br>
      <span class='faulty-letter'>This Page Not Found</span>
    </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>


.glowing-btn {
   margin-bottom: 150px;
   position: relative;
  color: hsl(186 100% 69%);
  cursor: pointer;
  padding: 0.35em 1em;
  perspective: 2em;
  font-weight: 900;
  letter-spacing: 5px;
  // -webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
  //   0px 0px 0.5em 0px hsl(186 100% 69%);
  // -moz-box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
  //   0px 0px 0.5em 0px hsl(186 100% 69%);
  // box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
  //   0px 0px 0.5em 0px hsl(186 100% 69%);
    max-width: 400px;
    display: flex;
    justify-content: center;
  @media (max-width:768px) {
    max-width: 300px;
   margin-bottom: 80px;
  }
 
  }
  .span-404{
    font-size: 3em;
  }
.glowing-txt {
  float: left;
  margin-right: -0.8em;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(186 100% 69%);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(186 100% 69%);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(186 100% 69%);
  animation: text-flicker 3s linear infinite;
  text-align: center;
}

.faulty-letter {
  opacity: 0.5;
  animation: faulty-flicker 2s linear infinite;
  font-size: 1.5em;
  @media (max-width:768px) {
    font-size: 1.2em;
  }
}

.glowing-btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(441%) rotateX(95deg) scale(1, 0.35);
  background: #61efffab;
  pointer-events: none;
  height: 30px;
}
@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}



@media only screen and (max-width: 600px) {
  .glowing-btn{
    font-size: 1em;
  }
}

</style>