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

<style lang="scss" scoped>
@import "./src/styles/_home.scss";
</style>
