$(function () {
    const $bg = $(".x-ab-bg");
    const $icn = $("<ul></ul>").addClass("x-ab-bg-icns").appendTo($bg);
  
    const common = {
      position: "absolute",
      display: "block",
      "list-style": "none",
      bottom: "-150px",
    };
    const props = [
      {
        left: "25%",
        width: "80px",
        height: "80px",
        "animation-delay": "0s",
      },
      {
        left: "10%",
        width: "35px",
        height: "35px",
        "animation-delay": "2s",
        "animation-duration": "12s",
      },
      {
        left: "70%",
        width: "35px",
        height: "35px",
        "animation-delay": "4s",
      },
      {
        left: "40%",
        width: "60px",
        height: "60px",
        "animation-delay": "0s",
        "animation-duration": "18s",
      },
      {
        left: "65%",
        width: "35px",
        height: "35px",
        "animation-delay": "0s",
      },
      {
        left: "75%",
        width: "110px",
        height: "110px",
        "animation-delay": "3s",
      },
      {
        left: "35%",
        width: "150px",
        height: "150px",
        "animation-delay": "7s",
      },
      {
        left: "50%",
        width: "25px",
        height: "25px",
        "animation-delay": "15s",
        "animation-duration": "45s",
      },
      {
        left: "20%",
        width: "30px",
        height: "30px",
        "animation-delay": "2s",
        "animation-duration": "35s",
      },
      {
        left: "85%",
        width: "150px",
        height: "150px",
        "animation-delay": "0s",
        "animation-duration": "11s",
      },
    ];
  
    // Add initial css stylings
    $(document).ready(function(){
      $bg.css({
        position: "absolute",
        "z-index": -10_000,
        background: "-webkit-linear-gradient(43deg, #eea2ad, #B76E79)",
        width: "100%",
        height: $bg.parent().height(),
      });
    });
  
    $icn.css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
    });
  
    // Add icons
    for (const prop of props) {
      const $el = $("<li></li>").css(common).css(prop);
      $icn.append($el);
    }

    // Resize when dom is ready
    $(document).ready(function(){
      $bg.css({ height: $bg.parent().height() - 25 });
    });

    // event listener to adjust height when window is adjusted
    $(window).resize(function(){
        $bg.css({ height: $bg.parent().height() - 25 });
    });
  });