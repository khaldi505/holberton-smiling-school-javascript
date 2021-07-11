$(document).ready(function() {
$.ajax( 
  {type: "GET", url: "https://smileschool-api.hbtn.info/quotes",
  dataType: 'json',
  data: {
    action: "query",
    list: "search",
    format: "json"
    }}).done(function(result){
      let loader = document.createElement("div");
      $(loader).addClass("loader");
      for(let i = 0, l = result.length; i < l; i++) {
      $(".my-caro").append(loader);
      carousel_item = document.createElement("div")
      $(carousel_item).addClass("carousel-item text-center p-4")
      $(".my-caro").append(carousel_item);
      let carouselRow = document.createElement("div")
      $(carouselRow).addClass("row justify-content-center m-lg-5")
      $(carousel_item).append(carouselRow);
      img = document.createElement("img");
      $(img).attr("data-src", "0.js/900x500/auto/#777:#555/text:First slide")
      $(img).attr("src", result[i].pic_url)
      $(img).attr("width", "148px")
      $(img).attr("height", "148px")
      $(img).addClass("rounded-circle col-XX-3")
      $(carouselRow).append(img);
      $(carouselRow).append(`<p class="col-XX-9" >${result[i].text}<br><br><span class="h5">${result[i].name}</span><br><em>${result[i].title}</em></p>`)
      // <div class="card card-style col-md-3 col-sm-6 col-xs-12 border-0" style="width: 18rem;">
      }
      $(".carousel-item:first-child").addClass("active")
      $(".f-loader").remove();
    });

// popular tuto script
    $.ajax( 
      {type: "GET", url: "https://smileschool-api.hbtn.info/popular-tutorials",
      dataType: 'json',
      data: {
        action: "query",
        list: "search",
        format: "json"
        }}).done(function(result){
          function star(stars, author){

            span = document.createElement("span")
                $(span).addClass("col-md-12")
                for (let starDone = 0; starDone < stars; starDone++){
                  $(span).append(`<img src="images/star_on.png" alt="star_off" clas="col-1">`)
                }

                for (let totalStars = 5; totalStars > stars ; totalStars--) { 
                $(span).append(`<img src="images/star_off.png" alt="star_off" clas="col-1">`)
              }
                return span;
          }
          
        for(let i = 0, l = result.length; i < l; i++) {
          card_author = result[i].title.split(" ")
          card_author = card_author[0]
          card = $(`
          <div class="card card-style col-md-3 col-sm-6 col-xs-12 border-0" style="width: 18rem;">
                      <span><img class="card-img-top" src=${result[i].thumb_url} alt="Card image cap"><img src="images/play.png" class="play-icon" alt="play"></span>
                    <div class="card-body ${card_author}">
                      <h5 class="card-title"><b>${result[i].title}</b></h5>
                      <p class="card-text text-secondary">${result[i]['sub-title']}</p>
                      <div class="row">
                        <img src=${result[i].author_pic_url} alt="" class="rounded-circle col-3" width=35px height="35px">
                        <h6 class="purple pt-2">${result[i].author}</h6>
                      </div>
                    </div>
                  </div>`)
                  
          stars = $(star(result[i].star, card_author));
          card.append(stars);
          card.append(`<p class="ml-auto" style="color: #C271FF;">${result[i].duration}</p>`)
              if (result[i].id <= 4){$(card).appendTo(".f-row")}
              else if (result[i].id >= 5 && result[i].id <= 8){$(card).appendTo(".s-row")}
              
              $(".s-loader").remove();
 
          
               
          }
             
          });
          // latest section script
          $.ajax( 
            {type: "GET", url: "https://smileschool-api.hbtn.info/latest-videos",
            dataType: 'json',
            data: {
              action: "query",
              list: "search",
              format: "json"
              }}).done(function(result){
                function star(stars, author){
      
                  span = document.createElement("span")
                      $(span).addClass("col-md-12")
                      for (let starDone = 0; starDone < stars; starDone++){
                        $(span).append(`<img src="images/star_on.png" alt="star_off" clas="col-1">`)
                      }
      
                      for (let totalStars = 5; totalStars > stars ; totalStars--) { 
                      $(span).append(`<img src="images/star_off.png" alt="star_off" clas="col-1">`)
                    }
                      return span;
                }
                
              for(let i = 0, l = result.length; i < l; i++) {
                card_author = result[i].title.split(" ")
                card_author = card_author[0]
                card = $(`
                <div class="card card-style col-md-3 col-sm-6 col-xs-12 border-0" style="width: 18rem;">
                            <span><img class="card-img-top" src=${result[i].thumb_url} alt="Card image cap"><img src="images/play.png" class="play-icon" alt="play"></span>
                          <div class="card-body ${card_author}">
                            <h5 class="card-title"><b>${result[i].title}</b></h5>
                            <p class="card-text text-secondary">${result[i]['sub-title']}</p>
                            <div class="row">
                              <img src=${result[i].author_pic_url} alt="" class="rounded-circle col-3" width=35px height="35px">
                              <h6 class="purple pt-2">${result[i].author}</h6>
                            </div>
                          </div>
                        </div>`)
                        
                stars = $(star(result[i].star, card_author));
                card.append(stars);
                card.append(`<p class="ml-auto" style="color: #C271FF;">${result[i].duration}</p>`)
                    if (result[i].id <= 4){$(card).appendTo(".fs-row")}
                    else if (result[i].id >= 5 && result[i].id <= 8){$(card).appendTo(".ss-row")}
                    
                    $(".t-loader").remove();
       
                
                     
                }
                   
                });
        })