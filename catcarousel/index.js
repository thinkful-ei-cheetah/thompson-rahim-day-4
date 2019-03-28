function main() {
  $(".thumbnails").on("click", function(event) {
    $(".hero")
      .children()
      .attr("src", event.target.src)
      .attr("alt", event.target.alt);
  });

  $(".thumbnails").keydown(function(event) {
    console.log(event);
    if (event.which === 13) {
      $(".hero")
        .children()
        .attr("src", event.target.firstChild.src)
        .attr("alt", event.target.firstChild.alt);
    }
  });

//   $(".thumbnails").on("click" || "keydown", function(event) {
//     if (event.type === "keydown") {
//       console.log(event);
//       if (event.which === 13) {
//         $(".hero")
//           .children()
//           .attr("src", event.target.firstChild.src)
//           .attr("alt", event.target.firstChild.alt);
//       }
//     } else if (event.type === "click") {
//       $(".hero")
//         .children()
//         .attr("src", event.target.src)
//         .attr("alt", event.target.alt);
//     }
//   });
// }

$(main);
