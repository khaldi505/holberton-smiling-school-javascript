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
        }
        $(".carousel-item:first-child").addClass("active")
        $(".loader").remove();
      });



      $.ajax( 
        {type: "GET", url: "https://smileschool-api.hbtn.info/popular-tutorials",
        dataType: 'json',
        data: {
          action: "query",
          list: "search",
          format: "json"
          }}).done(function(result){

          });
    

          