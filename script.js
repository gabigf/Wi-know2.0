const $categoryCards = $('.category-card');
const $homePage = $('.home');
const $cover = $('.cover-loader');
const $innerCard = $('.inner-card');
const $leftBtn = $('button.left');
const $rightBtn = $('button.right');
const $cardIcon = $('.icon');
const $iconContainer = $('.category-icon-container');
const $cardPage = $('.card');
const $question = $('#question');
const $answer = $('#answer');
const $outerCard = $('.outer-card');

// Counter to keep track of which card is being displayed
let currentIndex = 0;



const cards = {
  alsace : [
    {
      question: `What would best describe Alsace's growing conditions?`,
      answer: `Varied soil types, dry, and sunny.`
    },
  
    {
      question: `What is a late harvest wine of Alsace called?`,
      answer: `Vendange Tardive`
    },
  
    {
      question: `What is 'Selection de Grains Nobles'?`,
      answer: `A late harvest, botrytized, sweet wine.`
    },
  
    {
      question: `What percentage of the Alsace wine produced is red?`,
      answer: `0-15`
    }
  ],
  bordeaux : [
    {
      question: `Name France's classic appellations for late harvest/ botrytis-affected wines in Bordeaux.`,
      answer: `Sauternes`
    },
  
    {
      question: `What does 'Gentil' mean?`,
      answer: `A blended wine including a minimum of 50% noble grapes. Superior designation for blends.`
    },
  
    {
      question: `What is in a typical Médoc blend?`,
      answer: `10%-20% Cabernet Franc, 25%-40% Merlot, 60%-80% Cabernet Sauvignon`
    },
  
    {
      question: `What are the 3 different quality levels of Bordeaux wine?`,
      answer: `Bordeaux, Region, Region + Chateau`
    },
  
    {
      question: `What are the 4 red wine regions that stand out in Bordeaux?`,
      answer: `Médoc, Graves/Pessac-Léognan, Pomerol, St-Émilion`
    }
  ],
  champagne : [
    {
      question: `Which 3 grapes can winemakers use to produce Champagne`,
      answer: `Chardonnay, Pinot Meunier, Pinot Noir`
    },
  
     {
      question: `Name 3 main areas of Champagne`,
      answer: `Marne Valley, Côte des Blancs, Reims Mountain`
    },
  
     {
      question: `Define dosage`,
      answer: `A mixture of wine and sugar that replaces the wine lost during disgorging.`
    },
  
    {
      question: `What are the age times for non vintage champagnes`,
      answer: `At least 15 months after bottling`
    },
  
    {
      question: `What are the age times for vintage champagnes`,
      answer: `At least 3 years after bottling`
    }
  ],
  italy : [
    {
      question: `What is Piedmonts most planted white grape?`,
      answer: `Moscato Bianco - generally for the production of sparkling wines DOCG Astivia Charmat method `
    },
  
    {
      question: `What is Italy's most important river in Piedmont?`,
      answer: `Po River`
    },
  
    {
      question: `Name a sparkling red wine form Piedmont (DOCG)`,
      answer: `Brachetto d'Acqui`
    },
  
    {
      question: `Name a DOCG wine made by metodo classico and the only true rival to the style of Champagne in Italy`,
      answer: `Franciacorta DOCG - chardonnay, pinot nero and a max of 50% pinot bianco are permitted`
    },
  
    {
      question: `Name all Italian wine classifications`,
      answer: `DOCG, DOC, DOP, IGT, Vino`
    }
  ],
  loire : [
    {
      question: `Name the major sub-regions of the Loire Valley`,
      answer: `Pays Nantars, Anjou-Saumur, Touraine, Central vineyards`
    },
  
     {
      question: `Define Pouilly-Fumé`,
      answer: `Pouilly-Fumé is 100% sauvignon blanc from the Loire Valley`
    },
  
     {
      question: `Define Pouilly-Fuissé`,
      answer: `Pouilly-Fuissé is 100% chardonnay from Mâconnais region in Burgundy`
    }
  ]
}


const alsaceInfo = cards.alsace[currentIndex];
const bordeauxInfo = cards.bordeaux[currentIndex];
const italyInfo = cards.italy[currentIndex];
const champagneInfo = cards.champagne[currentIndex];
const loireInfo = cards.loire[currentIndex];

const setCardIndexDisplay = (totalCards) => {
  $('h4').html(`${currentIndex + 1} | ${totalCards}`);
}  
  
// Card flip animation with click eventListener
$('.inner-card').on('click', function() {
  $(this).toggleClass('flip');
});



const setCardDisplay = region => {
  $cardIcon.attr('src', `images/${region}-icon-white.svg`);
  $iconContainer.addClass(`${region}-bg`);
  $('.front-content, .back-content').addClass(`${region}-title`);
  setQandA(region);
}

const setQandA = region => {
  if(region === 'bordeaux') {
    const totalCards = cards.bordeaux.length;
    setCardIndexDisplay(totalCards);
    $question.html(bordeauxInfo.question);
    $answer.html(bordeauxInfo.answer);
  } else if(region === 'champagne') {
    const totalCards = cards.champagne.length;
    setCardIndexDisplay(totalCards);
    $question.html(champagneInfo.question);
    $answer.html(champagneInfo.answer);
  } else if(region === 'italy') {
    const totalCards = cards.italy.length;
    setCardIndexDisplay(totalCards);
    $question.html(italyInfo.question);
    $answer.html(italyInfo.answer);
  } else if(region === 'alsace') {
    const totalCards = cards.alsace.length;
    setCardIndexDisplay(totalCards);
    $question.html(alsaceInfo.question);
    $answer.html(alsaceInfo.answer);
  } else if(region === 'loire') {
    const totalCards = cards.loire.length;
    setCardIndexDisplay(totalCards);
    $question.html(loireInfo.question);
    $answer.html(loireInfo.answer)
  }
}
  



$categoryCards.click(function() {
  $homePage.hide();
  $cardPage.show();
  
  if($(this).hasClass('bordeaux')) {
    setCardDisplay('bordeaux');
  } else if($(this).hasClass('champagne')) {
    setCardDisplay('champagne');
  }else if($(this).hasClass('italy')) {
    setCardDisplay('italy');
  } else if($(this).hasClass('alsace')) {
    setCardDisplay('alsace');
    $cardIcon.css('transform', 'translateX(-12px)');
  } else if($(this).hasClass('loire')) {
    setCardDisplay('loire');
    const totalCards = cards.loire.length;
    setCardIndexDisplay(totalCards);
  }
});


$rightBtn.on('click', function() {
  currentIndex++;
  if(currentIndex === totalCards) {
    currentIndex = 0;
  }
  if($('.inner-card').hasClass('flip')) {
    $('.inner-card').toggleClass('flip');
  }
});