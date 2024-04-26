// APARTADO DISNEY

document.addEventListener('DOMContentLoaded', function() {
  var cuentasDisney = [
    { DisneyGmail: 'disported@hotmail.com', DisneyPassword: 'Congruent1!' },
    { DisneyGmail: 'andycanedo59@gmail.com', DisneyPassword: 'Andynator2022!' },
    { DisneyGmail: 'jeffrey.baars@quicknet.nl', DisneyPassword: 'Jb-557600' },
    { DisneyGmail: 'salvatirraexequiel@gmail.com', DisneyPassword: 'Kapiushon23' },
    { DisneyGmail: 'natashajanesmith2407@gmail.com', DisneyPassword: 'Cherry1969' },
    { DisneyGmail: 'oksnebjerg@hotmail.com', DisneyPassword: '2750Ballerup' },
    { DisneyGmail: 'alex-sandro@bol.com.br', DisneyPassword: 'Alex7426!7' },
    { DisneyGmail: 'falchiler@gmail.com', DisneyPassword: 'River1147' },
    { DisneyGmail: 'noahk1122@gmail.com', DisneyPassword: '11Monster!!' },
    { DisneyGmail: 'koriikoree@gmail.com', DisneyPassword: 'Kingston1.' },
    { DisneyGmail: 'harriskr@live.com', DisneyPassword: 'Ackus202!' },
    { DisneyGmail: 'luiz.dragoes92@gmail.com', DisneyPassword: 'bobps157' },
    { DisneyGmail: 'hlyal116@hotmail.com', DisneyPassword: 'Twins*2008' },
    { DisneyGmail: 'mcjones115@gmail.com', DisneyPassword: 'Eclipse115!' },
    { DisneyGmail: 'msdade25@gmail.com', DisneyPassword: 'ChristiD28**' },
    { DisneyGmail: 'ben1547@hotmail.com', DisneyPassword: '11adam12' },
    { DisneyGmail: 'yeagerc4@gmail.com', DisneyPassword: 'Chanel1!' },
    { DisneyGmail: 'cortneybkellogg@gmail.com:', DisneyPassword: 'Dallas01!' },
    { DisneyGmail: 'uautore@yahoo.com', DisneyPassword: 'Sophie31$' },
    { DisneyGmail: 'joaners1@ymail.com', DisneyPassword: 'Joaners123' },
    { DisneyGmail: 'aucooph@yahoo.com', DisneyPassword: 'Metrobank674!' },
    { DisneyGmail: 'samanthareid26@gmail.com', DisneyPassword: 'Mookinz98!' },
    { DisneyGmail: 'Shawnrosebaker@gmail.com', DisneyPassword: 'Ladybug23!!' },
    { DisneyGmail: 'gillianerdmann@gmail.com', DisneyPassword: 'Mom3579764' },
    { DisneyGmail: 'chloeunrine23@hotmail.com', DisneyPassword: 'Saintl23!' },
  ];

  mostrarCuentaAleatoriaDisney(cuentasDisney);

  document.getElementById('copiar-btn-disney').addEventListener('click', function() {
    copiarInformacionDisney(cuentasDisney);
  });
});

function mostrarCuentaAleatoriaDisney(cuentasDisney) {
  var cuentaAleatoriaDisney = cuentasDisney[Math.floor(Math.random() * cuentasDisney.length)];
  document.getElementById('DisneyGmail').value = cuentaAleatoriaDisney.DisneyGmail;
  document.getElementById('DisneyPassword').value = cuentaAleatoriaDisney.DisneyPassword;

  window.cuentaDisneyActual = cuentaAleatoriaDisney;
}

function copiarInformacionDisney(cuentasDisney) {

  var cuentaAleatoriaDisney = window.cuentaDisneyActual;

  var DisneyGmail = cuentaAleatoriaDisney.DisneyGmail;
  var DisneyPassword = cuentaAleatoriaDisney.DisneyPassword;

  var informacionFormateadaDisney = `${DisneyGmail}:${DisneyPassword}`;

  var tempInput = document.createElement('textarea');
  tempInput.value = informacionFormateadaDisney;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span>
        <img src="./images/correct_icon.png" alt="Img-verification" width="100" height="100">
        <p>Información copiada correctamente</p>
        <button id="aceptarBtn">Aceptar</button>
      </span>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('aceptarBtn').addEventListener('click', function() {
    document.body.removeChild(modal);
    eliminarCookie();
    window.location.href = 'index.html';
  });
}


// EN GENERAL

// general / manejo de cookies
function eliminarCookie() {
  document.cookie = "cookie-disney=; Max-Age=0; path=/";
  document.cookie = "cookie-max=; Max-Age=0; path=/";
  document.cookie = "cookie-crunchyroll=; Max-Age=0; path=/";
  document.cookie = "cookie-steam=; Max-Age=0; path=/";
}

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname;

  if (
    (currentPage.includes('lwgendisney.html') || currentPage.includes('lwgenmax.html') || currentPage.includes('lwgencrunchyroll.html') || currentPage.includes('lwgensteam.html')) &&
    (!hasCookie('cookie-disney') && !hasCookie('cookie-max') && !hasCookie('cookie-crunchyroll') && !hasCookie('cookie-steam')) 
  ) {
    window.location.href = 'error.html';
  }
});


function hasCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return true;
    }
  }
  return false;
}

// APARTADO MAX

document.addEventListener('DOMContentLoaded', function() {
  var cuentasMax = [
    { MaxGmail: 'asimarik@gmail.com', MaxPassword: 'Asim389801', MaxIp: 'Denmark' },
    { MaxGmail: 'RobinHans_88@hotmail.com', MaxPassword: 'Xqrhuyys1', MaxIp: 'Norway' },
    { MaxGmail: 'eliska-kozakova@seznam.cz', MaxPassword: 'Duben2002', MaxIp: 'Czech Republic' },
    { MaxGmail: 'liamjylha@hotmail.com', MaxPassword: 'hockey13', MaxIp: 'Sweden' },
    { MaxGmail: 'e.s.jezierska@gmail.com', MaxPassword: 'Stefania56', MaxIp: 'Poland' },
    { MaxGmail: 'natulka.kolarova@seznam.cz', MaxPassword: 'Natalka1', MaxIp: 'Czech Republic' },
    { MaxGmail: 'niklas.neulanen@gmail.com', MaxPassword: 'turtles222', MaxIp: 'Finland' },
    { MaxGmail: 'robert@kristiansson.eu', MaxPassword: 'Munk25801300', MaxIp: 'Sweden' },
    { MaxGmail: 'emilia.puutonen@gmail.com', MaxPassword: 'hjzb57px', MaxIp: 'Finland' },
    { MaxGmail: 'kolomanskimariusz@gmail.com', MaxPassword: 'Q@zwsx123', MaxIp: 'Poland' },
    { MaxGmail: 'csaba.csukardi@gmail.com', MaxPassword: 'Csabesz76', MaxIp: 'Hungary' },
    { MaxGmail: 'merial@poczta.onet.pl', MaxPassword: '1Ashikawa', MaxIp: 'Poland' },
    { MaxGmail: 'kheylabarreto@gmail.com', MaxPassword: 'Kheyla0909', MaxIp: 'Spain' },
    { MaxGmail: 'vera.pedersen@live.no', MaxPassword: 'Arev1993', MaxIp: 'Norway' },
    { MaxGmail: 'sine_frederiksen@live.dk', MaxPassword: 's120986sb', MaxIp: 'Denmark' },
    { MaxGmail: 'monikastanisz65@gmail.com', MaxPassword: 'monika1990', MaxIp: 'Poland' },
    { MaxGmail: 'georgina.bertha@gmail.com', MaxPassword: 'R110628g', MaxIp: 'Hungary' },
    { MaxGmail: 'lenamama@seznam.cz', MaxPassword: 'Zazvorkova2002', MaxIp: 'Czech Republic' },
    { MaxGmail: 'wrestlemania25@seznam.cz', MaxPassword: 'undertakeR147', MaxIp: 'Czech Republic' },
    { MaxGmail: 'vanjaschristensen@gmail.com', MaxPassword: 'Uggen1996', MaxIp: 'Norway' },
    { MaxGmail: 'turcsikmilan@gmail.com', MaxPassword: 'Persia22', MaxIp: 'Hungary' },
    { MaxGmail: 'jaapkoomen@gmail.com', MaxPassword: 'Jakkus1974!', MaxIp: 'Netherlands' },
    { MaxGmail: 'filipnordfeldt00@hotmail.com', MaxPassword: 'Huddinge123', MaxIp: 'Sweden' },
    { MaxGmail: 'victor@jangdal.se', MaxPassword: 'Hetin112', MaxIp: 'Sweden' },
    { MaxGmail: 'c.eracska@gmail.com', MaxPassword: 'Benc01ka', MaxIp: 'Hungary' },
    { MaxGmail: 'gomez.muzas@gmail.com', MaxPassword: 'Gy78uhbV', MaxIp: 'Spain' },
    { MaxGmail: 'elenabarriorecio@gmail.com', MaxPassword: 'Diciembre80', MaxIp: 'Spain' },
    { MaxGmail: 'polo_sport70@hotmail.com', MaxPassword: 'Minuten11', MaxIp: 'Sweden' },
    { MaxGmail: 'crister@kampsten.se', MaxPassword: 'Letmein6605!', MaxIp: 'Sweden' },
    { MaxGmail: 'stian.gravdahl@hotmail.com', MaxPassword: 'S2r10nget', MaxIp: 'Norway' },
    { MaxGmail: 'terezakrumlova@seznam.cz', MaxPassword: 'Andilek1994', MaxIp: 'Czech Republic' },
    { MaxGmail: 'pelayocuervo@gmail.com', MaxPassword: 'Pedopedo123', MaxIp: 'Spain' },
    { MaxGmail: 'josefine_karlqvist@hotmail.com', MaxPassword: 'Klocka123!', MaxIp: 'Sweden' },
    { MaxGmail: 'arnold.ludanyi@gmail.com', MaxPassword: 'Dxfhr345', MaxIp: 'Hungary' },
    { MaxGmail: 'nemethginaaa@gmail.com', MaxPassword: 'Oktober13', MaxIp: 'Hungary' },
    { MaxGmail: 'oliverxx@hotmail.com', MaxPassword: 'Mym190808', MaxIp: 'Spain' },
    { MaxGmail: 'magdalenaucinska@wp.pl', MaxPassword: 'Magdalena25@', MaxIp: 'Poland' },
    { MaxGmail: 'aandreu80@hotmail.com', MaxPassword: 'Mayo1180', MaxIp: 'Spain' },
    { MaxGmail: 'han.ja@interia.pl', MaxPassword: 'Haneczka1', MaxIp: 'Poland' },
    { MaxGmail: 'koos.andrea.01.21@gmail.com', MaxPassword: '1989Vilmos', MaxIp: 'Hungary' },
    { MaxGmail: 'jelinek.jakub15@seznam.cz', MaxPassword: 'Velvary602', MaxIp: 'Czech Republic' },
    { MaxGmail: 'tontrska@gmail.com', MaxPassword: 'Manchester77', MaxIp: 'Slovakia' },
    { MaxGmail: 'marloo85@tlen.pl', MaxPassword: 'Juventus10', MaxIp: 'Poland' },
    { MaxGmail: 'sandragonzalez1918@hotmail.com', MaxPassword: 'Sandra19', MaxIp: 'Spain' },
    { MaxGmail: 'ra2603@o2.pl', MaxPassword: 'Pamperek111', MaxIp: 'Poland' },
    { MaxGmail: 'pikattyu@gmail.com', MaxPassword: 'Pistike1973', MaxIp: 'Hungary' },
    { MaxGmail: 'jirka.vecere@seznam.cz', MaxPassword: 'Barak5050', MaxIp: 'Czech Republic' },
    { MaxGmail: 'martinez2187@op.pl', MaxPassword: 'Dominik2015', MaxIp: 'Poland' },
    { MaxGmail: 'agnieszka.bruczko@gmail.com', MaxPassword: 'Qwerty123!', MaxIp: 'Poland' },
    { MaxGmail: 'nath2233@wp.pl', MaxPassword: 'Natusia9952', MaxIp: 'Poland' },
    { MaxGmail: 'jsoutinho.8@gmail.com', MaxPassword: 'SURF4life!', MaxIp: 'Portugal' },
    { MaxGmail: 'martinhalbert@hotmail.com', MaxPassword: 'Ergomand1973', MaxIp: 'Denmark' },
    { MaxGmail: 'tunio999@interia.pl', MaxPassword: 'ketjow79', MaxIp: 'Poland' },
    { MaxGmail: 'beaginka@seznam.cz', MaxPassword: 'Beaginka1221!', MaxIp: 'Czech Republic' },
    { MaxGmail: 'mette2olesen@hotmail.dk', MaxPassword: 'Vintersol17', MaxIp: 'Denmark' },
    { MaxGmail: 'cichy2563@wp.pl', MaxPassword: 'skinheads88', MaxIp: 'Poland' },
    { MaxGmail: 'nataliamerizaldesocorro@gmail.com', MaxPassword: 'Poppyteamo123', MaxIp: 'Spain' },
    { MaxGmail: 'mulledk82@gmail.com', MaxPassword: 'Minibowser82', MaxIp: 'Denmark' },
    { MaxGmail: 'nadine_micic@hotmail.com', MaxPassword: 'Duskaduskic2906', MaxIp: 'Bosnia and Herzegovina' },
    { MaxGmail: 'urszlawb@onet.pl', MaxPassword: 'Urszulab87', MaxIp: 'Poland' },
    { MaxGmail: 'jcsetenyi@gmail.com', MaxPassword: 'V4390fa2a', MaxIp: 'Hungary' },
    { MaxGmail: 'virobi71@gmail.com', MaxPassword: 'Nonednon1', MaxIp: 'Hungary' },
    { MaxGmail: 'kocsisaniko81@gmail.com', MaxPassword: 'Zoltan1979', MaxIp: 'Hungary' },
    { MaxGmail: 'mariamartinezgil6@gmail.com', MaxPassword: 'Septiembre6', MaxIp: 'Spain' },
    { MaxGmail: '2rill@lyse.net', MaxPassword: 'Seland123', MaxIp: 'Norway' },
    { MaxGmail: 'kbajzath@gmail.com', MaxPassword: 'Bajzath56', MaxIp: 'Hungary' },
    { MaxGmail: 'eemil.xdboy@gmail.com', MaxPassword: 'Kutiaako123', MaxIp: 'Finland' },
    { MaxGmail: 'kimmariusp@gmail.com', MaxPassword: 'satellite90', MaxIp: 'Norway' },
    { MaxGmail: 'hasseamundsen@gmail.com', MaxPassword: 'Gezai553', MaxIp: 'Norway' },
    { MaxGmail: 'alexanderlarsson04@icloud.com', MaxPassword: 'Fireblade2292', MaxIp: 'Sweden' },
    { MaxGmail: 'radekjeb@seznam.cz', MaxPassword: 'politika123', MaxIp: 'Czech Republic' },
    { MaxGmail: 'buan15@hotmail.com', MaxPassword: 'Hondasivik98', MaxIp: 'Norway' },
    { MaxGmail: 'chress89@hotmail.com', MaxPassword: 'Simsons51N', MaxIp: 'Hungary' },
    { MaxGmail: 'kent_nilssen@hotmail.com', MaxPassword: '30tone09', MaxIp: 'Norway' },
    { MaxGmail: 'd_ady@hotmail.com', MaxPassword: 'ady_5206frv.ady', MaxIp: 'Romania' },
    { MaxGmail: 'balazs.adrienn93@gmail.com', MaxPassword: 'Audrey.1993', MaxIp: 'Hungary' },
    { MaxGmail: 'ayubischmidt@gmail.com', MaxPassword: 'Wasabi007', MaxIp: 'Denmark' },
    { MaxGmail: 'bellabella75@o2.pl', MaxPassword: 'Lileczka05', MaxIp: 'Poland' },
    { MaxGmail: 'matheviki@gmail.com', MaxPassword: 'Buncus128', MaxIp: 'Hungary' },
    { MaxGmail: 'ocaminschi@gmail.com', MaxPassword: '123456Ok', MaxIp: 'Romania' },
    { MaxGmail: 'peterfalvi.dia@gmail.com', MaxPassword: 'D122panik', MaxIp: 'Hungary' },
    { MaxGmail: 'irekkraw@interia.pl', MaxPassword: '64staintonroad', MaxIp: 'Poland' },
    { MaxGmail: 'dawidkielbasa@gmail.com', MaxPassword: 'Lokomotywa1', MaxIp: 'Poland' },
    { MaxGmail: 'jpmota84@gmail.com', MaxPassword: 'joaomota83', MaxIp: 'Portugal' },
    { MaxGmail: 'johanlarss92@hotmail.com', MaxPassword: 'Hahade12', MaxIp: 'Sweden' },
    { MaxGmail: 'zendis@seznam.cz', MaxPassword: 'Aa147852', MaxIp: 'Czech Republic' },
    { MaxGmail: 'per.harald.gjerde@haugnett.no', MaxPassword: '498Ezakt', MaxIp: 'Norway' },
    { MaxGmail: 'benedikte.eikesdal@hotmail.com', MaxPassword: 'Benny123', MaxIp: 'Norway' },
    { MaxGmail: 'rik.achterberg@gmail.com', MaxPassword: '3Lderscrolls3', MaxIp: 'Netherlands' },
    { MaxGmail: 'Viktorboberg1@gmail.com', MaxPassword: 'Stella0171', MaxIp: 'Sweden' },
    { MaxGmail: 'ovidiu@tophumantarget.ro', MaxPassword: 'Ovidiu1972!', MaxIp: 'Romania' },
    { MaxGmail: 'umutku96@gmail.com', MaxPassword: '07Umutku96', MaxIp: 'Netherlands' },
    { MaxGmail: 'ptumulero@gmail.com', MaxPassword: 'Tumi1970!', MaxIp: 'Netherlands' },
    { MaxGmail: 'fatetu@gmail.com', MaxPassword: 'Slipknot09', MaxIp: 'Hungary' },
    { MaxGmail: 'Carolinasanchez50@Gmail.Com', MaxPassword: 'Valentina1343', MaxIp: 'Spain' },
    { MaxGmail: 'kafo29@gmail.com', MaxPassword: 'Tomas1611', MaxIp: 'Slovakia' },
    { MaxGmail: 'ramcsa83@gmail.com', MaxPassword: 'Ramcsa83', MaxIp: 'Hungary' },
    { MaxGmail: 'ruby-23@seznam.cz', MaxPassword: 'Rychlarota23', MaxIp: 'Czech Republic' },
    { MaxGmail: 'alfred.bergqvist@live.se', MaxPassword: 'Pannkaka12', MaxIp: 'Sweden' },
    { MaxGmail: 'maocarvalho@gmail.com', MaxPassword: 'Galahad_21', MaxIp: 'Portugal' },
    { MaxGmail: 'Nicopaidar92@gmail.com', MaxPassword: 'WhatsmynamexD23', MaxIp: 'Denmark' },
    { MaxGmail: 'zara_rullz@yahoo.com', MaxPassword: 'Moschino7', MaxIp: 'Romania' },
    { MaxGmail: 'olaf_tt@hotmail.com', MaxPassword: 'Janmilla4780', MaxIp: 'Norway' },
    { MaxGmail: 'noiseaux@gmail.com', MaxPassword: 'sherwood89', MaxIp: 'Czech Republic' },
    { MaxGmail: 'johan.ottoson@hotmail.com', MaxPassword: 'Fotboll123', MaxIp: 'Sweden' },
    { MaxGmail: 'jakub.mackiewicz@o2.pl', MaxPassword: 'Kuba2298.', MaxIp: 'Poland' },
    { MaxGmail: 'sz.v.gellert@gmail.com', MaxPassword: 'Garfield55', MaxIp: 'Hungary' },
    { MaxGmail: 'jacob@varberg.dk', MaxPassword: 'Pixma270306', MaxIp: 'Denmark' },
    { MaxGmail: 'natonek@gmail.com', MaxPassword: 'Tymbark40', MaxIp: 'Poland' },
    { MaxGmail: 'madarasls@yahoo.com', MaxPassword: 'Ronin1974', MaxIp: 'Denmark' },
    { MaxGmail: 'zikanka@seznam.cz', MaxPassword: 'Petulinka84', MaxIp: 'Czech Republic' },
    { MaxGmail: 'ricdiany@hotmail.com', MaxPassword: 'filip2240', MaxIp: 'Spain' },
    { MaxGmail: 'sahara74@wp.pl', MaxPassword: 'Daniel1990luna!', MaxIp: 'Poland' },
    { MaxGmail: 'morar.gabor.82@gmail.com', MaxPassword: 'Blanka0707', MaxIp: 'Hungary' },
    { MaxGmail: 'kisgallcsaba@gmail.com', MaxPassword: 'Vagyokaki12@', MaxIp: 'Romania' },
    { MaxGmail: 'gabor.tunyogi@gmail.com', MaxPassword: 'Tunyo700520', MaxIp: 'Hungary' },
    { MaxGmail: 'jose.ju@hotmail.com', MaxPassword: 'Joiopiolin69', MaxIp: 'Spain' },
    { MaxGmail: 'sjappe@yahoo.com', MaxPassword: 'Inter1908', MaxIp: 'Denmark' },
    { MaxGmail: 'v.ivanowa_@abv.bg', MaxPassword: '123Aa456', MaxIp: 'Bulgaria' },
    { MaxGmail: 'charlotte_lie@hotmail.com', MaxPassword: 'Garpmir1', MaxIp: 'Norway' },
    { MaxGmail: 'tadeusz@wadecki.waw.pl', MaxPassword: 'Sprzataczka3!', MaxIp: 'Poland' },
    { MaxGmail: 'violaelena1985@gmail.com', MaxPassword: 'Skylimit16!', MaxIp: 'Netherlands' },
    { MaxGmail: 'bakker_965@hotmail.com', MaxPassword: 'Passord123', MaxIp: 'Norway' },
    { MaxGmail: 'dorianjean.s@gmail.com', MaxPassword: 'OscarWilde!854', MaxIp: 'Romania' },
    { MaxGmail: 'enricoarmanaschi@yahoo.com', MaxPassword: 'Shasta2013', MaxIp: 'Romania' },
    { MaxGmail: 'kmurpha@gmail.com', MaxPassword: 'Sorrento4', MaxIp: 'Norway' },
    { MaxGmail: 'chelander2000@gmail.com', MaxPassword: 'Repsac00', MaxIp: 'Sweden' },
    { MaxGmail: 'fratilacatalin58@yahoo.com', MaxPassword: 'Antartica01', MaxIp: 'Romania' },
    { MaxGmail: 'Oen@ols1.no', MaxPassword: 'P0ndusen', MaxIp: 'Norway' },
    { MaxGmail: 'camila@centrum.cz', MaxPassword: 'Kamila01', MaxIp: 'Czech Republic' },
    { MaxGmail: 'ag.glowacka@gmail.com', MaxPassword: 'Jadwiga1!', MaxIp: 'Poland' },
    { MaxGmail: 'jeffrey.baars@quicknet.nl', MaxPassword: 'Jb-557600', MaxIp: 'Netherlands' },
    { MaxGmail: 'v.tosenovsky@seznam.cz', MaxPassword: 'Fenixtrans23', MaxIp: 'Czech Republic' },
    { MaxGmail: 'cati.huguet@gmail.com', MaxPassword: 'Annaelsa1', MaxIp: 'Spain' },
    { MaxGmail: 'radziej49@gmail.com', MaxPassword: 'Poldek11!', MaxIp: 'Poland' },
    { MaxGmail: 'jakob.dlinnemann@gmail.com', MaxPassword: 'jakob2609', MaxIp: 'Denmark' },
    { MaxGmail: 'jarge.lehtisalo@gmail.com', MaxPassword: '200480Jl', MaxIp: 'Finland' },
    { MaxGmail: 'ricardo-meireles@hotmail.com', MaxPassword: 'ricardobarros12', MaxIp: 'Portugal' },
    { MaxGmail: 'femkovacs49@gmail.com', MaxPassword: 'Lettike12', MaxIp: 'Hungary' },
    { MaxGmail: 'uffemikael@hotmail.com', MaxPassword: 'Zorro2014', MaxIp: 'Sweden' },
    { MaxGmail: 'yankes69@onet.eu', MaxPassword: 'Yankes69!', MaxIp: 'Poland' },
    { MaxGmail: 'anders@1027ms.dk', MaxPassword: 'William30', MaxIp: 'Denmark' },
    { MaxGmail: 'gregusinek@seznam.cz', MaxPassword: '1n0dmn6q', MaxIp: 'Czech Republic' },
    { MaxGmail: 'cristian.mihutoiu@gmail.com', MaxPassword: 'Eleonora1931@', MaxIp: 'Romania' },
    { MaxGmail: 'tomek.gebala@interia.pl', MaxPassword: 'Ania21042016', MaxIp: 'Poland' },
    { MaxGmail: 'ondcernicky@seznam.cz', MaxPassword: 'Kocourek12', MaxIp: 'Czech Republic' },
    { MaxGmail: 'filipmisutka01@gmail.com', MaxPassword: 'fenris222', MaxIp: 'Slovakia' },
    { MaxGmail: 'lpedrosohernandez@gmail.com', MaxPassword: 'Antero80', MaxIp: 'Portugal' },
    { MaxGmail: 'miriamgroenendijk84@gmail.com', MaxPassword: 'Gentiaan46', MaxIp: 'Netherlands' },
    { MaxGmail: 'bozzz@vp.pl', MaxPassword: 'Malediwy8', MaxIp: 'Poland' },
    { MaxGmail: 'A.Nelefelt@Gmail.Com', MaxPassword: 'Byxelkrok123', MaxIp: 'Sweden' },
    { MaxGmail: 'olaszymczak99@wp.pl', MaxPassword: 'aleksandra99', MaxIp: 'Poland' },
    { MaxGmail: 'd.dommershuijzen@gmail.com', MaxPassword: 'RctdavidQ100!', MaxIp: 'Netherlands' },
    { MaxGmail: 'samuelco82@gmail.com', MaxPassword: 'v54117407V', MaxIp: 'Spain' },
    { MaxGmail: 'martarodriguez25@hotmail.com', MaxPassword: 'Madalena80', MaxIp: 'Portugal' },
    { MaxGmail: 'nebojsa.vucijak@lupogroup.com', MaxPassword: 'Garfild1887.', MaxIp: 'Serbia' },
    { MaxGmail: 'sgtskal@gmail.com', MaxPassword: 'j0509067457', MaxIp: 'Denmark' },
    { MaxGmail: 'mairead65@hotmail.com', MaxPassword: 'Darlin65', MaxIp: 'Norway' },
    { MaxGmail: 'dr.kiss.zsuzsi@gmail.com', MaxPassword: 'Gabika2014', MaxIp: 'Hungary' },
  ];

  mostrarCuentaAleatoriaMax(cuentasMax);

  document.getElementById('copiar-btn-max').addEventListener('click', function() {
    copiarInformacionMax(cuentasMax);
  });
});

function mostrarCuentaAleatoriaMax(cuentasMax) {
  var cuentaAleatoriaMax = cuentasMax[Math.floor(Math.random() * cuentasMax.length)];
  document.getElementById('MaxGmail').value = cuentaAleatoriaMax.MaxGmail;
  document.getElementById('MaxPassword').value = cuentaAleatoriaMax.MaxPassword;
  document.getElementById('MaxIp').value = cuentaAleatoriaMax.MaxIp;

  window.cuentaMaxActual = cuentaAleatoriaMax;
}

function copiarInformacionMax(cuentasMax) {
  var cuentaAleatoriaMax = window.cuentaMaxActual;

  var MaxGmail = cuentaAleatoriaMax.MaxGmail;
  var MaxPassword = cuentaAleatoriaMax.MaxPassword;

  var informacionFormateadaMax = `${MaxGmail}:${MaxPassword}`;

  var tempInput = document.createElement('textarea');
  tempInput.value = informacionFormateadaMax;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span>
        <img src="./images/correct_icon.png" alt="Img-verification" width="100" height="100">
        <p>Información copiada correctamente</p>
        <button id="aceptarBtn">Aceptar</button>
      </span>
    </div>
  `;

  document.getElementById('aceptarBtn').addEventListener('click', function() {
    document.body.removeChild(modal);
    eliminarCookie();
    window.location.href = 'index.html';
  });
}


// APARTADO CRUNCHYROLL

document.addEventListener('DOMContentLoaded', function() {
  var cuentasCrunchyroll = [
    { CrunchyrollGmail: 'lancetown07@gmail.com', CrunchyrollPassword: 'Lm7671549!' },
    { CrunchyrollGmail: 'laythcroost@gmail.com', CrunchyrollPassword: 'malaya25' },
    { CrunchyrollGmail: 'lautarogomezguevara@gmail.com', CrunchyrollPassword: 'GOBLIN3107' },
    { CrunchyrollGmail: 'laynelucas27@gmail.com', CrunchyrollPassword: 'LuLuNoNo27' },
    { CrunchyrollGmail: 'laybuttmax@gmail.com', CrunchyrollPassword: 'AbyZ15??' },
    { CrunchyrollGmail: 'layne.reddick@gmail.com', CrunchyrollPassword: 'dragoons' },
    { CrunchyrollGmail: 'lashunlea@yahoo.com', CrunchyrollPassword: 'Denyse25' },
    { CrunchyrollGmail: 'krewicide@gmail.com', CrunchyrollPassword: 'Pxpjuzkc1' },
    { CrunchyrollGmail: 'landin4382@aol.com', CrunchyrollPassword: 'Rcjbella1!' },
    { CrunchyrollGmail: 'lazydogzilla@gmail.com', CrunchyrollPassword: 'L3fthand!' },
    { CrunchyrollGmail: 'lemke.lucian@gmail.com', CrunchyrollPassword: 'Dr4g0nit3!' },
    { CrunchyrollGmail: 'kunzite21@yahoo.com', CrunchyrollPassword: 'Devin@01' },
    { CrunchyrollGmail: 'lboognit@gmail.com', CrunchyrollPassword: 'feb.26lg' },
    { CrunchyrollGmail: 'lennonsys@gmail.com', CrunchyrollPassword: 'Xx110990' },
    { CrunchyrollGmail: 'leif.larson@gmail.com', CrunchyrollPassword: 'Jdio9a9471!' },
    { CrunchyrollGmail: 'leahcochrum@gmail.com', CrunchyrollPassword: 'Popocatepetl8' },
    { CrunchyrollGmail: 'leeilahanson@gmail.com', CrunchyrollPassword: 'Lillie123!' },
    { CrunchyrollGmail: 'leandrinho.jos31@gmail.com', CrunchyrollPassword: '30062019Leo.' },
    { CrunchyrollGmail: 'lenchoaguirre@gmail.com', CrunchyrollPassword: 'Longview88' },
    { CrunchyrollGmail: 'layane.m.costa@gmail.com', CrunchyrollPassword: 'Potro123' },
    { CrunchyrollGmail: 'lenderscalebl@gmail.com', CrunchyrollPassword: '96Ritzha#@' },
    { CrunchyrollGmail: 'leandrocesarinopuc@gmail.com', CrunchyrollPassword: '88417810' },
    { CrunchyrollGmail: 'leamsisa@gmail.com', CrunchyrollPassword: 'callefalsa123' },
    { CrunchyrollGmail: 'leninleon9@gmail.com', CrunchyrollPassword: '310387luna' },
    { CrunchyrollGmail: 'kshahare30@gmail.com', CrunchyrollPassword: '0666_Word' },
  ];

  mostrarCuentaAleatoriaCrunchyroll(cuentasCrunchyroll);

  document.getElementById('copiar-btn-crunchyroll').addEventListener('click', function() {
    copiarInformacionCrunchyroll(cuentasCrunchyroll);
  });
});

function mostrarCuentaAleatoriaCrunchyroll(cuentasCrunchyroll) {
  var cuentaAleatoriaCrunchyroll = cuentasCrunchyroll[Math.floor(Math.random() * cuentasCrunchyroll.length)];
  document.getElementById('CrunchyrollGmail').value = cuentaAleatoriaCrunchyroll.CrunchyrollGmail;
  document.getElementById('CrunchyrollPassword').value = cuentaAleatoriaCrunchyroll.CrunchyrollPassword;

  window.cuentaCrunchyrollActual = cuentaAleatoriaCrunchyroll;
}

function copiarInformacionCrunchyroll(cuentasCrunchyroll) {
  var cuentaAleatoriaCrunchyroll = window.cuentaCrunchyrollActual;

  var CrunchyrollGmail = cuentaAleatoriaCrunchyroll.CrunchyrollGmail;
  var CrunchyrollPassword = cuentaAleatoriaCrunchyroll.CrunchyrollPassword;

  var informacionFormateadaCrunchyroll = `${CrunchyrollGmail}:${CrunchyrollPassword}`;

  var tempInput = document.createElement('textarea');
  tempInput.value = informacionFormateadaCrunchyroll;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span>
        <img src="./images/correct_icon.png" alt="Img-verification" width="100" height="100">
        <p>Información copiada correctamente</p>
        <button id="aceptarBtn">Aceptar</button>
      </span>
    </div>
  `;
  
  document.getElementById('aceptarBtn').addEventListener('click', function() {
    document.body.removeChild(modal);
    eliminarCookie();
    window.location.href = 'index.html';
  });
}

// APARTADO DE STEAM

document.addEventListener('DOMContentLoaded', function() {
  var cuentasSteam = [
  { SteamGmail: 'OceanicBraveTurkey', SteamPassword: 'Newline54' },
  { SteamGmail: 'AblazeBarbarousHornet', SteamPassword: 'Lushmonth70' },
  { SteamGmail: 'ScaredSafeViper', SteamPassword: 'Hugewhale56' },
  { SteamGmail: 'LushGreedyCockroach', SteamPassword: 'Lushox77' },
  { SteamGmail: 'LivelyHighPheasant', SteamPassword: 'Murkyroll64' },
  { SteamGmail: 'AbundantQuaintAnteater', SteamPassword: 'Tallfang29' },
  { SteamGmail: 'HappyNoisyOyster', SteamPassword: 'Flatowl17' },
  { SteamGmail: 'LevelHallowedStingray', SteamPassword: 'Dampnorth64' },
  { SteamGmail: 'AbnormalHulkingClam', SteamPassword: 'Poordoe11' },
  { SteamGmail: 'AmazingTightfistedBadger', SteamPassword: 'Lazygoose81' },
  { SteamGmail: 'UbiquitousResponsibleDugong', SteamPassword: 'Freshkoala15' },
  { SteamGmail: 'GrotesqueZonkedGoldfish', SteamPassword: 'Sweetox80' },
  { SteamGmail: 'ToothsomeZealousPanther', SteamPassword: 'Richcamel37' },
  { SteamGmail: 'ElegantLevelMongoose', SteamPassword: 'Jazzycougar74' },
  { SteamGmail: 'ResoluteRabidBat', SteamPassword: 'Freshnight18' },
  { SteamGmail: 'StatuesquePrivateOtter', SteamPassword: 'Messymark99' },
  { SteamGmail: 'ImminentSqualidPony', SteamPassword: 'Longanimal57' },
  { SteamGmail: 'SkillfulSilentMagpie', SteamPassword: 'Messysky53' },
  { SteamGmail: 'UnsuitableBashfulMagpie', SteamPassword: 'Whitesystem23' },
  { SteamGmail: 'UnwrittenLackadaisicalFalcon', SteamPassword: 'Nicepail62' },
  { SteamGmail: 'EquableConfusedRail', SteamPassword: 'Freerice82' },
  { SteamGmail: 'InconclusiveYoungScorpion', SteamPassword: 'Smalldrum26' },
  { SteamGmail: 'ExcellentFretfulTurtle', SteamPassword: 'Coolferret51' },
  { SteamGmail: 'DelightfulStereotypedGuanaco', SteamPassword: 'Fresherror58' },
  { SteamGmail: 'NoisyWanderingJackal', SteamPassword: 'Goldkey44' },
  { SteamGmail: 'BestHystericalSquirrel', SteamPassword: 'Bravepet88' },
  { SteamGmail: 'LameWealthyPig', SteamPassword: 'Happychain46' },
  { SteamGmail: 'TellingFaintSquirrel', SteamPassword: 'Tinynest86' },
  { SteamGmail: 'DustyWetHawk', SteamPassword: 'Uglypink21' },
  { SteamGmail: 'DivergentScaredPigeon', SteamPassword: 'Shortstory12' },
  { SteamGmail: 'BerserkPanickySwan', SteamPassword: 'Firstcoral46' },
  { SteamGmail: 'FaultyPanickyMouse', SteamPassword: 'Loudbean20' },
  { SteamGmail: 'ExclusiveTellingKouprey', SteamPassword: 'Angrysmile11' },
  { SteamGmail: 'PluckyChildlikeMandrill', SteamPassword: 'Supersmoke47' },
  { SteamGmail: 'TangiblePrivateWasp', SteamPassword: 'Richstick45' },
  { SteamGmail: 'TorpidAnxiousMallard', SteamPassword: 'Goldshoe99' },
  { SteamGmail: 'NastyKaputEland', SteamPassword: 'Grayraccoon85' },
  { SteamGmail: 'NeedlessLongtermJackal', SteamPassword: 'Lazywax16' },
  { SteamGmail: 'TremendousAbaftAlligator', SteamPassword: 'Jaderoll66' },
  { SteamGmail: 'UnrulyAmbiguousNarwhal', SteamPassword: 'Wackymetal99' },
  { SteamGmail: 'MarriedAcceptableFinch', SteamPassword: 'Brownhorn90' },
  { SteamGmail: 'AnimatedSparklingLoris', SteamPassword: 'Swiftwind33' },
  { SteamGmail: 'HandsomeShallowTiger', SteamPassword: 'Jadecave62' },
  { SteamGmail: 'IgnorantDeepPorcupine', SteamPassword: 'Dampparrot33' },
  { SteamGmail: 'EarsplittingMaddeningZebra', SteamPassword: 'Ultraroom35' },
  { SteamGmail: 'LaboredOutrageousBison', SteamPassword: 'Murkyjam90' },
  { SteamGmail: 'YoungVerdantOwl', SteamPassword: 'Messybook37' },
  { SteamGmail: 'UpsetFlakyHorse', SteamPassword: 'Icyjewel63' },
  { SteamGmail: 'QuietHeavenlyArmadillo', SteamPassword: 'Shortlook86' },
  { SteamGmail: 'DirtyLimpingChough', SteamPassword: 'Oddbike54' },
  { SteamGmail: 'MoldyHandsomelyLocust', SteamPassword: 'Happyface74' },
  { SteamGmail: 'NimbleUtopianChough', SteamPassword: 'Fastfire92' },
  { SteamGmail: 'FilthySecondReindeer', SteamPassword: 'Superdime81' },
  { SteamGmail: 'UnadvisedDeeplyEmu', SteamPassword: 'Goodgopher61' },
  { SteamGmail: 'SuccessfulGoodHeron', SteamPassword: 'Firstfrog23' },
  { SteamGmail: 'ObsceneSharpOkapi', SteamPassword: 'Dizzykitten85' },
  { SteamGmail: 'LongUnequaledGoldfinch', SteamPassword: 'Braveturtle14' },
  { SteamGmail: 'AjarPerfectTurtle', SteamPassword: 'Murkygrip87' },
  { SteamGmail: 'UnrulyPermissibleAlbatross', SteamPassword: 'Freshfog10' },
  { SteamGmail: 'EndurableBeneficialAlbatross', SteamPassword: 'Happyseed57' },
  { SteamGmail: 'TastelessUndesirableDove', SteamPassword: 'Heavycorn75' },
  { SteamGmail: 'TriteAmusedKouprey', SteamPassword: 'Cutecheetah80' },
  { SteamGmail: 'UbiquitousGracefulSwallow', SteamPassword: 'Rosepaste55' },
  { SteamGmail: 'UninterestedManiacalCobra', SteamPassword: 'Weirdpie16' },
  { SteamGmail: 'GiganticApatheticMoose', SteamPassword: 'Jadebunny15' },
  { SteamGmail: 'DomineeringEmbarrassedGiraffe', SteamPassword: 'Lightclub79' },
  { SteamGmail: 'TerribleTrueMallard', SteamPassword: 'Newwarthog85' },
  { SteamGmail: 'FrightenedRedBear', SteamPassword: 'Loudart49' },
  { SteamGmail: 'SedateMundaneWoodpecker', SteamPassword: 'Murkytown24' },
  { SteamGmail: 'SaltyFestiveBison', SteamPassword: 'Noisyboo84' },
  { SteamGmail: 'GuiltlessXenophobicGoose', SteamPassword: 'Pinksoap98' },
  { SteamGmail: 'RoomySeparateAntelope', SteamPassword: 'Lightalarm97' },
  { SteamGmail: 'ProtectivePurpleFrog', SteamPassword: 'Luckyjelly46' },
  { SteamGmail: 'SelectiveEasyBee', SteamPassword: 'Smallpatch43' },
  { SteamGmail: 'EqualLyricalJellyfish', SteamPassword: 'Wildbear12' },
  { SteamGmail: 'QuestionableSoreAntelope', SteamPassword: 'Lazydugong68' },
  { SteamGmail: 'ThreateningIrritatingQuelea', SteamPassword: 'Sillywhale18' },
  { SteamGmail: 'LazySharpEchidna', SteamPassword: 'Sillyvoice93' },
  { SteamGmail: 'SilentProductiveQuelea', SteamPassword: 'Jazzylamb74' },
  { SteamGmail: 'InquisitiveWomanlyAardvark', SteamPassword: 'Loudpart89' },
  { SteamGmail: 'AgonizingHighfalutinCaribou', SteamPassword: 'Louddonkey93' },
  { SteamGmail: 'OrangeDeeplyDeer', SteamPassword: 'Oldknot36' },
  { SteamGmail: 'CrowdedHushedEland', SteamPassword: 'Loudlight70' },
  { SteamGmail: 'RuthlessUglyWasp', SteamPassword: 'Darkhorn43' },
  { SteamGmail: 'OptimalRuddyWolverine', SteamPassword: 'Fastboot67' },
  { SteamGmail: 'HabitualHumdrumLyrebird', SteamPassword: 'Coolwood63' },
  { SteamGmail: 'GracefulFourMule', SteamPassword: 'Tallgoat23' },
  { SteamGmail: 'TruthfulTastyChamois', SteamPassword: 'Lightsteam28' },
  { SteamGmail: 'PossessiveQuestionableCheetah', SteamPassword: 'Coolotter65' },
  { SteamGmail: 'MadlyGrandioseTermite', SteamPassword: 'Coolviolet23' },
  { SteamGmail: 'MeanGreasySnail', SteamPassword: 'Oliveshoe84' },
  { SteamGmail: 'MilitaryRusticArmadillo', SteamPassword: 'Badwing90' },
  { SteamGmail: 'ReminiscentAggressiveRook', SteamPassword: 'Goldwool99' },
  { SteamGmail: 'ExtralargeHistoricalGrouse', SteamPassword: 'Tallboo29' },
  { SteamGmail: 'TrueAcceptablePeafowl', SteamPassword: 'Palekite68' },
  { SteamGmail: 'ShrillBizarreCassowary', SteamPassword: 'Slimwind10' },
  { SteamGmail: 'TestyBrashFrog', SteamPassword: 'Emptysmash71' },
  { SteamGmail: 'BlushingJuvenileDonkey', SteamPassword: 'Swiftplane56' },
  { SteamGmail: 'OssifiedSilentQuetzal', SteamPassword: 'Ivorysound50' },
  { SteamGmail: 'WellmadeCeaselessGoldfinch', SteamPassword: 'Hugehand96' },
  { SteamGmail: 'LastHollowMole', SteamPassword: 'Tinyfang91' },
  { SteamGmail: 'ReminiscentLivelyYak', SteamPassword: 'Calmwheel41' },
  { SteamGmail: 'NimbleWorriedCaribou', SteamPassword: 'Shinylead38' },
  { SteamGmail: 'UnwieldyStupendousDogfish', SteamPassword: 'Slowshoe63' },
  { SteamGmail: 'GreenWholeNarwhal', SteamPassword: 'Windyfish42' },
  { SteamGmail: 'DifferentSloppyCrab', SteamPassword: 'Murkywave95' },
  { SteamGmail: 'AddictedShutTrout', SteamPassword: 'Superbone81' },
  { SteamGmail: 'MindlessStimulatingHyena', SteamPassword: 'Amberboo33' },
  { SteamGmail: 'NaughtyAlertJaguar', SteamPassword: 'Firstpaste49' },
  { SteamGmail: 'PastOffbeatDragonfly', SteamPassword: 'Mistymetal92' },
  { SteamGmail: 'FertilePoliteHare', SteamPassword: 'Bigshape99' },
  { SteamGmail: 'TacitTidyFalcon', SteamPassword: 'Keencow58' },
  { SteamGmail: 'CuriousShakySparrow', SteamPassword: 'Olivemusic13' },
  { SteamGmail: 'TruthfulSophisticatedCrow', SteamPassword: 'Lushcorn54' },
  { SteamGmail: 'EnviousCheapGoose', SteamPassword: 'Bumpypotato77' },
  { SteamGmail: 'MammothRabidSquid', SteamPassword: 'Graypump96' },
  { SteamGmail: 'LanguidSpotlessParrot', SteamPassword: 'Smallpuppy31' },
  { SteamGmail: 'TangibleLargeGoose', SteamPassword: 'Richsoap47' },
  { SteamGmail: 'SameQuickLion', SteamPassword: 'Emptycoral90' },
  { SteamGmail: 'IncandescentZanyMongoose', SteamPassword: 'Tinyalarm68' },
  { SteamGmail: 'DispensableElegantCockroach', SteamPassword: 'Lumpychalk20' },
  { SteamGmail: 'VioletGulliblePheasant', SteamPassword: 'Weirdrat66' },
  { SteamGmail: 'VerdantHissingStork', SteamPassword: 'Amberbrown90' },
  { SteamGmail: 'PastHelpfulFerret', SteamPassword: 'Bigbubble53' },
  { SteamGmail: 'RipePetiteLion', SteamPassword: 'Freshdolphin12' },
  { SteamGmail: 'SkinnyViciousCondor', SteamPassword: 'Goodfrog51' },
  { SteamGmail: 'VacuousPitifulJellyfish', SteamPassword: 'Pinkstyle15' },
  { SteamGmail: 'WindyChiefCaiman', SteamPassword: 'Warmgoat73' },
  { SteamGmail: 'AbidingShadyMoth', SteamPassword: 'Happyladybug76' },
  { SteamGmail: 'JoyousNecessaryTarsier', SteamPassword: 'Oldtheme37' },
  { SteamGmail: 'InsecureExemplaryGaur', SteamPassword: 'Lamecore66' },
  { SteamGmail: 'RealWigglyGoldfish', SteamPassword: 'Greenworld95' },
  { SteamGmail: 'AbsorbedSolidGoldfinch', SteamPassword: 'Newwind20' },
  { SteamGmail: 'HatefulWillingSquirrel', SteamPassword: 'Tinystorm45' },
  { SteamGmail: 'AcceptableVibrantTurtle', SteamPassword: 'Cooldog80' },
  { SteamGmail: 'InconclusiveHuskyArmadillo', SteamPassword: 'Slicksnake84' },
  { SteamGmail: 'PurringEminentPartridge', SteamPassword: 'Olddove47' },
  { SteamGmail: 'SatisfyingFuzzyMule', SteamPassword: 'Oldband63' },
  { SteamGmail: 'AcridPlainBarracuda', SteamPassword: 'Lazyrice82' },
  { SteamGmail: 'PowerfulKindAlbatross', SteamPassword: 'Windyjoy77' },
  { SteamGmail: 'LamentableBriskLamb', SteamPassword: 'Talllamb31' },
  { SteamGmail: 'GlamorousGrubbyAddax', SteamPassword: 'Brightpig55' },
  { SteamGmail: 'HandsomeSuperfluousCaribou', SteamPassword: 'Palepea42' },
  { SteamGmail: 'UpsetBetterHorse', SteamPassword: 'Lamefield51' },
  { SteamGmail: 'AverageWindySawfish', SteamPassword: 'Goldpoint94' },
  { SteamGmail: 'CuddlyDifferentChimpanzee', SteamPassword: 'Nicepan74' },
  { SteamGmail: 'SelfassuredPolishedHare', SteamPassword: 'Smalllion29' },
  { SteamGmail: 'AmbitiousMysteriousZebra', SteamPassword: 'Goodtable65' },
  { SteamGmail: 'DifferentWhimsicalPeacock', SteamPassword: 'Proudboat52' },
  { SteamGmail: 'DisastrousWindyArmadillo', SteamPassword: 'Freshrock90' },
  { SteamGmail: 'AccomplishedThinBarracuda', SteamPassword: 'Coolbluebird47' },
  { SteamGmail: 'EntertainingRichNumbat', SteamPassword: 'Loudwing73' },
  { SteamGmail: 'MeanAdmiredAddax', SteamPassword: 'Proudpea29' },
  { SteamGmail: 'IncompetentCalmLangur', SteamPassword: 'Lamegrain47' },
  { SteamGmail: 'MindlessDismalAnemone', SteamPassword: 'Lamebean50' },
  { SteamGmail: 'BraveHilariousVole', SteamPassword: 'Oldturtle20' },
  { SteamGmail: 'SomberFreeKiwi', SteamPassword: 'Smallbeak70' },
  { SteamGmail: 'CheerfulSpicyKangaroo', SteamPassword: 'Crazylime80' },
  { SteamGmail: 'AdventurousDiligentCod', SteamPassword: 'Greenplane77' },
  { SteamGmail: 'SleepyFabulousRaven', SteamPassword: 'Brownboat88' },
  { SteamGmail: 'DevotedFamiliarPenguin', SteamPassword: 'Lazypail91' },
  { SteamGmail: 'PhysicalKlutzyDormouse', SteamPassword: 'Bigpeanut44' },
  { SteamGmail: 'BlissfulJitteryImpala', SteamPassword: 'Bigrabbit61' },
  { SteamGmail: 'ElasticHospitableLemur', SteamPassword: 'Oldtulip67' },
  { SteamGmail: 'TangibleRichDog', SteamPassword: 'Lazyplant35' },
  { SteamGmail: 'LeanObedientMallard', SteamPassword: 'Coolwing93' },
  { SteamGmail: 'BlushingDeliriousCobra', SteamPassword: 'Oldpen56' },
  { SteamGmail: 'SeriousFluffySeahorse', SteamPassword: 'Loudjam31' },
  { SteamGmail: 'GoodVagueSwan', SteamPassword: 'Calmclub93' },
  { SteamGmail: 'ReflectiveAmbitiousGaur', SteamPassword: 'Neatshadow99' },
  { SteamGmail: 'WholeGrossBadger', SteamPassword: 'Calmstripe41' },
  { SteamGmail: 'RealisticLightPigeon', SteamPassword: 'Neatstream76' },
  { SteamGmail: 'SillyBrightLadybug', SteamPassword: 'Neatmeat95' },
  { SteamGmail: 'InvincibleNondescriptOcelot', SteamPassword: 'Neatjam81' },
  { SteamGmail: 'WarmGrubbyBee', SteamPassword: 'Neatpan80' },
  { SteamGmail: 'SharpDistinctHawk', SteamPassword: 'Neatbat10' },
  { SteamGmail: 'UsefulInconsequentialPheasant', SteamPassword: 'Neatroll17' },
  { SteamGmail: 'ConsciousDifferentClam', SteamPassword: 'Neatsky74' },
  { SteamGmail: 'SelfreliantInexperiencedArmadillo', SteamPassword: 'Neatnight58' },
  { SteamGmail: 'IrritableIndustriousGrasshopper', SteamPassword: 'Neatparrot33' },
  { SteamGmail: 'ReliableWealthyVulture', SteamPassword: 'Neatdolphin99' },
  { SteamGmail: 'CloudyDullCrab', SteamPassword: 'Neatwave52' },
  { SteamGmail: 'ElasticShoddyPuppy', SteamPassword: 'Neatdrum99' },
  { SteamGmail: 'EncouragingLonelyNarwhal', SteamPassword: 'Neatshoe18' },
  { SteamGmail: 'LeftCourageousCrane', SteamPassword: 'Neatstick26' },
  ];

  mostrarCuentaAleatoriaSteam(cuentasSteam);

  document.getElementById('copiar-btn-steam').addEventListener('click', function() {
    copiarInformacionSteam(cuentasSteam);
  });
});

function mostrarCuentaAleatoriaSteam(cuentasSteam) {
  var cuentaAleatoriaSteam = cuentasSteam[Math.floor(Math.random() * cuentasSteam.length)];
  document.getElementById('SteamGmail').value = cuentaAleatoriaSteam.SteamGmail;
  document.getElementById('SteamPassword').value = cuentaAleatoriaSteam.SteamPassword;

  window.cuentaSteamActual = cuentaAleatoriaSteam;
}

function copiarInformacionSteam(cuentasSteam) {
  var cuentaAleatoriaSteam = window.cuentaSteamActual;

  var SteamGmail = cuentaAleatoriaSteam.SteamGmail;
  var SteamPassword = cuentaAleatoriaSteam.SteamPassword;

  var informacionFormateadaSteam = `${SteamGmail}:${SteamPassword}`;

  var tempInput = document.createElement('textarea');
  tempInput.value = informacionFormateadaSteam;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span>
        <img src="./images/correct_icon.png" alt="Img-verification" width="100" height="100">
        <p>Información copiada correctamente</p>
        <button id="aceptarBtn">Aceptar</button>
      </span>
    </div>
  `;
  
  document.getElementById('aceptarBtn').addEventListener('click', function() {
    document.body.removeChild(modal);
    eliminarCookie();
    window.location.href = 'index.html';
  });
}