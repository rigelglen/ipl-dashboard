   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/Ipl2017-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });



$(document).on("click", ".headerItem", function(e){
	e.preventDefault();
	$("#newsFeed").empty();
		if($(this).attr("data-id")=="Delhi"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/DelhiDaredevils-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }


	   	if($(this).attr("data-id")=="Gujarat"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/GujaratLions-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }

	   if($(this).attr("data-id")=="Punjab"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/KingsXiPunjab-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }

	   if($(this).attr("data-id")=="Kolkata"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/KolkataKnightRiders-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }

	   if($(this).attr("data-id")=="Mumbai"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/MumbaiIndians-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }

	   if($(this).attr("data-id")=="Pune"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/RisingPuneSupergiants-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }

	   if($(this).attr("data-id")=="Bangalore"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/RoyalChallengersBangalore-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }

	   if($(this).attr("data-id")=="Hydrabad"){	
	   jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/SunrisersHydrabad-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
	   }
});

$(document).on("click", "#mainLink", function(e){
	$("#newsFeed").empty();
	e.preventDefault();
	jQuery(function($) {
      $("#newsFeed").rss("http://feeds.feedburner.com/Ipl2017-GoogleNews?fmt=rss",
      {
        entryTemplate:'<li class="cf"><a href="{url}">{title}</a><br/>{teaserImage}<br>{bodyPlain}</li>',
        limit: 20
      })
    });
});

$("a").attr("target", "_blank");
