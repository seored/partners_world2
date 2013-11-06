function theRotator() {
	// Устанавливаем прозрачность всех картинок в 0
	$('div#header_banner ul li').css({opacity: 0.0});
 
	// Берем первую картинку и показываем ее (по пути включаем полную видимость)
	$('div#header_banner ul li:first').css({opacity: 1.0});
 
	// Вызываем функцию rotate для запуска слайдшоу, 5000 = смена картинок происходит раз в 5 секунд
	setInterval('rotate()',5000);
}
 
function rotate() {	
	// Берем первую картинку
	var current = ($('div#header_banner ul li.show')?  $('div#header_banner ul li.show') : $('div#header_banner ul li:first'));
 
	// Берем следующую картинку, когда дойдем до последней начинаем с начала
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#header_banner ul li:first') :current.next()) : $('div#header_banner ul li:first'));	
 
	// Расскомментируйте, чтобы показвать картинки в случайном порядке
	// var sibs = current.siblings();
	// var rndNum = Math.floor(Math.random() * sibs.length );
	// var next = $( sibs[ rndNum ] );
 
	// Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1500);
 
	// Прячем текущую картинку
	current.animate({opacity: 0.0}, 1500)
	.removeClass('show');
};
 
$(document).ready(function() {		
	// Запускаем слайдшоу
	theRotator();
});
 
/*Для menu*/
  $(document).ready(function(){
	$(".active").next("li").addClass("nav_next");
	$(".active").prev("li").addClass("nav_previous");
  });
$(function(){
  $(".user_freelance_checked").change(function(){
  $(".user_freelance").css("color","#000");
  $(".user_freelance a").css("color","#000");
  $(".user_freelance_select_categories").addClass("modal_freelance");
	$('.modal_freelance').click(function(e) {
		e.preventDefault();
	    $(".freelance_categories_modal").show();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(200);
		$('#mask').fadeTo("slow",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).fadeIn(900);
	});
	$('.freelance_categories_modal_close').click(function (e) {
		e.preventDefault();
		$('.freelance_categories_modal').hide();
		$('#mask').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.freelance_categories_modal').hide();
	});
 });
});
$(function(){
	$('.modal_freelance').click(function(e) {
		e.preventDefault();
	    $(".freelance_categories_modal").show();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(200);
		$('#mask').fadeTo("slow",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).fadeIn(900);
	});
	$('.freelance_categories_modal_close').click(function (e) {
		e.preventDefault();
		$('.freelance_categories_modal').hide();
		$('#mask').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.freelance_categories_modal').hide();
	});
 });
$(document).ready(function() {
	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(200);
		$('#mask').fadeTo("slow",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).fadeIn(900);
	});
	$('.window .close').click(function (e) {
		e.preventDefault();
		$('#mask, .window').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
});
/*Корзина*/
$(function(){
	var sum = 0;
	$(".basket_table_product_1 input").each(function(){
     sum += parseFloat($(this).val())
	})
	$(".basket_sum_product").text(sum);
})
$(function(){
	$(".basket_table_product_close a").click(function(){
		$(this).parent().parent().remove();
		var sum = 0;
		$(".basket_table_product_1 input").each(function(){
		 sum += parseFloat($(this).val())
		})
		$(".basket_sum_product").text(sum);
		})
})
/*Корзина модальное окно*/
$(function(){
	$(".open_ordering_modal").click(function(e) {
		e.preventDefault();
	    $(".ordering").show();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(200);
		$('#mask').fadeTo("slow",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).fadeIn(900);
	});
	$('.ordering_close').click(function (e) {
		e.preventDefault();
		$('.ordering').hide();
		$('#mask').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.ordering').hide();
	});
 });
 /*Написать сообщение модальное окно*/
$(function(){
	$(".open_write_message").click(function(e) {
		e.preventDefault();
	    $(".write_message_modal").show();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(200);
		$('#mask').fadeTo("slow",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).fadeIn(900);
	});
	$('.write_message_modal_close').click(function (e) {
		e.preventDefault();
		$('.write_message_modal').hide();
		$('#mask').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.write_message_modal').hide();
	});
 });
/*Регистрационная форма*/
$(function(){
	$(".add_information_close").click(function(){
		$(".add_information").hide("slow");
	});
});
$(function(){
	$(".regestration_have_cabinet_activator").change(function(){
		$(".regestration_have_cabinet input").removeAttr("disabled");
	});
});
/*Добавление запятой,модальное окно фриланс,выбранные категории*/
$(function(){
	$(".categories_modal_choice a").slice(0, -1).after("<span>,</span>");
});
/*Личный кабинет быстрая новость фокус*/
$(function(){
	$(".quick_news_bg").focusin(function(){
		$(".quick_news_focus").show("fast");
});
});
/*Клик вне элемента*/
$(document).click(function(e){
  if ($(e.target).closest(".basic_content_quick_news").length) return;
  $('.quick_news_focus').hide("fast");
  e.stopPropagation();
  });
 $(function(){
    $('.content_nav_tabs li span').click(function() {
        var click_id=$(this).attr('id');
			if (click_id != $('.content_nav_tabs li span.active').attr('id') ) {
            $('.content_nav_tabs li span').removeClass('active');
            $(this).addClass('active');
            $('.cont_tab1').removeClass('active');
            $('.cont_tab2').removeClass('active');
            $('.cont_tab3').removeClass('active');
            $('.cont_tab4').removeClass('active');
            $('.cont_' + click_id).addClass('active');
			$(".how_elements_partners").text($(".partners_row_unit:visible").size());
			$(".how_elements_friends").text($(".friends_row_unit:visible").size());
        }
    });
	})
/*Считаем количество элементов*/
$(document).ready(function(){
	$(".how_elements_partners").text($(".partners_row_unit:visible").size());
	$(".how_elements_friends").text($(".friends_row_unit:visible").size());
})
/*Оповещения*/
$(function(){
	$(".content_alert_row").change(function(){
		$(this).css("background","#ecfcc7");
	});
})
$(function(){
	$(".alert_delete").click(function(){
		$(this).parent().remove();
	});
})
/*Сообщения*/
$(function(){
	$(".content_message_row").change(function(){
		$(this).css("background","#ecfcc7");
	});
})
$(function(){
	$(".message_delete").click(function(){
		$(this).parent().remove();
	});
})
/*Скрыть показать переводчик*/
$(function(){
	$(".message_open_translator").click(function(){
		$(".basic_content_message .basic_content_translator").show("slow");
		$(".message_open_translator").text("Скрыть переводчик");
		$(".message_open_translator").addClass("translator_hide");
	});
})
$(function(){
	$(".translator_hide").click(function(){
		$(".basic_content_message .basic_content_translator").hide("slow");
		$(".message_open_translator").text("Воспользоваться переводчиком");
		$(".message_open_translator").removeClass("translator_hide");
	})
})
 $(function(){
    $('.company_page_nav_bottom li span').click(function() {
        var click_id=$(this).attr('id');
			if (click_id != $('.company_page_nav_bottom li span.active').attr('id') ) {
            $('.company_page_nav_bottom li span').removeClass('active');
            $(this).addClass('active');
            $('.cont_tab1').removeClass('active').animate();
            $('.cont_tab2').removeClass('active');
            $('.cont_tab3').removeClass('active');
            $('.cont_tab4').removeClass('active');
            $('.cont_' + click_id).addClass('active');
        }
    });
})
 $(function(){
    $('.product_page_info_tabs li span').click(function() {
        var click_id=$(this).attr('id');
			if (click_id != $('.product_page_info_tabs li span.active').attr('id') ) {
            $('.product_page_info_tabs li span').removeClass('active');
            $(this).addClass('active');
            $('.cont_tab1').removeClass('active').animate();
            $('.cont_tab2').removeClass('active');
            $('.cont_tab3').removeClass('active');
            $('.cont_tab4').removeClass('active');
            $('.cont_' + click_id).addClass('active');
        }
    });
})
 $(function(){
    $('.wrap_content_nav_tabs li span').click(function() {
        var click_id=$(this).attr('id');
			if (click_id != $('.wrap_content_nav_tabs li span.active').attr('id') ) {
            $('.wrap_content_nav_tabs li span').removeClass('active');
            $(this).addClass('active');
            $('.wrap_cont_tab1').removeClass('active').animate();
            $('.wrap_cont_tab2').removeClass('active');
            $('.wrap_cont_tab3').removeClass('active');
            $('.wrap_cont_tab4').removeClass('active');
            $('.wrap_cont_' + click_id).addClass('active');
        }
    });
})
/*Отзывы*/
$(function(){
	$(".content_reviews_row").change(function(){
		$(this).css("background","#ecfcc7");
	});
})
$(function(){
	$(".reviwes_delete").click(function(){
		$(this).parent().remove();
	});
})
/*Страница компании > Настройки > Сотрудники > Выбор сотрудников*/
$(function(){
	$(".company_page_select_styled").click(function(){
		$(".company_page_select_styled_open").slideToggle("slow");	
		/*Клик вне элемента*/
		$("body").click(function (event) {
			if ($(event.target).closest(".company_page_settings_select_rel").length === 0) {
				$(".company_page_select_styled_open").hide();
			}
		});
	})
})
/*Добавление запятой,модальное окно фриланс,выбранные категории*/
$(function(){
	$(".comapny_page_settings_choice_user li a").slice(0, -1).after("<span>,</span>");
});
$(function(){
	$(".wrap_geographi_add_button").on("click",function(){
		$(".wrap_geographi_new_agency").show();
	})
	$(".new_agency_delete").on("click",function(){
		$(".wrap_geographi_new_agency").fadeOut();
	})
})
/*Тарифы*/
$(function(){
	$(".wrap_rate_row_unit").on("click",function(){
		$(".wrap_rate_more_info").fadeIn();
	})
	$(".rate_more_info_close").on("click",function(){
		$(".wrap_rate_more_info").fadeOut();
	})
})
$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".button" ),
        lbl = wrapper.find( "mark" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});
$(function(){
	var how_wrap_services_add_galery_elements = $(".wrap_services_add_galery span").length;
	if (how_wrap_services_add_galery_elements>4){
		$(".wrap_services_add_galery_overflow .left_nav").on("click",function(){
			$(".wrap_services_add_galery").animate({'left':'-=150px'},1000);
		})
		$(".wrap_services_add_galery_overflow .right_nav").on("click",function(){
			$(".wrap_services_add_galery").animate({'left':'+=150px'},1000);
		})
	}
})