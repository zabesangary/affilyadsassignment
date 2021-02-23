<template><transition name="fade" mode="out-in">
<router-view/>
</transition>
    <div class="main container-fluid m-0 p-0">
    <div class="container">
    <div class="row">
      <div class="col-md-6">

        <div class="banner-img">
          <h1>Maak kans op een $1000 Waardebon!</h1>
          <div id="name">
            <img src="../assets/img1.png" alt="" />
          </div>
          <div id="img2">
              <img src="../assets/img2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="main-form">
          <form id="main-for" action="index.html" method="post">

            <div class="checkboxes">
              <div class="question">
                <input  class="one"     type="radio" name="some_name" value="">
                <label for=""><p>Beantwoorden de vragen</p></label>
                </div>
                <div class="question">
                <input  class="two"     type="radio" name="some_name" value="">
                <label for=""><p>Vul je gegevens in</p></label>
                </div>
                <div class="question">
                <input  class="three"   type="radio" name="some_name" value="">
                <label for=""><p>Heb je gewonnen</p></label>
                </div>
            </div>
  <hr>
    <h6>Please enter your details below</h6>

      <div class="gender-container">
        <div class="male">
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">De heer</label>
        </div>
        <div class="female">
          <input type="radio" id="female" name="gender" value="female">
          <label for="female">Mervrouw</label>
        </div>
      </div>
      <div class="details">
        <input type="TEXT" name="some_name" value="First name">
        <input type="TEXT" name="some_name" value="Last name">
        <input class="email-input" type="TEXT" name="some_name" value="Your email">
      </div>


    <div class="birthday-form">
        <h6>Date of birth:</h6>
          <fieldset>

            <div class="field-inline-block">
              <input type="text" pattern="[0-9]*" maxlength="2" size="2" class="date-field" />
              <label><p>Day</p></label>
            </div>

            <div class="field-inline-block">
              <input type="text" pattern="[0-9]*" maxlength="2" size="2" class="date-field" />
              <label><p>Month</p></label>
            </div>

            <div class="field-inline-block">
              <input type="text" pattern="[0-9]*" maxlength="4" size="4" class="date-field date-field--year" />
              <label><p>Year</p></label>
            </div>

          </fieldset>
    </div>
  <div class="submit-button">
      <router-link to="/exit">  <input type="submit" value="accept t&cs and enter now"></router-link>
  </div>
            <!-- Gender -->
          </form>
            <div class="privacy-txt">Wij respecteren je privacy
            </div>
        </div>

      </div>
    </div>
  </div>

  <div class="row pb-5">

  </div>

  <div class="row footer">
    <div class="col-md-12 ">
    <footer>
      <div class=""><p>Deze promotie wordt onafhankelijk georganiseerd door Green Flamingo, en heeft op geen enkele manier een relatie met de fabrikanten van de getoonde producten. De handelsmerken zijn het eigendom van hun respectievelijke eigenaren. Alle afbeeldingen worden alleen getoond voor illustratieve doeleinden. Deelname mogelijk tot 31-12-2020.</p></div>
      <ul>
        <li>Voorwarden</li>
        <li>privacy</li>
        <li>GDPR transparency</li>
        <li>Cookies</li>
      </ul>
    </footer>
    </div>
  </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>




h1 {
    width: 268px;
    margin: 0 auto;
    margin-top: 117px;
    color: white;
    font-weight: 900;
    font-size: 27px;
}

.main-form {
    width: 480px;
    color: white;
}



.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(2em);
}

.fade-enter-active, .fade-leave-active {
    transform: all .3s ease;
}

.one::after {
    content: '1'!important;
    text-align: center;
    font-size: 10px;
    position: relative;
}
.two::after {
    content: '2'!important;
    text-align: center;
    font-size: 10px;
    position: relative;
}

.three::after {
    content: '3'!important;
    text-align: center;
    font-size: 10px;
    position: relative;
}

.question input[type='radio']:checked:after {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    top: -5px;
    position: relative;
    background: rgb(2,0,36);
    background: linear-gradient(172deg, rgb(49 41 183) 0%, rgb(61 115 201) 74%, rgb(41 87 197) 100%);
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    color:white;
    padding: 5px 0;
}

.question input[type='radio']:after {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    top: -5px;
    position: relative;
    background-color: #fff;
    display: inline-block;
    visibility: visible;
      padding: 5px 0;

}

.question {
    width: 94px;
    label {
      margin-top: 5px;
    }
}



.checkboxes {
    display: flex;
    flex-direction: row;
    display: inline-flex;
    margin: 14px 0 0 0;
}
hr {
    width: 100%;
    background: #cbd1e078;
    margin: -14px 0 20px 0;
}



.gender-container {
    display: flex;
    justify-content: center;

}


.gender-container  input[type='radio']:after {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    left: 18px;
    position: relative;
    background-color: #fff;
    content: '';
    display: inline-block;
    visibility: visible;
}

.gender-container:hover  input[type='radio']:checked:after{
   -webkit-transform: rotate(45deg);
   -ms-transform: rotate(45deg);
   transform: rotate(45deg);
   color: transparent;
   transition: color .3s;
   /* background: blue; */
   border: 1px solid white;
   color: grey;
}

.gender-container input[type='radio']:checked:after {
    width: 16px;
    height: 16px;
    border-radius:50%;
    left: 18px;
    position: relative;
    background: rgb(2,0,36);
    display: inline-block;
    visibility: visible;
    border-width: medium;
    border: 2px solid white;
}

.gender-container input[type=radio] {
  width: 0;
}

.gender-container label {
    margin: 0px 7px;
    background: #c9ccd030;
    padding: 10px 30px;
    width: 107px;
}



input:focus, textarea:focus, select:focus {
        outline: none;
    }

/*
.details {
    width: 300px;
} */

.details input {
    background-color: #5088e4!important;
    border: none;
    border-bottom: #cbd1e0 1px solid;
    width: 260px;
    padding: 10px 0;
    color: #ffffff;
}
.email-input{
    background-image: url(../assets/envelope.svg);
    background-position: 0px 14px;
    background-repeat: no-repeat;
    text-indent: 34px;

}


.banner {
    margin-top: 35px;
    color: white;
}

.banner-img img {
    width: 400px;
    height: auto;
}

.banner-img #img2 img {
    position: absolute;
    width: 150px !important;
    width: 181px;
    bottom: 95px;
    right: 80px;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
 transform: translate3d(0, 0, 0);
 backface-visibility: hidden;
 perspective: 1000px;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

.main-form {
    background-color: #5088e4;
    top: 80px;
    left: 50px;
    position: relative;
    border-radius: 10px;
    & label {
        font-size: 12px;
    }
}


.birthday-form h6::before{
    content:   url(../assets/callender.svg);
    position: relative;
    right: 12px;
    & p {
      color: red;
    }
}

.birthday-form h6 {
    text-indent: 16px;
    font-size: 16px
}

.birthday-form label::after {
    content: url(../assets/arrow-down.svg);
    display: flex;
    position: relative;
    top: -73px;
    left: 57px;
}


.field-inline-block {
  display: inline-block;
  width: 90px;
  position: relative;
  left: 4px;
  top: 10px;

  & p {
    position: relative;
    top: -42px;
  }
}

.birthday-form {

    text-align: left;
    top: 20px;
    left: 107px;
    position: relative;

}
  .birthday-form input {
      width: 70px;
      border: none;
      background: #5088e4;
      border-bottom: 1px solid #769ce4;

  }



.privacy-txt {
  margin-top: 18px;
  padding-bottom: 100px;
  font-size: 14px;
    .cirlce {

    }
    &::before {
        content: url(../assets/privacy.svg);


        padding: 4px 4px 2px 5px;
    border-radius: 50%;
    background-color: white;
    margin: 0 5px;
    }
}

label {
    display: inline-block;
}
.submit-button {
    margin: -21px 0 -0 0;
    input[type="submit" i] {
      background: #0046a7;
      color: #fff;
      border-radius: 25px;
      border: none;
      width: 250px;
      padding: 20px;
      margin-top: 20px;
      font-weight: 700;
      font-size: 0.7rem;
      text-transform: uppercase;
    }
}


</style>
