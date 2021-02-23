<template>
  <header>
    <h1>Bedankt voor je deelname</h1>
  <div class="exit-logo">
    <img src="../assets/exitlogo.png" alt="" />
  </div>
  </header>
  <div class="main-exit">
    <div class="exit">
      <div class="container">
        <div class="row">
          <div class="col-sm product">
        <div class="label">Maak kans op een $1000 Waardebon!</div>
          <img src="../assets/exitimg1.jpg" alt="" />
          <div class="kieslink"><a href="">Kies deze</a></div>
          </div>
          <div class="col-sm product" >
            <div class="label">Win een iPhone 12 pro</div>
              <img src="../assets/exitimg2.jpg" alt="" />

              <div class="kieslink"><a href="#">Kies deze</a></div>
          </div>
          <div class="col-sm product">
          <div class="label">Maak kans op een $1000 Waardebon!</div>
            <img src="../assets/exitimg3.jpg" alt="" />
          <div class="kieslink">  <a href="">Kies deze</a></div>
          </div>
          </div>
          <div class="banner-exit">
            <p>Recentelijk verlopern aanbiedingen</p>
          </div>
          </div>
            <div class="container">
            <div class="row">
          <div class="col-sm product">
<div class="label">Maak kans op een $1000 Waardebon!</div>
              <img src="../assets/exitimg3.jpg" alt="" />
                <div class="verlopern">Verlopen op 25-12-2020</div>
          </div>
          <div class="col-sm product">
<div class="label">Maak kans op een $1000 Waardebon!</div>
              <img src="../assets/exitimg3.jpg" alt="" />
                      <div class="verlopern">Verlopen op 28-10-2020</div>
          </div>
          <div class="col-sm product">
          <div class="label">Maak kans op een $1000 Waardebon!</div>

              <img src="../assets/exitimg3.jpg" alt="" />
              <div class="verlopern">Verlopen op 28-12-2020</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row footer">
      <div class="col-md ">
      <footer><p>Deze promotie wordt onafhankelijk georganiseerd door Green Flamingo, en heeft op geen enkele manier een relatie met de fabrikanten van de getoonde producten. De handelsmerken zijn het eigendom van hun respectievelijke eigenaren. Alle afbeeldingen worden alleen getoond voor illustratieve doeleinden. Deelname mogelijk tot 31-12-2020.</p>
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

body {
  font-family: 'Poppins', sans-serif;
  background-image: url(../assets/exit-bg.jpg)!important;
  background-repeat: no-repeat;
  background-size: cover;

}

.kieslink a:after {
    content: '\02C3';
    color: #8bb5eb;
    padding: 7px;
    position: relative;
    top: 13px;
    left: 6px;
    font-size: 36px;
}

.kieslink {
      margin-top: 12px;
      margin-bottom: 35px;

    a {
        text-decoration: none;
        font-weight: 600;

   }
}


 header {
    background-image: url(../assets/exit-bg.jpg)!important;
    h1 {
      padding: 36px 0;
      color: white;
      text-align: center;
      font-size: 33px;
      font-weight: 600;
      }
  }
  .main-exit {
      background-color: #FEFAF6;
      margin-top: -8px;
  }

  .exit-logo {

    img {
      margin-left: 710px;
      margin-top: -130px;
    }
  }


  .banner-exit p {
      padding: 10px 0px;
      background: #F44336;
      color: white;
      font-weight: 700;
      margin: 20px -3px;
      &::after {
        content: url('../assets/arrowdown.png');
        float: right;
        position: relative;
        right: 15px;
      }
      &::before {
        content: url('../assets/arrowdown.png');
        float: left;
        position: relative;
        left: 15px;
      }

  }

  .product {
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: cover;
      margin: 0 10px;
      padding: 20px;
  }
  .product {
    .label {
        font-size: 16px;
        font-weight: 600;
        width: 146px;
        height: auto;
        margin: 15px auto;
    }
    a {
        border-radius: 30px;
        border: 2px solid #8bb5eb;
        padding: 15px 30px 15px 30px;

    }
  }
.verlopern {
      background: #F44336;
      color: white;
      border-radius: 30px;

      padding: 6px;
      width: 220px;
      display: flex;
      justify-content: space-around;
      position: relative;
      left: 52px;
      bottom: 80px;
}



  footer {
     color: black;
  }
</style>
