"use strict";$(function(){$(".b-interior, .b-company__bottom, .b-quality, .b-technology").hover(function(){return $(".b-logo--about").css({background:"#fff","-webkit-text-fill-color":"transparent"})},function(){return $(".b-logo--about").css({background:"","-webkit-text-fill-color":""})})}),function(){var o=$(".b-news__nav");$(".b-news__button").each(function(t,n){$(n).on("click",function(){$(".b-news__button").each(function(t,n){$(n).removeClass("active")}),$(this).addClass("active");var t=$(this).attr("data-index");o.attr("data-index",t)})})}();