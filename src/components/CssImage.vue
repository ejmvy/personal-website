<template>
  <div class="circProfile">
    <div class="hair">
      <div class="side"></div>
      <div class="side2"></div>
      <div class="fringe"></div>
      <div class="face">
        <div class="shadow"></div>
        <div class="eyebrow"></div>
        <div class="eyes">
          <div class="pupil"></div>
        </div>
        <div class="eyes two">
          <div class="pupil"></div>
        </div>
        <div class="cheeks"></div>
        <div class="mouth"></div>
      </div>
      <div class="neck"></div>
      <div class="chest"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$brown: #3c280d;
$skin: #f2c09a;

body {
  background: beige;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.circProfile {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #ccbbff;
  overflow: hidden;
  z-index: 1;
}

.hair {
  position: absolute;
  width: 50%;
  height: 80%;
  background: $brown;
  left: 25%;
  top: 20%;
  border-radius: 90px 90px 0 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);

  .side {
    position: absolute;
    width: 40px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 10px 10px 0 0 $brown;
    top: 30%;
    left: -22%;
    z-index: -1;
    &:before {
      @extend .side;
      top: 40%;
      left: 35%;
      position: absolute;
      content: "";
      transform: scaleX(-1) rotate(120deg);
    }
  }

  .side2 {
    position: absolute;
    width: 40px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 10px 10px 0 0 $brown;
    z-index: -1;
    transform: scaleX(-1) rotate(10deg);
    left: 90%;
    top: 20%;
  }

  .fringe {
    position: absolute;
    width: 60%;
    height: 15%;
    background: $brown;
    border-radius: 40%;
    top: 15%;
    z-index: 3;
    left: 40%;
    transform: rotate(30deg);

    &:before {
      @extend .fringe;
      background: $brown;
      content: "";
      position: absolute;
      width: 90%;
      height: 90%;
      transform: rotate(-70deg);
      left: -60%;
      top: 80%;
    }
  }

  .face {
    position: absolute;
    width: 80%;
    height: 45%;
    background: #f2c09a;
    left: 10%;
    top: 20%;
    border-radius: 20px 20px 90px 90px;

    .eyebrow {
      width: 40px;
      height: 5px;
      background: black;
      position: absolute;
      top: 10%;
      left: 5%;
      z-index: 3;
      transform: rotate(-20deg);

      &:before {
        @extend .eyebrow;
        position: absolute;
        content: "";
        left: 60px;
        top: 20px;
        transform: rotate(30deg);
      }
    }

    .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: 0 2px 2px 0 black;
      top: 0%;
      z-index: 2;
    }

    .eyes {
      position: absolute;
      width: 35px;
      height: 35px;
      background: white;
      border-radius: 50%;
      top: 20%;
      left: 12%;
      z-index: 2;

      .pupil {
        position: absolute;
        width: 45%;
        height: 45%;
        background: black;
        border-radius: 50%;
        left: 25%;
        top: 30%;

        &:before {
          position: absolute;
          content: "";
          width: 45%;
          height: 45%;
          background: #ccc;
          border-radius: 50%;
          left: 5%;
          top: 20%;
        }

        &:after {
          width: 25%;
          height: 25%;
          background: #757575;
          position: absolute;
          content: "";
          border-radius: 50%;
          top: 5%;
          left: 45%;
        }
      }

      &.two {
        @extend .eyes;
        left: 55%;
      }
    }
  }

  .cheeks {
    position: absolute;
    width: 30px;
    height: 20px;
    background: #cd5c5c;
    border-radius: 50%;
    top: 45%;
    left: 10%;

    &:before {
      @extend .cheeks;
      left: 60px;
      position: absolute;
      content: "";
      top: 0;
    }
  }

  .mouth {
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid black;
    border-radius: 0px 0 20px 0px;
    border-top: 0;
    border-left: 0;
    top: 70px;
    left: 55px;
    z-index: 5;
    transform: rotate(15deg);
  }

  .neck {
    position: absolute;
    width: 30%;
    height: 20%;
    background: #f2c09a;
    top: 60%;
    left: 35%;
  }
  .chest {
    position: absolute;
    width: 120%;
    height: 40%;
    background: #7e2811;
    top: 75%;
    left: -10%;
    border-radius: 25px 25px 0 0;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);

    &:before {
      width: 30%;
      height: 30%;
      background: #7e2811;
      content: "";
      position: absolute;
      left: 35%;
      top: -15%;
      border-radius: 5px 5px 0 0;
    }
  }
}
</style>
