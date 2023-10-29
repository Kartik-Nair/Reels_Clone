// Like Button Click Handler
// $(document).ready(function() {
//     $(".like-button").click(function() {
//         var videoId = $(this).data("video");
//         $.post("/like/" + videoId, function(data) {
//             // if (data === "Liked") {
//             //     // Update the like count on the page
//             //     var currentLikes = parseInt($("#like-count").text());
//             //     $("#like-count").text((currentLikes + 1) + " likes");
//             // } else {
//             //     // Handle error
//             //     console.log("Error while liking the video.");
//             // }
//             if(data>=0){
//                 // $("#like-count").text((data) + " likes");
//                 // $(this).nextAll(".like-count").first().text((data) + " likes");
//                 $(".like-count").text((data) + " likes");
//             } else {
//                     // Handle error
//                     console.log("Error while liking the video.");
//             }
//         });
//     });
// });



// Comment Form Submission
// $(".comment-form").submit(function(e) {
//     e.preventDefault();
//     var videoId = $(this).data("video");
//     var text = $(this).find("input[name='text']").val();
//     $.post("/comment/" + videoId, { text: text }, function(data) {
//         // Append the new comment to the comments list
//         $(".comments ul").append("<li>" + data.text + "</li>");
//         // Clear the comment input field
//         $(e.target).find("input[name='text']").val("");
//     });
// });


$(document).ready(function() {
    // console.log("Inside JavaScript function")
    // document.write("Inside JavaScript function");
    $(".like-button").click(function() {
        // document.write("Inside like JavaScript function");
        var videoId = $(this).data("video");
        // var likeCount = likeButton.siblings(".like-count");
        // document.write("Inside like JavaScript function");
        // document.write(likeCount)
        $.post("/like/" + videoId, function(data) {
            console.log(data)
            if (data >=0) {
                // Update the like count for this specific video
                // var currentLikes = parseInt($(this).nextAll(".like-count").first().text());
                // $(this).nextAll(".like-count").first().text((currentLikes + 1) + " likes");
                // var currentLikes = parseInt(likeCount.text().split(' ')[0]);
                // document.write(currentLikes)
                // likeCount.text((currentLikes + 1) + " likes");
                // document.write(data)
                $(".like-count").text((data) + " likes");
            } else {
                // Handle error
                console.log("Error while liking the video.");
            }
        });
    });

    // $(".comment-form").submit(function(e) {
    //     e.preventDefault(); // Prevent the default form submission.
    //     var videoId = $(this).data("video");
    //     var commentText = $(this).find("input[name='text']").val();
    //     // Handle the comment submission logic here.
    //     $.post("/comment/" + videoId, { text: text }, function(data) {
    //         // Append the new comment to the comments list
    //         $(".comments ul").append("<li>" + data.text + "</li>");
    //         // Clear the comment input field
    //         $(e.target).find("input[name='text']").val("");
    // });
    // });

    $(".comment-form").submit(function(e) {
    e.preventDefault();
    var videoId = $(this).data("video");
    var text = $(this).find("input[name='text']").val();
    $.post("/comment/" + videoId, { text: text }, function(data) {
        // Append the new comment to the comments list
        $(".comments ul").append("<li>" + data.text + "</li>");
        // Clear the comment input field
        $(e.target).find("input[name='text']").val("");
    });
    });
});