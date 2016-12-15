var NewskittenDomains = [

    // South African news sites
    "news24.com", "www.news24.com",
    "iol.co.za", "www.iol.co.za",
    "mg.co.za", "www.mg.co.za",
    "thenewage.co.za", "www.thenewage.co.za",
    "sowetanlive.co.za", "www.sowetanlive.co.za",

    // Sourced from Mediagazer
    "edition.cnn.com", "nytimes.com", "www.nytimes.com", "politico.com", "www.politico.com", "washingtonpost.com", "www.washingtonpost.com", "theguardian.com", "www.theguardian.com", "buzzfeed.com", "www.buzzfeed.com", "businessinsider.com", "www.businessinsider.com", "variety.com", "www.variety.com", "theverge.com", "www.theverge.com", "hollywoodreporter.com", "www.hollywoodreporter.com", "huffingtonpost.com", "www.huffingtonpost.com", "reuters.com", "www.reuters.com", "wsj.com", "www.wsj.com", "npr.org", "www.npr.org", "money.cnn.com", "money.cnn.com", "fortune.com", "www.fortune.com", "pressgazette.co.uk", "www.pressgazette.co.uk", "vanityfair.com", "www.vanityfair.com", "nypost.com", "www.nypost.com", "forbes.com", "www.forbes.com", "newstatesman.com", "www.newstatesman.com",  "thedailybeast.com", "www.thedailybeast.com", "thewrap.com", "www.thewrap.com", "hosted.ap.org", "hosted.ap.org", "thehill.com", "www.thehill.com", "usatoday.com", "www.usatoday.com", "theintercept.com", "www.theintercept.com", "cnbc.com", "www.cnbc.com", "thedrum.com", "www.thedrum.com", "wwd.com", "www.wwd.com", "gizmodo.com", "www.gizmodo.com", "newyorker.com", "www.newyorker.com", "currentaffairs.org", "www.currentaffairs.org", "themoscowtimes.com", "www.themoscowtimes.com", "independent.co.uk", "www.independent.co.uk", "time.com", "www.time.com", "nbcnews.com", "www.nbcnews.com", "salon.com", "www.salon.com", "mediapost.com", "www.mediapost.com", "slate.com", "motherboard.vice.com", "dailydot.com", "www.dailydot.com", "vox.com", "www.vox.com", "adage.com", "www.adage.com", "cnn.com", "www.cnn.com", "washingtonian.com", "www.washingtonian.com", "irishtimes.com", "www.irishtimes.com", "mashable.com", "www.mashable.com", "latimes.com", "www.latimes.com",

];

if (NewskittenDomains.indexOf(window.location.host) != -1)
{
    // Build the JS
    document.head.innerHTML = '<title>^.=.^</title><link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"><style type="text/css">body { background: #66CEFF; font-family: \'Indie Flower\', cursive; } .msg { width: 500px; margin: 150px auto 10px auto; font-size: 1.7em; color: #fff; text-align: center; } .gif { text-align: center; }</style>'
    document.body.innerHTML = '<div class="msg">This is a news website. Whatever\'s on here is most likely bad for you. Have a relaxing kitten instead, take a breath, and carry on.</div><div class="gif"><img src="'+chrome.extension.getURL("calm.gif")+'"></div>';
}

