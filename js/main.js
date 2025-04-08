function getQueryParams(qs) {
  qs = qs.split("+").join(" ");
  var params = {}, tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function checkCookie() {
  var query = getQueryParams(document.location.search);
  var clientCookie = readCookie("client");
  var landpCookie = readCookie("landp");
  
  // alert(query.client);
  // alert(clientCookie);
  // alert(query.landp);
  // alert(landpCookie);

  // If query.client is 'default' and clientCookie is something...
  if (query.client == 'default' && clientCookie) {
    eraseCookie("client");
    // alert("eraseCookie client");
  };
  
  // If query.client is nothing and clientCookie is something...
  if (!query.client && clientCookie) {
    query.client = clientCookie;
    // alert("query.client = clientCookie");
  };
  
  // If query.client is something, clientCookie is nothing and query.client isn't 'default'...
  if (query.client && !clientCookie && query.client != 'default') {
    createCookie("client", query.client, 7);
    // alert("createCookie client");
  };
  
  // If query.client is something, clientCookie is something, they aren't the same and query.client isn't 'default'...
  if (query.client && clientCookie && query.client != clientCookie && query.client != 'default') {
    eraseCookie("client");
    createCookie("client", query.client, 7);
    // alert("eraseCookie client and createCookie client");
  };

  $('.clients').hide();

  // If query.client is 'default' and landpCookie is something...
  if (query.client == 'default' && landpCookie) {
    eraseCookie("landp");
    landpCookie = false;
    // alert("eraseCookie landp");
  };

  // If query.landp is 'true' and landp is not set...
  if (query.landp == 'true' && !landpCookie) {
    createCookie("landp", "true", 7);
    // alert("createCookie landp");
  };

  // If query.landp is 'true' and landpCookie is something...
  if (query.landp == 'true' || landpCookie) {
    $('.clients').show();
    // alert("show clients");
  };

  $('.payroll').hide();

  $('.ascot_lloyd').parent().hide();
  $('.berkeley_burke').parent().hide();
  $('.corpad').parent().hide();
  $('.croda').parent().hide();
  $('.friends_first').parent().hide();
  $('.irish_cement').parent().hide();
  $('.jmmb').parent().hide();
  $('.kleinwort_benson').parent().hide();
  $('.lp').parent().hide();
  $('.intertrust').parent().hide();
  $('.sovereign').parent().hide();
  $('.source').parent().hide();
  $('.ucc').parent().hide();
  $('.vhi').parent().hide();
  $('.pensions_management').parent().hide();
  $('.crown_agents_bank').parent().hide();

  if (typeof query.client != 'undefined') {
    if (query.client == 'ascot_lloyd' || query.client == 'berkeley_burke' || query.client == 'corpad' || query.client == 'crown_agents_bank') {
      $('.payroll').show();
    }

    if (query.client == 'ascot_lloyd' || query.client == 'all') {
      $('.ascot_lloyd').parent().show();
    }

    if (query.client == 'berkeley_burke' || query.client == 'all') {
      $('.berkeley_burke').parent().show();
    }

    if (query.client == 'corpad' || query.client == 'all') {
      $('.corpad').parent().show();
    }

    if (query.client == 'croda' || query.client == 'all') {
      $('.croda').parent().show();
    }

    if (query.client == 'friends_first' || query.client == 'all') {
      $('.friends_first').parent().show();
    }

    if (query.client == 'irish_cement' || query.client == 'all') {
      $('.irish_cement').parent().show();
    }

    if (query.client == 'jmmb' || query.client == 'all') {
      $('.jmmb').parent().show();
    }

    if (query.client == 'kleinwort_benson' || query.client == 'all') {
      $('.kleinwort_benson').parent().show();
    }

    if (query.client == 'lp' || query.client == 'all') {
      $('.lp').parent().show();
    }

    if (query.client == 'intertrust' || query.client == 'all') {
      $('.intertrust').parent().show();
    }

    if (query.client == 'sovereign' || query.client == 'all') {
      $('.sovereign').parent().show();
    }

    if (query.client == 'source' || query.client == 'all') {
      $('.source').parent().show();
    }

    if (query.client == 'ascot_lloyd' || query.client == 'all') {
      $('.ascot_lloyd').parent().show();
    }

    if (query.client == 'ucc' || query.client == 'all') {
      $('.ucc').parent().show();
    }

    if (query.client == 'vhi' || query.client == 'all') {
      $('.vhi').parent().show();
    }

    if (query.client == 'pensions_management' || query.client == 'all') {
      $('.pensions_management').parent().show();
    }

    if (query.client == 'crown_agents_bank' || query.client == 'all') {
      $('.crown_agents_bank').parent().show();
    }
  }
}