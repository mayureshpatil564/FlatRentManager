﻿var currentPage = 0;
window.onload = function () {
    moveScreenToRight();
}
function moveScreenToLeft() {
    if ($("#indexPage" + (currentPage - 1)).length) {
        currentPage--;
        $("#indexPageHeader").html($("#indexPage" + currentPage).html());
        footerPagination();
    }
}
function moveScreenToRight() {
    if ($("#indexPage" + (currentPage + 1)).length) {
        currentPage++;
        $("#indexPageHeader").html($("#indexPage" + currentPage).html());
        footerPagination();
    }
}
function footerPagination() {
    if ($("#indexPage" + (currentPage + 1)).length) {
        $("#imageRight").attr("src", "Images/footer/Right_On.png");
    } else {
        $("#imageRight").attr("src", "Images/footer/Right_Off.png");
    }

    if ($("#indexPage" + (currentPage - 1)).length) {
        $("#imageLeft").attr("src", "Images/footer/Left_On.png");
    } else {
        $("#imageLeft").attr("src", "Images/footer/Left_Off.png");
    }
}